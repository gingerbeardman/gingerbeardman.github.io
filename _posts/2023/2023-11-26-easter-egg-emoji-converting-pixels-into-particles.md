---
layout: post
title: "Easter egg emoji: converting pixels into particles"
date: '2023-11-26T20:41+00:00'
tags:
- graphics
- playdate
- optimisation
- gamedev
- particles
nouns:
- katamono
- Playdate
- Catalog
- YOYOZO
- Flicky
- SEGA
comments: https://twitter.com/gingerbeardman/status/1728879639987364015
style: |
  p.screen img {
    width: 100%;
  }
---

I'm [fascinated with Moai](/2019/08/14/moai-games/) so I always try to squeeze an appearance into my games. Moai in video games is a meme, or [easter egg](https://en.wikipedia.org/wiki/Easter_egg_(media)), going all the way back to 1983. But my game YOYOZO ([out now for the Playdate handheld](/2023/11/21/yoyozo-how-i-made-a-playdate-game-in-39kb/)) is about capturing stars in space with a yoyo, so how could I get a Moai in it?

The source of my inspiration was a trip to Japan back in 2004 (my only one, so far). Visiting in August meant that one of the things we did was go to an [annual hanabi fireworks festival](https://www.japan-guide.com/e/e2267.html), where I saw [katamono](https://blog.gaijinpot.com/four-types-of-japanese-fireworks/) for the first time. These are fireworks that explode in the shapes of drawings, like a smiley face or a magic 8-ball. I was amazed and the experience has stuck with me for over 20 years. Maybe I could add Moai into YOYOZO by making the explosions appear like the katamono?

I started off by coding the patterns by hand, as a test, but my calculations weren't precise enough and the whole endeavour quickly grew too complicated to manage by hand. I needed a better, more automated way. The method that I arrived at is what I'll document in this post.

----

## Pixels as code

Instead of plotting values by hand in code I figured that it would make more sense if I could draw the patterns and then somehow convert them into coordinates. I use [Piskel](/2023/05/10/piskel-for-playdate/) as my Playdate-centric graphics editor. It's a really useful tool. So I drew a few emoji style patterns, keeping in mind that they would be converted into a cluster of points and exploded from an origin. This took a bit of experimentation but I ended up with a sort of already exploded look.

![EMOJI](https://cdn.gingerbeardman.com/images/posts/yoyozo-emoji.png#pixel)
{:class="screen"}

To get the pixel data out of Piskel in text form I make use of its "export as a C file" feature. This results in code definitions similar to the below. (I use a script that does some simple regex search/replace to reformat these definitions to be a little more succinct and readable in my Lua code.)

```c
#include <stdint.h>

#define EMOJI-TABLE-11-11_FRAME_COUNT 3
#define EMOJI-TABLE-11-11_FRAME_WIDTH 11
#define EMOJI-TABLE-11-11_FRAME_HEIGHT 11

/* Piskel data for "emoji-table-11-11" */

static const uint32_t emoji-table-11-11_data[3][121] = {
{
0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 
0x00, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 
0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 
0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 
0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0xff, 0x00, 0x00, 0x00, 0xff, 
0x00, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 
0xff, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0xff, 
0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00, 
0x00, 0xff, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0xff, 0x00, 
0x00, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 
0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00
},
...
```

----

## Pixels as points

With this data in hand, my plan was to convert them into points expressed in an angle and distance from an origin. This way of expressing points the [polar coordinate system](https://en.wikipedia.org/wiki/Polar_coordinate_system) so there was no need to invent anything, I just needed to code a function that would take a grid of pixels expressed as *(x, y)* and convert them to a series of distances and angles expressed as *(r, θ)*.

The way I do this is to read the point data in from a grid of pixels, offsetting that data by half the width and height of the *odd-sized* grid so that the centre of the grid *(0, 0)* is the middle of the centre pixel. And finally I convert those adjusted *(x, y)* values to polar *(r, θ)* coordinates. This worked really well!

> Below is a work-in-progress GIF captured on 14 September 2023, shortly after getting the feature working. This animation also shows an early version of the HUD and debug values for ball size and the length of the beam.

![EMOJI](https://cdn.gingerbeardman.com/images/posts/yoyozo-emoji.gif#playdate)

The finishing touches (not shown in the above animation) were to add some small amount of *pseudo-randomisation* to the initial rotation of the emoji, the initial "colour" of each particle, and changing the coordinates of each point slightly so they appear more organic and move at slightly different speeds. I eventually settled on over a dozen such pixel patterns in the game (how many have you spotted?). Once your score is higher than 50M points every explosion is an emoji! You can [read about that in the game manual](https://play.date/games/yoyozo/#gameListingMoreInfo).

----

## Pseudo-random?

I try to limit my use math.random values if I can help it, or at least use it in controlled way. I already use that for the positions of the stars, so if I also used it for explosions that would mean it would become far less controlled. Controlling the use of random is important in making a game system deterministic, if you want it to react the same way every time. 

If you're wondering how you can get pseudo-random values, the main method I use is a trick I learned from the old arcade game [Flicky (1984, SEGA)](/2011/10/26/flicky-1984/) which is a game [I own as a physical cabinet](https://www.flicky1984.com/post/709058873877790720/just-a-quick-reminder-that-you-can-play-my-flicky). Anyway, in Flicky there is a diamond that appears under seemingly random conditions.

> One of the MAME programmers was kind enough [reverse engineer Flicky on my behalf and figured out what makes the diamond appear](https://www.flicky1984.com/post/54534135892/the-best-jewel-thief-in-the-world). It turns out the diamond will appear only if you knock out an enemy cat and it disappears outside of the centre third of the play area *and* if the x coordinate at which the cat finally comes to rest is even. So, about 50% chance *but* only if you position the screen correctly during play.

So, taking a cue from that wonderful Flicky logic, I use modulus—which returns the remainder of a division—as my main mechanism of generating pseudo-random values. It ensures a value in the range *(0,n-1)*. They key thing to note is that if you base it on values in your game system that are constantly changing you can get seemingly random values that have the benefit of being deterministic if the player is skilled enough at repeating their inputs. The deterministic thing is how pretty much all the old school arcade games operated from Pac-Man to Flicky and more.

Common game variables I use are: game tick (my alternative to timer), x-coordinate, y-coordinate, speed, angle, or combinations of more than one of these. I used this approach in YOYOZO for the starfield particles, and in [Sparrow Solitaire](/2023/04/13/sparrow-solitaire-for-playdate/) for the pseudo-random falling particles that make up the [dynamic weather effects](https://www.reddit.com/r/PlaydateConsole/comments/12vcrm6/dynamic_weather_effects_and_more_in_the_sparrow/).

----

## Playdate particles

There are [one or more libraries](https://github.com/PossiblyAxolotl/pdParticles) available that can be used to manage particles in a performant way on Playdate. Though I tend to code my own system that is bespoke to the game I'm working on at the time (I start each game from a blank file and use minimal libraries, force of habit). But the important thing for such limited platforms, especially when using Lua, is to use a pool of particles so that you're not constantly creating and destroying particles which would wreak havoc on performance through overuse of Lua'a garbage collector.

----

### Further reading

* [YOYOZO (or, how I made a Playdate game in 39KiB)](/2023/11/21/yoyozo-how-i-made-a-playdate-game-in-39kb/)
* [YOYOZO manual/player's guide](https://play.date/games/yoyozo/#gameListingMoreInfo)
