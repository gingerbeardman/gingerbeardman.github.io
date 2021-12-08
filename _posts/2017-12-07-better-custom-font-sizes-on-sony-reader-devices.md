---
layout: post
title: 'Better custom font sizes on Sony Reader devices'
tags:
- sonyreader
- fonts
nouns:
- Sony
- Reader
- PRS+
comments: https://www.mobileread.com/forums/showthread.php?t=343547

---

Below are details of a script to generate custom CSS to make sure custom fonts all appear at similar sizes when they are used as the display fonts on Sony Readers running PRS+ custom firmware. *Without this script certain custom fonts will appear much bigger or smaller than others.*

I use this with my PRS-650, but it probably applies to most Sony Readers and perhaps some other eReaders. Get in touch if you have an idea how it can apply to other eReaders.

## Source Code
[https://gist.github.com/gingerbeardman/f07d9e033dab453b56afee9829828ed1](https://gist.github.com/gingerbeardman/f07d9e033dab453b56afee9829828ed1)

### Installation
Requirements:
- php
- python
- pip

Dependencies:
- font-line

Useful incantations:
```
sudo -H python -m ensurepip
sudo -H pip install font-line
```

### Location
Script should be alongside the folders of font families in `/READER/fonts`

### Usage
Run from the command line without any arguments.

### Output
One custom CSS file for each font family is written to `/READER/database/system/PRSPlus/epub/`

## How does it work?
Using the python tool [font-line](https://github.com/source-foundry/font-line) I get the sum of Ascender+Descender from the font metrics for each family. Dividing 1 by that number normalises the font size by making larger fonts slightly smaller, and smaller fonts slightly larger. The script finally writes the new size information into the CSS in the expected format at the correct location.
