---
layout: post
title: "Controlling local web servers using xbar"
date: '2026-01-12T20:57+00:00'
modified: '2026-01-14T23:20+00:00'
tags:
- hack
- software
- xbar
- poweruser
- web
nouns:
- xbar
image: /images/posts/xbar-localhost-light.png
featured: false
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2010831092014567632
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mcazepae7k26
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/115884324962767854

---

> Note: an enhanced and native macOS version is headed to the Mac App Store! [It's already finished](https://twitter.com/gingerbeardman/status/2011578649087263204).

Sometimes I want to run local web servers for projects I'm working on. Usually more than one at a time, or at least over a short space of time.

So I thought it would be cool to have a controller for those local servers in my menu bar. Sounded like the perfect job for a little scripting and [xbar](https://github.com/matryer/xbar), which is a great way to prove a menubar app idea quickly.

## How it works

The plugin allows you to:
- toggle servers on and off
- open in browser
- view ports
- view paths
- view log sizes
- clear logs
- edit config
- and more!

![IMG](/images/posts/xbar-localhost-dark.png)

## Example config

In the config file we set the starting `SERVER_PORT`, followed by one or more `SERVER_DIR` for as many projects as you might want servers. We can temporarily comment out those server lines to prevent projects from appearing in the menu.

```sh
# .xbar_httpd_config
SERVER_PORT=8000
#SERVER_DIR=~/Projects/starchasers/
SERVER_DIR=~/Projects/serenity/
SERVER_DIR=~/Projects/point-cloud/
```

----

## Source code

Python source code is available in the following gist:

{% gist a81df96cd0b4c7a397b04711cafeb287 %}