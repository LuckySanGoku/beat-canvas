import { useDroppable } from '@dnd-kit/core';

interface ShotGapDropZoneProps {
  beatId: string;
  insertAfterIndex: number;
}

export function ShotGapDropZone({ beatId, insertAfterIndex }: ShotGapDropZoneProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `gap-${beatId}-${insertAfterIndex}`,
    data: {
      type: 'shot-gap',
      beatId,
      insertAfterIndex,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={`col-span-full transition-all ${
        isOver
          ? 'bg-[#4a9eff]/30 border-2 border-dashed border-[#4a9eff] rounded h-12 my-2'
          : 'bg-transparent h-2 my-2'
      }`}
    >
      {isOver && (
        <div className="text-[10px] text-[#4a9eff] text-center py-1">
          Drop here to create new shot
        </div>
      )}
    </div>
  );
}

