---
layout: post
title: Level viewer for Pang (Nintendo DS)
tags:
- pang
- nintendods
- reverseengineering
nouns:
- Pang
- Nintendo DS
- JavaScript
- PHP
- WebKit
- Mighty!
- Tour
image: /images/posts/pang-ds.jpg
featured: false

---
I'm a huge fan of the Pang series of video games. In my experienced and humble opinion the best game in the series is the one on Nintendo DS. It takes the core Pang concept—refined from the original game in 1990 through to Mighty! Pang in 2000—and turns everything it up to 11. It makes full use of the dual screens to add in some novel level layouts, with a near perfect difficulty curve across the 60 levels that make up Tour mode.

Back in 2017 I tried to reverse engineer it, with the goal of creating custom levels. I got so far as to extract all 256 levels from the ROM and wrote some software to process those into more human-readable formats:

1. Extract stages tile maps from ROM (using PHP)
2. Convert stage data to JSON (using PHP)
3. Level viewer (using JavaScript and HTML canvas)

* [Source code at GitHub](https://github.com/gingerbeardman/pang-ds)

## Level Viewer

Below is an `iframe` containing a web page hosted on my server:

<iframe class="pang" src="https://www.gingerbeardman.com/pangds/"></iframe>

## Notes

The levels are stored in the standard format for Nintendo DS tile-based levels, so these scripts could well work for levels from other games.

It was interesting to find one of the levels shown on the back of the box, seen in the top right of the image below, which is not featured in the main game. My theory is that this level was created to make the game seem more appealing to anybody looking at these supposedly in-game screenshots.

![JPG](https://cdn.gingerbeardman.com/images/posts/pang-ds-box.jpg)

### Performance

The performance of the level viewer at the time was much better in Chrome than in Safari, so [I raised a bug at WebKit](https://bugs.webkit.org/show_bug.cgi?id=181244). Several years on bug lays dormant, but things don't seem quite so bad today. Though there have been three major browser upgrades, one major macOS update and a computer upgrade since!

### To do

I never did figure out where the definitions for the various balls and other objects on each level were stored. Maybe one day.

## You need to play this game!

![JPG](https://cdn.gingerbeardman.com/images/posts/pang-ds.jpg)