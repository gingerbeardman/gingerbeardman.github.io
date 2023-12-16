---
layout: post
title: "See the sky: Thoru Yamamoto's Christmas story, for Playdate"
date: '2023-12-16T00:00+00:00'
tags:
- hypercard
- macintosh
- playdate
- port
- japanese
- birthday
nouns:
- Playdate SDK
- Playdate
- PyMusicLooper
- adpcm-xq
- Lua
- Macromedia Director
- See the sky
- Thoru Yamamoto
- Thoru
- Matt Sephton
comments: https://twitter.com/gingerbeardman/status/1735813826589704428

---

*Thoru Yamamoto* (Japanese: 山本徹 or とーるやまもと), born 1955, is a Japanese multimedia artist. Over the years he has released work in many formats including, but not limited to: magazine illustrations, HyperCard decks, interactive CD-ROMs, printed books, websites, digital stickers, and videos. He is perhaps best known for his story books distributed as HyperCard stacks and his unique 1-bit art taking advantage of the limitation imposed by early Apple Macintosh computers.

*See the sky* is one such story book, a Christmas present released in 1992 as a series of HyperCard stacks. In 1996 it was re-released in a remastered form: as an interactive CD-ROM, produced using Macromedia Director, which added ambient music and navigation to the original images. Also released in 1996 was a printed book of the story, presented as 3 images per page. Finally, in 1999 a CD-R of the combined HyperCard stacks was released.

## A new edition for 2023

I've created a new version of *See the sky* for [Playdate](https://play.date). The remastering/remaking/porting process was quite involved, so I'd like to detail it in this blog post.

