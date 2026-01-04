---
layout: post
title: "GLSL Web CRT Shader"
date: '2026-01-04T17:44+00:00'
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
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2007880011064484084
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mbmk2dtcmc2m
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/115838210806027691

---

I'm releasing my GLSL Web CRT Shader as open source.

This began as a [shader for Love2D](https://bsky.app/profile/gingerbeardman.com/post/3lk2arnt4rc2o) in early 2025 (I'll try to release that version at some point). Later in 2025 I ported it to GLSL for my current personal work-in-progress web game.

I currently use it with Three.js, and this demo has it running with just a 2D canvas.

It's optimised to run well on as far back as iPhone XS, though I'm certain it can be optimised even further. PRs welcome! The easiest optimisation would be removing processing of unused parameters.

[github.com/gingerbeardman/glsl-web-crt-shader/](https://github.com/gingerbeardman/glsl-web-crt-shader/)

----

## Live Demo

Reach for the sliders!

<iframe src="https://gingerbeardman.github.io/glsl-web-crt-shader/" width="740" height="740">
</iframe>

^ Screenshot is Pico-8 classic [Worm Nom Nom](https://www.lexaloffle.com/bbs/?tid=3547) by Tic Tac Toad (kometbomb + iLKke) 🌸🍏🎩🐛💩
