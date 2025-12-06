import { create } from 'zustand';
import type { Beat, Shot } from '../types';
import { beats } from '../data/beats';

interface ProjectStore {
  beats: Beat[];
  showReferences: boolean;
  toggleReferences: () => void;
  reorderShotsInBeat: (beatId: string, startIndex: number, endIndex: number) => void;
  moveShotBetweenBeats: (shotId: string, fromBeatId: string, toBeatId: string, toIndex: number) => void;
  updateShot: (shotId: string, updates: Partial<Shot>) => void;
  updateShotDescription: (shotId: string, description: string) => void;
  updateShotNumber: (shotId: string, beat: number, positionInBeat: number) => void;
  updateCustomShotNumber: (shotId: string, customNumber: string) => void;
  addTagToShot: (shotId: string, tag: string) => void;
  removeTagFromShot: (shotId: string, tag: string) => void;
  // Reference frame drag and drop
  moveFrameIndexToShot: (frameIndex: number, fromShotId: string, toShotId: string) => void;
  createShotFromFrame: (frameIndex: number, fromShotId: string, toBeatId: string, insertAfterIndex: number) => void;
  splitShotAtFrame: (shotId: string, frameIndex: number) => void;
  // Delete shot
  deleteShot: (shotId: string) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  beats: beats,
  showReferences: true,
  toggleReferences: () => set((state) => ({ showReferences: !state.showReferences })),
  
