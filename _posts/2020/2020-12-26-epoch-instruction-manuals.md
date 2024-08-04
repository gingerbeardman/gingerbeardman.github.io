---
layout: post
title: EPOCH Instruction Manuals
tags:
- scans
- preservation
- patreon
nouns:
- Internet Archive
- EPOCH
- jDownloader
- DeepL

---

A recent friendly nudge from [Jason Scott](https://twitter.com/textfiles) at the Internet Archive let me know that somebody had lost their manual for their 1981 Epoch Cassette Vision and tweeted EPOCH to see if they could help. But EPOCH did more than that, spending time to scan and upload [manuals for all of their vintage consoles](https://sv.epoch.jp/manuals)!

Mirroring these at Internet Archive was a nice bite-sized task to help burn off some of the Christmas fat and get things moving again over here. I went about it as follows (high level information only, comment or @ me on twitter if you'd like to know more):

1. Download all PDFs locally using jDownloader (total=240)
2. Copy titles from Japanese listing, store in a file
3. DeepL translate Japanese titles to English, store in a second file
4. Write shell script to loop through filenames and collate titles etc into CSV ready for batch upload
5. Check CSV for errors and fix (there were mistakes in the original Japanese titles and/or DeepL translation)
6. Test batch upload using a single file, tweak script
7. Do the full batch upload using `ia` CLI tool
8. Confirm any failures, fix and reprocess those in a second pass

My script ended up like this: [gist.github.com/gingerbeardman/0d665dff0d400af913ced679810544bd](https://gist.github.com/gingerbeardman/0d665dff0d400af913ced679810544bd) 

After the first pass there were only a few errors: 2 corrupt PDFs that needed to be uploaded manually, 2 duplicate identifiers that I had failed to spot looking through the translations, and 1 identifier that had trailing spaces that I had missed during my finessing of the titles. Pretty good going, though!

They're now accessible at: [archive.org/search.php?query=identifier%3Aepoch-manual%2A](https://archive.org/search.php?query=identifier%3Aepoch-manual%2A) 

Have fun & stay safe!
