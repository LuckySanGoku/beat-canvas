// Map shot position to frame filename
// Frames are in /frames/ folder with names like "Screenshot 2025-11-20 at 11.31.28.png"
// All 85 frames are mapped sequentially based on Workflow.md keyframe structure

const frameFiles = [
  'Screenshot 2025-11-20 at 11.31.28.png',
  'Screenshot 2025-11-20 at 11.31.38.png',
  'Screenshot 2025-11-20 at 11.31.48.png',
  'Screenshot 2025-11-20 at 11.32.02.png',
  'Screenshot 2025-11-20 at 11.32.08.png',
  'Screenshot 2025-11-20 at 11.32.13.png',
  'Screenshot 2025-11-20 at 11.32.19.png',
  'Screenshot 2025-11-20 at 11.32.28.png',
  'Screenshot 2025-11-20 at 11.32.35.png',
  'Screenshot 2025-11-20 at 11.32.46.png',
  'Screenshot 2025-11-20 at 11.32.52.png',
  'Screenshot 2025-11-20 at 11.33.05.png',
  'Screenshot 2025-11-20 at 11.33.11.png',
  'Screenshot 2025-11-20 at 11.33.17.png',
  'Screenshot 2025-11-20 at 11.33.24.png',
  'Screenshot 2025-11-20 at 11.33.30.png',
  'Screenshot 2025-11-20 at 11.33.35.png',
  'Screenshot 2025-11-20 at 11.33.42.png',
  'Screenshot 2025-11-20 at 11.33.47.png',
  'Screenshot 2025-11-20 at 11.33.59.png',
  'Screenshot 2025-11-20 at 11.34.04.png',
  'Screenshot 2025-11-20 at 11.34.11.png',
  'Screenshot 2025-11-20 at 11.51.43.png',
  'Screenshot 2025-11-20 at 11.51.52.png',
  'Screenshot 2025-11-20 at 11.52.10.png',
  'Screenshot 2025-11-20 at 11.52.17.png',
  'Screenshot 2025-11-20 at 11.52.22.png',
  'Screenshot 2025-11-20 at 11.52.29.png',
  'Screenshot 2025-11-20 at 11.52.40.png',
  'Screenshot 2025-11-20 at 11.52.48.png',
  'Screenshot 2025-11-20 at 11.52.58.png',
  'Screenshot 2025-11-20 at 11.53.10.png',
  'Screenshot 2025-11-20 at 11.53.30.png',
  'Screenshot 2025-11-20 at 11.53.40.png',
  'Screenshot 2025-11-20 at 11.53.46.png',
  'Screenshot 2025-11-20 at 11.53.52.png',
  'Screenshot 2025-11-20 at 11.53.58.png',
  'Screenshot 2025-11-20 at 11.54.04.png',
  'Screenshot 2025-11-20 at 11.54.10.png',
  'Screenshot 2025-11-20 at 11.54.16.png',
  'Screenshot 2025-11-20 at 11.54.27.png',
  'Screenshot 2025-11-20 at 11.54.32.png',
  'Screenshot 2025-11-20 at 11.54.41.png',
  'Screenshot 2025-11-20 at 11.54.46.png',
  'Screenshot 2025-11-20 at 11.54.51.png',
  'Screenshot 2025-11-20 at 11.55.08.png',
  'Screenshot 2025-11-20 at 11.55.13.png',
  'Screenshot 2025-11-20 at 11.55.18.png',
  'Screenshot 2025-11-20 at 11.55.23.png',
  'Screenshot 2025-11-20 at 11.55.30.png',
  'Screenshot 2025-11-20 at 11.55.35.png',
  'Screenshot 2025-11-20 at 11.55.48.png',
  'Screenshot 2025-11-20 at 11.55.53.png',
  'Screenshot 2025-11-20 at 11.56.29.png',
  'Screenshot 2025-11-20 at 11.56.36.png',
  'Screenshot 2025-11-20 at 11.56.41.png',
  'Screenshot 2025-11-20 at 11.56.46.png',
  'Screenshot 2025-11-20 at 11.56.51.png',
  'Screenshot 2025-11-20 at 11.56.58.png',
  'Screenshot 2025-11-20 at 11.57.04.png',
  'Screenshot 2025-11-20 at 11.57.15.png',
  'Screenshot 2025-11-20 at 11.57.25.png',
  'Screenshot 2025-11-20 at 11.57.30.png',
  'Screenshot 2025-11-20 at 11.57.35.png',
  'Screenshot 2025-11-20 at 11.57.41.png',
  'Screenshot 2025-11-20 at 11.57.50.png',
  'Screenshot 2025-11-20 at 11.57.58.png',
  'Screenshot 2025-11-20 at 11.58.04.png',
  'Screenshot 2025-11-20 at 11.58.10.png',
  'Screenshot 2025-11-20 at 11.58.15.png',
  'Screenshot 2025-11-20 at 11.58.20.png',
  'Screenshot 2025-11-20 at 11.58.26.png',
  'Screenshot 2025-11-20 at 11.58.31.png',
  'Screenshot 2025-11-20 at 11.58.37.png',
  'Screenshot 2025-11-20 at 11.58.42.png',
  'Screenshot 2025-11-20 at 11.58.48.png',
  'Screenshot 2025-11-20 at 11.58.53.png',
  'Screenshot 2025-11-20 at 11.58.58.png',
  'Screenshot 2025-11-20 at 11.59.18.png',
  'Screenshot 2025-11-20 at 11.59.45.png',
  'Screenshot 2025-11-20 at 11.59.50.png',
  'Screenshot 2025-11-20 at 12.00.19.png',
  'Screenshot 2025-11-20 at 12.00.26.png',
  'Screenshot 2025-11-20 at 12.00.33.png',
  'Screenshot 2025-11-20 at 12.00.38.png',
];

// Get frame filename for a shot by frame index (0-based)
export function getFrameFilenameByIndex(frameIndex: number): string {
  return frameFiles[frameIndex] || '';
}

// Get frame path by index
export function getFramePathByIndex(frameIndex: number): string {
  const filename = getFrameFilenameByIndex(frameIndex);
  return filename ? `/frames/${filename}` : '';
}

// Get frame paths for a shot (supports multiple keyframes)
export function getFramePaths(shot: { frame_indices?: number[] }): string[] {
  if (!shot.frame_indices || shot.frame_indices.length === 0) {
    return [];
  }
  return shot.frame_indices.map(getFramePathByIndex).filter(Boolean);
}

// Get primary frame path (first keyframe)
export function getPrimaryFramePath(shot: { frame_indices?: number[] }): string {
  if (!shot.frame_indices || shot.frame_indices.length === 0) {
    return '';
  }
  return getFramePathByIndex(shot.frame_indices[0]);
}

// Get total number of frames available
export function getTotalFrames(): number {
  return frameFiles.length;
}
