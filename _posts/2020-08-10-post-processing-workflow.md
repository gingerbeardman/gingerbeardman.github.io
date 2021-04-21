---
layout: post
title: 'Daily Driver: Post-processing workflow'
tags: [dailydriver, playdate, graphics, software]
nouns: [OpenSCAD]
---

![GIF](/images/posts/daily-driver-post-processing.gif#playdate)

My post-processing to 1-bit is fairly simple. I use a bespoke tool that allows me to have "live" (realtime) manual control over a bunch of image filters so I can see the results immediately.

But essentially it's:
1. convert to greyscale, using one of many algorithms
2. reduce colours to 1-bit, decide on dithering or threshold level on case-by-case basis

The grey shades that I applied to my model in OpenSCAD give an element of control during this conversion process. Greys can be pushed either way, towards black or white, depending on my need with the specific model I am working on.

In this instance I desaturated the greys which blows them out to nearer white. And then I chose to threshold to reduce to b/w.

I also have the wheels as a separate finished image so I don’t have to worry if their detail is lost during this phase, I can just paste over the accurate/finished wheels.

Final result, unedited:

![PNG](/images/posts/daily-driver-post-processing.png)

I would later touch up the sprite by hand to reinforce any details I think have been lost. I use Piskel for edited sprites because it has really nice sprite sheet support, drag and drop loading, and quick and versatile exporting.

Aside: 32 is a number that is a leftover from a different prototype and it’s stuck. I guess it should really be 36? or 24? or 18?. But it’s too late now! Actually it would be relatively easy to change but I have bigger fish to fry.

The animations alone could run at 99fps — it’s anything that causes more drawing which slow things down. Collisions, not because they are computationally heavy, but because they cause a lot of sprite updates - which means drawing moving things - to happen. I’m working hard to maintain 60fps on device (50fps in simulator for… reasons) and am excited I’ve managed to get here.