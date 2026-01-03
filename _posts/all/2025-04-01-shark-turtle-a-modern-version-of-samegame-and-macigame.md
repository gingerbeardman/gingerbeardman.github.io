---
layout: post
title: "Shark Turtle: a modern version of SameGame/MaciGame"
date: '2025-04-01T19:44+01:00'
modified: '2025-04-01T23:41+01:00'
tags:
- macintosh
- samegame
- macigame
- marchintosh
- preservation
- gamedev
nouns:
- MaciGame
- Macintosh Magazine Media
- Macintosh
- macOS
- Windows
- Shark Turtle
- SameGame
- Chain Shot!
- ChainShot!
- Playdate
image: /images/posts/sharkturtle-icon.png
featured: false
pinned: false

comments: https://twitter.com/gingerbeardman/status/1907140962653991086

---

I'm releasing an expanded version of my game Shark Turtle for macOS and Windows. Grab it at itch: [gingerbeardman.itch.io/shark-turtle-desktop/](https://gingerbeardman.itch.io/shark-turtle-desktop/)

The result is a feature-rich, native desktop version of SameGame with fast calculation, animated block removal, mouse/keyboard control, incremental scoring, variable grid sizes each with their own high score table, multi-level undo, lots of options, and great music. It's a lot of fun and ideal to play little-by-little when you have a spare moment, as you dictate the pace of the game turn-by-turn.

![IMG](/images/posts/sharkturtle-macos-lite.png)

----

## About the icon

I couldn't find the exact licence for Google's Emoji Kitchen, it's either [SIL as part of the Noto font](https://github.com/googlefonts/noto-emoji/blob/main/LICENSE) or [CC BY 4.0](https://developers.googleblog.com/en/updates-to-emoji-new-characters-new-animation-new-color-customization-and-more/). But I did find a [comment](https://github.com/googlefonts/noto-emoji/issues/151#issuecomment-318418911) by a Google staffer saying that it would be a good idea to draw a custom version that was less generic—I read that as unique and yours—so that's exactly what I did. There was no choice but to do this, as I needed a vector version to generate an 1024×1024px icon. I like to think that with the raised eyebrow and slight smirk there's a bit more personality in my version.

![IMG](/images/posts/sharkturtle-icon.png "My vector version of Google Emoji Kitchen’s “Shark Turtle”")
{:.tofigure}

----

## What's in a name?

