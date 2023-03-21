---
layout: post
title: 'Daily Driver: Instant Replay'
tags: [dailydriver, playdate, gamedev]
---

![GIF](/images/posts/daily-driver-instant-replay.gif#playdate)

I guess this looks like a looped GIF, but it’s not!

I added some quite simple code to record every button press and the tick time at which it happened. The beauty of this approach is that most frames there are no button presses so the recorded data is very small. The work I've previously put in structuring the game in an Object-Oriented way really paid off.

The game engine is completely deterministic — it has no random elements — so playing back the data is also very simple and the result is an exact frame by frame replay.

Seeing this for the first time felt like magic. This is why I love developing games!