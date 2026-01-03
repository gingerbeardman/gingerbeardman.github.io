---
layout: post
title: Building BasiliskII for iOS
modified: '2024-07-29T00:55+01:00'
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

February 2024: Updated for building with Xcode 15.2 on macOS 14.3 to iOS 17.3. YMMV.

## Building

1. Install [Xcode from Mac App Store](https://apps.apple.com/gb/app/xcode/id497799835?mt=12)
2. Clone [project source from GitHub](https://github.com/zydeco/macemu/tree/ios/BasiliskII/src/iOS)
3. Switch to the `ios` branch
4. Open .xcodeproj file
5. Set `Product > Destination` to point to your device
6. Run

----

## Optional Changes

These are changes I made that give a better experience on my specific iPad.

### Adding chunky screen resolutions

I added chunky "half resolution" screen modes to increase the size of user interface elements so that buttons, menu items and so on are all around the 44pt recommended in the Apple iOS HIG.

For iPad Pro 12.9" these changes were:

    [self addVideoMode:CGSizeMake(512, 496) to:videoModes]; // portrait minus keyboard
    [self addVideoMode:CGSizeMake(512, 672) to:videoModes]; // portrait "full" screen
    [self addVideoMode:CGSizeMake(683, 502) to:videoModes]; // landscape "full" screen

Enter those after [line 61 in file B2ScreenView.mm](https://github.com/zydeco/macemu/blob/9b90ebad780f35afb9f0001109bdca9c7e1cb478/BasiliskII/src/iOS/BasiliskII/B2ScreenView.mm#L56-L61)

### Disabling graphics smoothing

My personal preference is to disable filtering/smoothing on all graphics scaling, but only because I've dialled in resolutions that fit exactly so there will be no scaling happening anyway:

    NSString *filter = kCAFilterNearest;
    videoLayer.magnificationFilter = filter;
    videoLayer.minificationFilter = filter;

Make this change at [line 108 in file B2ScreenView.mm](https://github.com/zydeco/macemu/blob/9b90ebad780f35afb9f0001109bdca9c7e1cb478/BasiliskII/src/iOS/BasiliskII/B2ScreenView.mm#L108)

### Custom Keyboard Layouts

These are defined in JSON and [compiled](https://github.com/zydeco/macemu/tree/ios/BasiliskII/src/iOS/Keyboard%20Layouts) to a custom format:

* [source file location on GitHub](https://github.com/zydeco/macemu/tree/ios/BasiliskII/src/iOS/BasiliskII/Keyboard%20Layouts)
* several regional layouts are already provided
* you don't have to make your own!

[Here's one that I made](https://github.com/gingerbeardman/artworks-keyboard), based on the British layout, for use with Deneba artWORKS/UltraPaint. To install it you should copy the file `artWORKS.nfkeyboardlayout` to BasiliskII's *Keyboard Layout* folder using the Files app on your iPad.

### Enable Split View Support

This can be enabled by changing `BasiliskII-Info.plist`: `UIRequiresFullScreen` should be `false` in [BasiliskII-Info.plist](https://github.com/zydeco/macemu/blob/ios/BasiliskII/src/iOS/BasiliskII/BasiliskII-Info.plist#L114) but be wary of the following problem:

* the very top of the screen (where you'd expect the iOS status bar to be, and where part of the System 7 menu bar is) will become unresponsive to touch due to the Slide Over indicator

This would need to be managed/avoided by the screen layout of BasiliskII, but when I attempted this it raised more issues.

However, you can still use Slide Over to position Safari, Files, etc. along the edge of your screen.

----

## Notes

There are additional capabilities that come with the emulator integration. I go further into these, and more besides, in a additional posts listed at the bottom of the page.

### Keyboard

- Swipe up/down with two fingers to show/hide the on-screen keyboard

### Settings

- Spread 4 or 5 fingers to show the *BasiliskII Settings* pop-up
- Tap outside of the *BasiliskII Settings* pop-up to hide it
- Settings can also be invoked through the app menu, long press the app icon

### Custom screen size

- Pinch with 2 fingers to dynamically resize screen
- Separate tracking for horizontal and vertical resizing
- Double-tap for full size screen

### File Sharing

A drive appears on the desktop that is mapped to the iOS file sharing folder of the app.

* You can use Files to transfer files into or out of the emulated machine
* Share Sheet also works for getting files into the emulated machine
* You can organise the files into folders using the Files app

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
