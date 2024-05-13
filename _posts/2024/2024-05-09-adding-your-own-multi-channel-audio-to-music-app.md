---
layout: post
title: "Adding your own multi-channel audio to Music app"
date: '2024-05-09T21:19+01:00'
last_modified_at: '2024-05-13T21:13+01:00'
tags:
- music
- hack
nouns:
- Björk
- Debut
- Post
- Homogenic
- Vespertine
- Dolby Atmos
- DVD-Audio
- DVD-Video
- Dolby Digital
- DTS 5.1
- DTS
- Apple Music
- Cloud Library
- iCloud Music Library
- Music.app
- Music app
- Music
- iTunes
comments: https://twitter.com/gingerbeardman/status/1788667408426619156
style: |
  img {
    width: 563px;
  }

---

I'm really enjoying Dolby Atmos, "spatial audio", or "surround sound" as we used to call it. There is so much music in this format on streaming platforms, both new albums and classic albums. I wanted to listen to Björk's first four albums in "spatial audio", but they don't currently exist in that format on streaming platforms. But I was reminded about DVD-Audio versions of these from back in the day, and I could find most of mine, so I figured I'd have a go of converting them myself whilst I'm waiting for Dolby Atmos versions to hit streaming.

This blog post lists the three main steps needed to add your own multi-channel audio to Music.app (you might know it by its old name: iTunes) and have them be accessible across all of your devices thanks to Apple Music's Cloud Library (you might know it by its old name: iCloud Music Library).

----

## DVD Audio/Video

Three albums I have were released on DVD and contain multi-channel audio in both DTS and Dolby Digital as DVD-Video, these are Debut, Post, and Homogenic. Vespertine is better mastered and was released as a disc that included DVD-Audio. Regardless, we can take the same approach for these two disc types: use [DVD Audio Extractor](https://www.dvdae.com) (the 30-day trial is OK) to extract the tracks to FLAC files:

Settings:
- Sample rate: Same as input
- Channels: All 6 Channels
- Bits per sample: 24-bit

It'll take a minute or two for the files to be generated.

- Result: many multi-channel FLAC files

----

## Aside: Cloud Library

Music.app (formerly iTunes) doesn't really go out of its way to support multi-channel audio users might add themselves. We won't be creating Dolby Atmos tracks, but rather we'll take advantage of a loop hole in Apple Music's Cloud Library feature.

Thanks to [a post on the QuadrophonicQuad forum](https://www.quadraphonicquad.com/forums/threads/ripping-in-surround-for-apple-tv.33931/post-699285) we know that we need to limit the bitrate to 256kb/s for it to be uploaded unmodified to our Cloud Library and sync to all our devices. Well, it turns out that trick also works with 768kb/s bitrate files, which is equivalent quality Dolby Atmos releases on Apple Music. That's good enough for me.

----

## Conversion/Encoding

There are many GUI tools that you might use to do this but I've chose to use ffmpeg on the command line. Feel free to adapt these settings to your tool of choice. The most important property is the 768kb/s bitrate, as mentioned earlier.

`for n in *.flac; do ffmpeg -i "$n" -vn -c:a aac_at -b:a 768k -sample_fmt s16 -ar 48000 "$n.m4a"; done`

Breaking down the command above:

- `for n in *.flac; do` = loop through all *.flac files
- `-i "$n"` = input, using filename from for loop
- `-vn` = remove the video track
- `-c:a aac_at` = use Apple's AAC encoder
- `-b:a 768k` = target 768kb/s bitrate
- `-sample_fmt s16` = 16-bit sample format
- `-ar 48000` = 48KHz sample rate
- `"$n.m4a"` = output, using filename from for loop, adding .m4a
- `; done` = end for loop

- Result: many multi-channel M4A files

----

## Chapters

If the M4A audio file contains chapters they will need to be removed or the file will not be playable on iPhone. We can load it into [Subler](https://subler.org), then select and delete the "Text Track".

The process above should not introduce them, but I'm mentioning it as I was repeatedly caught out by this on my journey to this solution. If you fail to remove it the track will either either upload but not be playable, error and not upload, or be matched rather than uploaded.

- Result: multi-channel M4A file (modified)

## Final steps

Add the final files to Music.app on your desktop. At this point you can add artwork and other meta data, such as tagging them as "multi-channel" or similar.

When you're done make sure to choose *File > Library > Update Cloud Library*. After they finish uploading, open the Music app on your iPhone and you'll see the multi-channel files ready to play.

These multi-channel files work wonderfully with AirPods Pro spatial audio head tracking!

----

![WEBP](https://cdn.gingerbeardman.com/images/posts/music-multi-channel.heic "My own multi-channel audio in Music app on my iPhone")
{:.tofigure}
