---
layout: post
title: File hash calculator app for macOS
tags:
- macos
- hash
comments: 

---

I often need to calculate the hash of a file for verification purposes, to confirm that a download has completed successfully or that an ISO I have dumped from a CD is a correct match with known good dumps.

I couldn't find a nice easy to use app for this so I put together my own app. Download it here: [Hash.app.zip](https://github.com/sunjw/fhash/files/2302036/Hash.app.zip) (version 1.3).

![PNG](/images/posts/hash-app.png)

Features:
- Auto clear text field on each operation
- Finder "Open with..."
- Select file on first launch
- Drag and drop after window is open
- Single or multiple files
- Accepts many binary file types
- Resizable window
- Hold alt/option to only calculate quickest hashes (CRC32, XHH, MD5)
- Default is to calculate all hash types, including slower hashes (SHA1, SHA256)
