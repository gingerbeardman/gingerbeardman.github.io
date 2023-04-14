---
layout: post
title: Sparrow Solitaire for Playdate (Early Access)
tags:
- playdate
- mahjong
- solitaire
nouns:
- Sparrow Solitaire
featured: true
comments: https://twitter.com/gingerbeardman/status/1547342592198774787

---

This post is a history of Sparrow Solitaire, my latest game for Playdate. It started out as a prototype and was later taken on by Mac Vogelsang. We're working together to make the best ever mahjong solitaire game.

### 2021, January 10th
I'm really into Hanafuda (Japanese flower cards) and found that the 1991 Macintosh game Shanghai featured tiles based on Hanafuda. I booted it up [at Internet Archive](https://archive.org/details/ShanghaiIIDragonsEye) and had a quick play.

For the next week or so I went down the Shanghai rabbit hole. Its history is [quite interesting](http://home.halden.net/vkp/vkp/origin.html) and fraught with drama so I won't repeat it here.

### 2021, January 19th

This is the date on the first screenshot I captured of my prototype mahjong solitaire game for Playdate.

![PNG](/images/posts/sparrow-early-1.png#playdate)

I tested different size tiles until I found the sweet spot that could fit a whole layout on the Playdate's 400x240 screen.

![PNG](/images/posts/sparrow-early-2.png#playdate)

The following day I drew a set of tiles and it started to look like a real game! I called it *Sparrow Solitaire* because the sound of mahjong tiles rubbing together is said to sound like sparrows chirping. In fact, the original Chinese name for mahjong reused the word for sparrow. So this thing had a name at least!

![GIF](/images/posts/sparrow-my-tiles.gif#playdate)

I spent the next month or so, on-and-off, programming object-oriented Lua to manage the game state, tiles, layout, dealing, sound effects and I drew a handful more tile sets. 

Daily Driver was my focus and this little puzzle game was supposed to be a short palate cleanser to keep things interesting. When it turned out to be more involved I lost momentum and abandoned it. My todo list at that time was as follows:

```
Todo
[ ] calc free data per half position
[ ] sound based on free data
[ ] controls to move prev/next tiles
[ ] controls to select tiles
[ ] match tiles
[ ] face down all tiles
[ ] face up free tiles
[ ] editor
[ ] optimise animations

Done
[X] sound effects
[X] define layouts to fill screen
[X] animate tiles
[X] multi-dimension array (as autotable)
[X] ability to reinit table
```

What an optimistically short set of todo items! That's game programmers for you.

### 2022, April 15th

When Playdate launched I bundled the game in my pack of Prototypes and tried to forget about it.

### 2022, May 12th

I couldn't stop thinking about the game and it seemed a shame that I had put so much effort into it and then abandoned it. But I'm a realist and I knew that I would never finish it myself. So I thought it would be fun to offer it out to any interested developers and see if they wanted to finish it. No replies to [this tweet](https://twitter.com/gingerbeardman/status/1524724007827914752), but the same message on the Playdate Squad Discord server had some responses. I decided to hand over to Mac Vogelsang ([@vogelscript](https://twitter.com/vogelscript)) as I had really enjoyed his Bird and Beans game. So a few days later he began work "finishing off" my programming. What an understatement.

### 2022, July 13th

For the last two months Mac has worked his magic on the game and I've tagged along for the ride. Having worked on my own for so long I wondered what it would be like working with somebody else. It was more fun and productive than I ever could have expected! Mac brought the best out of me, pushing me to achieve better results than I would have otherwise been happy with. Mac also pushed himself, creating what I believe to be a world-first method of cursor control in a mahjong solitaire game, made possible by two properties of Playdate: its fast processing speed and its lack of touch screen!

Out of this partnership not only comes a great game, but some new offshoot projects like an Animation tool (from me), a board game (from Mac), and a Game Options class (Mac's magic reworking of one of my old classes) and several new fonts some of which are used in Sparrow Solitaire. These projects should all release in the near future.

At this point Sparrow Solitaire is really Mac's game, albeit one that happens to have my graphics and some of my programming DNA in it, so it's fitting that it will live on his itch.io page.

![GIF](/images/posts/sparrow-game.gif#playdate)

## Launch Animation

![GIF](/images/posts/sparrow-launch.gif#playdate)

## Download

Update, April 2023: the full version of Sparrow Solitaire for Playdate is [available now on itch.io](https://vogelscript.itch.io/sparrow-solitaire) and you can also [read about what to went into the full game](https://vogelscript.itch.io/sparrow-solitaire/devlog/515286/sparrow-solitaire-v10).
