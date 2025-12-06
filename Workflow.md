# REFERENCE BIBLE - AI-Assisted Video Production Workflow
**Lurpak Commercial Analysis → Complete Technique Toolkit**
**Status:** Steps 1-4 Complete - Full Analysis & Shotlist  
**Purpose:** Reference for cinematic techniques, patterns, and methodology

---

## HOW TO USE THIS DOCUMENT

**This is the REFERENCE BIBLE:**
- Complete Lurpak commercial analysis (85 keyframes, 46 shots, 7 beats)
- Technique toolkit with timing ratios, motion patterns, formulas
- Consult when creating new commercial concepts
- Update at END of sessions with learnings

**For active production work, create separate PRODUCTION documents**

---

# AI-Assisted Video Production Workflow
**Project:** Lurpak Commercial Ã¢â€ â€™ Toothbrush/Toothpaste Commercial Transposition

## Project Philosophy
- Preserve director's creative process and decision-making
- AI assists with technical/repetitive work, not creative choices
- Agent suggests Ã¢â€ â€™ Human approves Ã¢â€ â€™ Agent learns from corrections
- Focus on understanding *why* techniques work, not just automating output

## Key Insight
This isn't "text-to-video" automation. It's documenting actual directorial work: understanding cinematic language, thematic structure, shot composition, and how to transpose reference material into new creative work.

---

## The 9-Step Workflow

### **1. Reference Analysis** Ã¢Å“â€¦ COMPLETED
**What:** Break down reference video (Lurpak commercial) into individual shots/frames
**Output:** HTML storyboard with cut points identified, camera movements noted
**Tools:** Frame extraction, HTML storyboard generator with base64 images
**Status:** Done - have 85 frames analyzed with cut points identified

---

### **2. Story Beat Breakdown** Ã¢Å“â€¦ COMPLETED
**What:** Group shots into narrative beats/scenes (every few shots = one beat)
**Output:** Document showing beat structure
**Creative decisions:** Which shots form coherent narrative units
**Tools:** Manual beat mapping, going beat-by-beat
**Status:** All 7 beats mapped (shots 1-85)

#### Methodology:
- Going beat-by-beat, not jumping ahead
- Understanding each shot within its beat context
- Identifying continuations vs. actual cuts
- Noting camera movements and their purpose within each beat

**CRITICAL TERMINOLOGY:**
- **CUTS** = Editorial transitions/cut points (e.g., ~22 cuts in Beat 4 intercutting)
- **SHOTS** = Unique camera setups/angles (e.g., ~11 different shots in Beat 4)
- **KEYFRAMES** = Extracted frames for reference (85 total) - can have multiple per shot
- Example: Intercutting between butter falling and fire = 2 SHOTS, many CUTS back/forth, multiple KEYFRAMES extracted
- Our numbering (1-85) = KEYFRAMES ordered chronologically by screenshot metadata

#### Seven-Beat Structure:
1. **"The Waiting"** - Mystery/tension building (Shots 1-14)
2. **"The Egg Breaking"** - Circling one action dramatically (Shots 15-22)
3. **"The Whisking"** - Mundane made extraordinary (Shots 23-27)
4. **"The Magic Moment"** - Fire and butter climax (Shots 28-61)
5. **"Cooking the Omelette"** - Pouring and cooking (Shots 62-71)
6. **"The Cheese Grater"** - Product integration (Shots 72-77)
7. **"Plating and Final Reveal"** - Resolution and branding (Shots 78-85)

---

### **VIDEO ANALYSIS PACKAGE** ðŸŽ¥
**Added:** 24 Nov 2024
**Location:** Project files - video_package_small/

Automated analysis package with precise data to supplement manual observation:

**Contents:**
- `shotlist.json` - 42 detected hard cuts with exact timecodes (seconds & SMPTE format)
- `summary.json` - Average motion values per shot (quantifies camera/subject movement)
- `keyframes/` - Representative frame from each detected shot
- `depth_maps/` - Spatial depth analysis (JSON format)
- `flow/` - Optical flow data showing motion patterns (JSON format)

**How to Use:**
- **Timecodes:** Use for precise timing measurements (e.g., "Shot 22: 32.48-33.52s = 1.04s duration")
- **Motion Values:** Compare to identify high-motion vs static shots (e.g., shot 36 = 12.17 avg_motion, very dynamic)
- **Keyframes:** Quick visual reference for each cut point
- **Flow Data:** Can analyze specific movement patterns if needed

**Important Notes:**
- Automated system detects 42 HARD CUTS (vs our 85 frames which include continuations)
- Both valid - automation finds CUT POINTS, we track editorial INTENT
- Use automated data for WHAT (timings, motion), manual analysis for WHY (techniques, meaning)
- May group rapid intercutting into single shots - verify against frames when needed

**Workflow Integration:**
1. Check automated timecodes for precise measurements
2. Use manual frame analysis to understand editorial intent
3. Cross-reference motion values to quantify observations
4. Document both in beat analysis

---

### **BEAT 1: "The Waiting" - COMPLETED**
**Keyframes 1-14** (~10 cuts, 15.8 seconds total)

**TECHNIQUE DISCOVERED: "POV Reversal + Timing Variation + Color Coding"**

This beat uses a two-phase structure to build mystery and tension:

#### PHASE 1 - SPATIAL EXPLORATION (Keyframes 1-6, ~10.2s):
**The Mystery of the Fridge**

**Keyframe 1:** Inside fridge, low angle looking UP at bottles - camera dollies forward (3.12s)
- Blue cool tones establish mystery
- Longest shot - lets us absorb the strange POV
- Motion: 2.27 (slow dolly movement)

**Keyframe 2:** Eggs in blue-toned fridge light, camera rotates around (2.08s)
- Continuing inside-object exploration
- Motion: 7.03 (camera rotation)

**Keyframe 3:** Top-down overhead view into fridge (2.24s)
- Abstract spatial disorientation
- Motion: 2.55 (static)

**Keyframe 4:** Overhead shot - hand entering frame from OUTSIDE to open fridge (1.76s)
- First glimpse of human, but still mysterious
- Motion: 4.16 (hand movement)

**Keyframe 5:** **THE POV REVERSAL** - From INSIDE fridge looking OUT as door opens (1.04s)
- Light floods in from warm outside world
- Blue â†’ bright white transition
- Motion: 9.01 (door opening, light change)
- **KEY MOMENT**: Camera switches from observing fridge to BEING the fridge

**Keyframe 6:** From outside, fridge door in EXTREME close-up, dog magnet visible (0.72s)
- Accelerating to fastest shot yet
- Motion: 6.33 (door movement)

*Phase 1 Pattern:* **ACCELERATION** - 3.12s â†’ 2.08s â†’ 2.24s â†’ 1.76s â†’ 1.04s â†’ 0.72s
- Starts slow and contemplative
- Speeds up as we approach human interaction
- POV reversal at the acceleration point

#### PHASE 2 - HUMAN CONTEMPLATION (Keyframes 7-14, ~5.6s):
**The Decision**

**Keyframe 7-8:** Medium shot - man at open fridge, tilts head down contemplating (2.16s - **LONGEST in Phase 2**)
- First clear view of the human
- Warm lighting vs cool fridge blue
- Motion: 8.48 (head tilt, body shift)
- This HOLD creates breathing room after acceleration

**Keyframe 9:** POV - looking at food boxes in fridge (1.32s)
- What is he looking at?
- Motion: 6.73

**Keyframe 10-11:** **EXTREME CLOSE-UP: EYE with pupil dilating** (0.68s micro-shot)
- Physiological reaction shown
- Warm golden iris vs cool blue earlier
- Motion: 0.95 (pupil movement)
- **MICRO-SHOT** - blink and you miss it

**Keyframe 12-13:** **EXTREME CLOSE-UP: FINGER starting to tap** (0.68s micro-shot)
- Decision moment physi ologically
- Motion: 0.31 (minimal - the stillness before action)

**Keyframe 14:** Medium close-up side view - finger TAPPING on fridge door
- Connects micro (extreme close-up finger) to macro (full action context)
- Matching action bridges scale jump

*Phase 2 Pattern:* **HOLD then MICRO-SHOTS** - 2.16s (pause) â†’ 1.32s â†’ 0.68s â†’ 0.68s
- One long contemplative shot
- Then rapid physiological details

**TIMING DATA (from automated analysis):**
- Opening shot: 3.12s (longest - establish the strangeness)
- POV reversal: 1.04s (at acceleration point)
- Contemplation hold: 2.16s (creates breathing space)
- Micro-shots: 0.68s, 0.68s (fastest - physiological urgency)
- Total: 15.8 seconds to build complete mystery

**THE TRANSPORTABLE TECHNIQUE:**

**"POV Reversal with Timing Variation"** = Building mystery through perspective:

1. **Start INSIDE the object** looking out (fridge, toothpaste tube, medicine cabinet)
2. **Use COLOR CODING** - cool mystery color vs warm reality
3. **ACCELERATE timing** as you approach the reveal (3s â†’ 2s â†’ 1s â†’ 0.7s)
4. **REVERSE POV** at the acceleration point - switch to looking AT the object
5. **HOLD** on human contemplation (creates breath)
6. **MICRO-SHOTS** of physiological reaction (0.5-0.7s rapid cuts)
7. **CONNECT** micro to macro with matching action

The satisfaction comes from **spatial mystery + temporal variation**:
- Where are we? (POV disorientation)
- Time speeds up and slows down (rhythmic surprise)
- Extreme close-ups bridge to full context (scale jumping)

