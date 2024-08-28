---
layout: post
title: "This behavior is by design"
date: '2024-08-28T22:46+01:00'
tags:
- design
- soapbox
- gamedev
- software
- critique
nouns:
- Microsoft
- Knowledge Base
- Windows 95/98
- Playdate
- Mars After Midnight
image: /images/posts/this-behavior-is-by-design.png
featured: false
pinned: false

comments: https://twitter.com/gingerbeardman/status/

---

Back in the mid-1990s I was using Windows 95/98 and running uo against bugs, problems, driver issues, unexpected things happening. I would often end up on the Microsoft Knowledge Base support web pages, where the issue would often be accompanied by the line "[This behavior is by design](https://support.microsoft.com/en-gb/topic/you-can-change-the-desktop-wallpaper-setting-after-administrator-selects-prevent-changing-wallpaper-option-in-group-policy-e3af8a03-69f5-e320-42dc-15702ba5375c)", which remains in use to this very day.

This mantra has stuck with me over the years, and it came to light in a recent discussion about the design of [Lucas Pope](https://en.wikipedia.org/wiki/Lucas_Pope)'s [Mars After Midnight](https://play.date/games/mars-after-midnight/) for the [Playdate](https://play.date) handheld game console. It has a black interstitial screen between some scenes, which was enough to get me thinking about the intent behind the design of a screen that contains ...nothing at all.

## To be or not to be

I'm as guilty as anybody in wondering why certain things are how they are in the software, apps, or games I'm using. It's a fundamental truth about software development that often goes unnoticed by end users: every aspect of computer software is the result of deliberate human decisions, from the broadest feature sets right down to the placement of individual pixels.

This intentionality in software design has profound implications. It means that the user experience - whether frustrating or delightful - stems from choices made by developers, designers, product managers, and perhaps even the users themselves. How enjoyable or not the software is to use, the accessibility (or lack thereof) of user interfaces, and even the bugs and glitches we encounter are all products of the human decision-making process. This perspective challenges the notion that technology is impersonal, as there are human minds and motivations behind every aspect.

However, it's worth noting that while every element is designed, not all design decisions are made with equal deliberation or foresight. Some choices are carefully considered and tested, while others might be rushed, overlooked, or based on flawed assumptions. Additionally, the complexity of modern software means that interactions between different design choices can sometimes lead to unintended consequences. More on that later.

----

## Examples

Given that we could go on forever with examples, here are 10 off the top of my head:
- whether or not there's a black screen between scenes in a game
- size of padding or border around the edge of a dialog box
- radius of a rounded rectangle
- spacing or kerning between specific letters of a font
- aliasing or anti-aliasing around the edge of a circle
- speed at which an object moves across the screen
- what happens when you press a button or do an action
- wording on a menu item or dialog box
- order of two competing buttons that mean cancel or proceed
- the number of digits used to represent a high score

----

## Happy accidents

While most aspects of software are meticulously planned, sometimes unintended behaviors or glitches lead to serendipitous discoveries. These "happy accidents" might result in a breakthrough in design and can become beloved features if developers choose to keep them.

A famous example is the "creeper" in Minecraft, which resulted from a coding error while creating pigs. The game's creator, [Markus Persson](https://en.wikipedia.org/wiki/Markus_Persson), liked the mistaken entity so much that he decided to keep and refine it, turning it into one of the game's most iconic elements. Similarly, the [wavedash technique in Super Smash Bros. Melee](https://www.ssbwiki.com/Wavedash) was an unintended consequence of the game's physics engine, but it became a crucial part of high-level play after creator [Masahiro Sakurai](https://www.ssbwiki.com/Masahiro_Sakurai) opted to leave it in. These instances remind us that even in a world of intentional design, there's room for the unexpected - and the human decision to embrace and incorporate these accidents can lead to some of the most innovative and engaging aspects of software.

## Deciding by not deciding

Some might argue that you don't make a choice when you accepr the default settings, like the white background and font in a Word document. Or you might make the same argument about using a pre-made framework or package in your software. However, I would argue that by using the defaults you are implicitly agreeing with the designers' choices. As a user you become complicit in the design decisions simply by not changing them. 

This tacit agreement with default settings is another aspect of design that often goes unnoticed, yet it plays a significant role in shaping the end product. Somebody at Microsoft decided that with Office 2007 the default font would become Calibri, replacing Times New Roman which had been the default since forever. There's no better example of the implications and reach of a single human decision.

## The Future

At the end of the day, computers do only what we direct them to do, so every aspect of software has been touched by the hand of a human. With the rise of machine learning and "AI" coding assistants, that human touch may become increasingly abstracted from view. However, rest assured it is still there. Even in systems that utilize artificial intelligence, humans are designing the algorithms, curating and creating the training data, and making decisions about how to implement and apply these tools. The fundamental truth remains: behind every line of code, every pixel, and every feature, there are human decisions shaping our digital experiences.