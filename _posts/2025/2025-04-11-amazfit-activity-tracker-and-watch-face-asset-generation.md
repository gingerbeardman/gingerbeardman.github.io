---
layout: post
title: "Amazfit activity tracker and watch face asset generation"
date: '2025-04-11T23:05+01:00'
tags:
- amazfit
- hacking
- tooling
- watches
nouns:
- Amazfit Band 7
- Amazfit
- Apple Watch
- Decathlon
- Figma
- Fireworks
- Datto
- D-DIN
image: /images/posts/amazfit-din.png
featured: false
pinned: false

comments: https://twitter.com/gingerbeardman/status/
style: |
  p.screen img {
    width: 75%;
    height: auto;
    margin: 0 auto;
  }

---

I recently wanted to track my heart rate and sleeping patterns, but do not want an Apple Watch. So I ended up buying a cheap Amazfit Band 7 from Decathlon. It was reduced because of a damaged box and I love a bargain!

It's a cool little thing and goes for 18 days on a single charge with default settings. I've charged it once since I bought it! Even more amazing is that this little things runs apps and watch faces powered by JavaScript. And it still gets multiple weeks on a single charge!

Anyway, I found some nice watch faces but they were all a little bit busy for me. But ideally I'd make my own and I put it on the rainy day list as I would need to create images for every digit at every size as well as any other things I want on the face.

----

## OK, Computer

Today it isn't raining but I do have some time on my hands, which is the next best thing. I didn't want to spend time in Figma exporting images over and over again. I get cold shivers thinking about slicing images in [Fireworks](https://en.wikipedia.org/wiki/Macromedia_Fireworks). So I wondered if I could create a tool that would make light work of generating the images I need from a font of my choosing.

It was pretty straightforward and I ended up with what you see below, where you can customise: font family, font size, color, text alignment, filename prefix, and character/phrase set. And then you can download all the images in one click! *NICE.*

There's nothing that ties the assets being generated to the Amazfit Band 7, so feel free to use the tool for other purposes if you want to just generate some text or symbols as images.

I do my best to adhere to the specs required by the most common watch face building tools, and in almost all cases I've been able to use the images exactly as they come out of the tool. There is some extraneous padding, which means you have to use quite large negative spacing (equivalent to kerning) but it all works well in practice.

The web app tool is at [gingerbeardman.com/amazfit/](https://www.gingerbeardman.com/amazfit/) if you want to try it out.

![IMG](/images/posts/amazfit-web-app.png)
{:class="screen"}

----

## Proof

Here's the first face i created using it: DIN. I'm generating images of numbers, and a few other things, in two different sizes and colours. The darker text might look too dark on your display, but on the OLED display of the watch it's plenty bright enough for secondary information. 

![IMG](/images/posts/amazfit-din.png "DIN looks super on OLED!")
{:.tofigure}

The typeface is [D-DIN](https://github.com/amcchord/datto-d-din)—a cool cut of [DIN](https://en.wikipedia.org/wiki/DIN_typeface) and it's free and released under [SIL Open Font License](https://en.wikipedia.org/wiki/SIL_Open_Font_License), Version 1.1. Thanks very much, Datto!