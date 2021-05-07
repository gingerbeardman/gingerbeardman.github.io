---
layout: post
title: Pixel-Perfect retro gaming on LCD 480p EDTVs
tags:
- 480p
- retrogaming
- recommendations
nouns:
- Philips
- Sharp
- Samsung
- Genesis Logic
- MStar
carousel: pixel-perfect-480p-edtv
comments: https://twitter.com/gingerbeardman/status/1390306410617966592
featured: true

---
I recently saw a feature on [RacketBoy](https://www.racketboy.com/retro/the-best-43-square-lcd-monitors-for-retro-gaming-classic-pc-use) about "The Best 4:3 LCD Monitors for Retro Gaming" which is an interesting list but misses the mark for one reason: it ignores scaling problems.

LCDs are best at their native resolution and all the listed monitors in that article are odd PC resolutions. If we think about retro gaming display outputs then we're squarely sub-480p. Anything higher will mean the image gets scaled and the results will be suboptimal.

What we need is a display with a native resolution of 480p. Do such things exist? Why, yes, they do!

## LCD 480p EDTVs

For a handful of years I've been using a 20" LCD 480p EDTV which offers great support for 240p and 480p with zero scaling. These types of TVs mean you get pixel-perfect results for Wii/GC, Dreamcast, Xbox, Xbox 360, PS3/2/1 and more besides. Plus, they don't take up anywhere near as much room as a PVM or other CRT, and are a lot more manageable than the huge (40"+) plasma 480p TVs. Seeing the Wii on this kind of display is a real shock and quite amazing.

In fact I use my modern emulation PC at 640x480p using a DisplayPort to VGA adapter. This gives me perfect video output from RetroArch for everything up to and including 480p, which covers what I consider the golden period of arcade and console gaming. On occasion I've run some PC software (Dolphin emulator, Richard Burns Really) at much higher resolutions and downscaled to 640x480—a process called supersampling which gives great, smooth results.

The pixel density of a 20" IPS panel like this is such that the sub-pixel gaps look a little like an aperture grille. Adding a 640x480 pixel scan-line overlay in RetroArch brings me very close to the look of my PVM but with a display that is much easier to manage.

The 480p EDTV also proves unremarkable to my wife, I guess because unlike my PVM it doesn't like a microwave, which means it can happily live in the lounge.

## Which one to get?

Philips made the best 20" 480p EDTVs: they have an LG/Philips IPS panel (yes, in 2006!) and PC input connector. The trick is to find a set with DVI/VGA input so you can use the PC mode which does not have any image processing applied to it. I'm in Europe so I use the Philips 20PF4121, which is simply glorious. Response time is less than one frame, and there is little to no motion blur on my TV, as measured by the EIZO monitor test. It has a hardware scaler by Genesis Logic that can handle 240p and is pretty good at deinterlacing (though I use a GBS-Control for better deinterlacing on PS2).

Connections: you want to use DVI and whatever adaptors you need to get your signal there. Analogue signals over VGA and Component (YPbPr) can be used with a simple pin adaptor. Digital signals like HDMI and DisplayPort, or even those modern HDMI dongles for old consoles, can be used with a suitable signal converter (pick a good one to avoid lag) to get to VGA and then go from there. TVs with HDMI input are different in that it is not used for PC mode.

Notes: some other manufacturers used the same LG/Philips IPS panel. Be aware that Sharp used their own panel technology, and Samsung used a different panel again, neither of which are IPS and so not as good. Sharp also use their own scaler hardware which is not as good as the scaler in my Philips. Scalers my MStar as used in certain EDTVs do not support 240p.

I'm yet to find a 16:9 aspect 480p TV with PC input. Though I continue to look for one!

## The EDTV Hit List

[Here's a Google Docs spreadsheet](https://docs.google.com/spreadsheets/d/1HOEvXkjMTum_Vd1CJ0RrpvgH0a_Uo0zJc9RwUtfZVZ0/edit?usp=sharing) that should help you find a suitable LCD 480p EDTV. The top and most well-tested EDTVs from that list are displayed in the smaller table below.

When looking for one of these you need to check the following:

* DVI or VGA connector?
* IPS panel?
* Genesis Logic scaler?

Places to get this info are: photos of spare parts, specification brochure, service manual parts list, panelook and icecat websites.

Feel free to contact me [@gingerbeardman](https://twitter.com/gingerbeardman) on twitter with details of your buying choice and experiences and I'll be sure to update the spreadsheet.

|BRAND  |MODEL    |REGION|CHASSIS       |IPS|SCALER |240P|INPUT|YEAR|SPECSHEET                                                                         |WEBSITE                                                          |SERVICE                                                                                                                 |NOTES                    |FIELD14|FIELD15|
|-------|---------|------|--------------|---|-------|----|-----|----|----------------------------------------------------------------------------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------|-------|-------|
|Philips|20PF4121 |EU    |LC4.1E        |Y  |Genesis|Y   |DVI  |2006| [link](https://www.manualslib.com/manual/331343/Philips-20pf4121.html)                    |https://www.philips.co.uk/c-p/20PF4121_05/4000-series-20-inch-lcd| [link](https://www.manualslib.com/manual/1222050/Philips-Lc4-1e.html)                                                           |HIGHEST RECOMMENDATION   |       |       |
|Philips|20PF4110 |EU    |LC4.1E        |Y  |Genesis|Y   |DVI  |2005| [link](https://www.p4c.philips.com/files/2/20pf4110_01/20pf4110_01_pss_.pdf)              | [link](https://www.philips.co.uk/c-p/20PF4110_01/20-inch-lcd)            |                                                                                                                        |see USA models           |       |       |
|Philips|20PF5121 |EU    |Scaler/PCB    |Y  |Genesis|Y   |DVI  |2006| [link](https://www.manualslib.com/manual/331345/Philips-20pf5121.html)                    |https://www.philips.co.uk/c-p/20PF5121_01/5000-series-20-inch-lcd|                                                                                                                        |                         |       |       |
|LG     |RZ-20LA90|EU    |ML-041B       |Y  |Genesis|Y   |VGA  |2005| [link](https://icecat.biz/en/p/lg/rz-20la90/tvs-rz-20la90-347066.html)                    | [link](https://www.lg.com/uk/support/product/lg-RZ-20LA90)               | [link](https://servlib.com/lg/tv/rz-20la90-chassis-ml-041b.html)                                                                |                         |       |       |
|Philips|20FT3310 |USA   |LC4.1HU       |Y  |Genesis|Y   |VGA  |2004| [link](https://www.manualslib.com/manual/331330/Philips-20ft3310.html)                    | [link](https://www.usa.philips.com/c-p/20FT3310_37/-)                    |                                                                                                                        |Scaler/PCB               |       |       |
|Philips|20FT3220 |USA   |LC4.1HU       |Y  |Genesis|Y   |VGA  |2004| [link](https://www.p4c.philips.com/files/2/20ft3220_37/20ft3220_37_pss_.pdf)              | [link](https://www.usa.philips.com/c-p/20FT3220_37/51-cm-20-inch-lcd)    |                                                                                                                        |Scaler/PCB               |       |       |
|Philips|20PF8946 |USA   |LC4.1U, LC4.1A|Y  |Genesis|Y   |VGA  |2004| [link](https://www.manualslib.com/manual/125563/Philips-20pf8946.html)                    | [link](https://www.usa.philips.com/c-p/20PF8946_37/51-cm-20-inch-lcd)    | [link](https://elektrotanya.com/philips_lc4.1l-aa_chassis_20pf8946-78_23pf5321-78_23pf8946-78_23pf8946m-78_sm.pdf/download.html) |Scaler/PCB, IPS/Service  |       |       |
|Philips|20HF5474 |EU    |LC4.1HE       |Y  |Genesis|Y   |DVI  |2009|[link](https://www.download.p4c.philips.com/files/2/20hf5474_10/20hf5474_10_pss_enggb.pdf) |                                                                 | [link](https://tel-spb.ru/files/philips_LC4.1HE_AB.rar)                                                                         |Scaler/PCB               |       |       |
|Philips|20HF5473 |EU    |LC4.1E        |Y  |Genesis|Y   |DVI  |2005| [link](https://www.download.p4c.philips.com/files/2/20hf5473_10/20hf5473_10_pss_.pdf)     |                                                                 | [link](https://manualzz.com/doc/1300050/lc4.1he)                                                                                |Scaler/Service, IPS/Label|       |       |
|       |         |      |              |   |       |    |     |    |                                                                                  |                                                                 |                                                                                                                        |                         |       |       |
|       |         |      |              |   |       |    |     |    |                                                                                  |                                                                 |                                                                                                                        |                         |       |       |

## Photos

You can also look through my [Instagram photos tagged with #20PF4121](https://www.instagram.com/explore/tags/20pf4121/) for additonal photos and video footage.

{% include carousel.html height="82" unit="%" duration="7" %}