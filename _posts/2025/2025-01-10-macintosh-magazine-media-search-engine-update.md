---
layout: post
title: 'Macintosh Magazine Media: search engine update'
date: '2025-01-10T19:09+00:00'
tags:
- history
- macintosh
- magazine
- mmm
nouns:
- Windows
image: /images/posts/mmm-redux.png
redirect_from:
- /2025/01/10/macintosh-magazine-media
comments: https://twitter.com/gingerbeardman/status/1877812719262286115
style: |
  img {
    width: 295px;
    border: 1px solid #EEEEEE;
    box-shadow: 0 0 50px #DADADA;
  }

---

Some time in 2020 I started [collecting CD-ROMs from old Macintosh magazines](/2021/10/30/macintosh-magazine-media/). Whilst the discs are of Japanese origin—because the supply was plentiful during the extended spring clean of lockdown—they contain a great deal of software from all over the world and a lot of it is therefore in English. They're an amazing source of old gold: sofware, images, demos, documentation, and many other files. As of today I have 460+ discs totalling almost *1 million* files.

After the collection was well and truly established I decided to share the contents in a number of meaningful ways to help other preservationists and old Macintosh enthusiats. Firstly, I uploaded [pretty much all of my discs to Internet Archive](https://archive.org/details/@gingerbeardman?and%5B%5D=mediatype%3A%22software%22&and%5B%5D=language%3A%22Japanese%22) and I also managed to [dump the directory listings from these old discs](/2022/03/31/working-with-classic-macintosh-text-encodings-in-the-age-of-unicode/) and created a [search engine for lookups](https://www.gingerbeardman.com/mmm/) by file name, type, creator, date.

Anyway, in December 2024 I migrated my websites to an arm64-powered server and whilst doing so I updated a bunch of old pages. The MMM search engine was updated to provide a faster, better, more user-friendly experience on mobile. It now features quicker searching (thanks to multi-core ARM with more RAM for ripgrep), more legible results, and a tappable emoji tooltip to show which. If you run a query with multile thousands of results, the bottleneck will now be browser rendering time. So in that extreme case I would recommend using paged results. 

I did experiment with a database version of the search but query time was much slower and server costs were much higher. I can't beat the performance of ripgrep, that's for sure!

Try the search here: [gingerbeardman.com/mmm/](https://www.gingerbeardman.com/mmm/)

----

![IMG](/images/posts/mmm-redux.png "A sample search for 花札 (Hanafuda)")
{:.tofigure}
