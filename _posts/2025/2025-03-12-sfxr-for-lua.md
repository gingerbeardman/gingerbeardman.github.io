---
layout: post
title: "Enhanced sfxr for Lua"
date: '2025-03-11T12:00+00:00'
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

comments: https://twitter.com/gingerbeardman/status/

---

I made some usability and quality of life changes to the [sfxr.lua](https://love2d.org/wiki/sfxr.lua) demo app.

- fix: getDirectoryItems (from a PR)
- fix: off by one error sample length error (from a PR)
- fix: space bar was not playing sound
- fix: selected wave form was being ignored (sounds were always square wave)
- fix: loaded wave form not updating the interface (but sound was playing correctly)
- add: "auto play on changes" so that any time you adjust a slider the sound plays
- add: keyboard navigation in file picker (a–z: jump to files, Enter: choose, Esc: close picker)

For now you can get it at: [love2d.org/forums/viewtopic.php?p=262149#p262149](https://love2d.org/forums/viewtopic.php?p=262149#p262149)

At some point I'll fork the project and file some PRs with my changes.

![IMG](/images/posts/sfxr-lua.png)
