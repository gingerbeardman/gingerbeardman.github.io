---
layout: post
title: Building BasiliskII for iOS
tags:
- basiliskii
- emulation
- macintosh
- xcode
nouns:
- BasiliskII
- Xcode
- Mojave
- System 7
- Split View
- Deneba
- artWORKS
- UltraPaint
- Share Sheet
- Files
- Safari
- Slide Over
carousel: ''
featured: false
comments: https://twitter.com/gingerbeardman/status/1384827300697489408

---
I've had numerous requests for a guide to building BasiliskII on iOS. Let me know of anything is unclear or would benefit from more details!

October 2022: Updated for building with Xcode 14.0.1 on macOS 12.6 Monterey to iOS 16.0.2. YMMV.

## Building

1. Install [Xcode from Mac App Store](https://apps.apple.com/gb/app/xcode/id497799835?mt=12)
2. Clone [project source from GitHub](https://github.com/zydeco/macemu/tree/ios/BasiliskII/src/iOS)
3. Switch to the `ios` branch.
4. Open .xcodeproj file
5. Optional: change iOS deployment target (defaults to iOS 8.0)
6. Set `Product > Destination` to point to your device
7. Run

## Optional Changes

I plan to add these changes into my own fork of the code. Soon, I promise!

### Adding chunky screen resolutions

I added chunky "half resolution" screen modes to increase the size of user interface elements so that buttons, menu items and so on are all around the 44pt recommended in the Apple iOS HIG.

For iPad Pro 12.9" these changes were:

    [videoModes addObject:[NSValue valueWithCGSize:CGSizeMake(512, 496)]]; // portrait minus keyboard
    [videoModes addObject:[NSValue valueWithCGSize:CGSizeMake(512, 672)]]; // portrait "full" screen
    [videoModes addObject:[NSValue valueWithCGSize:CGSizeMake(683, 502)]]; // landscape "full" screen

Enter those after [line 56 in file B2ScreenView.mm](https://github.com/zydeco/macemu/blob/74254b59f3829468ee2e2ac5b9eb3d81d281caa7/BasiliskII/src/iOS/BasiliskII/B2ScreenView.mm#L56)

### Disabling graphics smoothing

My personal preference is to disable filtering/smoothing on all graphics scaling, but only because I've dialled in resolutions that fit exactly so there will be no scaling happening anyway:

    NSString *filter = kCAFilterNearest;
    videoLayer.magnificationFilter = filter;
    videoLayer.minificationFilter = filter;

Make this change [around line 108 in file B2ScreenView.mm](https://github.com/zydeco/macemu/blob/74254b59f3829468ee2e2ac5b9eb3d81d281caa7/BasiliskII/src/iOS/BasiliskII/B2ScreenView.mm#L108)

### Custom Keyboard Layouts

These are defined in JSON and compiled to a custom format:

* [source file location on GitHub](https://github.com/zydeco/macemu/tree/ios/BasiliskII/src/iOS/BasiliskII/Keyboard%20Layouts)
* several regional layouts are already provided
* you don't have to make your own!

[Here's one that I made](https://github.com/gingerbeardman/artworks-keyboard), based on the British layout, for use with Deneba artWORKS/UltraPaint.

### Enable Split View Support

This can be enabled by changing `BasiliskII-Info.plist`: `UIRequiresFullScreen` should be `false` in [BasiliskII-Info.plist](https://github.com/zydeco/macemu/blob/ios/BasiliskII/src/iOS/BasiliskII/BasiliskII-Info.plist#L114) but be wary of the following problem:

* the very top of the screen (where you'd expect the iOS status bar to be, and where part of the System 7 menu bar is) will become unresponsive to touch due to the Slide Over indicator

This would need to be managed/avoided by the screen layout of BasiliskII, but when I attempted this it raised more issues.

However, you can still use Slide Over to position Safari, Files, etc. along the edge of your screen.

## Notes

There are about capabilities of the emulator integration. I'll go further into these, and more besides, in a future post.

### File Sharing

A drive appears on the desktop that is mapped to the iOS file sharing folder of the app.

* You can use Files to transfer files into or out of the emulated machine
* Share Sheet also works for getting files into the emulated machine

### Apple Pencil

This is supported the same way as regular touch so it acts as a mouse. Drawing works well and is very responsive, even at lower Hz.

* Palm rejection is missing
* Pressure sensitivity is missing
* Multi touch seems to be missing

### Related posts

* [Turning an iPad Pro into the Ultimate Classic Macintosh](/2021/04/17/turning-an-ipad-pro-into-the-ultimate-classic-macintosh)
* How to install BasiliskII on your iPad
* [Exploring Custom Keyboards and Automation](/2021/04/19/automating-interactions-using-apple-events/)
* [Optimising Macintosh app toolbars for touch](/2021/03/28/changing-the-size-of-toolbar-items-using-resedit/)
* [Macintosh drawing software compared](/2021/04/24/macintosh-drawing-software-compared/)
* [Mixing External Tools across Deneba software](/2021/04/25/mixing-external-tools-across-deneba-software/)
* [My System 7 software choices](/2021/04/30/my-system-7-software-choices/)
* [About the interoperability of System 7 and iOS](/2021/05/03/interoperability-of-system-7-and-ios/)
