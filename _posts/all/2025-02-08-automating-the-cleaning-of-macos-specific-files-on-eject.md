---
layout: post
title: "Automating the cleaning of macOS-specific files on Eject"
date: '2025-02-08T20:45+00:00'
modified: '2026-05-10T21:15+01:00'
tags:
- hack
- macos
- automation
- script
- software
nouns:
image: /images/posts/xbar-volumes.png
featured: false
pinned: false

comments: https://twitter.com/gingerbeardman/status/1888328802889257317

---

> I've released a native macOS app that does all this script can do *and much more!*<br>Read all about it: [gingerbeardman.com/apps/driveaway/](https://www.gingerbeardman.com/apps/driveaway/)

Dot underscore `._` and `.DS_Store` files are macOS-specific metadata cruft generated for foreign filesystems (like FAT32 or exFAT) that are not usually needed for disks that are mainly used on other platforms. Digital cameras, music players, e-book readers, and handheld gaming devices can get confused when they encounter these odd files during file system parsing and directory listing. The problem is compounded if the devices naïvely process files by looking only at the file extension as they will then see the dot underscore version of a file as a duplicate and try to preview/play/open it.

For years I've used an app called [CleanMyDrive](https://web.archive.org/web/20250208072547/https://macpaw.com/cleanmymac) to remove such files, but [it was discontinued in October 2023](https://macpaw.com/news/cleanmydrive-no-longer-developed). I continued to use it until it recently stopped working completely ...so I needed to find an alternative solution. There are some apps on the Mac App Store that look like they'll do the trick, but I don't really want to spend the time buying and trialling multiple apps to find one that fits my usage habits. I can make one! 

I already use an app called [xbar](https://xbarapp.com) for keeping track of my GitHub issues, itch.io sales, network/server status, and more. So I decided to flex my shell script muscles and put together an xbar script to do it. 

The script adds a menu bar item that allows you to:
- Eject (click)
- Unmount (option-click)
- Eject All (without cleaning, useful when you want to disconnect all drives from your computer)
- All with a handy notification

That's it! Straight to the point, no frills, functional software.

![IMG](/images/posts/xbar-volumes.png " ")
{:.tofigure}

----

{% gist 610f22180117ad20465d7c529cc5faa0 %}
