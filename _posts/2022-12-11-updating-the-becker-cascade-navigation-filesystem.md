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
comments: https://twitter.com/gingerbeardman/status/1601953760909180933

---

I have a Becker Traffic Pro 7949 (a re-badged Becker Cascade with a green OLED screen) navigation unit in my LHD Renault Twingo mk1. This unit was bundled with high end sports cars of German and Italian origin, but I added one to my lowly Twingo because it's a 1DIN headunit with great sound quality, with navigation and music support from CF card, giving spoken and on-screen turn by turn directions!

[A while ago](/2009/09/05/hacking-the-becker-cascade-navigation-cf-card/) I hacked the CF card structure to allow use of larger capacity cards to more easily store maps and music side-by-side. Good times!

The maps for this thing were long discontinued, but for a while users such as myself were able to use maps made for BMW's business fleet (with partial postcode search) and more recently Mercedes-Benz (with no postcode search). 

It's also possible to add speed limit and camera data through injecting a new file into the split ISO filesystem. This relied on using Windows and some old apps.

Today I wrote a small shell script to do the same on macOS (and probably Linux, and maybe Windows).

<script src="https://gist.github.com/gingerbeardman/f18de0abe61c8dd548b4901b606bf39b.js"></script>