  reorderShotsInBeat: (beatId, startIndex, endIndex) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => {
        if (beat.beat_id !== beatId) return beat;
        
        const newShots = [...beat.shots];
        const [removed] = newShots.splice(startIndex, 1);
        newShots.splice(endIndex, 0, removed);
        
        // Update position_in_beat for all shots
        const updatedShots = newShots.map((shot, index) => ({
          ...shot,
          position_in_beat: index + 1,
        }));
        
        return { ...beat, shots: updatedShots };
      });
      
      return { beats: newBeats };
    });
  },
  
  moveShotBetweenBeats: (shotId, fromBeatId, toBeatId, toIndex) => {
    set((state) => {
      const newBeats = [...state.beats];
      
      // Find and remove shot from source beat
      const fromBeatIndex = newBeats.findIndex((b) => b.beat_id === fromBeatId);
      const toBeatIndex = newBeats.findIndex((b) => b.beat_id === toBeatId);
      
      if (fromBeatIndex === -1 || toBeatIndex === -1) return state;
      
      const fromBeat = newBeats[fromBeatIndex];
      const shotIndex = fromBeat.shots.findIndex((s) => s.shot_id === shotId);
      if (shotIndex === -1) return state;
      
      const [shot] = fromBeat.shots.splice(shotIndex, 1);
      
      // Update shot's beat and position
      const updatedShot = {
        ...shot,
        beat: parseInt(toBeatId.replace('beat', '')),
        position_in_beat: toIndex + 1,
      };
      
      // Insert into target beat
      const toBeat = newBeats[toBeatIndex];
      toBeat.shots.splice(toIndex, 0, updatedShot);
      
      // Update positions in both beats
      fromBeat.shots = fromBeat.shots.map((s, i) => ({
        ...s,
        position_in_beat: i + 1,
      }));
      
      toBeat.shots = toBeat.shots.map((s, i) => ({
        ...s,
        position_in_beat: i + 1,
      }));
      
      return { beats: newBeats };
    });
  },
  
  updateShot: (shotId, updates) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => ({
        ...beat,
        shots: beat.shots.map((shot) =>
          shot.shot_id === shotId ? { ...shot, ...updates } : shot
        ),
      }));
      return { beats: newBeats };
    });
  },
  
  updateShotDescription: (shotId, description) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => ({
        ...beat,
        shots: beat.shots.map((shot) =>
          shot.shot_id === shotId
            ? {
                ...shot,
                reference: { ...shot.reference, description },
              }
            : shot
        ),
      }));
      return { beats: newBeats };
    });
  },
  
  updateShotNumber: (shotId, beat, positionInBeat) => {
    set((state) => {
      const newBeats = state.beats.map((b) => ({
        ...b,
        shots: b.shots.map((shot) =>
          shot.shot_id === shotId
            ? { ...shot, beat, position_in_beat: positionInBeat }
            : shot
        ),
      }));
      return { beats: newBeats };
    });
  },
  
  updateCustomShotNumber: (shotId, customNumber) => {
    set((state) => {
      // Parse the custom number (e.g., "1.7.2" or "1.8")
      const parts = customNumber.split('.').map((p) => parseInt(p, 10));
      
      // Find the shot being renamed
      let sourceBeatId = '';
      let sourceIndex = -1;
      let shot = null;
      
      for (const beat of state.beats) {
        const index = beat.shots.findIndex((s) => s.shot_id === shotId);
        if (index !== -1) {
          sourceBeatId = beat.beat_id;
          sourceIndex = index;
          shot = beat.shots[index];
          break;
        }
      }
      
      if (!shot || sourceBeatId === '') return state;
      
      // If invalid format, just update the custom number without moving
      if (parts.length < 2 || parts.some(isNaN)) {
        const newBeats = state.beats.map((beat) => ({
          ...beat,
          shots: beat.shots.map((s) =>
            s.shot_id === shotId
              ? { ...s, custom_shot_number: customNumber }
              : s
          ),
        }));
        return { beats: newBeats };
      }
      
      const targetBeat = parts[0];
      const targetPosition = parts[1];
      const targetBeatId = `beat${targetBeat}`;
      
      const newBeats = [...state.beats];
      const fromBeatIndex = newBeats.findIndex((b) => b.beat_id === sourceBeatId);
      const toBeatIndex = newBeats.findIndex((b) => b.beat_id === targetBeatId);
      
      if (fromBeatIndex === -1 || toBeatIndex === -1) {
        // Beat doesn't exist, just update custom number
        const updatedBeats = state.beats.map((beat) => ({
          ...beat,
          shots: beat.shots.map((s) =>
            s.shot_id === shotId
              ? { ...s, custom_shot_number: customNumber }
              : s
          ),
        }));
        return { beats: updatedBeats };
      }
      
      const fromBeat = newBeats[fromBeatIndex];
      const toBeat = newBeats[toBeatIndex];
      
      // If moving to different beat or position, reorder
      const currentBeatNum = parseInt(sourceBeatId.replace('beat', ''));
      const needsMove = currentBeatNum !== targetBeat || shot.position_in_beat !== targetPosition;
      
      if (needsMove) {
        // Remove from source
        const [movedShot] = fromBeat.shots.splice(sourceIndex, 1);
        
        // Calculate insert position
        let insertIndex = targetPosition - 1;
        
        // If sub-number (like 1.7.2), find position after base shot
        if (parts.length > 2) {
          const baseNumber = `${targetBeat}.${targetPosition}`;
          // Find all shots with this base number or sub-numbers
          let baseIndex = -1;
          for (let i = 0; i < toBeat.shots.length; i++) {
            const s = toBeat.shots[i];
            const num = s.custom_shot_number || `${s.beat}.${s.position_in_beat}`;
            if (num === baseNumber) {
              baseIndex = i;
              break;
            } else if (num.startsWith(baseNumber + '.')) {
              // Already a sub-shot, find the right position
              const subParts = num.split('.').map(Number);
              if (subParts.length > 2 && subParts[2] < parts[2]) {
                baseIndex = i;
              }
            }
          }
          if (baseIndex !== -1) {
            insertIndex = baseIndex + 1;
          }
        }
        
        // Clamp insertIndex
        insertIndex = Math.max(0, Math.min(insertIndex, toBeat.shots.length));
        
        // Update shot
        const updatedShot = {
          ...movedShot,
          beat: targetBeat,
          position_in_beat: targetPosition,
          custom_shot_number: customNumber,
        };
        
        // Insert into target
        toBeat.shots.splice(insertIndex, 0, updatedShot);
        
        // Renumber source beat
        fromBeat.shots = fromBeat.shots.map((s, i) => ({
          ...s,
          position_in_beat: i + 1,
        }));
      } else {
        // Same position, just update custom number
        const shotIndex = fromBeat.shots.findIndex((s) => s.shot_id === shotId);
        if (shotIndex !== -1) {
          fromBeat.shots[shotIndex] = {
            ...fromBeat.shots[shotIndex],
            custom_shot_number: customNumber,
          };
        }
      }
      
      // Renumber target beat
      toBeat.shots = toBeat.shots.map((s, i) => ({
        ...s,
        position_in_beat: i + 1,
      }));
      
      // Auto-renumber shots after the renamed shot (only if not last shot in beat)
      const renamedShotIndex = toBeat.shots.findIndex((s) => s.shot_id === shotId);
      if (renamedShotIndex !== -1 && renamedShotIndex < toBeat.shots.length - 1) {
        // Get the base number from the renamed shot
        // If renamed shot is "1.7.2", base is "1.7", so next should be "1.8"
        // If renamed shot is "1.8", base is "1.8", so next should be "1.9"
        const renamedParts = customNumber.split('.').map(Number);
        const baseBeat = renamedParts[0];
        const basePosition = renamedParts[1];
        
        // Calculate what the next shot number should be
        // If renamed shot is 1.7.2, next should be 1.8
        // If renamed shot is 1.8, next should be 1.9
        let nextPosition = basePosition + 1;
        
        // Renumber all shots after the renamed shot
        for (let i = renamedShotIndex + 1; i < toBeat.shots.length; i++) {
          const shotToRenumber = toBeat.shots[i];
          const prevShot = toBeat.shots[i - 1];
          const prevNumber = prevShot.custom_shot_number || `${prevShot.beat}.${prevShot.position_in_beat}`;
          const prevParts = prevNumber.split('.').map(Number);
          
          // Check if current shot is a sub-number of the previous shot
          const currentNumber = shotToRenumber.custom_shot_number || `${shotToRenumber.beat}.${shotToRenumber.position_in_beat}`;
          const currentParts = currentNumber.split('.').map(Number);
          
          // If previous shot is a sub-number (e.g., 1.7.2) and current is also a sub-number of same base (e.g., 1.7.3)
          // Keep it as a sub-number but update the base to match
          if (prevParts.length > 2 && 
              currentParts.length > 2 && 
              currentParts[0] === prevParts[0] && 
              currentParts[1] === prevParts[1]) {
            // Both are sub-numbers of the same base, keep current as sub-number
            const newSubNumber = `${prevParts[0]}.${prevParts[1]}.${currentParts[2]}`;
            toBeat.shots[i] = {
              ...shotToRenumber,
              beat: baseBeat,
              position_in_beat: nextPosition,
              custom_shot_number: newSubNumber,
            };
          } else {
            // Regular sequential number, update it to nextPosition
            const newNumber = `${baseBeat}.${nextPosition}`;
            toBeat.shots[i] = {
              ...shotToRenumber,
              beat: baseBeat,
              position_in_beat: nextPosition,
              custom_shot_number: newNumber,
            };
            nextPosition++;
          }
        }
      }
      
      return { beats: newBeats };
    });
  },
  
  addTagToShot: (shotId, tag) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => ({
        ...beat,
        shots: beat.shots.map((shot) =>
          shot.shot_id === shotId
            ? {
                ...shot,
                reference: {
                  ...shot.reference,
                  technique_tags: [...shot.reference.technique_tags, tag],
                },
              }
            : shot
        ),
      }));
      return { beats: newBeats };
    });
  },
  
  removeTagFromShot: (shotId, tag) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => ({
        ...beat,
        shots: beat.shots.map((shot) =>
          shot.shot_id === shotId
            ? {
                ...shot,
                reference: {
                  ...shot.reference,
                  technique_tags: shot.reference.technique_tags.filter((t) => t !== tag),
                },
              }
            : shot
        ),
      }));
      return { beats: newBeats };
    });
  },

  // Move a frame index from one shot to another
  moveFrameIndexToShot: (frameIndex, fromShotId, toShotId) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => {
        const fromShot = beat.shots.find((s) => s.shot_id === fromShotId);
        const toShot = beat.shots.find((s) => s.shot_id === toShotId);
        
        if (!fromShot || !toShot) return beat;
        
        // Remove frame index from source shot
        const fromFrameIndices = fromShot.frame_indices || [];
        const updatedFromIndices = fromFrameIndices.filter((idx) => idx !== frameIndex);
        
        // Add frame index to target shot (sorted)
        const toFrameIndices = toShot.frame_indices || [];
        const updatedToIndices = [...toFrameIndices, frameIndex].sort((a, b) => a - b);
        
        // Update shots
        const updatedShots = beat.shots.map((shot) => {
          if (shot.shot_id === fromShotId) {
            // If source shot has no frames left, keep it but with empty frame_indices
            return { ...shot, frame_indices: updatedFromIndices.length > 0 ? updatedFromIndices : undefined };
          }
          if (shot.shot_id === toShotId) {
            return { ...shot, frame_indices: updatedToIndices };
          }
          return shot;
        });
        
        // Renumber all shots in the beat
        const renumberedShots = updatedShots.map((shot, index) => ({
          ...shot,
          position_in_beat: index + 1,
        }));
        
        return {
          ...beat,
          shots: renumberedShots,
        };
      });
      
      return { beats: newBeats };
    });
  },

  // Create a new shot from a frame index, inserting it after a specific shot
  createShotFromFrame: (frameIndex, fromShotId, toBeatId, insertAfterIndex) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => {
        // Remove frame from source shot
        if (beat.shots.some((s) => s.shot_id === fromShotId)) {
          const fromShot = beat.shots.find((s) => s.shot_id === fromShotId);
          if (fromShot) {
            const fromFrameIndices = fromShot.frame_indices || [];
            const updatedFromIndices = fromFrameIndices.filter((idx) => idx !== frameIndex);
            
            beat = {
              ...beat,
              shots: beat.shots.map((shot) =>
                shot.shot_id === fromShotId
                  ? { ...shot, frame_indices: updatedFromIndices.length > 0 ? updatedFromIndices : undefined }
                  : shot
              ),
            };
          }
        }
        
        // Add new shot to target beat
        if (beat.beat_id === toBeatId) {
          const fromShot = state.beats
            .flatMap((b) => b.shots)
            .find((s) => s.shot_id === fromShotId);
          
          if (fromShot) {
            const newShot: Shot = {
              ...fromShot,
              shot_id: `${toBeatId}_shot_${Date.now()}`,
              beat: parseInt(toBeatId.replace('beat', '')),
              position_in_beat: insertAfterIndex + 2, // Will be renumbered
              frame_indices: [frameIndex],
              custom_shot_number: undefined,
            };
            
            const newShots = [...beat.shots];
            newShots.splice(insertAfterIndex + 1, 0, newShot);
            
            // Renumber all shots
            const renumberedShots = newShots.map((shot, index) => ({
              ...shot,
              position_in_beat: index + 1,
            }));
            
            return { ...beat, shots: renumberedShots };
          }
        }
        
        return beat;
      });
      
      return { beats: newBeats };
    });
  },

  // Split a shot at a specific frame index (creates a new shot with frames after the split point)
  splitShotAtFrame: (shotId, frameIndex) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => {
        const shot = beat.shots.find((s) => s.shot_id === shotId);
        if (!shot || !shot.frame_indices) return beat;
        
        const frameIndices = shot.frame_indices;
        const splitIndex = frameIndices.indexOf(frameIndex);
        
        if (splitIndex === -1 || splitIndex === frameIndices.length - 1) return beat;
        
        // Split frames: keep frames up to and including splitIndex, move rest to new shot
        const keepFrames = frameIndices.slice(0, splitIndex + 1);
        const moveFrames = frameIndices.slice(splitIndex + 1);
        
        const shotIndex = beat.shots.findIndex((s) => s.shot_id === shotId);
        
        // Update original shot
        const updatedShot = { ...shot, frame_indices: keepFrames };
        
        // Create new shot with remaining frames
        const newShot: Shot = {
          ...shot,
          shot_id: `${beat.beat_id}_shot_${Date.now()}`,
          position_in_beat: shot.position_in_beat + 1, // Will be renumbered
          frame_indices: moveFrames,
          custom_shot_number: undefined,
        };
        
        const newShots = [...beat.shots];
        newShots[shotIndex] = updatedShot;
        newShots.splice(shotIndex + 1, 0, newShot);
        
        // Renumber all shots
        const renumberedShots = newShots.map((s, index) => ({
          ...s,
          position_in_beat: index + 1,
        }));
        
        return { ...beat, shots: renumberedShots };
      });
      
      return { beats: newBeats };
    });
  },

  // Delete a shot
  deleteShot: (shotId) => {
    set((state) => {
      const newBeats = state.beats.map((beat) => {
        const shotIndex = beat.shots.findIndex((s) => s.shot_id === shotId);
        if (shotIndex === -1) return beat;

        const newShots = beat.shots.filter((s) => s.shot_id !== shotId);
        
        // Renumber all remaining shots
        const renumberedShots = newShots.map((shot, index) => ({
          ...shot,
          position_in_beat: index + 1,
        }));

        return { ...beat, shots: renumberedShots };
      });

      return { beats: newBeats };
    });
  },
}));

