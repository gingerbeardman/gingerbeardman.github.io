---
layout: post
title: More extensions for Nova editor
date: '2024-10-17T21:47+01:00'
tags:
- nova
- extension
- hack
nouns:
- Panic
- Nova Extensions
- Nova editor
- Nova
redirect_from: /2024/10/17/two-more-extensions-for-nova-editor/
comments: https://twitter.com/gingerbeardman/status/1846915314254069773
style: |
  img {
    float: left;
    margin-right: 1rem;
  }

---

I'm a big believer in solving problems yourself if it's possible rather than waiting for app updates that might never arrive. Making extensions for the [Nova editor](https://nova.app) that I do most of my programming and blogging in is so much fun! So, here are two more:

----

## Reindent-o-matic

Allows you to apply `.editorconfig` indent rules to the current file, or all files matching specific extensions. Important: changes are applied but not saved, giving you the opportunity to review.

 Useful when reusing code from one project that used space indentation to a new one that uses tab indentation. Ideally Nova should do this automatically, and sometimes it does, but not every time for reasons I can't figure out.

[extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.Reindent-o-matic/](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.Reindent-o-matic/)

----

## Toggle Scroll Bars

Allows you to see the scrollbar at all times. This is useful because the scrollbar also contains source control change markers. With scrollbars always visible you can more easily locate changes across the entire length of your document.

This has already saved me so much time and effort and I've only been using the editor this way for a few a week. So I thought I'd create an extension to make it easier for other people to enjoy this usability improvement.

[extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.scrollbars/](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.scrollbars/)

**Scroll Bars on/off**

![on-off](/images/posts/scrollbars-on-minimap-off.png) ![off-off](/images/posts/scrollbars-off-minimap-off.png) 

<br clear="both">

**Minimap with Scroll Bars on/off**

![on-on](/images/posts/scrollbars-on-minimap-on.png) ![off-on](/images/posts/scrollbars-off-minimap-on.png)

<br clear="both">

----

## Unwrap Paragraph

OK, I got carried away. This one adds the ability to merge multiple lines of select text into one.

This is useful for combining multiple lines of data into one, or reflowing a paragraph of text that has had manual line breaks applied such as something pasted from an old email. It also colalesces areas of white space into a single space. So, it's not just "Join Lines" but something more specific.

In the _TextMate_ editor this command is called Unwrap Paragraph, so I've kept the same name.

## Example

Text, before:
```
	What 
exactly does  
this   extension	
do with the
text?  🤔
```

Text, after:
```
What exactly does this extension do with the text? 🤔
```

Source code, before:
```lua
{
	0x050,
	0x104,
	0x202,
	0x050,
	0x451,
	0x104,
	0x505,
	0x088,
	0x272,
	0x104,
	0x050
}
```

Source code, after:
```lua
{ 0x050, 0x104, 0x202, 0x050, 0x451, 0x104, 0x505, 0x088, 0x272, 0x104, 0x050 }
```
