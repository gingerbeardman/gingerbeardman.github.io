---
layout: post
title: 'Slugs on a Cube: interactive animation'
last_modified_at: '2025-01-20T12:13+00:00'
date: '2025-01-16T17:43+00:00'
tags:
- animation
- love2d
- lua
nouns:
- Love2D
- Japhy Riddle
- Japhy
image: /images/posts/voxel-slugs.png
comments: https://twitter.com/gingerbeardman/status/1879562691129553318

---

Japhy Riddle makes art, music, films, and animations. He's also a retro technology enthusiast. Naturally, he combines all these skills and interests into wonderful creative output! I follow Japhy on social media and love his high quality videos and animations. [Check him out on YouTube](https://www.youtube.com/channel/UCKeTCCYBg0CFrFHm2nxx_rQ)!

## Voxel slugs traversing an invisible cube's edges

A few of days ago a new animation of his popped up: [it shows three coloured slugs moving around the edge of an invisible cube](https://www.youtube.com/watch?v=0gEHldnSH08), positioned and directed so that they never quite touch each other! Japhy created the animation by printing out each frame and combining them onto the final result, leaning into the print offset registration errors that are so lovely.

{% youtube 0gEHldnSH08 %}

## Interactive version

I thought it would be fun to create an interactive version of the animation, and I chose to do it in LÖVE (aka Love2D, though I am doing 3D rendering in software). I stopped short of imitating the print errors, but that would be possible by drawing and compositing in the same way that Japhy did it. Here it is:

{% youtube 1PK0K_CsJPU %}

## Three's a crowd

I spoke with Japhy and we discussed how possible it might be to maximise the number of slugs. If they're six cubes long there could be 4 of them on the cube rather than 3. So, with the aid of my interactive and controllable version of the animation, I figured that out and added it. If the slugs are shorter then more of them can wander around the cube, and similarly if the cube is larger. But those are challenges for another day! I might even make a screen saver of this at some point.

![IMG](/images/posts/voxel-slugs-banner.png)

## Download

You can download it (as .love, macOS .app, or Windows .exe) and play around with the animation yourself. There are a bunch of hot keys that modify the cube in various ways. Have fun!

[gingerbeardman.itch.io/voxel-slugs](https://gingerbeardman.itch.io/voxel-slugs)

 