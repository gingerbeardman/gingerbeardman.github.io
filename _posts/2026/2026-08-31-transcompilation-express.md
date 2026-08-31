---
layout: post
title: "Transcompilation Express"
date: '2026-08-31T22:07+01:00'
tags:
- gamedev
- snes
- lua
- love2d
- swift
- dreamcast
- wii
- tooling
- videogame
nouns:
- Love2D
- Lua
- Swift
- WASM
- C
- Super Nintendo
- SNES SDK
- SNES
- SFC
- Sega Dreamcast
- Dreamcast
- Nintendo Wii
- Wii
- llvm-mos
- 65816
- 6502
- w2c2
- transpiled
featured: false
pinned: false

---

I wanted to talk briefly about a surprising new addition to my toolbox: [transcompilation](https://en.wikipedia.org/wiki/Source-to-source_compiler).

I've used it twice this year to startling effect.

----

## Lua on SNES?

I wanted to make a Super Nintendo (SNES/SFC) game but didn't fancy learning a new SDK, so I wondered if I could write a game using the tools I know and somehow get it running on hardware. As with many of my projects, it began with thinking about a solution which is not normally advisable and perhaps even impossible.

So I wrote a little driving platform game in Lua/Love2D to a point where it was playable on my Mac. I built it to self-imposed SNES-style constraints: 8-bit integer maths (via a small library I wrote), plus aligning all graphics to an 8px grid, and mapping controls to suit the platform. I then transpiled the Lua to C and did a small amount of work to hook it into an existing minimal SNES SDK, my [homebrew toolkit](https://github.com/gingerbeardman/snes-homebrew), compiled with llvm-mos.

It worked really well. I'd say my Lua game was about 90% accurate to SNES hardware limitations. After fixing the broken things, reworking a few other small bits, and making sure the levels were not too crowded, the C code hits 60fps with no ASM! This is because modern compilers like llvm-mos are built on the knowledge and improvements we've gained since the 1990s. Even though my maths is 8-bit running on the 65816 in 6502 mode, the compiler uses imaginary registers located in the fast zero page to make the CPU more capable than it really is. Developers used this trick back in the day, and now the compiler just does it for you. I don't think developers would have considered shipping whole SNES games in C back in the day, the tools just weren't as well optimised, but today it's absolutely possible.

----

## Swift on Sega Dreamcast and Nintendo Wii?

Starting a SNES game was a diversion and palate cleanser from my work on [Jinks](https://jinks.gg), which is my new way of making games that comprises a game engine that targets a wide range of platforms, an innovative IDE, and a different kind of language that empowers humans to make games more easily, quickly, and with less hassle overall.

When I came back to Jinks I wondered if I could use the same transcompilation trick to get my Swift code running on more platforms. It was easy to get Swift to work on the web because the Swift ecosystem provides support for that, which is what I used for the web build I submitted to the gamejam. But Swift can't compile to SH4 for Dreamcast, or PPC for Nintendo Wii, so…what to do? 

After a bit of digging on GitHub I found [w2c2](https://github.com/turbolent/w2c2) which transpiles WASM to standard C. The process is obviously bonkers, totally OTT, like cracking a nut with a sledgehammer, as it results in tens of thousands of C files. So compilation takes ages, binary sizes are large, and execution less than optimal. But, surprisingly, the game ran full speed on Wii. Dreamcast only hit 20fps, for a variety of reasons but mostly due to the overhead. The proof is in the pudding!

----

## Moving on up

Today I no longer use the crazy Swift > WASM > C > SH4 or PPC hop-skip-jump, but it proved itself as a great prototyping tool. Rewriting and converting the Jinks engine from Swift to C has seen near instant build times, tiny binary sizes, and much faster execution. It runs at 60fps on Dreamcast with a bunch of headroom.

But I am absolutely certain I'll use transcompilation during the prototyping phase of future projects.