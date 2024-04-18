---
layout: post
title: "Per-game skins in the Delta classic video game emulator for iOS"
date: '2024-04-18T20:55+01:00'
tags:
- hack
- emulation
- ios
- maboshi
nouns:
- MaBoShi
- Delta
- DraStic
- DeSmuME
featured: true
pinned: false
comments: https://twitter.com/gingerbeardman/status/
style: |
  p.deltaskin img {
    margin: 0 auto;
    width: 375px;
  }

---

Apple recently changed the App Store rules to allow emulators, which means we're now seeing emulators for classic video game consoles available for download! This is great news for a retro game nut like myself. [Delta](https://apps.apple.com/gb/app/delta-game-emulator/id1048524688) is one such emulator that currently focuses on Nintendo games: NES, Game Boy, Game Boy Color, SNES, N64 and DS.

I thought it would be fun to play my favourite Nintendo DS game: [MaBoShi](/2013/06/29/maboshi/). This is an odd choice of game for a few reasons, but it really tests what Delta and the melonDS emulation core can do.

Immediately I noticed that the Nintendo DS emulation quality is high: MaBoShi's mosaic transitions are shown, whereas in other emulators such as DraStic or DeSmuME they are not. So, we're already off to a good start!

![PNG](/images/posts/delta-maboshi-default.png "Delta's default Nintendo DS skin—pretty nice!")
{:.tofigure}

----

## When good isn't good enough

But, we can see some odd things about MaBoShi and there are some other things we can't see:
- it is played with the DS rotated on its side
- it doesn't use the touch screen
- only uses the D-pad during play (and Start button to pause)

Usually, when I play this game I activate single screen mode in the emulator and forgo seeing the high score, which is no big deal as the game ends at 1 million and that's my goal. 

So I looked into the [Delta docs](https://faq.deltaemulator.com/using-delta/controller-skins) and [skin docs](https://noah978.gitbook.io/delta-docs/skins) and the options to show a single screen or rotate it are controlled by the presentation skin (visual theme) you are using. 

Reading into the things exposed in the skins it seemed very comprehensive, so I began to hatch a plan... *maybe I can create a custom skin just for MaBoShi*? 

----

## I love it when a plan comes together

Here's the feature list I came up with:
1. show the main game screen
2. show only the score from the secondary screen
3. remove all controls other than the d-pad, start and delta button

I achived this goal as follows:
1. define two seperate screens to split the DS image
2. rotate each of the screens
3. overlap the screens so that only the score from the secondary screen is visible
4. rotate the d-pad direction controls
5. create a nice PDF to show the buttons visually

If you're interested in the JSON associated with this skin, [here it is on GitHub](https://gist.github.com/gingerbeardman/00a75a0675da8a98faa0812383eb822e).

----

## Maximum joy

Installation and download instructions are at the bottom of the page, but here's what it looks like:

![PNG](/images/posts/delta-maboshi-deltaskin.png)
{:class="deltaskin"}

----

## Installation

To install the skin you need to do a little bit of busy work, but boy is it worth it:

1. Install [Delta]() and get it running DS games ([check this video](https://www.youtube.com/watch?v=lV_QfVvXA-o))
1. Create a folder on your iPhone so that you can find it again using the Files.app interface (I create a folder called Delta in my iCloud Drive just for the following files)
    1. Download the [MaBoShi .nds game file](https://archive.org/download/maboshi-nintendo-ds/MaBoShi.nds)
    1. Download the [cover art](https://archive.org/download/maboshi-nintendo-ds/MaBoShi.jpg)
    1. Download the [skin](https://cdn.gingerbeardman.com/files/NDS_MaBoShi.deltaskin)
1. Add the game file in Delta
1. Tap and hold the game icon to show a menu
1. Choose "Change Controller Skin"
1. Add the skin using the + button and set it as the Portrait skin for the game

Check out the [Wikipedia page for MaBoShi](https://en.wikipedia.org/wiki/MaBoShi:_The_Three_Shape_Arcade) to learn more about the game and how to play it.
