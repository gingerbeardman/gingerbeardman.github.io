---
layout: post
title: "Abandoned project: multi-site shopping app"
date: '2025-05-10T18:35+01:00'
tags:
- ios
- app
- japanese
- abandoned
nouns:
- SwiftUI
- Xcode
- iOS
- macOS
- AliExpress
- Google Translate
- WebKit
featured: false
pinned: false

comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/1921259219719737629
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3lotif25kks26
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/114484765883064517

---

I order weird old stuff from Japan a few times a year: old magazines, CD-ROMs, digital watches, strategy guides, video games, playing cards, books, artwork and any other old tat that takes my fancy. The way this is usually done is by ordering through a proxy service that receives the goods on your behalf and combines and ships them to you at your convenience.

There are many such proxy services, each with their own website, fee structure, shipping costs, and other pros and cons. I grew tired of tabs from these various sites cluttering up my browser, so I decided to build a bespoke app to manage them. I couldn't find anything close, other than an app for Russians to more easily shop on AliExpress. So, in September 2024, I built the app I envisioned as a rapid prototype and called it *Otaku!*

> **otaku** (n.) in Japan, a young person who is obsessed with computers or particular aspects of popular culture to the detriment of their social skills 🤓

----

## Otaku!

The app itself is a customisable set of tabs—one per site—each containing a WebKit view, along with a detailed settings interface that includes an editable list of search terms. So, you could easily do common searches and there was no need to repeatedly type searches terms into each site as they would be automatically be entered when you switch to the tab. Add to that Custom CSS to hide parts of the sites, Google Translate to view some sites in your native language rather than Japanese, currency converter, and several other useful related tools rounded out a comprehensive app.

----

## Postmortem

It worked well, and I used it heavily for the duration of its development. it also gained a number of passionate users on TestFlight. My only criticism is that the specific design of the app and the unreliability of my naive WebKit implementation meant that whilst the existing friction was removed by facilitating easier multi-site management, new friction was introduced elsewhere in the user experience, and at the end of the day you're still interacting with a bunch of websites of varying quality. 

A better solution might be somewhere in between, perhaps using a more modern popover interface paradigm to switch between tabs rather than the back and forth of the navigation controller. Then there are options to capture the results via API and present them in a unified way, but this opens up more questions and friction at the point you want to buy something. In short, it's a difficult problem!

SwiftUI is fun to work with, despite it throwing its hands up at several points and me having to revert to my last commit to get it back on track. I don't really enjoy building iOS and macOS apps at this point in time, so Xcode became a bit of a chore and took a lot of the fun out of the project.

After pushing several updates up to the [middle of October](/2025/04/15/when-playdate-stopped-being-fun/), I then let that final build expire and have never wanted to push any update or new version.

Thanks to all the users of this app for your valuable testing and feedback.

----

## Video Demonstration

Below is a video of sample app usage. I select a search term (Hanafuda) and then use it on the different tabs along bottom of the screen. I then switch to a different search term (花札) and use that across the same set of tabs. Notice that at no point did anything need to be typed.

{% youtube 2p0aM3QJ_rc 1124/2436 %}