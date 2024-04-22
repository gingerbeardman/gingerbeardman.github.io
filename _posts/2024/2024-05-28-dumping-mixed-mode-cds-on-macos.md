---
layout: post
title: "Dumping mixed mode CDs on macOS"
date: '2024-05-28T17:30+00:00'
tags:
- macos
- hack
- preservation
- macintosh
nouns:
featured: false
pinned: false
comments: https://twitter.com/gingerbeardman/status/
---

I've been dumping a lot of old Macintosh CD-ROMs recently for my [Macintosh Magazine Media](/2021/10/30/macintosh-magazine-media/) project. I found that there is so much time between me having to do this that I forget the best way to approach things. So this blog post serves two purposes:

1. to enlighten the reader
2. to remind the writer

The discs seem to fall into two categories, but with one large caveat:

----

## Data

These can be dumped straight to ISO using [AnyToIso](https://crystalidea.com/anytoiso), or your tool of choice. 

I dump to ISO because that's what I use for the [BasiliskII Macintosh emulator](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh/), but some presevationists prefer different formats or dumping with particular hardware.

----

## Mixed Mode

This is where things get tricky. Nautilus discs in particular, and a few other discs, contain both data and audio tracks in a single session. 

The good news is that most of these can be dumped using Windows tools, such as [ImgBurn](https://www.imgburn.com).

But the majority of Nautilus discs seem to be mastered in an odd way—I suspect the TOC is incorrect—which means they cannot be dumped because of read/checksum errors at the end of the data track. 

My workaround is to dump these in two steps:

### 1. Dump the raw data

We need to dump the whole disc as raw data using `dd` in Terminal on macOS:

```sh
% CD=`diskutil list | grep "CD_partition" | awk '{print $NF}'`
% diskutil unmountDisk $CD
% time dd if=/dev/$CD of=disc.img bs=1MB
% diskutil eject $CD
```

These incantations: find the drive with a CD in it (assuming there's only one), unmount the disk so we can read it, and dump the disk timing how long it takes.

You can vary the block size (bs) based on the your particular setup. Internal drives or full size external drives will be much faster, but my [Samsung SE-208GB](http://www.cdrlabs.com/reviews/samsung-se-208gb-portable-8x-dvd-writer/all-pages.html) USB reader is slow and steady so takes a while to dump the disc. We're timing it so we can see exactly how long after it completes. You can also keep an eye on how much data has been read using Activity Monitor, or by looking at the file that is being created.

### 2. Extract the disc image

Using [IsoBuster](https://www.isobuster.com) on Windows we can scan the raw data and extract the correct disc image from it. Mixed mode discs need to be exported as a BIN+CUE pair.

After opening the `disc.img` the app will show you the structure of the CD, and you can even browse the HFS files system! Very cool. To extract the BIN+CUE pair choose the following menu items: 

`File` > `CD` > `Extract CD (image)` > `Raw (*.bin)`

Then pick a filename and location and confirm. The extraction process is very quick.

## Postscript

After dumping the disc successfully, I [extract the filesystem into a text file](/2022/03/31/working-with-classic-macintosh-text-encodings-in-the-age-of-unicode/), scan the physical disc, and upload everything to [Internet Archive](https://archive.org/details/@gingerbeardman) for other people to use.