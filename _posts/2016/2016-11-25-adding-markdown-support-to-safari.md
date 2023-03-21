---
layout: post
title: 'Adding Markdown Support to Safari'
tags:
- hack
- extension
- markdown
- medium
nouns:
comments: 

---

I recently created a Safari Extension that renders plain text Markdown files as good looking HTML right in your browser. I also added a context menu item so you can swap between the rendered HTML and the original Markdown text.

Download
--------

[http://www.gingerbeardman.com/safari/Doctor.safariextz](http://www.gingerbeardman.com/safari/Doctor.safariextz) (25Kb)

To install: double click the file after it has downloaded.

Why?
----

Recently my buddy and fellow Former Apple Technology Evangelist @[TDRBY](https://medium.com/u/35a6b2e3855b?source=post_page-----c19f3d74f728--------------------------------) asked if there was an extension available for rendering Markdown files in Safari. I had a quick look — there wasn’t — and that got me thinking.

On macOS you can use Quick Look plugins to add support for new file types to Finder’s Quick Look preview popup. These plugins are great, I use a bunch of them, but they only apply in Finder and not in Safari. Maybe I could do something similar?

So, knowing that Safari renders plain text files by wrapping them in simple _HTML_ > _BODY_ > _PRE_ markup, I thought that an extension should be able to modify such files. That was enough to pique my interest — so I got to work!

How?
----

The extension took less than an hour to put together. This blog post took me a lot more time to write! Anyway, here’s how I did it:

1.  Create new extension using _Safari_ > _Develop_ > _Extension Builder_ > _\+ button_
2.  Set website access level to _All_
3.  Confirm extensions run on plain text files in Safari by adding a CSS file containing only _body { background-color: red !important; }_ — success, they do!
4.  Find a suitable JavaScript Markdown to HTML converter [showdown.js](https://github.com/showdownjs/showdown) — this ticks two important boxes: it is easy to use, and is still being actively developed
5.  Write a few lines of JavaScript to run _showdown.js_ on the page text and replace it with the generated HTML
6.  Add [github-markdown.css](https://github.com/sindresorhus/github-markdown-css) and apply the _markdown-body_ class to make things look better
7.  Configure the extension to run only on URLs ending in [common Markdown file extensions](http://superuser.com/a/285878)
8.  Manually add _https://_ variations of the Markdown file extensions to the _Info.plist_ (far quicker than using the Extension Builder user interface)
9.  Edit the .map file reference out of the minimised _showdown.js_ to avoid a runtime access warning
10.  Build the release package

At this point I’d like to mention a couple of great open-source projects that made this task so much easier: [github-markdown.css](https://github.com/sindresorhus/github-markdown-css) by _Sindre Sorhus_, and [showdown.js](https://github.com/showdownjs/showdown) by _Estevão Soares dos Santos_ — nice work guys!

Testing
-------

There are Markdown files all over the internet, but two notable source stand out.

*   Almost every GitHub project has a README.md file. View the RAW version to have the extension render it as HTML. Here’s [the one I used](https://raw.githubusercontent.com/primer/primer-markdown/master/README.md) for testing.
*   [John Gruber](https://medium.com/u/182e1a455da3?source=post_page-----c19f3d74f728--------------------------------)’s excellent [daringfireball.net](http://daringfireball.net) blog is written using Markdown, and the source of each post can be seen by appending .text to the URL. Here are [two](http://daringfireball.net/linked/2016/11/15/designed-by-apple-in-california.text) [posts](http://daringfireball.net/2016/11/new_touch_bar_equipped_macbook_pros.text) that I used to test. Of course, John is also the creator of Markdown. Thanks, John! 👍

Postmortem
----------

After the initial build, a period of testing revealed some issues:

*   Strikethrough, and some other non-standard but frequently used Markdown, was not being rendered. This was fixed by enabling some options in the _showdown.js_ file.
*   Rendering quirks due to using _github-markdown.css_ outside of the GitHub page structure required few manual CSS tweaks. Mainly this was to make tables look better.
*   Markdown on GitHub that was already rendered as HTML was being processed a second time, resulting in corrupted pages. This was fixed by blacklisting the _github.com_ domain.
*   Sometimes I wanted to see the plain text Markdown. I fixed this by spending an inordinate amount of time adding a context menu item that allows you to _Show_ or _Render Markdown_. I hope it was worth it! 😬

Safari Wish List
----------------

Despite the brief development, I noticed a few quirks to do with Safari that I did not expect to encounter:

*   You can’t open the Web Inspector whilst viewing a plain text file. But if you open the inspector on a blank tab, or an existing HTML page, you can then navigate to the plain text file and the inspector will remain open. Phew!
*   Due to the way Safari Extension access permissions work, I have had to enable the extension for all pages and then reduce its power by whitelisting a range of Markdown file extensions. This feels like cracking a nut with a sledgehammer.
*   Extensions do not run on local _file:///_ documents. 😩

Please join me in [filing enhancement requests with Apple](http://bugreport.apple.com) if you’d like to add your support to any of the above points.

Thanks for reading!
-------------------

If you have any questions feel free to get in touch using [twitter](http://twitter.com/gingerbeardman) or [my website](http://www.gingerbeardman.com). I’m interested to see more extensions that add support for other file formats in Safari. And I’m available to help you make better products!