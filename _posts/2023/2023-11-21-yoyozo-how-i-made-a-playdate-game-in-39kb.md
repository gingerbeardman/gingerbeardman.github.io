---
layout: post
title: "YOYOZO (or, how I made a Playdate game in 39KB)"
last_modified_at: '2024-03-12T14:44+00:00'
date: '2023-11-21T23:59+00:00'
tags:
- graphics
- playdate
- optimisation
- gamedev
- filesize
- yoyozo
nouns:
- Playdate Squad Discord Server
- Playdate Squad Testers
- Playdate
- Catalog
- YOYOZO
- CANO-Lab
image: /images/posts/yoyozo-teaser.gif
featured: true
pinned: true
comments: https://twitter.com/gingerbeardman/status/1727030817116053611
---

> 2023-12-27 — [Ars Technica: YOYOZO wins GOTY accolade!](https://arstechnica.com/gaming/2023/12/ars-technicas-best-video-games-of-2023/7) almost unbelievable to be listed alongside such games as: Chants of Sennaar, Cocoon, Dave the Diver, Humanity, The Legend of Zelda: Tears of the Kingdom, Pikmin 4, Puzzmo, Super Mario Bros. Wonder, Venba and Viewfinder.

A game I made for the Playdate handheld was released today! [Go buy it](https://play.date/games/yoyozo/) and then come back to read this blog post.

It's called YOYOZO and in it you control a space yo-yo and have to collect stars in a sort of cosmic ballet. Well, at first it might feel a little like being on a fairground ride, but eventually you'll become good enough for it to feel like ballet. The concept is based on my memory of a game called [Pendulumania](https://archive.org/details/Pendulumania-v1.3) that I played 20 years ago.

The most amazing thing about this game, for me, is that launch version weighs in at a file size of *only 39KiB*. I'm using the KiB unit of measurement which equates to 1024 bytes. I still find it hard to believe as the game contains so much! In this blog post I'll go into some of the nerdy details.

## Playdate?

[Playdate](https://play.date) is a handheld gaming system with a unique crank input method. I don't use the crank in this game, but I have done in the past and will do again in the future. 

If you own a Playdate you can buy the game now at [play.date/games/yoyozo/](https://play.date/games/yoyozo/). If you don't own a Playdate, well, [what are you waiting for](https://play.date)?

![YOYOZO](/images/posts/yoyozo-teaser.gif#playdate)

## But...*why?*

The drive to produce a small game started after I sent the first playable version to testers from the Playdate Squad Discord Server. Steve at [*Scenic Route Software*](http://scenicroutesoftware.com), purveyor of quality video games, commented how tiny the game was. At that point it was 18KiB, but had no music or sound effects or polish. There was a long way to go. 

Even so, I wondered how doable it would be to build the game out with an eye on keeping file size "low". I thought back to the days of my youth where whole games would fit on a single floppy disk, with room to spare. If they could do it, shouldn't I give it a try?

It's worth noting that even with this mindset, I didn't make a huge sustained effort to meet the goal. On the contrary, it was just something I simply kept in mind as development proceeded. For that reason, I'm sure there are more ways the game could be made even smaller than it is, with the exact same code and content. For example, I never tried finding the most optimal format for things like music and particle data which are the two largest sets of embedded data.

Finally, this is not a challenge, or me throwing down the gauntlet in any way. It's easy enough to make a smaller game, be it similar or entirely different, you'd just have to make different choices along the way. This was just me doing something nerdy as an additional limitation on top of the already enjoyable limitations of developing for Playdate.

That said, I think every game developer should regularly make a point of writing code for an underpowered device as part of their own personal development—there are so many lessons to learn.

----

## Reasons

1. The main reason for the small file size is the fact that *the game does not use any digital sound files, and very few bitmap images* (the launch card and animation have to be bitmaps, and in-game only the logo and fonts are bitmaps). Game graphics are all drawn using only shapes (lines, rects, circles) and fills (black, white, and dither patterns).

2. A second reason is that whilst I use the base Playdate Lua SDK, *I don't use any of the additional "CoreLibs"*. The only extra graphics functions I needed were for drawing outlined or filled circles, so I use two of my own wrapper functions that are similar to those from CoreLibs/graphics but mine are smaller and more specific. For timers, I use a simple frame/tick system, an approach which has pros and cons, but it's good enough for me.

3. A third reason is that I made the tough decision to reduce system assets, which means *there is no animated launcher card*. This was a tough one, but it added so much to the file size I decided against it.

4. Finally, I noticed that *including data inside your game code* often trumps how well you can compress it and store it externally. For example I tried compressing the music data and storing it in an external file, but the game final file size was larger than if I embedded the data in my Lua code. Plus, it's faster as it doesn't need to load an additional external file.

---

## Breakdown

I thought it would be cool to outline the main features and how each contributes to the total file size. Note that the sizes are expressed as quantities of the compiled binary, rather than uncompiled source code. It's also worth noting that a blank project with an empty update function results in a compiled binary of only 147 bytes. Playdate compiles to Lua bytecode.

![CHART](/images/posts/yoyozo-chart.png)

|Content|Kilobytes|%|
|-------------|--|--|
|Main code| 19 | 49|
|Two music tracks | 5.5| 14|
|Three bitmap fonts | 2.5| 6|
|Synthesized sound effects| 2.5| 6|
|Custom particle system | 2.0| 5|
|Animated system icon | 2.0| 5|
|Animated system card | 2.0| 5|
|Pulp music engine (modified) | 1.5| 4|
|Online scoring system| 0.5| 1.25|
|How to play instructions | 0.4| 1|
|Custom soundtrack capability | 0.1| 0.25|

"Main code" contains: physics simulation, game structure and state management, multi-layered scoring and bonus system, score/stat tracking, loading and saving stats and settings, path recording and playback, animated introduction, plus the following *dynamic* systems: scrolling starfield, screen shake, music system, sound effects system.

----

## Abandoned and removed features

- I tried a bunch of stuff during development. Such as asteroid fields or meteor showers that introduced obstacles that needed to be avoided, and black holes that would magnetically attract the ball. But I felt they detracted from the pureness of the concept, so I didn't go any further with them.
- The positions of stars are randomly generated, but I have implemented a fixed "daily" layout in the game, which is really fun. It's a different experience to be able to play the same layout over and over, improving your execution of the same moves and eking out higher and higher scores. I'll reintroduce that option when Playdate Catalog gets score boards that reset daily.

----

## Manual/Guide

I really loved the manuals that came with games in the 8-bit and 16-bit era. So I thought it would be fun to write a manual/player's guide in the old-school style. I love reading those sorts of manuals, where the developer gives you a little glimpse behind the curtain so you get an understanding of how the game works, with some small hints and tips littered throughout—for the most inquisitive players! If that sounds like your thing, [download the manual from the game page](https://play.date/games/yoyozo/#gameListingMoreInfo).

[![YOYOZO Manual](/images/posts/yoyozo-manual.png)](https://play.date/games/yoyozo/#gameListingMoreInfo)

----

## Timeline

I worked on YOYOZO from September 5th to 27th, submitting it to Catalog on 21st and polishing it for the final week after that. After the game was approved I added online score boards one evening just prior to launch. It was in review and waiting for release longer than it was in development!

The purpose of this section is not to say that developing a game quickly is better than developing one slowly, or vice versa, but rather to show the importance of scoping a game well and then sticking to the plan.

- 2023-09-05 — [initial prototype](https://twitter.com/gingerbeardman/status/1699108587732119834)
- 2023-09-07 — [playable prototype](https://twitter.com/gingerbeardman/status/1699784106505290093) (3 days)
- 2023-09-07 — [quick progress](https://twitter.com/gingerbeardman/status/1699890693366517890) (3 days)
- 2023-09-09 — [came up with the name](https://twitter.com/gingerbeardman/status/1700612152707461396) (5 days)
- 2023-09-14 — [polishing and balancing](https://twitter.com/gingerbeardman/status/1702103698749505670) (10 days)
- 2023-09-20 — [revelatory physics tweak](https://twitter.com/gingerbeardman/status/1704608465522487681) (16 days)
- 2023-09-21 — [addicted to my own game](https://twitter.com/gingerbeardman/status/1704991183573831711) (17 days)
- 2023-09-21 — submitted to Catalog (17 days)
- 2023-09-23 — [game over replay](https://twitter.com/gingerbeardman/status/1705676134245875750) (19 days)
- 2023-09-26 — [layout design using spreadsheet](https://twitter.com/gingerbeardman/status/1706765228879253972) (22 days)
- 2023-09-26 — [game over stats screen](https://twitter.com/gingerbeardman/status/1706772586510643560) (22 days)
- 2023-09-27 — final version (23 days)

...and then some waiting until:

- 2023-10-10 — approved for Catalog (36 days)
- 2023-11-19 — added online scoreboards (76 days)
- 2023-11-21 — [released on Catalog](https://twitter.com/gingerbeardman/status/1727030817116053611) (78 days)

...so that is 78 days (11 weeks) from initial prototype to being live on the Catalog store!

----

## Credits

YOYOZO is a game by Matt Sephton, with music by Jamie Hamshere.

Thanks to CANO-Lab and Playdate Squad Testers.

----

### Further reading

* [Easter egg emoji: converting pixels into particles](/2023/11/26/easter-egg-emoji-converting-pixels-into-particles/)
* [Dynamic music and sound techniques for video games](/2023/12/09/dynamic-music-and-sound-techniques-for-video-games/)
* [*YOYOZO* manual/player's guide](https://play.date/games/yoyozo/#gameListingMoreInfo)

### Elsewhere

* 2024-03-08 — [Playdate Community Awards 2023: Best Arcade Game](https://play.date/games/community-awards-2023/)
* 2023-12-27 — [Ars Technica: YOYOZO wins GOTY accolade!](https://arstechnica.com/gaming/2023/12/ars-technicas-best-video-games-of-2023/7)
* 2023-11-30 — [Ars Technica](https://arstechnica.com/gaming/2023/11/my-long-quest-to-revive-a-90s-windows-gaming-cult-classic/)
* 2023-11-24 — [Hacker Newsletter](http://eepurl.com/iEHB8M)
* 2023-11-23 — [Time Extension](https://www.timeextension.com/news/2023/11/yoyozo-is-a-new-playdate-game-inspired-by-the-japanese-cult-classic-pendulumania)
* 2023-11-22 — [Hacker News](https://news.ycombinator.com/item?id=38372936)
* 2023-11-22 — [Tildes](https://tildes.net/~games/1cbz/yoyozo_or_how_i_made_a_playdate_game_in_39kb)
