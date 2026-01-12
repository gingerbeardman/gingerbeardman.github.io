---
layout: post
title: "Controlling local web servers using xbar"
date: '2026-01-12T20:57+00:00'
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

Sometimes I want to run local web servers for projects I'm working on. Usually more than one at a time, or at least over a short space of time.

So I thought it would be cool to have a controller for those local servers in my menu bar. Sounded like the perfect job for a little scripting and [xbar](https://github.com/matryer/xbar), which is a great way to prove a menubar app idea quickly.

## How it works

The plugin allows you to:
- toggle servers on and off
- view ports
- view paths
- view log sizes
- clear logs
- edit config
- and more!

![IMG](/images/posts/xbar-localhost-dark.png)

## Example config

In the config file we set the starting `SERVER_PORT`, followed by one or more `SERVER_DIR` for each project. We can temporarily comment out projects to prevent them from appearing in the menu.

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