---
layout: post
title: 'Replacing bitmap graphics in a PlayStation game'
tags:
- hack
- mod
- playstation
- hanafuda
- patreon
nouns: [Koikoi Komachi, Tim2View, PlayStation, Youkai Hana Asobi, Adobe Photoshop, Hanafuda, Koi-Koi]
image: /images/posts/hanafuda-card-transplant-3.png
comments: https://twitter.com/gingerbeardman/status/1146859337169739777

---
> A version of this article was [originally posted on my Patreon](https://www.patreon.com/posts/28136581)

I found an old Hanafuda Koi-Koi game that I can no longer easily play due to… sigh… what they call progress? It’s called Koikoi Komachi and was released around 2005 for Mac OS X (initially for PPC, and later Intel).

I really like the cards images that it has, and was able to extract them using [File Juicer](https://echoone.com/filejuicer/) which is a kind of Swiss Army Knife for easily extracting files that might be embedded in an app, archive or disk image.

![PNG](https://cdn.gingerbeardman.com/images/posts/hanafuda-card-transplant-1.png#pixel "The original cards as a sprite sheet extract from Koikoi Komachi")
{:.tofigure}

But just looking at the cards is not enough. I really needed to play a video game with them, you know? So I thought it would be cool to transplant them into the PlayStation game Youkai Hana Asobi.

## Here's what I did

* Split the new card image into individual cards
* Resize/shrink the individual cards to the dimensions used in the PS1 game
* Extract the images I want to edit from the PS1 game
* Edit the extracted images to add the new cards and make any other changes
* Replace the images in the PS1 game with the new ones

## Image Manipulation

To do the image splitting and resizing I used [Retrobatch](https://flyingmeat.com/retrobatch/) which makes this kind of stuff really easy. I created a workflow to crop out the individual cards and do the resizing all in one batch. Very cool!

## Image Editing

PlayStation images are palette-based so you need to use an image editor that respects the embedded indexed colour palette. There may be other capable editors, but Adobe Photoshop is very good at this sort of thing so that's what I used. Any old version will do, you definitely do not need the latest version.

I pasted each of my small card images into the two images used by the game, replacing the spectre/monster cards that are default. I also took time to change the options screen to modify the thumbnail that signifies which card design you're using, and I also added a "NEW" label to the title screen.

I stopped short of changing the "help" card images because that would have been a lot more work and I do not personally look at those whilst playing.

## ROM Hacking

There are many ways to get images out of a PS1 game, but I settled on [Tim2View](https://www.romhacking.net/utilities/799/) because it offers an all-in-one solution for extraction and insertion. It is as easy as:

* Export PNG... (F4)
* (do your image editing elsewhere)
* Import PNG... (F5)

**Warning:** Tim2View writes to your PS1 bin file at each operation—without prompting—so always keep a backup just in case something goes wrong!

**Gotcha:** be sure to respect whatever colour is marked as transparent when making your image edits. In my case this was the colour black (0,0,0) so I had to make sure to use an almost-black colour in my new graphics to avoid unwanted transparent pixels. You can quickly check the state of your image by toggling the background transparency type at the bottom of the window. If it's wrong just tweak and re-import.

![PNG](https://cdn.gingerbeardman.com/images/posts/hanafuda-card-transplant-2.png#pixel "A composite image showing the various graphics that were replaced or edited")
{:.tofigure}

## That was fun!

I then used [MultiPatch](https://projects.sappharad.com/tools/multipatch.html) to create an IPS patch file from the changes, so I could make this mod easy for other gamers to enjoy.

The finished patch is available at: [http://www.romhacking.net/hacks/4593/](http://www.romhacking.net/hacks/4593/)

## Screenshot

![PNG](https://cdn.gingerbeardman.com/images/posts/hanafuda-card-transplant-3.png#pixel "The final graphics being used whilst playing a game of Koi-Koi")
{:.tofigure}
