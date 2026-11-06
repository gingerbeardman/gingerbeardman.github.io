---
layout: post
title: Shuhari and the current tech landscape
date: '2026-11-06T10:18+00:00'
tags:
- japanese
- philosophy
- technology
- history
featured: false
pinned: false
---

Shuhari (ja: 守破離) is a Japanese concept that describes the stages of learning on the way to mastery.

It's usually translated as "follow the rules, break the rules, transcend the rules," but I like to think of it as "adhere to the system, fuck the system, …now we have a new system."

The game industry right now feels like it's well into the "break the rules" stage of Shuhari. People are recompiling games to run anywhere (even in your browser), and cease-and-desist letters are flying. When will the dominoes stop falling, and what will the landscape look like?

That brings me back to something I wrote about a couple of months ago (though at the pace things are moving, it feels like a year ago): [Games at the press of a button: The Rip-O-Bot (1989)](/2026/08/02/games-at-the-press-of-a-button-the-rip-o-bot/).

In 1989, *Bubble Bobble* designer Fukio Mitsuji imagined a machine that could generate copycat games at the press of a button. His answer was that, in the end, the game is the idea. If we're in Shuhari's "break" stage now, the question is what the new system will look like when things settle.

## How goes it?

Of course, decompilation has been possible since the first software was written, and today can be as easy as loading a binary into Ghidra and pressing decompile. Compiling the code goes the other way, and whilst a little bit more involved it's still pretty standard stuff. If you're wondering how the quality of the decompilation and recompilation is, it's not guaranteed (as it evident by the poor quality of some of them) but it can be proven along the way. Decompilation can be proven through static analysis and, naturally, recompilation. The operation of the recompiled game can be validated by comparing memory contents, driving with input scripts and checking the game behaves identically, and even comparing graphics at a pixel level. The connecting glue most of these "recomps" seem to add are system specific stuff: bespoke graphics renderers to fit the host system, control and user interface layers, and sometimes quality of life features. Of course, LLMs/agents can make all of this iteration so much easier and quicker so it's no surprise they are responsible for this new wave of game releases, but make no mistake all of this is possible without their use. It would just take a lot longer.

## What next?

It seems increasingly likely as time goes on that the future of game making, and software development on the whole, will not involve coding as we have known it for much of the last century. That both terrifies and excites me in equal measure. What a wild and crazy time to be alive! At this point I have no idea how things will be at the end of the month, but I'm excited to find out.

This came out of [an exchange with Kuniaki Watanabe](https://twitter.com/k_u/status/2091857533275426822), creator of [MaBoShi](/tags/maboshi/).

