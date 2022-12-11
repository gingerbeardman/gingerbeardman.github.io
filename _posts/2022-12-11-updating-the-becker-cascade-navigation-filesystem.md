---
layout: post
title: 'Updating the Becker Cascade navigation filesystem'
tags:
- becker
- maps
- speedcam
- hacking
nouns:
- Becker
- Cascade
- Traffic Pro
comments: https://twitter.com/gingerbeardman/status/1601959370728050688

---

I have a [Becker Traffic Pro 7949](https://ifdesign.com/en/winner-ranking/project/becker-traffic-pro-7949/2069) car audio and navigation system in my LHD Renault Twingo mk1. This unit, effectively a re-badged Becker Cascade with a green OLED screen rather than colour, was bundled with high-end sports cars of German and Italian origin, but I added one to my lowly Twingo because it's a 1DIN headunit with great sound quality, navigation and music support from CF card, that gives spoken and on-screen turn-by-turn directions!

Even today the interface is rock solid and obvious, and the turn-by-turn directions pack a lot of information on screen. Below we can see (clockwise from top right): menu marker, ETA, distance to next turn as number and as shaded road edge, turn-by-turn arrow, traffic message control badge, remaining journey time, current road and next road.

![PNG](/images/posts/becker-7949.png)

[A while ago I hacked the CF card structure](/2009/09/05/hacking-the-becker-cascade-navigation-cf-card/) to allow use of larger capacity cards to more easily store maps and music side-by-side. Good times!

## Upgrading maps

The maps for this thing were long discontinued, but for a while users such as myself were able to use maps made for BMW's business fleet (with partial postcode search) and more recently Mercedes-Benz (with no postcode search). 

It's also possible to add speed limit and camera data through injecting a new .lwd file (thanks SCDB!) into the split ISO filesystem. This relied on using Windows and some old apps.

Today I wrote a small shell script to do the same on macOS (and probably Linux, maybe Windows).

<script src="https://gist.github.com/gingerbeardman/f18de0abe61c8dd548b4901b606bf39b.js"></script>
