---
layout: post
title: "Macintosh Magazine Media: 1 million files"
date: '2025-03-28T16:57+00:00'
tags:
- macintosh
- mmm
- patreon
- history
- magazine
- marchintosh
- preservation
nouns:
- Macintosh Magazine Media
- Macintosh
- Windows
- Hybrid
- Win/Mac
image: /images/posts/mmm-scatter.png
featured: false
pinned: false

comments: https://twitter.com/gingerbeardman/status/1905668214375219262

---

I am proud to announce that my [Macintosh Magazine Media project](/2021/10/30/macintosh-magazine-media/) has surpassed my self-imposed goal of 1 million files, an achievement that fills me with both immense satisfaction and slight bewilderment. If you've never heard of it before: it's an archive of vintage media containing mostly Macintosh files sourced from Japanese magazines, featuring files from all over the world. A time capsule for vintage Macintosh fans. Many thanks to [my Patreon subscribers](https://patreon.com/gingerbeardman) for their support!

## Status report

The archive as it stands (updated March 2025):

*   date range: 1991–2002
*   total media: 500 discs
*   total files: 1,086,536 files

<!--
The archive as it stands (updated July 2024):

*   date range: 1991–2002
*   total media: 461 discs
*   total files: 998,512 files
-->

![PNG](/images/posts/mmm-scatter.png "Distribution of discs by month")
{:.tofigure}

## New discs

Multiple new discs were added, almost all of them are Macintosh, or Hybrid Mac/Win, but there are a couple of Windows-only discs in there:

- Acara Super CD (1998-12)
- Acara Super CD (2000-07)
- CD-ROM MACLIFE 131 (1999-07)
- CD-ROM MACLIFE 132 (1999-08)
- CD-ROM MACLIFE 133 (1999-09)
- CD-ROM MACLIFE 141 (2000-05)
- CD-ROM MACLIFE 152 (2001-04)
- Create on a computer: New Year’s Card 1999
- Create on your Mac: New Year’s Card 2000
- Gokuraku Paradise Theater (1994-10) 2xCD
- Mac Fan Internet CD-ROM (1997-12)
- Mac Fan Internet CD-ROM (1999-04)
- Mac Ga Ichiban! Vol. 50 (1998-11)
- Mac Ga Ichiban! Vol. 59 (1998-08)
- Mac100% Vol.7 (1998-07)
- Mac100% (1999-01)
- MacPeople (1998-02-15)
- MacPeople (1998-04-15)
- MacPeople (1998-06-15)
- MacPeople (1998-08-01)
- MacPeople (1998-08-15)
- MacPeople (1998-09-15)
- MacPeople (1998-10-15)
- MacPeople (1999-05-15)
- MacPeople (1999-06-01)
- MacPeople (2000-08-01)
- MacPeople (2002-03-15)
- MacPeople (2003-05-01) 2xCD
- TECH Win (1999-08) 2xCD
- Tsukaeru ikinari dekiru homupejipasokon BOOKS 8 (1998)

I also indexed the latest Japanese Macintosh magazine media from redump.

## The process

For this many CDs we are talking multiple days of busy work to prepare them for sharing.

If you’re interested in the “process” for each CD here it is:

1. Find the CD available for sale in Japan (they're getting harder to find)
1. Purchase it with cold hard cash
1. Wait for delivery (I delay shipping until I have enough items to make it worthwhile)
1. Dump the CD using a suitable reader (fwiw [redump](http://redump.org) project is very specific)
1. Index the CD filesystem (I created my [own software stack](/2022/03/31/working-with-classic-macintosh-text-encodings-in-the-age-of-unicode/) for this)
1. Redo dump of any bad discs (there are always some!)
1. Scan the CD artwork
1. Prepare the upload and metadata .csv for [internetarchive cli tool](https://archive.org/developers/internetarchive/cli.html)
1. Bulk upload (this takes an absolute age, 30–60 mins per CD)
1. Redo upload of any failed items (the cli is very error prone)

I'm not sure I'll buy any/many more discs, but never say never!

## Searching the collection

All disc ISO with text listings are available for download at [Internet Archive](https://archive.org/details/@gingerbeardman), but wait a minute!

Using my search engine ([read more](/2025/01/10/macintosh-magazine-media-search-engine-update/) about that) you can search by regex for file/directory name, file type, creator code: [gingerbeardman.com/mmm/](https://www.gingerbeardman.com/mmm/)

Or you can use DiscMaster to search inside content and grab individual files without having to download the whole ISO: [discmaster.textfiles.com](https://discmaster.textfiles.com)

## Interesting finds

- [HyperCard Hanafuda](https://blog.gingerbeardman.com/2021/10/31/hypercard-hanafuda/)
- [Mouse-controlled Super Mario Kart clone for classic Macintosh](https://blog.gingerbeardman.com/2021/10/31/mouse-controlled-super-mario-kart-clone-for-classic-macintosh/)
- [Roly-Polys World Tour (Demo)](https://blog.gingerbeardman.com/2021/11/01/roly-polys-world-tour-demo/)
- [AsistantPickle desktop toy for Macintosh](https://blog.gingerbeardman.com/2021/11/20/asistantpickle-desktop-toy-for-macintosh/)
- [IntelligentPad: component-based drag-and-drop software creator](https://blog.gingerbeardman.com/2023/05/17/intelligentpad-component-based-drag-and-drop-software-creator/)
- [“The Famous F40” vector illustration by David Rumfelt](https://blog.gingerbeardman.com/2023/07/15/the-famous-f40-vector-illustration/)
- [See the sky: Thoru Yamamoto’s Christmas story, for Playdate](https://blog.gingerbeardman.com/2023/12/16/see-the-sky-thoru-yamamoto-christmas-story-for-playdate/)

## Further reading

- [I’m preserving vintage Macintosh magazine media](https://blog.gingerbeardman.com/2021/10/30/macintosh-magazine-media/)
- [Macintosh Magazine Media: search engine update](https://blog.gingerbeardman.com/2025/01/10/macintosh-magazine-media-search-engine-update/)
- [Working with classic Macintosh text encodings in the age of Unicode](https://blog.gingerbeardman.com/2022/03/31/working-with-classic-macintosh-text-encodings-in-the-age-of-unicode/)
- [Japanese language support on Classic Macintosh](https://blog.gingerbeardman.com/2023/11/07/japanese-lanuage-support-on-classic-macintosh/)
