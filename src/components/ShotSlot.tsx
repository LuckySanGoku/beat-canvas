import type { Shot } from '../types';
import { getFramePaths } from '../utils/frameMapping';

interface ShotSlotProps {
  shot: Shot;
  showReference: boolean;
  previousBeatsShots: number[];
}

export function ShotSlot({ shot, showReference }: ShotSlotProps) {
  const referenceFramePaths = getFramePaths(shot);
  const primaryFramePath = referenceFramePaths[0] || '';
  
  return (
    <div className="bg-[#2a2a2a] rounded-md overflow-hidden border border-[#3a3a3a]">
      {/* Thumbnail - 16:9 aspect ratio */}
      <div className="w-full aspect-video bg-[#1a1a1a] flex items-center justify-center text-[#666] text-xs relative overflow-hidden">
        {primaryFramePath ? (
          <img
            src={primaryFramePath}
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
        ) : null}
        <div className="placeholder hidden absolute inset-0 items-center justify-center bg-[#1a1a1a] text-[#666] text-xs">
          {shot.generated_versions.length === 0 ? 'Empty slot' : 'No image'}
        </div>
      </div>
      
      {/* Shot info */}
      <div className="p-3">
        {/* Shot number */}
        <div className="text-xs text-[#4a9eff] font-semibold mb-1.5">
          SHOT {shot.beat}.{shot.position_in_beat}
        </div>
        
        {/* Description */}
        <div className="text-[13px] leading-snug mb-2.5 text-[#ccc]">
          {shot.reference.description}
        </div>
        
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
            <span key={idx} className="bg-[#3a3a3a] px-2 py-1 rounded text-[#999]">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Reference section (toggleable) */}
        {showReference && referenceFramePaths.length > 0 && (
          <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
            <div className="text-[11px] text-[#888] font-semibold mb-2">
              ↓ Lurpak Reference
            </div>
            <div className="flex gap-2 flex-wrap">
              {referenceFramePaths.map((framePath, idx) => (
                <div key={idx} className="w-[60px] h-[34px] bg-[#1a1a1a] rounded border border-[#444] overflow-hidden">
                  <img
                    src={framePath}
                    alt={`Reference ${idx + 1}`}
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

