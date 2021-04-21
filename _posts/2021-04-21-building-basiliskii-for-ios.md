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
- iOS
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
- macOS
carousel: ''
featured: false
comments: https://twitter.com/gingerbeardman/status/1383559592873918469

---
I've had numerous requests for a guide to building BasiliskII on iOS. Let me know of anything is unclear or would benefit from more details!

Note: I'm building with Xcode 11.3.1 on macOS 10.14.6 Mojave, so your experience may be different.

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

### Possible build errors

Error mentioning `pointerInteraction`. This is because of a missing `#ifdef`, so add one around the if statement at [line 82 in B2ViewController.mm](zydeco/macemu@eb8d0a7/BasiliskII/src/iOS/BasiliskII/B2ViewController.mm#L82-L85):

    #ifdef __IPHONE_13_4
        if (@available(iOS 13.4, *)) {
            pointerInteraction = [[UIPointerInteraction alloc] initWithDelegate:self];
            [pointingDeviceView addInteraction:pointerInteraction];
        }
    #endif

### Add chunky screen resolutions

I added chunky "half resolution" screen modes to increase the size of user interface elements so that buttons, menu items and so on are all around the 44pt recommended in the Apple iOS HIG.

For iPad Pro 12.9" these changes were:

    [videoModes addObject:[NSValue valueWithCGSize:CGSizeMake(512, 496)]]; // portrait minus keyboard
    [videoModes addObject:[NSValue valueWithCGSize:CGSizeMake(512, 672)]]; // portrait "full" scren
    [videoModes addObject:[NSValue valueWithCGSize:CGSizeMake(683, 502)]]; // landscape "full" screen

Enter those after [line 53 in file B2ScreenView.mm](https://github.com/zydeco/macemu/blob/eb8d0a71054d450c09ec0220abf4407971ce9df9/BasiliskII/src/iOS/BasiliskII/B2ScreenView.mm#L53)

### Disable bilenear filtering

My personal prefernce is to disable filtering/smoothing on all graphics scaling:

    NSString *filter = kCAFilterNearest;
    videoLayer.magnificationFilter = filter;
    videoLayer.minificationFilter = filter;

Make this change [around line 80 in file B2ScreenView.mm](https://github.com/zydeco/macemu/blob/eb8d0a71054d450c09ec0220abf4407971ce9df9/BasiliskII/src/iOS/BasiliskII/B2ScreenView.mm#L80)

### Keyboard Layouts

These are defined in JSON and compiled to a custom format:

* [source file location on GitHub](zydeco/macemu@ios/BasiliskII/src/iOS/Keyboard%20Layouts)
* several regional layouts are already provided
* you don't have to make your own!

[Here's one that I made](https://github.com/gingerbeardman/artworks-keyboard), based on the British layout, for use with Deneba artWORKS/UltraPaint.

### Split View Support

This be enabled by changing `BasiliskII-Info.plist`: `UIRequiresFullScreen` should be `false` in [BasiliskII-Info.plist](zydeco/macemu@eb8d0a7/BasiliskII/src/iOS/BasiliskII/BasiliskII-Info.plist#L103-L104) but be wary of the following problem:

* When in Split View mode, the very top of the screen (where the iPadOS status bar would be, where the System 7 menu bar is) will become unresponsive to touch due to the Slide Over indicator

This would need to be managed/avoided by the screen layout of BasiliskII, but when I attempted this it raised more issues

However, you can still use Slide Over to position Safari, Files, etc. along the edge of your screen.

## Notes

### File Sharing

A drive appears on the desktop that is mapped to the iOS file sharing folder of the app.

* You can use Files to transfer files into or out of the emulated machine
* Share Sheet also works for getting files into the emulated machine

### Apple Pencil

This is supported the same way as regular touch so it acts as a mouse. Drawing works well and is very responsive, even at lower Hz.

* Palm rejection is missing
* Pressure sensitivity is missing
* Multi touch seems to be missing