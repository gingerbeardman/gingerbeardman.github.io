---
layout: post
tags: [system7, macintosh, software, hack, deneba]
nouns: [External Tools, AppleLink, Deneba, UltraPaint, TOOL, ULTR, Canvas, TOL2, DAD2, artWORKS, TOL4, DAD3, Wacom, ArtPad II, Tool Picker, ResEdit, Snitch, FileTyper, StuffIt! Expander]
title: Mixing External Tools across Deneba software
featured: yes
comments: https://twitter.com/gingerbeardman/status/1386443522258219023
---
One of the most interesting things about Deneba's early 1990s Macintosh drawing apps is that they were built in a modular way with additional files adding specific features. These days we call those Plugins but back in 1990 Deneba referred to them as External Tools.

They are first seen in UltraPaint and later in Canvas 3.0, artWORKS and Canvas 3.5. Tools are categorised as several types: Effect, I/O, Manager, Modifier, Object, Setting and Other. Each adds functionality and/or user interface to the app in its own way.

Amongst the Deneba material on an AppleLink archive disk from Spring 1993 there are a bunch of "non-shipping" tools labelled for use with Canvas 3.0. Interestingly, they are listed individually and also as a combined set. If we extract the combined set of tools there's a single additional tool that is somewhat out of place: the Waco Tool (for Wacom pressure sensitive pen) which is marked with UltraPaint's type and creator information.

