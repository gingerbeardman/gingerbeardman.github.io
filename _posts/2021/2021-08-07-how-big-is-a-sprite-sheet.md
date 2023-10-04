---
layout: post
title: 'Daily Driver: How big is a sprite sheet?'
tags:
- dailydriver
- playdate
- graphics
- cars
- rendering
nouns:
- Playdate
- Daily Driver
- Jono
comments: https://twitter.com/gingerbeardman/status/1424070758268129281

---
Since the early days of the project I've been generating the car sprites by rotating the 3D model 360 degrees in a sequence of 32 steps. It works well and I hadn't given it much thought. Until over on the [unofficial Playdate Discord server](https://discord.gg/zFKagQ2) user Jono showed of a hot-dog trick rendered using 64 steps which looked super smooth! This got me thinking about increasing the number of rotation steps used in my workflow for Daily Driver.

## Code changes

I had to do a bit of code changing as I had used the value `32`, or the angular equivalent of `11.25` (degrees), in a few places throughout my code. Once I'd changed those to refer to a single variable I was set. I can now run the game with sprites of any number of steps.

## Rendering changes

Similar changes were also needed in my rendering workflow, moving any hardcoded steps or angle values into a variable. After replacing hard-coded magic numbers with variables, I spent way too long figuring out why angles were being rounded down to the nearest integer. Eventually I realised that in shell scripts the calculation `$( 360/64 )` gives an integer result of 5, whereas  `$( 360.0/64 )` gives the more accurate floating point result of 5.625.

Interestingly, I also needed to increase my filename pattern from `%03d` to `%04d` as there are now thousands of images being processed.

## How high?

After making the necessary changes to my workflow it is very easy to render a new set of sprites. But what number of steps to use? My immediate thought was to simply double it to 64, which is higher than the frame rate I'm using and the result was definitely smoother.

After this [Neven Mrgan](https://twitter.com/mrgan) asked if I'd explored whether there was a performance limit or upper boundary? I hadn't but it sounded like a fun thing to explore.

But why go higher? Well, even if we have more frames of animation that than refresh rate, we can still gain in terms of accuracy. The more steps there are the more discrete angles we can show the car pointing. That was good enough reason for me to try it out.

I spent some time exporting a sprite at 32, 64, 90, 128, 180, 256, 360-steps to compare not only the smoothness of the animation but also other related implications.

## Selected results

Most modern browsers are well-behaved enough to only play an Animated GIF if it is on the page. So you'll probably need to force reload the page (hold shift and click reload) to synchronise one or more of the below animations.

![32 rotation steps](/images/posts/daily-driver-rotation-steps-32.gif#playdate "Above: 32 rotation steps. After I've mentioned looking for the "judder" you won't be able to unsee it")
{:.tofigure}

![64 rotation steps](/images/posts/daily-driver-rotation-steps-64.gif#playdate "Above: Even with twice as many rotation steps there's still a slight judder")
{:.tofigure}

![90 rotation steps](/images/posts/daily-driver-rotation-steps-90.gif#playdate "Above: 90 rotation steps give us one sprite every 4 degrees, judder becomes less noticable")
{:.tofigure}

![180 rotation steps](/images/posts/daily-driver-rotation-steps-180.gif#playdate "Above: 180 rotation steps give us one sprite every 2 degrees, judder is even less noticable")
{:.tofigure}

![360 rotation steps](/images/posts/daily-driver-rotation-steps-360.gif#playdate "Above: 360 rotation steps give us one sprite for every degree, as good as it gets")
{:.tofigure}

## Stats

| steps # | render time Secs | frames # | width PX | pixels W×H | png KB | pdt KB | ram Bytes | ram MB |
|-----------|-------------|----------|-------|------------|--------|--------|-----------|--------|
| 32        | 30s         | 704      | 1216  | 1016576    | 48     | 39     | 147404    | 0.15   |
| 64        | 59s         | 1408     | 2432  | 2033152    | 64     | 78     | 294807    | 0.29   |
| 90        | 82s         | 1980     | 3420  | 2859120    | 111    | 107    | 414572    | 0.41   |
| 128       | 114s        | 2816     | 4864  | 4066304    | 143    | 140    | 589614    | 0.59   |
| 180       | 159s        | 3960     | 6840  | 5718240    | 174    | 188    | 829145    | 0.83   |
| 256       | 192s        | 5632     | 9728  | 8132608    | 209    | 227    | 1179228   | 1.18   |
| 360       | 285s        | 7920     | 13680 | 11436480   | 240    | 264    | 1658290   | 1.66   |

##  Charts

![PNG](/images/posts/daily-driver-rotation-steps-charts.png)

## Implications

The increase from 32-steps to 360-steps is echoed by an increase of around a factor of ten across each of rendering time, number of frames and memory usage.

In the above table we can see that related stats increase pretty much linearly, with a slight downward trend for file sizes and a slight upward trend for everything else.

The increased smoothness is great, and very easy to notice. The benefits of the increased smoothness becomes more less noticeable with each increase in step count. However, it's important to remember there are other implications:

- Rendering time
- File size
- Memory usage
- Performance in-game

### Rendering time
This increases from what I would call a quick 30 seconds per render at 32-steps, to an extremely slow 284 seconds (4m45s) at 360-steps. For a full set of renders it's not as easy as multiplying that number, there is some overhead that goes with it. This means a real world increase from ~20 minutes to multiple hours, which could be a problem. Cars aren't generally re-rendered very frequently but when I do render them I do it many times as I make minor tweaks. So, at this point all numbers of steps are on the table but with a preference for those with shorter rendering times.

### File size
Playdate's compiled image format is very similar in file size to an optimised PNG. The file size increases by slightly more than double as the number of steps is doubled. Even the largest size at 360-steps is only 264KB (0.26MB) which seems OK in the grand scheme of things. All numbers of steps are on the table.

### Memory usage
As we can see by the table below, memory usage is quite optimised on Playdate. The system is clever enough to trim transparent areas from cells of sprite sheets and store the offset of the image instead of the complete raw bitmap data. For this example sprite memory usage is roughly `(W×H÷8)*1.16` rather than the expected `(W×H÷8)*2.0`. The car sprite is my largest occupier of memory. Only one is loaded at a time and even at 360-steps it fits comfortably in the Playdate's 16MB RAM. All numbers of steps are on the table.

### Performance in-game
I'm targeting a refresh rate of 60fps on the device, so it's important for me to check that any changes to rendering don't have an adverse effect on performance. At 32-steps the car sprite was changed roughly every second update, with 64-steps and higher the car sprite will be changed every update. Looking at performance in broad terms, there does seem to be a small hit when using the large numbers of steps. It doesn't prevent me hittong 60fps, but it does leave me less time to do other things I have planned.

## Final choice?
If you've read this far you're probably wanting to know my choice. How many steps did I choose? Well, the jury is out. This is the sort of thing I'll have to live with for a while before I settle on a choice.

I'll probably end up going somewhere in the middle with a choice that gives increased smoothness and accuracy, renders fairly quickly and doesn't affect performance in-game.
