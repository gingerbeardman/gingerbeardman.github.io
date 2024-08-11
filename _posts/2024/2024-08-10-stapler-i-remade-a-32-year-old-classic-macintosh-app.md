---
layout: post
title: "Stapler: I remade a 32 year old classic Macintosh app"
last_modified_at: '2024-08-11T22:13+01:00'
date: '2024-08-10T22:00+01:00'
tags:
- software
- macos
- finder
- tasks
- workflow
- swift
- swiftui
nouns:
- Stapler Document
- Stapler.app
- Stapler
- LaunchList
- Xcode
- SwiftUI
- Swift
- BeOS
- Linux
- Macintosh
- OS/2
- Amiga
- Workbench
- Atari ST
- GEM
image: /images/posts/stapler.png
featured: true
pinned: false

comments: https://twitter.com/gingerbeardman/status/1821978186433097812

---

A couple of days ago I was [reading on Hacker News about a feature in some *Linux* window managers where they allow collections of tabs from different apps](https://news.ycombinator.com/item?id=41192547).

This reminded me of *BeOS*, but at the same time it reminded me of an app from 1992 for classic Macintosh called [*Stapler*](https://macintoshgarden.org/apps/stapler-11), and how [I'd talked about that](https://twitter.com/gingerbeardman/status/1590051288951443456) and [it's one-time spiritual successor](https://twitter.com/gingerbeardman/status/1596573654674034691), [*LaunchList*](http://hasseg.org/launchList/), in the past. These were both similar apps that allowed you to collect and launch all the apps, files, folders, documents, related to a specific task, thus saving time. Or as Ali Rantakari so succinctly put it in 2009: "[Opening a Bunch of Stuff at Once on Your Mac](http://hasseg.org/blog/post/249/launching-lots-of-stuff-at-once-on-your-mac/)".

So over the past day or so I built my own take on this concept for modern macOS!

Whilst my app is inspired by both Stapler (right down to the name) and LaunchList, my app adds improvements and features of its own and is more of a hybrid of both. For example, Stapler didn't have drag and drop and LaunchList didn't have zero-click auto-launch. My goal was to keep it as simple as possible, but no simpler. To that end, there are no preferences or settings in the app.

Full details, download, and usage are at the GitHub repo: [github.com/gingerbeardman/stapler](https://github.com/gingerbeardman/stapler)

----

![PNG](https://cdn.gingerbeardman.com/images/posts/stapler.png "Stapler, for modern macOS (14.0 or newer)")
{:.tofigure}

----

## Tell me more

The idea is you set up a Stapler Document per project containing related apps, files, folders, etc. Then you can open them all at once by launching the single document. Each document contains a list of aliases that can be managed, inspected, launched using the app. The key time-saver is that if you launch a Stapler Document directly, all the items in its list will automatically be launched. Cool!

- Work: text editor, run current game, pixel art editor, bitmap font app, todo list
- Play: Music app, Hacker News app, Twitter app, script to position windows
- Movie: run Caffeine to keep your computer on, shortcut to put displays to sleep

It's an odd way of thinking about working on a computer—it's task-based rather than app-based or document-based. Indeed, some might say it's an outdated way of approaching things. But I'm always [banging the drum](https://www.youtube.com/playlist?list=PLfF-zlMNYMd_ZioGb0BKdqwWnx0wCDSgU) about there being so much good stuff that was prematurely left behind along with the memories of System 7 ([though I still use that](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh/)), BeOS, OS/2, Amiga Workbench, GEM and the many alternative desktops of Atari ST, etc. So I thought I'd see if I could walk the walk as well as talk the talk.

## Details

It's written in Swift and SwiftUI and weighs in at 640KB, about one third of which is a multitude of icon files at many different sizes and resolutions. By creating a Document-Based App you get a ton of functionality for free, such as document/tab/window management, undo/redo (though I still needed to watch for it and refresh the app window), and much more.

The editor is a native macOS window that's kind of like list view in a file manager, or a spreadsheet, or a little folder...depending on your point of view. Plus some menu commands and keyboard equivalents.

The items in each list are macOS [bookmarks](https://eclecticlight.co/2020/05/21/bookmarks-a-type-of-alias-their-access-and-use/) (sometimes: security scoped bookmarks) which are a type of authorised/verified/secure alias (in fact, they're still called aliases in the code) that have been around for about 10–15 years. They contain the path plus a bunch more info. As macOS becomes more locked-down the recommended way of accessing files is to retrieve these bookmarks through the normal layers of system permissions and security. Without the bookmarks, for example just using plain text paths, I would not be able to show the full images in Quick Look or easily launch the list items. A key benefit is that the bookmark will still resolve if the file is moved somewhere else on the same disk, or even to a different volume!

I store the items as JSON in the saved file, simply because I prefer it to XML (which is the main/default option). I wanted the files to still be human readable and editable to a degree.

The files are launched using the default app specified by that file, so it can be changed on a per-file basis. Individual images might open in an image editor, image viewer, app to run OCR, script to run OCR on it, etc.

Dealing with files was both cool and annoying, cool that you can get the bookmarks to files so easily, but annoying that you have to jump through so many hoops to work around the security and sandbox protections and end up having to do file requests in a long-winded way, and then there's having to tweak plist entries to give the app just the right permissions. I'm using some features of SwiftUI that mean the app can't run on anything before macOS 14 Sonoma. All-in-all I'd say modern macOS development is a bit of a mixed bag. Take it or leave it.

## Icon

Given that this was a quick weekend project, I kind of lost steam when it came to the icon. I'd love a better app icon, as well as a specific document icon, so any [icon designers can step this way](https://github.com/gingerbeardman/stapler/issues/1).

## Bonus tip

Make sure to *uncheck*: `System Settings` > `Desktop & Dock` > `Windows` > `Close windows when quitting an application`

Then leave the windows of an app open as you quit it. When you next launch the app its windows will restore to their previous size and position. If you close the windows first, then the app will restore to having no windows open.

----

> ## Thanks
> 
> My good friend Dave Roberts (Serendipity App Company) for brainstorming why it was so damned difficult to get the app to react differently when a document was opened from Finder. Rip it up and start again! To Dustin Mierau for kickstarting this trend of remaking forgotten old apps for modern macOS. And eternal thanks to [Chris Patterson](https://twitter.com/chrispatterson/status/1822396663425532259) and Ali Rantakari for their apps.

----

## Elsewhere

- [Hacker News](https://news.ycombinator.com/item?id=41212193)
