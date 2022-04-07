---
layout: post
title: Accessing Yahoo! Japan from Europe
tags:
- yahoo-japan
- internet
- proxy
- vpn
- workarounds
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

## Browsers

Certain browsers offer built in proxy/VPN, at zero cost. These will allow you to access Yahoo! Japan pretty much as you did before. But read the notes below!

- [Opera browser](https://addons.opera.com/en-gb/extensions/details/opera-vpn/) (desktop only)
- [Aloha browser](https://alohabrowser.com) (mobile only)

Notes:
- whilst using a proxy all your traffic goes through it
- only use proxy to access selected websites, not all sites
- avoid proxy/VPN apps with free trials and expensive monthly subscriptions thereafter

## PAC (Proxy Auto-Config)

You don't really want to route all of your traffic through a proxy, especially if it's a free proxy that you shouldn't trust. It's recommended to enable the proxy only for *.yahoo.co.jp URLs, which is possible using a [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config) file. [This handy website can be used to create and test your PAC file](https://thorsen.pm/proxyforurl), then you should host the PAC file somewhere publicly accessible on the internet (so no passwords or personal information should be in it!), and finally enter the proxy URL into your OS or browser. This can be done on both iOS, macOS and likely other platforms.

## Redirection

My main browser on macOS is Safari and regardless of the previous workarounds I still visit Yahoo! Japan Auctions pages during general browsing and image searching. This results in the dreaded error page.

To workaround this I have configured the [PageExtender extension](https://apps.apple.com/gb/app/pageextender-for-safari/id1457557274?mt=12) to apply custom CSS and JS to Yahoo! Japan Auctions URLs. I do the following:

- CSS: hide everything on the page (so I don't see the ugly error)
- JS: redirect the page to an alternative website so I can see details of the auction item (such as pages provided by one of the many "buy from japan" websites)

This means I can keep browsing uninterrupted.

## Server-level access

I run a server that does automated searches of Yahoo! Japan Auctions, giving me a sort of "Saved Search" mechanism for my own hobbies and interests. I now route all accesses to Yahoo! Japan websites through a proxy by specifying the proxy URL in my server configuration.

## To be continued...

I'll add to this page as I come up with more workarounds.