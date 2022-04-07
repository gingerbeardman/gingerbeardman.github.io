---
layout: post
title: Accessing Yahoo! Japan from Europe
tags:
- macintosh
nouns:
- Yahoo! Japan Auctions
- Yahoo! Japan
comments: https://twitter.com/gingerbeardman/status/1509533825520443393

---

[As of yesterday, 6th April 2002, Yahoo! Japan has blocked access to the majority of their services for anybody located in the EEA](https://www.theverge.com/2022/2/1/22911965/yahoo-japan-europe-offline-regulations-compliance-gdpr) (European Economic Area). That means the following countries: Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.

I can't say I blame Yahoo! Japan for doing this, as the demands of GDPR, etc. are ill-considered and almost impossible for even the biggest companies to put into practice. But, regardless, here we are.

My interest lies mostly in Yahoo! Japan Auctions, but the methods of access that I outline will work for any of their services. I'll provide links where I can, and do feel free to reach out to me on Twitter, but sadly I'm unable to offer unpaid one-to-one help.

With that said let's find some workarounds!

## Browsers

Certain browsers offer built in proxy/VPN, at zero cost:

- [Opera browser](https://addons.opera.com/en-gb/extensions/details/opera-vpn/) (desktop only)
- [Aloha browser](https://alohabrowser.com) (mobile only)

Notes:
- whilst using a proxy all your traffic goes through it
- only use proxy to access selected websites, not all sites
- avoid proxy/VPN apps with free trials and expensive monthly subscriptions thereafter

## Server Access

I run a server that does automated searches of Yahoo! Japan Auctions, giving me a sort of "Saved Search" mechanism for my own hobbies and interests. I now use a manual proxy configuration, for just the accesses to Yahoo! Japan websites, by specifying a proxy URL in my server configuration.

## PAC (Proxy Auto Configuration)

You don't really want to route all of your traffic through a proxy, especially if it's a free proxy that you can't really trust. You should enable the proxy only for *.yahoo.co.jp URLs using a PAC file. Use [this handy tool to create and test your PAC file](https://thorsen.pm/proxyforurl), host the script somewhere publicly accessible on the internet, and enter the proxy URL into your browser.

## Redirection

My main browser on macOS is Safari and regardless of the previous workarounds I still visit Yahoo! Japan Auctions pages during general browsing and image searching. This results in the dreaded error page.

To workaround this I have configured the [PageExtender extension](https://apps.apple.com/gb/app/pageextender-for-safari/id1457557274?mt=12) to apply custom CSS and JS to Yahoo! Japan Auctions URLs. I do the following:

- CSS: hide everything on the page (so I don't see the ugly error)
- JS: redirect the page to an alternative website so I can see details of the auction item (such as pages provided by one of the many "buy from japan" websites)

This means I can keep browsing uninterrupted.

## To be continued...

I'll add to this page as I come up with more workarounds.