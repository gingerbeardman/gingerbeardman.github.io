---
layout: post
title: 'Emoji Dictionary 🤓 📖'
tags:
- macos
- emoji
- dictionary
- opensource
- medium
nouns:
comments: https://twitter.com/gingerbeardman/status/755180722059636736

---

One of my favourite features of Mac OS X is the ability to point the mouse cursor at a word and press _Command+Control+D_ to quickly see a popup definition courtesy of Dictionary.app:

![](https://miro.medium.com/max/804/1*z1FhHq7vt1X2oNOsnsH9xg.png "(you can also get this popup through a Force Click, or three-finger click/tap)")
{:.tofigure}

It annoys me when I use this feature on an Emoji and it doesn’t work. 😠

D.I.Y.
------

During my job as a Technology Evangelist at Apple, I took great pride in learning as much as possible about the frameworks and tools that are provided to developers. One such toolkit allowed the creation of custom dictionaries for Mac OS X.

So I thought it would be fun to use the Dictionary Development Kit to create a simple dictionary of Emoji and their meanings. It was! You can grab the finished dictionary here: [github.com/gingerbeardman/Emojipedia](https://github.com/gingerbeardman/Emojipedia)

![](https://miro.medium.com/max/1282/1*1zrc24g1nE6yyEVfjUHW5g.png " ")
{:.tofigure}

How it works
============

I grabbed a comprehensive list of [Emoji Data](http://unicode.org/emoji/charts/emoji-list.html) from the Unicode website, and then set about converting it. The process was as follows:

1.  Convert Emoji Data table to plain text (select all & copy in Chrome).
2.  Write some simple PHP to parse the text file and write out the XML.
3.  Setup build process.
4.  Test and repeat many times.

For each Emoji I store the name and emoji itself, along with a list of keywords and aliases. That way you can search by word or theme and more easily find the emoji you’re looking for. I also list the keywords in the definition, which Dictionary.app automatically converts into hyperlinks allowing you to browse the Emojipedia dictionary just like a website.

Emojipedia
----------

There’s only one place to go to find out information on any Emoji and that’s [Emojipedia](http://emojipedia.org), a fantastic resource created by Jeremy Burge. I put a link to Emojipedia in every definition, so you can easily click through to find out more and continue learning about Emoji. I plan to work even closer with Emojipedia to include even more information in the dictionary file.

![](https://miro.medium.com/max/840/1*Pn7tHXghkM3yK1YPGJTBkQ.png " ")
{:.tofigure}

For Hire
--------

I offer a consultancy service that helps companies make better use of technology; from low level tools through to user interface and experience. [Get in touch with me](http://www.gingerbeardman.com) if you’d like to work together.

It only remains for me to wish you a Happy [#WorldEmojiDay](https://twitter.com/search?q=%23WorldEmojiDay)! 🌍