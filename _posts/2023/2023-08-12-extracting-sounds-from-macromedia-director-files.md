---
layout: post
title: Extracting sounds from Macromedia Director files
last_modified_at: '2023-08-12T20:42+01:00'
tags:
- hack
- macintosh
- audio
- script
nouns:
- Thoru Yamamoto
- Macromedia Director 2004
- Macromedia Director
- Macromedia
- Director
- ProjectorRays
- .dcr
- .dir
comments: https://twitter.com/gingerbeardman/status/1690449222712131584

---

For my latest "quick" [Playdate](https://play.date) project—a remaster of a ~1997 web game by [Thoru Yamamoto](https://lostmediawiki.com/Thoru_Yamamoto_works_(partially_found_interactive_media;_1990s))—I decided to add sound effects. In order to keep it as authentic as possible I decided to use only sound effects created by Thoru Yamamoto that were used in his other productions.

The largest collection of sounds I could think of were those included in his Macromedia Director web experiments which include everything from short animations, through games and interactive toys, to abstract slideshows. The problem is, these Director files are tricky to deal with some 25 years later.

## Halt and Catch Fire

A bit of reading and some help from [Misty De Méo](https://www.mistys-internet.website) led me to [ProjectorRays](https://github.com/ProjectorRays/ProjectorRays) which can convert a protected .dcr file into an editable .dir file, and also allows saving of all the individual chunks that comprise each file. Think of it as one chunk for each piece of graphics, sound, and so on.

Once you've converted the .dcr to .dir you can open the file in, say, [Macromedia Director 2004 and use CastRipperTool](https://vinizinho.net/projects/shockwave-rip) to export sounds and graphics and more. But it's a very manual process and the whole setup is prone to crashing. Crucially, it won't open some older Director movies so this wasn't a good enough solution for me.

## Chunks

I looked to the chunks that had been dumped by ProjectorRays and some quick experimentation showed that the '`snd `' chunks contained raw PCM audio date with a bespoke header. Loading these into something like ocenaudio wave editor was proof enough, but I would need to figure out some of the header to see if I could get the correct sample rate of each file.

With a bit of help bouncing ideas off [hikari_no_yume](https://hikari.noyu.me) in a [bug report](https://github.com/hikari-no-yume/dream-sparer/issues/1) on one of their tools I figured out the location of the sample rate. Interestingly, the values were unexpected and not the usual values 11025, 22050, etc. It turns out that classic Apple Macintosh used some slightly [different sample rate values](https://whitefiles.org/dta/pgs/c08.htm): 11127, 22254, etc.

Using the `xxd` tool I dumped the relevant section of the headers of 1163 sounds from 105 .dcr files. The breakdown in sample rates found was as follows:

Rate (Hz) | Hex | Quantity Found
-- | -- | --
7,418 | 0x1cfa | 1
11,127 | 0x2b77 | 616
22,050 | 0x5622 | 31
22,254 | 0x56ee | 515

The lack of any unexpected sample rate values was further proof that this was the real deal.

## Shell script

Armed with this information I decided to write a short shell script that would do the following:

1. extract the sample rate from the '`snd `' chunk
2. create a trimmed raw pcm file excluding the 78-byte header
3. use `sox` to add a new WAV header using the correct sample rate

This script allows me to batch process all the audio and that's much more to my liking: it captures everything compared to CastRipperTool and it's a lot quicker.

So, dump your chunks using ProjectorRays and then call my script like this:

```sh
find . -iname "*.bin" -exec ./bin2wav.sh {} \;
```

<script src="https://gist.github.com/gingerbeardman/1e6170d2652352bf30623b2a6c8d12fd.js"></script>

Notes:
- I'm assuming 8-bit, mono, unsigned PCM data in the '`snd `' chunks and have not found anything else in them.
- [SoX](https://sox.sourceforge.net/sox.html) (Sound eXchange, the Swiss Army knife of audio manipulation) requires the .raw extension for raw PCM audio data, it will refuse to process the files without it.
