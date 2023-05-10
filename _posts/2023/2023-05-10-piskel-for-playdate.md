---
layout: post
title: Piskel for Playdate
tags:
- piskel
- playdate
- pixelart
- art
nouns:
- Piskel
- Apple silicon
comments: https://twitter.com/gingerbeardman/status/1656404128338198530

---

Just pushed some changes to my Playdate-centric fork of Piskel.

[https://github.com/gingerbeardman/piskel-playdate/tree/dev-1047](https://github.com/gingerbeardman/piskel-playdate/tree/dev-1047)

This fork:
- should build just fine for Windows/Linux/Mac (Intel)
- can be used to build desktop apps of v15.0 on latest OS
- has Playdate-specific features
  - get frame size from imagetable filename
- has quality-of-life improvements
  - ignore warnings preference
- adds useful community improvements
  - Outliner tool (ElectricToy:jmw/outliner-tool)
  - Dither modifier keys (ElectricToy:jmw/dither-modifier-keys)
  - Keyboard cursor (Piskel:piskel/keyboard-cursor)

### Apple silicon support

Check out the [readme](https://github.com/gingerbeardman/piskel-playdate/blob/dev-1047/README.md) for details on how to quickly generate a new build without having to build nw.js from scratch. It's very easy! Thanks to Ayushman Chhabra for help and hints.

### Image Table support

Most of the time I load Piskel and drop an image table (a sort of sprite sheet) on it. Having to manually enter frame/cell size dimensions got old really fast, so this was my main motivation for doing a custom build. It's a simple hack that checks the file name and parses out the cell dimensions. Slightly more tricky was trigger changes to the import panel so that everything looked and worked as it should.

### Ignore Warnings
After editing an image in Piskel I export it and quit. The app always nags twice: firstly to make sure you wanted to "leave the site?" - a leftover from the fact this is a web tool at heart - and a secondly to make sure you want to "abandon unsaved changes?". An option to ignore these warnings is such a time saver.

###  Outliner tool

Thanks to ElectricToy/jmw for this patch, it works like flood fill but only fills the outline of any pixels it hits. You can hold Cmd to do a slightly thicker outline including corners.

### Dither modifier keys

Another one from ElectricToy/jmw, this gives you 25% ad 75% dither patterns by holding modifier keys, in addition to the standard 50% checkerboard dither pattern.

### Keyboard cursor

I'm not sure how useful this really is, but I added it anyway. Thanks to juliandescottes for the patch. You can control the pixel cursor location using Alt+cursor, and space will activate the current tool at that location. I haven't tried it but you could set up a game controller to use these keys and [draw like Dan Malone did](https://readonlymemory.vg/the-making-of-speedball-2/)!
