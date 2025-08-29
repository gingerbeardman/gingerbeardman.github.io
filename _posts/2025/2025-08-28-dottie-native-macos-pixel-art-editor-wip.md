---
layout: post
title: "Dottie: a native macOS pixel art editor (WIP)"
date: '2025-08-28T11:00+01:00'
tags:
- pixelart
- macos
- swift
- swiftui
- premortem
- wip
nouns:
- Atari ST
- Commodore Amiga
- Macintosh
- Swift
- SwiftUI
- AppKit
- macOS
- Mac
- Deluxe Paint
- Piskel
image: /images/posts/dottie-mushroom-by-maya.png
featured: true
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/

---

For the past several months I've been working on a pixel art app for macOS, with the goal of making it as much of a first class citizen and great Mac-like experience as possible. To that end it is fully native and built using Swift and SwiftUI, with a tiny bit of AppKit.

As with all the macOS apps I build, they start with a personal need. This one was to replace the aging and unsupported [Piskel electron/web app](/2023/05/10/piskel-for-playdate/). I like it and I loathe it, so I wondered if I could do better. My friend [Jason Morley](https://jbmorley.co.uk/about/) was the additional momentum I needed to actually get moving and try some things out—so thanks Jason!

I've been into pixel art since [Deluxe Paint ST](/about) (yes, on Atari ST not Commodore Amiga!), and of course on the classic Macintosh. I also collect [information about the multitude of Japanese "dot art" pixel art apps](/2023/10/21/list-of-vintage-japanese-pixel-dot-art-software/), which are quite different to the apps that I grw up with. All this to say that I already had a list of features I missed, pined for, or otherwise thought should make a return. [Naturally](/2024/07/14/shibuya-pixel-art-contest-2024/#bonus), dithering should be a tent pole feature affecting all tools.

{% youtube XKyDG7aF3xU 320/243 %}

----

## Look, Ma: no frameworks!

And as an additional constraint—[which you may know I love to set for myself](/2023/11/21/yoyozo-how-i-made-a-playdate-game-in-39kb/)—I decided that I would use no packages or external dependencies, just system frameworks. Yes, that means I had to write my own colour picket (but, that's my idea of a good time!) and some things took longer than just adding a package, but I can say that there is precious little wasted code inside this app. In fact, at the time of writing a single-architecture distribution build of the app still fits on a [3.5" 2HD floppy disk](/2025/05/19/media-darling-t-shirt-design/)!

## Pre-mortem

A full post-mortem will come after release.

The trickiest parts of development so far:
- drawing pixelated circles of any width and height (all the classic graphics programming text books require the circle to have odd dimensions so that the coordinate of the centre pixel is an integer)
- figuring out the intricacies of the document-based application model
- trying to get the "New Document" button to appear on the file selector that appears at app launch (in fact this one still evades me for reasons I can't figure out, [get in touch if you can help](/support)!)
- automating help book compilation ([thanks Mario](https://marioaguzman.wordpress.com/2020/09/12/auth/)!)
- performance bottlenecks with some aspects of SwiftUI (thanks WWDC!)
- surprise performance gains from using AppKit for better gestures
- selections and marching ants
- dealing with some bad early decisions (tech debt)

The most fun aspects so far:
- designing and iterating on the UI
- coming up with a name and brand
- implementing palette management and trying new ideas
- implementing a custom colour picker, twice
- drawing the various tool and app icons
- getting to a point where it feels done and every new feature is icing on the cake

----

## Launching late-2025

I hope to launch the app this autumn, but until then: if you're a pixel artist feel free to [get in touch](/support) with your email address and I'll send you a TestFlight invite!