**For Toothbrush Commercial:**
- Start INSIDE bathroom cabinet looking out as door opens
- Or INSIDE toothpaste tube as cap unscrews
- Use blue morning light â†’ warm bathroom light transition
- Accelerate: 3s cabinet exploration â†’ 2s â†’ 1s door opening â†’ 0.7s hand grab
- Hold on person contemplating in mirror (2s)
- Micro-shots: eye looking at reflection (0.7s), hand reaching (0.7s)
- Connect to medium shot of full morning routine action

**Key Insight:** The POV reversal (from inside object looking out) creates immediate intrigue. The viewer asks "where am I?" Then timing variation (long â†’ fast â†’ hold â†’ ultra-fast) creates rhythmic tension. The commercial hooks you before you even know what it's selling.

---

###

 **BEAT 2: "The Egg Breaking" - COMPLETED**
**Keyframes 15-22** (~6 cuts, 8.2 seconds total)

**TECHNIQUE DISCOVERED: "Fragmenting Time Through Spatial Orbiting"**

This beat takes ONE simple action (cracking an egg - normally 1 second) and stretches it across 8+ seconds by circling it from every conceivable angle, building massive tension before explosive payoff.

#### THE SPATIAL ORBIT STRUCTURE:

**Keyframe 15-16:** Wooden cutting board, EXTREME low angle, backlit - hand enters with two eggs, places them down (1.48s)
- Dramatic lighting, hand blocks backlight creating silhouette
- Motion: 2.66 (slow deliberate placement)
- **Setup angle**: Establishes the stage

**Keyframe 17:** **INSIDE BOWL POV** - looking UP from inside bowl at person and egg approaching (1.44s)
- Bowl's curved ceramic edge in foreground
- Camera positioned where the egg will land
- Motion: 7.51 (head and hand movement from this low angle)
- **Second use of inside-object POV** (after fridge in Beat 1)

**Keyframe 18:** **EGG'S POV** - looking DOWN at bowl edge from egg's perspective (2.08s - **LONGEST**)
- The moment before impact
- Motion: 7.38 (egg descending toward edge)
- This HOLD builds maximum tension - "it's about to happen"

**Keyframe 19:** Side angle INSIDE bowl - egg almost touching the edge (0.64s - **RAPID**)
- Motion: 5.20 (approaching impact)
- **Acceleration begins** - cuts getting faster

**Keyframe 20:** Side view VERY CLOSE - egg millimeters from edge (0.60s - **FASTEST**)
- Motion: 2.23 (the split second before)
- **Maximum acceleration** - shortest shot yet

**Keyframe 21-22:** **EXPLOSION PAYOFF** - egg smashing, yellow yolk and white exploding, shell fragments flying (1.84s - **HOLD FOR SATISFACTION**)
- Motion: 1.38 (surprisingly LOW - the aftermath is slower than the approach)
- Yellow fills frame viscerally
- Held long enough to appreciate the payoff

**TIMING ANALYSIS:**
- Setup: 1.48s (establish stage)
- Orbit: 1.44s to 2.08s (circling, BUILDING tension with longest shot)
- Accelerate: 0.64s to 0.60s (RAPID cuts as impact approaches)
- Payoff: 1.84s (HOLD the explosion for satisfaction)
- Total: ~8 seconds for a 1-second action = **8x time fragmentation**

**SPATIAL PROGRESSION:**
Circling 270 degrees around the action:
1. Low angle from side
2. From below looking up
3. From egg looking down
4. Side angle inside
5. Side close
6. Impact moment

**THE TRANSPORTABLE TECHNIQUE:**

**"Fragmenting Time"** = Make simple actions feel EPIC through spatial orbiting:

1. **Choose one simple micro-action** (egg crack, toothpaste squeeze, water splash)
2. **Circle it spatially** - show from 4-6 completely different angles
3. **Include impossible POVs** - from inside the target, from the object itself
4. **Build with timing**: Medium shots to LONGEST hold (tension peak) to RAPID acceleration to EXPLOSION hold
5. **Timing ratio**: Take a 1-second action, stretch to 6-8 seconds (6-8x multiplication)

The satisfaction comes from **anticipation + spatial variety + visceral payoff**:
- We know what's coming (egg will break)
- But we see it from perspectives we've never imagined
- Time slows down, then accelerates dramatically
- Payoff is held long enough to appreciate

**For Toothbrush Commercial:**
- Action: Squeezing toothpaste onto brush (normally 1 second)
- Angle 1: Side view of tube (1.5s setup)
- Angle 2: Inside bristles looking up as paste approaches (1.5s)
- Angle 3: From paste looking down at brush (2s - longest, build tension)
- Angle 4: Side extreme close-up of paste touching bristles (0.6s)
- Angle 5: Macro of paste touching first bristle (0.6s - fastest)
- Angle 6: Explosion of paste spreading across bristles (2s payoff hold)
- Total: 8 seconds for 1-second action

**Key Insight:** The technique is called "fragmenting time" because you're literally breaking a single moment into many sub-moments, each from a unique spatial perspective. The 2.08s "longest hold" right before acceleration is crucial - it's the pause before the plunge that creates maximum tension. Then the 0.6s rapid cuts feel like time speeding up, even though we're still stretching the action out.

---


### **BEAT 3: "The Whisking" - COMPLETED**
**Keyframes 23-27** (~6 cuts, 8.6 seconds total)

**TECHNIQUE DISCOVERED: "The Mundane Foil"**

This beat introduces a crucial technique: sandwiching ONE intentionally boring, static wide shot IN THE MIDDLE of epic macro close-ups. The contrast makes the dramatic shots MORE dramatic.

#### THE SANDWICH STRUCTURE:

**EPIC LAYER 1:**

**Keyframe 23:** Macro shot - fork enters bowl, mixes egg mixture with motion blur (2.08s)
- Camera ON the fork (macro movement)
- Motion: 9.92 (**HIGHEST motion in Beat 3**)
- Dramatic, visceral, close

**Keyframe 23 continued:** Fork mixing continues (1.92s)
- Still macro, still high energy
- Motion: 9.09 (second highest)
- Building anticipation

**THE MUNDANE FOIL:**

**Keyframe 24:** **FULL SHOT from side** - wide kitchen counter, man's hands holding bowl, blue checkered tiles, cookbooks, Lurpak visible on right (0.76s - **SHORTEST**)
- Static, flat angle
- Motion: 1.45 (**LOWEST motion** - intentionally boring)
- "Oh, it's just a guy mixing eggs in a kitchen"
- **CRITICAL PLACEMENT**: Not at the end (resolution), but IN THE MIDDLE (breathing space)

**EPIC LAYER 2:**

**Keyframe 25:** EXTREME close-up - fingers cracking/crushing salt crystals, salt falling (0.80s)
- Dramatic detail returns
- Motion: 2.48
- Back to the epic treatment

**Keyframe 26:** Fork mixing mixture again - see more of the mixture (1.44s)
- Return to macro intimacy
- Motion: 5.70
- Similar to Keyframe 23 but different angle

**Keyframe 27:** Close-up of yellow mixture - salt crystals falling into it, small splashes (1.60s)
- Final epic detail
- Motion: 8.22 (high again)
- Satisfying cause-effect: salt from K25 lands here

