---
layout: post
title: "Making games on iPhone/iPad using Lua & Love2D"
date: '2025-02-20T07:37+00:00'
last_modified_at: '2025-02-21T18:43+00:00'
tags:
- ios
- iphone
- ipad
- gamedev
- software
featured: false
pinned: false

comments: https://twitter.com/gingerbeardman/status/1892021312568115539

---

I wondered how feasible it is to make Love2D games "on the go" (on a train, in bed, etc). Often I want to try a quick sketch, work up a prototype, or simply verify an algorithm. I'm happy to say it's possible!

----

## Runners

**Love2D Studio**
- Available since Jan 2024
- Free [apps.apple.com/gb/app/love2d-studio/id6474188075](https://apps.apple.com/gb/app/love2d-studio/id6474188075)
- this allows you to manage love files and run them on iPhone
- Love2D errors can even be copied to the clipboard!

**Love2D Game Maker**
- Available since March 2024
- Paid [apps.apple.com/gb/app/love2d-game-maker/id6476174098](https://apps.apple.com/gb/app/love2d-game-maker/id6476174098)
- TestFlight [testflight.apple.com/join/bCLmQKfQ](https://testflight.apple.com/join/bCLmQKfQ)
- from the creator of LuaLu (see below)
- comes bundled with a handful of demo games
- [Pong tutorial](https://www.iamadman.com/products/love2d-gamemaker/love2d-game-maker-learn-to-create-the-classic-game-of-pong-in-10mins/)

----

## Editors

**Textastic** (since 2010)
- Paid [apps.apple.com/gb/app/textastic-code-editor/id1049254261](https://apps.apple.com/gb/app/textastic-code-editor/id1049254261)
- text editor with autocomplete and function picker

**Kodex** (since 2017)
- Free [apps.apple.com/gb/app/kodex/id1038574481](https://apps.apple.com/gb/app/kodex/id1038574481)
- text editor with minimap

**GoCoEdit** (since 2016)
- Paid [apps.apple.com/gb/app/gocoedit-code-text-editor/id869346854](https://apps.apple.com/gb/app/gocoedit-code-text-editor/id869346854)
- text editor with autocomplete

**Runestone** (since 2022)
- Free, limited [apps.apple.com/gb/app/runestone-text-editor/id1548193893](https://apps.apple.com/gb/app/runestone-text-editor/id1548193893)
- text editor with clean user interface

**Lua IDE** (since Feb 2021)
- Free [apps.apple.com/gb/app/lua-ide/id1549382090](https://apps.apple.com/gb/app/lua-ide/id1549382090)
- this app provides QuickLook support for Lua files
- at some point you'll need to check the contents of a Lua file in Files app
- it also features the full Lua docs (though I use a self-built version of Dash doc viewer)

**LuaLu** (since Apr 2013)
- Free [apps.apple.com/gb/app/lualu-repl-learn-lua-coding/id638219114](https://apps.apple.com/gb/app/lualu-repl-learn-lua-coding/id638219114)
- sometimes you just need a Lua [REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop) prompt to figure out a formula or do a quick experiment
- features solid debugging support

----

## LÖVE JAM 2025

The next LÖVE JAM starts on 14th March 2025 and runs for ~1 week!
- [itch.io/jam/love2d-jam-2025](https://itch.io/jam/love2d-jam-2025)
- #lovejam2025

----

## Other Lua IDE

If you're into Lua but not into Love2D then you might try [Codea for iPad](https://codea.io).