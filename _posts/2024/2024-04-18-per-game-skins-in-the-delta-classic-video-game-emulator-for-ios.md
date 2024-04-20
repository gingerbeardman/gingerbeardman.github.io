---
layout: post
title: "Per-game skins in the Delta classic video game emulator for iOS"
date: '2024-04-18T20:55+01:00'
last_modified_at: '2024-04-19T17:46+01:00'
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
comments: https://twitter.com/gingerbeardman/status/1781049846310346871
style: |
  p.deltaskin img {
    margin: 0 auto;
    width: 375px;
  }

---

Apple recently changed the App Store rules to allow emulators, which means we're now seeing emulators for classic video game consoles available for download! This is great news for a retro gamer like myself. [Delta](https://apps.apple.com/gb/app/delta-game-emulator/id1048524688) is one such emulator that currently focuses on Nintendo platforms: NES, Game Boy, Game Boy Color, SNES, N64 and DS.

I thought it would be fun to play my favourite Nintendo DS game: [MaBoShi](/2013/06/29/maboshi/). This is an odd choice of game for a few reasons, but it really tests what Delta and the melonDS emulation core can do.

Immediately I noticed that the Nintendo DS emulation quality is high: MaBoShi's mosaic transitions are shown, whereas in other emulators such as DraStic or DeSmuME they are not. That's a good start!

![PNG](https://cdn.gingerbeardman.com/images/posts/delta-maboshi-default.png "Delta's default Nintendo DS skin—pretty nice! BUT")
{:.tofigure}

----

## When good isn't good enough

But, we can see some odd things about MaBoShi:
- it is played with the DS rotated on its side
- the second screen goes mostly unused

And there are some other things we can't see:
- it doesn't use the touch screen
- only the D-pad is used during play (and Start button to pause)

Usually, when I play this game in an emulator I activate single screen mode and forgo seeing the high score, which is no big deal as the game ends at 1 million and that's always my goal. 

So I looked into the [Delta docs](https://faq.deltaemulator.com/using-delta/controller-skins) and [skin docs](https://noah978.gitbook.io/delta-docs/skins) and find that the options to show a single screen, or rotate it, are controlled by the skin (visual theme) you are using. 

Reading further into skins the capabilities seemed quite comprehensive, so I began to hatch a plan... *maybe I can create a custom skin just for MaBoShi*? 

----

## I love it when a plan comes together

Here's the feature list I came up with:
1. show the main game screen
2. show only the score from the secondary screen
3. remove all controls other than the d-pad, start and delta button

I achieved this goal as follows:
1. define two seperate screens to split the DS image
2. rotate each of the screens
3. overlap the screens so that only the score from the secondary screen is visible
4. rotate the d-pad direction controls
5. made the touch/game screen a big button
6. make empty space equivalent to nearest button
7. create a nice PDF to show the buttons visually

If you're interested in the JSON associated with this skin, [here it is on GitHub](https://gist.github.com/gingerbeardman/00a75a0675da8a98faa0812383eb822e).

----

## Maximum joy

Installation and download instructions are at the bottom of the page, but here's the final skin:

![PNG](https://cdn.gingerbeardman.com/images/posts/delta-maboshi-deltaskin.png)
{:class="deltaskin"}

![PNG](https://cdn.gingerbeardman.com/images/posts/delta-maboshi-deltaskin-instructions.png "Game instructions are presented when the phone is in landscape")
{:.tofigure}

----

## Installation

To install the skin you need to do a little bit of busy work, but boy is it worth it:

1. Install [Delta]() and get it running DS games ([check this video](https://www.youtube.com/watch?v=lV_QfVvXA-o))
1. Create a folder called Delta in your iCloud Drive so you can easily store/retrieve some downloads
1. Download the following files:
    - [MaBoShi.nds.zip](https://archive.org/download/maboshi-nintendo-ds/MaBoShi.nds.zip) game file
    - [MaBoShi.jpg](https://archive.org/download/maboshi-nintendo-ds/MaBoShi.jpg) artwork
    - [MaBoShi.deltaskin](https://cdn.gingerbeardman.com/files/NDS_MaBoShi.deltaskin) custom skin
1. Open the .nds.zip game file in Delta
1. Tap and hold the game icon to show a menu
1. Choose "Change Artwork"
1. Select the .jpg you downloaded earlier
1. Choose "Change Controller Skin"
1. Select the skin using the + button and set it as both Portrait and Landscape skin for the game

Check out [my MaBoShi Guide at GameFAQs](https://gamefaqs.gamespot.com/wii/946472-maboshis-arcade/faqs) to learn more about the game and how to play it. It's essentially a one button game so isn't affected by the lack of physical buttons.
