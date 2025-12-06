import type { Beat } from '../types';

// Beat data extracted from Production.md
export const beats: Beat[] = [
  {
    beat_id: 'beat1',
    name: 'THE PROBLEM',
    duration_target: 15,
    energy: 'Mystery, anticipation, problem discovery',
    story_moments: [
      'Inside toothbrush bristles, camera dollies forward',
      'Toothpaste tube rotating, dried paste visible',
      'Top-down view of sink arrangement',
      'Bathroom door opens, light floods in',
      'Man sees stuck food in teeth - THE PROBLEM'
    ],
    technique_toolkit: [
      'inside-object-POV',
      'POV-reversal',
      'timing-acceleration',
      'physiological-micro-shots',
      'color-coding'
    ],
    shots: [
      {
        shot_id: 'beat1_shot1',
        beat: 1,
        position_in_beat: 1,
        frame_indices: [0], // Keyframe 1
        reference: {
          lurpak_frame: 'shot_0000.jpg',
          description: 'Inside toothbrush bristles, camera dollies forward through bristles (dark/blue morning light)',
          timing: 3.12,
          size: 'Extreme close-up',
          angle: 'Inside bristles POV',
          technique_tags: ['inside-object-POV']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot2',
        beat: 1,
        position_in_beat: 2,
        frame_indices: [1], // Keyframe 2
        reference: {
          lurpak_frame: 'shot_0001.jpg',
          description: 'Toothpaste tube rotating, camera circles around, dried paste visible at opening',
          timing: 2.08,
          size: 'Close-up',
          angle: 'Rotating around tube',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot3',
        beat: 1,
        position_in_beat: 3,
        frame_indices: [2], // Keyframe 3
        reference: {
          lurpak_frame: 'shot_0002.jpg',
          description: 'Top-down view of sink - toothbrush, toothpaste, floss arranged',
          timing: 2.24,
          size: 'Wide',
          angle: 'Overhead/abstract',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot4',
        beat: 1,
        position_in_beat: 4,
        frame_indices: [3], // Keyframe 4
        reference: {
          lurpak_frame: 'shot_0003.jpg',
          description: 'Overhead - bathroom door closed, hand enters frame from outside',
          timing: 1.76,
          size: 'Medium',
          angle: 'Overhead of door',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot5',
        beat: 1,
        position_in_beat: 5,
        frame_indices: [4], // Keyframe 5
        reference: {
          lurpak_frame: 'shot_0004.jpg',
          description: 'POV REVERSAL - Inside bathroom looking OUT as door opens, light floods in',
          timing: 1.04,
          size: 'Medium',
          angle: 'Inside looking out',
          technique_tags: ['POV-reversal']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot6',
        beat: 1,
        position_in_beat: 6,
        frame_indices: [5], // Keyframe 6
        reference: {
          lurpak_frame: 'shot_0005.jpg',
          description: 'ECU bathroom door edge opening, cute floor carpet/mat visible',
          timing: 0.72,
          size: 'Extreme close-up',
          angle: 'Door detail',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot7',
        beat: 1,
        position_in_beat: 7,
        frame_indices: [6, 7], // Keyframes 7-8 (shot 7-8 has 2 keyframes)
        reference: {
          lurpak_frame: 'shot_0006.jpg',
          description: 'Medium shot - man standing at sink/mirror, barely awake, tilts head/looks up',
          timing: 2.16,
          size: 'Medium',
          angle: 'Side view of man',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot8',
        beat: 1,
        position_in_beat: 8,
        frame_indices: [8], // Keyframe 9
        reference: {
          lurpak_frame: 'shot_0007.jpg',
          description: 'POV - looking at sink/mirror area',
          timing: 1.32,
          size: 'Medium',
          angle: "Man's POV",
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot9',
        beat: 1,
        position_in_beat: 9,
        frame_indices: [9, 10], // Keyframes 10-11 (shot 10-11 has 2 keyframes)
        reference: {
          lurpak_frame: 'shot_0008.jpg',
          description: 'ECU eye - pupil dilating (physiological reaction to seeing stuck food)',
          timing: 0.68,
          size: 'Extreme close-up',
          angle: 'Straight on eye',
          technique_tags: ['physiological-micro-shots']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot10',
        beat: 1,
        position_in_beat: 10,
        frame_indices: [11, 12], // Keyframes 12-13 (shot 12-13 has 2 keyframes)
        reference: {
          lurpak_frame: 'shot_0009.jpg',
          description: 'ECU finger starting to scratch skin slowly',
          timing: 0.68,
          size: 'Extreme close-up',
          angle: 'On finger',
          technique_tags: ['physiological-micro-shots']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat1_shot11',
        beat: 1,
        position_in_beat: 11,
        frame_indices: [13], // Keyframe 14
        reference: {
          lurpak_frame: 'shot_0010.jpg',
          description: 'Medium close-up - man scratching leg/butt (connects micro to macro)',
          timing: 1.5,
          size: 'Medium close-up',
          angle: 'Side view',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      }
    ]
  },
  {
    beat_id: 'beat2',
    name: 'FLOSS PREP',
    duration_target: 8,
    energy: 'Building tension, explosive release (then deflation)',
    story_moments: [
      'Floss container on counter',
      'Hand grabs floss packet',
      'Inside dispenser POV',
      'Floss tightens and snaps',
      'Mundane foil - man brings floss to mouth'
    ],
    technique_toolkit: [
      'camera-dolly',
      'inside-object-POV',
      'extreme-time-fragmentation',
      'mundane-foil'
    ],
    shots: [
      {
        shot_id: 'beat2_shot1',
        beat: 2,
        position_in_beat: 1,
        frame_indices: [14, 15], // Keyframes 15-16 (shot 12 has 2 keyframes)
        reference: {
          lurpak_frame: 'shot_0011.jpg',
          description: 'Floss container on counter, camera floats/dollies forward, hand enters and grabs floss packet',
          timing: 1.48,
          size: 'Medium to close-up',
          angle: 'Side, dramatic lighting',
          technique_tags: ['camera-dolly']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat2_shot2',
        beat: 2,
        position_in_beat: 2,
        frame_indices: [16], // Keyframe 17
        reference: {
          lurpak_frame: 'shot_0012.jpg',
          description: 'Inside dispenser POV - man\'s face visible in background, hand pulls floss thread toward him/camera',
          timing: 1.44,
          size: 'Close-up',
          angle: 'Inside dispenser looking out',
          technique_tags: ['inside-object-POV']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat2_shot3',
        beat: 2,
        position_in_beat: 3,
        frame_indices: [17], // Keyframe 18
        reference: {
          lurpak_frame: 'shot_0013.jpg',
          description: 'ECU finger flips floss around finger and pulls',
          timing: 2.08,
          size: 'Extreme close-up',
          angle: 'On finger action',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat2_shot4',
        beat: 2,
        position_in_beat: 4,
        frame_indices: [18], // Keyframe 19
        reference: {
          lurpak_frame: 'shot_0014.jpg',
          description: 'Floss tightens next to dispenser teeth, tension building',
          timing: 0.64,
          size: 'Close-up',
          angle: 'Side angle of tension',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat2_shot5',
        beat: 2,
        position_in_beat: 5,
        frame_indices: [19], // Keyframe 20
        reference: {
          lurpak_frame: 'shot_0015.jpg',
          description: 'ECU floss FIBERS stretching and splitting one by one until SCHLACK - last fiber cuts',
          timing: 0.60,
          size: 'Extreme close-up',
          angle: 'Macro on fibers',
          technique_tags: ['extreme-time-fragmentation']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat2_shot6',
        beat: 2,
        position_in_beat: 6,
        frame_indices: [20, 21], // Keyframes 21-22 (shot 17 has 2 keyframes)
        reference: {
          lurpak_frame: 'shot_0016.jpg',
          description: 'MUNDANE FOIL - Medium close-up, barely any movement as floss snaps, man opens mouth and brings floss up to mouth',
          timing: 1.84,
          size: 'Medium close-up',
          angle: 'Side/neutral',
          technique_tags: ['mundane-foil']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      }
    ]
  },
  {
    beat_id: 'beat3',
    name: 'FLOSSING ACTION',
    duration_target: 8,
    energy: 'Tension continues, then graceful/rhythmic resolution',
    story_moments: [
      'Inside mouth POV - teeth with stuck food',
      'String approaches teeth',
      'String squeezes between teeth',
      'Mundane foil - normal flossing',
      'Rhythmic back-and-forth motion'
    ],
    technique_toolkit: [
      'inside-mouth-POV',
      'string-POV-reversal',
      'mundane-foil',
      'rhythmic-motion'
    ],
    shots: [
      {
        shot_id: 'beat3_shot1',
        beat: 3,
        position_in_beat: 1,
        frame_indices: [22], // Keyframe 23
        reference: {
          lurpak_frame: 'shot_0017.jpg',
          description: 'Inside mouth POV - teeth in foreground with stuck food particle, thumb with floss in background approaching',
          timing: 2.08,
          size: 'Close-up',
          angle: 'Inside mouth looking out',
          technique_tags: ['inside-mouth-POV']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat3_shot2',
        beat: 3,
        position_in_beat: 2,
        frame_indices: [23], // Keyframe 24
        reference: {
          lurpak_frame: 'shot_0018.jpg',
          description: 'String/thumb POV - see teeth from floss perspective approaching, stuck food particle visible',
          timing: 0.76,
          size: 'Close-up',
          angle: 'From string looking at teeth',
          technique_tags: ['string-POV-reversal']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat3_shot3',
        beat: 3,
        position_in_beat: 3,
        frame_indices: [24], // Keyframe 25
        reference: {
          lurpak_frame: 'shot_0019.jpg',
          description: 'ECU on string as it squeezes in between two teeth, tension visible',
          timing: 0.80,
          size: 'Extreme close-up',
          angle: 'Macro on string',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat3_shot4',
        beat: 3,
        position_in_beat: 4,
        frame_indices: [25], // Keyframe 26
        reference: {
          lurpak_frame: 'shot_0020.jpg',
          description: 'MUNDANE FOIL - Medium close-up of person flossing teeth normally',
          timing: 1.44,
          size: 'Medium close-up',
          angle: 'Side/neutral',
          technique_tags: ['mundane-foil']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat3_shot5',
        beat: 3,
        position_in_beat: 5,
        frame_indices: [26], // Keyframe 27
        reference: {
          lurpak_frame: 'shot_0021.jpg',
          description: 'Close-up - camera on hand looking toward teeth, string stretched from hand to teeth gap, pulling back and forth rhythmically',
          timing: 1.60,
          size: 'Close-up',
          angle: 'From hand toward mouth',
          technique_tags: ['rhythmic-motion']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      }
    ]
  },
  {
    beat_id: 'beat4',
    name: 'THE CLIMAX',
    duration_target: 20,
    energy: 'Suspenseful → Frantic → Release',
    story_moments: [
      'Hand squeezes toothpaste tube (paste flow begins)',
      'Hand turns faucet (water flow begins)',
      'Water rushing through pipes/faucet',
      'Paste pushing through tube',
      'Both emerge/meet on brush',
      'Foam activation moment',
      'Long resolution shot showing result'
    ],
    technique_toolkit: [
      'inside-object-POV',
      'spatial-escalation',
      'accelerating-cuts',
      'eye-callback',
      'mundane-foil'
    ],
    shots: [
      {
        shot_id: 'beat4_shot1',
        beat: 4,
        position_in_beat: 1,
        frame_indices: [27, 28], // Keyframes 28-29
        reference: {
          lurpak_frame: 'shot_0022.jpg',
          description: 'Hand squeezes toothpaste tube (paste flow begins)',
          timing: 1.5,
          size: 'Close-up',
          angle: 'On tube',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat4_shot2',
        beat: 4,
        position_in_beat: 2,
        frame_indices: [29], // Keyframe 30
        reference: {
          lurpak_frame: 'shot_0023.jpg',
          description: 'Hand turns faucet (water flow begins)',
          timing: 1.5,
          size: 'Close-up',
          angle: 'On faucet',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat4_shot3',
        beat: 4,
        position_in_beat: 3,
        frame_indices: [30], // Keyframe 31
        reference: {
          lurpak_frame: 'shot_0024.jpg',
          description: 'Water rushing through pipes/faucet toward spout',
          timing: 1.0,
          size: 'Close-up',
          angle: 'Inside pipes/faucet',
          technique_tags: ['inside-object-POV']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat4_shot4',
        beat: 4,
        position_in_beat: 4,
        frame_indices: [31, 32], // Keyframes 32-33
        reference: {
          lurpak_frame: 'shot_0025.jpg',
          description: 'Paste pushing through tube toward opening',
          timing: 1.0,
          size: 'Close-up',
          angle: 'Inside tube',
          technique_tags: ['inside-object-POV']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat4_shot5',
        beat: 4,
        position_in_beat: 5,
        frame_indices: [33], // Keyframe 34
        reference: {
          lurpak_frame: 'shot_0026.jpg',
          description: 'Wide shot showing brush positioned, ready for water/paste convergence',
          timing: 0.8,
          size: 'Wide',
          angle: 'Overhead or side',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat4_shot6',
        beat: 4,
        position_in_beat: 6,
        frame_indices: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59], // Keyframes 35-60 (intercutting sequence)
        reference: {
          lurpak_frame: 'shot_0027.jpg',
          description: 'Water hitting paste on brush - foam activation moment',
          timing: 0.6,
          size: 'Close-up',
          angle: 'On brush',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat4_shot7',
        beat: 4,
        position_in_beat: 7,
        frame_indices: [60], // Keyframe 61
        reference: {
          lurpak_frame: 'shot_0028.jpg',
          description: 'Long resolution shot showing result - foam building',
          timing: 3.0,
          size: 'Wide to close-up',
          angle: 'Rising/revealing',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      }
    ]
  },
  {
    beat_id: 'beat5',
    name: 'THE BRUSHING',
    duration_target: 9,
    energy: 'Active, building foam',
    story_moments: [
      'Actual brushing action with foam building',
      'Mundane foils: wide shots of normal bathroom'
    ],
    technique_toolkit: [
      'inside-mouth-POV',
      'escalating-mundane-foils'
    ],
    shots: [
      {
        shot_id: 'beat5_shot1',
        beat: 5,
        position_in_beat: 1,
        frame_indices: [61, 62, 63, 64, 65, 66, 67, 68], // Keyframes 62-69
        reference: {
          lurpak_frame: 'shot_0029.jpg',
          description: 'Brushing action with foam building',
          timing: 2.0,
          size: 'Medium',
          angle: 'Side view',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat5_shot2',
        beat: 5,
        position_in_beat: 2,
        frame_indices: [69, 70], // Keyframes 70-71
        reference: {
          lurpak_frame: 'shot_0030.jpg',
          description: 'Mundane foil - wide shot of normal bathroom',
          timing: 1.5,
          size: 'Wide',
          angle: 'Wide bathroom',
          technique_tags: ['mundane-foil']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      }
    ]
  },
  {
    beat_id: 'beat6',
    name: 'THE RINSE',
    duration_target: 4,
    energy: 'Cleansing, completion',
    story_moments: [
      'Rinsing, spitting',
      'Inside drain POV (water spiraling down)'
    ],
    technique_toolkit: [
      'inside-object-POV'
    ],
    shots: [
      {
        shot_id: 'beat6_shot1',
        beat: 6,
        position_in_beat: 1,
        frame_indices: [71, 72], // Keyframes 72-73
        reference: {
          lurpak_frame: 'shot_0031.jpg',
          description: 'Rinsing, spitting',
          timing: 2.0,
          size: 'Medium',
          angle: 'Side view',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat6_shot2',
        beat: 6,
        position_in_beat: 2,
        frame_indices: [73, 74, 75, 76], // Keyframes 74-77
        reference: {
          lurpak_frame: 'shot_0032.jpg',
          description: 'Inside drain POV - water spiraling down',
          timing: 2.0,
          size: 'Close-up',
          angle: 'Inside drain',
          technique_tags: ['inside-object-POV']
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      }
    ]
  },
  {
    beat_id: 'beat7',
    name: 'THE REVEAL',
    duration_target: 6,
    energy: 'Satisfaction, resolution',
    story_moments: [
      'Mirror check - clean teeth visible',
      'Satisfaction, problem solved',
      'Brand/product reveal'
    ],
    technique_toolkit: [],
    shots: [
      {
        shot_id: 'beat7_shot1',
        beat: 7,
        position_in_beat: 1,
        frame_indices: [77], // Keyframe 78
        reference: {
          lurpak_frame: 'shot_0033.jpg',
          description: 'Mirror check - clean teeth visible',
          timing: 2.0,
          size: 'Medium close-up',
          angle: 'Mirror reflection',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat7_shot2',
        beat: 7,
        position_in_beat: 2,
        frame_indices: [78, 79], // Keyframes 79-80
        reference: {
          lurpak_frame: 'shot_0034.jpg',
          description: 'Satisfaction, problem solved',
          timing: 2.0,
          size: 'Medium',
          angle: 'Front view',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      },
      {
        shot_id: 'beat7_shot3',
        beat: 7,
        position_in_beat: 3,
        frame_indices: [80, 81, 82, 83, 84], // Keyframes 81-85
        reference: {
          lurpak_frame: 'shot_0035.jpg',
          description: 'Brand/product reveal',
          timing: 2.0,
          size: 'Close-up',
          angle: 'Product shot',
          technique_tags: []
        },
        generated_versions: [],
        active_version: null,
        user_notes: ''
      }
    ]
  }
];

