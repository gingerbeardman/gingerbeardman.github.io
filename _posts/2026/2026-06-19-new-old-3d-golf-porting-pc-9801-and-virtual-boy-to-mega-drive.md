---
layout: post
title: "New (Old) 3D Golf: porting PC-9801 & Virtual Boy to Mega Drive"
date: '2026-06-19T17:26+01:00'
modified: '2026-06-20T11:27+01:00'
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
- NEC PC-9801
- PC-9801
- PC-98
- Nintendo Virtual Boy
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

As with all the craziest ideas, it began with a "I wonder if I could"… In the early hours of one April morning I managed to pull a single course out of the game—its terrain and flyby data—and reimplement it in a viewer of my own, written in Three.js. Over the following week or so of continued reverse engineering, that viewer quietly grew into something resembling a 3D golf game running in the browser. Finding the data had some big clues: we know that there are 18 holes, the distances of each hole and their sequence order, and I'd read the courses were made of ~256 points, so adding all these heuristics together meant it was much easier to find the data than finding a needle in a haystack.

Understanding the data that well meant I could go the other way, too—[back into the original Mega Drive games](https://bsky.app/profile/gingerbeardman.com/post/3mkgnbdzljc2o) themselves. First I added a terrain modifier. To test it I [flattened the entire course like a pancake](https://bsky.app/profile/gingerbeardman.com/post/3mkkxeaebm22c) to confirm my understanding was correct, and then cranked it up to 11 into a sort of ["Hyperactive Terrain Mode"](https://bsky.app/profile/gingerbeardman.com/post/3mkpwexii4c2t) that warps the fairways into something wild. Both worked well.

An early attempt changed its mind on every run; turned out I was seeding it from an uninitialised memory location. 🤦 With no debugger console to hand, I'd been hunting bugs like this the crude way—scribbling values into the cartridge's SRAM (its battery-backed save memory) and reading them back out, a poor man's `printf`. So it wasn't exactly straightforward.

Once that was sorted, I gave the 32-year-old game some [brand new, custom user interface](https://bsky.app/profile/gingerbeardman.com/post/3mkt6k57nlc2e) to match.

{% youtube HHbEVRtbw7Q 4/3 %}

Next I wondered if the course data was the same across all of the four Mega Drive games, could it be the same across the games on other platforms? The answer is yes: [the same course data format](https://bsky.app/profile/gingerbeardman.com/post/3ml2k552qis2f) turns out to be used right across the series, from the original PC-9801 games (and almost certainly X68000 and FM Towns) through to the Mega Drive and even the Virtual Boy. If my (little-endian) maths is correct that's a total of 7 unique courses, all sharing one format. There's some reformatting that needs to be done, but the data structure is the same. And since I could already read the courses, I could write them too—patching the games to pick a course at random, or to load one that was never available on the Mega Drive in the first place. PC-9801 to Mega Drive required sorting the polygons to match how they were expected to be stored.

But I guess T&E SOFT used the same POLYSYS-CAD software to design all the courses over several years? I love how such a tool could have that sort of longevity.

![IMG](/images/posts/new-old-golf-polysyscad.jpg "ポリシスCAD (POLYSYS-CAD) PC software used to design hole topology mesh of only ~256 points")
{:.tofigure}

----

That last part is the really fun bit. (Can this even *be* more fun?)

Here are three courses running on the Mega Drive for the first time:

## T&E Selection

Extracted from the [NEC PC-9801 add-on course disk](https://www.mobygames.com/game/102547/new-3d-golf-simulation-te-selection/):

> This course is somewhat unique as it has messages spelled using coloured topology:  
> the 1st has "GO!" by the tee position; the 18th has "T&E" just beyond the final green

{% youtube duXwfq-F-CA 4/3 %}

----

## Eight Lakes G.C.

Also extracted from [NEC PC-9801 add-on course disk](https://www.mobygames.com/game/71396/new-3d-golf-simulation-eight-lakes-gc/):

{% youtube J0PliXErDNU 4/3 %}

> A fact perhaps only I care about: [during development, prior to Feb 1990, it was *Seven Lakes G.C.*](https://bsky.app/profile/gingerbeardman.com/post/3mmmt2mkrzc2z)

![Seven Lakes G.C.](/images/posts/new-old-golf-seven-lakes.webp "Seven Lakes G.C., as seen in Comptiq Vol. 63 & Oh! PC Issue 117")
{:.tofigure}

----

## Papillon C.C.

Extracted from the Nintendo Virtual Boy game [T&E Virtual Golf](https://www.mobygames.com/game/15306/golf/):

> It's called Papillon—the French word for butterfly—because the course holes were laid out in the shape of a butterfly. Which was surely a nod to the shape of the Virtual Boy controller.

{% youtube 8Hpnm4w4EDU 4/3 %}

That last one needed a little extra work. T&E Golf on Virtual Boy doesn't have a hole flyby, so I had to generate the camera path myself: a bezier curve from tee to pin, nudged towards the centre point of the visible course as it appears on the mini-map.

Playing these on Mega Drive is truly special and the effort was very much worthwhile. 

----

## A few things I learned along the way

Living inside the disassembly for weeks, I kept tripping over the little decisions T&E SOFT made all those years ago. Some are clever, some are quietly bonkers, and all of them made me grin:

- **The hole is three times too big.** The cup grabs any ball within ~6.7 inches—triple a real hole's radius—so balls drop from further out than they look. A fudge for the 320×224 screen, where ball and cup were both sub-pixel.
- **The polygons pre-sort themselves.** No depth buffer on the Mega Drive, so the draw order is baked into the course data, back-to-front (the painter's algorithm). The giveaway: it doesn't match the original PC-9801 CAD order.
- **Backspin can reverse a putt.** Spin isn't cosmetic: it's fed back into the roll and can make the ball check up and trickle backwards. Real ballistic physics in a 1993 cartridge. Love it!
- **Water isn't a hazard—just very sticky.** There's no "in the water" state; water polygons carry friction so high it kills the ball in one frame. The penalty falls out of the ordinary maths.
- **Wind is a real force, not an aim fudge.** It becomes a horizontal acceleration applied every frame of flight, exactly like gravity.
- **Augusta's wind never actually changes.** The direction is never written—only strength varies. The arrow only seems to swing because it's drawn relative to the camera.

----

## What the old magazines turned up

Reverse engineering only tells you *what* the games do; for the *why*, I went digging through a stack of Japanese computer magazines from the era, OCRing the scans to pull out the text. A 1989 developer interview about *Harukanaru Augusta* (遙かなるオーガスタ)—the PC-9801 original that kicked off the series—turned out to be a goldmine:

- **The 3D engine came first.** T&E's POLYSYS pre-dated the golf games by a couple of years, already appearing—only in the 3D intro logos, as far as I can tell—in *DAIVA STORY 7: Light of Kali Yuga* and *Psy-O-Blade*.
- **Trees were nearly real 3D.** They tried modelling trees as polygons, leaves and all—but one tree took as long to draw as a whole screen. So scaled sprites were used instead.
- **The first game had no hills.** T&E's *3-D Golf Simulation*, written in BASIC six years earlier, had no terrain undulation at all—and on the Sharp X1, 18 holes took *half a day* to play through.
- **POLYSYS was meant to be general-purpose:** swap the data and it renders anything. T&E planned an RPG and a shooter on it and intended to license it to other software houses.
- One programmer, mostly: **Eiji Kato** (加藤英治).

And the *Augusta* course itself came with a wonderful backstory:

- **They licensed the real thing.** An official contract with Augusta National, working from the club's blueprints. Staff visited, didn't play, but "rubbed their cheeks on the grass."
- **Augusta sent back ~60 corrections:** eg. pine trees too short and too spread out, flowers too pink, bunker sand the wrong colour.
- **No do-overs, by design.** You could save mid-round, but loading erased the save data—so no replaying holes to pad your score.
- **Best of all:** the dev build's four caddies were all women. Augusta's are all men, so the final game swapped them. The ladies returned in the expansion courses and Mega Drive games.
- **The T&E Selection caddies are real people:** four women who worked at **Brother Industries**—whose **TAKERU** software vending machines sold these add-on course disks.

----

## What Next?

There's an extra bit of hacking I'm working on but am unsure if it will lead to anything, but if it does it will need a post all of its own. Hold your thumbs. Fingers crossed. 🤞

It would be possible to release a small script which given both original games would do the extraction and patching, but for now I don't feel comfortable doing that. I still need to figure out the correct tree mapping for each game, decide which of the four Mega Drive games is most suited to each of the three new courses, add new title screens and a few more bits of detail work.

I'd love to [see these ported courses released officially](https://bsky.app/profile/gingerbeardman.com/post/3mnhbioqr4s2f) some day—the series IP is now owned and managed by D4 Enterprise—so if you know anybody there please hook us up! If you are an employee of D4 Enterprise then please check my request to licence the IP. 🙏

There are more period games in the series that I'd like to take a look at to see if they use the same data format, or modify it in any specific way. SNES and 3DO seem to be the most interesting. 🧐

But for now it's just me, a pile of disassembly files, rizin and vasmm68k, the BlastEm emulator, and a soft spot for blue skies and FM synth — still trying to get the ball in the hole. ⛳️🏌️‍♂️