![See the sky](https://cdn.gingerbeardman.com/images/posts/thoru-yamamoto-see-the-sky-playdate.gif#playdate)

## Extracting the original images

I used [HyperCardPreview](https://github.com/PierreLorenzi/HyperCardPreview) to export the assets from the original [HyperCard](https://en.wikipedia.org/wiki/HyperCard) stack. I did this back in October 2022, and had to use an old MacBook Pro running Mojave to do it. Just today, whilst writing this blog post, I figured out that HyperCardPreview will refuse to open stacks if the app Stacksmith is also present on your Mac!? As soon as I deleted Stacksmith, HyperCardPreview opened the files just fine. It seems to be some sort of issue with them competing for control of the `com.apple.hypercard.stack` uti. Anyway, *See the sky* consists of just over 500 full screen card images. For other stacks, you might get a combination of background images and card images that would need re-compositing - it really depends on the stack.

Thoru told me that when he first started out with HyperCard he wasn't aware of the benefits of using a common background card and different foreground cards, which is why *See the sky* consists of only foreground cards. For this reason it was very difficult for him to upload the files, which were rather large for the time. Later productions would make more effective use of background cards to keep the file size as small as possible.

## Implementing a viewer

My way of developing is to think of the goal as clearly as possible, then get something up and working as quickly as possible, and after that iterate and refine until I reach the goal. So it was easy to create a sort of slideshow viewer for the images, keeping track of the current image and allowing navigation forwards and backwards with A and B buttons, loading the next/previous image as required. Pretty quickly it became apparent that I could not simply display each screen centred as important content would frequently be out of view.

## Adjusting each screen

So I added a table to store offsets for each screen. But defining these manually would be very time consuming so I set about creating an interactive way to do this. I added a debug mode in which I map the d-pad (cursor keys) to move the current image up/down/left/right, along with the ability to save the offsets table to a file. This was a huge productivity boost! But I was still finding it quite a repetitive task, so I added further key mappings so I could use the numbers on the numeric pad of my keyboard to quickly set the offsets for a screen to each of the 8 compass directions, or centred. This increased productivity even more. At this point I found myself setting the same offsets for a screen as the previous screen, so I added to more keys to copy the offset from the previous/following screen. All in all this made setting offsets for 500 screens quick and easy. When I was happy I copied the offset table into the code and that became the default values.

This is all to say that whilst the original Macintosh resolution of 512×342 does not match the Playdate's resolution of 400×240, *See the sky* still works on Playdate because every screen has been manually repositioned to keep the important elements in view, a process similar to the "pan and scan" adaptation of movies for 4:3 TVs.

## HyperCard look and feel

The most recognisable feature of many HyperCard stacks are the crossfades between screens. This was essential to the experience. Thoru even took advantage of the crossfade in certain scenes by changing only small elements from screen to screen so that the crossfade turned into a sort of stop-motion animation effect.

To achieve the crossfade on Playdate I do the following:

1. Before the transition I capture the current screen using `playdate.graphics.getWorkingImage()`
2. Next I make this image into an overlay, in my case I'm assigning it to a "fade" sprite
3. Behind the fade image/sprite I load in the request next/previous image
4. Finally I use `playdate.graphics.image:fadedImage(alpha, Bayer8x8)` to fade out the overlay, which results in the image becoming more and more transparent, eventually disappearing completely

I also added the ability to have slower or faster crossfades depending on your preference. I do this by adjusting the refresh/frame rate of the game itself, rather than skipping any of the fade.

The only other feature I needed to add was a flashing capability. This happens at a handful of places in the story to various degrees, mostly there are a few flashes in places but in one places there are 10 flashes. Given that people with photosensitive epilepsy won't want to see the scree flash I honour the Playdate "reduce flashing" system setting. If the user has that toggled on the story will only flash once at each instance. The speed of the flashing is quite slow, and not tied to the speed of the crossfade.

Page turn sounds are recordings of the sounds defined in the original HyperCard stack, another essential part of the experience. Thoru describes these sounds as "pipo papo" and that's how I label it in the settings. I also provide the option to use a more realistic page turn sound, or switch off page turn sounds entirely.

## Chapters

I added chapter navigation which unlocks as you go through the story, in a similar way to the 1996 CD-ROM release of *See the sky*. This means you can revisit any previous chapter, and once you've reached the end of the story you'll have access to all chapters. If you want to reset that progress, for example to let somebody else enjoy the story from the beginning and remove any temptation for them to skip ahead, you can delete the "game data" through Playdate Settings. Chapter title cards are only shown when using the chapter navigation, and not whilst going through the story, I do this by injecting temporary images into the crossfade system.

## Progress

I also added a progress bar, shown when you bring up the menu. It's a vertical bar drawn in the centre of the screen between the menu and fade game image. The bar itself is shaded at 50%, and onto it I draw markers for each chapter position. The current position is shown by drawing a solid white bar from the bottom of the screen to the current position. This means that the bar "fills" with white from the bottom as you progress through the story.

![Progress bar](https://cdn.gingerbeardman.com/images/posts/thoru-yamamoto-see-the-sky-playdate.png#playdate)

## Experiments with sound

The 1996 CD-ROM release of *See the sky* has ambient music, but Thoru and myself couldn't figure out the rights to this so we could not use it. I had done the work, just in case, so I'll mention it here.

I [extracted the audio from the Director files using a technique I've previously blogged about](/2023/08/12/extracting-sounds-from-macromedia-director-files/). I then converted the audio files to 44.1KHz 16-bit WAV files, and used [Ocen Audio](https://www.ocenaudio.com/en/startpage) to remove the base noise from those files. Basically, you select a part of the audio that contains only noise and it removes this from the entire audio file. Doing this without first upsampling the audio meant it did not work as well or at all. After the de-noising, I converted to ADPCM using adpcm-xq which gave files half the original size at much higher quality. 

## Experiments with music

After we realised we would not be able to use the original ambient music, I looked at using completely different music, turning to the catalogue of watson @ MusMus. I found a piece of music for each chapter of the story and extracted loops using PyMusicLooper. I then tweaked the loops by adjusting their start point by moving a section of audio from one end to the other so the loop began with the part of the audio I thought sounded best. I use [TwistedWave](https://twistedwave.com) for most sound editing like this. Thoru really liked the music itself but was of the opinion that no music would be more honest to the original release. I can't argue with that reasoning. Feel free to play your own choice of music whilst experiencing the story.

## Optimising for size

The final app binary is tiny but the images are adding up to about 3MB. That's fine, but I wondered how I might be able to optimise them. I used imagemagick's montage command to stitch the images together into a grid. In Playdate land we call this an image table, but you might refer to it as a sprite sheet. This reduced the size of 500 separate card images from 3MB to a single image of just 2MB. A nice saving! 

The 500 screen image table occupies 10.5MB RAM, so about two thirds of the available RAM on Playdate. One downside of bundling 500 screens as single file are a short delay on loading for users, a short delay on building for me as a developer, and the need to regenerate the single image if any of the images it contains are changed.

> At this point, I could have stopped. I should have stopped. But, of course, I didn't.
> 
> I've often wondered how the dimensions of a sprite sheet grid affect the file size when saved as a compressed format such as PNG. The extreme examples in this case would be having a tall grid of 1×504 or a wide grid of 504×1, and in between we have some exact multiples. I generated one sprite sheet for each grid size and here found that for this set of images a grid of 42×12 resulted in the smallest image file size a saving of a further 4% or so. The savings are similar when converted to the Playdate pdt image format.

And that's it. The final size of this new version is smaller than the original, mostly due to the image optimisation. I could make it even smaller by exporting all the final crops of the screen images, create a new image table of those, displaying them with zero offset. But I decided to not go there!

## The result

You can download *See the sky* for Playdate from my page on itch.io, and it is a free download. A present from Thoru and myself. With best wishes for a Merry Christmas. 

[https://gingerbeardman.itch.io/see-the-sky](https://gingerbeardman.itch.io/see-the-sky)

- 500 screens
- 10 chapters
- ~ 30 minute experience
- Quick navigation menu unlocked as you go
- Position is remembered between launches
- Settings for sfx/music and crossfade speed

## Credits

- Created by Thoru Yamamoto
- Edited by Matt Sephton
- © 1992 Thoru Yamamoto

----

### Further reading

* [Thoru Yamamoto @ Lost Media Wiki](https://lostmediawiki.com/Thoru_Yamamoto_works_(partially_found_interactive_media;_1990s)) read more about his work
* [Thoru Yamamoto HyperCard Stacks Collection @ archive.org](https://archive.org/details/thoru-yamamoto-hypercard-stacks) view the original *See the sky* & more

### Birthday blog post?

- Check out my other [#birthday](/tag/birthday/) blog posts.