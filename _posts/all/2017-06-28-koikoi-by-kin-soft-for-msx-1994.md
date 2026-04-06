---
layout: post
title: 'Koi-Koi by KIN SOFT for MSX (1994)'
date: '2017-06-28T12:13+01:00'
modified: '2026-04-06T17:33+01:00'
tags:
- hack
- hanafuda
- koikoi
- msx
nouns:
- OpenMSX
- fMSX
- MSX Turbo R
- TurboR
- MSXDOS2
- doujin
- New Nintendo 3DS
- libretro
- fmsx-libretro
- RetroArch
image: /images/posts/msx-koikoi-by-kin-soft-1994.jpg
featured: true
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2041199956153847874
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mitqlf33r22h
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/116358838740319164

---

I [read about an old doujin user-created Koi-Koi game](https://msx-fan-wiki.appspot.com/view/1099) 花札こいこい made by KIN SOFT in 1994. This is my document of the hunt I went on to be able to find and play it!

## MSX・FAN

Firstly, the game came with [MSX・FAN Issue 26](https://archive.org/details/MSXFAN199406/page/n29/mode/2up) (1994/06) and by that I mean in the pages and on one of the two cover disks. So I had to find them in the existing archives. I found them on a Spanish website that I've since lost the link to. The game could be installed on a blank .dsk, which of course you have to [generate and format](https://www.msx.org/wiki/How_to_make_a_floppy_disk_image). The resulting .dsk played just fine in OpenMSX but not fMSX. 🤔

## dsk2rom

After some thought I figured out that using the Windows tool [dsk2rom.exe](https://github.com/joyrex2001/dsk2rom) I could convert the .dsk into a .rom file that would boot straight into the game when using fMSX. 

```
dsk2rom.exe -6d blank.dsk boot.rom
```

Those command-line options:
- `6` = use 60Hz video (the Japanese standard)
- `d` = allow booting of other diskroms (was required for compatibility)

But there were still some errors in certain situations:

- without MSXDOS2 or TurboR: `"Syntax error in 40"`
- with fMSX in RetroArch: `"Disk full in 40"`

With [some help from my *MSX* friends](https://www.msx.org/forum/msx-talk/emulation/help-running-converted-dsk-as-rom-in-retroarch-fmsx) it became clear the game required:

- `RAMDISK` command (part of MSXDOS2)
- 256KB RAM

Note: I think I had to create a .dsk containing both MSXDOS2 and then install the game onto to that. The MSX Turbo R has MSXDOS2 built-in.

## RetroArch

But fMSX in RetroArch doesn't allow you to set RAM and VRAM and in fact its defaults for those were wrong for some types of *MSX*. I [made some changes to fmsx-libretro core](https://github.com/libretro/fmsx-libretro/pull/14) and whilst I was in there made [several more improvements](https://github.com/libretro/fmsx-libretro/pulls?q=is%3Apr+author%3Agingerbeardman+is%3Aclosed+is%3Amerged). I even [updated the core to fMSX version 4.9](https://github.com/libretro/fmsx-libretro/pull/25) for all RetroArch users. I'm skipping over the huge effort that all these changes took, but it was fun hacking on libretro!

After all this I had a test build of the fmsx-libretro core for 3DS that I could use to play the game. 🎴

----

### The Game

The game is really interesting because of the yaku (card combos) it contains, and the fact that it has a Special Card Shop where you can use points to buy Special cards for cheating in imaginative ways against the CPU.

- Peek at Deck: Check the next card in the deck
- Peek at Opponent: View the opponent’s hand
- Card Explosion: Destroy a card on the table + force the opponent to skip a turn
- Card Swap: Swap cards in your hand
- Landmine Card: Explodes if the opponent takes it
- Deck Collapse: Turn over two cards from the deck consecutively
- Time Reversal: Reset the game
- Lightning Card: Prioritise acquiring 20-point cards
- Electric Vortex Card: Makes it easier to take 20-point cards from the board
- Storm: Swap the cards you are about to take
- Bamboo Cutter Card: Probability effect allowing you to acquire any card
- Atomic Bomb Card: Significantly reduces the opponent’s available cards

## Download

- A .zip of both the .dsk and .rom file: [koikoi-kin-soft-1994.zip](https://cdn.gingerbeardman.com/files/koikoi-kin-soft-1994.zip) (247 KB)

*If you are interested in Hanafuda video games or cards, why not join the [Hanafuda Discord server](/2019/02/28/hanafuda-discord/)?*

![IMG](/images/posts/msx-koikoi-by-kin-soft-1994.jpg "Koi-Koi by KIN SOFT (1994) running in fmsx-libretro on Nintendo 3DS (2017)")
{:.tofigure}

----

[![IMG](/images/posts/msx-fan-magazine-1994-06.jpg)](https://archive.org/details/MSXFAN199406/page/n29/mode/2up)

<figcaption>Magazine spread feature detailing the game, its controls, hanafuda, and valid yaku (card combos)</figcaption>
