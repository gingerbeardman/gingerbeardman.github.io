---
layout: post
tags: []
nouns: []
title: Deneba External Tools
comments: ''
featured: false
carousel: ''
published: false

---
One of the most interesting things about Deneba's early 1990s Macintosh drawing apps is that they were built with a modular, component approach. These days we would call those plugins, but back in 1990 they were referred to as External Tools.

They are first seen in UltraPaint (type: TOOL, creator: ULTR), but it's most interesting to look at their implementation in artWORKS (type: TOL4, creator: DAD3) and Canvas 3.0 (type: TOL2, creator: DAD2) as these two were developed simultaneously and released mere weeks apart.

Looking at Deneba material on AppleLink in Spring 1993, we can download a bunch of non-shipping tools for use with Canvas 3.0. If we extract the combined set of tools, there's a strange additional tool present: the Waco Tool (for Wacom pressure sensitive pen) stangely adorned with the UltraPaint creator code. I can confirm this that this tool - not included with the UltraPaint - allows my Wacom ArtPad II to work in UltraPaint.

I did some testing to see how compatible the tools are. This was done by copying the tools from one app to another and chaning the creator and type codes using FileType.

- Canvas 2.0 (1988)
- UltraPaint (1990)
- Canvas 3.0 (1992)
- artWORKS (1993)
- Canvas 3.5 (1995)

More than that, the apps shared code and resources. If you take a look at both UltraPaint and artWORKS in ResEdit you'll see that they share a lot of DNA.

One of the most interesting things about Deneba's early 1990s Macintosh drawing apps is that they were built with a modular, component approach. These days we would call those plugins, but back in 1990 they were referred to as External Tools.

They are first seen in UltraPaint (type: TOOL, creator: ULTR), but it's most interesting to look at their implementation in artWORKS (type: TOL4, creator: DAD3) and Canvas 3.0 (type: TOL2, creator: DAD2) as these two were developed simultaneously and released mere weeks apart.

Looking at Deneba material on AppleLink in Spring 1993, we can download a bunch of non-shipping tools for use with Canvas 3.0. If we extract the combined set of tools, there's a strange additional tool present: the Waco Tool (for Wacom pressure sensitive pen) stangely adorned with the UltraPaint creator code. I can confirm this that this tool - not included with the UltraPaint - allows my Wacom ArtPad II to work in UltraPaint.

I did some testing to see how compatible the tools are. This was done by copying the tools from one app to another and chaning the creator and type codes using FileType.

* Canvas 2.0 (1988)
* UltraPaint (1990)
* Canvas 3.0 (1992)
* artWORKS (1993)
* Canvas 3.5 (1995)

More than that, the apps shared code and resources. If you take a look at both UltraPaint and artWORKS in ResEdit you'll see that they share a lot of DNA.

## External Tools

