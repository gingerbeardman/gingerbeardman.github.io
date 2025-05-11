---
layout: post
title: "Abandoned project: Band-kun/Beatnik for Playdate"
date: '2025-05-11T17:58+01:00'
tags:
- playdate
- games
- videogame
- abandoned
- bandkun
- beatnik
nouns:
- Koei Tecmo
- Koei
- KOEI
- Band-Kun
- Band-kun
- Beatnik
- PC-98
- Ko Shibusawa
- Electronic Arts
- Twitter
- Panic
- Playdate
- New World
- BAND-O-MATIC
- 'Bender 2: Bend Harder'
featured: false
pinned: false
image: /images/posts/band-kun-02.png
carousels:
  - images:
    - image: https://cdn.gingerbeardman.com/images/posts/band-kun-01.png
    - image: https://cdn.gingerbeardman.com/images/posts/band-kun-02.png
    - image: https://cdn.gingerbeardman.com/images/posts/band-kun-03.png
    - image: https://cdn.gingerbeardman.com/images/posts/band-kun-04.png
    - image: https://cdn.gingerbeardman.com/images/posts/band-kun-05.png
    - image: https://cdn.gingerbeardman.com/images/posts/band-kun-06.png
    - image: https://cdn.gingerbeardman.com/images/posts/band-kun-07.png

comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/1921612708555698401
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3lovwtlg3vc2x
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/114490286456074030

---

Back in November 2020 I was exploring the [PC-98](https://en.wikipedia.org/wiki/PC-98) back catalog, and stumbled across a strange game called [Band-kun](https://www.mobygames.com/game/155798/band-kun/). Strange in that it's a 1-bit black and white game on a platform that was capable of colour, and also because it's a hybrid adventure/management/music/rhythm game. [I was smitten](/2020/12/16/band-kun-musician-simulator-1990-koei/).

{% include carousel_multi.html height="62.5" unit="%" duration="7" number="1" %}

----

## The Idea

I was already developing for the [Playdate](https://play.date/), a modern 1-bit platform, and it struck me as the perfect opportunity to create a remaster of the game. So, I set my sights on securing the license. The original title was developed by Koei—Japan’s equivalent to Electronic Arts—a giant now known as Koei Tecmo, whose owners are worth hundreds of billions. The game itself is credited to one of those owners, Yoichi Erikawa, who used the pen name Ko Shibusawa. I had a feeling this wasn’t going to be easy.

![IMG](/images/posts/band-kun-playdate.gif#playdate)

I published a thread about the game and my prototype [on Twitter](https://twitter.com/gingerbeardman/status/1339232766861451278), introducing the game to the West, which became hugely popular and remains my most popular post and thread of all-time (~20 years, for me) at over 450K impressions. I also mirrored the thread as a [blog post](/2020/12/16/band-kun-musician-simulator-1990-koei/) which is no doubt an easier read.

The idea for the remaster was to not remake the original game at all, but rather to take the vibe and bring it into the modern era. So there were no plans to use the original music, or perhaps even the [original graphics](/2021/01/03/extracting-images-from-band-kun/). I would leverage modern device capabilities and input methods to create a totally new experience a million miles away from the limited original game from 1990.

----

## Challenge Accepted

A couple of days later, December 18th, [Cabel Sasser](https://cabel.com) of [Panic](https://panic.com) reached out:

> "Hey Matt, I love a good challenge — do you want me to actually try to make contact with someone at Koei? Regarding Band-Kun? (Philosophically, the idea of reviving a long-forgotten PC Koei title is just enormously interesting to me ahhahah)".

By 25th December—thanks Santa!—Panic's guy in Japan, Noby, had a breakthrough finding contact details and sent an email to Koei. Their reply came quickly on 27th December when a lovely person in Koei's IP management department replied:

- they knew of the Playdate and were waiting patiently to pre-order
- they had the licence for the Band-kun game (music to my ears!)
- there was an outstanding question about the music rights
- and some remaining business questions for Panic to answer

The project then became in need of a budget to be set: for both the licence and for me to build it. Even with this discussion happening in late December 2020, it was suggested that the game could feature in Season 2. And that, unfortunately, was the last I heard of it. Sad, and surprising, but true.

----

Not one to give up so easily I submitted the game twice, kind of, in pitches to Panic. 

## Interim Pitch: Band-kun

- June 2022
- to ignite the licence discussion
- a reimagining of the original game for a modern device
- as a team effort with musician and tools programmers; to hit a deadline
- suggested budget was included
- [pitch pdf](https://cdn.gingerbeardman.com/files/playdate-pitch-2022-band-kun.pdf) (191 KB)

[![IMG](/images/posts/abandoned-playdate-band-kun.png)](https://cdn.gingerbeardman.com/files/playdate-pitch-2022-band-kun.pdf)

----

On 1st May 2024 I sent a message to Panic stating that I was still interested in making the game and to check the status of the project, but never received a reply.

----

## Season 2 Pitch: Beatnik

- July 2024
- an all-new game
- let's forget about the IP
- completely revised and redesigned
- as a solo endeavour; I was confident I could complete the new scope myself
- no budget was required
- [pitch pdf](https://cdn.gingerbeardman.com/files/playdate-pitch-2024-beatnik.pdf) (185 KB)

[![IMG](/images/posts/abandoned-playdate-beatnik.png)](https://cdn.gingerbeardman.com/files/playdate-pitch-2024-beatnik.pdf)

----

## Go/no-go

Neither of the pitches were successful. There was no further discussion of the licence from 2020.

Regardless, I decided that I would continue working on the game and release it myself. This was the big project I was working on pretty much exclusively from May 2024 to [October 2024](/2025/04/15/when-playdate-stopped-being-fun/). You can see elements of it in my [New World](/2025/03/11/old-codes-new-releases-for-playdate/) and [BAND-O-MATIC](https://gingerbeardman.itch.io/new-world) tech demos.

In August 2024, to test and prove some of the technology and concepts, I used some of the tooling and library code I had created for certain features in my Playdate game [Bender 2: Bend Harder](/2024/10/08/bender-2-bend-harder-for-playdate/)—an expanded version of an original game of mine from back in 2012—which I created over two weeks to take a break from work on Beatnik. [And that was the end of that](/2025/04/15/when-playdate-stopped-being-fun/).
