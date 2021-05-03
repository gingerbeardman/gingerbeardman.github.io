---
layout: post
title: About the interoperability of System 7 and iOS
tags:
- system7
- basiliskii
- emulation
- macintosh
- ios
nouns:
- File Sharing
- System
- Photoshop
- FreeHand
- GraphicConverter
- BasiliskII
- Illustrator
- Files
- Music
- Podcasts
- YouTube
- Acrobat
- PDFWriter
- AirPrint
- Safari
- Photos
- Share Sheet
- StuffIt
- ShrinkWrap
- Disk Copy
- MindExpander
- CompactPro
- Deneba
- UltraPaint
- artWORKS
- Canvas
- AppleWorks
- ClarisWorks
- Nisus Writer
- WordPerfect
- Microsoft
- Word
- Excel
carousel: ''
featured: false
pinned: false
comments: https://twitter.com/gingerbeardman/status/1389342826597699587

---
It never fails to amaze me how at home System 7 feels on an iPad. In fact, I'd go so far as to say I've never felt more capable than when I'm using it this way. *What a time to be alive!*

Still, there are times when it makes sense to lean on the features of the host device to get your job done more easily. In this post I detail common tasks that involve "crossing the streams".

---

## File Conversions

When transferring files to/from System 7 you're going to need to convert them to/from suitable formats to make your life easier. Below I've listed my approach to the most common file types. Of course, your task may differ but I hope this gives you some useful hints.

**Bitmap files**

I use [Pixaki](https://pixaki.com) which is a fantastic native iPad app for creating pixel art. It will load either layered Photoshop or flat PNG files, both of which are easy to generate in System 7:

- PSD: Photoshop 3.0
- PNG: GraphicConverter 4.1

**Vector files**

Dealing with vector artwork produced in the Deneba apps that I use is a little trickier. We have to jump use a stepping stone or two. First we export a file that keeps the vector data—I tend to choose Illustrator 88—and then we load that into the majestic FreeHand and export an EPS from there.

- I88: Illustrator 88 (aka version 1.7)
- EPS: FreeHand 3/4/5

**Textual data**

I generally type in Markdown so plain-text TXT files work just fine and require no conversion. Programming source code files such as C, Pascal, or otherwise also transfer without incident.

You may have some luck with Rich Text RTF files, and also with some versions of the Microsoft Word DOC file format, to transfer formatted text both ways without having to convert it to other file formats.

More exotic document formats will be trickier, but [LibreOffice](https://www.libreoffice.org) can open number of older formats as read-only files. Examples are: AppleWorks, ClarisWorks, Nisus Writer, WordPerfect, and more.

**Tabular data**

*Excel* 4.0 has you covered for CSV, XLS and more.

---

## File I/O

To get files out of System 7 simply drop them onto the File Sharing drive, open Files, and long press on the PDF to get a list of the available actions. The exact options that iOS will give you will depend on the apps you have installed. Don't be a stranger over at the App Store!

---

## Printing

To print any type of document from System 7, I make use of software that allows printing to a PDF. It's worth noting that the result is a bitmap PDF, not vector, but it's good enough to get hold of a quick hardcopy.

- PDF: Acrobat PDFWriter 3.0

Of course, if you are working with vector files you'll have a proper scalable vector PDF file that you can print in exactly the same way.

Once the PDF is in File Sharing, use iOS to print it wirelessly to an AirPrint compatible printer.

---

## Multitasking

iOS is only a swipe away, so remember that you can access iOS apps and services and swipe System 7 away at any time.

- **Split View** (if you enabled it when building BasiliskII) for side-by-side browsing in Safari
- **Slide Over** for quick access to Files, Photos, Safari, etc.
- **Background** to listen to Music or Podcasts
- **Picture-in-Picture** for YouTube or other video playback

---

## Downloading files

*Safari* will let you download classic Macintosh file formats. Even though it doesn't know how to handle them, they will automatically be saved on your iPad in Downloads.

From there you can use Files to copy the file into BasiliskII's File Sharing folder, or use the iOS Share Sheet to copy the file into BasiliskII and simultaneously open the emulator! Very handy. I use one or the other depending on my goal.

Some file formats you are likely to come across:

- **.hqx** — BinHex file
- **.bin** — MacBinary file
- **.sit** — StuffIt archive
- **.cpt** — CompactPro archive
- **.sea** — self-extracting archive

The above files can be converted or extracted using StuffIt, MindExpander, or CompactPro. You might also see files with more than one extension, in which case don't worry the file has been treated twice for good measure, you may have to open it twice in System 7 to get it into its final/original form.

- **.dsk** — disk image
- **.img** — disk image
- **.smi** — self-mounting disk image

The above disk images can be mounted using StuffIt, ShrinkWrap, DiskCopy 6.

- **.iso** — standard CD-ROM disk image
- **.toast** — proprietary CD-ROM disk image

The above optical disk images should be mounted using the BasiliskII settings interface (shown at first launch, or whenever you shake your device).
