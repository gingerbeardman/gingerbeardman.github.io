---
layout: post
title: Playing old 32-bit iOS games in 2021
tags:
- ios
- patreon
nouns:
- iPad mini
- iPhone
- iTunes
- iOS
- Apple
- App Store
- Mac
- Cydia
- Llamasoft
- Clutch
- QuickTime Player
- sockH3lix
comments: https://twitter.com/gingerbeardman/status/1437413977059954695

---
With the introduction of iOS 11 in 2017 Apple stopped supporting 32-bit apps on iOS. This event came to be known as the app-ocalypse with users forced to stay on iOS 10 to keep their apps or upgrade and abandon them. I seem to remember I stuck around on iOS 10 for a while but eventually succumbed to the upgrade and said good by to a bunch of stuff.

At this time, I was still managing my iPhone and app updates through iTunes, with a weird ritual of downloading the latest updates to my Mac. It was useful for keeping on top of what I had installed and deleting apps I was no longer interested in. Around the same time Llamasoft were disillusioned with the App Store and pulled all of their games.

Anyway, I took one or both of those things as a sign to download and backup a couple of games in particular: Llamasoft's [Minotron: 2112](http://www.minotaurproject.co.uk/Minotaur/minotron.php) and [Gridrunner](http://www.minotaurproject.co.uk/Minotaur/gridrunner.php), part of their [Minotaur Project](http://www.minotaurproject.co.uk/Minotaur/minotaurprj2.php) series of games. I bought a few more from that series but I only kept my two favourites.

[Earlier this year](/2021/03/08/two-old-llamasoft-iphone-and-ipad-games/) I uploaded them to internet archive as an act of preservation. Somebody recently downloaded them and was trying to make them work on their devices, without much luck. It seemed that the apps were tied to my account and I'd have to share cracked versions. I'd need an old device capable of running iOS 10 or older, and one susceptible to jailbreaking. I figured that would be a fun afternoon. Here's the process I went through:

## Restore working system

1. Bought a used [device that supports iOS 10](https://en.wikipedia.org/wiki/IOS_10#Supported_devices) (or earlier, if you prefer)
2. Downgraded my device to iOS 10.3.3 using [leetdown](https://github.com/rA9stuff/LeetDown)
3. Installed my two .ipa files using [Apple Configurator 2](https://support.apple.com/en-gb/apple-configurator)
4. Confirmed that the games work by playing a little of each

## Jailbreaking the device

1. Installed [sockH3lix](https://github.com/SongXiaoXi/sockH3lix/releases/latest)
2. Did jailbreak with sockH3lix (only takes a second or two!)
3. Noted that Cydia has been installed
4. Installed Clutch (took a couple of tries to find the a [working repo](https://sharerepo.stkc.win/?repo=https://stek29.rocks/cyrepo/))

## Decrypt the Minotron game

1. Installed `OpenSSH` via Cydia
2. Logged in over SSH from my Mac
3. Ran `Clutch -b uk.co.llamasoft.minotron`
4. SFTP in from my Mac and copy the decrypted .ipa to my Mac

## Video

I could capture the attract loop using QuickTime Player but for some reason it the recording crashed whenever a sound was played.
<iframe width="560" height="315" src="https://www.youtube.com/embed/RZSjR4dIykU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Gridrunner

For some reason Clutch and other decrypting apps don't work with Gridrunner, but maybe that could be installed with [AppSync Unified](https://cydia.akemi.ai/?page/net.angelxwind.appsyncunified)? One for another day.