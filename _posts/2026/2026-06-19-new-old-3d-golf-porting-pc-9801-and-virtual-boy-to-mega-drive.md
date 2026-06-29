---
layout: post
title: "New (Old) 3D Golf: porting PC-9801 & Virtual Boy to Mega Drive"
date: '2026-06-19T17:26+01:00'
modified: '2026-06-29T12:46+01:00'
tags:
- japanese
- golf
- videogame
- tesoft
- hack
- megadrive
- virtualboy
- pc98
- reverseengineering
- romhack
- gamedev
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

Next I wondered if the course data was the same across all of the four Mega Drive games, could it be the same across the games on other platforms? The answer is **yes**: [the same course data format](https://bsky.app/profile/gingerbeardman.com/post/3ml2k552qis2f) turns out to be used right across the series, from the original PC-9801 games (and almost certainly X68000 and FM Towns) through to the Mega Drive and even the Virtual Boy. If my (little-endian) maths is correct that's a total of 7 unique courses, all sharing one format. There's some reformatting that needs to be done, but the data structure is the same. And since I could already read the courses, I could write them too—patching the games to pick a course at random, or to load one that was never available on the Mega Drive in the first place. PC-9801 to Mega Drive required sorting the polygons to match how they were expected to be stored.

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

That last one needed a little extra work. T&E Golf on Virtual Boy doesn't have a hole flyby, so I had to generate the camera path myself: a bezier curve from tee to pin, nudged towards the centre point of the visible course as it appears on the mini-map. The flyby path in this video was about half way to my final solution.

Playing these courses on Mega Drive is truly special and the effort was very much worthwhile. 🥰

----

## A few things I learned along the way

Living inside the disassembly for weeks, I kept tripping over the little decisions T&E SOFT made all those years ago. Some are clever, some are quietly bonkers, and all of them made me grin:

- **The hole is three times too big.** The cup grabs any ball within ~6.7 inches—triple a real hole's radius—so balls drop from further out than they look. A fudge for the 320×224 screen, where ball and cup were both sub-pixel.
- **The polygons pre-sort themselves.** No depth buffer on the Mega Drive, so the draw order is baked into the course data, back-to-front (the painter's algorithm). The giveaway: it doesn't match the original PC-9801 CAD order.
- **Backspin can reverse a putt.** Spin isn't cosmetic: it's fed back into the roll and can make the ball check up and trickle backwards. Real ballistic physics in a 1993 cartridge. Love it!
- **Water isn't a hazard—just very sticky.** There's no "in the water" state; water polygons carry friction so high it kills the ball in one frame. The penalty falls out of the ordinary maths.
- **Wind is a real force, not an aim fudge.** It becomes a horizontal acceleration applied every frame of flight, exactly like gravity.
- **Augusta's wind never actually changes.** The direction is never written—only strength varies. The arrow only seems to swing because it's drawn relative to the camera.
- **Bunkers plug, cart paths kick.** Every surface has its own bounce coefficient. The fairway hands back a healthy ~40% of the ball's speed; a bunker returns only ~10%, so the ball plugs where it lands; a cart path or rock fires it back at ~75% for that horrible hard skip.
- **Your lie quietly rolls the dice.** On every stroke the game picks a random number from a per-(lie, club) range and folds it into your swing power. A clean fairway lie uses a narrow range; a bad lie widens it—so the rough genuinely makes your shots less predictable. The ranges live in a 17×17 table, one entry per lie-and-club combination.

----

## Four volumes, one evolving engine

It's tempting to treat the four Mega Drive games as a single engine with interchangeable courses. They're not, and the very first line of the cross-volume notes I kept is a warning to myself: ⚠️ *never assume all four ROMs share code or data layouts.* T&E SOFT kept tinkering release to release, and you only catch it by dumping the same region in all four disassemblies and diffing.

The ROM headers number them *New 3D Golf Simulation* Vol.1–4, and each header also carries a build date stamped in `YYYY.MMM` form. Here's the curiosity: the volume numbers track the **build** dates, not the retail release dates. Vol.2 *Devil's Course* was finished a month before Vol.3 *Augusta*—but reached the shops a month after it:

| Vol | Title | Japanese | ROM build | Retail release |
|-----|-------|----------|-----------|----------------|
| 1 | Pebble Beach no Hatou | ペブルビーチの波濤 | 1993-07 | 1993-10-29 |
| 2 | Devil's Course | デビルズコース | 1993-08 | 1994-01-28 |
| 3 | Harukanaru Augusta | 遙かなるオーガスタ | 1993-09 | 1993-12-17 |
| 4 | Waialae no Kiseki | ワイアラエの奇蹟 | 1993-09 | 1994-02-25 |

A couple of header quirks fell out of this. Pebble's stamp reads `1993.JLY`—Sega's own oddball abbreviation for July. And while three of the carts credit `SEGA`, *Augusta* credits T&E Soft's Sega licensee code `T-114` instead—a clue that it alone was self-published by T&E SOFT rather than by Sega. The boxes agree: Augusta's isn't Sega-branded either.

Two places they genuinely diverge, each confirmed by dumping the same region in all four:

- **Colour isn't a plain palette lookup—and the recipe is per-game.** A surface byte runs through a little chain of lookup tables before it becomes a pen colour, and those tables aren't shared: Pebble grades several surfaces differently and even reorders two entries, while Devil's Course carries its own darker, redder palette. Waialae, charmingly, reuses a single palette three times where its siblings have three distinct ones.
- **A decoder bug only Pebble could trigger.** In the polygon stream, vertex indices are single bytes, with `0xFF` acting as an escape prefix—the byte after it encodes a higher index (`0xE0 + xx`), so a hole can point past the ~254 vertices a lone byte can name. My extractor mishandled that escaped range, but only Pebble's holes are dense enough to actually *use* it—so the bug sailed through the other three games and only fell over when I reached Pebble. Same encoding in every cart; one course's data was all it took to expose the flaw in my reader.

There's also the US release, *Pebble Beach Golf Links* (header stamped 1993-11, likely on shelves 1994-04): the same course data on a larger ROM, with English strings present where the Japanese Vol.1 zeroed them. That parallel made a useful "Rosetta Stone" for decoding menus and text.

----

## Inside Waialae

Waialae was my primary reference—1,572,864 bytes, header `NEW 3D GOLF SIMULATION Vol.4 Waialae C.C.`, serial `GM G-5529`.

Each hole is reached through four ROM pointers, one per data block, and they're wildly different sizes. Block 0 is the vertex list—244 XYZ points, the ~256-point mesh, about 1.5 KB. Block 1 is the bulk of it: sixteen view-order streams (one draw order per camera angle) that bake in the back-to-front sorting—around 5.5 KB, bigger than the geometry it orders. Block 2 holds the mesh and sprites themselves (230 polygons plus 54 sprites), ~1.8 KB. Block 3 is just the flyby keyframes, a slim ~0.7 KB. For Waialae's first hole that comes to about 9.2 KB, split like this:

<svg viewBox="0 0 740 94" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="holeDesc" style="display:block;margin:0 auto;width:100%;max-width:740px;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
  <desc id="holeDesc">One bar representing a hole's data for Waialae hole 1, split into four segments by size: Block 0 vertex list 1,466 bytes; Block 1 view-order streams 5,490 bytes; Block 2 mesh and sprites 1,758 bytes; Block 3 flyby keyframes 666 bytes.</desc>
  <rect x="12" y="8" width="112" height="78" fill="#c5e0b4" stroke="#2f5e22"/>
  <rect x="124" y="8" width="419" height="78" fill="#538135" stroke="#2f5e22"/>
  <rect x="543" y="8" width="134" height="78" fill="#70ad47" stroke="#2f5e22"/>
  <rect x="677" y="8" width="51" height="78" fill="#a9d18e" stroke="#2f5e22"/>
  <text x="22" y="28" font-size="12" font-weight="700" fill="#1f3b14">Block 0</text>
  <text x="22" y="46" font-size="11" fill="#33521f">Vertex list</text>
  <text x="22" y="64" font-size="11" fill="#33521f">1,466 B</text>
  <text x="134" y="28" font-size="12" font-weight="700" fill="#ffffff">Block 1 · View-order streams</text>
  <text x="134" y="46" font-size="11" fill="#e7f2dd">one draw order per camera angle (×16)</text>
  <text x="134" y="64" font-size="11" fill="#e7f2dd">5,490 B</text>
  <text x="553" y="28" font-size="12" font-weight="700" fill="#14300a">Block 2</text>
  <text x="553" y="46" font-size="11" fill="#14300a">Mesh + sprites</text>
  <text x="553" y="64" font-size="11" fill="#14300a">1,758 B</text>
  <text x="683" y="28" font-size="12" font-weight="700" fill="#1f3b14">Block 3</text>
  <text x="683" y="46" font-size="11" fill="#1f3b14">Flyby</text>
  <text x="683" y="64" font-size="11" fill="#1f3b14">666 B</text>
</svg><br>

A couple more structural quirks:

- **A spatial grid, decades early.** Immediately after the vertex pool sits a `count` followed by `count × 16` word offsets into the face section—a two-level spatial grid (cell → faces) so the engine can look up the relevant polygons from the ball's (x, z) without walking the whole hole.
- **Why the SRAM debugging hurt.** Waialae's battery-backed save RAM is odd-lane only, from `$200001`. Byte writes have to land on odd Mega Drive addresses; even-address writes to `$200000` simply disappear. That's the real reason scribbling values into SRAM as a `printf` substitute was so finicky—half my early writes were going into the void. (BlastEm helpfully flushes SRAM to disk on quit, so I could read it back from the host.)

----

## Variable zoom

The shared course format is what let me move holes between platforms, but each machine scales the world differently. The proven case: Waialae hole 1 from the PC-9801 drops into the Mega Drive after a fixed **1.6× rescale on X and Z** (Y untouched), plus a **little-endian → big-endian flip** on the flyby path records.

Lining those transplanted polygons up against the stock Mega Drive ones is also what *proved* the rendering trick I mentioned earlier: the Mega Drive packs faces in descending max-Z order—back to front, the painter's algorithm—and the original PC-9801 face id survives the journey as the Mega Drive's `attr1` byte.

----

## Two deeper cuts

- **The flyby camera, decoded by statistics.** Each flyby keyframe carries two mystery bytes. With no documentation, I histogrammed 4,723 of them across every hole and the shape gave it away: one byte is an 8-bit angle (256 units = 360°) for yaw, the other a signed pitch clamped to about ±40, positive meaning the camera looks down. Educated guessing, with visuals.
- **The Virtual Boy world is built at a different scale.** The Virtual Boy stores its courses at 32 raw units per yard, where the Mega Drive works in 17—so Papillon has to be shrunk by exactly `17/32` (0.53) to sit correctly on the Mega Drive, otherwise every club hits too short for the hole. (My first attempt used the wrong unit and reported hole 1 as 321 yards instead of its true 360.) It's the same idea as the 1.6× I needed coming the other way from the PC-9801—one shared format, but every machine measures its yards differently.

The whole thing ran on rizin and vasmm68k with BlastEm for execution—though frame-time profiling had to move to Genesis Plus GX, because BlastEm freezes the VDP's HV counter during the long rendering routines I was trying to measure.

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

I'd love to [see these ported courses released officially](https://bsky.app/profile/gingerbeardman.com/post/3mnhbioqr4s2f) some day—the series IP is now owned and managed by D4 Enterprise—so if you know anybody there please hook us up! If you are an employee of D4 Enterprise then please check my request to license the IP. 🙏

There are more period games in the series that I'd like to take a look at to see if they use the same data format, or modify it in any specific way. SNES and 3DO seem to be the most interesting. 🧐

But for now it's just me, a pile of disassembly files, rizin and vasmm68k, the BlastEm emulator, and a soft spot for blue skies and FM synth — still trying to get the ball in the hole. ⛳️🏌️‍♂️