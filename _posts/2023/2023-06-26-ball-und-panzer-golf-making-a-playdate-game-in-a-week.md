---
layout: post
title: 'Ball und Panzer Golf: making a Playdate game in a week'
last_modified_at: '2024-08-30T16:47+01:00'
date: '2023-06-26T22:11:00+00:00'
tags:
- x68000
- playdate
- japanese
- videogame
- foretrack
nouns:
- Ball und Panzer Golf
- Girls und Panzer
- Girl und Panzer
- Sharp X68000
- Zuiki X68000 Z
- Sharp
- Zuiki
- X68000 Z
- X68000
- Playdate
image: /images/posts/ball-und-panzer-golf-fore-track.gif
featured: true
redirect_from:
- /2023/06/26/ball-und-panzer-golf-week-1/
comments: https://twitter.com/gingerbeardman/status/1670573806765719553

---

I've been following the X68000 Z mini computer since it's announcement in the hope that it will bring new activity to the X68000 scene and it seems to be having that effect. In one video from the recent 「68の日」("68 Day", named after the date written in Japanese order, 6-8, that's 8th June the most special day of the year for X68000 fans) [I spotted](https://twitter.com/gingerbeardman/status/1669909753592512512?s=61&t=vJGphXuN310nHUu1fN6c7Q) a interesting looking single screen golf game:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nwte3wm6lzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Hello kata68k

It was Ball und Panzer Golf an indie/doujin game by [@kata68k](https://twitter.com/kata68k) for the Sharp X68000 series of Japanese personal computers and the recent [*Zuiki X68000 Z*](https://www.zuiki.co.jp/products/x68000z/) mini system, a new emulator based reimagining of the original classic computer. The name is a pun on the anime series [*Girls und Panzer*](https://en.wikipedia.org/wiki/Girls_und_Panzer) and its shortened version is *BuPG* which I assume is a pun on *PUBG*.

kata68k's game, as the name implies, is golf but with a tank. It was [created in May 2023 and fine tuned for a few weeks](https://twitter.com/kata68k/status/1634209609069076480), [released in time for "68 Day"](https://twitter.com/kata68k/status/1666099628947968006). It's a single player game where you use the tank to shoot holes-in-one on a golf course and try to destroy all flags. All this to say it plays like golf, kinda, but with a focus on high scores.

> Aside: my favourite source of X68000 content is the [*PipitanTV* YouTube channel](https://www.youtube.com/user/pipipicpsf), run by [@pipixvi](https://twitter.com/pipixvi), which has a [longer, screen capture video](https://www.youtube.com/watch?v=FMrsHfuuTR8&t=22s) of Ball und Panzer Golf.

I played Ball und Panzer Golf v0.94 using an X68000 emulator and was instantly hooked, by the strange mashup concept and also by the scoring mechanisms that were involved. Kata's game design values and methods align with my own to a surprising degree. kata68k grew up with the X68000 much like I grew up with another Motorola 68000-based computer: the Atari ST. We're roughly the same age and have similar interests in many ways. 

Anyway, I had great fun figuring out the different types of shots and opportunities to increase my scoring ability during my few plays of the game. Once I'd figured them out, it became a task of improving my skill controlling the tank and the shot power. The shot mechanism itself is worthy of a mention: there is no real charging of the shot and the ball starts to move immediately. What you do control is the moment the ball starts to come back down to Earth. It's a very strange way of controlling the ball, but oddly satisfying. It's reminiscent of the two tap system that sets power in most golf games, but at the same time feels completely alien.

## Enter Playdate

I currently spend my time creating games for [Playdate](https://play.date), a handheld gaming system with a black and white screen and a unique crank control that can be used as a method of input. Whilst on a walk in the park I couldn't stop thinking of kata68k's game and how it might work on Playdate. When I got back to my computer I wrote a little bit of Lua code to draw an elliptical golf green on screen, then added a hole, a flag pole, and a flag with a number on it. Then I added a loop to generate random positions and drew 18 holes, adjusting the size so they all fitted a bit better. It might just work.

![PNG](/images/posts/ball-und-panzer-golf-01.png#playdate "The first 18 holes, eat your heart out <em>Pebble Beach no Hatou</em>!")
{:.tofigure}

After a quick dinner, it was time to draw the tank. I really didn't want to slow down my pace of progress so I decided to keep drawing the graphical elements in code using filled shapes rather then have to draw a tank in pixels. Another option would have been to use one of the cars from my game [Daily Driver](/2021/08/23/daily-driver-teaser-artwork/), but the path of least resistance was to draw a filled ellipse along with a line to show the turret position.

![PNG](/images/posts/ball-und-panzer-golf-02.png#playdate "Rudimentary tank and turret drawn using an filled ellipse and a thick line")
{:.tofigure}

## Day 1

That first day everything fell into place perfectly, with little friction and no refactoring. I started from a blank file and wrote just under 400 lines of code. The two most complicated elements were the randomised background and limiting the tank to its circular area, but I'd done similar things before so there was no problem solving involved, just pure implementation. In fact, a lot of this quick prototype made use of tricks and techniques I'd figured out over the past few years of Playdate development, in particular during the development of my game [Daily Driver](/tag/dailydriver/).

At the end of the first day you could drive the tank around the screen, fire the ball at an angle selected using the crank or d-pad, and when you run out of balls it would trigger game over. What it didn't have is any logic that would collide the ball with the holes, point scoring, or any sort of win state. For some reason at this point I thought it would be cool to have a black tank with three wheels.

![GIF](/images/posts/ball-und-panzer-golf-03.gif#playdate "The state of the game the end of the first day")
{:.tofigure}

## Day 1: Timeline

| Time  | Event |
|-------|-------|
| 15:40 | draw a single "hole": flag, hole, green |
| 16:00 | loop to draw 18 holes |
| 17:00 | (dinner) |
| 18:00 | draw tank |
| 18:20 | (ask permission from kata68k) |
| 19:00 | background (interesting use of Perlin and random) |
| 20:00 | add controls to tank |
| 20:10 | (send update to kata68k) |
| 21:00 | limit tank to circular area (tricky but fun) |
| 22:00 | ball moving |
| 22:10 | (kata68k confirms he's OK with my version) |
| 22:30 | add game states |
| 23:00 | add ball height capability |
| 23:45 | (send update to kata68k) |
| 00:26 | [tweet about it](https://twitter.com/gingerbeardman/status/1670573820581650434) |

---- 

## Week 1

The following day I added a first draft of collisions and scoring. There was slower progress, but it was still very steady with no problems encountered. I was keenly aware that the collision and scoring were very naïve and that I would have to refine and improve them going forward. But, regardless, at the end of the second day it was possible to play a complete round of tank golf!

![GIF](/images/posts/ball-und-panzer-golf-04.gif#playdate "How the game was shaping up at the end of the second day")
{:.tofigure}

The next two days consisted of fine tuning, polishing, play testing, bug fixing, adding sound effects, and so on. I even managed to record a GIF where I got all 18 flags ...my first speed run!? I also received some great early encouragement and feedback from Playdate Squad community members: Donald [@Guv_Bubbs](https://twitter.com/Guv_Bubbs), Steve [@ScenicSoftware](https://twitter.com/ScenicSoftware), Atsu [@SquidGodDev](https://twitter.com/SquidGodDev), Neven [@neven](https://twitter.com/mrgan) and of course [@kata68k](https://twitter.com/kata68k) himself! The game was shaping up nicely and coming together very quickly.

Opportune timing meant that I could get the game in the hands of some testers on a live stream, over at IGDA Twin Cities (MN, USA) as part of their monthly Playtest. Thanks to [Mark LaCroix](https://twitter.com/Mark_LaCroix) for sorting that out! It was great to watch them play the game for the first time as they discovered the details of gameplay, mechanics, controls, and scoring! I even spotted a bug.
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/qZq3-N1MczA?start=3837" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

For the rest of the week I polished and played, addressing areas that I thought could be improved. I added accessibility improvements, more opportunities to score, better hole randomisation, even wind effects, and so much more besides.

For the last couple of days of the week I kept release notes, as I felt the pace of progress slowing down towards the end of my self-imposed deadline of one week. I would categorise most changes in those final days as either quality of life improvements or minor bug fixes.

I had not optimised any of the code and was targeting the default 30 frames per second. On the final evening I optimised all text drawing in my main update path, as I could see that was responsible for a huge portion of where my game was spending its time, with the CPU pegged at 100% and the frame rate not able to hit the target 30fps. So the flags with numbers on were pre-rendered as images during initialisation, and the HUD is drawn only when its contents change, and the image is cached for use at other times. These two small and quick optimisations reduced the CPU usage by 20% and put me at a solid 30fps.

There are many more optimisations to be made but this is not the time to do them. There's too much still to do and I don't want to lose focus. But for example: I'm not currently using the Playdate SDK Sprite system and am instead doing things the traditional way of drawing everything every update, so I'm positive I can get some good gains by drawing to a few different sprite layers. There are also some functions I call regularly, such as one that counts remaining holes, that can be optimised or avoided by improving my game logic. I'm confident I can get the CPU time down a good bit more. There's no real need to do so, but I figure anything that will help reduce power usage or is good for the player is a honourable responsibility for a developer with a conscience to take on. If that goes well I may even increase the frame rate for smoother ball movement.

## Shaping up

All the graphics are still composed with filled ellipses, rectangles and lines, varying their dithering patterns to provide different textures. I really leaned into this and over the course of the week fine tuned the tank from a three-wheeled blob to a high contrast, detailed, carefully animated sprite that you might think has been rendered externally. Maybe in a forthcoming post I can put together an exploded diagram of how it's drawn?

![GIF](/images/posts/ball-und-panzer-golf-05.gif#playdate "Ball und Panzer Golf for Playdate, at the end of the first week")
{:.tofigure}

## What's next?

The only things I didn't manage to fit in in my week sprint were a couple of animations I think will help make the game feel even higher quality and that will increase players ability to read/understand what is happening on screen. I need to make some more changes to the wind feature and the way the flag flaps in the wind. Currently the flag direction is correct but I'd like the length and frequency to be relative to the strength of the wind. 

> Pretty much all of the maths in this game is high school algebra and trigonometry, wrapped up in some smoke and mirrors to make it feel magical.

Also on the task list are a couple more sound effects, with the goal being one sound effect for each important event or action in the game. I feel that sounds cues are as important as visual cues and players could pick up on one or the other so there should ideally be parity.

I can't keep up the insanely fast pace of development from this first week, not only because of the physical and mental toll it would take but also because the quick wins of the prototype phase are now gone. To add the animations I previously mentioned, the first serious refactoring of part of the code will be needed. So there is no choice but for progress to be slower from this point at least for a while.

The big remaining task that will take a lot longer than a week is game structure and progression. I have ideas of how I can package the structure of the game now into a short experience with increasing difficulty level and unlimited replay-ability.

But the bigger question is do I want it to be bigger than that? There are no shortage of ideas how how to mashup to concept of tanks and golf, only a shortage of time and budget to make it happen. I could even add a mini-golf type of experience where you're playing a round of single screen holes with additional hazards pulled from both the golf and tank world. 

----

## Launched!

My version of Ball und Panzer Golf was renamed Fore! Track and is available for Playdate via Catalog [https://play.date/games/fore-track/](https://play.date/games/fore-track/) or on [itch where there's a free demo](https://gingerbeardman.itch.io/fore-track). Here's an animation of the final game:

![GIF](/images/posts/ball-und-panzer-golf-fore-track.gif#playdate "Demonstration of the launch version of <em>Fore! Track</em>")
{:.tofigure}

----

### Further reading

* [The first colour Playdate game?](/2023/07/09/the-first-colour-playdate-game/)
