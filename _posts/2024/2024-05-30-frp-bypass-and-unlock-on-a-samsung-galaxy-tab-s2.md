---
layout: post
title: "FRP bypass and unlock on a Samsung Galaxy Tab S2"
date: '2024-05-30T19:24+01:00'
tags:
- hack
- android
- samsung
- google
nouns:
- Samsung
- Galaxy
- Tab S2 8.0
- Asus
- Nexus 7
- Wikipedia
- Sony PRS-650
- iCloud
- Apple
featured: false
pinned: false
comments: https://twitter.com/gingerbeardman/status/

---

I use an Android tablet for reading ebooks. My favourite ebook reader is the Sony PRS-650 which was ahead of its time in a lot of ways. But these days I like to have internet connectivity whilst reading so I can do both dictionary lookups, Wikipedia lookups, and quick Google searches of things that may present themselves whilst reading. But at the same time I don't really want the distraction of an iPad, or Android, so the ideal solution for me was to use KOReader - an ebook reading app heavily inspired by the [Sony PRS-650](https://www.the-ebook-reader.com/sony-prs-650.html) - and which has the ability to do those dictionary and Wikipedia lookups.

So I bought a Google Asus Nexus 7 which is really nice, but for my use any modern verison of Android shows that it's lacking CPU and RAM. It was OK for a while, I read a good handful of books on it, but I eventually wanted something more. I'd read about the Samsung Galaxy Tab S2 8.0 which is slightly wider and perhaps slightly lighter and above all more powerful. Both have very high resolution displays, which is a must for me for font rendering.

I managed to snag a "faulty" Tab S2 8.0 on eBay that was listed as powering on and off but was locked to a Google Account. This is something I knew could be worked around, and this blog post gives a brief outline of how I did it.

----

## FRP bypass

FRP is basically an account lock. The device will require the owners account to be logged in even after a facory reset. A bit like iCloud lock on Apple devices, but this is much less well implemented. A comprehensive [YouTube video by Muhammad Mubeen](https://www.youtube.com/watch?v=R4g5KZFRM1Y) was of great help to do the bypass.

1. SamFW FRP TOOL > MRP > Open YouTube > View
1. Choose browser > Open Samsung Browser
1. Download and install [technocare.apk from androidfilehost.com](https://androidfilehost.com/?fid=5862345805528059176) (this adds options we'll use)
1. Open a new tab with [frpbypass.io](https://frpbypass.io) for the FRP bypass links
1. Choose link from frpbypass tab: Settings
1. Settings > Lock Screen & Security > Other Security Settings > Device Administrators > Find My Device (uncheck)
1. Settings > Apps > Google Play Store > Disable
1. Cloud & Accounts > Add Account > Google
1. (login and verify)
1. Settings > Apps > Google Play Store > Enable
1. Restart 
1. Settings > Apps > TecnocareTricks > Uninstall

----

## FRP unlock

By enabling OEM Unlock the FRP lock will also be switched off, which is very handy. By factory resetting the device whilst in that state, FRP will be permanently disabled. Result!

1. Settings > System > About > Build number (tap 7 times)
1. Settings > System > Developer Options > OEM Unlock
1. Reboot to recovery mode (Power, Volume Up, Home)
1. Factory reset

----

## Android update

From here I installed [Lineage OS 20](https://xdaforums.com/t/unofficial-rom-alpha-lineageos-20-for-sm-t713-may-16-2024.4667460/) (Android 13) on the device, which would otherwise be limited to very old Android 6 or 7. Other options are [Lineage OS 17.1](https://xdaforums.com/t/rom-unofficial-10-lineageos-17-1-t713-t719-t813-t819.4070161/page-58) (Android 10) [Stock Android 7 Lite](https://xdaforums.com/t/rom-7-0-nougat-abandoned-stock-lite-v8-t713-t813.3746583/).