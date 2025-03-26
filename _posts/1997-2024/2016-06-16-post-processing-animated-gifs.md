---
layout: post
title: Post-processing Animated GIFs
last_modified_at: '2023-09-24T14:37+01:00'
tags:
- pico8
- shell
- script
image: /images/posts/post-processing-animated-gifs-01.gif
comments: https://twitter.com/gingerbeardman/status/1705946395021017135

---

> This article was originally posted on [pico8 BBS in 2016](https://www.lexaloffle.com/bbs/?tid=3614), and on [Playdate devforum in 2020](https://devforum.play.date/t/post-processing-animated-gifs/1074).

I was interested to see how easy/difficult it is to edit the animated GIF recordings. My goal was to trim some frames from the beginning and end to make a more succinct video.

After much trial, error and experimentation here are my findings using Mac OS X.

The game shown in the GIFs is [Worm Nom Nom by ilkkke & kometbomb](https://www.lexaloffle.com/bbs/?tid=3547).

## Overview

Animated GIFs can be:
* viewed frame-by-frame using system Preview.app
* manipulated using "gifsicle", "imagemagick", "graphicsmagick" command line tools
* converted using "ffmpeg" command line tool

Notes
* useful tools need to be installed, you may wish to use the "brew" command line tool or similar.

## Viewing

- Open the GIF in Preview.app and it will show you all frames.
- Preview calls the first frame 1 (one), but other tools usually call it 0 (zero).

original/source animated GIF:
![GIF](/images/posts/post-processing-animated-gifs-01.gif)

## Un-Optimising

Warning: If you have previously optimised your GIF to reduce filesize, [as in this other thread](https://devforum.play.date/t/optimising-gifs-from-mb-to-kb/788), and you want to edit the GIF further then be sure to first use `gifsicle -U` to unoptimise it, otherwise the editing commands won't work as expected. 

## Trimming

required: `gifsicle`

then this is how you trim
```shell
gifsicle anim.gif "#212-238" > trimmed.gif
```

note: this makes a copy of the GIF and keep frames 213 to 239 (gifsicle uses zero based frame count)

![GIF](/images/posts/post-processing-animated-gifs-02.gif)

## Resizing

if you want to double size of the image:
```shell
gifsicle --scale 2 trimmed.gif > resized.gif
```

![GIF](/images/posts/post-processing-animated-gifs-03.gif)

## Captioning

if you want to add an overlay to caption the animation

required: `imagemagick` or `graphicsmagick`

then use this bash script:
```shell
#!/bin/bash
source=$1
caption=$2
: ${1?"Usage: $0 anim.gif overlay.gif [output.gif]"}
: ${2?"Usage: $0 anim.gif overlay.gif [output.gif]"}

fnsource=$(basename "$source" .gif)
fncaption=$(basename "$caption" .gif)

output=${3:-"$fnsource-$fncaption.gif"}

gifsicle -E $source
for f in *.gif.*; do composite $caption $f $f; done
gifsicle --loopcount *.gif.* > $output
rm *.gif.*
```

how to run the command

```shell
./caption.sh anim.gif overlay.gif [output.gif]
```

note: if you do not specify an output name, it will be named using original filenames, eg. anim-overlay.gif

[overlay.gif](/images/posts/post-processing-animated-gifs-04.gif)

![GIF](/images/posts/post-processing-animated-gifs-05.gif)

## Converting to Video for YouTube

required: `ffmpeg`

to convert the GIF to MP4:
```shell
ffmpeg -i trimmed.gif -movflags faststart -pix_fmt yuv420p video.mp4
```

video uploaded to YouTube:

{% youtube Ydeg4bNHn08 1/1 %}
