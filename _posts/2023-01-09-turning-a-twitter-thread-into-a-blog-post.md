---
layout: post
title: 'Turning a Twitter Thread into a Blog Post'
tags:
- hack
- twitter
- markdown
nouns:
comments: 

---

Sometimes after posting to Twitter I'll decide that I should really archive the information as a blog post. For single tweets that's as easy (or difficult) as copying the text and images and publishing. For Twitter threads, it could be a lot more complicated. With a bit of lateral thinking I've found an easy way to do it.

1. Get the URL to a post in the thread
1. Unroll the thread using [threadreaderapp.com](https://threadreaderapp.com)
1. Open the web inspector
1. Highlight the element that contains the content (the one with `data-controller="mentions"`)
1. Right click, and choose Copy > HTML
1. Paste the HTML into this [Markdown converter](https://codebeautify.org/html-to-markdown)
1. Copy the Markdown
1. Paste into your blogging system

The conversion from HTML to Markdown cleans or sanitises the content making for a straightforward paste into most blogging software.

## Optional post-processing

- You might want to repoint all embedded images from Twitter to locally-hosted copies
- Some images in long threads might be lazy loaded, so you'll need to fix those
- Check and reinstate any embedded video iframes
