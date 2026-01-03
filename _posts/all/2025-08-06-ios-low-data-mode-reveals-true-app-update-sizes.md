---
layout: post
title: "iOS Low Data Mode reveals true app update sizes"
modified: '2025-08-07T13:21+01:00'
date: '2025-08-06T20:43+01:00'
tags:
- ios
- software
- hack
- optimisation
nouns:
- Low Data Mode
featured: false
pinned: false
image: /images/posts/low-data-mode-crop.png
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/1953007431606214700
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3lvps7ajffs2z
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/114980843542253669
style: |
  img {
    height: 1218px;
  }
---

An interesting side-effect of iOS Low Data Mode is that it shows you the exact size of an app update for your device, often a tiny fraction of the listed app size. This is because (delta) updates contain only the files that have changed. Even a first-time install is smaller due to app slicing/thinning containing only what is needed for that device.

The larger size is the universal app size containing assets for all devices. It's simpler and less confusing for everybody to see the same size.

There are more screenshots at the comment links.

![IMG](/images/posts/low-data-mode.png "eBay 6.220.0 update size for an iPhone XS running iOS 17")
{:.tofigure}
