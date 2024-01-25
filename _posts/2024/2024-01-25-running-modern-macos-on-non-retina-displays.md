---
layout: post
title: 'Running modern macOS on non-retina displays'
date: '2024-01-25T16:25+00:00'
tags:
- macos
- hack
- software
- hack
- displays
nouns:
- macOS
comments: https://twitter.com/gingerbeardman/status/1750556915371798610

---

It's 2024 and for some years now Apple have stopped supporting non-retina displays. From their perspective it makes sense given that all of their devices run retina displays, but from the user's perspective it's annoying given that so many of us are still using non-retina displays as either an external main display or as a secondary display. Not all of us are capable or comfortable buying multi-thousand dollar 5K displays.

> My personal situation is that I run a portrait display so that I can display a long page of code. Hey, if portrait was good enough for the [Xerox Alto](https://en.wikipedia.org/wiki/Xerox_Alto) and is good enough for the [iPhone](https://en.wikipedia.org/wiki/IPhone) then it's good enough for me. I have shortcut keys to arrange windows into halves, thirds or quarters and I'm super productive with it. I've been using this setup for a handful of years now, with my current setup consisting of a 1920×1200 display rotated 90-degrees giving me a desktop of 1200×1920.
> 
> You might be thinking, "why not use a rotated 1080p display?" and the answer to that question is that a lot of software won't display correctly or even fit on a desktop of width 1080px, but is fine at 1200px. You might also be thinking "why not buy a 4K display?" and that's because none of them are wide enough in portrait. Finally, if you're asking "why not buy a 5K display?" then, yes, that's a very good point. But until I do that, there's a problem waiting to be solved.

----

## Problem

There are a number of issues running modern macOS on non-retina displays that Apple seems to not want to fix, and in fact they are introducing new problems with every new version of macOS. Apple's stance is that they don't make resolution-specific adjustments, but I find that to not be quite true. Of course, abandoning non-retina elements or not paying attention to how they display on non-retina displays has the affect of being a resolution-specific adjustment. Plus, one of the most recent issues proves that there was a specific change made for non-retina displays.

**Text cursor**

Since macOS 14, Sonoma, there's a new redesign text cursor. It changes colour and flashes in a different way than the normal cursor, but more importantly it is 50% wider (1.5x) on non-retina displays! On retina displays the cursor is equivalent to 2px wide and on non-retina displays it is equivalent to 3px side. You might think that a single pixel might not make much of a difference, but when there's only 2px between characters it means the neighbouring text is obscured. So it's difficult, perhaps even impossible, to tell whether a c character to the left of the cursor is a c, d, o, q, etc. In some situations, depending on your choice of font or text size the new wider cursor will completely obscure the letters i, I, l, 1 that are next to the cursor.

**Abandoned icons**

Across macOS from Finder to Safari [icons are stretched and badly positioned](https://twitter.com/gingerbeardman/status/1539963156570820608) on non-retina displays, which may or may not be limited to icons made from SF Symbols. As recent as Monterey, System Preferences app would [transition using retina icons and then after the transition they would be replaced with non-retina icons](https://twitter.com/gingerbeardman/status/1539963168654589954).

----

## Workaround

The most useful workaround to these problems is to trick macOS into thinking that your non-retina display is retina. This is done by changing the scale value of your display. 

An alternative way of doing this is to use [BetterDisplay](https://github.com/waydabber/BetterDisplay) where you can simply click the High Resolution (HiDPI) toggle for your non-retina display.

> If you want to do it by hand you can open up the `com.apple.windowserver.displays...plist` at `~/Library/Preferences/ByHost/`, in something like PlistEdit Pro, and search for "Scale" to change each instance of a value 1 into 2. Thanks to [Vladimir Kochkovski](https://www.getvladimir.com) for sharing this solution!

**Pros**
- improves cursor width issue (it's less wide and neighbouring text is not obscured quite as much)
- fixes many other user interface elements that are bad on non-retina displays

**Cons**
- screenshots are @2x, which might be unexpected or undesirable (personally, I don't mind this)
- websites that do not provide retina-ready images may appear slightly blurry
- (in other words: the same things as a real retina display)