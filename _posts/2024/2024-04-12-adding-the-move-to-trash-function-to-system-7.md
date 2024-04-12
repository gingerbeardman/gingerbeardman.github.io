---
layout: post
title: "Adding the “Move to Trash” function to System 7.1"
date: '2024-04-12T23:08+01:00'
tags:
- hack
- system7
- macintosh
nouns:
- Resorcerer
- ResEdit
- QuicKeys
- KeyQuencer
- Alessandro Levi Montalcini
- Move to Trash
- FinderHack
- Forward Delete
featured: false
pinned: false
carousel: 'move-to-trash'
comments: https://twitter.com/gingerbeardman/status/1778909753231671576
---

First, a little bit of Macintosh History. You probably know that on modern macOS you can select a file in Finder, on your Desktop, or in an app, and send it to the Trash by choosing the Move to Trash menu item, or by pressing Cmd+Backspace/Delete. This keyboard shortcut was added in System 7.5.3 where it was largely unadvertised and somewhat of a secret feature, but quickly became indispensable for those who knew of it. Of course, these days it is proudly displayed in macOS Finder menu.

Fast forward to today, when [James Wages](https://twitter.com/james_wages) asked about a good way to do this on System 7.1, and posed a partial solution along with a challenge. But we'll get to that in a moment. Since I regularly use [System 7 on my iPad Pro](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh/) I'd also missed this function and had come up with a couple of different workarounds to map Move to Trash to Cmd+Backspace/Delete.

## KeyQuencer

The first workaround was to script a [KeyQuencer](https://macintoshgarden.org/apps/keyquencer) macro to simulate the mouse drag of the selected item to the trash can. This relied on you positioning the mouse pointer over the selected file and also make sure the Trash icon was always in the required position on screen. It worked, but it was less than ideal because it was far too fragile.

> *KeyQuencer* is one of my favourite and most used classic Macintosh apps, written by prolific Italian developer [Alessandro Levi Montalcini](http://www.montalcini.com) who is developing useful things today! Anyway, it could be used for a wide variety of macro and automation purposes. It was very versatile as it contained its own scripting language and a dictionary of functions that touched most aspects of System 7. I use it to map all sorts of esoteric functions to hotkeys, like chaging screen resolutions and colour depth, or performing complicated multi-step tasks on a single key stroke. An equivalent for modern macOS is [Keyboard Maestro](https://www.keyboardmaestro.com/main/), which is no doubt more capable but also more difficult to use.

## FinderHack

So, James mentioned [FinderHack](https://macintoshgarden.org/apps/finderhack) which is a system Extension that gave earlier versions of System 7 a similar set of Finder features to those introduced in 7.5.3. But, crucially, it mapped the Move to Trash hotkey to Cmd+T, which is different enough to become annoying as you can no longer rely on muscle memory. The challenge: how can we map this to the modern Cmd+Backspace/Delete shortcut? So, I turned to KeyQuencer once again and created a short macro which would type the Cmd+T key combination and I assigned it to Cmd+Backspace/Delete. It worked!

![PNG](https://cdn.gingerbeardman.com/images/posts/move-to-trash-1.png "This macro, bound to Cmd+Backspace/Delete, types Cmd+T to effectively map one hotkey to another")
{:.tofigure}

----

So we already have a good solution but resources often scarce on classic Macintosh, so I wondered if I might be able to cut out the middleman and change the keyboard shortcut by modifying FinderHack directly. James had noticed that ResEdit would not allow you to type the Backspace character. I confirmed the same was true in Resorcerer. So, what to do?

## HexEdit

Opening FinderHack directly in [HexEdit](https://macintoshgarden.org/apps/hexedit) we can scroll down a little to find the menu definitions, find "Move to Trash" and can change the following hex value from 54 ("T") to 08 ("Backspace/Delete"), reminding ourselves that the Backspace/Delete key is different than Forward Delete key on some Apple keyboards that have both. 

{% include carousel.html height="100" unit="%" duration="7" %}

----

The final modified file is up over at Macintosh Garden: [https://macintoshgarden.org/apps/finderhack](https://macintoshgarden.org/apps/finderhack)

![PNG](https://cdn.gingerbeardman.com/images/posts/move-to-trash-4.png "Notice that System 7 has no glyph for the Backspace key")
{:.tofigure}

## ps:

If anybody knows how to disable the "preparing to delete..." confirmation alert box that FinderHack shows after you press the hotkey I'd love to know how. No doubt it would be a more involved hack as the app will move a file to the Trash only if "OK" is pressed, and not when "Cancel" is pressed. Please let me know if you know!
