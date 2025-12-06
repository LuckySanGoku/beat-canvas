# BEAT CANVAS - Development Workplan
**Date:** 03 December 2024, 14:30 IST
**Project:** AI-Assisted Video Production Canvas Tool

---

## TOOL NAME: BEAT CANVAS

**Tagline:** "Figma meets ComfyUI meets Premiere for video generation"

**Core Concept:** 
An intelligent timeline canvas where reference material (Lurpak) lives as ghosts, generated shots replace them, everything is version-controlled, editable, and playable. Built for the Gen AI workflow where you need structured improvisation - locked beats with flexible execution.

---

## THE PROBLEM WE'RE SOLVING

**Traditional video editing:**
- Generate → Export → Import → Edit → Repeat
- Context switching between tools
- No version management at shot level
- Can't see reference and output side-by-side
- Rigid linear timeline

**What we need:**
- Generate and edit in one place
- Keep all versions accessible
- Reference material always visible
- Beat structure as guide, not prison
- Adapt to multiple generation workflows

---

## CORE FEATURES

### 1. BEAT STRUCTURE LAYER
- Visual timeline divided by beats
- Each beat shows: duration, energy level, story intention
- Technique tags visible (intercutting, inside-POV, etc.)
- Expandable/collapsible beat sections

### 2. REFERENCE LAYER
- Lurpak frames as ghost images
- Toggle visibility on/off
- Shows original timing and technique
- Click to see full reference shot details

### 3. GENERATION LAYER
- Empty shot slots ready to receive videos
- Drag-and-drop upload from ComfyCloud
- Each slot stores: prompt, all versions, timing, parameters
- Visual thumbnail for each version

### 4. VERSION MANAGEMENT
- Every upload creates new version
- Filmstrip view to switch between versions
- Delete bad versions
- Compare versions side-by-side
- Track which ComfyUI workflow was used

### 5. TIMELINE PLAYBACK
- Spacebar to play current timeline
- Plays active version of each shot
- Seamless preview with proper timing
- Scrubbing support

### 6. FLEXIBLE ARRANGEMENT
- Drag shots to reorder
- Adjust shot duration
- Add/remove shots as needed
- Split/merge shots

### 7. EXPORT
- Export final timeline as video file
- Export as JSON project file (save/load)
- Export shot list with all metadata

---

## DATA STRUCTURE

### Project File Structure:
```
beat-canvas-project/
├── project.json              # Project metadata and structure
├── beats/
│   ├── beat1.json           # Beat 1 definition
│   ├── beat2.json           # Beat 2 definition
│   └── ...
├── reference/
│   ├── shot_0000.jpg        # Lurpak reference frames
│   ├── shot_0001.jpg
│   └── ...
└── generated/
    ├── beat1_shot01/
    │   ├── v1.mp4
    │   ├── v1_thumb.jpg
    │   ├── v1_metadata.json
    │   ├── v2.mp4
    │   └── ...
    └── ...
```

### Shot Data Model:
```json
{
  "shot_id": "beat4_shot23",
  "beat": 4,
  "position_in_beat": 1,
  "reference": {
    "lurpak_frame": "shot_0028.jpg",
    "description": "Inside knife drawer, light floods in",
    "timing": 1.5,
    "size": "Medium",
    "angle": "Inside drawer looking out",
    "technique_tags": ["inside-object-POV", "light-transition"]
  },
  "generated_versions": [
    {
      "version": 1,
      "prompt": "Inside medicine cabinet POV, light floods in as door opens, cool blue tones, dramatic lighting",
      "file": "beat4_shot23_v1.mp4",
      "thumbnail": "beat4_shot23_v1_thumb.jpg",
      "duration": 1.5,
      "comfy_workflow_json": { /* full workflow JSON */ },
      "generation_params": {
        "workflow_name": "text-to-video-v2",
        "seed": 12345,
        "steps": 30,
        "cfg": 7.5,
        "model": "model_name"
      },
      "timestamp": "2024-12-03T14:30:00Z",
      "notes": ""
    }
  ],
  "active_version": 1,
  "user_notes": "Try darker lighting next version"
}
```

