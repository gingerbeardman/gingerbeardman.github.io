---
layout: post
title: Automatically pairing a Wii remote on macOS
tags:
- wii
- guide
nouns:
- Wii remotes
- Wii remote
- Nintendo
- Wii
- Intel
- Mac
- Apple silicon
- macOS
comments: https://twitter.com/gingerbeardman/status/1637977948354408451

---

Pairing a Nintendo Wii remote used to work just fine on macOS, but starting with Monterey Apple changed something and Wii remotes now require a PIN code. Maybe they took out the Wii remote special case when they rewrote IOBluetooth?

Anyway, some very clever people have already documented [how to calculate the PIN code for any Wii remote](https://wiibrew.org/wiki/Wiimote#Bluetooth_Pairing). It's the Bluetooth network [MAC address](https://en.wikipedia.org/wiki/MAC_address) of the device *in reverse*.

But a PIN code made up of hex numbers is difficult to type by hand. It isn't a decimal number, or ASCII text, and it quite probably contains special characters that are not represented on a keyboard. All that to say: we can't enter it into the macOS Bluetooth pairing window.

However, we can use the [blueutil](https://github.com/toy/blueutil) command-line tool to automate the following steps:

1. get the MAC address
2. calculate the PIN code
3. pair
4. connect

All you have to do is hold down 1+2 on your Wii remote and wait a short while.

If you're using an Intel Mac you might have luck with the script below, but if you're on Apple silicon you'll be sadly out of luck and unable to pair your Wii remote.

<script src="https://gist.github.com/gingerbeardman/05030c73714b3aa3202aeee7f21c3b1e.js"></script>
