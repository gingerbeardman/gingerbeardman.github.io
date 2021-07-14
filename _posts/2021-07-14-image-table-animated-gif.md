---
layout: post
title: 'Daily Driver: to GIF and back'
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

[https://gist.github.com/gingerbeardman/b85367a8e6b3d139d9c85f49e146af38](https://gist.github.com/gingerbeardman/b85367a8e6b3d139d9c85f49e146af38)

```sh
# input file details
fullname=$(basename -- "$1")
filename="${fullname%.*}"

# extract cell size from filename
regex_table=".*\-table\-([0-9]+)\-([0-9]+)\.png"
if [[ ${fullname} =~ ${regex_table} ]]
then
	W="${BASH_REMATCH[1]}"
	H="${BASH_REMATCH[2]}"
fi

# convert to Animated GIF
magick -dispose background -delay 1 -loop 0 "$1" +repage -crop "${W}x${H}" +repage "${filename}.gif"

# output specifications
magick identify -format "${filename}.gif: %n frames\n" "${filename}.gif" | head -1
```

### Convert Animated GIF to image table

[https://gist.github.com/gingerbeardman/2a79913a883b2a675ce6a8004ebd8d4c](https://gist.github.com/gingerbeardman/2a79913a883b2a675ce6a8004ebd8d4c)

```sh
# input file details
fullname=$(basename -- "$1")
filename="${fullname%.*}"

# extract cell size from filename
regex_anim=".*\-table\-([0-9]+)\-([0-9]+)\.gif"
if [[ ${fullname} =~ ${regex_anim} ]]
then
	W="${BASH_REMATCH[1]}"
	H="${BASH_REMATCH[2]}"
fi

# convert to image table PNG
magick montage "$1" -geometry "1x1+0+0<" -alpha On -background transparent "${filename}.png"

# output specifications
magick identify -format "${filename}.png: %w x %h pixels\n" "${filename}.png"
```