---
layout: post
title: Pairing a Wii remote on macOS
last_modified_at: '2024-02-22T14:22+00:00'
tags:
- wii
- guide
nouns:
- Wii remotes
- Wii remote
- Nintendo
- Wii
- Intel
- Apple silicon
- macOS
image: /images/posts/boss-wii-02.jpg
comments: https://twitter.com/gingerbeardman/status/1637977948354408451

---

## Universal

If you're using the Dolphin emulator, by far the easiest method of syncing a Wii remote with it is to use a cheap Bluetooth adapter and Dolphin's "Passthrough a Bluetooth adapter" controller option. 

If you want to use the Wii remote outside of Dolphin, on modern macOS, you have a couple of options:
- software: [WiimotePair](https://github.com/dolphin-emu/WiimotePair) will pair a Wii remote at system level, only needed once per remote
- hardware: [MAYFLASH MAGIC-NS Bluetooth adapter](https://amzn.to/44CpM1x) (any version will work for Wii remotes)

----

The following section remains only for historical sake:

## Intel-only

Pairing a Nintendo Wii remote used to work just fine on macOS, but starting with Monterey Apple changed something and Wii remotes now require a PIN code. Maybe they took out the Wii remote special case when they rewrote IOBluetooth? *The method below only works for Intel Macs.*

Anyway, some very clever people have already documented [how to calculate the PIN code for any Wii remote](https://wiibrew.org/wiki/Wiimote#Bluetooth_Pairing). It's the Bluetooth network [MAC address](https://en.wikipedia.org/wiki/MAC_address) of the device *in reverse*.

But a PIN code made up of hex numbers is difficult to type by hand. It isn't a decimal number, or ASCII text, and it quite probably contains special characters that are not represented on a keyboard. All that to say: we can't enter it into the macOS Bluetooth pairing window.

However, we can use the [blueutil](https://github.com/toy/blueutil) command-line tool to automate the following steps:

1. get the MAC address
2. calculate the PIN code
3. pair
4. connect

All you have to do is hold down 1+2 on your Wii remote and wait a short while.

**If you're using an Intel Mac you might have luck with the script below, but if you're on Apple silicon you'll be sadly out of luck and unable to pair your Wii remote.**

<script src="https://gist.github.com/gingerbeardman/05030c73714b3aa3202aeee7f21c3b1e.js"></script>