![PNG](https://cdn.gingerbeardman.com/images/posts/deneba-external-tools-0.png#pixel "Spot the odd one out")
{:.tofigure}

I can confirm this that this tool - which I don't believe was ever included with UltraPaint - allows my Wacom ArtPad II to work. Bonus! But why was this tool meant for UltraPaint included in a download for Canvas. Could it work in Canvas?

I put the additional files in the Canvas Tools folder and started the app with the Space Bar held down. This starts the Tool Picker allowing you to select which tools you want to use for that session.

Boom! There it was.

![PNG](https://cdn.gingerbeardman.com/images/posts/deneba-external-tools-1.png#pixel "A wild Waco Tool appears in the Tool Picker")
{:.tofigure}

## Experimentation

I tried copying some tools from Canvas to UltraPaint and artWORKS. They didn't work. What was the difference? In ResEdit they looked largely the same. On a whim I looked at the type/creator codes using Snitch's Get Info extension. I noticed that disabled tools had a different type code. If the app is using type to store information like that, maybe it's only accepting certain type codes?

So I copied a tool from Canvas over to artWORKS, being careful to pick one that already exists so it was as much like for like as it could be. It didn't show up. Then I changed the type/creator codes and... it did show up! And not only that, but the tool worked in the app!

![PNG](https://cdn.gingerbeardman.com/images/posts/deneba-external-tools-2.png#pixel "External Tool type/creator codes")
{:.tofigure}

I was surprised, and also impressed. Deneba did a really great job with the architecture and API of these apps for things to remain this compatible over the course of several years. All three apps share code and resources. If you take a look at both UltraPaint and artWORKS in ResEdit you'll see that they share a lot of DNA, artWORKS is basically an enhanced version of UltraPaint. I'd bet all three apps were built from the same code base.

## How far can we go?

Some questions remained: how many tools could this be done with? Would they install and function? Could I use tools in artWORKS that were meant only for the more expensive Canvas? There was only one way to find out: try all the tools!

I set about copying the tools from one app to artWORKS, my favourite app, changing the creator and type codes to match. To make bulk changes to type/creator I used Get Info (with Snitch) on multiple items, but I could have used software such as FileTyper.

| Year | Software   | Type | Creator |
| ---- | ---------- | ---- | ------- |
| 1990 | UltraPaint | TOOL | ULTR    |
| 1992 | Canvas 3.0 | TOL2 | DAD2    |
| 1993 | artWORKS   | TOL4 | DAD3    |

## Very far!

The result was quite amazing with artWORKS total tools increasing from 59 to 92—that's 33 additional tools! This is not counting a handful of tools that install but do not present themselves in the user interface. I'll need to investigate those further at a later date.

Doing the same for Canvas 3.0 takes us from 74 to an even higher total of 97 tools! It's worth noting there are a couple of tools that go by the same internal name: PANTONE™ Colors (Color Manager) and Separations (PostScript) but I've chosen not to merge those rows of the table as there are some subtle differences in their capabilities. Also the functionality of the Grids & Rulers tool is built-in.

The table below shows tools present in each of the apps, each with their own symbol, and then the final combined column shows all tools that are compatible with artWORKS with the symbols showing which app that tool originated from.

# External Tools

<div class="table-wrapper" markdown="block">
| Software Name          |UltraPaint|Canvas 3.0|artWORKS|artWORKS+|Canvas 3.0+|
|------------------------|:--------:|:--------:|:------:|:-------:|:--------:|
|&nbsp;Tool Loader       |          |          | ■      | ■       | ■        |
|&nbsp;ToolPicker        | ▲        | ●        | ■      | ■       | ●        |
|Alignment Specs         |          | ●        | ■      | ■       | ●        |
|Antialias               |          |          | ■      | ■       | ■        |
|Arrowhead Manager       |          | ●        | ■      | ■       | ●        |
|Auto Trace              | ▲        | ●        | ■      | ■       | ●        |
|Balloon Help            |          | ●        | ■      | ■       | ●        |
|Bézier Text             |          | ●        |        | ●       | ●        |
|Bind                    |          | ●        |        |         | ●        |
|Blend Objects           |          | ●        | ■      | ■       | ●        |
|Blotter Pen             | ▲        |          | ■      | ■       | ■        |
|Brush Manager           |          | ●        | ■      | ■       | ●        |
|Canvas 1.0 I/O          |          | ●        |        | ●       | ●        |
|Canvas 2.1 I/O          |          | ●        | ■      | ■       | ●        |
|CGM I/O                 |          | ●        |        | ●       | ●        |
|Chalk                   | ▲        |          | ■      | ■       | ■        |
|Charcoal                | ▲        |          | ■      | ■       | ■        |
|Coil                    |          | ●        |        | ●       | ●        |
|Color Manager           | ▲        |          | ■      | ■       |          |
|Combine Objects         |          | ●        | ■      | ■       | ●        |
|Concentric Circles      |          | ●        |        | ●       | ●        |
|Contrast                | ▲        |          |        | ▲       | ▲        |
|Convert To              |          | ●        | ■      | ■       | ●        |
|Cube                    | ▲        | ●        | ■      | ■       | ●        |
|Cylinder                |          | ●        |        | ●       | ●        |
|Dash Manager            |          | ●        |        | ●       | ●        |
|Dimensioning            |          | ●        |        | ●       | ●        |
|Doughnuts               |          | ●        |        | ●       | ●        |
|Drawing Size            |          | ●        | ■      | ■       | ●        |
|Dropper                 | ▲        | ●        | ■      | ■       | ●        |
|Duplication Specs       |          | ●        | ■      | ■       | ●        |
|DXF I/O                 |          | ●        |        | ●       | ●        |
|Filters                 |          |          | ■      | ■       | ■        |
|Fingertip               | ▲        |          | ■      | ■       | ■        |
|Fractals                |          | ●        |        | ●       | ●        |
|Fuzz lasso/Soften Edges | ▲        |          | ■      | ■       | ■        |
|GIF I/O                 | ▲        | ●        | ■      | ■       | ●        |
|Gradient Fill           | ▲        | ●        | ■      | ■       | ●        |
|Gray Scale Manager      | ▲        |          |        | ▲       | ▲        |
|Grid Specs              |          | ●        |        | ●       | ●        |
|Grid Tool/Maker         | ▲        | ●        |        | ●       | ●        |
|Grids & Rulers          |          |          | ■      | ■       |          |
|Hatch Patterns          |          | ●        |        | ●       | ●        |
|IGES I/O                |          | ●        |        | ●       | ●        |
|Illustrator I/O         |          | ●        | ■      | ■       | ●        |
|Imported Filters        |          |          | ■      | ■       | ■        |
|Impressionist           | ▲        |          |        | ▲       | ▲        |
|Layer Specs             |          | ●        | ■      | ■       | ●        |
|Luminance               | ▲        |          | ■      | ■       | ■        |
|MacDraw I/O             | ▲        | ●        | ■      | ■       | ●        |
|MacPaint I/O            | ▲        | ●        | ■      | ■       | ●        |
|Magic Wand              | ▲        |          | ■      | ■       | ■        |
|Masking                 | ▲        |          | ■      | ■       | ■        |
|Mover                   |          | ●        | ■      | ■       | ●        |
|Multigon                | ▲        | ●        | ■      | ■       | ●        |
|NameStamp               |          | ●        |        | ●       | ●        |
|Object Specs            |          | ●        | ■      | ■       | ●        |
|Object Tint             |          | ●        |        | ●       | ●        |
|PANTONE™ Colors         |          | ●        |        | ○       | ●        |
|Parallel Lines          |          | ●        |        | ●       | ●        |
|Pattern Manager         |          | ●        | ■      | ■       | ●        |
|Pen Manager             |          | ●        |        | ●       | ●        |
|Place                   |          | ●        |        | ●       | ●        |
|Point Rotate            |          | ●        |        | ●       | ●        |
|PostScript              |          |          | ■      | ■       |          |
|Preferences             |          | ●        | ■      | ■       | ●        |
|Pressure Pen            | ▲        | ●        | ■      | ■       | ●        |
|QuickTime               |          | ●        | ■      | ■       | ●        |
|Quill Pen               | ▲        |          | ■      | ■       | ■        |
|Registration Marks      |          | ●        |        | ●       | ●        |
|Resistor                |          | ●        |        | ●       | ●        |
|RGB Color Manager       |          | ●        |        | ●       | ●        |
|Rubber Stamp            | ▲        |          | ■      | ■       | ■        |
|Ruler Specs             |          | ●        |        | ●       | ●        |
|Scale Specs             |          | ●        | ■      | ■       | ●        |
|Search & Replace        |          | ●        |        | ●       | ●        |
|Selection Specs         |          | ●        |        | ○       | ●        |
|Separations             |          | ●        |        | ○       | ●        |
|Sharpen and Blur        | ▲        |          |        | ▲       | ▲        |
|Size Other              |          |          | ■      | ■       | ■        |
|Slides                  |          | ●        |        |         | ●        |
|Smart Mouse             |          | ●        |        | ○       | ●        |
|Sounder                 |          | ●        | ■      | ■       | ●        |
|Spacing Other           |          |          | ■      | ■       | ■        |
|Spelling                |          | ●        |        | ●       | ●        |
|Spiral                  |          | ●        |        | ●       | ●        |
|Split                   |          | ●        | ■      | ■       | ●        |
|Spray Manager           |          | ●        | ■      | ■       | ●        |
|StartupScreen I/O       | ▲        | ●        | ■      | ■       | ●        |
|System 7.0 Options      |          | ●        | ■      | ■       | ●        |
|Text Ruler              |          | ●        |        | ○       | ●        |
|Text Utilities          |          | ●        |        | ●       | ●        |
|Textures                |          |          | ■      | ■       | ■        |
|Three Color Airbrush    | ▲        |          | ■      | ■       | ■        |
|TIFF I/O                | ▲        | ●        | ■      | ■       | ●        |
|TimeStamp               |          | ●        |        | ●       | ●        |
|Tool Info               |          | ●        | ■      | ■       | ●        |
|UltraPaint 1.0 I/O      |          | ●        | ■      | ■       | ●        |
|Undo Killer             |          | ●        |        | ○       | ●        |
|Water Droplet           | ▲        |          | ■      | ■       | ■        |
|========================|==========|==========|========|=========|==========|
|Total Tools             | 30       | 74       | 58     | 92      | 97       |
{: #deneba-external-tools}

Key:

  ▲ UltraPaint tool
  ● Canvas 3.0 tool
  (○ that installs but doesn't show any interface)
  ■ artWORKS tool

## Result

So after all this I now have an install of artWORKS (let's call it artWORKS+) that includes additional tools from both UltraPaint and Canvas 3.0 and I had a ton of fun figuring all this out. And I'm only 30 years late!

Here's a download of my artWORKS Tools folder containing all the combined tools (use StuffIt! Expander 5.5 to extract): [artWORKS-Tools-Combined.sit](/files/artWORKS-Tools-Combined.sit) [1.1MB]

### Footnote

A note about later versions of Canvas: version 3.5 provides roughly the same tools as version 3.0. The handful of unique tools in version 3.5 are not compatible with artWORKS. Version 5.0 features similar tools but they're no longer compatible with the earlier apps.

### Related posts

* [Turning an iPad Pro into the Ultimate Classic Macintosh](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh)
* [How to install BasiliskII on your iPad](/2021/04/21/building-basiliskii-for-ios/)
* [Exploring Custom Keyboards and Automation](/2021/04/19/automating-interactions-using-apple-events/)
* [Optimising Macintosh app toolbars for touch](/2021/03/28/changing-the-size-of-toolbar-items-using-resedit/)
* [Macintosh drawing software compared](/2021/04/24/macintosh-drawing-software-compared/)
* Mixing External Tools across Deneba software
* [My System 7 software choices](/2021/04/30/my-system-7-software-choices/)
* [About the interoperability of System 7 and iOS](/2021/05/03/interoperability-of-system-7-and-ios/)

</div>
