---
layout: post
title: 'Sony Reader "Exceptional internal memory state: formatting" workaround'
tags:
- workaround
- sonyreader
nouns:
- Sony
- Reader
- PRS+
comments: https://www.mobileread.com/forums/showthread.php?t=296820

---
I get a strange error from time-to-time on my Sony Reader (PRS-650).

After the Reader powers up, it does the busy spinner and then says:

    +---------------------------------------+
    | Exceptional internal memory state     |
    | Formatting                            |
    |                              [  OK  ] |
    +---------------------------------------+

At this point pressing `OK` will format the device. Yikes!

### Workaround

1. **Do not press** `OK` on the format warning
2. Instead, plug device into your computer
3. Backup `READER` partition (optional, but recommended)
4. Press hardware `RESET` button with paperclip
5. Wait for Reader to reboot (no PRS+ features when booting with USB connected)
6. Unplug from computer
7. Shutdown/restart reader (PRS+ features will be re-enabled)
8. Problem is gone!

### Cause

My theory is that PRS+ doesn't the device being "dirty" when it is unmounted or ejected improperly.