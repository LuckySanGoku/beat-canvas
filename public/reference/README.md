# Reference Frames Directory

This directory should contain Lurpak reference frames for the teeth brushing commercial.

## Expected Structure

Reference frames should be named according to the shot structure:
- `shot_0000.jpg` through `shot_0035.jpg` (and beyond as needed)

## Current Status

For Phase 1, the app will display placeholder text if reference frames are not found.
To add reference frames, simply place the image files in this directory with the correct naming convention.

## Reference Frame Mapping

The reference frames are mapped to shots in `src/data/beats.ts`. Each shot's `reference.lurpak_frame` field specifies which image file to load.

