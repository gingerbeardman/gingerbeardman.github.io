---
layout: post
title: "YOYOZO (or, how I made a Playdate game in 39KB)"
date: '2023-11-21T23:59+00:00'
tags:
- graphics
- playdate
- challenge
- gamedev
- filesize
nouns:
- Playdate Squad Discord Server
- Playdate Squad Testers
- Playdate
- Catalog
- YOYOZO
- CANO-Lab
comments: https://twitter.com/gingerbeardman/status/1727030817116053611
---

A game I made for the Playdate handheld was released today! [Go buy it](https://play.date/games/yoyozo/) and then come back to read this blog post.

It's called YOYOZO and in it you control a space yo-yo and have to collect stars in a sort of cosmic ballet. Well, at first it might feel a little like being on a fairground ride, but eventually you'll become good enough for it to feel like ballet.

The most amazing thing about this game, for me, is that launch version weighs in at a file size of *only 39KB*. I still find it hard to believe as the game contains so much! In this blog post I'll go into the details.

## Playdate?

[Playdate](https://play.date) is a handheld gaming system with a unique crank input method. I don't use the crank in this game, but I have done in the past and will do again in the future. 

If you own a Playdate you can buy the game now at [https://play.date/games/yoyozo/](https://play.date/games/yoyozo/). If you don't own a Playdate, well, [what are you waiting for](https://play.date)?

![YOYOZO](https://cdn.gingerbeardman.com/images/posts/yoyozo-teaser.gif#playdate)

## But...*why?*

The drive to produce a small game started after I sent the first playable version to testers from the Playdate Squad Discord Server. Steve at [*Scenic Route Software*](http://scenicroutesoftware.com), purveyor of quality video games, commented how tiny the game was. At that point it was 18KB, but had no music or sound effects or polish. There was a long way to go. 

Even so, I wondered how doable it would be to build the game out with an eye on keeping file size "low". I thought back to the days of my youth where whole games would fit on a single floppy disk, with room to spare. If they could do it, shouldn't I give it a try?

It's worth noting that even with this mindset, I didn't make a huge sustained effort to meet the goal. On the contrary, it was just something I simply kept in mind as development proceeded. For that reason, I'm sure there are more ways the game could be made even smaller than it is, with the exact same code and content. For example, I never tried finding the most optimal format for things like music and particle data which are the two largest sets of embedded data.

Finally, it's worth noting that this is not a challenge, or me throwing down the gauntlet in any way. It's easy enough to make a smaller game, be it similar or entirely different, you'd just have to make different choices along the way. This was just me doing something nerdy as an additional limitation on top of the already enjoyable limitations of developing for Playdate.

----

## Reasons

1. The main reason for the small file size is the fact that *the game does not use any digital sound files, and very few bitmap images* (the launch card and animation have to be bitmaps, and in-game only the logo and fonts are bitmaps). Game graphics are all drawn using only shapes (lines, rects, circles) and fills (black, white, and dither patterns).

2. A second reason is that whilst I use the base Playdate Lua SDK, *I don't use any of the additional "CoreLibs"*. The only extra graphics functions I needed were for drawing outlined or filled circles, so I use two of my own wrapper functions that are similar to those from CoreLibs/graphics but mine are smaller and more specific. For timers, I use a simple frame/tick system, an approach which has pros and cons, but it's good enough for me.

3. A third reason is that I made the tough decision to reduce system assets, which means *there is no animated launcher card*. This was a tough one, but it added so much to the file size I decided against it.

4. Finally, I noticed that *including data inside your game code* often trumps how well you can compress it and store it externally. For example I tried compressing the music data and storing it in an external file, but the game final file size was larger than if I embedded the data in my Lua code. Plus, it's faster as it doesn't need to load an additional external file.

---

## Breakdown

I thought it would be cool to outline the main features and how each contributes to the total file size. Note that the sizes are expressed as quantities of the compiled binary, rather than uncompiled source code. It's also worth noting that a blank project with an empty update function results in a compiled binary of only 147 bytes.

![CHART](https://cdn.gingerbeardman.com/images/posts/yoyozo-chart.png)

|Content|KB|%|
|-------------|--|--|
|Main code| 19KB | 49%|
|Two music tracks | 5.5KB| 14%|
|Three bitmap fonts | 2.5KB| 6%|
|Synthesized sound effects| 2.5KB| 6%|
|Custom particle system | 2.0KB| 5%|
|Animated system icon | 2.0KB| 5%|
|Animated system card | 2.0KB| 5%|
|Pulp music engine (modified) | 1.5KB| 4%|
|Online scoring system| 0.5KB| 1.25%|
|How to play instructions | 0.4KB| 1%|
|Custom soundtrack capability | 0.1KB| 0.25%|

"Main code" contains: physics simulation, game structure and state management, multi-layered scoring and bonus system, score/stat tracking, loading and saving stats and settings, path recording and playback, animated introduction, plus the following *dynamic* systems: scrolling starfield, screen shake, music system, sound effects system.

----

## Abandoned and removed features

- I tried a bunch of stuff during development. Such as asteroid fields or meteor showers that introduced obstacles that needed to be avoided, and black holes that would magnetically attract the ball. But I felt they detracted from the pureness of the concept, so I didn't go any further with them.
- The positions of stars are randomly generated, but I have implemented a fixed "daily" layout in the game, which is really fun. It's a different experience to be able to play the same layout over and over, improving your execution of the same moves and eking out higher and higher scores. I'll reintroduce that option when Playdate Catalog gets score boards that reset daily.

----

## Manual/Guide

I thought it would be fun to write a manual/player's guide in the old-school style. I love reading those sorts of manuals, where the developer gives you a little glimpse behind the curtain so you get an understanding of how the game works, with some small hints and tips littered throughout—for the most inquisitive players! If that sounds like your thing, you can [download the manual from the game page](https://play.date/games/yoyozo/).

[![YOYOZO Manual](https://cdn.gingerbeardman.com/images/posts/yoyozo-manual.png)](https://play.date/games/yoyozo/)

----

## Credits

YOYOZO is a game by Matt Sephton, with music by Jamie Hamshere.

Thanks to CANO-Lab and Playdate Squad Testers.
