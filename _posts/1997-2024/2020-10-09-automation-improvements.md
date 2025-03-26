---
layout: post
title: 'Daily Driver: Automation Improvements'
tags: [dailydriver, playdate, graphics, software, workflow, openscad]
nouns: [macOS, Folder Actions, Daily Driver, Playdate, OpenSCAD, Hazel]
---

The recent automation was really just help with organisation. As soon as I started looking at running OpenSCAD from the shell/command-line it became obvious that I could do the rendering and organisation in one step without having to use external apps like Hazel.

So, that's now done. I render all the frames, with more sensible filenames, to a single folder.

If I run all the renders one after the other, maxing out a single CPU core (99% CPU usage), time taken:

**~17 seconds 🐢**

But, using the `&` directive and `wait` command, I can run the renders in parallel (well, technically it's one process each; and batches of 32 works best) using all 6 CPU cores (~485% CPU usage), time taken:

**~10 seconds 🐇**

...the beauty of the command line!

> Note to self: don't publish a post about an automation breakthrough until the dust has settled.