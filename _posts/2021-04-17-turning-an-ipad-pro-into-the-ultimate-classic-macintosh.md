---
layout: post
title: Turning an iPad Pro into the Ultimate Classic Macintosh
tags:
- system7
- minivmac
- basiliskii
- emulation
- macintosh
nouns:
- Classic
- iPhone
- System
- 1-bit Woodblocks
- Share Sheet
- iOS
- artWORKS
- UltraPaint
- Macintosh
- Monitors
- Mini vMac
- Pro
- iPad
- BasiliskII
carousel: ''
featured: false
comments: ''

---
I've started work on the next in my 1-bit Woodblocks series: "Tekagami" (Ito Shinsui's "Hand Mirror"). So it's a good time to talk about how I turned an iPad Pro into the ultimate Classic Macintosh.

![](/images/6547d0cb-447f-4373-92c3-a23eac7acb51.jpeg)

### Emulators

Both Macintosh emulators available on iOS we're ported by [@maczydeco](https://Twitter.com/maczydeco "@maczydeco") who has done an amazing job making them feel truly at home on iOS. Many thanks! They need to be built from source using Xcode but it's a pretty straight forward process.

**Mini vMac**

* Supports System 1.1 to 7.5.5
* Limited RAM and CPU emulation
* Files haring via bespoke Macintosh apps
* No dynamic screen resolution changing
* Odd interface using Control key shortcuts

**BasiliskII**

* Supports System 7.0 to 8.1
* Advanced RAM and CPU emulation
* File Sharing via mapped folder
* Dynamic screen resolutions through Monitors control panel, or automation
* Native iOS interface for settings panel, negating all the issues with the desktop GUI

### File Sharing

This works a treat in both emulators, but the experience is better in BasiliskII.

With Mini vMac you need to run a special file import app, and then whilst it's open use iOS Share Sheet to send a file to Mini vMac. These extra steps are just enough friction to make the emulator annoying to use.

With BasiliskII things are easier as it has a drive mapped to the apps file sharing folder. You can share to BasiliskII in the same way as Mini vMac, but you can also simply copy/move a file to the BasiliskII folder and it will be accessible inside the emulator. The only gotcha with this approach is that you'll need to move the file to the main disk drive otherwise you'll encounter various oddities with apps that don't know how to cope with files located on this sort of shared drive.

### Screen Resolutions

The original Macintosh had a native screen resolution of 512x342.

Conceptually, the iPad has a logical screen resolution of 1024x768, which when running in pixel doubled mode equates to 512x384. A pretty good match. Specifically, the native resolution varies according to the model of iPad or iPhone you are using.

I use an iPad Pro 12.9" which has a native resolution of 2732x2048, pixel doubled that means 1366x1024, and pixel quadrupled 683x512. Targetting this ballpark of resolution means user interface elements will be around the magic 44pt tappable area, meaning that fingertip intersctions are accurate and enjoyable.

Of course the iPad can flip between landscape and portrait orientations on demand, which means BasiliskII supporting the Monitors control panel is a big win.

So I added a bunch of custom resolutions to the BasiliskII soure code to add support for both pixel-doubled and pixel-quadrupled resolutions, in both portrait and landscape, with and without room for the software keyboard. I can switch between these resolutions with keyboard shortcuts. Which leads nicely on to...

### Custom Keyboards

Both of those emulators share the same software keyboard mechanism. The keyboard maps are user-editable as JSON and compiled into a custom format.

So I hacked together a custom keyboard for BasiliskII that gives me quick thumb access to tools and shortcuts in my most used apps: UltraPaint and artWORKS. With this I'm mostly relabelling the function keys, but I've also replaced some key codes to reposition keys for my own purposes. I'll go into exactly how I do it in another post.

![](https://pbs.twimg.com/media/Ex96lH3WUAEJQyX.jpg)