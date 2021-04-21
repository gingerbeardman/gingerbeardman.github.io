---
layout: post
title: Deneba External Tools
tags: [macintosh, system7, history, deneba]
nouns: [Deneba, UltraPaint, artWORKS, Canvas, AppleLink, Wacom ArtPad II, FileType, ResEdit]
featured: yes
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