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
- faststart
- mp4
- mkv
- avi
comments: https://twitter.com/gingerbeardman/status/1481270187873738756

---

I recently set up an old HP ProLiant Microserver N54L as a NAS running Xpenology (Synology DSM 6) and it's a great little device capable of a lot. It's also fun to write scripts and configure things to add automation and extra capabilities!

Here's a script I wrote that will look for mkv and avi files and quickly copy-remux them as mp4. I do this because my playback setup across Apple devices seems to have an easier time with that type of container.

As it's only the container that is being changed: the video content remain the same so there is no change in quality, the remux process takes only seconds, and the file size remains effectively the same. I also set the faststart flag on the mp4 to help it start playing more quickly.

## Outline

1. Find mkv and avi files
2. Remux the files with `ffmpeg` to mp4
3. If successful move the old file to Recycle Bin (so it can be recovered if needed)
4. Log results to a file and fire off some notifications

## Usage

I have set this script to run daily using *Task Scheduler > Scheduled Task > User-defined script* using the full path to the script, which should be located in a Scripts sub-directory inside your video directory.

After the first successful run I decided to comment out all notifications except the failure one, as that's all I really need to act on. But feel free to set it up as you wish. You could even change it to remux from mp4 to mkv.

## Source

<script src="https://gist.github.com/gingerbeardman/508fccef1827e717d6100b2ac6dcfc37.js"></script>

## Bonus

I've only recently begun to set the faststart movflag on my mp4 files, so my older videos did not have it set. So here's an additional script, [faststart.sh](https://gist.github.com/gingerbeardman/59413f3b9d06e0d7a8ccbf3119e7dbdf), that will go set the faststart movflag on all mp4 files.

Be warned that if you have a lot of videos it will take a long time for this script to complete, you can estimate about 30 seconds per video for a total of (all your videos divided by two) minutes.