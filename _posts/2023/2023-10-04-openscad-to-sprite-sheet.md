---
layout: post
title: 'OpenSCAD to Sprite Sheet'
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

I just released the "OpenSCAD to Spritesheet" workflow I created for [Daily Driver](): [https://github.com/gingerbeardman/openscad-spritesheet](https://github.com/gingerbeardman/openscad-spritesheet)

It's a Frankenstein mish-mash of a Makefile and several shell scripts that evolved over many months/years. Initial rendering is done using OpenSCAD, and post-processing is done using ImageMagick. Model poses and rendering variations are controlled by variables in either the shell script or passed through to the model. The whole process is optimised to do as much in parallel as I could figure. More info at the link above! 🚗💨

