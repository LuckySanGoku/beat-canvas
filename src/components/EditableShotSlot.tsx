import { useState, useEffect, useRef } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Shot } from '../types';
import { getFramePaths, getPrimaryFramePath, getFramePathByIndex } from '../utils/frameMapping';
import { useProjectStore } from '../stores/projectStore';
import { DraggableReferenceFrame } from './DraggableReferenceFrame';

interface EditableShotSlotProps {
  shot: Shot;
  showReference: boolean;
  previousBeatsShots?: number[]; // Optional, not used anymore but kept for compatibility
}

export function EditableShotSlot({ shot, showReference }: EditableShotSlotProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState<'shotNumber' | 'description' | 'tags' | null>(null);
  const [tempDescription, setTempDescription] = useState(shot.reference.description);
  const [tempShotNumber, setTempShotNumber] = useState(shot.custom_shot_number || `${shot.beat}.${shot.position_in_beat}`);
  const [tempTag, setTempTag] = useState('');
  const [selectedReferenceFrameIndex, setSelectedReferenceFrameIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Update tempShotNumber when shot changes
  useEffect(() => {
    setTempShotNumber(shot.custom_shot_number || `${shot.beat}.${shot.position_in_beat}`);
  }, [shot.custom_shot_number, shot.beat, shot.position_in_beat]);
  
  const {
    attributes: sortableAttributes,
    listeners: sortableListeners,
    setNodeRef: setSortableRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: shot.shot_id });

  const {
    setNodeRef: setDroppableRef,
    isOver,
  } = useDroppable({
    id: `shot-drop-${shot.shot_id}`,
    data: {
      type: 'shot-drop',
      shotId: shot.shot_id,
    },
  });

  // Top-left: insert BEFORE this shot
  const { setNodeRef: setInsertBeforeRef, isOver: isOverBefore } = useDroppable({
    id: `before-${shot.shot_id}`,
    data: { 
      type: 'insert-before', 
      shotId: shot.shot_id, 
      beatId: `beat${shot.beat}` 
    },
  });

  // Top-right: insert AFTER this shot
  const { setNodeRef: setInsertAfterRef, isOver: isOverAfter } = useDroppable({
    id: `after-${shot.shot_id}`,
    data: { 
      type: 'insert-after', 
      shotId: shot.shot_id, 
      beatId: `beat${shot.beat}` 
    },
  });

  // Only set sortable ref on main container
  const setNodeRef = setSortableRef;
  
  const {
    updateShotDescription,
    updateCustomShotNumber,
    addTagToShot,
    removeTagFromShot,
    deleteShot,
    uploadGeneratedVersion,
    setActiveVersion,
    deleteGeneratedVersion,
  } = useProjectStore();
  
  const displayShotNumber = shot.custom_shot_number || `${shot.beat}.${shot.position_in_beat}`;
  
  // Get frame paths for this shot (supports multiple keyframes)
  const referenceFramePaths = getFramePaths(shot);
  const primaryFramePath = getPrimaryFramePath(shot);
  const hasNoReferences = !shot.frame_indices || shot.frame_indices.length === 0;

  // Determine which image to show in placeholder
  const activeGeneratedVersion = shot.active_version !== null
    ? shot.generated_versions.find(v => v.version === shot.active_version)
    : null;
  
  // If a reference frame is selected, use that; otherwise use active generated version or primary frame
  const displayImagePath = selectedReferenceFrameIndex !== null && shot.frame_indices
    ? getFramePathByIndex(shot.frame_indices[selectedReferenceFrameIndex])
    : activeGeneratedVersion?.thumbnail || primaryFramePath;
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };
  
  const handleDescriptionSave = () => {
    updateShotDescription(shot.shot_id, tempDescription);
    setEditingField(null);
  };
  
  const handleAddTag = () => {
    if (tempTag.trim() && !shot.reference.technique_tags.includes(tempTag.trim())) {
      addTagToShot(shot.shot_id, tempTag.trim());
      setTempTag('');
    }
  };
  
  const handleRemoveTag = (tag: string) => {
    removeTagFromShot(shot.shot_id, tag);
  };
  
  const handleShotNumberSave = () => {
    if (tempShotNumber.trim() && tempShotNumber !== displayShotNumber) {
      updateCustomShotNumber(shot.shot_id, tempShotNumber.trim());
    }
    setEditingField(null);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      await uploadGeneratedVersion(shot.shot_id, file);
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-[#2a2a2a] rounded-md overflow-hidden border ${
        isOver ? 'border-[#4a9eff] ring-2 ring-[#4a9eff]' : 'border-[#3a3a3a]'
      } cursor-grab active:cursor-grabbing relative`}
      {...sortableAttributes}
      {...(sortableListeners ? Object.fromEntries(
        Object.entries(sortableListeners).map(([key, value]) => {
          if (key === 'onPointerDown') {
            return [key, (e: React.PointerEvent) => {
              // Don't activate sortable if clicking on reference frame, delete button, or upload button
              const target = e.target as HTMLElement;
              if (target.closest('[data-reference-frame]') || 
                  target.closest('[data-delete-shot]') || 
                  target.closest('[data-upload-button]') ||
                  target.closest('[data-delete-version]')) {
                return;
              }
              // Call original handler
              if (typeof value === 'function') {
                value(e as any);
              }
            }];
          }
          return [key, value];
        })
      ) : {})}
    >
      {/* Delete button - only show if shot has no references */}
      {hasNoReferences && (
        <button
          data-delete-shot="true"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (confirm('Delete this shot?')) {
              deleteShot(shot.shot_id);
            }
          }}
          onPointerDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className="absolute top-2 right-2 z-50 w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg pointer-events-auto"
          title="Delete shot"
        >
          ×
        </button>
      )}
      {/* Top-left corner: INSERT BEFORE */}
      <div
        ref={setInsertBeforeRef}
        className={`absolute top-0 left-0 w-1/3 h-16 z-30 transition-all pointer-events-auto ${
          isOverBefore 
            ? 'bg-[#4a9eff]/40 border-2 border-[#4a9eff] rounded-tl' 
            : 'bg-transparent'
        }`}
      >
        {isOverBefore && (
          <div className="text-[10px] text-white bg-[#4a9eff] px-2 py-1 rounded m-1">
            ← Insert before
          </div>
        )}
      </div>

      {/* Top-right corner: INSERT AFTER */}
      <div
        ref={setInsertAfterRef}
        className={`absolute top-0 right-0 w-1/3 h-16 z-30 transition-all pointer-events-auto ${
          isOverAfter 
            ? 'bg-[#4a9eff]/40 border-2 border-[#4a9eff] rounded-tr' 
            : 'bg-transparent'
        }`}
      >
        {isOverAfter && (
          <div className="text-[10px] text-white bg-[#4a9eff] px-2 py-1 rounded m-1">
            Insert after →
          </div>
        )}
      </div>

      {/* Drop zone overlay for reference frames - shows feedback when dragging (add to shot) */}
      {/* This zone must always be active to receive drops, but only show visual feedback when hovered */}
      {/* Use clipPath to exclude top corners where insert-before/after zones are */}
      <div
        ref={setDroppableRef}
        className={`absolute inset-0 z-10 transition-all pointer-events-auto ${
          isOver ? 'bg-[#4a9eff]/20 border-2 border-dashed border-[#4a9eff] rounded' : ''
        }`}
        style={{
          // Exclude top corners where insert-before/after zones are (top 64px)
          clipPath: 'polygon(0 64px, 100% 64px, 100% 100%, 0 100%)',
        }}
      >
        {isOver && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-[#4a9eff] text-white px-4 py-2 rounded text-sm font-semibold shadow-lg">
              Drop here to add
            </div>
          </div>
        )}
      </div>
      {/* Thumbnail - 16:9 aspect ratio */}
      <div className="w-full aspect-video bg-[#1a1a1a] flex items-center justify-center text-[#666] text-xs relative overflow-hidden">
        {displayImagePath ? (
          <img
            src={displayImagePath}
            alt={shot.reference.description}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.placeholder');
              if (placeholder) {
                (placeholder as HTMLElement).style.display = 'flex';
              }
            }}
          />
        ) : (
          // Fallback placeholder if no image
          <div className="w-full h-full flex items-center justify-center text-[#999] font-semibold">
            TO BE GENERATED
          </div>
        )}
        <div className="placeholder hidden absolute inset-0 items-center justify-center bg-[#1a1a1a] text-[#666] text-xs">
          No image
        </div>
      </div>
      
      {/* Shot info */}
      <div className="p-3" onDoubleClick={() => setIsEditing(!isEditing)}>
        {/* Shot number - editable */}
        {editingField === 'shotNumber' ? (
          <div className="mb-1.5">
            <input
              type="text"
              value={tempShotNumber}
              onChange={(e) => setTempShotNumber(e.target.value)}
              onBlur={handleShotNumberSave}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleShotNumberSave();
                }
                if (e.key === 'Escape') {
                  setTempShotNumber(displayShotNumber);
                  setEditingField(null);
                }
              }}
              className="w-full text-xs text-[#4a9eff] font-semibold bg-[#1a1a1a] border border-[#444] rounded px-2 py-1 focus:outline-none focus:border-[#4a9eff]"
              autoFocus
              onClick={(e) => e.stopPropagation()}
              placeholder="e.g., 1.7.2"
            />
            <div className="text-[10px] text-[#666] mt-1">Enter to save, Esc to cancel</div>
          </div>
        ) : (
          <div className="text-xs text-[#4a9eff] font-semibold mb-1.5 flex items-center gap-2">
            <span
              className="cursor-text hover:bg-[#333]/30 rounded px-1 py-0.5 -mx-1"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setEditingField('shotNumber');
                setTempShotNumber(displayShotNumber);
                setIsEditing(true);
              }}
              onMouseDown={(e) => {
                // Prevent drag when clicking on shot number
                e.stopPropagation();
              }}
            >
              SHOT {displayShotNumber}
            </span>
            {isEditing && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(false);
                  setEditingField(null);
                }}
                className="text-[10px] text-[#999] hover:text-[#ccc]"
              >
                ✕
              </button>
            )}
          </div>
        )}
        
        {/* Description - editable */}
        {editingField === 'description' ? (
          <div className="mb-2.5">
            <textarea
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
              onBlur={handleDescriptionSave}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.metaKey) {
                  handleDescriptionSave();
                }
                if (e.key === 'Escape') {
                  setTempDescription(shot.reference.description);
                  setEditingField(null);
                }
              }}
              className="w-full text-[13px] leading-snug text-[#ccc] bg-[#1a1a1a] border border-[#444] rounded px-2 py-1 resize-none focus:outline-none focus:border-[#4a9eff]"
              autoFocus
              rows={3}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-[10px] text-[#666] mt-1">Cmd+Enter to save, Esc to cancel</div>
          </div>
        ) : (
          <div
            className="text-[13px] leading-snug mb-2.5 text-[#ccc] cursor-text hover:bg-[#333]/30 rounded px-1 py-0.5 -mx-1"
            onClick={(e) => {
              if (isEditing) {
                e.stopPropagation();
                setEditingField('description');
                setTempDescription(shot.reference.description);
              }
            }}
          >
            {shot.reference.description}
          </div>
        )}
        
        {/* Detail tags */}
        <div className="flex flex-wrap gap-2 text-[11px] mb-0">
          <span className="bg-[#3a3a3a] px-2 py-1 rounded text-[#999]">
            {shot.reference.timing}s
          </span>
          <span className="bg-[#3a3a3a] px-2 py-1 rounded text-[#999]">
            {shot.reference.size}
          </span>
          {shot.reference.angle && (
            <span className="bg-[#3a3a3a] px-2 py-1 rounded text-[#999]">
              {shot.reference.angle}
            </span>
          )}
          {shot.reference.technique_tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-[#3a3a3a] px-2 py-1 rounded text-[#999] flex items-center gap-1 group"
            >
              {tag}
              {isEditing && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveTag(tag);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-[#999] hover:text-red-400 text-[10px]"
                >
                  ×
                </button>
              )}
            </span>
          ))}
          {isEditing && editingField === 'tags' && (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={tempTag}
                onChange={(e) => setTempTag(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddTag();
                  }
                  if (e.key === 'Escape') {
                    setTempTag('');
                    setEditingField(null);
                  }
                }}
                placeholder="Add tag..."
                className="bg-[#1a1a1a] border border-[#444] rounded px-2 py-1 text-[11px] text-[#ccc] w-20 focus:outline-none focus:border-[#4a9eff]"
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddTag();
                }}
                className="bg-[#4a9eff] text-white px-2 py-1 rounded text-[10px] hover:bg-[#3a8eef]"
              >
                +
              </button>
            </div>
          )}
          {isEditing && editingField !== 'tags' && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEditingField('tags');
              }}
              className="bg-[#3a3a3a] px-2 py-1 rounded text-[#999] hover:bg-[#444] text-[10px]"
            >
              + Tag
            </button>
          )}
            </div>

            {/* Upload button */}
            <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                data-upload-button="true"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  fileInputRef.current?.click();
                }}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                className="w-full px-3 py-2 text-xs bg-[#3a3a3a] hover:bg-[#4a4a4a] text-[#ccc] rounded border border-[#555] transition-colors pointer-events-auto"
              >
                📤 Upload Generated Shot
              </button>
            </div>

            {/* Generated versions section */}
            {shot.generated_versions.length > 0 && (
              <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
                <div className="text-[11px] text-[#888] font-semibold mb-2">
                  Generated Versions
                </div>
                <div className="flex gap-2 flex-wrap">
                  {shot.generated_versions.map((version) => (
                    <div
                      key={version.version}
                      className={`relative w-[60px] h-[34px] bg-[#1a1a1a] rounded border overflow-hidden cursor-pointer transition-colors group ${
                        shot.active_version === version.version
                          ? 'border-[#4a9eff] ring-2 ring-[#4a9eff]'
                          : 'border-[#444] hover:border-[#4a9eff]'
                      }`}
                      title={`Version ${version.version} - Click to set as active`}
                    >
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveVersion(shot.shot_id, version.version);
                          setSelectedReferenceFrameIndex(null); // Clear reference selection when selecting generated version
                        }}
                        className="w-full h-full"
                      >
                        <img
                          src={version.thumbnail}
                          alt={`Version ${version.version}`}
                          className="w-full h-full object-cover rounded pointer-events-none"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                          draggable={false}
                        />
                      </div>
                      {/* Delete button */}
                      <button
                        data-delete-version="true"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          if (confirm(`Delete version ${version.version}?`)) {
                            deleteGeneratedVersion(shot.shot_id, version.version);
                            // If this was the active version, clear it
                            if (shot.active_version === version.version) {
                              setActiveVersion(shot.shot_id, null);
                            }
                          }
                        }}
                        onPointerDown={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        className="absolute top-0 right-0 w-4 h-4 bg-red-600 hover:bg-red-700 text-white rounded-bl text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto z-10"
                        title="Delete version"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reference section (toggleable) */}
            {showReference && referenceFramePaths.length > 0 && (
              <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
                <div className="text-[11px] text-[#888] font-semibold mb-2">
                  ↓ Lurpak Reference (click to preview, drag to move between shots)
                </div>
                <div className="flex gap-2 flex-wrap">
                  {shot.frame_indices?.map((frameIndex, index) => (
                    <DraggableReferenceFrame
                      key={frameIndex}
                      frameIndex={frameIndex}
                      framePath={getFramePathByIndex(frameIndex)}
                      shotId={shot.shot_id}
                      onSelect={() => {
                        setSelectedReferenceFrameIndex(index);
                        setActiveVersion(shot.shot_id, null); // Clear active generated version when selecting reference
                      }}
                      isSelected={selectedReferenceFrameIndex === index}
                    />
                  ))}
                </div>
              </div>
            )}
      </div>
    </div>
  );
}

