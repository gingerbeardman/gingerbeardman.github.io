---
layout: post
title: Sparrow Solitaire Tile Workshop
tags:
- playdate
- mahjong
- solitaire
- sparrowsolitaire
nouns:
- Sparrow Solitaire
- Mahjong Solitaire
- Playdate
image: /images/posts/sparrow-solitaire-tile-workshop.png
comments: https://twitter.com/gingerbeardman/status/1653069995620933632

---

A little known feature of [Sparrow Solitaire](https://sparrowsolitaire.com) is its ability to load user-generated content from files copied onto the [Playdate](https://play.date). One day I thought it would be cool to combine two tile sets, so I built a web app to do it!

A wild tile set builder appears! [sparrowsolitaire.com/workshop/](https://sparrowsolitaire.com/workshop/)

## 3-in-1

As well as allowing you to cherry pick tiles from existing sets (and sharing that selection data with people), you can also load your own image data into the "user" row. This is done using the Pasteboard text area, which accepts a few different types of data.

First it accepts a PNG URL which will be loaded into the user row and must be the correct dimensions. 

Secondly it accepts data:image (recommended & most versatile) which can be of any dimension. You can easily copy data:image straight out of the [Piskel](https://www.piskelapp.com) pixel art web app. You can also generate it on the command line, using the small script below, or using [an Alfred workflow](https://www.alfredforum.com/topic/20306-clipboard-image-to-data-uri/) or similar automation.

{% gist c19ac6d2b8565fea9e3e45909ddddc9b %}

Thirdly, and finally, if you'd rather create a full tile set of your own, you can do it all in [Piskel](https://www.piskelapp.com) and save it online as a GIF. Paste this URL into Tile Workshop and you can save it straight to an image format suitable for use on your Playdate.

Please do get in touch if you create any tile sets of your own!

![PNG](/images/posts/sparrow-solitaire-tile-workshop.png "Sparrow Solitaire Tile Workshop")
{:.tofigure}
