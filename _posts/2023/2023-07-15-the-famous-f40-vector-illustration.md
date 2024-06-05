---
layout: post
title: '“The Famous F40” vector illustration by David Rumfelt'
date: '2023-07-15T18:25+01:00'
tags:
- deneba
- macintosh
- illustration
- patreon
- preservation
- history
nouns:
- Deneba Software
- Deneba Systems
- Deneba Canvas
- Canvas
- Macintosh
- System 7.5
- David Kimble
- David Rumfelt
- Dave Rumfelt
- The Famous F40
- The Famous Harley
- Read Me
- EPS
- PDF
- Photoshop
image: /images/posts/deneba-canvas-david-rumfelt-the-famous-f40-exported.png
featured: true
comments: https://twitter.com/gingerbeardman/status/1680271012414324737
style: |
  figcaption {
    font-size: 0.9rem;
  }
  
  iframe#megapixel {
    border: 2px solid black;
    margin-left: -30%;
    width: 160%;
    display: block;
  }
  
  blockquote em {
    font-style: normal;
  }
---

I was looking through some old Macintosh CD-ROMs, searching for my usual things that I do whenever I add new discs to my collection: hanafuda, specific artists, favourite software, plugins for said favourite software, and so on. Whilst I was deep in the filesystem I stumbled across some old sample files from Deneba Canvas and noticed how they were all credited to the artist.

![Canvas Title was produced entirely in Canvas 2.1 by David Rumfelt, Deneba Software. © 1990 Deneba Systems, Inc.](https://cdn.gingerbeardman.com/images/posts/deneba-canvas-david-rumfelt.png "Canvas Title was produced entirely in Canvas 2.1 by David Rumfelt, Deneba Software. © 1990 Deneba Systems, Inc.")

Intrigue got the better of me so I did a quick google and came up with [a post on the Canvas GFX website](https://www.canvasgfx.com/blog/driven-by-design-david-rumfelt-graphic-artist) (yes, the software still exists!) about David Rumfelt and his most famous work: a cutaway illustration of a Ferrari F40.

> Thanks to my [Patreon](https://www.patreon.com/gingerbeardman) supporters for their help and encouragement with this type of content.

Going back to the [files on the CD](https://archive.org/details/GRAVIS_CD_1_94), I found the artwork for The Famous F40! It was alongside another detailed cutaway piece called The Famous Harley. In the folder containing the artwork files there was an important looking Read Me document:

> Effectively immediately, all uses of the F-40 and Harley image by Deneba or third-party vendors MUST include one of the following tag lines in the credits: **"Original art by David Kimble. Electronically re-created in Canvas by Deneba Software"** or **"Original art by David Kimble. Electronically re-created in Canvas by Deneba Software artist Dave Rumfelt."**

These days we would just call it a vector illustration, but at the time I guess there must have been some fun discussions as to both the legality of this piece of work—a copy of a piece of art originally created by somebody else—and also how it should be described to minimise [the outrage David describes](https://www.canvasgfx.com/blog/driven-by-design-david-rumfelt-graphic-artist) when he recalls creating the piece.

<figure class="img-with-caption">
<picture>
  <source srcset="https://cdn.gingerbeardman.com/images/posts/deneba-canvas-david-rumfelt-the-famous-f40-exported.avif 1x, https://cdn.gingerbeardman.com/images/posts/deneba-canvas-david-rumfelt-the-famous-f40-exported-retina.avif 2x" type="image/avif">
  <source srcset="https://cdn.gingerbeardman.com/images/posts/deneba-canvas-david-rumfelt-the-famous-f40-exported.webp 1x, https://cdn.gingerbeardman.com/images/posts/deneba-canvas-david-rumfelt-the-famous-f40-exported-retina.webp 2x" type="image/webp">
  <img src="https://cdn.gingerbeardman.com/images/posts/deneba-canvas-david-rumfelt-the-famous-f40-exported.png" srcset="https://cdn.gingerbeardman.com/images/posts/deneba-canvas-david-rumfelt-the-famous-f40-exported-retina.png 2x" onload="doScroll();" alt="" title="" loading="lazy">
</picture>
<figcaption class="caption">Original art by David Kimble. Electronically re-created in Canvas by Deneba Software artist Dave Rumfelt.</figcaption></figure>

## Time travel

The F40 is a mind blowing piece of work and is reported to feature around 28,000 vector objects. It's a very good imitation of the [original illustration](https://uk.motor1.com/news/462763/ferrari-f40-straight-piped-autobahn/) by the legendary [David Kimble](https://memory-alpha.fandom.com/wiki/David_A._Kimble) on which it is based.

I recorded a short video showing me zooming, scrolling, and watching it redraw. Finally I ungroup everything a handful of times to count the total number of vector objects. This is running in an emulator of a Macintosh with System 7.5 and 64MB RAM, though the illustration only requires around 8MB RAM. Maybe this will transport you back through time to when you were young!?

<iframe width="740" height="555" src="https://www.youtube.com/embed/5HMUp6vmc4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Back in the late 1980s and early 1990s Canvas—and most other contemporary illustration software—did not draw lines smoothly using the process known as [anti-aliasing](https://en.wikipedia.org/wiki/Spatial_anti-aliasing). This was for a combination of performance reasons (you need the artwork to redraw quickly) and hardware limitations (computers didn't have GPU acceleration and displays often ran with limited colours). The resulting image has lines with aliasing—a distinct pixel stepping—and gradient fills that are not very smooth. Though I feel that a lot of the gradient fills in this piece are deliberately using banding for similar technical reasons.

After playing around in Canvas for a while, I decided to see if I could get a higher quality version of the file. Rather than struggle making 30-year-old software do something it would rather not, I exported the Canvas file as an EPS and moved to modern macOS. Importing it into modern [Acorn](https://flyingmeat.com/acorn/) allowed me to export a higher quality, smooth, anti-aliased version of the illustration that you see at the top of this page. But why stop there?

## Scrollable 20-megapixel version

You can scroll around this image or right click and open it in a new tab to see it in all its glory.

<iframe id="megapixel" width="740" height="555" style="overflow:scroll;" src="/files/deneba-canvas-david-rumfelt-the-famous-f40-exported-megapixel.html" title="The Famous F40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>

## Notes

Eagle-eyed viewers may notice that this version of the F40 differs slightly from [the one shown on the Canvas GFX web page](https://www.canvasgfx.com/blog/driven-by-design-david-rumfelt-graphic-artist). The Canvas file I have from 1994 is some missing elements, such as the metalwork between the petrol cap and petrol tank. It is also comprised of around 16,000 vector objects, around two thirds of the reported number. Also of note is the image on the Canvas GFX website appears to be either squished horizontally or stretched vertically.

## Further reading

- [Gallery: Ferrari F40 Prototype cutaway sketch by David Kimble](https://uk.motor1.com/news/462763/ferrari-f40-straight-piped-autobahn/)
- [Some Ferrari F40 facts for car nerds only](https://motors.mega.mu/news/6-ferrari-f40-facts-car-nerds-only-20170303.html)

## Downloads

- [The Famous F40, PDF file](https://cdn.gingerbeardman.com/files/deneba-canvas-david-rumfelt-the-famous-f40.pdf) (2MB, direct download)
- [The Famous F40, Canvas file as SIT](https://cdn.gingerbeardman.com/files/deneba-canvas-david-rumfelt-the-famous-f40.sit) (10MB, direct download)
- [The Famous F40, Canvas file on CD-ROM](https://archive.org/details/GRAVIS_CD_1_94) (400MB, link to download page)
