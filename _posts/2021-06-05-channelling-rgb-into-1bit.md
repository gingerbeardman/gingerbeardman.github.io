---
layout: post
title: 'Daily Driver: Channelling RGB into 1-bit'
tags:
- dailydriver
- playdate
- cars
- graphics
nouns:
- Makefile
- imagemagick
image: /images/posts/daily-driver-rgb-1bit-1-render.png
---
After successfully splitting out dark and light elements of the sprites and rendering them in a HDR style, I figured: why stop there? Maybe I could squeeze another colour into the render - some specific shade of grey - that I could treat in a different way to introduce dithered areas to the sprite.

This came together very quickly but it resulted in my Makefile, yet again, becoming too complicated. So I decided to rethink my approach.

![GIF](/images/posts/daily-driver-rgb-1bit.gif "Dither layer: specifying areas that should have a dither pattern applied, here the rear grille")
{:.tofigure}

If only there was a way to encode information about three different colours in a single bitmap image. Hang on a minute, there already is: RGB!

## Channels

So my new idea was to use red, green and blue as the colours for my render, then split the image into those colour channels and process each individually to get separate light, dark and dithered elements.

Using imagemagick it is easy to separate a single channel from an image:

    magick render.png -channel G -separate green.png

From this simple start I always find that building imagemagick commands a very time consuming process. Indeed, it took me a long time to get a result that worked well. But I think of it as time well-spent as it will result in much quicker and easier iterations when designing vehicles.

Overall, I did a few more tricks:
- threshold convert the channels to 1-bit colour
- apply a dither pattern to the green channel
- composite the three layers back together as the final image

The final process worked a treat! Here are some example hi-res images showing the the steps from initial render to final composited image:

![PNG](/images/posts/daily-driver-rgb-1bit-1-render.png "Render, 8-bit colour")
{:.tofigure}

![PNG](/images/posts/daily-driver-rgb-1bit-2-red.png "Red channel, inverted, 1-bit colour")
{:.tofigure}

![PNG](/images/posts/daily-driver-rgb-1bit-3-green.png "Green channel, 1-bit colour")
{:.tofigure}

![PNG](/images/posts/daily-driver-rgb-1bit-4-blue.png "Blue channel, 1-bit colour")
{:.tofigure}

![PNG](/images/posts/daily-driver-rgb-1bit-5-alpha.png "Alpha channel, 1-bit colour")
{:.tofigure}

![PNG](/images/posts/daily-driver-rgb-1bit-6-dither.png "Green channel with Dither pattern applied")
{:.tofigure}

![PNG](/images/posts/daily-driver-rgb-1bit-7-composite.png "Final composite, 1-bit colour")
{:.tofigure}
