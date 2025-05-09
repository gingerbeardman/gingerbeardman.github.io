---
layout: post
title: Accessing Yahoo! Japan from Europe
modified: '2024-05-18T22:38+01:00'
tags:
- yahoo-japan
- internet
- proxy
- vpn
- hack
- workaround
nouns:
- Yahoo! Japan Auctions
- Yahoo! Japan
- Safari
- macOS
- iOS
comments: https://twitter.com/gingerbeardman/status/1512033740482035716

---

Since 6th April 2022, [Yahoo! Japan has blocked access to the majority of their services for anybody located in the EEA](https://www.theverge.com/2022/2/1/22911965/yahoo-japan-europe-offline-regulations-compliance-gdpr) (European Economic Area). That means the following countries: Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.

I can't say I blame Yahoo! Japan for doing this, as the demands of GDPR, etc. are ill-considered and almost impossible for even the biggest companies to put into practice. But, regardless, here we are.

My interest lies mostly in Yahoo! Japan Auctions, but the methods of access that I outline will work for any of their services. I'll provide links where I can, and do feel free to reach out to me on Twitter, but sadly I'm unable to offer unpaid one-to-one help.

With that said let's find some workarounds!

## Proxy or VPN?

We can use a couple of service to place the source of our access to Yahoo! Japan outside of the EEA blocked area, and any checks as to our physical location will get the physical location of the service instead. Neat!

- Proxy: is a middleman service that relays your accesses to/from websites, usually at an application level. It is often not secure and encrypted.

- VPN: this Virtual Private Network encompasses all access to/from your computer,at a system level. It is generally secure and encrypted.

For more information about the difference between a proxy and VPN [read this page](https://nordvpn.com/blog/vpn-vs-proxy/).

Now that we know what tools we're going to use, let's talk about specific uses.

----

## 1. Browsers

Certain browsers offer built in proxy/VPN, at zero cost. These will allow you to access Yahoo! Japan pretty much as you did before. But read the notes below!

- [Opera browser](https://addons.opera.com/en-gb/extensions/details/opera-vpn/) (desktop only)
- [Aloha browser](https://alohabrowser.com) (mobile only)

Notes:
- whilst using a proxy all your traffic goes through it
- only use proxy to access selected websites, not all sites
- avoid proxy/VPN apps with free trials and expensive monthly subscriptions thereafter

----

## 2. Standalone VPNs

You can use a stand-alone VPN that is installed at a system level. This will affect all apps running on your system. Such VPNs are provided by the likes of PIA, ExpressVPN, SurfShark, NordVPN. Whilst I'll refrain from recommending any one in particular, I will say that if you hunt around you can almost always find special offer pricing.

Personally I use PIA, so [here's a referral to save some money](https://www.privateinternetaccess.com/pages/buy-a-vpn/1218buyavpn?invite=U2FsdGVkX18DlbIFebZBqvJIfoIVUNXHTGwHDesd0ksu2LJWgn2ljTzF91SYnAql%2C-6K1dJvsW9WQAp6IM1xnkkTq6sM).

----

The above solutions are all you need, but if you're looking for more solutions then read on.

## 3. Proxy

You don't really want to route all of your traffic through a proxy, especially if it's a free proxy that you shouldn't trust. It's recommended to enable the proxy only for *.yahoo.co.jp URLs, which is possible using a [Proxy Auto-Config](https://en.wikipedia.org/wiki/Proxy_auto-config) (PAC file), an example of which is below.

{% gist d02b61f86eadd29a86b3ae42082eee7f %}

[This handy website can be used to create and test your PAC file](https://thorsen.pm/proxyforurl), then you should host the PAC file somewhere publicly accessible on the internet (so no passwords or personal information should be in it!), and finally enter the proxy URL into your system or browser network settings. This can all be done on both iOS, macOS and likely other platforms.

## Which Proxy?

There are many free proxies listed at [freeproxy.world](https://www.freeproxy.world) with the caveat that you may have to hunt to find one that works, find new ones when things stop working, and not trust them with any personal data.

It's possible to host your own! You could do this on your home network using a Synology NAS, Raspberry Pi or some other computer. Or you can do it on a wider scale by hosting your proxy in the cloud. This is an advanced level solution, but is currently my preferred method. I have a proxy installed on a cloud compute instance located outside of the EEA. More specifically, I am using an install of `tinyproxy` on an *Oracle Cloud Instance* located on a server in Switzerland. I then combine this with the PAC method on the network connection each of my devices.

### Server-level access

I run a server that does automated searches of Yahoo! Japan Auctions, giving me a sort of "Saved Search" mechanism for my own hobbies and interests. I now route all accesses to Yahoo! Japan websites through my Swiss proxy by specifying its proxy URL in my server configuration.


----

## 4. Redirection

My main browser on macOS is Safari and regardless of the previous workarounds I still visit Yahoo! Japan Auctions pages during general browsing and image searching. This results in the dreaded error page.

To workaround this I have configured the [PageExtender extension](https://apps.apple.com/gb/app/pageextender-for-safari/id1457557274?mt=12) (maOS) and the [Makeover extension](https://apps.apple.com/sg/app/makeover-custom-css/id1602361167) (iOS) to apply custom CSS and JS to Yahoo! Japan Auctions URLs.

I do the following:

- CSS
  - hide everything on the page (so I don't see the ugly error)
- JS
  - redirect the page to an alternative website so I can see details of the auction item (such as pages provided by one of the many "buy from japan" websites)

{% gist 789bcd8786fb76578fc11c491bd5b97b %}

This means I can keep browsing uninterrupted, though of course you can no longer see the original pages as intended.

Here is [my archive of CSS and JS for modifying other sites](https://github.com/gingerbeardman/dot-css-js/) in a similar way.
