---
layout: post
title: "Mouse Support for Playdate"
date: '2024-05-11T11:52+01:00'
tags:
- playdate
- hammerspoon
- hack
- mouse
nouns:
- Playdate
- SDK
- Simulator
- Mirror
- Mac
- macOS
- Windows
- Linux
- Daily Driver
- Apple Pencil
- iPad
- Sidecar
featured: false
pinned: false
comments: https://twitter.com/gingerbeardman/status/1789247900540616834

---

Since some of my first prototypes with Playdate I've wanted there to be a way to interact with the device using a mouse. Well, today is that day!

<iframe width="720" height="480" src="https://www.youtube.com/embed/PF4emlHhYCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

No doubt you have some questions? How are you doing this? What's the weather like? etc.

----

## How?

A custom [Hammerspoon](https://www.hammerspoon.org) script monitors mouse coordinates and sends them to the Playdate over serial connection. The game receives those messages through the recently added API `playdate.serialMessageReceived(message)`, parses them, and acts accordingly.

Currently the script sends messages such as:

```
msg mouse on
msg 0,0
msg -19,84
msg mouse off
```

I use those to trigger on screen notifications, reset the game state, and move the cursor.

Note: use of serial means you can’t have the Playdate Simulator or Mirror open when trying this. If you invoke the script and it can’t open the serial connection for any reason it will sound an error beep.

----

## Why?

Originally, back in 2020, I wanted to be able to position items in the in-game level editor of [my game Daily Driver](/tag/dailydriver/) more directly, using a mouse rather than typing co-ordinates into a file. Then I forgot about it for a while. Then in [*Playdate SDK 2.4.0*](https://sdk.play.date/changelog/#_2_4_0) (March 1, 2024) a new API was added that made me wonder if it was now possible.

I knew the [Uncrank'd Game Jam](https://itch.io/jam/uncrankdjam) was in progress and was thinking about what to do, and then the mouse control idea came back to me. I first put together the bare bones of an app that drew a dot to the screen, mirrored both horizontally and vertically. Then I set about proving I could forward mouse events, which resulted in a [small Hammerspoon script](https://github.com/gingerbeardman/playdate-mouse-support/blob/main/mouse/mouse_to_playdate.lua).

After that, I built out the drawing app and that's how [Rorschach](https://gingerbeardman.itch.io/rorschach) came to be. It was originally built to showcase the mouse control, but has since evolved into a lovely little toy of its own. I thought a drawing app would be an easy-to-understand visual showcase for this innovation. But, really, the possibilities for its use are endless.

Developers can use it to speed up and simplify development, add finer control to their in-game level editors, and generally make their lives easier. There’s nothing stopping you giving users access to it in a game.

----

## Installation

1. Make sure you're running [Rorschach](https://gingerbeardman.itch.io/rorschach) or [Mouse Demo](https://github.com/gingerbeardman/playdate-mouse-support/releases/tag/240511) on your device
1. Attach your Playdate over USB and unlock the device
1. Install [Hammerspoon](https://www.hammerspoon.org/) automation tool for macOS
1. Install [`mouse_to_playdate.lua`](https://github.com/gingerbeardman/playdate-mouse-support/blob/main/mouse/mouse_to_playdate.lua) (instructions in the file)
1. Press the hotkey (defaults to `F13`)
1. The guide window (virtual trackpad?) appears so you can gauge Playdate screen size
1. Move your mouse pointer and watch the drawing appear!

I’ve tested this on a MBP running Sonoma with a mouse and a trackpad. There’s very little lag, it’s really quite usable. The video has substantial lag as I was capturing through QuickTime and my phone camera. Anyway, it’s super cool!

----

## Demos

- Rorschach drawing app is at: [https://gingerbeardman.itch.io/rorschach](https://gingerbeardman.itch.io/rorschach)
- An example project with source code is at: [github.com/gingerbeardman/playdate-mouse-support](https://github.com/gingerbeardman/playdate-mouse-support)

----

## Notes

- This is a technical proof of concept, so it can be improved
- It was created to show that this can be done. It is not a final version or the most robust way of doing this. And, yes, sorry, it’s only available for macOS
- My dream scenario would be for Playdate Simulator and Mirror to have this feature built-in, so you can enable the feature and then interact with the virtual screen to forward mouse events to Playdate
- If that can’t happen, then maybe a more native mouse forwarding client can be created for each of macOS, Windows, and Linux
- On macOS it would be cool if it supported Apple Pencil via an iPad/Sidecar
