---
layout: post
title: Accessing Yahoo! Japan Auctions from Europe
tags:
- macintosh
nouns:
- Yahoo! Japan Auctions
- Yahoo! Japan
comments: https://twitter.com/gingerbeardman/status/1509533825520443393

---

As of yesterday, 2002-04-06, Yahoo! Japan has blocked access to their services for anybody located in the EEA (European Economic Area). That means the following countries: Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.

I can't say I blame Yahoo! Japan for doing this, as the demands of GDPR are badly considered and almost impossible to put into practice for most companies. But, regardless, here we are.

My interest lies mostly in Yahoo! Japan Auctions, but these tricks will work for any of their services. I'll provide links where I can, and do feel free to reach out to me on Twitter, but sadly I'm unable to offer unpaid one-to-one help. With that said let's find some workarounds!

## Browsers

Certain browsers offer built in proxy/VPN at zero cost:

- [Opera browser](https://addons.opera.com/en-gb/extensions/details/opera-vpn/) (desktop only)
- [Aloha browser](https://alohabrowser.com) (mobile only)

Notes:
- whilst using a proxy all your traffic goes through it
- it's recommended to only use proxy to access selected websites, not all sites
- avoid proxy/VPN apps with hidden costs and expensive monthly subscriptions

## Servers

I run automated searches of Yahoo! Japan Auctions on my server, so I need a way to make sure that access is not blocked. I can use manual proxy configuration for just the acccess to Yahoo! Japan Auctions by specifying it in the command.

## PAC (Proxy Auto Configuration)

You don't really want to route all of your traffic through a proxy, especially a free proxy that you can't really trust too much. You should specify the proxy only for *.yahoo.co.jp using a PAC file. Use [this handy tool to create and test your PAC file](https://thorsen.pm/proxyforurl), host it somewhere public on the internet, and enter the proxy URL into your browser.

## Redirection

My main browser on macOS is Safari and at some point I'll probably visit a Yahoo! Japan Auctions page during general browsing or image searching. This results in the dreaded error page.

So I have configured the [PageExtender extension](https://apps.apple.com/gb/app/pageextender-for-safari/id1457557274?mt=12) to apply custom CSS and JS to Yahoo! Japan Auctions URLs. I do the following:

- CSS: hide everything on the page (so I don't see the ugly error)
- JS: redirect the page to an alternative website so I can see details of the auction item (such as pages provided by one of the many "buy from japan" websites)

This means I can keep browsing uninterrupted.

## To be continued...

I'll add to this page as I come up with more workarounds.