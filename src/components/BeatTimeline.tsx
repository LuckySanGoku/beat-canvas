import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import type { DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import {
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useProjectStore } from '../stores/projectStore';
import { BeatSection } from './BeatSection';
import type { Shot } from '../types';
import { getFramePathByIndex } from '../utils/frameMapping';

export function BeatTimeline() {
  const { beats, showReferences, toggleReferences, moveShotBetweenBeats, reorderShotsInBeat, moveFrameIndexToShot, createShotFromFrame } = useProjectStore();
  const [activeShot, setActiveShot] = useState<Shot | null>(null);
  const [activeFrame, setActiveFrame] = useState<{ frameIndex: number; framePath: string } | null>(null);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Movement required to start drag - prevents clicks from triggering
        delay: 0,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const activeData = active.data.current;
    
    // Check if dragging a reference frame
    if (activeData?.type === 'reference-frame') {
      const { frameIndex } = activeData;
      const framePath = getFramePathByIndex(frameIndex);
      setActiveFrame({ frameIndex, framePath });
      return;
    }
    
    // Find the shot being dragged
    for (const beat of beats) {
      const shot = beat.shots.find((s) => s.shot_id === active.id);
      if (shot) {
        setActiveShot(shot);
        break;
      }
    }
  };
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    setActiveShot(null);
    setActiveFrame(null);
    
    if (!over) {
      return;
    }
    
    // Check if this is a reference frame drag
    const activeData = active.data.current;
    if (activeData?.type === 'reference-frame') {
      // If dropped on the same element, it's a click - ignore (let onClick handle it)
      if (active.id === over.id) {
        return;
      }
      
      // Real drag - process it
      
      const { frameIndex, shotId: fromShotId } = activeData;
      const overData = over.data.current;
      
      // PRIORITY 1: Insert BEFORE a shot
      if (overData?.type === 'insert-before') {
        const { shotId: beforeShotId, beatId } = overData;
        const beat = beats.find(b => b.beat_id === beatId);
        if (beat) {
          const index = beat.shots.findIndex(s => s.shot_id === beforeShotId);
          if (index !== -1) {
            createShotFromFrame(frameIndex, fromShotId, beatId, index - 1);
          }
        }
        return;
      }

      // PRIORITY 2: Insert AFTER a shot
      if (overData?.type === 'insert-after') {
        const { shotId: afterShotId, beatId } = overData;
        const beat = beats.find(b => b.beat_id === beatId);
        if (beat) {
          const index = beat.shots.findIndex(s => s.shot_id === afterShotId);
          if (index !== -1) {
            createShotFromFrame(frameIndex, fromShotId, beatId, index);
          }
        }
        return;
      }

      // PRIORITY 3: Check if dropped on shot-drop- prefix (check this BEFORE beat-section to catch shot drops)
      if (typeof over.id === 'string' && over.id.startsWith('shot-drop-')) {
        const toShotId = over.id.replace('shot-drop-', '');
        if (fromShotId !== toShotId) {
          moveFrameIndexToShot(frameIndex, fromShotId, toShotId);
          setActiveShot(null);
          setActiveFrame(null);
          return;
        }
      }
      
      // PRIORITY 4: Check if dropped on a shot drop zone (add to existing shot)
      if (overData?.type === 'shot-drop') {
        const toShotId = overData.shotId;
        if (fromShotId !== toShotId) {
          moveFrameIndexToShot(frameIndex, fromShotId, toShotId);
          setActiveShot(null);
          setActiveFrame(null);
          return;
        }
      }
      
      // PRIORITY 5: Check if dropped directly on a shot (the sortable ID) - works across beats
      for (const beat of beats) {
        const shot = beat.shots.find((s) => s.shot_id === over.id);
        if (shot && shot.shot_id !== fromShotId) {
          moveFrameIndexToShot(frameIndex, fromShotId, shot.shot_id);
          setActiveShot(null);
          setActiveFrame(null);
          return;
        }
      }
      
      // PRIORITY 6: Check if dropped on beat section (empty space) - creates new shot at end
      if (overData?.type === 'beat-section') {
        const beatId = overData.beatId;
        const targetBeat = beats.find((b) => b.beat_id === beatId);
        if (targetBeat) {
          // Create new shot at the end of the beat
          createShotFromFrame(frameIndex, fromShotId, beatId, targetBeat.shots.length - 1);
          setActiveShot(null);
          setActiveFrame(null);
          return;
        }
      }
      
      // PRIORITY 7: Check if dropped on beat section by ID (fallback)
      const overBeat = beats.find((b) => b.beat_id === over.id);
      if (overBeat) {
        // Create new shot at the end of the beat
        createShotFromFrame(frameIndex, fromShotId, overBeat.beat_id, overBeat.shots.length - 1);
        setActiveShot(null);
        setActiveFrame(null);
        return;
      }
      
      // If dropped anywhere else, do nothing (returns to original position)
      setActiveShot(null);
      setActiveFrame(null);
      return;
    }
    
    // Clean up for shot drags
    setActiveShot(null);
    setActiveFrame(null);
    
    // If no drop target, do nothing
    if (!over) return;
    
    // Regular shot drag
    // Find source beat
    let sourceBeatId = '';
    let sourceIndex = -1;
    for (const beat of beats) {
      const index = beat.shots.findIndex((s) => s.shot_id === active.id);
      if (index !== -1) {
        sourceBeatId = beat.beat_id;
        sourceIndex = index;
        break;
      }
    }
    
    if (sourceBeatId === '') return;
    
    // Find target beat
    let targetBeatId = '';
    let targetIndex = -1;
    
    // Check if over is a beat section (by data type first, then by ID)
    const overData = over.data.current;
    if (overData?.type === 'beat-section') {
      targetBeatId = overData.beatId;
      const targetBeat = beats.find((b) => b.beat_id === targetBeatId);
      if (targetBeat) {
        targetIndex = targetBeat.shots.length; // Add to end
      }
    } else {
      // Check if over is a beat section by ID
      const overBeat = beats.find((b) => b.beat_id === over.id);
      if (overBeat) {
        targetBeatId = overBeat.beat_id;
        targetIndex = overBeat.shots.length; // Add to end
      } else {
        // Check if over is a shot
        for (const beat of beats) {
          const index = beat.shots.findIndex((s) => s.shot_id === over.id);
          if (index !== -1) {
            targetBeatId = beat.beat_id;
            targetIndex = index;
            break;
          }
        }
      }
    }
    
    if (targetBeatId === '') return;
    
    // Handle reordering within same beat
    if (sourceBeatId === targetBeatId) {
      if (sourceIndex !== targetIndex) {
        reorderShotsInBeat(sourceBeatId, sourceIndex, targetIndex);
      }
    } else {
      // Move shot between beats
      moveShotBetweenBeats(active.id as string, sourceBeatId, targetBeatId, targetIndex);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="w-full min-h-screen bg-[#1a1a1a] text-[#e0e0e0] p-5" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        {/* Header */}
        <div className="max-w-[1400px] mx-auto mb-8 p-5 bg-[#252525] rounded-lg">
          <h1 className="text-[28px] mb-2.5">Beat Canvas - Teeth Brushing Commercial</h1>
          <p className="text-sm text-[#999] mb-4">Shot-by-shot transposition workspace</p>
          
          {/* Controls */}
          <div className="flex gap-4 mt-4 items-center">
            <button
              onClick={toggleReferences}
              className={`px-4 py-2 text-sm rounded border transition-colors ${
                showReferences
                  ? 'bg-[#0066cc] border-[#0066cc] text-white'
                  : 'bg-[#3a3a3a] border-[#555] text-[#e0e0e0] hover:bg-[#444]'
              }`}
            >
              {showReferences ? 'Hide Reference Shots' : 'Show Reference Shots'}
            </button>
            <div className="text-xs text-[#666] flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Auto-saving to browser storage
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="space-y-10">
          {beats.map((beat, index) => {
            const prevShots = beats.slice(0, index).map(b => b.shots.length);
            return (
              <BeatSection 
                key={beat.beat_id} 
                beat={beat} 
                showReference={showReferences}
                previousBeatsShots={prevShots}
              />
            );
          })}
        </div>
      </div>
      
      <DragOverlay>
        {activeFrame ? (
          <div className="bg-[#2a2a2a] rounded border border-[#4a9eff] opacity-90 rotate-2 scale-105 shadow-2xl w-[60px]">
            <img
              src={activeFrame.framePath}
              alt="Reference frame"
              className="w-full h-full object-cover rounded"
            />
          </div>
        ) : activeShot ? (
          <div className="bg-[#2a2a2a] rounded-md border border-[#3a3a3a] opacity-90 rotate-2 scale-105 shadow-2xl w-[280px]">
            <div className="w-full aspect-video bg-[#1a1a1a]"></div>
            <div className="p-3">
              <div className="text-xs text-[#4a9eff] font-semibold mb-1.5">
                SHOT {activeShot.beat}.{activeShot.position_in_beat}
              </div>
              <div className="text-[13px] text-[#ccc] line-clamp-2">
                {activeShot.reference.description}
              </div>
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

