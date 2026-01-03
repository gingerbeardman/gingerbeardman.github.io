---
layout: post
title: 'WWDC 2016: Platforms State of the Union'
tags:
- wwdc
- apple
- medium
nouns:
comments: 

---

![](https://miro.medium.com/max/1400/1*nYYr_EvVxQ-aDKUoVqKTVw.png)

The second half of WWDC Day One is a different sort of keynote. Not as glitzy or glamorous as the one with the Apple SVPs you know, and almost definitely not as well rehearsed and exciting for the general public. But for developers, this is the where they find out how much work they’re going to have to do to take advantage of all the new technologies and features that Tim, Craig and team talked about.

Here’s a recap.

Extensions
----------

So much of what’s new in iOS 10 revolves around the revamped extensions system. You’ll see this phrase crop up again and again in areas such as Sharing, Calls, Spotlight, Photos, Siri, Documents, Notifications, Maps, Widgets, Keyboards and iMessage.

iMessage
--------

These sit in place of the keyboard after you invoke them, and you can interact with the app they represent or use their content in an iMessage. A huge opportunity to change the way people communicate here. You could say that Facebook Messenger has done this already, but for me the Apple method is better due to the fact that there’s already a huge ecosystem of apps that can add these extensions quite easily.

SiriKit
-------

Leverage the power of Siri easily through your app. Limited to 6 domains to start off with: Messaging, VoIP calling, Payments, Ride booking, Photo search, Workouts. They’re the areas with the most use, but I think others will follow over time.

Swift 3
-------

Apple’s great new programming language that is taking the world by storm. It’s now Open Source and being used across many different platforms. This third revision sees much simplification and streamlining, at the expense of breaking code written in previous versions. Xcode 8 has a tool to automatically upgrade your code, if you’d like, or you can carry on using Swift 2.3 which is still included.

Swift Playgrounds
-----------------

Learn to program the easy way. These interactive programming tutorials are the sort of thing I wish I had age 12. The best news about this is that the playgrounds can be shared with Xcode on a Mac, and Apple is releasing theirs under a reuse licence so people can create more tutorials in the same style. It has a really great interface that is capable of so much without the need to actually type anything. So cool.

It’s similar to third-party app [Codea](http://twolivesleft.com/Codea/), but as Playgrounds is made by Apple it’s so much better. I do hope that—eventually—apps can be created or published from Playgrounds.

Xcode
-----

The app you use to build apps. It’s a monster of an app, with a steep earning curve and a penchant to changing its user interface every year around this time.

This year the documentation team have been hard at work combining and reducing the documentation package which is now apparently a tenth of the previous size. Xcode itself gets Extensions allowing developers to hook onto it in an approved way to supplement its features with tricks and tools of their own. Yes, the Xcode interface changes yet again but for definite good, allowing you to layout an app in an almost WYSIWYG way.

*   More, better debugging tools some of which happen at runtime meaning you can save time not having to run your code to find your bugs.
*   Stalwart system Console.app also sees improved logging and live streaming during debug.

Provisioning finally sees much improvement. This is the process you have to go through to be entitled to run code on your device and also be able to upload it to iTunes Connect so it can be be sold on the App Store. I’ve banged my head against the problems this could cause many times, so this is a very welcome change.

Differential Privacy
--------------------

Apple seems to be using this as a setup for some big changes in the future regarding Privacy. It will require a bunch more education for people to be comfortable with it. The mentions I’ve seen of it are a bit fluffy on where exactly this is being used, but I’d bet it’s everywhere in iOS in order to better learn from user behaviour and make better decisions. I’d hazard a guess that data has been collecting in a similar way since the beginning of iOS, but now it’s time to double down on it for certain iOS 10 features that would otherwise appear to compromise your privacy.

iOS
---

iOS is now most definitely grown up. This year sees so much built on the groundwork of the past several years. Software this complicated takes time to build, and even longer to build it well, so it’s very exciting to see the fruits of labour pay off with so many awesome new features coming to iOS 10.

watchOS
-------

A whole bunch of popular frameworks such as SpriteKit, SceneKit and CloudKit come to the watchOS to enable better apps. Let’s not forget the much talked about speed improvements. Fingers crossed.

tvOS
----

Similar to watchOS, tvOS is a relatively new branch of iOS and continues to receive a bunch new frameworks and technologies to bring it closer to iOS in capability.

Game controller changes, supporting up to 4 simultaneous controllers. Plus, developers can now mark their game as requiring a game controller. No longer do you have to find a way for the game to work on the Siri remote.

macOS
-----

Better inegration with watchOS, including the ability to unlock your Mac by just being nearby. Window tabs for free in mukti-document apps. Picture in Picture for video playback. The same changes to Messages, Photos and Apple Music that we see on iOS.

LZFSE—Apple’s more efficient and less power-hungry compression library has gone Open Source.

Apple File System—a Next-Generation File System for Apple Products optimised for current and future technologies, replaces 18-year-old HFS that was built when we all carried around floppy disks.