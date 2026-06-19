---
layout: post
title: "New (Old) 3D Golf: porting PC-9801 & Virtual Boy to Mega Drive"
date: '2026-06-19T17:26+01:00'
modified: '2026-06-19T22:19+01:00'
tags:
- japanese
- golf
- videogame
- tesoft
- hacking
- megadrive
- virtualboy
- pc98
- reverseengineering
- romhack
nouns:
- T&E SOFT
- New 3D Golf Simulation
- T&E Selection
- Eight Lakes G.C.
- Seven Lakes G.C.
- Papillon C.C.
- PC-9801
- PC-98
- Virtual Boy
- T&E Golf
- Sega Mega Drive
- Mega Drive
- D4 Enterprise
image: /images/posts/new-old-3d-golf.jpg
featured: true
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2052510553155785035
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mlca2zdyu22s
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/116534829535043337

---

The Japanese Mega Drive ports of T&E SOFT's [New 3D Golf Simulation](/2024/11/09/new-3d-golf-simulation-video-game-series/) series are my favourite golf games, and recently I've been living inside their ROMs.

As with all the craziest ideas, it began with a "I wonder if I could"… In the early hours of one April morning I managed to pull a single course out of the game—its terrain and flyby data—and reimplement it in a viewer of my own, written in Three.js. Over the following week or so of continued reverse engineering, that viewer quietly grew into something resembling a 3D golf game running in the browser.

Understanding the data that well meant I could go the other way, too—[back into the original Mega Drive games](https://bsky.app/profile/gingerbeardman.com/post/3mkgnbdzljc2o) themselves. First I added a terrain modifier. To test it I [flattened the entire course as flat as a pancake](https://bsky.app/profile/gingerbeardman.com/post/3mkkxeaebm22c) to check it was working, then cranked it up to 11 into a sort of ["Hyperactive Terrain Mode"](https://bsky.app/profile/gingerbeardman.com/post/3mkpwexii4c2t) that warps the fairways into something wild.

An early attempt changed its mind on every run; turned out I was seeding it from an uninitialised memory location. 🤦 With no debugger console to hand, I'd been hunting bugs like this the crude way—scribbling values into the cartridge's SRAM (its battery-backed save memory) and reading them back out, a poor man's `printf`. So it wasn't exactly straightforward.

Once that was sorted, I gave the 32-year-old game some [brand new, custom user interface](https://bsky.app/profile/gingerbeardman.com/post/3mkt6k57nlc2e) to match.

{% youtube HHbEVRtbw7Q 4/3 %}

Next I wondered if the course data was the same across all of the four Mega Drive games, could it be the same across the games on other platforms? The answer is yes: [the same course data format](https://bsky.app/profile/gingerbeardman.com/post/3ml2k552qis2f) turns out to be used right across the series, from the original PC-9801 games (and almost certainly X68000 and FM Towns) through to the Mega Drive and even the Virtual Boy. If my (little-endian) maths is correct that's a total of 7 unique courses, all sharing one format. And since I could already read the courses, I could write them too—patching the games to pick a course at random, or to load one that was never available on the Mega Drive in the first place.

That last part is the really fun bit. (Can this even be more fun?)

----

Here are three courses running on real Mega Drive hardware for the first time:

## T&E Selection

Extracted from the PC-9801 add-on course disk:

> This course is somewhat unique as it has messages spelled using coloured topology:  
> the 1st has "GO!" by the tee position; the 18th has "T&E" just beyond the final green

{% youtube duXwfq-F-CA 4/3 %}

----

## Eight Lakes G.C.

Also extracted from PC-9801 add-on course disk:

> A fact perhaps only I care about: [during development, prior to Feb 1990, it was *Seven Lakes G.C.*](https://bsky.app/profile/gingerbeardman.com/post/3mmmt2mkrzc2z)

{% youtube J0PliXErDNU 4/3 %}

----

## Papillon C.C.

Extracted from the Virtual Boy game *T&E Virtual Golf*:

> It's called Papillon—the French word for butterfly—because the course holes were laid out in the shape of a butterfly. Which was surely a nod to the shape of the Virtual Boy controller.

{% youtube 8Hpnm4w4EDU 4/3 %}

That last one needed a little extra work. T&E Golf on Virtual Boy doesn't have a hole flyby, so I had to generate the camera path myself: a bezier curve from tee to pin, nudged towards the centre point of the visible course as it appears on the mini-map.

Playing these on Mega Drive is truly special and the effort was very much worthwhile. 

----

## What Next?

There's an extra bit of hacking I'm working on but am unsure if it will lead to anything, but if it does it will need a post all of its own. Hold your thumbs. Fingers crossed. 🤞

It would be possible to release a small script which given both original games would do the extraction and patching, but for now I don't feel comfortable doing that. I still need to figure out the correct tree mapping for each game, decide which of the four Mega Drive games is most suited to each of the three new courses, add new title screens and a few more bits of detail work.

I'd love to [see these ported courses released officially](https://bsky.app/profile/gingerbeardman.com/post/3mnhbioqr4s2f) some day—the series IP lives on with D4 Enterprise—so if you know anybody there please hook us up!

But for now it's just me, a pile of disassembly files, rizin and vasmm68k, the BlastEm emulator, and a soft spot for blue skies and FM synth — still trying to get the ball in the hole. ⛳️🏌️‍♂️