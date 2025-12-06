import { useRef, useEffect } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface DraggableReferenceFrameProps {
  frameIndex: number;
  framePath: string;
  shotId: string;
  onSelect?: () => void;
  isSelected?: boolean;
}

export function DraggableReferenceFrame({ frameIndex, framePath, shotId, onSelect, isSelected }: DraggableReferenceFrameProps) {
  const hasDraggedRef = useRef(false);
  const clickStartPosRef = useRef<{ x: number; y: number } | null>(null);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: `frame-${shotId}-${frameIndex}`,
    data: {
      type: 'reference-frame',
      frameIndex,
      shotId,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  // Track if drag actually happened (moved significantly)
  useEffect(() => {
    if (isDragging) {
      hasDraggedRef.current = true;
    } else {
      // When drag ends, reset after a delay
      const timer = setTimeout(() => {
        hasDraggedRef.current = false;
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isDragging]);

  // Handle pointer down to track click position
  const handlePointerDown = (e: React.PointerEvent) => {
    clickStartPosRef.current = { x: e.clientX, y: e.clientY };
    // Call original listener to allow drag
    if (listeners?.onPointerDown) {
      listeners.onPointerDown(e);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if this was actually a click (minimal movement) or a drag
    let wasClick = false;
    if (clickStartPosRef.current && e.clientX !== undefined && e.clientY !== undefined) {
      const distance = Math.sqrt(
        Math.pow(e.clientX - clickStartPosRef.current.x, 2) +
        Math.pow(e.clientY - clickStartPosRef.current.y, 2)
      );
      // Less than 10px movement = click (activation constraint is 8px, so 10px is safe)
      wasClick = distance < 10;
    } else {
      // If we don't have position info, assume it's a click if drag didn't happen
      wasClick = !hasDraggedRef.current;
    }
    
    clickStartPosRef.current = null;
    
    // Only handle click if it was actually a click (not a drag)
    if (wasClick && !isDragging && onSelect) {
      // Small delay to ensure drag handlers have finished
      setTimeout(() => {
        // Double-check that drag didn't happen during the delay
        if (!isDragging && onSelect) {
          onSelect();
        }
      }, 100);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(listeners ? { ...listeners, onPointerDown: handlePointerDown } : {})}
      data-reference-frame="true"
      className={`w-[60px] h-[34px] bg-[#1a1a1a] rounded border overflow-hidden cursor-grab active:cursor-grabbing hover:border-[#4a9eff] transition-colors relative z-50 ${
        isSelected ? 'border-[#4a9eff] ring-2 ring-[#4a9eff]' : 'border-[#444]'
      }`}
      title={`Click to preview, drag to move frame ${frameIndex} to another shot or between shots to create new shot`}
      onClick={handleClick}
    >
      <img
        src={framePath}
        alt={`Reference ${frameIndex}`}
        className="w-full h-full object-cover rounded pointer-events-none"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
        draggable={false}
      />
    </div>
  );
}