### Beat Data Model:
```json
{
  "beat_id": "beat4",
  "name": "THE CLIMAX",
  "duration_target": 20,
  "energy": "suspenseful → frantic → release",
  "story_moments": [
    "Hand squeezes tube (paste flow begins)",
    "Hand turns faucet (water flow begins)",
    "Water rushing through pipes/faucet",
    "Paste pushing through tube",
    "Both emerge/meet on brush",
    "Foam activation moment",
    "Long resolution shot showing result"
  ],
  "technique_toolkit": [
    "inside-object-POV",
    "spatial-escalation",
    "accelerating-cuts",
    "eye-callback",
    "mundane-foil"
  ],
  "shots": [
    "beat4_shot23",
    "beat4_shot24",
    "..."
  ]
}
```

---

## TECH STACK (Final Decision)

### Frontend Framework:
- **React** (with Vite for fast dev)
- **TypeScript** (type safety for complex data structures)
- **TailwindCSS** (rapid styling)
- **Zustand** (lightweight state management)

### Canvas/Timeline:
- **Custom HTML5 Canvas + CSS Grid** (most flexible for our needs)
- **React DnD** (drag and drop library)
- **Framer Motion** (smooth animations)

### Video Handling:
- **HTML5 Video Element** (native browser playback)
- **ffmpeg.wasm** (thumbnail generation, proxy creation)
- **MediaRecorder API** (export final video if needed)

### Storage:
- **IndexedDB** (browser storage for large video files)
- **LocalStorage** (project metadata, preferences)
- **File System Access API** (save/load project files to disk)

### Development Environment:
- **Cursor** (AI-assisted coding with Claude integration)
- OR **VS Code + GitHub Copilot** (alternative)
- **Local development server** (Vite dev server)

### Optional (Phase 2):
- **Electron wrapper** (desktop app if needed)
- **ComfyUI API integration** (if/when available)

---

## DEVELOPMENT PHASES

### PHASE 1: FOUNDATION (Week 1)
**Goal:** Get basic canvas working with Lurpak reference frames

**Tasks:**
1. Set up React + Vite + TypeScript project
2. Create beat timeline component (horizontal layout)
3. Load Lurpak reference frames from existing HTML storyboard
4. Display beats with shot slots
5. Toggle reference visibility on/off
6. Basic responsive layout

**Deliverable:** Canvas showing all 7 beats with Lurpak frames

---

### PHASE 2: UPLOAD & PLAYBACK (Week 1-2)
**Goal:** Upload generated videos and play them back

**Tasks:**
1. Drag-and-drop upload zones for each shot
2. Store videos in IndexedDB
3. Generate thumbnails with ffmpeg.wasm
4. Display uploaded videos in shot slots
5. Click shot to preview individual video
6. Sequential playback of all shots (spacebar to play)
7. Scrubbing support

**Deliverable:** Can upload videos and play timeline

---

### PHASE 3: VERSION MANAGEMENT (Week 2)
**Goal:** Store and switch between multiple versions

**Tasks:**
1. Allow multiple uploads per shot slot
2. Filmstrip view showing all versions
3. Click to switch active version
4. Delete unwanted versions
5. Store metadata per version (prompt, params, workflow)
6. Version comparison view (side-by-side)

**Deliverable:** Full version control at shot level

---

### PHASE 4: EDITING CAPABILITIES (Week 3)
**Goal:** Arrange and refine timeline

**Tasks:**
1. Drag shots to reorder
2. Adjust shot duration (trim)
3. Add new empty shot slots
4. Delete shot slots
5. Split shots
6. Duplicate shots

**Deliverable:** Full timeline editing

---

### PHASE 5: METADATA & WORKFLOW (Week 3-4)
**Goal:** Track generation parameters and workflows

**Tasks:**
1. Form to enter prompt when uploading
2. Upload ComfyUI workflow JSON
3. Display technique tags
4. Add notes per shot
5. Search/filter by technique
6. Export shot list with all metadata

**Deliverable:** Complete metadata tracking

---

### PHASE 6: EXPORT & PROJECT MANAGEMENT (Week 4)
**Goal:** Save/load projects and export final video

**Tasks:**
1. Save project as JSON file
2. Load existing project
3. Export final timeline as MP4
4. Export shot list as spreadsheet
5. Batch export all shots
6. Project templates (save beat structure for reuse)

**Deliverable:** Production-ready tool

---

### PHASE 7: ADVANCED FEATURES (Future)
**Goal:** Polish and enhance

**Tasks:**
- Branching/forking timelines
- AI-assisted shot suggestions
- ComfyUI API integration (when available)
- Collaborative features (multi-user)
- Cloud sync
- Audio track support
- Color grading overlay