|Name                  |UltraPaint|artWORKS|Canvas 3.0|artWORKS+|Canvas 3.5|
|----------------------|----------|--------|----------|---------|----------|
| Tool Loader          |          |1       |          |1        |1         |
| ToolPicker           |1         |1       |1         |1        |1         |
|Alignment Specs       |          |1       |1         |1        |1         |
|Antialias             |          |1       |          |1        |          |
|Arrowhead Manager     |          |1       |1         |1        |1         |
|Auto Trace            |1         |1       |1         |1        |1         |
|Balloon Help          |          |1       |1         |1        |1         |
|B�zier Text           |          |        |1         |1        |1         |
|Bind                  |          |        |1         |X        |1         |
|Blend Objects         |          |1       |1         |1        |1         |
|Blotter Pen           |1         |1       |          |1        |          |
|Brush Manager         |          |1       |1         |1        |1         |
|Canvas 1.0 I/O        |          |        |1         |1        |1         |
|Canvas 2.1 I/O        |          |1       |1         |1        |1         |
|Canvas for Windows 1.0|          |        |          |         |1         |
|CGM I/O               |          |        |1         |1        |1         |
|Chalk                 |1         |1       |          |1        |          |
|Charcoal              |1         |1       |          |1        |          |
|Coil                  |          |        |1         |1        |          |
|Color Manager         |1         |1       |          |1        |          |
|Combine Objects       |          |1       |1         |1        |1         |
|Concentric Circles    |          |        |1         |1        |1         |
|Contrast              |1         |        |          |1        |          |
|Convert To            |          |1       |1         |1        |1         |
|Cube                  |1         |1       |1         |1        |1         |
|Cylinder              |          |        |1         |1        |          |
|Dash Manager          |          |        |1         |1        |1         |
|Dimensioning          |          |        |1         |1        |1         |
|Doughnuts             |          |        |1         |1        |          |
|Drawing Size          |          |1       |1         |1        |1         |
|Dropper               |1         |1       |1         |1        |1         |
|Duplication Specs     |          |1       |1         |1        |1         |
|DXF I/O               |          |        |1         |1        |1         |
|Envelope              |          |        |          |         |1         |
|Extrude               |          |        |          |         |1         |
|Filters               |          |1       |          |1        |          |
|Fine Kern             |          |        |          |         |1         |
|Fingertip             |1         |1       |          |1        |          |
|Font & Tool Checker   |          |        |          |         |1         |
|Fractals              |          |        |1         |1        |1         |
|Fuzz lasso edges tool |1         |        |          |1        |          |
|GIF I/O               |1         |1       |1         |1        |X         |
|Gradient Fill         |1         |1       |1         |1        |1         |
|Gray Scale Manager    |1         |        |          |1        |          |
|Grid Specs            |          |        |1         |1        |1         |
|Grid Tool/Maker       |1         |        |1         |1        |1         |
|Grids & Rulers        |          |1       |          |1        |          |
|Group Composite       |          |        |          |         |1         |
|Hatch Patterns        |          |        |1         |1        |1         |
|IGES I/O              |          |        |1         |1        |1         |
|Illustrator I/O       |          |1       |1         |1        |1         |
|Imported Filters      |          |1       |          |1        |          |
|Impressionist         |1         |        |          |1        |          |
|Layer Specs           |          |1       |1         |1        |1         |
|Luminance             |1         |1       |          |1        |          |
|MacDraw I/O           |1         |1       |1         |1        |1         |
|MacPaint I/O          |1         |1       |1         |1        |1         |
|Macro Window          |          |        |          |         |1         |
|Magic Wand            |1         |1       |          |1        |          |
|Masking               |1         |1       |          |1        |          |
|Master Texture File   |          |1       |          |1        |          |
|Mover                 |          |1       |1         |1        |1         |
|Multigon              |1         |1       |1         |1        |1         |
|NameStamp             |          |        |1         |1        |          |
|Object Specs          |          |1       |1         |1        |1         |
|Object Tint           |          |        |1         |1        |1         |
|PANTONE� Colors       |          |        |1         |X        |1         |
|Parallel Lines        |          |        |1         |1        |1         |
|Pattern Manager       |          |1       |1         |1        |1         |
|Pen Manager           |          |        |1         |1        |1         |
|Place                 |          |        |1         |1        |1         |
|Point Rotate          |          |        |1         |1        |1         |
|PostScript            |          |1       |          |1        |          |
|Preferences           |          |1       |1         |1        |1         |
|Pressure Pen          |1         |1       |1         |1        |1         |
|QuickTime             |          |1       |1         |1        |1         |
|Quill Pen             |1         |1       |          |1        |          |
|Raster I/O            |          |        |          |         |1         |
|Registration Marks    |          |        |1         |1        |1         |
|Resistor              |          |        |1         |1        |          |
|RGB Color Manager     |          |        |1         |1        |1         |
|Rubber Stamp          |1         |1       |          |1        |          |
|Ruler Specs           |          |        |1         |1        |1         |
|Scale Specs           |          |1       |1         |1        |1         |
|Search & Replace      |          |        |1         |1        |1         |
|Selection Specs       |          |        |1         |X        |1         |
|Separations           |          |        |1         |X        |1         |
|Sharpen and Blur      |1         |        |          |1        |          |
|Size Other            |          |1       |          |1        |          |
|Slides                |          |        |1         |X        |1         |
|Smart Lines           |          |        |          |         |1         |
|Smart Mouse           |          |        |1         |X        |1         |
|Soften Edges          |          |1       |          |1        |          |
|Sounder               |          |1       |1         |1        |          |
|Spacing Other         |          |1       |          |1        |          |
|Spelling              |          |        |1         |1        |1         |
|Spiral                |          |        |1         |1        |1         |
|Split                 |          |1       |1         |1        |1         |
|Spray Manager         |          |1       |1         |1        |1         |
|StartupScreen I/O     |1         |1       |1         |1        |1         |
|Style Sets            |          |        |          |         |1         |
|System 7.0 Options    |          |1       |1         |1        |1         |
|Text Ruler            |          |        |1         |X        |1         |
|Text Utilities        |          |        |1         |X        |1         |
|Textures              |          |1       |          |1        |          |
|Three Color Airbrush  |1         |1       |          |1        |          |
|TIFF I/O              |1         |1       |1         |1        |X         |
|TimeStamp             |          |        |1         |1        |          |
|Tool Info             |          |1       |1         |1        |1         |
|UltraPaint 1.0 I/O    |          |1       |1         |1        |X         |
|Undo Killer           |          |        |1         |X        |          |
|Water Droplet         |1         |1       |          |1        |          |
|TOTALS                |30        |59      |74        |93       |74        |
