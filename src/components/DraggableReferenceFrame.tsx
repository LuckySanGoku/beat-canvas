import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface DraggableReferenceFrameProps {
  frameIndex: number;
  framePath: string;
  shotId: string;
}

export function DraggableReferenceFrame({ frameIndex, framePath, shotId }: DraggableReferenceFrameProps) {
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      data-reference-frame="true"
      className="w-[60px] h-[34px] bg-[#1a1a1a] rounded border border-[#444] overflow-hidden cursor-grab active:cursor-grabbing hover:border-[#4a9eff] transition-colors relative z-50"
      title={`Drag to move frame ${frameIndex} to another shot or between shots to create new shot`}
      onClick={(e) => {
        e.stopPropagation();
      }}
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

