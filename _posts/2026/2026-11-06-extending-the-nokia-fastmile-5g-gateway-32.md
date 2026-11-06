---
layout: post
title: Extending the Nokia FastMile 5G Gateway 3.2
date: '2026-11-06T10:40+00:00'
tags:
- hack
- networking
- openwrt
- vpn
- hardware
- poweruser
---

My home internet is a [Nokia FastMile 5G Gateway 3.2](https://www.nokia.com/networks/fixed-networks/fastmile/)—an unlocked unit I bought and own, not a carrier box. Under the hood it's just OpenWrt with a locked-down Nokia web UI bolted on top. So I spent a few evenings opening it up and extending it. It's my router and I'll pry if I want to!

## Getting root

Interestingly this required no exploit—I drove the device's own management client. The firmware only sends TR-069 out the *cellular* interface, so a local ACS never hears from it. [Others](https://forums.whirlpool.net.au/thread/3m01n58r?p=2) hit the same wall and the fix is a dollar of credit at [cloud.tr069.pro](https://cloud.tr069.pro): log in as superadmin, point CWMP at the cloud ACS, and from there enable the `root` and `hguser` shell accounts the UI hides. SSH in, `su -`, done. Then turn CWMP back off.

## A better UI

The stock web UI is minified Angular that references a Dynamic DNS backend but wires no page to it—the feature is shipped and orphaned. Rather than patch the bundle, I built a companion page styled to match, reusing the device's own RSA/AES login crypto so it auto-logs-in and survives firmware bumps. I also improved the login prompt, added dark mode that follows host system, and added some quality-of-life tweaks to the navigation and styling. And I put back three superadmin-only pages the stock menu hides from the admin role—ACS, Access Control (the SSH and CWMP switches), and Cell Management—shown only when you're actually logged in as superadmin.

## Hidden features

DDNS is live now, backed by OpenWrt's full `ddns-scripts` (~70 providers) rather than Nokia's crippled native CGI. Network-wide ad blocking is in too, using `adblock-fast` and the latest lists.

## Whole-home VPN

Perhaps the best part. Public teardowns of an earlier version FastMile hardware said IPsec wasn't really supported—but I found that's not true for my unit, which is hardware version 3.2. The kernel has the XFRM/ESP bits, so I pulled strongSwan from OpenWrt's own feed (unpacked by hand, the device's exact architecture isn't on the mirror) and brought up an [AdGuard VPN](https://adguard-vpn.com/) IKEv2 tunnel—cert chain verified, traffic exiting in my choice of location. The two gotchas were forcing IPv4 for the outer connection and exempting the tunnel address from Nokia's WAN NAT, which was quietly rewriting packets before encryption.

For speed and a wider choice of 65 locations I settled on `adguardvpn-cli`, running as a proper service with per-device routing, DNS through the tunnel, and automatic fallback. I wired it into the web UI as its own VPN page and added an [xbar](https://xbarapp.com/) plugin so I monitor and can flip locations from the Mac menu bar.

## Persistence

`opkg` is right there, so the box is mine to extend—the catch is that `/` is read-only squashfs with a tmpfs overlay, so anything outside `/data` vanishes on reboot. Persistence runs through a `/data/sysupgrade.tgz` archive that `1restore` unpacks at boot, so my first real job was a verified, restorable backup of `/data` and `/configs` before touching anything I couldn't undo.

All of it was developed against a local copy of the UI first, and all of it reversible. If I ever sell the router I'll restore the original backup that I took before I started changing things around.

## Open Source

My scripts to do this are open source at: [github.com/gingerbeardman/fastmile-addons](https://github.com/gingerbeardman/fastmile-addons)