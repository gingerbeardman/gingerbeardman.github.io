---
layout: post
title: 'Daily Driver: Retrobatch workflow'
tags: [dailydriver, playdate, software]
keywords: [Retrobatch]
carousel: retrobatch
---

{% include carousel.html height="82" unit="%" duration="7" %}

## Retrobatch

1. process dumped frames x 32
- once each for left, right and straight directions
2. stitch processed frames together as sprite-sheets x 3
- we end up with three long images
3. stitch 3x sprite-sheets together
- we end up with our final image ready for post-processing

Edit: since writing this post I’ve been able to condense this process into 1 single workflow that executes much faster. See image 4. Thanks to Gus, maker of Retrobatch!