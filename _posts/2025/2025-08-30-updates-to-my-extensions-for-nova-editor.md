---
layout: post
title: "Updates to Extensions for Nova editor"
date: '2025-08-30T16:03+01:00'
tags:
- nova
- extension
- hack
- tooling
- workflow
- poweruser
- software
nouns:
- Panic
- Nova Extensions
- Nova editor
- Nova
image: /images/posts/nova-extensions.png
featured: false
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/1961817293614149911
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3lxmw4bkdns2j
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/115118484323232576

---

In late 2024, I spent some time improving my tools by [building a set of extensions for Nova editor](/2024/10/17/extensions-for-nova-editor/) to streamline some time-consuming tasks I encounter during blogging and game development.

![IMG](/images/posts/nova-extensions.png "My current list of extensions for Nova editor")
{:.tofigure}

----

This week, I released major updates to many of them with enhanements and new features:

## Bookmarks

- [Version 2.0.0](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.Bookmarks/)
- Adds sorting, the ability to bookmark folders, marking of missing items, and other improvements.

## Markdown File Linker

- [Version 2.0.0](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.MarkdownFileLinker/)
- Results in the choice palette are now sorted by default using dates found in filenames.
- Along wither other filtering improvements.

## Unwrap Paragraph

- [Version 2.0.0](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.unwraptext/)
- You can no unwrap the text surrounding cursor, which removes from friction.
- Multiple paragraphs will be unwrapped individually when working on selected text.

## Word Counter

- [Version 2.0.0](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.wordcounter/)
- Watched words can be managed through the sidebar, adding from selected text or user input. 

## YAML Tag Picker

- [Version 2.0.0](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.YAMLTagPicker/)
- You can quickly insert or update the creation/modified ISO date in your front matter.

----

*Plus!* I also released a brand new extension: 

## CSV to MD table

- [Version 1.0.0](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.csv2md/)
- Convert tabular data between CSV/TSV and Markdown formats.
