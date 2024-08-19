---
layout: post
title: 'Using a proxy to speed up access to specific websites'
tags:
- proxy
- hack
- hoyoyo
nouns:
- HOYOYO
- Opera
- Documents
comments: https://twitter.com/gingerbeardman/status/1487813258971074562

---

I use [world.hoyoyo.com](https://world.hoyoyo.com/member~register~code~IZhM8F) quite a lot. It's a forwarding service for buying stuff from Japan. However, I found that their website took around a minute to load a page, which became hugely annoying very quickly.

HOYOYO are great as they will negotiate discount prices from Mercari sellers, which has saved me a ton of money, so I wanted to stick with them.

Over time I'd resorted to accessing their website through a trusted VPN in either [Opera browser](https://www.opera.com) (macOS) or [Documents app](https://readdle.com/documents) (iOS) which both worked very well. But launching a new browser for a specific website always bothered me.

# It's good to talk

I was chatting with my brother about it and he said that he was seeing reasonably quick load times. After a little investigation I found that, for reasons I don't understand, certain websites are very slow to load through my ISP (British Telecom). At this point, it was obvious that using a VPN in a specific browser was overkill for solving the problem.

# Proxy to the rescue

So I tried using a web proxy and the load times dropped drastically, to a handful of seconds, which is a lot more reasonable! Not quite as quick as using the specific browsers, but good enough for me.

Of course, I don't want all traffic to go through the proxy. So I set up a PAC (Proxy Auto-Configuration) file to route only requests to HOYOYO through the proxy and leave everything else untouched.

In terms of which proxy to use, you'll have to hit Google or set up your own on an external server.

# PAC, man

Here's what my final PAC file looks a bit like:

<script src="https://gist.github.com/gingerbeardman/dd6691c2706a3d27a485a7a7dc3e5d60.js"></script>

Note: you'll need to substitute a valid proxy IP address and port number, and host the file on a web server you can access from your device.

### Usage

- For iOS, you enter the URL of the file in the Proxy setting of your current Wi-Fi connection. A correct setting will be shown as "Automatic".
- macOS: enter it in System Preferences > Network > Advanced > Proxies, as below.

![PNG](/images/posts/proxy.png)