**TIMING ANALYSIS:**
- Epic build: 2.08s + 1.92s = 4 seconds of drama
- Mundane interrupt: 0.76s (briefest shot - don't linger on boring)
- Epic resume: 0.80s + 1.44s + 1.60s = 3.84 seconds
- Pattern: **4s EPIC â†’ 0.76s MUNDANE â†’ 3.8s EPIC**

**MOTION ANALYSIS:**
- Epic shots: 9.92, 9.09, 8.22 (high motion, dynamic)
- Mundane shot: 1.45 (lowest motion, static)
- The contrast is QUANTIFIABLE in the data

**WHY THE MIDDLE PLACEMENT WORKS:**

If the mundane shot came at the END, it would feel like resolution/conclusion.

By placing it IN THE MIDDLE, it creates:
1. **Breathing space** - pause between dramatic moments
2. **Reality check** - "remember, this is just breakfast"
3. **Contrast amplification** - makes the return to epic feel MORE epic
4. **Rhythm variety** - prevents monotony of constant intensity

It's like a comedian's timing - the pause makes the next joke land harder.

**THE TRANSPORTABLE TECHNIQUE:**

**"The Mundane Foil"** = Strategic boring shot that makes drama MORE dramatic:

1. **Build with epic close-ups** (4 seconds of intensity)
2. **Insert ONE brief mundane wide shot** (0.5-1 second, static, low energy)
3. **PLACE IT IN THE MIDDLE**, not at the end
4. **Make it the shortest shot** - don't linger
5. **Resume epic treatment immediately** (3-4 seconds to finish)

Key ratio: Epic (4s) : Mundane (0.75s) : Epic (3.8s) â‰ˆ **5:1:5 timing**

The satisfaction comes from **contrast + strategic placement**:
- Not "dramatic then boring" (disappointing)
- Not "boring then dramatic" (slow start)
- But "dramatic â†’ BRIEF boring â†’ MORE dramatic" (amplification)

**For Toothbrush Commercial:**
- Epic Layer 1: Macro bristles spreading paste (2s) + Paste swirling (2s)
- Mundane Foil: Static wide shot of bathroom sink/person brushing (0.75s) - "it's just brushing teeth"
- Epic Layer 2: Extreme close-up bubbles forming (0.8s) + Macro bristle action (1.5s) + Foam spreading (1.6s)
- Total: Same 8-9 second structure with mundane interrupt IN THE MIDDLE

**Key Insight:** The mundane foil is NOT a resolution - it's a PALETTE CLEANSER. Like sorbet between courses, it resets your taste so the next dramatic moment hits harder. The brief duration (0.76s) is crucial - long enough to register "oh, this is normal" but not so long it kills the energy. And the low motion value (1.45 vs 9.92) shows this is intentionally static and boring compared to surrounding shots.

---

---

### **BEAT 4: The Magic Moment - Fire and Butter - COMPLETED**
**Keyframes 28-61** (~11 unique shots, ~22 cuts, 20+ seconds total)

**TECHNIQUE DISCOVERED: "Intercutting Crescendo with Spatial Escalation"**

This beat uses a three-act structure within the intercutting sequence:

#### ACT 1 - SETUP (Keyframes 28-34, ~10s):
**Keyframe 28-29:** Inside knife drawer (inside-object POV), light floods in as drawer opens
**Keyframe 30:** Butter corner being cut - **THE INCITING MOMENT** 
**Keyframe 31:** Wider angle, whole butter packet visible on counter
**Keyframe 32:** Wide establishing shot - pan on stove, butter dropping from above, blue checkered tiles
**Keyframe 33-34:** Close-up hand on gas knob, turns it (motion blur shows movement)

*Setup Pattern:* Inside object â†’ Product moment â†’ Establish space â†’ Action trigger

#### ACT 2 - INTERCUTTING CRESCENDO (Keyframes 35-47, ~7-10 actual cuts, ~6-8s):
**THE DANCE BETWEEN TWO SHOTS:**

Two parallel actions intercut with INCREASING speed and ESCALATING angles:

**FIRE PROGRESSION:**
- Keyframe 35: Flash/ignition at vent bottom
- Keyframe 36-37: Fire rising through vent toward camera
- Keyframe 39: Fire closer (return)
- Keyframe 41: Fire even closer (return)
- Keyframe 43: Fire almost at camera (return)
- Keyframe 45: Fire CONSUMES camera
- **Keyframe 46: EXTREME CLOSE-UP OF EYE** (callback to Beat 1! Sparks reflected in iris)
- Keyframe 47: Fire exploding with sparks

**BUTTER PROGRESSION:**
- Keyframe 38: Overhead - butter falling toward pan
- Keyframe 40: Butter closer to pan (return)
- Keyframe 42: Butter almost landed (return)
- **Keyframe 44: NEW ANGLE - Butter from SIDE** (spatial escalation!)

*Crescendo Pattern:* Not just Aâ†’Bâ†’Aâ†’B cutting faster - **ADDING NEW ANGLES** as tension peaks
- Fire: straight-on â†’ closer â†’ closer â†’ CONSUME â†’ EYE â†’ SPARKS
- Butter: overhead â†’ closer â†’ closer â†’ SIDE ANGLE

**THE PEAK:** Eye shot = maximum tension, human reaction physiologically shown

#### ACT 3 - RESOLUTION (Keyframes 48-61, ONE continuous camera movement, ~3.8s):
**Keyframe 48-50:** Gas knob side view, sparks, blue flame ignites (calm after chaos)
**Keyframe 51:** Overhead - butter lands in pan
**Keyframe 52-61:** **ONE UNBROKEN RISING SHOT:**
- Starts beneath gas knob, blue flame burning
- Camera rises slowly upward
- Passes through the flame level
- Arrives at macro close-up of butter in pan
- Continues rising as butter melts and foams
- Beautiful languid movement = satisfaction/release

*Resolution Pattern:* Chaos (rapid cuts) â†’ CALM (single continuous movement)

**TIMING DATA (from automated analysis):**
- Setup: ~10 seconds of slower cuts (1-3s each)
- Crescendo: Cuts accelerate (1s â†’ 0.8s â†’ 0.6s at peak)
- Resolution: ONE shot of 3.8s (longer than any individual crescendo cut)
- Contrast creates the impact

**THE TRANSPORTABLE TECHNIQUE:**

**"Intercutting Crescendo"** = Making mundane simultaneous actions feel EPIC:

1. **Setup** two parallel actions happening at once
2. **Intercut** between them with DECREASING duration (getting faster)
3. **Escalate spatially** - add NEW ANGLES as you approach peak (not just Aâ†’Bâ†’Aâ†’B)
4. **Peak** with callback/human reaction (eye, face, hand)
5. **Resolve** with ONE LONG continuous movement shot (the payoff breath)

The satisfaction comes from CONTRAST:
- Frantic multicutting â†’ Smooth single take
- Many angles â†’ One revealing movement
- Fast rhythmic â†’ Slow luxurious

**For Toothbrush Commercial:**
- Action A: Water tap turning on (like fire igniting)
- Action B: Toothpaste squeezing out (like butter falling)
- Intercut faster, add angles (tap spray, paste close-up, SIDE angle)
- Peak: Close-up eye/mouth reaction
- Resolve: ONE continuous shot - brush entering mouth, bristles spreading paste

**Key Insight:** The director isn't just cutting back and forth - they're BUILDING SPATIAL COMPLEXITY while ACCELERATING RHYTHM, then releasing ALL that tension with one beautiful sustained movement.

---

### **BEAT 5: Cooking the Omelette - COMPLETED**
**Keyframes 62-71** (~4 cuts, 9.4 seconds total)

**TECHNIQUE DISCOVERED: "Escalating Mundane Foils" + Inside-Object POV Return**

After Beat 4's epic climax, Beat 5 brings us back to earth in STAGES - not one mundane foil, but TWO, escalating from "it's cooking" to "it's boring morning routine."

#### TIMING & STRUCTURE:

**Keyframe 62-63:** Butter melting macro (continuation of Beat 4's 3.84s resolution shot)
- Motion: 5.07 (gentle melting, calm after storm)
- Longest shot in this beat - the payoff breath continues

**Keyframe 64-65:** **INSIDE PAN POV** - egg pouring, camera looking UP at egg stream (2.00s)
- Motion: **12.18 - HIGHEST IN ENTIRE COMMERCIAL!**
- Liquid movement creates maximum motion value
- Third use of inside-object POV signature move
- Still epic treatment

**Keyframe 66:** Egg spreading in pan, macro close-up (1.72s)
- Motion: 5.63 (liquid spreading)
- Still intimate, still dramatic

**Keyframe 67:** **MUNDANE FOIL #1** - Wide shot, checkered blue tiles visible (1.80s)
- Motion: 4.93
- Static angle: "it's just a pan on a stove"
- First reality check

**Keyframe 68-69:** **MUNDANE FOIL #2 (ESCALATED)** - Full body shot, guy in tie reading newspaper
- This is the KEY: not just wide shot of cooking, but full human context
- After all the fire/butter drama: "He's just some dude making breakfast"
- Tie still on, newspaper = everyday mundane normalcy

**Keyframe 70-71:** Clean overhead of finished omelette in pan
- Resolution, ready to plate

**THE ESCALATION PATTERN:**
Epic inside-pan POV â†’ Epic macro â†’ Mundane #1 (wide cooking) â†’ Mundane #2 (full human/boring activity)

Why TWO foils in stages?
- First foil: "This is normal cooking" (context)
- Second foil: "This person is completely unimpressed" (deflation)

**Transportable Technique:**
After climax, don't just add ONE mundane foil - **ESCALATE THE MUNDANITY**:
1. Wide shot showing the action is ordinary
2. THEN wider shot showing the PERSON treating it as ordinary
3. Each stage deflates more, making the epic treatment feel self-aware

For toothbrush: After epic brushing climax â†’ Wide bathroom shot (normal) â†’ Person scrolling phone while brushing (completely mundane)

**Key Insight:** The 12.18 motion value (inside pan POV) is the highest in the commercial, even higher than the fire/butter climax. This is LIQUID in motion - unpredictable, organic. Then we immediately start deflating with mundane foils. The contrast between highest motion (12.18) and mundane deflation is the technique.

---

### **BEAT 6: The Cheese Grater - COMPLETED**
**Keyframes 72-77** (~3 cuts, 4 seconds total)

**TECHNIQUE: Recurring Inside-Object POV (The Signature Move Returns)**

This beat is a MINI-VERSION of Beat 2 (egg breaking) - circling one simple action (grating cheese) with the signature inside-object POV.

#### TIMING & STRUCTURE:

**Keyframe 72-73:** Grater close-up, abstract pattern of holes (1.48s)
- Motion: 10.04 (high - hand moving grater)
- Setup: make the object mysterious

**Keyframe 74-75:** **INSIDE GRATER POV** - looking UP through holes as cheese falls (1.80s - longest in beat)
- Motion: **12.18 (matches Beat 5's highest!)**
- Camera positioned where cheese shavings land
- We see hand/cheese moving above through grating holes
- **FOURTH use of inside-object POV** (fridge, bowl, pan, NOW grater)

**Keyframe 76-77:** Side angle cheese grating + result on omelette (0.72s)
- Motion: 6.36
- Quick resolution, payoff

**Pattern Recognition - The Signature Move:**
This is the FOURTH inside-object POV:
1. Beat 1: Inside fridge looking out
2. Beat 2: Inside bowl looking up at egg
3. Beat 5: Inside pan looking up at egg pour (motion 12.18)
4. Beat 6: Inside grater looking up through holes (motion 12.18)

The high motion values (12.18) for inside-pan and inside-grater show these are LIQUID/PARTICLE shots - inherently high motion.

**Why Signature Moves Work:**
Repeating the inside-object POV 4+ times across the commercial creates:
- **Visual consistency** - we recognize the style
- **Escalating familiarity** - by the 4th time, we EXPECT it
- **Stylistic identity** - this IS the Lurpak visual language

**Transportable Technique:**
Find ONE unique POV and use it 4-5 times minimum. This becomes your signature. For toothbrush:
- Inside toothpaste tube as cap opens
- Inside bristles as paste lands
- Inside mouth as brush enters
- Inside sink drain as water/foam flows down

**Key Insight:** The matching motion values (12.18) for inside-pan and inside-grater aren't coincidence - they're both PARTICULATE shots (liquid, cheese shavings). Inside-object POVs work best when the material is in motion, creating inherent dynamism.

---

### **BEAT 7: Plating and Final Reveal - COMPLETED**
**Keyframes 78-85** (~4 cuts, 6.3 seconds total)

**TECHNIQUE: "Denouement Through Widening" + Brand Reveal**

The final beat reverses the entire commercial's energy through progressive WIDENING of shots.

#### TIMING & STRUCTURE:

**Keyframe 78-80:** Omelette folding/plating close-ups (0.60s + 0.88s)
- Motion: 3.13, 6.58 (medium)
- Quick final intimate moments
- Total: ~1.5s

**Keyframe 81-83:** Medium table shots - plate, water, utensils (0.88s)
- Motion: 6.82
- Pulling back to context

**Keyframe 84:** WIDEST SHOT - full kitchen, guy eating, reading newspaper (part of 4.16s)
- First time we see ENTIRE space
- Checkered tiles, full layout, natural light
- Complete mundane context

**Keyframe 85:** Same wide + **BRAND REVEAL** (rest of 4.16s shot)
- Motion: **0.00 - COMPLETELY STATIC**
- Lurpak butter package center frame
- Title: "Lurpak: Kitchen Odyssey"
- Tagline: "GOOD FOOD DESERVES LURPAK"
- Longest shot after butter melting (4.16s)
- Zero motion = pure static hold on brand

**THE WIDENING PROGRESSION:**
The entire commercial moves from:
- **Micro** (extreme close-ups, molecules, textures) 
- To **Macro** (actions, objects, cooking)
- To **Medium** (person, table, ritual)
- To **Wide** (full environment, mundane reality)
- To **WIDEST + STATIC** (brand reveal, 0.00 motion)

**The Self-Aware Ending:**
Title: "Kitchen Odyssey" - acknowledges the absurdity ("we made an odyssey out of eggs")
Tagline: "Good Food Deserves Lurpak" - justifies it ("but it deserved this treatment")

This self-awareness prevents pretension. The commercial WINKS: "Yes, we went crazy epic. But good ingredients are worth celebrating."

**Final Shot Data:**
- Duration: 4.16s (second longest in commercial after 3.84s butter melt)
- Motion: 0.00 (only completely static shot - intentional brand hold)
- The contrast: highest motion (12.18) to zero motion (0.00)

**Transportable Technique:**
End with self-aware widening that justifies the epic treatment:
1. Quick intimate close-ups (1-2s total)
2. Medium context (1s)
3. Wide mundane reality (2s)
4. WIDEST static brand reveal (4s) with self-aware messaging

For toothbrush:
- Macro foam/teeth (quick)
- Medium mirror shot (context)
- Wide bathroom/person (mundane)
- Widest + product reveal: "[Brand]: Your Daily Ritual" / "Good teeth deserve good care"

**Key Insight:** The 0.00 motion value on the final brand reveal is the ONLY completely static shot in the commercial. After 72 seconds of constant motion (average ~5-7 motion), the commercial goes to ZERO. This stillness makes the brand message land - no distraction, pure focus. The 4.16s duration lets it breathe without feeling too long.

---

## **COMPREHENSIVE SYNTHESIS - THE COMPLETE FORMULA**

### **1. THE THREE-ACT STRUCTURE**

**ACT I: BUILD MYSTERY & ANTICIPATION** (Beats 1-3, 24-26 seconds)
- Beat 1: POV Reversal + Timing Variation (15.8s)
- Beat 2: Fragmenting Time (8.2s)
- Beat 3: The Mundane Foil (8.6s)
- **Function**: Hook viewer, establish signature moves, create anticipation
- **Motion range**: 0.31 to 9.92 (extreme variety)
- **Timing pattern**: Long â†’ Accelerate â†’ Hold â†’ Micro-shots

**ACT II: CLIMACTIC PAYOFF** (Beat 4, 20+ seconds)
- Intercutting Crescendo with Spatial Escalation
- **Function**: Deliver on the anticipation with maximum drama
- **Motion range**: 0.79 to 10.04 (controlled chaos)
- **Timing pattern**: Setup (1-3s) â†’ Crescendo (1s â†’ 0.6s) â†’ Resolution (3.84s hold)

**ACT III: DENOUEMENT & REALITY** (Beats 5-7, 19-20 seconds)
- Beat 5: Escalating Mundane Foils (9.4s)
- Beat 6: Signature Move Return (4s)
- Beat 7: Denouement Through Widening (6.3s)
- **Function**: Ground the epic in reality, justify the treatment
- **Motion range**: 0.00 to 12.18 (extremes - highest and static ending)
- **Timing pattern**: Long holds (3.8s, 4.16s) with brief action bursts

**Total Commercial**: ~70 seconds (1:03 actual), 42 hard cuts detected

---

### **2. THE RECURRING TECHNIQUES (Frequency Analysis)**

**Inside-Object POV: 4 instances**
1. Beat 1: Inside fridge (motion 9.01)
2. Beat 2: Inside bowl (motion 7.51)
3. Beat 5: Inside pan (motion **12.18** - highest!)
4. Beat 6: Inside grater (motion **12.18** - tied highest!)

**Pattern**: Always involves particulate/liquid material = inherently high motion
**Why 4x?**: Enough to establish signature, not so many it becomes predictable
**Application frequency**: Every 15-20 seconds, spread across all three acts

**The Mundane Foil: 3 instances**
1. Beat 3: Wide kitchen shot (0.76s, motion 1.45) - IN THE MIDDLE
2. Beat 5: Double foil - wide cooking (1.8s) + full body (motion 4.93)
3. Beat 7: Widest shot before brand reveal

**Pattern**: Shortest duration (0.76s), lowest motion (1.45), strategic placement
**Application frequency**: After every 2-3 epic beats, escalating in stages

**Fragmenting Time: 2 major instances**
1. Beat 2: Egg breaking (1 second â†’ 8 seconds = 8x expansion)
2. Beat 4: Fire & butter (~2 seconds â†’ 20 seconds = 10x expansion)

**Pattern**: Used for PIVOTAL moments only (not every action)
**Ratio**: 6-10x time expansion through spatial orbiting

---

### **3. MOTION VALUE PATTERNS (The Physics of Drama)**

**Motion Value Hierarchy (0-12.18 scale):**
- **HIGHEST (10-12)**: Liquid/particulate shots (egg pour 12.18, inside grater 12.18)
- **HIGH (7-10)**: Dynamic camera movement (rotations, dollies) or rapid action
- **MEDIUM (4-7)**: Normal action (hand movement, mixing, grating)
- **LOW (1-3)**: Minimal movement (contemplation, slow melts)
- **ZERO (0.00)**: Brand reveal - ONLY completely static shot

**Strategic Motion Use:**
- **Climaxes**: Sustained high motion (Beat 4: 5-10 range maintained)
- **Mundane foils**: Drop to 1-2 range (quantifiable boring)
- **Resolutions**: Medium to low (3-5 range for calm)
- **Brand reveal**: Zero (complete stillness for focus)

**The Contrast Formula**:
Highest motion (12.18) â†’ Zero motion (0.00) = 72 seconds of constant movement â†’ complete stillness

---

### **4. TIMING PATTERNS (The Rules of Duration)**

**Shot Duration Rules Discovered:**

**LONG HOLDS (3-4+ seconds):**
- Opening shots (3.12s) - establish mystery
- Tension peaks BEFORE acceleration (Beat 2: 2.08s before rapid cuts)
- Resolution shots (Beat 4: 3.84s, Beat 7: 4.16s)
- **Rule**: Hold longest at beginning (setup), at tension peak, and at resolution

**MEDIUM HOLDS (1-2 seconds):**
- Standard narrative progression
- Setup angles before action
- **Rule**: Most shots fall in this range for pacing variety

**RAPID CUTS (0.6-0.8 seconds):**
- Climactic moments (Beat 2: 0.60s, 0.64s)
- Accelerating sequences
- Physiological reactions (micro-shots)
- **Rule**: Use sparingly, only at peaks for maximum impact

**MICRO-SHOTS (0.3-0.5 seconds):**
- Eye close-ups, physiological details
- **Rule**: Reserved for extreme emphasis, blink-and-miss tension

**The Timing Progression:**
Long setup (3s) â†’ Build (2s, 1.5s) â†’ Accelerate (1s, 0.8s) â†’ Peak (0.6s) â†’ HOLD resolution (3-4s)

**Critical Ratio**: Shortest cut (0.60s) vs Longest hold (4.16s) = **1:7 ratio**
This extreme range creates rhythmic drama

---

### **5. THE COMPLETE FORMULA (Step-by-Step)**

**PHASE 1: HOOK (First 8-10 seconds)**
1. Start with LONG shot (3+ seconds, medium motion)
2. Use impossible POV (inside object)
3. Color code the mystery (blue = unknown, warm = reality)
4. Accelerate timing toward first reveal
5. **Goal**: Make viewer ask "where am I?"

**PHASE 2: ESTABLISH PATTERN (Next 15-20 seconds)**
1. Pick ONE simple action (egg breaking)
2. Fragment it across 6-8 shots from different angles
3. Include inside-object POV (signature move #2)
4. Build to longest hold (2s) BEFORE climax
5. Accelerate to rapid cuts (0.6s)
6. Insert ONE mundane foil IN THE MIDDLE (0.75s, static)
7. **Goal**: Show your stylistic approach, create anticipation

**PHASE 3: CLIMAX (20-25 seconds)**
1. Setup two parallel actions
2. Intercut between them with DECREASING duration
3. Add NEW ANGLES as you approach peak (spatial escalation)
4. Include human reaction shot (callback)
5. Peak with shortest cuts (0.6s)
6. Resolve with ONE LONG continuous shot (3-4s)
7. **Goal**: Deliver maximum drama, then release tension

**PHASE 4: DENOUEMENT (Final 20 seconds)**
1. Return signature move one more time (inside-object POV)
2. Add escalating mundane foils (wide â†’ wider â†’ widest)
3. Progressive widening of shots
4. End with LONGEST static hold (4s, zero motion)
5. Self-aware title/tagline that justifies treatment
6. **Goal**: Ground the epic, make it feel earned

---

### **6. META-INSIGHTS (Why This Formula Works)**

**Contrast is King:**
- Every technique depends on its opposite
- Epic only works because of mundane
- Fast only works because of slow
- Close only works because of wide
- Motion only works because of stillness

**The Self-Aware Wink:**
- "Kitchen Odyssey" acknowledges absurdity
- Multiple mundane foils prevent pretension
- Final wide shot says "we know this is just breakfast"
- This self-awareness makes the epic treatment EARNED

**Signature Move Frequency:**
- 4-5 repetitions = pattern recognition
- Every 15-20 seconds = regular rhythm
- Placed in different contexts = versatility
- Always with high motion = consistent impact

**The Physiological Hook:**
- Extreme close-ups (eye, pupil, finger) trigger mirror neurons
- Inside-object POVs create spatial disorientation
- Rapid cuts (0.6s) create tension physiologically
- Long holds (3-4s) create satisfying release

**Motion as Narrative:**
- High motion = drama, excitement, action
- Low motion = contemplation, mundanity, calm
- Zero motion = focus, emphasis, conclusion
- The motion VALUES tell the emotional story

---

### **7. TRANSPORTABILITY CHECKLIST**

**For ANY Subject (Toothbrush, Coffee, Running Shoes, etc.):**

âœ“ **Find your signature POV** - Use 4-5 times (inside tube, inside mouth, etc.)
âœ“ **Identify 3-4 simple micro-actions** - Expand each 6-8x through spatial orbiting
âœ“ **Plan mundane foils** - 3 instances, escalating from wide to widest
âœ“ **Structure timing** - Long (3s) â†’ Medium (1-2s) â†’ Rapid (0.6s) â†’ Hold (4s)
âœ“ **Map motion values** - High drama (8-12) â†’ Mundane (1-2) â†’ Static end (0)
âœ“ **Create parallel actions** - For climax intercutting (water + paste, etc.)
âœ“ **Plan spatial escalation** - Add new angles at peak, don't just repeat
âœ“ **Write self-aware tagline** - Acknowledge + justify the epic treatment
âœ“ **Design three-act structure** - Mystery â†’ Climax â†’ Denouement
âœ“ **Use extreme contrast** - Shortest cut vs longest hold = 1:7 ratio minimum

**The Complete Ratio Framework:**
- Act I : Act II : Act III = 1:1:1 (roughly equal thirds)
- Epic : Mundane : Epic timing = 5:1:5 (mundane brief but impactful)
- Setup : Acceleration : Resolution = 3:1:4 (long setup, quick peak, longer resolution)
- Motion High : Motion Zero = Continuous dynamic â†’ final stillness

---

### **8. THE FINAL INSIGHT**

This commercial doesn't just make butter look epic.

It creates a METHODOLOGY for making ANYTHING epic:
1. Approach it with fresh eyes (impossible POVs)
2. Break it into micro-moments (fragment time)
3. Stay grounded in reality (mundane foils)
4. Be self-aware about the absurdity (justified epic)
5. Create contrast at every level (motion, timing, scale)

The formula is **repeatable** and **transportable** because it's not about butter.

It's about CELEBRATION. About treating everyday moments with reverence while acknowledging they're everyday.

**"Good food deserves Lurpak"** = **"Every mundane thing deserves this attention"**

That's the universal truth that makes it work.

---


### **3. Thematic Understanding** Ã¢â€ Â IN PROGRESS
**What:** Analyze WHY the reference works at the mechanical level
**Method:** Beat-by-beat analysis through conversation
**Status:** Beats 1-3 complete, Beat 4 next (the climax)

---

#### **BEAT 1 ANALYSIS: "The Waiting"**
**Duration:** 15-16 seconds | **Shots:** 1-14 | **Energy:** Mysterious, slow burn

**Timings:**
- Opens slow: 2s, 2s, 1.5s (mystery building)
- Accelerates: 0.5s, 0.8s, 1s (action flow)
- Holds: 2.5s (the reveal - man at fridge with slow camera float)
- Quick ECUs: 0.3-0.5s (eye, finger details)

**Key Technique: POV Reversals & Color Coding**
- Inside fridge (blue tones) Ã¢â€ â€™ Outside (warm tones) Ã¢â€ â€™ Inside Ã¢â€ â€™ Outside
- Color tells you which "world" you're in
- Creates spatial disorientation then grounds viewer
- Opens mysterious, reveals it's just a guy at fridge (deflates expectation)

**Transportable:**
- Mystery opening with spatial confusion
- Color as perspective indicator
- Micro/macro oscillation (ECU Ã¢â€ â€™ wide Ã¢â€ â€™ ECU)
- Physiological details (eye dilating, finger tapping)

---

#### **BEAT 2 ANALYSIS: "The Egg Breaking"**
**Duration:** 5.5 seconds | **Shots:** 15-22 | **Energy:** Explosive, violent smash

**Timings:**
- Shot 15-16: 2.0s (setup, camera glides forward on cutting board)
- Shot 17: 1.0s (inside bowl looking UP - establish space)
- Shot 18: 0.5s (egg POV looking DOWN)
- Shot 19: 0.5s (side angle, egg closer)
- Shot 20: <0.5s (side angle, equal space - FASTEST)
- Shot 21-22: 1.0s (explosion holds - PAYOFF)

**Key Technique: Fragmenting Time**
- One action (egg crack) stretched from 1 second Ã¢â€ â€™ 5.5 seconds
- 6 cuts circling action through ~90-180Ã‚Â° of angles
- Formula: Setup (2s) Ã¢â€ â€™ Establish (1s) Ã¢â€ â€™ Accelerate (0.5s each) Ã¢â€ â€™ Hold (1s)

**Why It Works:**
- Each cut = moment to pause and notice
- More cuts = more perceived time = more weight
- Acceleration creates urgency, HOLD creates satisfaction
- Camera "circles" action from multiple perspectives
- Subject grows to consume entire frame

**Transportable to ANY simple action:** Break it into pieces, vary angles, accelerate, hold the payoff

---

#### **BEAT 3 ANALYSIS: "The Whisking"**
**Duration:** 5.2 seconds | **Shots:** 23-27 | **Energy:** Rhythmic, circular motion

**Timings:**
- Shot 23: 1.4s (macro fork mixing - HEROIC)
- Shot 24: 2.0s (wide static kitchen - MUNDANE FOIL - LONGEST)
- Shot 25: 0.9s (ECU crushing salt - HEROIC)
- Shot 26: 0.4s (macro mixture surface - HEROIC - SHORTEST)
- Shot 27: 0.5s (salt falling with splashes - HEROIC)

**Key Technique: The Mundane Foil**
- Pattern: Dramatic Ã¢â€ â€™ **MUNDANE RESET** Ã¢â€ â€™ Dramatic Ã¢â€ â€™ Dramatic Ã¢â€ â€™ Dramatic
- Foil shot is LONGEST (needs time to reset energy)
- Placed in MIDDLE (unexpected, not predictable)
- Creates breathing rhythm: intensity Ã¢â€ â€™ pause Ã¢â€ â€™ intensity

**Why It Works:**
- Contrast makes drama MORE dramatic
- Reset prevents monotony
- Wide static shot shows "it's just a guy cooking"
- Different from Beat 2: causeÃ¢â€ â€™effect (salt crushÃ¢â€ â€™falls), not fragmenting time

**Transportable:** Use boring/static shots strategically to reset energy between dramatic moments

---

#### **PATTERNS ACROSS BEATS 1-3:**

**Each Beat Has Different Energy:**
- Beat 1: Mysterious (long build)
- Beat 2: Explosive (quick smash)
- Beat 3: Rhythmic (circular with pause)
Ã¢â€ â€™ Variety prevents monotony

**Shot Duration Rules:**
- Wider shots hold longer (more info to process)
- ECUs can be very quick (0.3-0.5s)
- Longest shots are "reveal," "reset," or "payoff" moments

**Camera Movement:**
- Used sparingly at sequence starts (adds flair)
- Most shots static (energy from editing, not camera)

---

### **4. Reverse Engineer Script** ✅ IN PROGRESS
**What:** Convert visual beats back into underlying script/action structure
**Output:** Scene-by-scene shotlist with shot #, description, size, angle, time
**Status:** Beat 1 complete, continuing through Beats 2-7

---

#### **BEAT 1 SHOTLIST: "The Waiting"**

| Shot | Description | Size | Angle | Time |
|------|-------------|------|-------|------|
| 1 | Bottles and eggs visible in cool fridge light | Medium | Low angle inside fridge looking up | 3.12s |
| 2 | Eggs in blue-toned light, camera circles | Close-up | Inside fridge, rotating | 2.08s |
| 3 | Abstract view into fridge contents | Medium | Overhead/top-down | 2.24s |
| 4 | Hand enters frame from outside world | Medium | Overhead | 1.76s |
| 5 | Door swings open, light floods in | Wide | Inside fridge looking out (POV reversal) | 1.04s |
| 6 | Fridge door exterior, dog magnet visible | Extreme close-up | Outside, door detail | 0.72s |
| 7 | Man stands at open fridge, tilts head down contemplatively | Medium | Side/front, eye level | 2.16s |
| 8 | Food boxes inside fridge | POV | Man's POV into fridge | 1.32s |
| 9 | Pupil dilates sharply | Extreme close-up | Straight on eye | 0.68s |
| 10 | Finger begins tapping on door frame | Extreme close-up | Detail of finger | 0.68s |
| 11 | Finger tapping on fridge door - full action context | Medium close-up | Side angle | ~1s |

**Total: ~15.8 seconds, 11 shots**

---

#### **BEAT 2 SHOTLIST: "The Egg Breaking"**

| Keyframe | Shot # | Description | Size | Angle | Time |
|----------|--------|-------------|------|-------|------|
| 15-16 | 12 | Hand places two eggs on wooden cutting board, backlit, hand blocks light creating silhouette | Extreme low angle | Side, dramatic backlighting | 1.48s |
| 17 | 13 | Egg approaching bowl edge from below, bowl's curved ceramic edge in foreground | Close-up | Inside bowl POV looking up | 1.44s |
| 18 | 14 | Egg descends toward bowl edge - moment before impact | Close-up | From egg POV looking down at bowl | 2.08s |
| 19 | 15 | Egg almost touching bowl edge | Close-up | Side angle inside bowl | 0.64s |
| 20 | 16 | Egg millimeters from edge - split second before impact | Extreme close-up | Side view very close | 0.60s |
| 21-22 | 17 | Egg smashes - yellow yolk and white explode, shell fragments fly | Close-up | Impact moment held | 1.84s |

**Total: ~8.2 seconds, 6 shots**

---

#### **BEAT 3 SHOTLIST: "The Whisking"**

| Keyframe | Shot # | Description | Size | Angle | Time |
|----------|--------|-------------|------|-------|------|
| 23 | 18 | Fork enters bowl, mixes egg mixture with motion blur (continues for ~4s total) | Macro | On fork, moving with action | 2.08s + 1.92s |
| 24 | 19 | Wide kitchen counter - man's hands holding bowl, blue checkered tiles, cookbooks, Lurpak visible on right (MUNDANE FOIL) | Wide | Side, static, flat | 0.76s |
| 25 | 20 | Fingers cracking/crushing salt crystals between fingers, salt falling | Extreme close-up | Straight on fingers | 0.80s |
| 26 | 21 | Fork mixing mixture again, see more of the mixture surface | Macro | Different angle from Shot 18 | 1.44s |
| 27 | 22 | Salt crystals falling into yellow mixture, small splashes, cause-effect from Shot 20 | Close-up | Overhead of mixture | 1.60s |

**Total: ~8.6 seconds, 5 shots**

---

#### **BEAT 4 SHOTLIST: "Fire and Butter" (Intercutting Crescendo)**

| Keyframe | Shot # | Description | Size | Angle | Time |
|----------|--------|-------------|------|-------|------|
| **SETUP** |
| 28-29 | 23 | Inside knife drawer, light floods in as drawer opens (inside-object POV) | Medium | Inside drawer looking out | ~1.5s |
| 30 | 24 | Butter corner being cut with knife - THE INCITING MOMENT | Close-up | Top-down on butter | ~1.5s |
| 31 | 25 | Wider angle, whole butter packet visible on counter | Medium | Side angle | ~1.5s |
| 32 | 26 | Wide establishing: pan on stove, butter dropping from above, blue checkered tiles visible | Wide | Establishing shot | ~2s |
| 33-34 | 27 | Close-up hand on gas knob, turns it (motion blur shows movement) | Close-up | Side of knob | ~1.5s |
| **INTERCUTTING BEGINS** |
| 35 | 28A | Flash/ignition at vent bottom | Close-up | Straight on vent | ~1s |
| 36-37 | 28B | Fire rising through vent toward camera | Close-up | Straight on, fire approaching | ~1s |
| 38 | 29A | Overhead - butter falling toward pan | Close-up | Overhead | ~0.8s |
| 39 | 28C | Return to fire shot - fire closer to camera | Close-up | Same as 28B, closer | ~0.8s |
| 40 | 29B | Return to butter shot - butter closer to pan | Close-up | Same as 29A, closer | ~0.8s |
| 41 | 28D | Return to fire shot - fire even closer | Close-up | Same as 28B, even closer | ~0.6s |
| 42 | 29C | Return to butter shot - butter almost landed | Close-up | Same as 29A, very close | ~0.6s |
| 43 | 28E | Return to fire shot - fire almost at camera | Close-up | Same as 28B, almost consuming | ~0.6s |
| 44 | 29D | NEW ANGLE - Butter from SIDE (SPATIAL ESCALATION) | Close-up | Side angle - NEW | ~0.6s |
| 45 | 28F | Return to fire shot - fire almost consuming camera | Extreme close-up | Fire fills frame | ~0.6s |
| 46 | 30 | EXTREME CLOSE-UP: Eye with sparks reflected in iris (callback to Beat 1, human reaction) | Extreme close-up | Straight on eye | ~0.6s |
| 47 | 28G | Return to fire shot - fire exploding with sparks | Close-up | Explosion moment | ~0.8s |
| **RESOLUTION** |
| 48-50 | 31 | Gas knob side view, sparks, blue flame ignites - calm after chaos | Medium | Side, static | ~1.5s |
| 51 | 32 | Overhead - butter lands in pan | Close-up | Overhead | ~0.5s |
| 52-61 | 33 | ONE CONTINUOUS RISING SHOT: Starts below gas knob with blue flame, camera rises slowly upward, passes through flame level, arrives at macro close-up of butter in pan, continues rising as butter melts and foams - beautiful languid resolution | Macro to close-up | Continuous rising movement | 3.84s |

**Total: ~20 seconds, 11 unique shots (shots 28A-G and 29A-D are intercutting between 2 setups)**

**Note:** Shots 28 and 29 are reused multiple times during intercutting, getting progressively closer/more intense. Beat 4 ends with Shot 33 resolution.

---

#### **BEAT 5 SHOTLIST: "Cooking the Omelette"**

| Keyframe | Shot # | Description | Size | Angle | Time |
|----------|--------|-------------|------|-------|------|
| 62-65 | 34 | Egg mixture pouring - INSIDE BOWL POV looking DOWN as mixture pours out toward pan below (inside-object POV signature move returns) | Close-up | Inside bowl POV looking down | 2.00s |
| 66 | 35 | Egg mixture flowing in - INSIDE PAN POV from side as liquid flows in (continuation of pour action) | Macro | Inside pan POV side view | 1.72s |
| 67 | 36 | Wide shot: pan on stove, blue checkered tiles visible (MUNDANE FOIL #1) | Wide | Static side angle | 1.80s |
| 68-69 | 37 | Full body shot: man in tie reading newspaper while cooking (MUNDANE FOIL #2 - escalated) | Wide | Full context, person treating it as mundane | ~1.5s |
| 70-71 | 38 | Finished omelette in pan, clean overhead view | Close-up | Directly overhead | ~1s |

**Total: ~9.4 seconds, 6 shots (note: Shot 33 continues from Beat 4)**

---

#### **BEAT 6 SHOTLIST: "The Cheese Grater"**

| Keyframe | Shot # | Description | Size | Angle | Time |
|----------|--------|-------------|------|-------|------|
| 72-73 | 39 | Grater close-up, abstract pattern of holes, hand moving grater | Close-up | Detail of grater surface | 1.48s |
| 74-75 | 40 | Cheese falling through grater holes - INSIDE GRATER POV looking UP (inside-object POV signature move, 4th use) | Close-up | Inside grater POV looking up through holes | 1.80s |
| 76-77 | 41 | Side angle: cheese grating action + result landing on omelette | Close-up | Side angle showing cause and effect | 0.72s |

**Total: ~4 seconds, 3 shots**

---

#### **BEAT 7 SHOTLIST: "Plating and Final Reveal"**

| Keyframe | Shot # | Description | Size | Angle | Time |
|----------|--------|-------------|------|-------|------|
| 78 | 42 | Fork cuts into finished omelette, detail of cutting action | Close-up | Detail of fork cutting | ~1s |
| 79 | 43 | Omelette piece on fork, lifted toward camera | Close-up | Fork with food | ~1s |
| 80 | 44 | Kitchen counter with plates, wider context of cooking scene | Medium | Contextual establishing | ~1.5s |
| 81-82 | 45 | Widest shot yet: full kitchen view, man at counter eating, complete scene revealed | Wide | Static wide establishing | ~2s |
| 83-85 | 46 | BRAND REVEAL: "Good Food Deserves Lurpak" text with product shot - ONLY completely static shot (0.00 motion) | Close-up/Graphics | Static, zero motion, final hold | 4.16s |

**Total: ~6.3 seconds, 5 shots**

---

## **STEP 4 SUMMARY**

**Total Commercial Breakdown:**
- **Total Duration:** ~72 seconds
- **Total Keyframes Extracted:** 85
- **Total Unique Shots:** 46
- **Total Hard Cuts:** 42 (automated detection)
- **Beats:** 7

**Shot Distribution by Beat:**
- Beat 1: 11 shots (mystery building)
- Beat 2: 6 shots (egg breaking)
- Beat 3: 5 shots (whisking with mundane foil)
- Beat 4: 11 shots (fire/butter intercutting - most complex)
- Beat 5: 6 shots (cooking with escalating foils)
- Beat 6: 3 shots (cheese grater)
- Beat 7: 5 shots (plating and reveal)

**Key Observations:**
- Beat 4 has the most complexity: 11 unique shots but ~22 cuts due to intercutting between Shots 28 and 29
- Longest single shot: Shot 33 (rising shot in Beat 4-5, 3.84s)
- Shortest shots: Multiple at 0.60-0.68s during climactic moments
- Inside-object POV used 4 times: Shots 1-5 (fridge), 13 (bowl), 34 (pan), 40 (grater)
- Mundane foils used 3 times: Shot 19 (kitchen), Shot 36 (pan wide), Shot 37 (full body)

---

---

### **5. Transposition to New Subject**
**What:** Find action parallels between reference and new subject
**Example mappings (Lurpak Ã¢â€ â€™ Toothbrush):**
  - Egg approaching bowl Ã¢â€ â€™ Toothbrush approaching mouth
  - Egg cracking/exploding Ã¢â€ â€™ Toothpaste squeezing/bristles spreading
  - Mixing eggs Ã¢â€ â€™ Bristles brushing teeth
  - Gas flame igniting Ã¢â€ â€™ Water turning on
  - Butter melting on pan Ã¢â€ â€™ Toothpaste foam
  - Intercut calm/action shots Ã¢â€ â€™ Same structure preserved

**Output:** Shot-for-shot mapping document
**Creative decisions:** Which actions parallel which, what maintains the feeling
**Status:** NOT STARTED

---

### **6. Shot List Creation**
**What:** Detailed list of every shot needed for new video
**Includes:**
  - Camera angles matching reference structure
  - Movement (dolly, track, static, etc.)
  - Approximate duration
  - Which shots intercut with which

**Output:** Production-ready shot list
**Creative decisions:** Exact framing, composition choices
**Status:** NOT STARTED

---

### **7. Asset Planning**
**What:** Figure out what you ACTUALLY need to create
**Key insight:** Not every frame is a separate shot
  - Some shots are intercuts from the same 10-second take
  - Identify unique setups vs. editorial choices
  
**Output:** 
  - List of unique shots/setups to generate
  - Which frames come from the same source
  - What can be reused/repurposed

**Tools:** Analysis of shot list to minimize generation work
**Status:** NOT STARTED

---

### **8. ComfyUI Generation** 
**What:** Generate the actual image sequences
**Workflows:** 
  - Image generation with ControlNet for composition control
  - Specific workflows TBD as we go
  - Multiple approaches depending on shot type

**Output:** Generated image sequences/frames
**Creative decisions:** 
  - Approval of generations before proceeding
  - Corrections and refinements
  - Agent learns from feedback

**Tools:** ComfyUI with various workflows
**Status:** NOT STARTED

---

### **9. After Effects Assembly**
**What:** Final edit and composite
**Includes:**
  - Timing/pacing to match reference structure
  - Color grading
  - Effects/polish
  - Sound design (if applicable)

**Output:** Final video
**Tools:** After Effects
**Status:** NOT STARTED

---

## Current Status - Session 24nov1322
- **Completed:** Step 1 (Reference Analysis) - All 85 frames extracted and described
- **Completed:** Step 2 (Story Beat Breakdown) - All 7 beats mapped (shots 1-85)
- **Completed:** Video Analysis Package added - automated timecodes, motion data, depth/flow analysis
- **In Progress:** Step 3 (Thematic Understanding) - Beat-by-beat technical analysis
  - Beat 1 COMPLETE: POV reversals, timing variation (keyframes 1-14, 15-16s)
  - Beat 2 COMPLETE: Fragmenting time, accelerating cuts (keyframes 15-22, 5.5s)
  - Beat 3 COMPLETE: The mundane foil, rhythm through contrast (keyframes 23-27, 5.2s)
  - Beat 4 COMPLETE: "Intercutting Crescendo with Spatial Escalation" (keyframes 28-61, ~20s)
    - Discovered: Three-act structure within intercutting (setup â†’ crescendo â†’ resolution)
    - Key technique: Not just cutting faster, but ADDING angles as tension builds
    - Resolution through contrast: Frantic cuts â†’ ONE continuous rising shot
  - **NEXT: Beats 5-7** (keyframes 62-85) - Should go faster as patterns repeat
- **Key insight:** Each beat has different energy/feeling - variety prevents monotony
- **Methodology:** Combine automated timing data with manual frame observation, identify techniques, update THIS DOC only

## For Next Session:
- File to check: video-workflow-map-24nov1322.md (this file)
- Continue with Beats 5-7 - remaining beats should be quicker analysis
- Beats 5-7 likely echo established patterns (intercutting, mundane foil, POV techniques)
- After Beat 7: synthesize universal patterns across entire commercial
- Focus on transportable techniques for toothbrush commercial

## Complete Beat Summary

**Total: 7 beats, 85 shots (many are continuations, actual cuts are fewer)**

1. **The Waiting (1-14):** Mystery and contemplation at the fridge
2. **Egg Breaking (15-22):** Circling one action from multiple dramatic angles
3. **Whisking (23-27):** Making mixing eggs heroic with the "mundane foil"
4. **Fire & Butter (28-61):** The centerpiece - parallel action intercutting with massive tension
5. **Cooking (62-71):** Pouring and cooking the omelette
6. **Cheese Grater (72-77):** Final product integration moment
7. **Plating & Reveal (78-85):** Resolution, satisfaction, branding

## Session Notes
- Beat 4 is the climax - 33 shots of parallel intercutting (butter falling / fire igniting)
- Shot 52-61 is ONE continuous rising camera movement (10 frames extracted)
- "Inside object" POV is a recurring technique: bowl, pan, grater, fridge
- Checkered blue tiles appear repeatedly as grounding element
- Eye close-up from Beat 1 returns in Beat 4 at peak tension
- Wide static shots serve as "mundane foil" to reset perspective

## Key Techniques Discovered:

### **FROM BEAT 1: Mystery Building**
- POV reversals (inside/outside perspective flips)
- Color as spatial indicator (blue = inside fridge, warm = outside)
- Seamless action flow across cuts (no repeated action)
- Timing variation creating rhythm (2s, 0.5s, 0.3s pattern)
- Micro/macro oscillation (ECU Ã¢â€ â€™ wide Ã¢â€ â€™ ECU Ã¢â€ â€™ wide)
- Camera movement restraint (only 3 movements in 14 shots)
- Eye/finger ECUs showing thought physiologically

### **FROM BEAT 2: Making Simple Actions Epic**
- **Fragmenting Time:** Breaking 1-second action into 5.5 seconds
- Spatial variation (~90-180Ã‚Â° camera movement around action)
- Accelerating cuts (2s Ã¢â€ â€™ 1s Ã¢â€ â€™ 0.5s Ã¢â€ â€™ 0.5s Ã¢â€ â€™ <0.5s)
- The HOLD after acceleration (fast fast fast SLOW = satisfaction)
- Size progression (subject grows to consume frame)
- POV flips within sequence (bowl POV Ã¢â€ â€™ egg POV)
- Camera movement at sequence start (adds flair, anticipation)
- Color payoff (yellow explosion as visceral moment)

### **FROM BEAT 3: Rhythm and Contrast**
- **The Mundane Foil:** Intentionally "boring" wide static shot that resets energy
- Place contrast in MIDDLE (unexpected, not predictable)
- Foil shot is LONGEST in sequence (needs to actually reset)
- Creates breathing rhythm: intensity Ã¢â€ â€™ pause Ã¢â€ â€™ intensity
- Makes dramatic shots feel MORE dramatic through contrast
- Different action types create variety: circular (whisking) vs. explosive (egg) vs. mysterious (waiting)
- CauseÃ¢â€ â€™effect progression (salt crushing Ã¢â€ â€™ falling) moves action forward

### The Intercutting Principle:
- Extreme close-ups of mundane actions
- Cut to calm wide shot for "dry humor foil"
- Back to intense dramatic detail
- Repeat to build rhythm and tension

### The Escalation Pattern (Beat 4):
- Setup two parallel actions
- Intercut between them
- Increase cutting speed as both actions near completion
- Build to climactic moment
- Resolve with beautiful continuous shot

### Camera Movements:
- Dolly forward (exploration, mystery)
- Rotation around subject (building suspense)
- Rising shots (revealing, elevation)
- Macro tracking (following action intimately)
- "Inside object" POV (immersive, unusual perspectives)

### The Core Philosophy:
**The mundane made extraordinary** - Every technique serves to elevate simple cooking actions into epic, beautiful moments through:
- Extreme angles (inside bowl, inside pan, inside grater)
- Dramatic lighting (backlit, high contrast)
- Intercutting for tension (parallel actions)
- Product integration at peak moments (butter cutting, melting, branding)
- Grounding shots that remind us it's just a guy making breakfast

### Narrative Arc:
1. **Setup:** Contemplation and decision (what to make?)
2. **Rising Action:** Preparation (eggs, mixing, salt)
3. **Climax:** The magical cooking moment (fire + butter)
4. **Falling Action:** Completion (cooking, cheese)
5. **Resolution:** Satisfaction (eating, branding)

---

## Notes for Future Chats
- Step 2 (Beat Breakdown) is complete
- Step 3 (Thematic Understanding) in progress - beat-by-beat analysis
- Methodology: Conversation-based observation, not elaborate documentation
- For each beat: watch shots, time them, identify 1-2 key techniques
- Keep docs short and actionable - value is in the observation process
- After all 7 beats: synthesize universal patterns across entire commercial
- Focus on what's transportable to toothbrush commercial in Step 5
- **Beat 4 is the climax (33 shots)** - parallel intercutting of butter falling + fire igniting
  - This will be the most complex beat to analyze
  - Key technique is intercutting two parallel actions with accelerating speed
- Update this document at end of each session with NEW TIMESTAMP
- Agent should focus on where it adds value: pattern recognition, organization, systematic observation

---

## SESSION UPDATE - 25 November 2024

**STEP 4 COMPLETED ✅**

All 7 beats have been converted to detailed shotlist format:
- 46 unique shots identified across 85 keyframes
- Complete breakdown: keyframe #, shot #, description, size, angle, time
- Intercutting patterns documented
- Signature techniques tracked

**Ready for Step 5:** Transposition to toothbrush commercial

---

## STEP 5 UPDATE - 25 November 2024

### **5. Transposition to New Subject - METHODOLOGY DEFINED**

**CRITICAL INSIGHT:**
Lurpak analysis is a TOOLKIT and REFERENCE, not a TEMPLATE.
- Do NOT copy shot-for-shot
- Do NOT force 1:1 beat mapping
- Define our story first, THEN consult techniques

**The Process:**

**5.1 Define Toothbrush Story Beats** (our narrative - 6-7 beats)
- What story do WE want to tell?
- What's the emotional arc?
- What are the key moments?

**5.2 Write Basic Script Per Beat** (simple action lines)
- What happens in each beat?
- Core actions without camera work

**5.3 Selective Technique Application**
- Consult Lurpak toolkit: which techniques enhance OUR beats?
- Example: "Minty freshness moment" → maybe intercutting (water + paste)
- Example: "Groggy morning" → maybe POV reversal (inside cabinet)
- Borrow what works, skip what doesn't

**5.4 Shot-for-Shot Mapping** (only for borrowed techniques)
- Detailed implementation of selected techniques
- Adapted to toothbrush context

**Available Toolkit from Lurpak:**
- Inside-object POV (4x in Lurpak - use where relevant)
- Intercutting crescendo (for parallel actions with shared endpoint)
- Fragmenting time (for key micro-actions worth stretching)
- Mundane foils (for grounding epic moments)
- POV reversals (for spatial mystery)
- Camera movement as punctuation (scene transitions)
- Timing ratios (0.6s rapid, 3-4s holds)
- Motion value contrasts (12.18 → 0.00)

---

### **STEP 5.1 - DEFINE TOOTHBRUSH STORY BEATS**

Starting now...

**DECISION: SHOWER COMMERCIAL**

After exploring mosquito bite (too microscopic/abstract, clarity issues), we chose **SHOWER** because:
- Every shot is clear and recognizable
- Better shot size variety (ECU, CU, Medium, Wide all work)
- Universal morning ritual
- Rich liquid motion (12.18 motion values)
- Multiple distinct actions (turning water, testing temp, soaping, shampooing, rinsing)
- Inside-object POV opportunities (showerhead, drain, behind curtain)
- Natural transformation arc (groggy → refreshed)
- Parallel intercutting potential (water heating + person approaching)

---

## **SHOWER BEAT STRUCTURE - Draft 1**

Mapping to Lurpak's rhythm and energy variety:

**Beat 1: "The Approach"** (~15s)
- Mystery/exploration (like fridge interior)
- Energy: Mysterious, slow contemplation
- Actions: Bathroom door, shower curtain closed, POV reveals

**Beat 2: "The Turn"** (~8s)  
- Explosive mini-climax (like egg breaking)
- Energy: Sudden action, fragmented
- Actions: Hand turns faucet, water pressure builds, first spray

**Beat 3: "The Test"** (~8s)
- Rhythmic with mundane foil (like whisking)
- Energy: Pause, reality check
- Actions: Hand testing water temp, adjusting, WITH wide mundane bathroom shot

**Beat 4: "The Water Moment"** (~20s)
- CLIMAX intercutting (like fire + butter)
- Energy: Maximum drama
- Actions: Water rushing through pipes + person entering shower (intercutting to "water hits body")

**Beat 5: "The Wash"** (~9s)
- Deflation, grounding (like cooking with foils)
- Energy: Calm after storm
- Actions: Shampooing, soaping, with mundane wide shots of just showering

**Beat 6: "The Rinse"** (~4s)
- Signature move return (like grater)
- Energy: Quick, satisfying
- Actions: Final rinse, inside drain POV, water flowing

**Beat 7: "The Reveal"** (~6s)
- Widening, brand (like Lurpak end)
- Energy: Resolution, confidence
- Actions: Stepping out, steam, mirror, towel, brand message

**Total: ~70 seconds**

---

Does this beat structure work? Should we adjust any beats before writing the simple script?

---

## SESSION UPDATE - 25 November 2024 - END OF SESSION

**STEP 5 STARTED - NEW METHODOLOGY ESTABLISHED**

**Key Decision:** Instead of direct transposition (Lurpak → Toothbrush), we're using Lurpak as a TOOLKIT.

**Process:**
1. Choose subject with rich visual potential (decided: SHOWER)
2. Identify 20-30 visual highlights FIRST
3. Build 7 beats around best highlights
4. Selectively apply Lurpak techniques where they enhance our story

**New Document Structure:**
- **REFERENCE BIBLE** (this doc): Lurpak analysis, complete toolkit, consult when needed
- **PRODUCTION DOCUMENTS** (separate): Active creative work for each new commercial

**Current Production:**
- Subject: Shower commercial
- Theme: "Sensory satisfaction - the mundane is extraordinary"  
- File: `shower-commercial-PRODUCTION-25nov2024.md`
- Status: 30 visual highlights identified, climax structure being decided, 7-beat structure next

**Handoff File:** `SHOWER_HANDOFF_PROMPT.md` - Ready for next session

---

**LEARNING FROM THIS SESSION:**

**What makes analysis valuable:**
- Understanding WHY techniques work (context creates meaning)
- Recognizing visual highlight requirements (every beat needs a focus)
- Identifying intercutting chemistry (shared endpoints, clear progression, visible advancement)
- Camera as narrative punctuation (movement = transitions, static = experiencing)
- Proximity stretches time (ECU fragments actions into more cuts)

**For ComfyUI generation:**
- Shots can't be generated in isolation - need to know what comes before/after
- Intercutting requires CONSISTENT angles across multiple returns
- Shot composition directly affects perceived duration
- Engineering contrast (mundane foils) as important as epic shots

**For After Effects editing:**
- Timing ratios create emotion (0.76s mundane after 4s epic = deflation)
- Rhythm is mathematical, not arbitrary
- Context determines meaning (same shot = different impact based on placement)

This methodology preserves the director's creative process while using AI for technical execution.

---

# WORKFLOW DOC UPDATE - SESSION DEC 3, 2024

**ADD THIS TO THE END OF YOUR video-workflow-map-25nov2024.md FILE**

---

## SESSION UPDATE - 03 December 2024

**MAJOR METHODOLOGY SHIFT: From Shot Lists to Beat Guides**

**Critical Realization:**
Precise shot-by-shot planning doesn't work for GenAI workflows. Need **structured improvisation** instead:
- Lock the BEATS (timing, energy, story moments)
- Lock the TECHNIQUES to try
- But LEAVE FLEXIBLE: exact angles, compositions, number of cuts

**Why this matters for GenAI:**
- AI might give you something BETTER than planned
- Fighting for exact composition = fighting the medium
- Need to adapt in real-time during "shooting/generation"
- Like jazz: know the chord changes, improvise the melody

**Back to Teeth Brushing (Not Shower):**
- Returned to original teeth brushing concept
- Working on Beat 4 "THE CLIMAX" transposition
- Water rushing through pipes + Paste pushing through tube = meeting on brush
- Discovered Shot 26 "stone drop" principle from Lurpak

**NEW TOOL DEVELOPMENT: BEAT CANVAS**

**Purpose:** 
Build canvas tool that combines Figma + ComfyUI + Premiere + Storyboarding
- See reference and generated shots side-by-side
- Version management at shot level
- Beat structure guides without constraining
- Drag-and-drop workflow from ComfyCloud generation
- Timeline playback and export

**Status:** 
- Comprehensive workplan created (BEAT-CANVAS-WORKPLAN-03dec2024.md)
- Tech stack decided: React + TypeScript + Vite
- Development environment: Cursor
- Ready to build Phase 1 (foundation)

**Documents Created:**
- **Workplan:** BEAT-CANVAS-WORKPLAN-03dec2024.md (add to project)
- **Production Doc:** teeth-brushing-PRODUCTION-03dec2024.md (add to project, replaces 26nov version)
- **Reference Bible:** video-workflow-map-25nov2024.md (this document - add this update to end)

**Next Actions:**
1. Initialize Beat Canvas project (Vite React TypeScript)
2. Build Phase 1: Basic timeline with Lurpak reference frames
3. Continue with teeth brushing Beat 4 using beat-guide methodology
4. Test workflow: generate in ComfyCloud → drag into Beat Canvas

