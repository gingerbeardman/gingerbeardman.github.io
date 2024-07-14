---
layout: post
title: "Shibuya Pixel Art Contest 2024"
date: '2024-07-14T17:42+01:00'
tags:
- graphics
- pixelart
- macintosh
- software
- japanese
- art
nouns:
- artWORKS
- Deneba
- MacPaint
- Playdate
- Rorschach
- PICO-8
- Macintosh
image: /images/posts/
featured: false
pinned: false
carousels:
  - images:
    - image: https://cdn.gingerbeardman.com/images/posts/shibuya-pixel-art-contest-2024-pico8-hanami.png
    - image: https://cdn.gingerbeardman.com/images/posts/shibuya-pixel-art-contest-2024-pico8-hanami-sake.png
    - image: https://cdn.gingerbeardman.com/images/posts/shibuya-pixel-art-contest-2024-pico8-hanafuda.png
  - images:
    - image: https://cdn.gingerbeardman.com/images/posts/shibuya-pixel-art-contest-2024-artworks1.png
    - image: https://cdn.gingerbeardman.com/images/posts/shibuya-pixel-art-contest-2024-artworks2.png

comments: https://twitter.com/search?q=from%3Agingerbeardman%20%23shibuyapixelart2024%20
style: |
  .carousel__holder:nth-of-type(1) {
    padding-bottom: 100%;
  }

---

For June and July of 2024 the [Shibuya Pixel Art Contest](https://pixel-art.jp/contesten) has been running, a welcome return after it not happening in 2023. Entries are open all over the world, but can only be submitted to Twitter using the hashtag [#shibuyapixelart2024](https://twitter.com/hashtag/shibuyapixelart2024). You have to include a name for the artwork and its original pixel dimensions (though it's OK to rescale small artwork so it can be seen more easily). There are special categories for 16×16px and 32×32px artwork, and then a category for anything bigger up to the maximum of 512×512px. Full rules at [https://pixel-art.jp/contesten](https://pixel-art.jp/contesten) and there's still time to enter! Selected works will go on display around the Shibuya district of Tokyo in August and September.

For my entries I thought it would be cool to use different, unexpected software to produce my artwork.

----

## PICO-8

These three entries are based on graphics I created for a game I started making when my wife was pregnant with our first child. We were house bound for a while, waiting for the birth, and I drew these cards and put together the start of a game, which remains unfinished. At least I finished the graphics!

- 16×16px = 「花見」hanami card, ([link](https://twitter.com/gingerbeardman/status/1808102421077295350))
- 32×32px = 「花見酒」hanami-sake yaku, ([link](https://twitter.com/gingerbeardman/status/1808102225857720725))
- 128×128px = 「花札」hanafuda koi-koi game layout, ([link](https://twitter.com/gingerbeardman/status/1806905446805938219))

The smaller cards shown in the full game layout are just the regular sized cards downscaled to 8×11px in code using nearest neighbour resizing. For all cards the border is drawn seperately. One or the other size of card are most likely the smallest Hanafuda ever pixelled!?

{% include carousel_multi.html height="100" unit="%" duration="7" number="1" %}

----

## Rorschach for Playdate

This entry was created with [Rorschach](https://gingerbeardman.itch.io/rorschach) a creative toy/game I made for Playdate. This piece was created my moving the pen using the accelerometer and relying on dynamic ink colour. It's a fullscreen grab so it's 400×240px. Title is 「キクぞく」which is "Kikuzoku" or "Chrysanthemum".

It would be tremendously complicated and time-consuming to create artwork like this pixel-by-pixel, or even with dither brushes, unless you had a pressure sensitive stylus. Rorschach and the Playdate accelerometer makes light work of it.

The final image was my 12th attempt at getting a convincing flower! With many of my earlier attempts I was slow to hide the cursor and beautiful flowers were ruined by rogue strokes of ink. Perhaps I should have added the ability to record/playback or some sort of undo to the app. ([link](https://twitter.com/gingerbeardman/status/1810481363046318410))

![](https://cdn.gingerbeardman.com/images/posts/shibuya-pixel-art-contest-2024-rorschach.png)

----

## Deneba artWORKS for Classic Macintosh

I thought it would be fun to use artWORKS my favourite classic Macintosh drawing app to create pixel art using vector shapes, the bundled external tools (plugins), and the infinite fills best known from their appearance in MacPaint. There are only 20 objects in this drawing, which is 200×300px in size and titled 「黄金比」 or "the golden ratio". ([link](https://twitter.com/gingerbeardman/status/1812491599789576474))

- Spiral: flower heads (2)
- Resistor: hairs (3)
- Bezier: stems, branch, leaves (5)
- Arc: shoots, stems, midrib (7)
- Round rect: planter (2)
- Polygon: planter inner shadow (1)

Plus
- Calligraphic pen nibs: dynamic line thickness
- Infinite fills: dithered patterned textures

{% include carousel_multi.html height="75" unit="%" duration="7" number="2" %}
