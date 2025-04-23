---
layout: post
title: 'The first colour Playdate game?'
modified: '2023-12-03T22:06+00:00'
date: '2023-07-09T13:59+01:00'
tags:
- playdate
- hack
- colour
nouns:
- Ball und Panzer Golf
- Playdate Simulator
- Playdate
- Simulator
image: /images/posts/playdate-debugdraw.png
comments: https://twitter.com/gingerbeardman/status/1677803170393649152

---

> This blog post assumes some familiarity with [Playdate](https://play.date) (a handheld game console with a cool crank control scheme), [Playdate SDK](https://play.date/dev/) and the [Lua programming language](https://www.lua.org/manual/5.4/).

During the development of my forthcoming Playdate game *[Ball und Panzer Golf](/2023/06/26/ball-und-panzer-golf-making-a-playdate-game-in-a-week/)* (tentative title), I wanted to be able to draw to the debug layer from anywhere in my code. The SDK allows you to draw to the debug layer only from the `drawDebug` function.

After filing a [feature request](https://devforum.play.date/t/additional-way-to-do-debug-draw-from-anywhere-in-code/11735) I thought about it some more and [came up with a workaround](): 

**1. (on initialisation) create a full screen opaque image**

```lua
local gfx <const> = playdate.graphics
local disp <const> = playdate.display

overlay = gfx.image.new(disp.getWidth(), disp.getHeight(), gfx.kColorBlack)
```

**2. (anywhere in your code) draw into that using pushContext (or lockFocus)**

```lua
gfx.pushContext(overlay)
    gfx.setColor(gfx.kColorWhite)
    gfx.setLineWidth(2)
    gfx.drawCircleAtPoint(x,y,r) -- draw some debug stuff into our overlay image
gfx.popContext()
```

**3. (in debugDraw function) draw the single image of our collected debug drawing**

```lua
function playdate.debugDraw()
    overlay:draw(0,0) -- draw our overlay image containing all debug draws
    overlay:clear(gfx.kColorBlack) -- blank overlay ready for the next update
end
```

This means I can draw debug info about a thing from the same code and logic responsible for that thing. For me, with this game, that makes a lot of sense.

![PNG](/images/posts/playdate-debugdraw.png#playdate)

## Abusing the system

After debugging the positions of everything during my collision logic, it occurred to me that I could abuse this system to give the game a colour overlay. 

I do this by using the debug draw in the opposite way to how it's supposed to be used. Instead of drawing just the debug information, I set the hole screen to draw in colour and then — in the same way as above — at various points in my code *I punch out areas of the screen I do not want drawn in colour*. 

I'm not quite drawing everything twice, as the areas that are punched out are simple shapes approximating the elements in my game. Plus, this is made easier for me because everything in the game is already being drawn only with filled shapes.

{% youtube fqv1kwfW5r8 5/3 %}

One interesting thing about this technique is that changing the contrast (dither pattern opacity) of the golf greens only when running in "colour mode" on the Simulator made things look better. That's to say that adding colour also adds an extra complexity with regards to contrast. I think that's the only change to the graphics I've done so far but there is opportunity for more.

When I sent a build out to testers I put a cryptic note in the changelog "added: chartreuse tinted glasses mode" but only one tester figured out what it was referring to. I had asked ChatGPT to suggest a colour that sounds like a shade of red, but is actually a shade of green: it suggested chartreuse (and so I use the "proper" chartreuse hex colour for the base colour of my green layer).

## Multi-colour?

This approach could be taken further if the Playdate SDK allowed multiple colours to be used for debug drawing, [keep an eye on this feature request](https://devforum.play.date/t/support-mutiple-colors-in-debugdraw/5848).

## Physical overlays

Back in October 2021 I bought transparency film in a range of colours to make a physical screen overlay, inspired by early arcade games like Space Invaders and the Vectrex gaming system, which worked but is obviously more hassle as the transparency picks up lint and gets dirty really quickly. This split of blue/green was for sky/grass in a 3D golf game.

![JPG](/images/posts/playdate-physical-overlays.jpg)

----

### Further reading

* [Ball und Panzer Golf: making a Playdate game in a week](/2023/06/26/ball-und-panzer-golf-making-a-playdate-game-in-a-week/)
