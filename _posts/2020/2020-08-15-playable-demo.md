---
layout: post
title: 'Daily Driver: Playable Demo'
tags: [dailydriver, playdate, software]
nouns: [Daily Driver, Playdate, SDK, 60fps]
image: /images/posts/daily-driver-playable-demo.gif
---

![GIF](/images/posts/daily-driver-playable-demo.gif#playdate)

A made a demo build of Daily Driver. It is based on code a couple weeks old (dated **30 July 2020**) so whilst not representative of where I am right now with the game it does show my progress since the last build I shared at the start of June.

Controls

- any combination of d-pad, A/B, Crank
- d-pad U/D, or A/B = accelerate/brake
- d-pad L/R, or Crank = steer left/right

Notes

- runs at 60fps on device (50fps in Simulator)
- pressing Menu twice will reset the current stage layout
- pressing Menu then Options will load the next stage
- 19 different stages (all cone layouts in this build)
- includes level editor!

Debug Keys for game (simulator only):

- E = open level editor
- F = toggle fps indicator
- J = jump!
- L = list all sprites
- N = next stage
- P = play replay data
- R = print replay data to console
- T = toggle telemetry
- U = toggle frame limiter

Controls for editor (simulator only):

- d-pad = move cursor
- A = place an object or increment object under the cursor
- B = toggle precision mode
  - cursor moves in smaller increments (5px vs 20px)
  - drag/move item under cursor
  - A = delete item under cursor

Debug Keys for editor (simulator only):

- B = new blank stage
- D = dump stage JSON to console (for copy and pasting)
- E = exit level editor
- O = output stage as “m-edited.json” in game Sandbox directory
- Z = undo (deletes last item placed)
