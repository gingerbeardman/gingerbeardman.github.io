---
layout: post
title: "Bender 2: Bend Harder for Playdate"
date: '2024-10-08T18:00+01:00'
tags:
- playdate
- game
- agbic
- gamedev
nouns:
- "Bender 2: Bend Harder"
- "Bender"
- Playdate Community Awards
- Playdate Catalog
- Playdate
- Famicase
- Ars Technica
- Akitoshi Shimizu
- YOYOZO
- Fore! Track
- Super ICARUS
- AGBIC
- A Game By Its Cover
redirect_from:
- /2022/05/20/bender-for-playdate/
image: /images/posts/bender-for-playdate.gif
comments: https://twitter.com/gingerbeardman/status/

---

Back in 2012 I wanted to make a quick game for the [AGBIC](https://twitter.com/agbicjam) game jam (A Game By Its Cover; make a game inspired by the imaginary cover art from the [Famicase](http://famicase.com) exhibition). There's only one rule for this game jam, which is taken very seriously: *respect the wishes of the original artists, and don't appropriate their designs without consent*. Otherwise you're free to do what you want. And you can choose a cover as inspiration for your game from the entire archive of Famicase entries, so every year there are more and more great covers to be inspired by.

----

## 2012

I had a browse of the Famicase entries and picked artwork titled [Bender](https://famicase.com/11/softs/12.html), by 清水昭利 Akitoshi Shimizu, from the 2011 submissions, and set to work... thinking. One morning I had the crazy idea to [impose severe constraints to help my ideation](/2024/09/28/a-haze-of-inspiration/): I should make the game using only CSS transitions (and some simple JavaScript logic to control the game state and flow). I have no idea why this seemed like a good idea, but it worked!

![IMG](/images/posts/bender-2-famicase-2011.jpg "Bender Famicase by Akitoshi Shimizu, 2011")
{:.tofigure}

The result of [two days work](https://twitter.com/gingerbeardman/status/227040932028108800) was a web game called Bender released 12th July 2012. It was fun to make and devilishly addictive. The [web game](https://www.gingerbeardman.com/bender/) still works today, on desktop and mobile, though the controls are prone to getting stuck from time to time for reasons I've not looked into.

[![IMG](/images/posts/bender-2-web-2012.png)](https://www.gingerbeardman.com/bender/)

----

## 2022

Fast forward 10 years and I decided to do a pretty straight port of the web game to the [Playdate](https://play.date) handheld, that was 20th May 2022. I coded it from memory/feel, just for kicks, not that I had any choice as the available technologies are so different. It was a very bare bones game, with no music and messy code, but it was a test to see if I could release a game in a day. I did.

Seeing as original Bender web game used CSS for all graphics and animation, and a little JavaScript to control the game flow, I had wondered how I would build Bender with the Playdate SDK? I settled on using only primitives and dither patterns to draw all the elements, an approach that I have continued to refine in subsequent games such as my [GOTY 2023 accolade](https://arstechnica.com/gaming/2023/12/ars-technicas-best-video-games-of-2023/7) and [award winner](https://play.date/games/community-awards-2023-arcade/) [YOYOZO](/2023/11/21/yoyozo-how-i-made-a-playdate-game-in-39kb/), the detailed rendered look of [Fore! Track](/2023/06/26/ball-und-panzer-golf-making-a-playdate-game-in-a-week/), or the stark minimalism of [Super ICARUS](https://play.date/games/icarus/).

Each side of the bar is a thick line, with "butt" cap-style. To give the illusion of the bar bending I draw a circle at the origin or common point of both lines. A little bit of trigonometry was all that was needed to get the lines bending correctly. The benefits to this approach are many, such as: no images, no sprites, always smooth edges, better performance. Animation also does not use the Playdate SDK, but rather I track the positions of screen elements and move them based on some rules and algorithms.

I use dithering to provide visual effects: a animation of snapping and motion blur of the moving line. There's also a zen mode that disables visual effects and the toasting words (which are randomised from large lists).

![IMG](/images/posts/bender-2-playdate-2022.gif#playdate)

----

## 2023

I submitted Bender for consideration for [Playdate Catalog](https://play.date/games/catalog/) when the service launched, but it was rejected for being "too simple". After some lengthy contemplation my takeaway from the rejection was that it meant there was not enough meat on the bones of the game, rather than anything specific against the central gameplay mechanic which is beautifully simple.

Fair point. Though I did say I would expand the game, add music and so on, I learned that it's difficult for people to imagine how you're going to expand on a simple concept. You need to show them. It took many months—about a year and a half—for me to find the time and energy to revisit Bender.

----

## 2024

The end result is *Bender 2: Bend Harder*. The new game has been remade, from scratch, right down to the fonts. And it's packed with new things: multiple game modes, a deeper scoring system, awards or achievements, multiple secrets or easter eggs, online score boards, improved graphics, dynamic music and sound including elements that react to the beat of the music, a scenario to provide a bit of world-building, and much more besides! At ~2000 lines the source code is over 4 times the length of the first version's ~500 lines, just to give you an idea of how much more logic there is in the new game.

> There are elements to the game that I would usually disclose the technical details of—my process, tooling—but I'm currently doing my utmost to protect my "vibe" so that won't happen today. This is why we can't have nice things. Maybe at some point in the future, but no promises.

Anyway, I'm really happy how this game has turned out. Can't wait to see some activity on the leaderboards! Get it at [play.date/games/bender-2-bend-harder/](https://play.date/games/bender-2-bend-harder/) and I'll see you on the leader boards.

![IMG](/images/posts/bender-2-bend-harder.gif#playdate)

This brings my total of games on Playdate Catalog to 5, the others being:

- [YOYOZO](/2023/11/21/yoyozo-how-i-made-a-playdate-game-in-39kb/)
  - Best Games of 2023 (Ars Technica)
  - Best Arcade Game (Playdate Community Awards 2023)
- [Sparrow Solitaire](/2023/2023-04-13-sparrow-solitaire-for-playdate.md/)
  - Best Puzzle Game (Playdate Community Awards 2023)
- [Fore! Track](/2023/2023-06-26-ball-und-panzer-golf-making-a-playdate-game-in-a-week/) 
  - the first [colour](/2023/2023-07-09-the-first-colour-playdate-game/) Playdate game?
- [Super ICARUS](https://play.date/games/icarus/) 
  - an innovative hyrid survival-racing game

As usual, teaster artwork is by vxcl with 1-bit equivalents draw by me.

> *"If at first you don't succeed, try, try again."*
