---
layout: post
title: 'Cannonball Run'
tags: [dailydriver, playdate, gamedev, modes, gameplay]
nouns: [60fps, Commodore 64, Palm, Game Boy, Creatures]
---

Accidental new game mode discovered?

> **“Cannonball Run”**
>
> Collect stuff whilst a barrage of heavy things bounce around the screen!

This was a result of my continued work implementing different surface frictions, and I mistakenly set the cones to not be affected by friction and thus never slow down. Hitting them a few times was enough to get them moving at a good speed, and then I drove around the screen.

What I didn't appreciate is that my collision model uses elastic collision, which allows the car to knock stuff over in a quite pleasing way where the car takes a little bit of a knock. But if those things are moving fast enough, as the cones are here, then any collision will also affect the car to a larger degree. You can see the car being pushed around by the out of control traffic cones.

![GIF](/images/posts/daily-driver-one-cannonball-run.gif#playdate)
