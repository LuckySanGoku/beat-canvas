export interface Reference {
  lurpak_frame: string;
  description: string;
  timing: number;
  size: string;
  angle: string;
  technique_tags: string[];
}

export interface GeneratedVersion {
  version: number;
  prompt: string;
  file: string;
  thumbnail: string;
  duration: number;
  comfy_workflow_json?: Record<string, unknown>;
  generation_params?: {
    workflow_name: string;
    seed: number;
    steps: number;
    cfg: number;
    model: string;
  };
  timestamp: string;
  notes: string;
}

export interface CustomReference {
  id: string; // Unique ID for this custom reference
  file: string; // Base64 data URL for the image
  thumbnail: string; // Base64 data URL for the thumbnail
}

export interface Shot {
  shot_id: string;
  beat: number;
  position_in_beat: number;
  custom_shot_number?: string; // e.g., "1.7.2" for keyframes within a shot
  frame_indices?: number[]; // Array of frame indices for shots with multiple keyframes (0-based)
  custom_references?: CustomReference[]; // Array of uploaded reference images
  reference: Reference;
  generated_versions: GeneratedVersion[];
  active_version: number | null;
  user_notes: string;
}

export interface Beat {
  beat_id: string;
  name: string;
  duration_target: number;
  energy: string;
  story_moments: string[];
  technique_toolkit: string[];
  shots: Shot[];
}

export interface Project {
  beats: Beat[];
  metadata: {
    name: string;
    created: string;
    updated: string;
  };
}

