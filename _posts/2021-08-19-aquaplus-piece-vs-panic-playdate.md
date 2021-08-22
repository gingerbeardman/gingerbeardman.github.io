---
layout: post
title: 'Aquaplus P/ECE (vs Panic Playdate)'
tags:
- piece
- playdate
- hardware
nouns:
- Playdate
- Panic
- P/ECE
- Aquaplus
- Dreamcast
- PlayStation 2
- PlayStation
- PocketStation
- iPod
- Game Boy Advance
- Game Boy
- Nokia
- Sony Ericsson
- MaBoShi
- Wii
- DS
- Panekit
- Tron
- GP32
- Microsoft Outlook
- Polarium
- Flipull
- Plotting
- Panel de Pon
- Tetris Attack
- Mitchell Corp
comments: https://twitter.com/gingerbeardman/status/1429479465781010432

---

The P/ECE was a Japan-only handheld/mobile gaming console released in late-2001. It was created by Aquaplus, a company better known for visual novels, so it carries with it a specific oddball charm.

![Aquaplus P/ECE](/images/posts/piece.jpg " Aquaplus P/ECE, launch edition")
{:.tofigure}

## What is it?

An [early preview of the P/ECE](https://game.watch.impress.co.jp/docs/20011203/piece.htm) referred to the P/ECE as a portable game console though the water was somewhat muddied by the fact that one of the built in apps, Picket, was a PIM (Personal Information Manager). This means it was often referred to as a PDA. It has a d-pad, start and select buttons, and you can play games on it — that makes it a console in my eyes. But a console where each unit could be used as a development device by connecting it to a desktop computer.

Looking back at the P/ECE it was ahead of its time in many ways. To get a feel for what was going on when it came out:

- the most popular phone manufacturers were Nokia and Sony Ericsson
- the battle between the PlayStation 2 and Dreamcast was ongoing
- ICO was the latest PlayStation 2 game
- Rez was the latest Dreamcast game
- the iPod and Game Boy Advance had both just launched

...it really was a different era!

## Discovery

I learned of the P/ECE several years ago when looking at the output of one of my favourite video game developers, Kuniake "kuni" Watanabe. He's probably best known for [Panekit](https://www.siliconera.com/panekit-the-infinitive-crafting-toy-case-game-finally-sees-profits-after-13-years/), and open-world sandbox game on PlayStation. Though my favourite of his games is [MaBoShi](https://dreampast.tumblr.com/post/1342575347/maboshi) on Wii (and DS via download play) which is a razor sharp focussed set of three games that interact with each other in an innovative (and patented) way. I'd go so far as to say that [Circle mode in MaBoShi](https://www.youtube.com/watch?v=MiVbBi0jdhw) is my favourite game concept of all time.

The same preview article I mentioned above also says "in terms of specs, (P/ECE) comes above the PocketStation and below the Game Boy" though I think that's selling the P/ECE a little short. The CPU was quite fast and efficient for its time, and the fact that it had no specific graphics hardware meant that people had to get creative and optimise. Some of the results, seen below, would have been very tricky or impossible to achieve on the original Game Boy.

Over its short term of popularity the P/ECE platform had a vibrant homebrew scene and received ports or demakes of everything from Mitchell Corp masterpiece Polarium, through arcade gems like Flipull (aka Plotting), to console classics Panel de Pon (aka Tetris Attack) and more besides. It was home to proper Japanese RPGs and small arcade games and the number of games stretch into triple figures.

---

## Selected Games by Kuniake Watanabe

Anyway! During his indie days, Kuni developed for a range of platforms and in a variety of languages and wrote several games for the P/ECE. Here are my favourites:

![GIF](/images/posts/piece-spout.gif#piece)

### spout
A lunar lander style game where your thrust can destroy the scenery. Your task is to get as high as possible, though that is much easier said than done as the scenery becomes gradually more complex and time is always ticking away.

This is perhaps the most famous P/ECE game as it was released with source code for an SDL version and received ports to GP32 and related platforms.

---

![GIF](/images/posts/piece-fencer.gif#piece)

### fencer
A snake type game where your head has momentum and your tail length depends on your speed, allowing fine and fluid movement. The goal is to avoid bombs and use your tail to destroy them. Chaining together multiple explosions is the key to high scores.

---

![GIF](/images/posts/piece-interground.gif#piece)

### interground
In this game you must use a rotating stick to push sand around in an attempt to bury the little people running on top of it. If the stick touches a moving enemy or you run out of time that means game over.

---

## Selected Games by Kenta Cho (ABA Games)

Whilst digging I also found several old games by Kenta Cho (ABA Games) who even today continues to crank out brilliant little games at an inspiring rate.

![GIF](/images/posts/piece-barrage-reactor.gif#piece)

### Barrage Reactor
A twin-stick shmup played with a d-pad and two buttons! The d-pad moves your ship around and the buttons rotate your aim as you fire automatically. Waves of enemies appear and a surprisingly tactical game ensues.

---

![GIF](/images/posts/piece-speed-barricade.gif#piece)

### Speed Barricade
A 3D "Tron" light cycles game where the aim is to stay alive for as long as possible whilst outwitting as many computer controlled players. Quick reflexes are definitely needed for this one!

---

![GIF](/images/posts/piece-re.gif#piece)

### Re:
A 3D demake of Rez where the Microsoft Outlook(!) icon produces waves of enemies that need to be shot down as efficiently as possible by locking on to multiple enemies before firing your missiles. Maybe Kenta Cho was sick of email back in 2001?

---

If there's enough interest I'll feature more P/ECE games in a future blog post. Let me know on the comments link at the bottom of the page.

## 20 years later

Here we are in 2021 and Panic's Playdate will soon be shipping. By now I'm sure you've spotted several similarities between the P/ECE and Playdate. The main one being that both devices offer immediate, unfettered access to developers wishing to make their own games, and those games can be side-loaded.

Of course, 20 years is a long time in technology so the Playdate has many improvements compared to what the P/ECE achieved in 2001. More storage, faster CPU, better connectivity, plus a bigger and better screen. Playdate offers cross-platform development using either C or Lua and, and you won't need a device to develop for the platform. In contrast, P/ECE offered development only for Windows and only in C, plus you needed a device to test your code. A [homebrew emulator](https://github.com/autch/piemu) was eventually released, which is what I've used for the screen recordings shown earlier.

Oh, and both devices have names that make web searches a bit tricky. 😅

![JPG](/images/posts/piece-vs-playdate.jpg)

## Specifications Comparison

|                        |Playdate                                      |P/ECE                       |
|------------------------|----------------------------------------------|----------------------------|
|Manufacturer            |Panic                                         |Aquaplus                    |
|Release date            |2021                                          |2001                        |
|Battery (active)          |8h                                            |8h                          |
|Battery (standby)         |2w                                            |?                           |
|Battery (type)            |Rechargeable internal battery                 |1×AA                        |
|CPU (type)                |STMicroelectronics STM32F746<br>(ARM Cortex-M7F) |EPSON S1C33209<br>(32-bit RISC)|
|CPU (speed)               |180 MHz                                       |24 Mhz                      |
|Storage (RAM)             |16MB                                          |256KB                       |
|Storage (Flash)           |4GB (3.9GB usable)                            |512KB (348KB usable)        |
|Device (colour)           |Yellow                                        |Silver                      |
|Device (dimensions)       |76×74×9mm                                     |101×65×17mm                 |
|Device (inputs)           |D-pad, A, B, Menu, Sleep, Accelerometer, Crank|D-pad, A, B, Start, Select  |
|Device (weight)           |85g                                           |92g                         |
|Data connection (wired)   |USB-C to A                                    |USB-B to A                  |
|Data connection (wireless)|Wi-Fi & Bluetooth                             |Infrared (IR)               |
|Sound (type)              |Software synthesis, Digital audio             |Software synthesis          |
|Sound (speaker)           |Mono                                          |Mono                        |
|Sound (headphone)         |Stereo                                        |Mono                        |
|Display (technology)      |Sharp Memory LCD                              |FSTN LCD                    |
|Display (size)            |59×35mm<br>(2.7” diagonal)                       |45×31mm<br>(2.15” diagonal)    |
|Display (resolution)      |400×240                                       |128×88                      |
|Display (colours)         |2 (1-bit)                                     |4 (2-bit greyscale)         |
|Display (rendering)       |Software                                      |Software                    |
|Software (bundled)        |24                                            |6                           |
|Software (SDK)            |C & Lua                                       |C                           |
|Launch price            |$179 (¥19000)                                 |¥11000 ($100)               |
