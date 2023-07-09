---
layout: post
title: 'The first colour Playdate game?'
date: '2023-07-09T13:59+01:00'
tags:
- playdate
- hack
- colour
nouns:
- Ball und Panzer Golf
- Playdate
featured: true
comments: https://twitter.com/gingerbeardman/status/1677803170393649152

---

> This blog post assumes some familiarity with [Playdate](https://play.date) (a handheld game console with a cool crank control scheme), [Playdate SDK](https://dev.play.date) and the [Lua programming language](https://www.lua.org/manual/5.4/).

During the development of my forthcoming Playdate game Ball und Panzer Golf (tentative title), I wanted to be able to draw to the debug layer from anywhere in my code. After filing a [feature request](https://devforum.play.date/t/additional-way-to-do-debug-draw-from-anywhere-in-code/11735) I thought about it some more and [came up with a workaround](): 

**On initialisation: create a full screen opaque image**

```lua
local gfx <const> = playdate.graphics
local disp <const> = playdate.display

overlay = gfx.image.new(disp.getWidth(), disp.getHeight(), gfx.kColorBlack)
```

**Anywhere in your code: draw into that using pushContext (or lockFocus)**

```lua
gfx.pushContext(overlay)
    gfx.setColor(gfx.kColorWhite)
    gfx.setLineWidth(2)
    gfx.drawCircleAtPoint(x,y,r) -- draw some debug stuff into our overlay image
gfx.popContext()
```

**In debugDraw() function: draw the single image of our collected draws**

```lua
function playdate.debugDraw()
    overlay:draw(0,0) -- draw our overlay image containing all debug draws
    overlay:clear(gfx.kColorBlack) -- blank overlay ready for the next update
end
```

![PNG](/images/posts/playdate-debugdraw.png#playdate)

## Abusing the system

After debugging the positions of everything during my collision logic, it occurred to me that I could abuse this system to give the game a colour overlay. 

I do this by using the debug draw in the opposite way than it's supposed to be used. Instead of drawing just the debug information, I set the hole screen to draw in colour. Then, in the same way as above, at various points in my code I punch out areas of the screen I do not want drawn in colour.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fqv1kwfW5r8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>

One interesting thing about this is that I change the contrast (dither pattern opacity) of the golf greens when running in "colour mode" on the Simulator. I think that's the only change to the graphics I've done so far but there is opportunity for more.

When I sent a build out to testers I put a cryptic note in the changelog "added: chartreuse tinted glasses mode" but only one tester figured out what it referred to. I had asked ChatGPT to suggest a colour that sounds like a shade of red, but is actually a shade of green: it suggested chartreuse (and I use the chartreuse hex colour for the debug layer).

## Multi-colour?

This approach could be taken further if the Playdate SDK allowed multiple colours to be used for debug drawing, [keep an eye on this feature request](https://devforum.play.date/t/support-mutiple-colors-in-debugdraw/5848).

## Physical overlays

Back in October 2021 I bought transparency film in a range of colours to make a physical screen overlay, which worked but is obviously more hassle as the transparency picks up lint and gets dirty really quickly. This split of blue/green was for sky/grass in a 3D golf game.

![JPG](/images/posts/playdate-physical-overlays.jpg)
