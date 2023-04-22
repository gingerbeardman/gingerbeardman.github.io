---
layout: post
title: Resurrecting an ASMedia USB hard drive enclosure
tags:
- hack
- firmware
- windows
- macos
nouns:
- UGREEN
- ASMedia
- ASMT2235
comments: 

---

A while ago I bought a 2.5" Crucial SSD and a _UGREEN USB 3.1 Gen 2 Hard Drive Enclosure_ (SKU: [70499](https://www.ugreen.com/collections/hard-drive-enclosure/products/usb-3-1-gen-2-hard-drive-enclosure)) on which to keep some working files whilst connected to a Mac mini. I used that on macOS 10.13 High Sierra, 10.14 Mojave, and 11 Big Sur (I skipped 10.15 Catalina). Over the years the setup served me well. 

After I upgraded to an M1 MacBook Pro I didn't need to use that sort of setup, so I just kept the external drive in my travel bag to be used as a backup drive.

## The problem

The first time I plugged it in on macOS 12 Monterey it didn't show up, but I didn't have time to troubleshoot so I put it away again. Today I had some free time so I plugged it in and, unsurprisingly, it did not mount. Time to do some research!

First, I tried it in my Windows VM. No joy. Then I tried it on a real Windows PC: it mounted briefly and then disappeared. Interesting! Thankfully Windows gave me a little more information to go on than macOS, it showed the chipset model number: ASMT2235

## The diagnosis

A quick web search found some [references to a firmware update](https://www.station-drivers.com/index.php/en/outils/Drivers/Asmedia/ASM-105x-115x-215x-(ASMT-xxxx)-Sata-USB-3.x-controllers/ASM2235-Sata-USB-3.1-controllers/ASMedia-ASM2235-SATA-USB-3.1-Firmware-Version-161102_D1_05_01/lang,en-gb/) that "resolves intermittent mounting issues in Windows" which sounded like just the ticket!

## The plan

I found a great [YouTube video that showed the process](https://www.youtube.com/watch?v=DOxrXnEwqJY) and explained what you should and should not do. The video was created in late 2022 and advised installing the firmware that started with the same number as the one on your drive, but my drive already had that installed (version 171120_D1_1E_80). Then, whilst I was looking at all the other available firmware, I noticed that the first part of the filename looked more like a date to me, one that roughly matched when the firmware was released. 

## The solution

So I decided to try flashing the firmware with the most recent date (version [220906_D1_45_01](https://www.usbdev.ru/files/asmedia/asmt2235firmware/)). The flashing tool, MPTools, needs to have its interface unlocked using the password "asmedia" and then you should select the line in the window that corresponds to your drive. It shouldn't let you flash the wrong drive, but please be careful! 

After displaying a green progress bar, the tool declared the process was a "PASS", and everything looked great. I unmounted the disk from Windows and it appeared in macOS — it had worked!

## Lights out

The only change after all of this is that the drive enclosure no longer shows a LED when powered on, which is a minor inconvenience in the grand scheme of things. 

The LED can be enabled by flashing a slightly less than newest firmware (version [200416_D143_00](https://www.usbdev.ru/files/asmedia/asmt2235firmware/)). At this point, given that it's proven these firmware updates do contain fixes, I think I'd rather be on the latest version.