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
  const pointerDownRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const hasMovedRef = useRef(false);

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

  // Reset when drag ends
  useEffect(() => {
    if (!isDragging) {
      hasMovedRef.current = false;
      pointerDownRef.current = null;
    }
  }, [isDragging]);

  // Custom pointer down handler that tracks movement
  const handlePointerDown = (e: React.PointerEvent) => {
    // Store initial position
    pointerDownRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
    hasMovedRef.current = false;

    // Track movement globally
    const handleMove = (moveEvent: PointerEvent) => {
      if (pointerDownRef.current) {
        const distance = Math.sqrt(
          Math.pow(moveEvent.clientX - pointerDownRef.current.x, 2) +
          Math.pow(moveEvent.clientY - pointerDownRef.current.y, 2)
        );
        // If moved more than 8px, it's a drag
        if (distance > 8) {
          hasMovedRef.current = true;
        }
      }
    };

    const handleUp = (upEvent: PointerEvent) => {
      // Clean up
      document.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerup', handleUp);

      // If no movement detected, it was a click
      if (pointerDownRef.current && !hasMovedRef.current && !isDragging) {
        const distance = Math.sqrt(
          Math.pow(upEvent.clientX - pointerDownRef.current.x, 2) +
          Math.pow(upEvent.clientY - pointerDownRef.current.y, 2)
        );
        const duration = Date.now() - pointerDownRef.current.time;

        // If moved less than 8px and duration < 500ms, treat as click
        if (distance < 8 && duration < 500 && onSelect) {
          // Prevent any drag behavior
          upEvent.preventDefault();
          upEvent.stopPropagation();
          // Call onSelect
          onSelect();
        }
      }

      pointerDownRef.current = null;
    };

    // Add global listeners
    document.addEventListener('pointermove', handleMove);
    document.addEventListener('pointerup', handleUp);

    // Also call the original drag listener (activation constraint will prevent drag if no movement)
    if (listeners?.onPointerDown) {
      listeners.onPointerDown(e);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      // Override onPointerDown to track movement, but still allow drag listeners
      onPointerDown={handlePointerDown}
      data-reference-frame="true"
      className={`w-[60px] h-[34px] bg-[#1a1a1a] rounded border overflow-hidden cursor-pointer hover:border-[#4a9eff] transition-colors relative z-50 ${
        isSelected ? 'border-[#4a9eff] ring-2 ring-[#4a9eff]' : 'border-[#444]'
      }`}
      title={`Click to preview, drag to move frame ${frameIndex} to another shot or between shots to create new shot`}
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
