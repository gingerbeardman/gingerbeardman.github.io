---
layout: post
title: Going back to the old (pre-X) Twitter iOS app
date: '2023-08-17T19:39+01:00'
last_modified_at: '2023-08-21T17:56+01:00'
tags:
- twitter
- hack
- ios
nouns:
- Twitter.app
- Twitter
- eBay
- Gmail
- iTunes
- Finder
- Windows
- Charles Proxy
- Apple Configurator
- Apple
- Configurator
- App Store
- Apps
- iOS
- macOS
- Payload
- Archive Utility
comments: https://twitter.com/gingerbeardman/status/1692245092768051421
style: |
  figure, picture, img {
    margin: 0 auto;
  }
  
  figcaption {
    font-size: 0.9rem;
  }
  
  picture {
    width: 395px;
    height: 476px;
    display: block;
  }
  
  blockquote em {
    font-style: normal;
  }
---

Here's how you can downgrade to an older version of Twitter (pre-X changes) and install it in a way that means _it will not be automatically updated_.

<figure class="img-with-caption">
<picture>
  <source srcset="https://cdn.gingerbeardman.com/images/posts/twitter-old-installed.avif" type="image/avif">
  <source srcset="https://cdn.gingerbeardman.com/images/posts/twitter-old-installed.webp" type="image/webp">
  <img src="https://cdn.gingerbeardman.com/images/posts/twitter-old-installed.png" alt="" title="" loading="lazy">
</picture>
<figcaption class="caption">Twitter 9.66 (858339189) running on an iPhone Xs just now</figcaption></figure>

## Downloading the old version

This is the trickiest part of the process as it requires installing some old software and following a guide. But don't worry — it's not that difficult! You'll need access to an old version of iTunes (so it's most easily done using Windows) and about 15 minutes to carry out the steps.

[Follow this great step-by-step tutorial](https://github.com/qnblackcat/How-to-Downgrade-apps-on-AppStore-with-iTunes-and-Charles-Proxy). It might seem complicated but it is quite easy. A high level summary of what is involved in the guide is as follows:

1. Install old iTunes & Charles Proxy
2. Configure intercepting of the latest app download
3. Change the version of the app to be downloaded
4. Download the old version

Notes:
- id 858339189 (version 9.66) predates the rebrand to X
- id 848443565 (version 9.7.2) predates Blue
- id 840768123 (version 8.56) predates Spaces

The result of this process is a completely legitimate .ipa file, tied to your Apple ID in exactly the same way that apps normally are. As such, the resulting file can be installed on your device and once installed would be no different to an app you've downloaded directly from the App Store. This also means that if you share your .ipa with somebody else they would need to log in to your account using your Apple ID to do so, which is undesirable. Best if they download their own! Send them this blog post.

## Avoiding updates

If you install the .ipa file onto your phone using Finder, iTunes, Apple Configurator it will install just fine. But, because of the metadata that is included the .ipa, it will be checked for updates and automatically updated soon after installation. We need to go deeper.

There is a little-known method of installing apps on an iOS device which will prevent it from being checked for updates. I discovered this method [back in 2016](/2016/07/19/how-to-prevent-an-individual-ios-app-from-updating-forever/) when I used it to downgrade the eBay and Gmail Inbox apps.

## Installing the app

Before we begin, you don't need to remove the current app you're using. But best to make sure to backup any data you need from it regardless! You may, or may not, need to login once the old version of the app is reinstalled.

1. Copy your backup of .ipa somewhere where you can work on it
2. Open the .ipa with Archive Utility to decompress it
3. Expand the resulting folder until you go into the Payload folder
4. You'll see Twitter.app (on macOS the icon has a "no entry sign" because it's an iOS app)
5. Connect your device
6. Open Apple Configurator
7. Double click on your device
8. Click Add > App > Choose from my Mac...
9. Confirm you want to overwrite the old app
10. Wait for the app to install on your device

You’re done!

![PNG](https://cdn.gingerbeardman.com/images/posts/twitter-old-payload.png "Locating the Twitter .ipa Payload")
{:.tofigure}

## Questions 

**Why does downloading this way work?**
    iTunes used to be able to download apps this way, so we're just persuading it to download a particular version. The app is attached to your Apple ID and totally legitimate, no funny business.

**Why does installing this way work?**
    Installing the payload directly means the App Store app has no record of the app being installed so it does not check for updates to it. You can confirm this by going to the App Store page for the app, where it will show it is yet to be downloaded.

**Will the old app stop working at some point?**
    Eventually, yes. Older versions lack support for modern Twitter features but that can be a desirable feature depending on your point of view. But let's enjoy the old experience for as long as we can.

Long live the bird!
