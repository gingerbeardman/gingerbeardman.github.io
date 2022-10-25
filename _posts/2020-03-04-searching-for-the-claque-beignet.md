---
layout: post
title: 'Searching for: The Claque Beignet'
tags:
- preservation
- flash
- history
- searching
- patreon
nouns:
- The Claque Baignet
- Raoul Sinier
comments: https://twitter.com/gingerbeardman/status/1235585813137756161

---

Yesterday on Twitter I spotted [a plea for more information on an old Flash game "The Claque Beignet"](https://twitter.com/Le_Toulousaing/status/1234770480554553344) - a game in which you slap singing characters with an extended arm. Apparently there was no maker's mark on the game nor ties to any website. I was intrigued! 

Here are the steps I took to trace the creator of the game.

## 1\. Searching with Limited Knowledge

The earliest mentions of the game I could find with a simple date-range google search were from 2004 and 2005.  The game had been pegged as possibly from 2003 so I was not happy and kept on going!

## 2\. Obtaining the Game

I did a simple Google search for the game and found a site with the game, then saved the SWF file locally by inspecting the source to grab the URL of the SWF file. Here I assumed that the game was a self-contained single file. 

> _You can check that assumption by playing the game in Chrome (at least whilst it still supports Flash!) and checking the web inspector network tab to see if any other files are loaded during play._

## 3\. Decompiling the SWF

I have the tools to decompile SWF files so this was an easy fist step for me. I found minimal interesting information, but it turned out to be enough. 

There were indeed no maker's details or credits, but some interesting variable naming (noise spelled noize) and some relative URLs for the online high score system. These URLs involved the .php3 file extension, which was a good clue. 

PHP3 was around from 1997–2000, followed by PHP4 from 2000–2004. One thing we can assume is that the developer was active during the lifetime of PHP3, so it gave us a window of years to look at. 

> _The online high score system could have pre-dated the game, so it was not safe to assume the game was developed in that period._

**4\. Searching with Learned Knowledge**

So, armed with some idea of the year the game was made it was simple enough task. Let's start with the last year PHP3 was available. I went to Google and entered: 

> _"The Claque Beignet" 2000_

Halfway down the first page of results:

> ![PNG](/images/posts/the-claque-baignet.png)

Bingo! 

The game was published on 21 November 2000 by [Raoul Sinier](https://www.raoulsinier.com). His older website domain is [on archive.org going back to 2001](https://web.archive.org/web/20011205085956/http://www.raspage.com/pages/mainframe.html), so it can be confirmed.

And there we have it. C'est ça!
