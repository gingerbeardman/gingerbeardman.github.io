---
layout: post
title: Automating the most annoying aspects of blogging
date: '2024-10-11T17:42+01:00'
tags:
- nova
- extension
- jekyll
- yaml
nouns:
- GitHub
- Jekyll
- Webhook
- SASS
- YouTube
- OpenSearch
comments: https://twitter.com/gingerbeardman/status/1844783112208695421

---

Back in 2021 I had a look around and decided to base this incarnation of my blog on an open-source [Jekyll](https://jekyllrb.com) theme called "[Type](https://github.com/ahmadajmi/type)", though I've changed and added so much it's quite some distance from the original as it stands today. As I added blog posts the performance became much worse. Initially I blamed Jekyll for this, until I took a closer look. What I learned was that the blog theme did some things in sub-optimal ways, so over the course of 2024 I have corrected as many of them as I can. Build time dropped from ~12 seconds to ~1 second.

My fixes and optimisations included:
- Optimised SASS to compile once in plugin rather than header of every page (23 Feb)
- Optimised all includes and templates to reduce build time (19 Aug)
- Improved "noun" replacement, automatically-emphasised words (3 Sep)
- Better YouTube embeds using lite-yt-embed (11 Sep)

And my additions along the way:
- Multi-carousel support (14 Jul)
- Automatic transformation of local images urls to CDN urls (19 Aug)
- Automatic smart quotes in post titles (19 Aug)
- Added OpenSearch to allow searching blog from address bar (15 Sep)

So, what is left to do? Not much I reckon. So I took a closer look at what is involved in me creating a blog post and made a list of the most repetitive, awkward or error prone tasks:

1. Entering links, partcularly links to other blog posts
2. Entering tags, going from memory or using search across project
3. Getting images onto my CDN server, currently copy by SFTP

Let's solve them all!

----

## Entering links and tags

You can read about these two in previous blog posts:

- Created [Markdown File Linker](/2024/10/08/markdown-file-linker/) to make linking easier (8 Oct)
- Created [YAML Tag Picker](/2024/10/08/yaml-tag-picker/) to make tagging easier (8 Oct)

----

## Getting images onto my CDN server

I was still having to copy my images to my CDN server manually, which was a pain. But the software stack on the server was intimidating: I serve my websites using a collection of docker containers. I kept putting it off for a rainy day, but I knew I would evetntually get around to automating it.

The idea was to not upload them at all but rather download them to the server directly. I'd use a GitHub Webhook to trigger a `git pull` of the latest files onto my server. It took a few hours and a few attempts, but I finally arrived at a fairly elegant system I'm happy with:

1. GitHub Webhook that runs on push event
2. PHP script in web server docker container receives, validates, and creates a trigger file
3. Service on server outside of docker looks for trigger file and does `git pull`

### GitHub Webhook

- Payload URL: https://www.example.com/webhook.php
- Content type: application/json
- SSL verification: enabled
- Which events would you like to trigger this webhook: Just the push event
- Active: on

### Webhook receiver (PHP script)

<script src="https://gist.github.com/gingerbeardman/63e4dc0bce459ad6609c2701963eb61f.js"></script>

### Webhook git pull watcher (Shell script)

<script src="https://gist.github.com/gingerbeardman/e1c513c69b9e9d41aa91155893ae7334.js"></script>

### Trigger (System service)

<script src="https://gist.github.com/gingerbeardman/1ff95ce64a6a255919b8262dd4a21bc7.js"></script>

### Setup

You can set up the service using:
- `sudo systemctl daemon-reload`
- `sudo systemctl start git-pull-watcher`
- `sudo systemctl enable git-pull-watcher`

Other commands
- `sudo systemctl restart git-pull-watcher`
- `sudo systemctl status git-pull-watcher`
