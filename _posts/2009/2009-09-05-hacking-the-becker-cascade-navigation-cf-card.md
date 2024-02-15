---
layout: post
title: 'Hacking the Becker Cascade navigation CF card'
tags:
- becker
- maps
- hack
- hardware
nouns:
- Becker
- Cascade
- Traffic Pro
comments: 

---

I just had my tonsils removed and whilst recovering at home I decided to try to figure out how I could use larger CF cards in my [Becker Traffic Pro 7949](https://ifdesign.com/en/winner-ranking/project/becker-traffic-pro-7949/2069) car audio and navigation system, a close relative to the Becker Cascade. 

![PNG](https://cdn.gingerbeardman.com/images/posts/becker-7949.png)

The unit came with maps on a 2GB card which is barely big enough for the maps, leaving not much room for MP3 files. Later map distributions increased the size of the card to 4GB as the map quality increased, but still not much room remaining for music.

## Let's go bigger

I bought a new CF card of the same type (SanDisk), opting for a SanDisk Ultra 8GB, and copied the files and volume name over. It didn't work.

Next, I cloned the smaller card onto the larger card and that worked! Then I expanded the size of the partition and it stopped working. 

What's going on?

## Partition Magic

At the time I had a ThinkPad laptop with a built in CF reader. This allowed me to look at the card contents at a device/block level rather than the filesystem level. I noticed that there was the usual space after the main partition, and low and behold what did I see at the start of that "unused" space? Some magic text!

    HARMANBECKER BECKER V4

I even figured out the magic text for Ferrari branded units with the assistance of a helpful owner. 

    HARMANBECKER FERRARI V4

The version number would be increased in step with any updates to the system software.

By partitioning a SanDisk card and giving it the same file contents, volume name, and this magic text made the upgrade work. For a while I sold these modified cards on eBay for a nice little markup and it kept me in video games for a while. Good times!