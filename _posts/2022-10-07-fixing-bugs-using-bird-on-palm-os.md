---
layout: post
tags:
- palmos
- hanafuda
nouns:
  - Palm OS
  - Macintosh
  - Sony CLIÉ
  - Tenohira Hanafuda Kai
  - Tenohira Hanafuda
  - ResEdit
  - RsrcEdit
  - Bird
  - Quartus
  - Philippe Guillot
title: Fixing bugs using Bird on Palm OS
comments: https://twitter.com/gingerbeardman/status/1578440221871329280

---

![JPG](/images/posts/hana-pixels.jpg "Tenohira Hanafuda for Palm OS, running on a Sony CLIÉ PEG-SJ22")
{:.tofigure}


[Tenohira Hanafuda Kai](https://fudawiki.org/en/hanafuda/video-games/palm/tenohira-hanafuda-kai) (掌花札 kai) is a koi-koi card game for Palm OS, created in 2001 by Hiroki Takahashi. It's a fun game with varying difficulty, stats tracking, and lovely high-resolution (for the time!) colour graphics.

But, it has one serious problem: sometimes it will forfeit the current round when you choose to continue!

![GIF](/images/posts/hana-buggy.gif#pixel "[YouTube](https://youtube.com/shorts/0fZefFpGd5Y")
{:.tofigure}

## Analysis

After repeated play I figured out that the game would continue as intended only if you pressed the right half of the こいこい (koi-koi) button.

But if you pressed the left half of the button it would not behave as expected and forfeit the round. More on that later. 

![PNG](/images/posts/hana-problem.png#pixel "The problem happens when we press the left side of the こいこい button")
{:.tofigure}

## The Plan

One of the beautiful things about Palm OS is that apps and their resources are viewable, and even editable, right there on the device itself! It's a lot like Classic Macintosh in that regard, which is no surprise as Palm took a lot of inspiration from the original Mac.

And much like ResEdit on Macintosh, Palm had it's own equivalent app in [RsrcEdit](https://palmdb.net/app/rsrcedit) by Quartus, though I preferred to use an app called [Bird](https://palmdb.net/app/bird) by Philippe Guillot. You can view strings, bitmaps, menu bars, and other user interface elements (organised as Forms).

## Let's do this

So I launched Bird and loaded up the contents of Tenohira Hanafuda Kai, and went through all the forms until I found the one that displays the continue prompt.

Interestingly the form is dual-purpose. It contains the continue/stop buttons (a List of two items) and also a single button (了解; confirm) used on a different prompt. It's overlaid on the continue button in a close enough position to be suspect. Perhaps it's moved slightly at run time?

We can easily change the order of the controls on the form by cutting and pasting, so we do that with the List and it now comes below the button in the order, will be drawn last on the screen and presumably the things drawn last are the first to capture interactions? Let's see.

![GIF](/images/posts/hana-bird.gif#pixel "https://youtube.com/shorts/yRLfHoHkjTY")
{:.tofigure}

## Result

We apply all changes and the data is saved. Launch the game again and play enough to trigger another continue/stop prompt. We tap the left half of the button and the game continues as expected. No forfeit! Our bug is solved.

![GIF](/images/posts/hana-fixed.gif#pixel "https://youtube.com/shorts/3faHHcuSQv4")
{:.tofigure}

Note: I figured this out back in 2019 and edited the app on my Sony CLIÉ device. Recently I've been using [CloudPilot](https://cloudpilot-emu.github.io) to run Palm OS apps and games on my iPhone. So to play Tenohira Hanafuda Kai I had to either find the old modified game file, or do it all over again from scratch and document it.