---
layout: post
last_modified_at: '2024-06-05T16:46+01:00'
tags:
- system7
- graphics
- drawing
- software
- macintosh
- history
nouns:
- System
title: Macintosh drawing software compared
comments: https://twitter.com/gingerbeardman/status/1385985050479677445
featured: false
carousel: ''
style: |
  table#macintosh-drawing-software th:nth-last-child(-n+1),
  table#macintosh-drawing-software td:nth-last-child(-n+1) {
    border-left: 1px solid #ccc;
  }

---
Below is a list of various drawing applications that are available to use with System 7 (68K).

I'm mostly interested in apps that can do both pixel and vector, and that support layers and transparency. The table below might be useful for at-a-glance comparisons. Apps run in both mono or colour, unless stated otherwise.

Deneba artWORKS can do both pixel and vector, has layers and partial transparency. The bottom layer is opaque and all layers on top are transparent. Collections of pixels are managed as a special object, and there's a limit of 8 layers. The user interface is brilliant.

SuperPaint has two layers: pixel and vector with transparency in all but the base layer. Though it allows cut/copy and paste from the pixel layer to the vector layer at which point those collections of pixels are managed as SuperBits objects and can be edited in isolation.[ref](https://twitter.com/tumult/status/1432279388519763972)

Freehand is king of the vector apps. It really was so much better than Illustrator. Such a shame that it's no longer around. To use it on iPad is quite something!

Also interesting is how many early versions of successful apps didn't support layers (Photoshop, Freehand) or full transparency (Photoshop).

Almost every app has only a single level undo, with only Expression and Freehand offering multi-level undo. This is probably why everybody was using Freehand when I started work in graphic design the mid-late 1990s.

One small disappointment: Macromedia Fireworks requires the PPC architecture so won't run on my iPad System 7 setup. Sad face. (But we can use [infinitemac.org](https://infinitemac.org))

<div class="table-wrapper" markdown="block">
| APP                | PIXEL | VECTOR | LAYERS | TRANSP. | UNDO | NOTES |
| ------------------ |:-----:|:------:|:------:|:-------:|:----:| ----- |
| artWORKS           | ●     | ●      | ●      | ○       |      | Many layers, many objects |
| BluePaint          | ●     |        |        | ○       |      | PPC-only |
| Canvas             | ●     | ●      | ●      | ○       |      | Many layers, many objects |
| ClarisDraw         | ●     | ●      | ●      |         |      | Pixel drawing within specific objects |
| Cricket Draw       |       | ●      |        |         |      |  |
| Draw It Again Sam  |       | ●      | ●      |         |      |  |
| Drawing Table      |       | ●      |        |         |      |  |
| Expression         |       | ●      | ●      |         | ●    | Colour required |
| Freehand 1.0–2.0   |       | ●      | ○      |         | ●    | Layers not managed visually |
| Freehand 3.1–5.5   |       | ●      | ●      |         | ●    |  |
| Illustrator 88–3.0 |       | ●      |        |         |      |  |
| ImageStudio 0.6    | ●     |        |        |         |      | Custom brushes |
| LightningPaint     | ●     |        |        |         |      | Polite palettes |
| MacDraw Pro        |       | ●      | ●      |         |      |  |
| MacPaint           | ●     |        |        |         |      |  |
| MacroPaint         | ●     |        |        | ○       |      | Transparent patterns |
| Photoshop 1.0–2.5  | ●     |        |        |         |      |  |
| Photoshop 3.0      | ●     |        | ●      | ●       |      | Full alpha channel transparency |
| PixelPaint         | ●     |        |        |         |      | Special brush effects |
| ShareDraw          |       | ●      | ●      |         |      |  |
| Studio/1           | ●     |        |        |         |      | Animation, 1-bit |
| Studio/8           | ●     |        |        |         |      | Animation, 8-bit |
| SuperPaint         | ●     | ●      | ●      | ○       |      | Two layers, many objects |
| UltraPaint         | ●     | ●      | ●      | ○       |      | Eight layers, many objects |
| Zeus               | ●     |        |        |         |      | Animation |
{: #macintosh-drawing-software}

</div>
Key: ● full support, ○ partial support

### Related posts

* [Turning an iPad Pro into the Ultimate Classic Macintosh](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh)
* [How to install BasiliskII on your iPad](/2021/04/21/building-basiliskii-for-ios/)
* [Exploring Custom Keyboards and Automation](/2021/04/19/automating-interactions-using-apple-events/)
* [Optimising Macintosh app toolbars for touch](/2021/03/28/changing-the-size-of-toolbar-items-using-resedit/)
* Macintosh drawing software compared
* [Mixing External Tools across Deneba software](/2021/04/25/mixing-external-tools-across-deneba-software/)
* [My System 7 software choices](/2021/04/30/my-system-7-software-choices/)
* [About the interoperability of System 7 and iOS](/2021/05/03/interoperability-of-system-7-and-ios/)
