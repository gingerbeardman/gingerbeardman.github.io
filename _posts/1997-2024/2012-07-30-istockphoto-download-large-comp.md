---
layout: post
title: 'iStock: Download large comp'
tags:
- hack
- extension
- istockphoto
- medium
nouns:
comments: https://twitter.com/gingerbeardman/status/229909678539276288

---

Back in 2012, before my time at Apple, I was a contract developer and would often work with designers on specific projects. Over the course of those projects, we’d have to find stock photos for the apps or websites we were building and generally turned to [iStockPhoto](https://www.istockphoto.com) as our main resource.

During the design phase we would go through number of different image options, using the watermarked thumbnail images from iStock as temporary placeholders, or [comps](https://en.wikipedia.org/wiki/Comprehensive_layout), before settling on the final image that we would buy.

As well as the thumbnail, iStock also offered a zoom function that let you scroll around a large version of the photo. It occurred to me that I might be able to use this to get a larger watermarked comp for download?

Version 1
---------

In 2012, iStock’s zoom function loaded in the larger image split in tiles. My hunch is that this was to prevent people from downloading the larger version, as I doubt it would be much of a bandwidth saving mechanism.

Regardless, I was undaunted and up for the challenge. My first attempt at solving the problem, to prove that it was possible, was a UserScript. This is a snippet of JavaScript that can be run using an extension like [GreaseMonkey](http://www.greasespot.net) or [NinjaKit](https://github.com/os0x/NinjaKit) in much the same way as a native browser extension. They’re a very quick way to prototype an idea.

After the concept was proven I wrote extensions for both Safari and Chrome. When triggered—via a modified link on the page—the extension would zoom the image to the highest level, then programmatically grab each tile, composite the tiles together on a HTML5 canvas element, and finally convert the canvas into a large JPEG image that can easily be downloaded.

A lot of effort, you might say, but it worked very well and became quite popular throughout the design community.

Version 2
---------

In early 2013 iStock changed their website to remove the zoom feature, allowing the large comp to be accessed directly without having to stitch together a bunch of tiles. I updated my extensions to cope with these changes, which of course involved throwing out most of the code I’d written for the first version.

As a software developer you learn to be ready to [kill your darlings](http://c2.com/cgi/wiki?KillYourDarlings) during any sort of refactoring.

Version 3
---------

Today I release the third version of the extension, rewritten to work with the current iStock website. The extension becomes even simpler, but remains incredibly useful. You can [download it at my website](http://www.gingerbeardman.com/safari/).

This version adds a link—a green “Download large comp” button—below the existing, red “Download this photo” button. The beauty of this new link is that it is more usable and friendly than the previous versions of the tool.

The download can be triggered in a few different ways:

*   Clicking the green button will open the zoomed image in a new tab.
*   Option-clicking the green button to download the large comp immediately.
*   Right-clicking on the green button will to show a contextual menu with further options, such as the ability to copy the web address.

This version will hopefully last for a while, but I’ll be keeping my eye on it. [The source code is, of course, on GitHub](https://github.com/gingerbeardman/iStockLargeComp.safariextension).

![](https://miro.medium.com/max/1400/1*LdtRYi2Bv7oBTKTpLtXC-w.jpeg "iStockLargeComp: notice the new green button")
{:.tofigure}

Final thoughts
--------------

I have a lot of fun building extensions. Not just because it involves programming, DOM manipulation using JavaScript, and some HTML and CSS for styling. For me, the real fun comes out of deconstructing the inner workings of the webpage—I guess you could call it reverse engineering—and then implementing a solution that will not only work well, but be resistant to breaking at the slightest changes to the page it is modifying.

Contact
-------

[Get in touch](http://www.gingerbeardman.com) if your projects that require ex-Apple-level attention to detail.