---
layout: post
title: 'JINZO Paint — vintage mobile drawing app'
date: '2024-01-22T20:53+00:00'
tags:
- graphics
- japanese
- windowsce
- pocketpc
- pc98
- pixelart
- software
- hack
nouns:
- JINZO Paint
- Windows CE
- PocketPC
- JZP
- MPS
- Multi Paint System
- Maguro Paint System
- Tuna Paint System
- C-Lab
- Woody_RINN
- Atari ST
- Macintosh
- Palm
- Ghidra
- HyperCard
- NewtPaint
- TealPaint
carousel: jinzo-paint
comments: https://twitter.com/gingerbeardman/status/1749538521386266939

---

At my core I'm a software guy. I don't really get attached to hardware: in my mind exists only as a conduit to software. I use emulation whenever I can to benefit from the increased convenience and reliability. But when I can't I buy old devices, and with old devices come old problems.

I'm fascinated by [old digital art software](/2023/10/21/list-of-vintage-japanese-pixel-dot-art-software/), from my beginnings on Atari ST, though classic Macintosh and vintage Japanese PCs, to handhelds like Palm devices or, in this case, a PocketPC running Windows CE. As with all software, many great ideas have been abandoned in the name of "progress".

## Zen and the Art of Software Design

Japanese art software is notable in a number of ways because their drawing tools evolved differently to those in the West, at least until Photoshop took hold. In Japan the first breakthrough digital art software was the PC-98's [Multi Paint System](https://www.youtube.com/watch?v=nIdFor2WOnw) (MPS, マルチペイントシステム) release by C-Lab in 1992, though an earlier version was released in 1991 as Maguro Paint System, or Tuna Paint System (鮪ペイントシステム) by Woody_RINN.

MPS introduced [the ability to lock colours and prevent them from being drawn over](https://twitter.com/_blubot_/status/1727397680895476153). You might think of it as a mask featuring every instance of that particular colour. You could also replace colours in a similar way. This was done through an intuitive mechanism of a toolbar button or key press to lock one or more specific colours on the palette, which is quite different to the selection or mask approaches required in Photoshop.

Regardless of whether or not the method of handling colours in MPS is novel or unique, it was adopted as a standard by most Japanese art software for many years. JINZO Paint (JZP), a digital art app for PocketPC (Windows CE) created by , was one such app that adopted the MPS way of doing things and I've been using it a bunch recently. It offers first class support for drawing in dither patterns, and you can load in custom patterns. If you like HyperCard, NewtPaint, TealPaint, you'll love it. (Jinzo is the Japanese word for kidney.)

If you're interested in reading about the interface and functions of JINZO Paint [I've mirrored the manuals for two early versions on my website](https://www.gingerbeardman.com/jzpaint/) as the original location is no longer available. A later version supports full 24-bit colour, but removes some useful functions. Regardless, all versions use a similar interface so they're easy to use once you're familiar with the general operation. One thing I would say is that the toolbars can be opened and selected with a single tap-drag-release, which a huge win for usability that reminds me of the original Apple Macintosh, and Palm OS.

<div style="width:480px;margin:0 auto;">

{% include carousel.html height="640" unit="px" duration="10" %}

</div>

----

## For my next trick I will run it on a Dictionary

My Windows CE device is a bit odd because it's a Brain. These are a range of electronic dictionaries made by Sharp and sold only in Japan. With a little bit of gentle coaxing it can be used as a little computer running Windows CE. Some years ago it was figured out that you could sideload apps and even force these devices to open the Windows CE desktop and do all manner of crazy things. Japanese hackers and modders seem to love using these devices to run emulators for old computers like Sharp MZ-series and NEC PC-series. If you want to know more check out the [Brain Wiki](https://brain.fandom.com/ja/wiki/Brain_Wiki) and if you want to pick up a device [here's a list of them all](https://brain.fandom.com/ja/wiki/Brain機種別解説) (browser translation required for those links).

![JPG](/images/posts/jinzo-paint.jpg "JINZO Paint, 4-colour version")
{:.tofigure}

----

## A problem with file selection

Anyway, I noticed whilst using JZP that the file selector would often fail open properly. It worked the first time but subsequent attempts saw it open and then immediately crash and vanish. The source code to the first two versions is available, and with the help of Brain Hackers' [@watamario15](https://twitter.com/watamario15) managed to track down the reason for the quirk. He found that the value of the parameter being passed to the file selector was invalid, and provided proof by modifying the source code to those versions to produce new working binaries. But with the final, arguably more capable version (24-bit colour, more brush sizes, custom brushes) has no source code.

## Multiple solutions

The binaries for my device are ARM so there's good support for debugging that type of code. I fired up Ghidra and started poking around in the earliest, smallest version of JZP. I quickly found the section of code that defined the parameters, helped by the placement of the setup of the strings used in the file selector. [A quick tutorial later](https://www.coalfire.com/the-coalfire-blog/reverse-engineering-and-patching-with-ghidra) and I knew how to use Ghidra to find references to data, patch instructions, and save a new binary. The workaround was to set the parameter to NULL, which works nicely but removes the ability for the app to remember the most recently used directory.

However the source is available for the two earlier versions, which I prefer using, so more complete changes could be implemented. Rather than simply nulling out the parameter we could set it to the correct value: the root directory. Additional changes were needed to make sure the program would cope with saving and loading from the root directory of the device. And finally in the 16-colour version saving the bitmap image took a very long time, so it has been optimised.

Many thanks to [@watamario15](https://twitter.com/watamario15) for his invaluable help with debugging and source code wrangling. And to [Brain Wiki](https://brain.fandom.com/ja/wiki/) for being such a valuable resource for crazy old software nerds like me!

## Further reading

- [JINZO Paint page on Brain Wiki](https://brain.fandom.com/ja/wiki/JINZO_Paint)
- [JINZO Paint thread on Brain Hackers Discord Server](https://discord.com/channels/759813579120836608/1198349406878060646)
- [Playback of Woody_RINN drawing in Multi Paint System](https://www.youtube.com/watch?v=nIdFor2WOnw) watch the dithering by blending at [07:14](https://www.youtube.com/watch?v=nIdFor2WOnw&t=434)

- [Fixing bugs using Bird on Palm OS](/2022/10/07/fixing-bugs-using-bird-on-palm-os/) an earlier example of this kind of old software hackery