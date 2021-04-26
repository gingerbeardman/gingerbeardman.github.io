---
layout: post
title: 'Daily Driver: Automation'
tags: dailydriver playdate graphics software workflow
nouns: [macOS, Folder Actions, Daily Driver, Playdate, OpenSCAD]
---

In preparation for regenerating my many cars with x3 the number of sprites, I thought I’d try to sort the rendered frames automatically into named folders because this is fiddly manual work I really don’t enjoy, and a bit of a bottleneck in my asset generation. For each pose I have to render the frames then group the new image files into a folder that describes that pose, as these multiple folders are later be used for batch processing.

I could use macOS Folder Actions for this, but I’ve been using an app called [Hazel](https://www.noodlesoft.com/) for many years to do this sort of thing, so that was my first choice.

The hard work is done with a shell script, as I’m quite comfortable writing those.

## Flow

1. get most recently saved .scad file
2. parse filename to capture car name
3. parse file contents for left/right/forward/backward tilt values
4. concatenate all this information as our new folder name
5. create new folder
6. move matching file into new folder

This means that the folder name will change based on the render settings in the file — perfect!

I still have to make 9 small sets of manual text changes to render each car pose, so that’s the next thing I’ll try to automate by running OpenSCAD from the command line.

![PNG](/images/posts/daily-driver-automation.png)
