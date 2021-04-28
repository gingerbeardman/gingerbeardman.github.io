---
layout: post
tags:
- system7
- hacking
- macintosh
nouns:
- Resorcerer
- Super
- ResEdit
- KeyQuencer
- Launcher
- System
title: Changing the text size of a list using Resorcerer
comments: ''
featured: false
carousel: ''

---
I sometimes use an app called KeyQuencer Launcher that is part of the KeyQuencer software. The app presents a simple window containing a list of macros allowing quick and easy browsing and launching.

The text in the window is very small, which makes sense as you want to see multiple macros in as little space as possible. However, my use case in System 7 on iPad is a little different as I'd like to see fewer, larger items that are easy to select by touch.

Knowing a little about how Macintosh apps are put together I thought it might be easy to change the text size by modifying the app code directly. This can be done using a tool called Resorcerer (Super ResEdit, or ResEdit with the CODE viewer installed would also work).

By searching for `0xA88A` (`_TextSize`) toolbox call, I was lucky enough to find the one place in the app where the text size is set. I changed that up a bit, and the text size increased. That was enough for me, though it would be possible to change font or text size more precisely if required.