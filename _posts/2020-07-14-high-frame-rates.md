---
layout: post
title: 'High Frame Rates are Best Frame Rates'
tags: [dailydriver, playdate, 60fps]
nouns: [60fps, SDK, Playdate]
---

Over the course of development I'd been unhappy with the game running at 30fps, as it did not feel responsive enough. I'm a big believer that if a gamer features fast action gameplay and requires quick reactions then higher frame rates and lower response time are what is needed.

Over the lifetime of the project I had beeb experimenting with running the game at a higher frame rate, as the maximum frame rate supported by Playdate SDK is 50fps. When I wrote my physics I did so in a way that it was not tied to one specific frame rate. Actually, it's more correct to say that it is tied to the highest frame rate of 50fps but is done so in a way that it can be adapted to any frame rate.

Anyway, after a round of optimisations and general improvements to the way I did both the skid marks (draw direct to background image rather as sprites) and sound effects (not attaching the whole sound engine to each object!) my game was running at max frame rate.

So, I decided to see how high the game would run if I removed the frame limiter (which the SDK allows) and to my surprise my hame was running between 60 and 75fps. At this point I had the crazy idea of running my game at 60fps, because... why not? I wrote my own simple frame limiter (which would be more precise if the SDK allowed finer grained time reporting) and now the game runs faster and smoother than games should on Playdate.

One interesting thing I noticed was that if I used my frame limiter code to limit the game to 50fps, I actually had a bunch more time, ~3ms, to do stuff per frame update than if I used the SDK frame limiter! I can only assume that every frame update the SDK frame limiter is doing something I am not doing.

So, writing my own frame limiter clawed back some time from the SDK and also allowed me to go harder, better, faster, stronger. Double win!