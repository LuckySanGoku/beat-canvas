// Maps toothbrushing shots to Lurpak keyframes based on Workflow.md and Production.md
// Keyframes are 1-indexed in docs, but frame files are 0-indexed

// Beat 1: Keyframes 1-14 (14 keyframes for 11 toothbrushing shots)
// Some shots have multiple keyframes:
// - Shot 7-8: keyframes 7-8 (2 keyframes)
// - Shot 10-11: keyframes 10-11 (2 keyframes)  
// - Shot 12-13: keyframes 12-13 (2 keyframes)

export const BEAT_FRAME_MAPPINGS: Record<number, { startKeyframe: number; endKeyframe: number }> = {
  1: { startKeyframe: 1, endKeyframe: 14 }, // 14 keyframes, 11 shots
  2: { startKeyframe: 15, endKeyframe: 22 }, // 8 keyframes, 6 shots
  3: { startKeyframe: 23, endKeyframe: 27 }, // 5 keyframes, 5 shots
  4: { startKeyframe: 28, endKeyframe: 61 }, // 34 keyframes, ~11 shots
  5: { startKeyframe: 62, endKeyframe: 71 }, // 10 keyframes, 6 shots
  6: { startKeyframe: 72, endKeyframe: 77 }, // 6 keyframes, 3 shots
  7: { startKeyframe: 78, endKeyframe: 85 }, // 8 keyframes, 5 shots
};

// Get frame indices for a shot based on beat and position
// This maps sequentially: first shot gets first keyframe(s), second gets second, etc.
export function getFrameIndicesForShot(
  beat: number,
  positionInBeat: number
): number[] {
  const mapping = BEAT_FRAME_MAPPINGS[beat];
  if (!mapping) return [];

  // Calculate cumulative keyframe offset from previous beats
  let keyframeOffset = 0;
  for (let i = 1; i < beat; i++) {
    const prevMapping = BEAT_FRAME_MAPPINGS[i];
    if (prevMapping) {
      keyframeOffset += prevMapping.endKeyframe - prevMapping.startKeyframe + 1;
    }
  }

  // Beat 1 special cases (shots with multiple keyframes)
  if (beat === 1) {
    if (positionInBeat === 7) {
      // Shot 7-8 has 2 keyframes (7 and 8)
      return [keyframeOffset + 6, keyframeOffset + 7]; // keyframes 7-8 (0-indexed: 6-7)
    }
    if (positionInBeat === 9) {
      // Shot 10-11 has 2 keyframes (10 and 11)
      return [keyframeOffset + 9, keyframeOffset + 10]; // keyframes 10-11 (0-indexed: 9-10)
    }
    if (positionInBeat === 10) {
      // Shot 12-13 has 2 keyframes (12 and 13)
      return [keyframeOffset + 11, keyframeOffset + 12]; // keyframes 12-13 (0-indexed: 11-12)
    }
  }

  // Beat 2 special cases
  if (beat === 2) {
    if (positionInBeat === 1) {
      // Shot 12 (toothbrushing) has 2 keyframes (15-16)
      return [keyframeOffset + 0, keyframeOffset + 1]; // keyframes 15-16 (0-indexed: 14-15)
    }
    if (positionInBeat === 6) {
      // Shot 17 has 2 keyframes (21-22)
      return [keyframeOffset + 6, keyframeOffset + 7]; // keyframes 21-22 (0-indexed: 20-21)
    }
  }

  // Beat 3 special cases
  if (beat === 3) {
    if (positionInBeat === 1) {
      // Shot 18 (keyframe 23) - Production says "23 continued" so maybe 2 keyframes?
      return [keyframeOffset + 0, keyframeOffset + 1]; // keyframes 23-24 (0-indexed: 22-23)
    }
  }

  // Default: one keyframe per shot, sequential mapping
  // Calculate which keyframe this shot should get
  let keyframeIndex = positionInBeat - 1;
  
  // Adjust for shots with multiple keyframes before this one
  if (beat === 1) {
    if (positionInBeat > 7) keyframeIndex += 1; // Shot 7-8 takes 2
    if (positionInBeat > 9) keyframeIndex += 1; // Shot 10-11 takes 2
    if (positionInBeat > 10) keyframeIndex += 1; // Shot 12-13 takes 2
  }
  if (beat === 2) {
    if (positionInBeat > 1) keyframeIndex += 1; // Shot 12 takes 2
    if (positionInBeat > 6) keyframeIndex += 1; // Shot 17 takes 2
  }
  if (beat === 3) {
    if (positionInBeat > 1) keyframeIndex += 1; // Shot 18 takes 2
  }

  return [keyframeOffset + keyframeIndex];
}

