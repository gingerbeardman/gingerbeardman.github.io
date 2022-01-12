---
layout: post
title: 'Script to quickly and automatically remux videos on Synology NAS'
tags:
- synology
- automation
nouns:
- Synology DSM 6
- Synology
- Xpenology
- HP ProLiant Microserver N54L
comments:

---

I recently set up an old HP ProLiant Microserver N54L as a NAS running Xpenology (Synology DSM 6) and it's a great little device capable of a lot. It's also fun to script to add in extra automation and capabilities!

Here's a script I wrote that will look for \*.mkv files and quickly copy-remux them as \*.mp4. I do this because my playback setup across Apple devices seems to have an easier time with that type of container.

## Outline

1. Find *.mkv files
2. Remux the files with `ffmpeg`
3. If successful move the old file to Recycle Bin (so it can be recovered if needed)
4. Log results to a file and fire off some notifications

## Usage

I have set this script to run daily using *Task Scheduler > Scheduled Task > User-defined script*.

After the first successful run I decided to comment out all notifications except the failure one, as that's all I really need to act on. But feel free to set it up as you wish.

## Source Code

<script src="https://gist.github.com/gingerbeardman/508fccef1827e717d6100b2ac6dcfc37.js"></script>