---
layout: post
title: 'Using game controllers and keyboards for custom shortcuts'
date: '2023-12-23T23:06+00:00'
tags:
- hack
- keyboard
- shortcuts
- controller
- productivity
nouns:
- Nintendo Switch
- Nintendo DS
- Nintendo
- Switch Pro Controller
- Switch
- JoyCon
- Wii remote
- GameCube
- PlayStation
- Xbox
- 8Bitdo
- Micro
- Zero
- macOS
- Windows
- Linux
- Procreate
- Figma
- Work Louder
- Bluetooth
comments: https://twitter.com/gingerbeardman/status/

---

Recently I've been following a trend in [macro-pads](https://www.thetechedvocate.org/what-is-a-macro-pad-and-what-do-you-use-it-for/), specialised/bespoke keyboards that provide an easy way to trigger keyboard shortcuts. A host of small companies have flooded the market with modified Bluetooth numeric pads that have key caps and marketing targeting Procreate, and Figma have teamed up with Work Louder to create a branded keypad with additional jog and rotary dials.

But none of these seem quite right for me. I have so many controllers and devices already it felt better to make use of what I have to hand.

I'm encouraged to find that there are lots of options! I'm a macOS user and I also dabble with Windows on occasion, but I have no idea how this can be done well on Linux.

## Controllers

An obvious choice for a device with multiple buttons is a game controller. In modern macOS it's easy to pair Nintendo Switch controllers, and the JoyCon (left or right) is an ideal candidate for a hand-held shortcut device. Xbox and PlayStation controllers can also be paired but they are much larger. Wired or wireless controllers will work.

You can even use a Wii remote using an adapter like the [*Mayflash MAGIC-NS Lite*](https://www.mayflash.com/product/magic_ns_lite.html). Or you might use more esoteric controllers with an adapter from Robert Dale Smith's [Controller Adapter](https://controlleradapter.com) store. In fact, I use one of his adapters to get an old [*Sony Jog Controller*](https://x.com/gingerbeardman/status/1629936413801062403?s=20) to act like a GameCube controller, which I then map to keyboard shortcuts using the methods below. The sky's the limit!

*8Bitdo* also have their [*Micro* controller](https://www.8bitdo.com/micro/) which offers more buttons and slightly better one-handed ergonomics than a Switch JoyCon. Before that they had Zero controller which is similar but with less buttons. This controller is really interesting as it can pose as a Switch Pro Controller, generic controller, or keyboard. This gives us even more options. 8Bitdo are aware of this market and have created this device to fit, including a bespoke mobile app, and they even go so far as to [call out this use case in their marketing material](https://www.8bitdo.com/micro/#content-1-9).

## Keyboards

These could be cheap bluetooth numeric pads or other small keyboards. I've personally tried a [*Nintendo Wireless Keyboard*](https://niwanetwork.org/wiki/Nintendo_Wireless_Keyboard) that came with Nintendo DS game *Pokémon Typing Adventure*. And of course the 8Bitdo controller mentioned above has a keyboard mode. There are many macro-pads listed for sale online, with various numbers of keys and rotary dials. Wired or wireless keyboards will work, so get creative!

## Remapping

The 8Bitdo controller has a specific app for iOS/Android that can change its keyboard mappings. That's cool for those mobile devices, and the iOS version will even run on an M1 Mac. But we can achieve more versatile solution by doing are remapping in software on the computer.

The general concept is to use an app that will take an input from your device of choice and map it to a keyboard shortcut or some other action that you specify. There are many apps that do this, so I've limited my list below to those that offer one important feature: *per-app mapping*.

This means you can set different shortcuts for each app you use, and they will change as you move between apps. Obviously its best if this happens automatically, to remove any friction in the process. 

I might have a button set to "zoom in" and "zoom out" that will trigger slightly different shortcuts in my text editor than in my image editor, or I might have a button set to "primary tool" and it will trigger a tool in a different way depending on the design app I am currently using. 

## Apps

<div class="table-wrapper" markdown="block">
|Name|Cost|Platform|Per&#8209;app?|Easy?|Type|
|----|----|--------|--------------|-----|----|
|[8BitDo Ultimate Software](https://support.8bitdo.com/ultimate/micro.html)|Free|iOS/Android|Manual|Yes|Key|
|[AutoHotKey](https://www.autohotkey.com)|Free|Windows|Auto|No|Joy|
|[BetterTouchTool](https://folivora.ai)|$10|macOS|Auto|Yes|Both|
|[GamePad Companion](https://apps.apple.com/gb/app/gamepad-companion/id428799479?mt=12)|$10|macOS|Manual|No|Joy|
|[JoyKeyMapper](https://apps.apple.com/gb/app/joykeymapper/id1511416593?mt=12)|Free|macOS|Auto|Yes|Joy|
|[JoyMapperSilicon](https://github.com/qibinc/JoyMapperSilicon)|Free|macOS|Auto|Yes|Joy|
|[JoyToKey](https://joytokey.net/en/)|$7|Windows|Auto|No|Joy|
|[Keyboard Cowboy](https://github.com/zenangst/KeyboardCowboy)|Free|macOS|Auto|No|Key|
|[Keyboard Maestro](https://www.keyboardmaestro.com)|$36|macOS|Auto|No|Both|
|[USB Overdrive](https://www.usboverdrive.com)|$20|macOS|Auto|Yes|Both|

</div>
