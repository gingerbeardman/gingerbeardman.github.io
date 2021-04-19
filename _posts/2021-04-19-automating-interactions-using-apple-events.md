---
layout: post
title: Automating interactions using Apple Events
tags:
- minivmac
- basiliskii
- emulation
- macintosh
nouns:
- Resorcerer
- ResEdit
- interapplication communication
- Capture AE
- AESend
- artWORKS
- UltraPaint
- QuicKeys
- KeyQuencer
- Macintosh
- Apple Events
carousel: ''
featured: false
comments: ''

---
[As I've previously mentioned](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh/), UltraPaint and artWORKS share a lot of DNA so their structure is effectively identical, including the tool palette. This is a good thing as I intend to automate tool selection in both apps and I'll take any help 30-year-old software wants to send my way!

### Simply Clicking

My first thought was to try the naive way of selecting tools by just clicking them! If the tool palettes are positioned in the same place (this can also be automated) then macros can simply click at specific screen locations to select a tool. This approach works well for both apps. But this is a very fragile way of automating interactions—if windows are inadvertently moved the automation will break. So, there's definitely room for improvement.

### Going Deeper

According to period Apple documentation ([PDF](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiIr_OAzYXwAhXErHEKHR_sAcYQFjAAegQIChAD&url=https%3A%2F%2Fdeveloper.apple.com%2Flegacy%2Flibrary%2Fdocumentation%2Fmac%2Fpdf%2FInterapplication_Communication%2FIntro_to_IAC.pdf&usg=AOvVaw0WKA5J59562fzTuOMZ58PG), [HTML](http://mirror.informatimago.com/next/developer.apple.com/documentation/mac/IAC/IAC-94.html)) a means of automation was introduced in System 7:

> The interapplication communication (IAC) architecture provides a standard and extensible mechanism for communication among Macintosh applications. The IAC architecture makes it possible for your application to
>
> * provide automated copy and paste operations between your application and other applications
> * be manipulated by means of scripts
> * send and respond to Apple events
> * send and respond to high-level events other than Apple events
> * read and write blocks of data between applications

Sounds perfect—my idea of a good time!

### Apple Events

To support AppleScript, apps were required to offer suites of supported messages and mechanisms. These are advertised through the `aete` resource. ResEdit shows this data as raw hex, unless you install a template to enable it to make sense of it. Resorcerer supports it out of the box. There are a bunch of other tools that can display the data in a human readable way such an Apple-created HyperCard stack, a third-party app called EightyRez, and automation tool QuicKeys to name just a few.

QuicKeys sounded ideal as it lets me query the data, using a set of dropdown menus, and use it to specify automation to try out the Apple Events way of selecting a tool. It worked first time! But it was slow, and there was a distracting loss of window focus as the macro was executed.

In search of something better turned to my favourite classic automation tool: KeyQuencer. I'd previously searched trough various archives for any available macros, so had a vague memory there was something out there I might be able to use. I dug up AESend, an Apple Events extension for KeyQuencer.

I used QuicKeys GUI to set up the initial Apple Events call, as it allows you to pick options from drop-down lists. Then I used the Capture AE control panel to decode the Apple Events call into something human readable that I could adapt for use in KeyQuencer. I'd still take that approach for any new Apple Events.

The result was much faster Apple Events sending and no distracting window focus flickering.

### Two-in-One

The end result is a macro of two parts: the first section operates artWORKS using Apple Events, continuing without complaint if the app is not open, and the second section operates UltraPaint via simple mouse clicks.

![PNG](/images/posts/automating-apple-events.png)

I plan to adding support for Canvas 3.x at some point as this shares Apple Events support with artWORKS.

### Investigation

According to the `aete` resource description in both artWORKS and Canvas, selection of Internal Tools using Apple Events is limited to 10 seemingly random tools. This made no sense to me, so I tried specifying higher tools and this experimentation proved that all 18 internal tools are indeed available. I guess the description had been truncated at some point?

#### Internal Tool references

| INTERNAL | btol |
| --- | --- |
| ArcRect | 7 |
| Arrow | 1 |
| BezierCurve | 10 |
| Brush | 14 |
| Eraser | 17 |
| Free Hand | 8 |
| Lasso | 11 |
| Line | 3 |
| Marquee | 12 |
| Oval | 6 |
| Paint Bucket | 15 |
| Paint Object Creator | 18 |
| Pencil | 16 |
| Polygon | 9 |
| Rect | 4 |
| RoundRect | 5 |
| Spray Can | 13 |
| Text | 2 |

#### External Tools references

| EXTERNAL | etol |
| --- | --- |
| Coil | CoiL |
| Concentric Circles | CCir |
| Cube | Cube |
| Cylinder | cyln |
| Dimensioning | DIMN |
| Doughnuts | doug |
| Fractals | Flin |
| Gradient Fill | ObFl |
| GridMaker | grid |
| Mover | MovE |
| Multigon | NGON |
| Namestamp | NamE |
| Parallel Lines | Paln |
| Point Rotate | PtRt |
| QuickTime | QkTm |
| Registration Marks | regP |
| Resistor | ResT |
| Sounder | sndT |
| Spiral | Spir |
| Split | Splt |
| Star | STAR |
| Timestamp | TimE |