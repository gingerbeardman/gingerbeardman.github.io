---
layout: post
title: "How to tame a user interface using a spreadsheet"
date: '2025-10-11T01:03+01:00'
modified: '2025-10-17T01:00+01:00'
tags:
- spreadsheet
- ux
- interface
- tooling
- workflow
- poweruser
- software
nouns:
- Apple Numbers
- Google Sheets
- Microsoft Excel
- "Lotus 1-2-3"
- SmoothCSV
- YOYOZO
- SwiftUI
- Mario Kart
- Mario
- Zelda
- F-Zero
- Colin McRae Rally
- WipEout
- Ars Technica
- Love2D
- macOS
- Mac
- iPhone
- The Computer Chronicles
- Figma
- Sketch
- Photoshop
featured: false
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/1976379334765183440
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3m2rxjfsrbk2p
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/115346016653448775

---

Many years ago, while working at Apple and running a lab at WWDC, I met a guy who was using a piece of [Apple software designed for creating interactive ads](https://en.wikipedia.org/wiki/IAd_Producer) to design a Car Play user interface for a popular US car manufacturer. I was impressed by his ability to think outside the box and told him so. I mentioned to him how human interface designers at Apple [were using Keynote to rapidly prototype user interfaces and animations](https://www.youtube.com/watch?v=DGn7BcFGigc&t=474s). The discussion then took a strange turn onto spreadsheets.

----

## Spreadsheets?

In my opinion, spreadsheets are one of the greatest user interface design tools ever created. I believe that the most effective tool for a job is one that gets out of the way as much as possible. Even better if it's a tool that you already have access to, or at the very least, can use at no cost.

Before you have time to load up Figma, Sketch, Photoshop, or any other design software, I’ll have already typed in my content placeholders in a spreadsheet and be most of my way towards a solution. I’ll be merging and moving cells at lightning speed—rationalising layouts, determining the optimal use of space, and creating order out of chaos.

The purpose of using a tool that may seem ill-suited to the task at hand—designing user interfaces—is to liberate yourself from the clutter or baggage of content and style. This allows you to focus solely on layout, positioning, and hierarchy. You don’t have to worry about type sizes, or get bogged down with software choices. With a spreadsheet, it’s just the keyboard between you and the perfect layout.

----

## Let's take your brain to another dimension

One frequent criticism of spreadsheets is that they are "only 2D" or that a grid isn't versatile enough to solve your problem. But if you pay close attention, you'll realise that spreadsheets can occupy as many dimensions as you require by using multiple sheets. Like the stack of ledger paper that was used before spreadsheets were invented. An episode of The Computer Chronicles called "The Spreadsheet Wars" aired in 1988 and has a great [demo of spreadsheet software Lotus 1-2-3 doing 3D spreadsheet manipulation](https://youtu.be/eAiZBUYNUBA?si=TMiXXLj1gtFwZQkp&t=1154) in ways that are still impressive several decades later.

[Grid systems are well known across many fields of design](https://archive.org/details/GridSystemsInGraphicDesignJosefMullerBrockmann) for being a huge assist when solving layouts and rationalising problems. The grid enforces structure invisibly during the design process. A spreadsheet is a highly configurable grid system that is ready to be put to work on your problem!

You might also consider the use of plain paper, graph paper, and a bitmap editor. Which might be best suited for sketching out a quick icon idea? It's easy to understand that graph paper is more suitable than plain paper for drawing images made up of pixels, and in many situations it may be quicker and more suitable than a bitmap editor. [Susan Kare famously used a book of grid/graph paper to draw many early Macintosh icons](https://www.moma.org/collection/works/188382?artist_id=38483&page=1&sov_referrer=artist) because icon creation software had yet to be invented.

## There's an app for that

I use Apple Numbers to do most of my spreadsheet work, because it's the one that I have easiest access to most of the time—it's installed on both my Mac and iPhone. You might want to use Google Sheets, Microsoft Excel, or even a simpler table tool like [SmoothCSV](https://smoothcsv.com). There is no wrong choice.

Here are some examples of layouts I've solved using a spreadsheet.

----

## YOYOZO

Perhaps my most famous example is the stats screen of [my hit game YOYOZO](/2023/11/21/yoyozo-how-i-made-a-playdate-game-in-39kb/). With this one I already had a TTF font file that I'd created for the manual, so I went the extra mile and planned a pixel perfect layout in the right colours and everything. A fun fact you might not know: YOYOZO was featured in Ars Technica's "Best Games of 2023" list, alongside Mario and Zelda. This spreadsheet thing is great!

![IMG](/images/posts/spreadsheet-ui-yoyozo.png "Pixel perfect precision using the exact font")
{:.tofigure}

----

## Enhanced sfxr

This year I've made two enhanced versions of sfxr—[one for Love2D](https://gingerbeardman.itch.io/enhanced-sfxr-for-love2d) and [one for macOS](https://twitter.com/search?q=from%3Agingerbeardman%20sfxr&src=typed_query&f=live)—and I can't remember which one this was done for. I usually get rid of the header rows and columns but in this instance they acted as sidebar and title bar. Regardless, whilst it might not look like much this sort of pre-planning and organisation saved a ton of time when I was working on the app. It involved no code and was done in a minute or two!

![IMG](/images/posts/spreadsheet-ui-sfxr.png "Organising the large components that make up the window")
{:.tofigure}

----

## Spindle

Another of my "coming soon" apps is [an optical media dumper whose USP is its ability to dump from multiple drives at the same time](https://twitter.com/search?q=from:gingerbeardman%20spindle&src=typed_query&f=live). I wanted a UI that would stay mostly the same across both the setup and dumping states, and also that was easily repeatable when additional drives duplicate the app UI. The benefit of working with a grid here is that it was 1:1 transferrable to SwiftUI grid system!

![IMG](/images/posts/spreadsheet-ui-spindle.png "Two states of the same interface showing what changes and what remains the same")
{:.tofigure}

----

## Driving Game

This final one is an example of a racing game. Something that you might already be more familiar with and so be able to figure out how you can apply the technique to your own work. Something like Mario Kart, F-Zero, Colin McRae Rally, or WipEout. Let's go!

![IMG](/images/posts/spreadsheet-ui-racer.png "A fairly standard driving/racing game head up display")
{:.tofigure}
