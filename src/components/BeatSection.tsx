import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import type { Beat } from '../types';
import { EditableShotSlot } from './EditableShotSlot';

interface BeatSectionProps {
  beat: Beat;
  showReference: boolean;
  previousBeatsShots: number[];
}

export function BeatSection({ beat, showReference, previousBeatsShots }: BeatSectionProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: beat.beat_id,
    data: {
      type: 'beat-section',
      beatId: beat.beat_id,
    },
  });
  
  return (
    <div
      ref={setNodeRef}
      className={`max-w-[1400px] mx-auto mb-10 bg-[#252525] rounded-lg p-5 transition-colors relative ${
        isOver ? 'ring-2 ring-[#4a9eff] ring-offset-2 ring-offset-[#1a1a1a]' : ''
      }`}
    >
      {/* Visual feedback when dragging reference frame over beat section (between shots) */}
      {isOver && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <div className="bg-[#4a9eff]/20 border-2 border-dashed border-[#4a9eff] rounded-lg p-4">
            <div className="text-[#4a9eff] text-sm font-semibold">
              Drop here to create new shot
            </div>
          </div>
        </div>
      )}
      {/* Beat header */}
      <div className="mb-5 pb-4 border-b-2 border-[#3a3a3a]">
        <h2 className="text-2xl mb-2 text-[#4a9eff]">
          Beat {beat.beat_id.replace('beat', '')}: {beat.name}
        </h2>
        <div className="flex gap-5 text-sm text-[#999]">
          <span>Duration: {beat.duration_target}s</span>
          <span>{beat.shots.length} shots</span>
          <span>Energy: {beat.energy}</span>
        </div>
      </div>
      
      {/* Shot grid */}
      <SortableContext items={beat.shots.map((s) => s.shot_id)} strategy={rectSortingStrategy}>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {beat.shots.map((shot) => (
            <EditableShotSlot
              key={shot.shot_id}
              shot={shot}
              showReference={showReference}
              previousBeatsShots={previousBeatsShots}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
