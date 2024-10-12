---
layout: post
title: 'Daily Driver: To GIF and Back'
tags:
- dailydriver
- playdate
- graphics
nouns:
- Playdate
- SDK
- Daily Driver
- imagemagick
- matrix image tables
- matrix image table
- Animated GIF
- macOS
- Makefile
- image tables
- image table
comments: https://twitter.com/gingerbeardman/status/1415361340613484547

---
When rendering my vehicles I generate a single PNG containing all frames. Playdate SDK calls these image tables, or more specifically matrix image tables. You could also call them sprite-sheets, with the one qualification that every sprite has the same dimensions.

Given that these are plain old images they can be viewed easily. Showing a grid on top of the image makes the layout obvious. You can edit the image as a whole easily enough, but what if you want to adjust the size of every cell? Then we have a problem.

There are a few apps that can load image tables, asking for the cell size during loading. My favourite such app is [Piskel](https://www.piskelapp.com) which has good options for import, editing, and export.

However there is another type of image that consists of multiple frames of the same dimensions: the Animated GIF. There are far more apps that can deal with this format, such as Acorn or Adobe Photoshop.

## Problem

How can we convert a matrix image table to Animated GIF, and back again?

## Thinking

We could use Piskel, but its GUI isn't the most straightforward so using it twice at separate points in the conversion process gets old fast.

So I had the idea of writing a couple of small shell scripts that leverage imagemagick and can be run from my Makefile, the command-line, macOS context menu, or all of the above.

## Solution

Below are both scripts, be sure to grab the Gist versions as they have error checking and "help" usage display.

### Convert image table to Animated GIF

{% gist b85367a8e6b3d139d9c85f49e146af38 %}

### Convert Animated GIF to image table

{% gist 15a8e1e72745848190c0e7d583ca24e1 %}
