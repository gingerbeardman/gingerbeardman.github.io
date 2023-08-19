---
layout: post
title: 'Japanese text support on English Palm OS devices'
tags:
- palm
- japanese
- patreon
- history
nouns:
- Macintosh
- Palm OS
comments: https://twitter.com/gingerbeardman/status/1463568521196101635

---

There is a lot of great Japanese software for Palm OS. It has arguably the best selection of Hanafuda games on a single system, and more besides.

Palm OS took a lot of inspiration from the original Macintosh system and it shows. The OS can be hacked, edited and otherwise modified at runtime which allows for a lot of cool stuff to happen. In the days where the operating systems that we use are ever increasingly locked down ("for your own good", they cry!) this type of low level access to the system seems really exciting and daring.

Anyway, Japanese Palm OS apps expect to be run on a system capable of displaying Japanese text, naturally. So running them on English Palm OS results in garbled text.

| ![PNG](/images/posts/palmos-japanese-1-goal.png#pixel "Official Japanese: goal") | ![PNG](/images/posts/palmos-japanese-2-english.png#pixel "English: garbled") |
|---|---|
| Official Japanese: goal | English: garbled |
{: .donotsort }

## Solutions

There exist a number of solutions that will allow Japanese text to be displayed correctly, though each has their own pros/cons. I originally wrote about this [in an issue on GitHub](https://github.com/meepingsnesroms/Mu/issues/60).

I had to survey them all just to be able to sleep at night! 🤣

| app  | pros  | cons | availability |
|---|---|---|---|
| [J-OS](http://simple-palm.com/palmware.html) | works,<br>good bundled fonts | [multiple versions for different devices](http://simple-palm.com/palmware.html),<br>uses multiple apps to achieve goal | discontinued,<br>time-limited,<br>but easy to reset trial<br>(delete pref: Psys) |
| [CJKOS](https://www.njstar.com/cms/cjk-os-for-palm)  | works,<br>OS4 (4.23) & <br>OS5 (4.63) versions  | finding good fonts,<br>managing fonts,<br>bad default options | discontinued,<br>time-limited,<br>but [easy to serialise](https://palmdb.net/app/cjkos) |
| [JaPon](http://www5f.biglobe.ne.jp/~T-Pilot/PalmWares/JaPon/JaPon-ReadMe.html)  | slick installer,<br>great minimal UI | doesn't localise launcher app names,<br>limited fonts with trial version,<br>OS5-only | supported |
|[ Yomeru&nbsp;5](http://yomeru5.sourceforge.net) | open source | doesn't localise launcher app names,<br>default fonts are very poor | discontinued,<br>time-limited |
| [Yomeru&nbsp;4](https://web.archive.org/web/20060513185903/http://www.geocities.com:80/b_palm_ug/yomeru.html) | none | OS4 version crashes for me | discontinued,<br>broken |

## Results

| ![PNG](/images/posts/palmos-japanese-3-cjkos-fjis10l.png#pixel "CJKOS + FJIS10L") | ![PNG](/images/posts/palmos-japanese-1-goal.png#pixel "Official Japanese: goal") | ![PNG](/images/posts/palmos-japanese-4-cjkos-mplus10.png#pixel "CJKOS + Mplus10") |
|---|---|---|
| CJKOS + FJIS10L | Official Japanese: goal | CJKOS + Mplus10 |
{: .donotsort }

## Recommendations

- OS5 or CLIÉ: J-OS (choose correct variant)
- OS4 or when using both OS4+5: CJKOS

## Notes

**CJKOS**
My only comment would be these fonts are not as legible as the official Japanese font. So, you can install additional/replacement fonts: [http://palm.roguelife.org/cjkos/](http://palm.roguelife.org/cjkos/). And uncheck both *CJKOS > Support CJK boldFont* and *Enhance > Add Horizontal Spacing in CJK* for better display.

**J-OS (J-Suites for CLIÉ)**
Install two additional fonts: [elisa.prc](https://ftp.vector.co.jp/04/19/115/elisal10.zip) and [dasaji-l.prc](https://web.archive.org/web/20161024062604/http://ha4.seikyou.ne.jp/home/azipon/font/p_dasa.zip) and convert them to J-OS format using the option in PowerFONT. You can delete choose to delete the originals after conversion. By setting these as the standard small and large fonts for lo-res any apps that run in low-resolution will look great. The bundled J-OS fonts are already great for stuff running in hi-res.