**Deliverable:** Professional-grade tool

---

## DEVELOPMENT WORKFLOW

### Setup:
1. Create new folder: `beat-canvas/`
2. Initialize with Vite: `npm create vite@latest beat-canvas -- --template react-ts`
3. Install dependencies:
   ```bash
   npm install zustand @dnd-kit/core framer-motion
   npm install -D tailwindcss postcss autoprefixer
   npm install @ffmpeg/ffmpeg @ffmpeg/util
   ```
4. Open in Cursor (or VS Code)

### Development Loop:
1. Code feature in local dev environment
2. Test in browser (Vite hot reload)
3. Commit changes to version control
4. Iterate based on usage

### Testing:
- Manual testing with real generated videos
- Test with existing Lurpak reference frames
- Test on different screen sizes

---

## FILE ORGANIZATION

```
beat-canvas/
├── public/
│   └── reference/              # Lurpak reference frames
├── src/
│   ├── components/
│   │   ├── BeatTimeline.tsx    # Main timeline component
│   │   ├── BeatSection.tsx     # Individual beat section
│   │   ├── ShotSlot.tsx        # Shot container
│   │   ├── VersionSwitcher.tsx # Version selection
│   │   ├── UploadZone.tsx      # Drag-and-drop upload
│   │   └── VideoPlayer.tsx     # Playback controls
│   ├── stores/
│   │   └── projectStore.ts     # Zustand state management
│   ├── utils/
│   │   ├── videoUtils.ts       # ffmpeg thumbnail generation
│   │   ├── storageUtils.ts     # IndexedDB operations
│   │   └── exportUtils.ts      # Export functionality
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── data/
│   │   └── lurpak-beats.json   # Beat structure data
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## IMMEDIATE NEXT STEPS

### RIGHT NOW:
1. **Create GitHub repo** (or local folder)
2. **Initialize Vite React TypeScript project**
3. **Set up Cursor workspace** (or VS Code)
4. **Import Lurpak reference data** from existing HTML storyboard
5. **Build Phase 1** - Basic timeline with reference frames

### First Coding Session:
- Set up project structure
- Create basic BeatTimeline component
- Load and display Lurpak beats
- Get reference frames showing

### First Test:
- Can I see all 7 beats laid out?
- Can I see Lurpak reference frames?
- Does the layout make sense?

---

## SUCCESS CRITERIA

**Phase 1 Success:**
✓ Can see all beats in timeline
✓ Can see Lurpak reference frames
✓ Can toggle reference on/off

**Phase 2 Success:**
✓ Can drag-and-drop upload videos
✓ Can play back entire timeline
✓ Videos display with proper timing

**Phase 3 Success:**
✓ Can upload multiple versions per shot
✓ Can switch between versions
✓ Metadata is stored and displayed

**Overall Success:**
✓ Tool replaces manual file management
✓ Speeds up iteration cycles
✓ Keeps creative overview while generating
✓ Makes version management painless
✓ Enables "vibe coding" workflow

---

## OPEN QUESTIONS TO RESOLVE

1. **Where to store large video files?**
   - IndexedDB (browser storage) vs File System API vs keep on disk?
   
2. **Thumbnail generation?**
   - ffmpeg.wasm in browser vs pre-generated vs video element screenshot?

3. **Desktop app or web app?**
   - Pure web app (easier) vs Electron wrapper (more features)?

4. **Multi-project management?**
   - One project at a time vs project library?

5. **Collaboration features?**
   - Solo tool only vs multi-user support later?

---

## NAMING & BRANDING

**Tool Name:** BEAT CANVAS

**Alternative Names Considered:**
- Tempo (tempo of beats)
- Cadence (rhythm of editing)
- Reel (film reference)
- Storyflow
- Beatboard
- Canvas Cut
- Frame Flow

**Why "Beat Canvas":**
- BEAT = Story beat structure (the foundation)
- CANVAS = Visual workspace (the medium)
- Together = Visual workspace organized by story beats

---

## NOTES & REMINDERS

- This tool is for YOU (Meir) first, others later
- Start simple, add complexity only when needed
- Real usage will reveal what actually matters
- Don't over-engineer before testing with real content
- The goal is SPEED and OVERVIEW, not feature bloat
- Follow the "vibe coding" philosophy - quick iterations, test often

---

**READY TO BUILD!**

Next action: Create project folder and initialize Vite React TypeScript project
