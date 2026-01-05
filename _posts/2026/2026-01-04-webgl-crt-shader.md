---
layout: post
title: "WebGL CRT Shader"
date: '2026-01-04T17:44+00:00'
modified: '2026-01-05T11:58+00:00'
tags:
- crt
- tv
- opensource
- software
- web
nouns:
- Love2D
- Three.js
- Pico-8
- iPhone XS
image: /images/posts/glsl-web-crt-shader.png
featured: false
pinned: false
redirect_from:
- /2026/01/04/glsl-web-crt-shader/
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2007880011064484084
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mbmk2dtcmc2m
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/115838210806027691

---

I'm releasing my WebGL CRT Shader as open source.

It creates a CRT/vintage TV effect so could be used in games, emulators, apps, demos, visuals, etc.

As a WebGL shader, it runs on the device’s hardware GPU in the browser and renders to a \<canvas\> (or offscreen canvas). I currently use it with Three.js, and the demo below uses just a 2D canvas.

It's optimised to run well on low power devices as far back as iPhone XS, though I'm certain it can be optimised even further. [PRs welcome](https://github.com/gingerbeardman/glsl-web-crt-shader/pulls)! The easiest optimisation would be removing processing of unused parameters.

Is it scientifically correct? *Hell no.* Does it look good? *Yes.* Does it give you the feels? *Absolutely.*

[github.com/gingerbeardman/webgl-crt-shader/](https://github.com/gingerbeardman/webgl-crt-shader/)

----

## History

It began as a [shader for Love2D](https://bsky.app/profile/gingerbeardman.com/post/3lk2arnt4rc2o) at the beginning of 2025 ([here's a gist of that one](https://gist.github.com/gingerbeardman/7392ee84fdb2e405d7437b5b12e4c12d)) and by the end of 2025 I had ported it to GLSL for a personal work-in-progress web game.

----

## Live Demo

Reach for the sliders!

<div class="table-wrapper" markdown="block">

<iframe src="https://gingerbeardman.github.io/webgl-crt-shader/" width="740" height="740">
![screenshot](/images/posts/glsl-web-crt-shader.png)
</iframe>

</div>

^ Screenshot is Pico-8 classic [Worm Nom Nom](https://www.lexaloffle.com/bbs/?tid=3547) by Tic Tac Toad (kometbomb + iLKke) 🌸🍏🎩🐛💩
