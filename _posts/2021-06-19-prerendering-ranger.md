---
layout: post
title: 'Daily Driver: Pre-rendering Ranger'
tags: [dailydriver, playdate, graphics, cars]
nouns: [OpenSCAD, Daily Driver]
carousel: prerendered-shadows
---

Since very early on shadows in Daily Driver have just been simple rectangles: one sized fits all, rendered from a single 3D model, and post-processed to add dithering. MPV, you know? Over time I decided to do multiple shadows, one each for short cars and long cars.

Sometime later I threw caution to the wind and decided to render per-car shadows. However, the OpenSCAD `projection()` command that I was using was so slow! In fact it zapped my desire to finish implementing the feature. Instead, I let it sit for many months.

Recently, I picked things up again to get the a new trailer and demo out. And then it hit me, that if I flatten a car on the z-axis—as if Looney Tunes dropped a heavy weight on it—then that flat thing will be enough of an equivalent to a shadow for my use. So I did just that and the results were great, and more importantly very quick to render!

So I went all in and decided to not only render one shadow per-car but to render shadows for each individual frame. So now the direction of the front wheels and details of the body shape are reflected in the shadow. It might sound like a small thing but it really makes a big difference.

It's in situations like these that I'm really proud of myself for putting a bunch of early effort into tooling and build process that will generate my sprites.

Result!

{% include carousel.html height="82" unit="%" duration="7" %}

*[MVP]: Minimum Viable Product
