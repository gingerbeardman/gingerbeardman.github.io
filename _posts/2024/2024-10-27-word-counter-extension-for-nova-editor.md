---
layout: post
title: Word Counter extension for Nova editor
date: '2024-10-27T17:12+00:00'
tags:
- nova
- extension
- tooling
- poweruser
- software
nouns:
- Panic
- Nova Extensions
- Nova editor
- Nova API
image: /images/posts/nova-word-counter.png
comments: https://twitter.com/gingerbeardman/status/1849453353496932793
style: |
  img {
    width: 50%;
  }

---

So the [Macro extension](/2024/10/24/macro-extension-for-nova-editor/) and [a bunch of smaller extensions](/2024/10/17/extensions-for-nova-editor/) were supposed to be it, but it's so much fun to create these that whenever I get an idea for an extension I can't help making it.

This time I wanted to keep track of how many times I'm calling certain functions in my code. That's quite a niche requirement so I made a more general purpose word counter with sidebar, thresholds and coloured blobs!

You can configure a list of words to count, and the thesholds that will trigger the grey/green/yellow/red coloured blobs, on a per-project basis using the workspace *Project Settings...* panel.

And you can double-click on a word in the sidebar to search the current document for it. This feature uses AppleScript so you'll need to give Nova permissions, though it should prompt you to do that if it doesn't already have them already.

Note: the screenshot below is slightly old as I've since refined the images in the extension.

![PNG](/images/posts/nova-word-counter.png "Counting some Playdate SDK specific function names")
{:.tofigure}

## Downloads

You can download it at: [extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.wordcounter/](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.wordcounter/)

And the [source code is available on GitHub](https://github.com/gingerbeardman/Word-Counter) and PRs are more than welcome!