---
layout: post
title: Piskel for Playdate
modified: '2024-05-04T11:00+01:00'
tags:
- piskel
- playdate
- pixelart
- art
nouns:
- Playdate
- Piskel
- Apple silicon
image: /images/posts/emoji-history-piskel.png
comments: https://twitter.com/gingerbeardman/status/1656404128338198530

---

I just pushed some changes to my Playdate-centric fork of Piskel:

[github.com/gingerbeardman/piskel-playdate/tree/dev-1047](https://github.com/gingerbeardman/piskel-playdate/tree/dev-1047)

This fork:
- can be used to build desktop apps on latest operating systems
  - updated to future-proof dependencies and build process
  - builds for Windows, Linux, macOS
- has Playdate-specific features
  - get frame size from imagetable filename
- has quality-of-life improvements
  - save keyboard shortcut will export PNG
  - ignore warnings preference
  - turns off animated preview by default
  - different window size and positioning
  - stops nagging if run in WebKit
  - modern macOS icon
- adds useful community improvements
  - Outliner tool
  - Dither modifier keys
  - Keyboard cursor
  - Shift Palette Color Index Brush
- adds new default Pencil tool
  - draws in the opposite color to that of the start pixel

----

### Apple silicon support

Check out the [readme](https://github.com/gingerbeardman/piskel-playdate/blob/dev-1047/README.md) for details on how to quickly generate a new build without having to build nw.js from scratch. It's very easy! Thanks to [Ayushman Chhabra](https://www.ayushmanchhabra.com) for help and hints.

### Image Table support

Most of the time I load Piskel and drop an image table (a sort of sprite sheet) on it. Having to manually enter frame/cell size dimensions got old really fast, so this was my main motivation for doing a custom build. It's a simple hack that checks the file name and parses out the cell dimensions. Slightly more tricky was trigger changes to the import panel so that everything looked and worked as it should.

### Ignore Warnings
After editing an image in Piskel the majority of the time I export it and then quit the app. The app always nags twice: firstly to make sure you wanted to "leave the site?" - a leftover from the fact this is a web tool at heart - and a secondly to make sure you want to "abandon unsaved changes?". An option to ignore these warnings is such a time saver.

----

I also took the opportunity to add some useful features developed by the community.

###  Outliner tool

Thanks to [ElectricToy](https://github.com/ElectricToy/piskel/pulls?q=is%3Apr+is%3Aclosed) for this patch, it works like flood fill but only fills the outline of any pixels it hits. You can hold Cmd to do a slightly thicker outline including corners.

### Dither modifier keys

Another one from [ElectricToy](https://github.com/ElectricToy/piskel/pulls?q=is%3Apr+is%3Aclosed), this gives you 25% ad 75% dither patterns by holding modifier keys, in addition to the standard 50% checkerboard dither pattern.

### Keyboard cursor

I'm not sure how useful this really is, but I added it anyway. Thanks to [juliandescottes](https://github.com/piskelapp/piskel/tree/keyboard-cursor) for the patch. You can control the pixel cursor location using Alt+cursor, and space will activate the current tool at that location. I haven't tried it but you could set up a game controller to use these keys and [draw like Dan Malone did](https://readonlymemory.vg/the-making-of-speedball-2/)!

### Shift Palette Color Index Brush

This tool allows you to do shading using neighbouring colours more easily. Thanks to [blurymind](https://github.com/piskelapp/piskel/pull/887).

----

And I even added a new tool myself!

### Pencil tool (new default)

Classic Macintosh style Pencil. Draws in the opposite color than that of the pixel the stroke begins on. If the stroke begins on transparent, or the secondary color, it draws in the primary color. If the stroke begins on the primary color, it draws in the secondary color. This minimizes the need to switch between selected colors. To draw in a single color you won't need to change colors or tools at all.
