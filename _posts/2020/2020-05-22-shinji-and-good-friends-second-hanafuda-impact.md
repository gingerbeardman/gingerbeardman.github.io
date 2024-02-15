---
layout: post
title: 'Shinji and Good Friends: Second Hanafuda Impact'
tags:
- hanafuda
- hack
- save
- patreon
- reverseengineering
nouns:
- Gainax
- 'Shinji and Good Friends: Second Hanafuda Impact'
carousel: shinji
featured: true
comments: https://twitter.com/gingerbeardman/status/1263885189211709447

---

Shinji and Good Friends: Second Hanafuda Impact is a hanafuda video game for Windows, released by Gainax in 1999. You can unlock wallpapers though beating each of the characters in the game. 

Just for fun I reverse engineered and edited the save game to unlock all the wallpapers. The save game data is not very big so I decided on a brute force approach: I beat one character to get enough save data and then set about changing and reloading it to figure out the location of everything else.

I was surprised to find the 10th image, shown large in this post, as it did not have a typical placeholder like the others. Also surprising are the reserved save slots for more (seemingly abandoned) unlockable wallpapers. 

Anyway, these wallpapers are probably new material for most Evangelion fans!

Whilst doing this hacking, I found a debug mode (dialog/speech tester) which is now documented at [The Cutting Room Floor](https://tcrf.net/Shinji_and_Good_Friends:_Second_Hanafuda_Impact).

{% include carousel.html height="75" unit="%" duration="7" %}

![PNG](https://cdn.gingerbeardman.com/images/posts/shinji-new.png "New/empty save game file contents")
{:.tofigure}

![PNG](https://cdn.gingerbeardman.com/images/posts/shinji-hacked.png "Hacked save game file contents")
{:.tofigure}
