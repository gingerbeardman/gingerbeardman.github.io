---
layout: post
title: 'OpenSCAD to Sprite Sheet workflow'
last_modified_at: '2023-10-04T16:41+01:00'
date: '2023-10-04T16:19+01:00'
tags:
- playdate
- dailydriver
- graphics
- openscad
- imagemagick
- workflow
- rendering
nouns:
- OpenSCAD
- ImageMagick
comments: https://twitter.com/gingerbeardman/status/1709587637210665082

---

I just released the "OpenSCAD to Spritesheet" workflow I created for [Daily Driver](/tag/dailydriver/):

[https://github.com/gingerbeardman/openscad-spritesheet](https://github.com/gingerbeardman/openscad-spritesheet)

It's a Frankenstein mish-mash of a Makefile and several shell scripts that evolved over many months/years. Initial rendering is done using OpenSCAD, and post-processing is done using ImageMagick. Model poses and rendering variations are controlled by variables in either the shell script or passed through to the model. The whole process is optimised to do as much in parallel as I could figure. More info at the link above! 🚗💨

## Post Processing

After exporting all frames there is some `image magick` work to process the files as follows:
1. stitch frames together into a single sprite sheet
2. split sprite sheet into RGBA channels
3. process channels to recolour and dither as required
4. recombine processed channels into new sprite sheet image

You can read about that in a [previous blog post](/2021/06/05/channelling-rgb-into-1bit/).

## Benchmarks

A full build of 36 cars is as follows:

- 3GHz 6-core Intel Mac mini 32GB
  - 100% CPU for ~26 minutes
- M1 Pro 10-core MacBook Pro 16GB
  - 70% CPU for ~9 mins
  - about 3x speedup
  - approx 16 seconds per car

That's parallel 3D rendering, PNG writing & compositing & processing, and copying of ~140K files (which takes up ~0.5GB of disk space).

## Example Model

Not to scale! Sizes of features are exagerated to allow for them to appear correct when rendered at a very small size.

![PNG](https://cdn.gingerbeardman.com/images/posts/openscad-spritesheet-model-car.png)

## Example Output

990 frames each for car and shadow, total of 1980 frames per sprite sheet. Each sprite sheet takes up about ~400KB of RAM on Playdate, and only one is loaded at a time.

[![PNG](https://cdn.gingerbeardman.com/images/posts/openscad-spritesheet-car-table-38-38.png)](https://cdn.gingerbeardman.com/images/posts/openscad-spritesheet-car-table-38-38.png)