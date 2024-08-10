---
layout: post
title: "Stapler: I remade a 32 year old classic Macintosh app"
date: '2024-08-10T22:00+01:00'
tags:
- macintosh
- software
- macos
- software
nouns:
- Stapler Document
- Stapler.app
- Stapler
- LaunchList
- Xcode
- Swift
- SwiftUI
image: /images/posts/stapler.png
featured: true
pinned: false

comments: https://twitter.com/gingerbeardman/status/1821978186433097812

---

A couple of days ago I was [reading on Hacker News about a feature in some Linux window managers where they allow collections of tabs from different apps](https://news.ycombinator.com/item?id=41192547).

This reminded me of BeOS, but at the same time I [reminded me of an app from 1992 for classic Macintosh called Stapler](https://twitter.com/gingerbeardman/status/1590051288951443456), and how I'd talked about that [and it's one-time spiritual successor LaunchList](https://twitter.com/gingerbeardman/status/1596573654674034691) on Twitter in the past.

Both of these apps were very much launchers, saving time by letting you launch all the apps, files, folders, documents, required for a specific task, or as Ali Rantakari so succinctly put it in 2009: "Opening a Bunch of Stuff at Once on Your Mac".

So I built my own take on this concept for modern macOS!

Whilst my app is inspired by both Stapler (right down to the name) and LaunchList, my app adds improvements and features of its own and is probably more of a a hybrid of both. For example, Stapler didn't have drag and drop and LaunchList didn't have zero-click auto-launch. My goal was to keep it as simple as possible, but no simpler. To that end, there are no preferences or settings in the app.

Full details, download and usage are at the GitHub repo: [github.com/gingerbeardman/stapler](https://github.com/gingerbeardman/stapler)

----

![PNG](/images/posts/stapler.png "Stapler, for modern macOS (14.0 or newer)")
{:.tofigure}

----

## Tell me more

The idea is you set up a Stapler Document per project containing related apps, files, folders, etc. Then you can open them all at once by launching the single Stapler Document. Each Stapler Document contains lists of aliases which can be managed, inspected and launched through Stapler.app. The key time-saver is that if you launch a Stapler Document directly, all the items in its list will automatically be launched. Cool!

- Work: open Nova editor, run current game, pixel art editor, bitmap font app, Taskpaper todo list
- Play: Music app, Hacker News app, Twitter app
- Movie: run Caffeine to keep your computer on, shortcut to Sleep Displays

It's an odd way of thinking about working on a computer—task-based rather than app-based or document-based. Indeed, some might say it's an outdated way of thinking about it. But I'm always banging the drum that there is so much good stuff that was prematurely left behind with the memories of System 7 (I still use it)

## Details

It's written in Swift and SwiftUI and weighs in at 640KB, about one third of which are all the required resolutions of icon files. By creating a Document-Based App you get a ton of functionality for free, such as: document/tab/window management, undo (though I still needed to watch for it and refresh the app window) and more.

Dealing with files was both cool and annoying, cool that you can get aliases and bookmarks to files so easily, but annoying that you have to jump through so many hoops to work around the security protections by doing file requests in a long-winded way, and having to tweak plist entries to give the app just the right types of permissions. And I'm using some features of SwiftUI that mean the app can't run on anything before macOS 14 Sonoma. All-in-all I'd say modern macOS development is a bit of a mixed bag. Take it or leave it.

## Icon

Given that this was a quick weekend project, I kind of lost steam when it came to the icon. I'd love a better app icon, as well as a specific document icon, so any [icon designers can step this way](https://github.com/gingerbeardman/stapler/issues/1).

> ## Thanks
> 
> My good friend Dave Roberts (Serendipity App Company) for brainstorming why it was so damned difficult to get the app to react differently when a document was opened from Finder. Rip it up and start again! And eternal thanks to Chris Patterson and Ali Rantakari for their apps from years gone by.