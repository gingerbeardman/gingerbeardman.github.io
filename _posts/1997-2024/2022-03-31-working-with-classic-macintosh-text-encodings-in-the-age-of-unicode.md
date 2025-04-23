---
layout: post
title: Working with classic Macintosh text encodings in the age of Unicode
modified: '2024-03-25T14:05+00:00'
date: '2022-03-31T12:34+00:00'
tags:
- macintosh
- marchintosh
- patreon
- history
- hack
- preservation
nouns:
- DiskCatalogMaker
- HFSExplorer
- hfsutils
- HFS Standard
- BBEdit
- Nisus
- Tex-Edit Plus
- LightWayText
- Cyclone Classic
comments: https://twitter.com/gingerbeardman/status/1509533825520443393

---
One of my "lockdown projects" is a collection of media from vintage Japanese Apple Macintosh magazines. These are mostly CD-ROMs but there are some floppy disks too. I started the project in July 2021 and have so far collected an archive of over 250 items spanning just over a decade, uncovering many long lost classic pieces of software in the process. I call the project [Macintosh Magazine Media](/2021/10/30/macintosh-magazine-media/) and contributions are always welcome.

## The Relentless March of Progress

Accessing vintage Macintosh media from the "classic" era is more difficult than it should be. This is largely due to Apple removing support for accessing the HFS Standard format in modern macOS, since Catalina. My guess is that the feature comprised of 32-bit code and the move to 64-bit and Apple Silicon meant it would have to be rewritten, so instead they removed it completely. You can still access HFS Standard disks in Mojave, but there are problems when exotic text encodings are used.

## Before Unicode

Classic Macintosh was created before the world moved to Unicode. But of course many languages existed and people speaking those languages wanted to use Macintosh computers. So Apple were forced to provide support for those languages. They did so by offering their system software in multiple languages. If you think of how embedded Unicode is in our software today, it was the same sort of thing: only repeated for each individual language!

For European, Western, or Latin-based languages you'd be forgiven for not noticing the differences as most of the characters are the same. The problem comes with non-Latin languages, like Japanese.

## Opening Pandora's Box

I figured out quickly that the correct way of viewing the contents of media containing Japanese files was to use a Japanese version of Macintosh system software. It sounds obvious in hindsight, but it was not at the time! Seeing as I prefer System 7 to later versions I installed System J-7.5.3 in the BasiliskII emulator, alongside my existing systems so I can switch to it on demand. Emulation makes the whole thing so much easier by removing the friction of old, slow, possibly failing hardware.