This concept was originally released as [Chain Shot!](https://web.archive.org/web/20230507124114/http://www.asahi-net.or.jp:80/~KY6K-MRB/chainsht.htm) in 1985 by 森辺訓章 Kuniaki Moribe "Morisuke" and went on to become very popular, mostly through a version known as さめがめ SameGame. The game was at one time [more popular than Tetris in Japan](/2023/08/19/fake-steve-jobs-and-letters-from-bill-g/#samegame) and even made its way onto consoles like the [Super Famicom](https://retro-gamer.jp/?p=10059) and even as recent as [Wii](https://www.mobygames.com/game/55440/pop-em-drop-em-samegame/).

In English we pronounce the name as it is spelled: same game. But in Japanese it sounds just like the words “same” さめ (shark) and “game” がめ (sea turtle). A short leap from SameGame to Shark Turtle.

Perhaps the most well known version of the concept, [MaciGame](/2023/05/04/macigame-user-created-graphics/) まきがめ also riffed on this. I'm not sure of the exact meaning, but I like to think it's a clever double meaning of something cool in Japanese and it also being a game for Macintosh.

![PNG](/images/posts/macigamekoma-01-usa-chan.png#pixel "MaciGame’s classic default usa-chan tileset")
{:.tofigure}

----

## Recovering tile sets

I'd previously recovered a range of tile sets for a download pack I uploaded to [Macintosh Garden](https://macintoshgarden.org/games/macigame), but that was done in the Classic Macintosh environment so I needed to redo it on modern macOS to be able to extract the images easily.

MaciGame supported custom tile sets in three formats:

- SameGameFormat (160×64, from the PC-98 version of the game)
- SameGameFormat2 (192×64, includes additional background tiles)
- MaruSameFormat (256×65, includes connected variations and alternate palettes)

These tile sets were popular [user created content](/2023/05/04/macigame-user-created-graphics/) for 1990s Macintosh fans, given how easy it was to load up a paint app or ResEdit. They were made available for free download at online repositories like [NIFTY-Serve](https://en.wikipedia.org/wiki/Nifty_Corporation), [Info-Mac](https://en.wikipedia.org/wiki/Info-Mac), and on magazine cover mounted media around the world. I found several unique tile sets in my [Macintosh Magazine Media](/2025/03/28/macintosh-magazine-media-1-million-files/) archive of vintage CD-ROMs.

The main online source of these is at: [vector.co.jp/vpack/filearea/osx/game/puzzle/makigame/](https://www.vector.co.jp/vpack/filearea/osx/game/puzzle/makigame/) and I automated the clicking of the download buttons using a [temporary user script](https://gist.github.com/gingerbeardman/47bfd8f6b76a7f33a6262b7998994416) (gist) to redirect to the download page and then click the button. I use [PageExtender](https://apps.apple.com/gb/app/pageextender-for-safari/id1457557274?mt=12) for such things. I could have gone one level deeper by automating the clicking of all the items on the list page, but I quite like clicking through long lists.

- [user script at gist.github.com](https://gist.github.com/gingerbeardman/47bfd8f6b76a7f33a6262b7998994416)

We can expand these esoteric archives with [The Unarchiver](https://theunarchiver.com). I needed to confirm MacOS Japanese encoding for the filenames that it was unable to heuristically determine. Read more about the madness of [classic Macintosh text encodings in the pre-Unicode age](/2022/03/31/working-with-classic-macintosh-text-encodings-in-the-age-of-unicode/).

Next we can convert the PICT resources we're after with [deark](https://github.com/jsummers/deark). Deark doesn't have a recursive mode, so we need to wrap it in a one-liner:

`find . -type f -print0 | xargs -0 -I {} deark {} -k -od /destination/`

I verified those and [found](https://discmaster.textfiles.com/search?family=image&amp;widthMin=160&amp;heightMin=64&amp;widthMax=160&amp;heightMax=64&amp;dedup=dedup&amp;sortBy=itemid&amp;pageNum=0) [some](https://discmaster.textfiles.com/search?family=image&amp;widthMin=192&amp;heightMin=64&amp;widthMax=192&amp;heightMax=64&amp;dedup=dedup&amp;sortBy=itemid&amp;pageNum=0) [others](https://discmaster.textfiles.com/search?family=image&amp;widthMin=256&amp;heightMin=65&amp;widthMax=256&amp;heightMax=65&amp;dedup=dedup&amp;sortBy=itemid&amp;pageNum=0) [using DiscMaster](https://discmaster.textfiles.com/search?family=image&amp;detection=PICT%2FSaMe&amp;dedup=dedup&amp;sortBy=itemid&amp;pageNum=0). A few stranglers found on the web brought the grand total to 320 tile sets.

----

## De-duplicating

It was obvious that there were some duplicates, so what to do? My first thought was to optimise all images equally, I used [ect](https://github.com/fhanau/Efficient-Compression-Tool) command line tool for this purpose. After that, still on the command line, we can do a quick de-dupe using the [fdupes](https://github.com/adrianlopezroche/fdupes) tool. This helped me get rid of a bunch, but there were still some hanging around.

I wanted to compare files at a pixel level, so wrapped [imagemagick](https://github.com/ImageMagick/ImageMagick) in [a shell script](https://gist.github.com/gingerbeardman/31c2eabf4c39ebad0ceb9c6265afd5a6) (gist). We compare each image with every other image. I tried adding pre-checks to the script but they slowed it down and removed the ability for it to run in parallel. Keep it simple wins again.

- [shell script at gist.github.com](https://gist.github.com/gingerbeardman/47bfd8f6b76a7f33a6262b7998994416)

----

## Organising

For organisation sake I wanted to verify and categorise the dimensions of each image. I created [a shell script to tag images of specific sizes with Finder colours](https://gist.github.com/gingerbeardman/99585e86d9a6ed321a73cc5f6ab247a2) (gist). I noticed that some converted images were one pixel wider than expected, it turns out that this is a quirk in how those specific image were composed. So I coloured them red and edited them by hand after the fact.

- [shell script at gist.github.com](https://gist.github.com/gingerbeardman/47bfd8f6b76a7f33a6262b7998994416)

----

## All tile sets

Here's a video of my 5 tile sets plus the 320 classic user created tile sets. *Gotta catch 'em all!*

{% youtube pbWV13BNloA 5/3 %}

----

## Playdate

I originally wrote a version of [Shark Turtle for Playdate](/2025/03/11/old-codes-new-releases-for-playdate/) back in 2023 and released it earlier this month. The desktop version of the game is expanded and enhanced in the way that desktop apps can be. Those features took a bunch more work and I've undoubtedly been working on the platform specific stuff far more than I did on the core of the game. 

Buyers of the Shark Turtle for Playdate get the desktop version for free! Head to [this bundle](https://itch.io/s/150167/shark-turtle-double-dip).