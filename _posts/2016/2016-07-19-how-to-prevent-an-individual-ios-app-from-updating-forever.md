---
layout: post
title: 'How to prevent an individual iOS app from updating, forever'
tags:
- hack
- ios
- appstore
nouns:
comments: 

---

> Note, August 2023: this method is outdated, for the latest [please see this newer blog post](https://blog.gingerbeardman.com/2023/08/17/going-back-to-the-old-pre-x-twitter-ios-app/). 

Change is the only constant. Nowhere is this more visible than on the App Store. [Thousands of new apps and games appear every day](http://www.statista.com/statistics/258160/number-of-new-apps-submitted-to-the-itunes-store-per-month/) and existing apps receive regular updates to add features and fix bugs. This will only accelerate further now that the App Store is firing on all cylinders and review times are [measured in hours rather than days](http://appreviewtimes.com).

But what if you want to continue to use an old version of an app for your own reasons? Perhaps the old version has a better user interface, or the new version has some bugs? I can remember both of these issues affecting me numerous times over the years. The eBay app is the example that springs to mind.

General consensus of opinion is that the only thing you can do is switch off automatic updates in iOS and avoid updating that particular app manually, which is easier said than done.

There has to be a better way
----------------------------

It’s a little known fact that there is actually a way to install an old version of an app on your iOS device which will prevent it from being checked for updates. Read on to find out how this can be done. This tutorial uses eBay as the example app, but I’ve also carried out this process on Gmail, Instagram, VSCO and more.

You will need:

1.  good old iTunes,
2.  the iOS device you want to install it on,
3.  the USB cable for your iOS device.
4.  a backup of the old version of the app as an .ipa file on your Mac. You’ll only have this if you use iTunes to sync your iOS device or download app updates. Have a look in your Time Machine or other backups in the following location:

~/Music/iTunes/iTunes Music/Mobile Applications

> Warning: as part of this process you will be required to delete the current version of the app that you have installed on your iOS device. So be sure to backup any data from the app that is not stored in the cloud!

eNay
----

eBay introduced a disastrous fourth version of [their app](https://itunes.apple.com/gb/app/ebay-shop-search-buy-sell./id282614216?mt=8) back in September 2015. It was a complete rewrite of the app that made it much more cumbersome to use, and was also missing key functionality and information that were present in the previous app. It was, understandably, [met with a user revolt](https://community.ebay.com/t5/eBay-Mobile-App-iOS/gp-p/Mobile-iOS). eBay are now up to version 5.0 and it is arguably still not as good as the old version I like to use.

VSC-NO!
-------

The photo editing app [VSCO](https://itunes.apple.com/gb/app/vsco/id588013838?mt=8) is another app that has enraged users with an update that destroys the usability of the app. Strangely enough that is also version 5.x and users are also outraged over the change.

Gfail
-----

Yes again another disaserous version 5.x! This tim it is Gmail, the new version being very similar to the “Inbox by Gmail” app that has been bad and stayed bad for some time now. Gmail v5 is at one-star on the App Store.

To the Time Machine!
--------------------

Due to the fact I frequently do a manual update of all my apps through iTunes on my Mac, I had a backup of eBay 3.6.1 for iPhone and VCO 4.6.1 sitting in my Time Machine backup on my external drive.

How to install an old app and prevent it from updating
------------------------------------------------------

Before we begin, remove the app you want to downgrade from your device by tapping and holding on it. Make sure to backup any data you need from it!

This example uses the eBay app, but applies equally well to VSCO.

1.  Copy your _backup_ of .ipa somewhere where you can work on it.
2.  Open the .ipa with _Archive Utility_ to decompress it.
3.  Expand the folder until you get to the _Payload_.
4.  Drop the _eBay.app from the Payload folder_ onto iTunes “My Apps”. It’s the one whose icon has a “no entry” on it.
5.  If prompted, _replace the newer version_ of the app in iTunes (you can always download the latest version again from the App Store).
6.  Check that iTunes recognises the app payload (for this to work apps must have been downloaded with an Apple ID that is authorised on this Mac). Don’t worry about the missing app icon, that’s OK.
7.  Go into your iOS device screen, Apps section, find the app through search and press _Install_.
8.  _Apply_ changes to Sync, and you’re done!

“Just let me look at some screenshots to figure this out”. OK!
--------------------------------------------------------------

![](https://miro.medium.com/max/1520/1*gUV9EY1MRIoiXxbCDlTm7Q.png)

![](https://miro.medium.com/max/1520/1*3Kwyf5B9csphNzx-3GH2IA.png)

![](https://miro.medium.com/max/1520/1*Jf9vqIDutU0YZiuUMpXQ9g.png)

**Steps 1, 2 & 3:** Work on a copy of your .ipa backup, extract it, find the payload app.

![](https://miro.medium.com/max/1520/1*vLWOprl3ADFZ1YqrbWpL5w.png)

![](https://miro.medium.com/max/1204/1*P1K_MTvZbHjCNdRpI21BeA.png)

![](https://miro.medium.com/max/1520/1*6kOllWf4Bsvve3cBE1SRgw.png)

**Steps 4, 5 & 6:** Drop the payload app onto iTunes, replace the newer version if prompted, check that the app is listed without an icon.

![](https://miro.medium.com/max/1400/1*XjEi0Yc59GdO6uhiEJpMzQ.png)

**Step 7:** Browse to the apps on your phone, find the app you just added, mark it for install. **Step 8:** Sync, you’re done!

So how does this work?
----------------------

What we are doing here is installing the app on the iOS device _without the associated app receipt_, so the App Store app is not aware the old version is on the device and so will never prompt you to update it.

How do I undo this kind of install?
-----------------------------------

If you want to get things back to normal, simply delete the app from your iOS device and reinstall a newer version of the app without doing this trick.

Limitations
-----------

The one limitation of this is how long the developer will support the infrastructure that powers the old version of the app. For eBay this hasn’t been a problem to date, but there are no guarantees. Enjoy it whilst it lasts.

Have fun keeping it old school! If you have any questions you as me on twitter @[gingerbeardman](https://twitter.com/gingerbeardman).