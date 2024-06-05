---
layout: post
tags:
- system7
- hack
- macintosh
- resorcerer
- keyquencer
nouns:
- Resorcerer
- Super
- ResEdit
- KeyQuencer Launcher
- System
image: /images/posts/changing-textsize-1.png
title: Changing the text size of a list using Resorcerer
comments: ''
featured: false
carousel: ''

---
I sometimes use an app called KeyQuencer Launcher that is part of the KeyQuencer software. The app presents a simple window containing a list of macros allowing quick and easy access.

![PNG](https://cdn.gingerbeardman.com/images/posts/changing-textsize-1.png#pixel "KeyQuencer Launcher window")
{:.tofigure}

The text in the window is very small, which makes sense as you want to see multiple macros in as little space as possible. However, my use case in System 7 on iPad is a little different as I'd like to see fewer, larger items that are easy to select by touch.

Knowing a little about how Macintosh apps are put together I thought it should be easy enough to change the text size in the window by modifying the app's binary code directly. This can be done using a tool called Resorcerer (you could also use Super ResEdit, or ResEdit with the CODE viewer resources installed).

By searching for `0xA88A` (the `_TextSize` toolbox call) I was lucky enough to find a single place in the app where the text size is set. I changed the value passed to the preceding `move.m` from `0E` (decimal 14) to `12` (decimal 18) and the text size was increased.

![PNG](https://cdn.gingerbeardman.com/images/posts/changing-textsize-2.png#pixel "Toolbox Trap 0xA88A")
{:.tofigure}

That was enough of a solution for me, though it is possible to change the font or to increase text size more dramatically if required.

![PNG](https://cdn.gingerbeardman.com/images/posts/changing-textsize-3.png#pixel "KeyQuencer Launcher window with increased text size")
{:.tofigure}

### Related posts

* [Turning an iPad Pro into the Ultimate Classic Macintosh](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh)
* [How to install BasiliskII on your iPad](/2021/04/21/building-basiliskii-for-ios/)
* [Exploring Custom Keyboards and Automation](/2021/04/19/automating-interactions-using-apple-events/)
* Optimising Macintosh app toolbars for touch
* [Macintosh drawing software compared](/2021/04/24/macintosh-drawing-software-compared/)
* [Mixing External Tools across Deneba software](/2021/04/25/mixing-external-tools-across-deneba-software/)
* [My System 7 software choices](/2021/04/30/my-system-7-software-choices/)
* [About the interoperability of System 7 and iOS](/2021/05/03/interoperability-of-system-7-and-ios/)
