---
layout: post
title: 'Sony Reader "Exceptional internal memory state: formatting" workaround'
tags: [workaround, sonyreader]
nouns: [Sony, Reader, PRS+]
comments: https://www.mobileread.com/forums/showthread.php?t=296820
---

I get a strange error from time-to-time on my Sony Reader (PRS-650).

After the Reader powers up, it does the busy spinner and then says:
```
+---------------------------------------+
| Exceptional internal memory state     |
| Formatting                            |
|                              [  OK  ] |
+---------------------------------------+
```

At this point pressing `OK` will format the device.

### Workaround

0. **Do not press** `OK` on the format warning
1. Instead, plug device into your computer
2. Backup `READER` partition (optional, but recommended)
3. Press hardware `RESET` button with paperclip
4. Wait for Reader to reboot (no PRS+ features when booting with USB connected)
5. Unplug from computer
6. Shutdown/restart reader (PRS+ features will be re-enabled)
7. Problem is gone!

### Cause
My theory is that PRS+ doesn't the device being "dirty" when it is unmounted or ejected improperly.