There are many apps capable of cataloguing removable media, but it took me a long time to find one that could cope with Japanese. I learned an important lesson here: if you're dealing with Japanese look for apps made in Japan! More on that later. [DiskCatalogMaker](https://macintoshgarden.org/apps/diskcatalogmaker) (formerly DiskChoboMaker) was the cataloguing app that I settled on that worked for my needs. In fact, it's still being updated today and can even import files created with much older versions, so I can copy my database from classic Mac OS to modern macOS and "it just works", at least it does if you do that with modern macOS set to Japanese locale. That said, as good as DiskCatalogMaker is it still has problems with some filenames resulting in missing or duplicate entries, it uses a proprietary database format, it has cumbersome way of exporting plain text listings, and does not support bulk operations. I did go so far as scripting an automated bulk export solution using [Keyboard Maestro](https://www.keyboardmaestro.com) but that was slow and tedious to do whenever there were changes or additions to my collection.

## DIY

With no better solutions to be found the only remaining choice was to do it myself. This decision was made in October 2021.

I found two apps that can be used on modern operating systems to view HFS format media, both of which seemed like good places to start. I didn’t want to reinvent the wheel:

* [HFSExplorer](https://github.com/unsound/hfsexplorer) - a Java GUI app
* [hfsutils](https://www.mars.org/home/rob/proj/hfs/) - a command-line suite of tools

### HFSExplorer

This app opened a lot of my HFS media, but failed on others for reasons I didn’t immediately understand. [I field an issue on GitHub](https://github.com/unsound/hfsexplorer/issues/15) and to my surprise it was quickly resolved. This led to the discovery that the filenames on the media were in MacJapanese text encoding, so that capability was also added to HFSExplorer. Things went well for a while until certain other media failed to be read completely. Characters in certain filenames were out-of-range for MacJapanese. A [workaround](https://github.com/unsound/hfsexplorer/issues/26) was to read the filenames as MacJapanese and drop down to MacRoman for any filenames with out-of-range characters. This worked well enough.

At this point my attention moved on to wanting to search the contents of all media. It was possible with DiskCatalogMaker but I was limited to using apps on classic Macintosh or modern macOS. Ideally I'd want the search to be web based. So I needed to generate text file listings of each disk. This was the end of the line for HFSExplorer for me, as I found no easy way of exporting full listings.

> ### Aside: out-of-range characters
>
> You might be wondering: how can there be out of range characters in text of a specified encoding, and what the hell are they? Well, there are a few scenarios that cause these problem characters to appear in filenames:
>
> 1. Files originating on other systems that are encoded as MacRoman, Shift-JIS or some other encoding can be copied onto a computer running MacJapanese, but the filenames are not re-encoded.
> 2. Pressing forward delete key on an extended keyboard whilst renaming a file inserts an invisible DEL control character into the filename, rather than doing any actual deleting!

### hfsutils

Next, `hfsutils`. It's trivial to export the contents of a disk image as a text file—using the command line tool `hls`—but I couldn't make sense of the contents. It didn’t seem to adhere to any one encoding. I had no luck with the best text editors on classic Mac OS: BBEdit, Nisus, Tex-Edit Plus, even Japanese apps like LightWayText couldn't deal with the text. The same can be said for a bespoke text conversation app called Cyclone Classic, but it hit the same problem as HFSExplorer when it encountered out-of-range characters.

The modern tool `iconv` couldn't deal with the listings as it has no support for MacJapanese. I could get by processing as Shift-JIS and forcing unsupported characters to be ignored. But it wasn't a good enough solution: MacJapanese is not Shift-JIS.

Thinking back to using Japanese apps to work with Japanese text I looked for any modern Japanese text editors for macOS. There are a handful and I eventually stumbled across a modern Japanese text editor called [CotEditor](https://coteditor.com) which handles old Macintosh text files with aplomb. This app is now my default text file viewer and it comes highly recommended. I can’t go so far as to use it as my work editor because it doesn't support opening folders or projects containing  multiple files. It still has problems with my directory listings but at least it's a modern way to view the majority of Japanese text files.

At this point, I was at an impasse and couldn't think of any way to proceed. Eventually, after ruminating in the problem for some months I had a couple of breakthroughs.

### ScummVM

What on earth does a point-and-click video game engine have to do with text encoding? Well it turns out that in July 2021, at the same time I was trying to solve this problem, the ScummVM team were also trying to solve it! They needed a tool to be able to handle Japanese media that contained games the wanted to run on their engine. Their solution is [dumper-companion](https://github.com/einstein95/scummvm/blob/master/devtools/dumper-companion.py) and once it had [support for MacJapanese added](https://github.com/scummvm/scummvm/pull/3485),in the same way it had been for HFSExplorer, it was a reasonable solution. But it was far too slow, reading the whole disk image into memory at once—no mean feat for a bunch of 650MB CD-ROM images—and it also had the same problem with the out-of-range characters.

### Tickle

From time to time I would search for possible ways to deal with MacJapanese encoding. One day in November 2021 I stumbled upon Tcl (pronounced "tickle") which has support for a whole bunch of text encodings, including MacJapanese! What's more [the encoding maps were written by Apple](https://opensource.apple.com/source/tcl/tcl-10/tcl/tools/encoding/macJapan.txt) in the mid-‘90s, so it's likely to be as correct as can be. Note: Peter Edberg, who wrote the Tcl mappings, is still working at Apple after almost 35 years!

The Tcl solution to convert from MacJapanese to Unicode is a beautiful one-liner:

    puts out.txt [encoding convertfrom macJapan [read in.txt]]

...so much effort to arrive at this simple solution!

## convert2unicode

From here I wrapped the Tcl one-liner in a bunch more script so that it can handle both files and directories, as well as wildcards and stdin. It can also list all known encodings, and can take an argument representing the source encoding (of course it defaults to MacJapanese). Essentially, I made the one-liner into a proper command-line tool.

{% gist 4a3b66236e018b72b32ca17953474e12 %}

I have a secondary [shell script](https://gist.github.com/gingerbeardman/892e2c92b6fe17838a1443608c111a56) that runs `convert2unicode` against my drive full of disk images, along with some housekeeping and maintenance functions. The whole process of listing the disks and converting the resulting text files takes less than 30 seconds for 250 items.

### Let there be search

So, at this point I can generate text files with the contents of each disk, but to get sensible search results each filename would have to have its full path. So I rolled my sleeves up and [forked hfsutils to add a "full" output mode](https://github.com/gingerbeardman/hfsutils) to display the filenames in exactly  the way I needed. My C skills were really rusty so this work was quite a challenge.

Finally, I created a fairly naïve [web-based search engine](https://www.gingerbeardman.com/mmm/) that can search through hundreds of files, totalling almost half a million lines of text, in a fraction of a second.

## Future

I'd like to offer the ability for individual files to be extracted from a disk image so they can be downloaded by interested parties. This would be similar to the way Internet Archive allows individual files to be downloaded from inside ISO disk images. However, this involves further challenges with text encoding and I would also have to address potential bandwidth concerns.

Whilst the Tcl solution is great, it is not quite perfect. Currently the behaviour of the `encoding convertfrom` command silently ignores problem characters. [Future versions of Tcl will have the option of displaying errors](https://core.tcl-lang.org/tcl/info/535705ffffffffff). I'll keep an eye on that progress and upgrade my scripts when the time comes.