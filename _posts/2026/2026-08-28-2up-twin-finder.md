---
layout: post
title: "2UP my “Twin Finder” dual pane file manager"
date: '2026-08-28T11:45+01:00'
tags:
- software
- macos
- app
- finder
- poweruser
- swift
- swiftui
nouns:
- 2UP
- Twin Finder
- Finder
- Midnight Commander
- Norton Commander
- Quick Look
- SwiftUI
- Mac App Store
- Trash
- Put Back
- Open With
- Get Info
image: /images/posts/2up-grid-light.png
featured: false
pinned: false
donate: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2093282277488775462
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mu556sjo522g
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/117172625184283048

---

Today I'm shipping [2UP](https://www.gingerbeardman.com/apps/2up/), a Mac-assed native-focused dual-pane native file manager. After 105 TestFlight builds and many App Store Review rejections, it's finally released. FML, what a relief!

Think "Twin Finder", not Midnight Commander.

Most dual-pane file managers take their cues from Norton Commander and its descendants. 2UP starts somewhere different: two familiar Finder windows joined into one focused, keyboard-first workspace. It aims to do everything "The Finder Way" and behave as much of a good Mac citizen as possible. I worked hard to get it on the Mac App Store, and it does a bunch of stuff you might not expect to be possible in an app adhering to those rules.

It's less like learning a different file manager and more like giving Finder a twin with superpowers.

<picture><source srcset="/images/posts/2up-grid-dark.webp" media="(prefers-color-scheme: dark)"><img src="/images/posts/2up-grid-light.webp" alt="2UP showing list view beside icon view, with per-pane tabs" width="2784" height="2118" style="max-width:100%;height:auto;display:block;margin:1.5rem auto"></picture>

## Twin Finder

Native list and icon views, tags, comments, Quick Look, Get Info, Open With, Trash with Put Back, aliases, packages, mounted volumes, permissions, and extended attributes. Two panes, or a single pane that collapses when the window is narrow.

## Tabs, or not

Off by default. Per-pane, each with its own folder, view, sort, and history. Pin them, rename them, reopen closed ones, drag them between panes, drop files onto them, or drag a tab out to another app.

## Keyboard first

Switch panes, jump to a path with completion, bookmarks, history, recursive filename filtering, in-file content search, and coloured highlight rules. A quick palette for actions, folders, volumes, and history.

## Serious file work

Copy, move, rename (the whole basename, which is more reliable than Finder's approach), batch rename, duplicate, compress, alias, symlink, hard link, delete. Undo and redo. Live transfer progress on the file's own row, and a bar across the Dock icon. Manage conflicts: replace, keep both, or skip.

## Finder adoption

Adopt your open Finder windows over as panes or tabs, selections intact and including hidden items. Optionally adopt new Finder windows automatically. Choose to focus 2UP when you click Finder in the Dock. Both of these features allow you to effectively replace Finder for all common functions, and can be temporarily disabled by holding the Option key.

## Tools built-in

Convert and edit images, merge and split PDFs, transcode audio and video, extract frames, build contact sheets, recognise text, read barcodes, strip metadata, checksums.

## Have it your way

Custom scripts, macOS Services, your own list of Open With apps. An alternate Happy Mac icon. Native SwiftUI, no third-party frameworks.

## Offline and sandboxed

No network code, no accounts, no subscriptions, no analytics, no ads. Just a 2.2 MB download.

<p style="text-align:center;margin:0 0 1.5rem">
<img src="/images/posts/2up-icon.png" alt="2UP icon" width="128" height="128" style="display:inline-block;margin:0 0.5rem">
<img src="/images/posts/2up-icon-alt.png" alt="2UP alternate icon" width="128" height="128" style="display:inline-block;margin:0 0.5rem">
</p>

----

# Launch Sale

*2UP* is on a launch sale until 14th September 2026 on the [Mac App Store](https://apps.apple.com/app/6790582006). 

More information, full feature list, and comparison with other similar apps at [gingerbeardman.com/apps/2up/](https://www.gingerbeardman.com/apps/2up/)
