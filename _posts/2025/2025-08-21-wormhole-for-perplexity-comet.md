---
layout: post
title: "Wormhole for Perplexity Comet"
date: '2025-08-21T17:00+01:00'
tags:
- game
- gamedev
- postmortem
nouns:
- Perplexity
- Comet
- Chrome
- Dino
- LittleJS
- Wormhole
image: /images/posts/comet.png
featured: true
pinned: false
published: private
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/

---

Surprise! My latest game, Wormhole, is included in the [Comet web browser](https://www.perplexity.ai/comet) from [Perplexity](https://www.perplexity.ai). It started as an idea to replace the [Chrome Dino game](https://en.wikipedia.org/wiki/Dinosaur_Game) and grew into something a bit more sophisticated and fun, and a lot more on brand.

Big love to Henry Modis and many others on the great team over at Perplexity. And to Soleio for the hookup—thanks sensei! 🙌

![IMG](/images/posts/perplexity-comet.jpg)

----

The development of this game was very typical for me and my process: rapid prototyping, careful scoping, and focus on the central mechanic. Let's dive in!

## Prototype 1

This took the brief very literally and replaced Chrome Dino in size and scope. It fitted in the same area of the page and had a similar one button interaction. So, it was a simple game where you controlled the speed of a comet and had to avoid incoming space debris for as long as possible by using a dash mechanic. You could chain dashes and therefore control your acceleration and deceleration whilst balancing risk and reward. It was fun, but the team had bigger ideas.

## Prototype 2

Multiple members of the team independently proposed the idea of space golf/billiards, or snooker as I called it which raised a few eyebrows, by which time I had already prototyped it. The initial version proved to be fun, so it was full steam ahead. 

I set out to refine the game feel and figure out game progress. I'd been reading about procedural generation in Elite (thanks to Mark Moxon) and Mario Kart World (thanks Nintendo) and created something similar for my game. A whole universe of galaxies and planets to conquer! It worked well, but the traversal between galaxies and the overall structure didn't add anything to the game. 

## Prototype 3

So, I started the galaxy generation again from scratch. At this point I had the feeling of existential dread that all developers are probably familiar with. I wanted to trash it all and start again, but instead I went out for dinner and talked it over with a friend and fellow developer (thanks Dave).

Eventually I calmed down and settled on a never-ending belt of galaxies. The transitions became much shorter and sweeter, and the game feel was better than ever. At this point I think I was still coding in [love2d](https://love2d.org). Things were locked down, so I ported the game to JavaScript using the [LittleJS](https://github.com/KilledByAPixel/LittleJS) framework. According to my notes the prototype was about 300 lines of code before I began the hard work of rounding it out into a game.

----

## Procedurally generated

Without giving too much away, the galaxies are procedurally generated with a handful of galaxy types and several other parameters and properties dictating the layout, rotating in a multi-layer but deterministic sequence. It was really fun to think through and implement.

Planets can either attract and repel, gravity varies, slingshots are possible, trick shots are possible, hole-in-one is possible. Wormholes can help or hinder.

The deterministic nature of the game means that everybody plays the same series of galaxies but at their own pace. And you can watch a replay of your shot if you get a suitably amazing black-hole-in-one, with a quick press of the R key (thanks Sensible Soccer). The game is theoretically never-ending, and the difficulty comes with carefully balanced stepped progression and cyclical repeating of the various game properties (thanks Philip Glass).

----

## Never quite made it

If you've followed any of my developments you'll know I'm quite happy to throw code away as quick as I can create it. I attach myself to the idea and execution rather than the code itself. 

So it's fun to mention some things that never made it. As well as the realistic universe, there were some additional obstacle types that fell by the wayside, and the ability to export a video recording of your replay for sharing.

----

## Finishing touches

During prototyping I use geometric shapes: circles, rectangles, lines, and so on. The team at Perplexity then worked up visual designs and I implemented them as a combination of bitmaps, SVG for noise texture, CSS for round rects, and there are still arcs, circles, lines, and various fill types punching well above their weight. LittleJS (thanks Frank) is a fantastic and very well optimised framework that I encourage all game devs to check out.

Sound was initially synthesised using [ZzFX](https://github.com/KilledByAPixel/ZzFX) (thanks again Frank), given LittleJS has built-in support, but they were eventually replaced with digital audio and music (thanks neso).

The Comet launch page was designed by Escha Diol, product designer on Comet, who has been very supportive during this project. She's a pleasure to work alongside.

There are lots of details and a high level of polish in the game that are easily overlooked but are essential to the final feel: particles, parallax, keyboard control, replay, and more.

Have fun with it!