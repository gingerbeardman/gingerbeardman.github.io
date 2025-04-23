---
layout: post
title: "Enhanced sfxr for Love2D"
date: '2025-03-11T18:23+00:00'
modified: '2025-03-20T15:33+00:00'
tags:
- love2d
- lua
- sounds
- sfx
nouns:
- Love2D
- Lua
image: /images/posts/sfxr-lua.png
featured: false
pinned: false
redirect_from:
- /2025/03/11/enhanced-sfxr-for-lua/
comments: https://twitter.com/gingerbeardman/status/1899861471267299568

---

I've made a bunch of usability and quality of life changes to the [sfxr.lua](https://love2d.org/wiki/sfxr.lua) demo app.

- fix: getDirectoryItems (from a PR)
- fix: off by one sample length error (from a PR)
- fix: space bar was not playing the sound
- fix: selected wave form was being ignored (sounds were always square wave)
- fix: loaded wave form not updating the interface (but sound was playing correctly)
- add: clone method added to sfxr.lua
- add: history form with list of previous sounds, save current, and undo/redo
- add: "play on changes" so that any time you adjust a sound it plays automatically
- add: keyboard navigation in file picker (A–Z: jump to files, Enter: choose, Esc: close picker)
- add: window title reflects the most recent loaded/saved file
- add: window title and filename reflects last operation
- add: file selector shows data directory path
- add: unified save directory across platforms

You can get it at: [gingerbeardman.itch.io/enhanced-sfxr-for-love2d](https://gingerbeardman.itch.io/enhanced-sfxr-for-love2d)

At some point I'll fork the project on GitHub and file some PRs with my changes, but the repo for it seems very dead so I'll wait until I hear back from the owner. Source code is at the above link.

![IMG](/images/posts/sfxr-lua.png "“Enhance!”")
{:.tofigure}
