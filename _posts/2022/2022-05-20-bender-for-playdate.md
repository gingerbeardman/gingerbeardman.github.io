---
layout: post
title: Bender for Playdate
tags:
- playdate
- agbic
- itchio
nouns:
image: /images/posts/bender-for-playdate.gif
comments: https://twitter.com/gingerbeardman/status/1527995752617807877

---

Ten years ago I made a web game called [Bender](https://twitter.com/gingerbeardman/status/227894472103563264) for the [AGBIC game jam](https://twitter.com/AGBICjam). It was powered by CSS transitions and a little bit of JavaScript. It was fun to make and devilishly addictive.

Since I started spending more time on itch.io managing my Playdate games, I’d been seeing a lot more of that old game in my list of projects.

Fridays are the day I spend making Playdate prototypes and I thought it would be fun to make a version of Bender for Playdate.

I made it from memory, not looking at any of the old code, and it came together pretty quickly. So much so that I decided to see if I could push on through and release it the same day. The code is pretty sloppy but I figure it was worth it.

Whilst this game was made in a day, the design took a lot longer.

Here’s the result!

![GIF](/images/posts/bender-for-playdate.gif#playdate)

The following morning I changed some things that I was unhappy with in the first version, fixed a couple of small bugs, and added some new things.

**Improvements**

- Replaced launch card
- Using less fonts
- Removed flashing text
- Easy Mode!

**Fixes**

- Largest bar size was never appearing
- Angle check now uses integers

## Look ma, no sprites!

The original Bender web game used CSS for all graphics and animation, and a little JavaScript to control the game flow. So, I had wondered how I would build Bender with the Playdate SDK.

Sprites are certainly one option but the rotation of the bar meant I would either have to pre-render many bar sprites or deal with slow real-time rotation, neither of which sounded too appealing. Then I had the idea about using thick lines!

Each side of the bar is a thick line, with "butt" cap-style. To give the illusion of the bar bending I draw a circle at the origin or common point of both lines. A little bit of trigonometry was all that was needed to get the lines bending correctly. The benefits to this approach are many, such as: no images, no sprites, always smooth edges, better performance. There is a limitation to a single colour or dither, but that could be worked around with some extra efforts and a bit more maths.

Animation does not use the SDK. Instead I control the positions of screen elements and move them based on some rules and algorithms.

I use dithering to provide visual effects: a animation of snapping and motion blur of the moving line. There's also a zen mode that disables visual effects and the toasting words (which are randomised from large lists).

The seven segment font was generated using the [tophat](https://kaasiand.cool/tophat/) web app, which is really great. Fonts and Timers are the two main things I use from the SDK.

Easy Mode slows down the game by 20% (40fps down from 50fps) which makes things a lot easier as you have 25% more time to react (25ms compared to 20ms) and also gives an additional hint regarding the bar size. This mode also has an "easy" banner displayed on the screen to make sure people know which mode you're playing.

Hi score and settings are saved and loaded at various points.
