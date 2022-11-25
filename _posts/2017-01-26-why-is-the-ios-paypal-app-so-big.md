---
layout: post
title: 'Why is the iOS PayPal app so big?'
tags:
- ios
- paypal
- ux
- medium
nouns:
- PayPal
- App Thinning
- App Store
comments: 

---

The size reported on the App Store (204MB as of today for PayPal version 6.8.0) does not take into account App Thinning.

The [App Thinning](http://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html) process only delivers the parts of the app required by the device. For example, the launch screen for iPad would not be downloaded onto my iPhone; and the 32-bit binary would not be downloaded on a 64-bit device. For my iPhone 6s, the actual installed size is 131.7MB (see _Settings > General > Storage & iCloud Storage > Manage Storage_).

If I download the PayPal app through iTunes it is delivered as a compressed .ipa archive of 85.8MB. I can inspect this archive as detailed in another answer of mine: [What is the iOS url scheme for Apple’s Numbers app?](http://www.quora.com/What-is-the-iOS-url-scheme-for-Apples-Numbers-app) Doing so I can see that the extracted app total of 152MB is composed as follows:

![](https://miro.medium.com/max/1400/0*fcZ1UW9u2lGjdGKs.png)

The [GrandPerspective app](http://grandperspectiv.sourceforge.net/) can also give a visual representation of the number of files that comprise the app and how they vary in size:

![](https://miro.medium.com/max/1400/0*hjm0UTia4RBEHqpp.png "Grand Perspective: a graphical representation of file sizes and quantity")
{:.tofigure}

_Originally published at_ [_www.quora.com_](https://www.quora.com/Why-is-the-iOS-Paypal-app-so-big-195-Mb)_._