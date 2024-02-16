---
layout: post
title: 'JINZO Paint: vintage mobile drawing app'
last_modified_at: '2024-01-26T21:05+00:00'
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
- JINZO Paint 16
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
comments: https://twitter.com/gingerbeardman/status/1748799583491076191

---

At my core I'm a software guy. I don't really get attached to hardware: in my mind it exists only as a conduit to software. I use emulation whenever I can to benefit from the increased convenience and reliability. But when I can't... I buy old devices, and with old devices come old problems.

I'm fascinated by [vintage digital art software](/2023/10/21/list-of-vintage-japanese-pixel-dot-art-software/), from my beginnings on Atari ST, though classic Macintosh and vintage Japanese PCs, to handhelds like Palm devices or, in this case, a PocketPC running Windows CE. As with all software, many great ideas have been abandoned in the name of "progress".

## Zen and the Art of Software Design

Japanese art software is notable in a number of ways because their drawing tools evolved differently to those in the West, at least until Photoshop took hold. In Japan the first breakthrough digital art software was the PC-98's [Multi Paint System](https://www.youtube.com/watch?v=nIdFor2WOnw) (MPS, マルチペイントシステム) released by C-Lab in 1992, though an earlier version was released in 1991 as Maguro Paint System, or Tuna Paint System (鮪ペイントシステム) both of which were programmed by Woody_RINN.

MPS introduced [the ability to lock colours and prevent them from being drawn over](https://twitter.com/_blubot_/status/1727397680895476153). You might think of it as a mask featuring every instance of that particular colour. You could also replace colours in a similar way. This was done through an intuitive mechanism of a toolbar button or key press to lock one or more specific colours on the palette, which is quite different to the selection or mask approaches popularised by Photoshop and common today.

Regardless of whether or not the method of handling colours in MPS is novel or unique, it was adopted as a standard by most Japanese art software for many years. JINZO Paint (JZP), a digital art app for PocketPC (Windows CE) created by t-ueno ([Tomohiro Ueno](http://www.tomozon.sakura.ne.jp/wince/)), was one such app that adopted the MPS way of doing things and I've been using it a bunch recently. It offers first class support for drawing in dither patterns, and you can load in custom patterns. If you like HyperCard, NewtPaint, TealPaint, you'll love it. *Jinzo* is the Japanese word for kidney, which is also the icon of the app.

If you're interested in reading about the interface and functions of JINZO Paint [I've mirrored the manuals for two early versions on my website](https://www.gingerbeardman.com/jzpaint/) as the original location is no longer available. A later version supports full 24-bit colour, but removes some useful functions. Regardless, all versions use a similar interface so they're easy to use once you're familiar with the general operation. One thing I would say is that the toolbars can be opened and selected with a single tap-drag-release action, which a huge win for usability and one that reminds me of the original Apple Macintosh and Palm OS. If you're lucky your operating system today will support such fluidity.

<div style="width:100%;margin:0 auto;">

{% include carousel.html height="133" unit="%" duration="10" %}

</div>
 
----

## For my next trick I will run it on a Dictionary

My Windows CE device is a bit odd because it's a Brain. These are a range of electronic dictionaries made by Sharp and sold only in Japan. With a bit of gentle coaxing it can be used as a little computer running Windows CE. My particular model is the PW-SH1 which is a 3rd generation device with a high resolution screen whose hinge can rotate 360° so it's back-to-back against the keyboard, effectively becoming a tablet computer. Some years ago it was figured out that you could sideload apps and even force these devices to open the Windows CE desktop and do all manner of crazy things. Japanese hackers and modders seem to love using these devices to run emulators for old computers like Sharp MZ-series and NEC PC-series. If you want to know more check out the [Brain Wiki](https://brain.fandom.com/ja/wiki/Brain_Wiki) and if you want to pick up a device [here's a list of them all](https://brain.fandom.com/ja/wiki/Brain機種別解説) (browser translation required for those links).

![JPG](https://cdn.gingerbeardman.com/images/posts/jinzo-paint.jpg "JINZO Paint, 4-colour version")
{:.tofigure}

----

## A problem with file selection

Anyway, I noticed whilst using JZP that the file selector would often fail to open properly. It worked the first time but subsequent attempts saw it open and then immediately vanish. The source code to the first two versions is available, and with the help of Brain Hackers' [@watamario15](https://twitter.com/watamario15) the reason for the problem was traced. He found that the value of the parameter being passed to the file selector was invalid, and provided proof by modifying the source code to those versions resulting in new working binaries. But with the final full-colour version has no source code, so how do we fix that?

## Multiple solutions

The binaries for my device are ARM so there's good support for debugging that type of code. I fired up Ghidra and started poking around in the earliest, smallest version of JZP. I quickly found the section of code that defined the parameters, helped by the placement of the setup of the strings used in the file selector. [A quick tutorial later](https://www.coalfire.com/the-coalfire-blog/reverse-engineering-and-patching-with-ghidra) and I knew how to use Ghidra to find references to data, patch instructions, and save a new binary. The workaround was to set the parameter to NULL, which works nicely but removes the ability for the app to remember the most recently used directory.

However the source is available for the two earlier versions, which I prefer using, so more complete changes could be implemented. Rather than simply nulling out the parameter we could set it to the correct initial value: the root directory. Additional changes were needed to make sure the program would cope with saving and loading from the root directory of the device directly. And finally, just for good measure, the 16-colour version's extremely slow bitmap saving has been optimised!

Many thanks to [@watamario15](https://twitter.com/watamario15) for his invaluable help with debugging and his generous source code wrangling. And to [Brain Wiki](https://brain.fandom.com/ja/wiki/) for being such a valuable resource for crazy old software nerds like me!

## Keyboard controls

I've also added keyboard control to JINZO Paint 16, with standard Photoshop keys to switch tools, plus keys for undo, set zoom, quick zoom (hold space bar), and more. If I get permission from the original author I'll release a patch.

![JPG](https://cdn.gingerbeardman.com/images/posts/jinzo-paint-dev.png "JINZO Paint 16, source code modifications")
{:.tofigure}


## Further reading

- [JINZO Paint page on Brain Wiki](https://brain.fandom.com/ja/wiki/JINZO_Paint)
- [JINZO Paint thread on Brain Hackers Discord Server](https://discord.com/channels/759813579120836608/1198349406878060646)
- [JINZO Paint documentation mirror](https://www.gingerbeardman.com/jzpaint/)
- [JINZO Paint tutorial (4-colours)](http://www.tomozon.sakura.ne.jp/wince/JINZO_COLLECTION/DATA_BOOK/JZP_DATA/tel/howtojzp/howtojzp.htm)
- [JINZO Paint tutorial (16-colours)](http://www.tomozon.sakura.ne.jp/wince/JINZO_COLLECTION/DATA_BOOK/JZP_DATA/emugaro/cgmake.htm)
- [Playback of Woody_RINN drawing in Multi Paint System](https://www.youtube.com/watch?v=nIdFor2WOnw) watch the dithering by blending at [07:14](https://www.youtube.com/watch?v=nIdFor2WOnw&t=434)
