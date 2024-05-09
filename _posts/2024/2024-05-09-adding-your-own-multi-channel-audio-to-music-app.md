---
layout: post
title: "Adding your own multi-channel audio to Music app"
date: '2024-05-09T21:19+01:00'
tags:
- music
- hack
nouns:
- Björk
- Dolby Atmos
- DVD-Audio
- Dolby Digital
- DTS 5.1
- DTS
- Apple Music
- Cloud Library
- iCloud Music Library
- Music.app
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

## DVD-Audio

The albums I have were released on DVD and contain multi-channel audio in both DTS and Dolby Digital. We can take the `VIDEO_TS` folder, decrypt and convert to an MKV for easier handling in the following steps. MKV is just a container, so the audio is passed through untouched, so there's no lossy conversion at this point. I used [MakeMKV](https://www.makemkv.com) for this task.

- Result: many multi-channel MKV files
- Required: the MKV file that contains DTS 5.1 audio (in my case it was the largest one)

## Aside: Cloud Library

Music.app (formerly iTunes) doesn't really go out of its way to support multi-channel audio users might add themselves. We won't be creating Dolby Atmos tracks, but rather we'll take advantage of a loop hole in Apple Music's Cloud Library feature.

Thanks to [a post on the QuadrophonicQuad forum](https://www.quadraphonicquad.com/forums/threads/ripping-in-surround-for-apple-tv.33931/post-699285) we know that we need to limit the bitrate to 256kb/s for it to be uploaded unmodified to our Cloud Library and sync to all our devices.

You might think a multi-channel audio file with a total bitrate this low is a waste of time, and for home listening you'd be quite right. But for portable listening I think it's fine. My reasoning is that because the channels are encoded individually they're much less busy than a stereo mix so they don't need as much bitrate to reach good enough quality as a stereo mix does. When I'm out walking I'd quite like the spatial/surround effects and am not too concerned about having the most high fidelity source. It's a bit like listening to a Walkman versus a home hi-fi system. Don't knock it until you've tried it! YMMV.

## ffmpeg

There are many GUI tools that you might use to do this but I've chose to use ffmpeg on the command line. Feel free to adapt these settings to your tool of choice. The most important property is the 256kb/s bitrate, as mentioned earlier.

`ffmpeg -i D1_t01.mkv -vn -c:a aac_at -b:a 256k -sample_fmt s16 -ar 44100 D1_t01.m4a`

Those options:

- `-i D1_t01.mkv` = input file
- `-vn` = remove the video track
- `-c:a aac_at` = use Apple's AAC encoder
- `-b:a 256k` = target 256kb/s bitrate
- `-sample_fmt s16` = 16-bit sample format
- `-ar 48000` = 48KHz sample rate
- `D1_t01.m4a` = output file

Note: I don't know how to split the DVD-Audio stream into tracks that we can encode individually, so we're encoding the entire album as a single file.

- Result: multi-channel M4A file

## Chapters

By default the file will contain chapters with generic names "Chapter 1", etc. that are carried across from the DVD content. We need to remove these or the file will not be playable on iPhone. We can load it into [Subler](https://subler.org), then select and delete the "Text Track".

- Result: multi-channel M4A file (modified)

## Final steps

Add the final files to Music.app on your desktop. At this point you can add artwork and other meta data, such as tagging them as "multi-channel" or similar.

When you're done make sure to choose *File > Library > Update Cloud Library*. After they finish uploading, open the Music app on your iPhone and you'll see the multi-channel files ready to play.

These multi-channel files work wonderfully with AirPods Pro spatial audio head tracking!

![WEBP](https://cdn.gingerbeardman.com/images/posts/music-multi-channel.heic "My own multi-channel audio in Music app on my iPhone")
{:.tofigure}
