---
layout: post
title: DREAM RIDE for Sega Dreamcast (and emulators)
date: '2025-01-05T23:59+00:00'
tags:
- sega
- dreamcast
- sega
- gamedev
nouns:
- Sega
- Dreamcast
- DreamDisc '24
- ANTIRUINS Engine
- LÖVE
- DREAM RIDE
- Daily Driver
- Playdate SDK
image: /images/posts/dream-ride.png
comments: https://twitter.com/gingerbeardman/status/

---

Over the Christmas break I had a spare week after a trip to Ireland was cancelled. What should I do with the time? I was already aware of the upcoming [DreamDisc '24 game jam](https://itch.io/jam/dream-disc-24) and had done some reading [a couple of months back](https://twitter.com/gingerbeardman/status/1843024068930658594) scoping out a Lua-based SDK called ANTIRUINS Engine that looked familiar enough to me with my experience of LÖVE (love2d) and Playdate SDK. But what should I make with it?

If I could get something fun up and running as quickly as possible it would prove the point and keep me motivated. Sounds like a plan. Also, it's easier to make something that has already been planned out, so all the effort goes on implementation rather than design. I remembered my unreleased game [Daily Driver](/tag/dailydriver/)...maybe I could get those little cars moving around the screen? But what would make it *more Dreamcast*? Simultaneous 4-player action and CPU opponents! *OK, let's do this!*

It took a bit of effort to get the build process up and running, but after that I hit the ground running. I got the physics and 4-player control running pretty quickly. Then the sprites went in, albeit in the wrong colours. Physics equation and sprites are the only two things shared with my game [Daily Driver](/tag/dailydriver/). Next a variety of game modes, power-ups, new sounds, all withing a few days. Then I picked at it over the next week to polish it as much as possible before the game jam deadline. I thrive on deadlines.

Many thanks to [Bertholet](https://bertholet.itch.io), author of ANTIRUINS Engine, who has done a great job and was very gracious with his time helping me through the initial hurdles.

I'll do a full post-mortem and "what's next" after the game jam results are announced. But I'm really happy with how it turned out. The cars look great in colour, and even with 8 of them on screen things are a rock solid 60fps, I really need to see how far I can push things.

---

![IMG](/images/posts/dream-ride-game.png "This game shows a secret mode where the menu cars remain in play!")
{:.tofigure}

----

## Download

[gingerbeardman.itch.io/dream-ride](https://gingerbeardman.itch.io/dream-ride)

Play DREAM RIDE on a real Sega Dreamcast (tested on my original imported NTSC-U Sega Dreamcast from 1999, [fitted with a GDEMU](/2020/12/03/dreamcast-gdemu-installation/)) or in an emulator on your favourite console or handheld (tested with Flycast on macOS, GameForce Chi, Powkiddy RGB30, [TrimUI Brick](https://twitter.com/0_game_it/status/1875734954946285610), and a modded Nintendo Switch).

Future versions of the game with improvements and new modes will require payment, after all I'm a full-time indie developer and my caffeine intake needs to be maintained. Thanks for your support!

----

## Video

Below is a video where I forgot to switch audio source so it recorded audio through my Mac's mic. 😅

{% youtube movAjOjZLRg %}
