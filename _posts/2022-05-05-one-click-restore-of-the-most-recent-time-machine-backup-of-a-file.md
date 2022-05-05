---
layout: post
title: One-click restore of the most recent Time Machine backup of a file
tags:
- macos
- timemachine
nouns:
- Time Machine
- macOS
comments: https://twitter.com/gingerbeardman/status/1522181553073360896

---

Often I want to restore the latest version of a file from Time Machine, but using the Time Machine interface to do so is awkward and slow. So I came up with my own solution that can be triggered from the Finder context menu of any file.

<img src="/images/posts/restore-time-machine-context-menu.png" width="245px" height="521px">

1. right-click on a file
2. select "Restore from Time Machine"
3. file is trashed (recoverable using Trash's Put Back feature)
4. most recent backup of that file is restored from Time Machine

This takes a seconds or two, depending on the size of the file in question. Most importantly this saves interrupting my workflow by having to opening the Time Machine interface and zooming through all those windows looking for the file.

## Requirements

- [ContextMenu](https://apps.apple.com/gb/app/context-menu/id1236813619?mt=12) (paid)
   - or [FiScript](https://github.com/Mortennn/FiScript) (free)
   - or [Service Station](https://apps.apple.com/gb/app/service-station/id1503136033?mt=12) (limited trial, paid)
   
These apps let you add items to Finder's right-click context menu, from where you can run your own scripts that do something with the full path of the file/s selected.

- [trash](https://github.com/morgant/tools-osx/blob/master/src/trash), a shell script to delete files with support for Put Back

- tmutil, built-in macOS utility for interacting with Time Machine

## ContextMenu.app

Create a "New Action with Shell Script..." as follows:

<img src="/images/posts/restore-time-machine-context-menu-setup.png" width="578px" height="485px">

## Scripts

There are a couple of scripts because backups are stored differently on USB and Network. Of course, you'll also need to change the path names to suit your setup.

<script src="https://gist.github.com/gingerbeardman/ea0a213eb5e361ba9e7e8d004300c91b.js"></script>

## Other uses

You could also install the script to enable it to be used from the command line.