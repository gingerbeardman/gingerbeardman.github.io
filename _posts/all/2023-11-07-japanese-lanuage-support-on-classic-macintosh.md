---
layout: post
title: Japanese language support on Classic Macintosh
date: '2023-11-07T13:50+01:00'
tags:
- macintosh
- japanese
- macos
- system7
nouns:
comments: https://twitter.com/gingerbeardman/status/1721896016637825223

---

Collecting [Japanese Macintosh Magazine Media](/2021/10/30/macintosh-magazine-media/) was not without its challenges. After buying those discs, and [figuring out a way to index the content](/2022/03/31/working-with-classic-macintosh-text-encodings-in-the-age-of-unicode/), I wanted to run some of that software! So I needed a way to work with Japanese files and display them correctly in a real Classic Macintosh environment. For the reasons outlined below I decided to use only System J7.5.3 and Mac OS 9.

## System 6

You'd install a third party solution like [SweetJAM](https://macintoshgarden.org/apps/sweetjam) or [GomTalk](https://macintoshgarden.org/apps/gomtalk). This method only for the truly hardcore!

## KanjiTalk

You could install KanjiTalk 7 on top of US System 7. It includes all the features of System 7, plus utilities for entering and displaying Japanese.

## Native Japanese System 7

Later you could get official Japanese installers for System 7. I've found that it's easiest to install [System J7.5.3](https://macintoshgarden.org/apps/kanjitalk753) and dual boot to it using [System Picker](https://macintoshgarden.org/apps/system-picker). This allows full display of Japanese text, opening of Japanese documents and you can still type in English when you need to, by using the language input method icon in the menu bar.

## Language Kits

For later versions of the system you can install Language Kits provided by Apple. For System 7 and 8 the Language Kits had to be bought. For OS 9 they came for free. 

## Example: Mac OS 9

After installation the process requires some additional steps: set your system to a specific font, and register specific apps to display in Japanese (if they don't automatically).

1. Install "Language Kits"
Result: 
- You'll gain the language input menu
- You'll be able to see Japanese in Text control panel

2. Set "Control Panels -> Appearance -> Fonts -> Views Font" to Osaka
Result: 
- You'll be able to see Japanese in Finder

3. Use "Language Register" to set Japanese on a per-app basis
Result:
- You'll be able to see Japanese in the app menus and windows

Further details at [Japanese-ization of OS (Mac OS 9 edition)](http://www.kenkyuu.net/computer-01.html).