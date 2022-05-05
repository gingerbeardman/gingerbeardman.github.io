---
layout: post
title: One-click restore of the most recent Time Machine backup of a file
tags:
- macos
- timemachine
nouns:
- Time Machine
- macOS
comments: 

---

Often I want to restore the latest version of a file from Time Machine, but using the Time Machine interface to do so is awkward and slow. So I came up with my own solution that can be trigger from the context menu of any file.

## Requirements

- [Context Menu](https://apps.apple.com/gb/app/context-menu/id1236813619?mt=12) (paid)
   - possibly [FiScript](https://github.com/Mortennn/FiScript) (free)
   - or [Service Station](https://apps.apple.com/gb/app/service-station/id1503136033?mt=12) (limited trial, paid)
   
These apps let you add items to Finder's right-click context menu, from where you can run your own scripts that do something with the full path of the file/s selected.

- [trash](https://github.com/morgant/tools-osx/blob/master/src/trash), a shell script to delete files with support for Put Back

- tmutil, built-in macOS utility for interacting with Time Machine

## Context Menu

![PNG](/images/posts/restore-time-machine-context-menu.png)

## Scripts

There are a couple of scripts because backups are stored differently on USB and Network. Of course, you'll also need to change the path names to suit your setup.

<script src="https://gist.github.com/gingerbeardman/ea0a213eb5e361ba9e7e8d004300c91b.js"></script>
