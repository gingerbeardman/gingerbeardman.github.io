---
layout: post
title: 'Famicom Mahjong/Hanafuda controller USB keyboard mod'
tags: [dreamcast,mod,electronics]
nouns: [Famicom, Capcom, Arduino, Pro Micro]
carousel: hanafuda-controller
favourite: yes
---

- Difficulty: 7/10
- Cost: < £20

I play a lot of Hanafuda games. In the arcade these games share a control panel with Mahjong. It’s basically a keyboard featuring the first half of the alphabet, presented in a long row of keys in alphabetical order. This makes playing Arcade Hanafuda games a bit of a chore without a bunch of keyboard remapping and emulator faff.

Some people were using arcade control panels connected to their PC. In Japan you can buy a custom electronics kit to make a usb Mahjong/Hanafuda controller, but it’s expensive at about €85 plus shipping and import duty. There had to be a better way!

I saw that a couple of old Famicom Mahjong games by Capcom were bundled with a custom controller. It was essentially two controllers in one, so won’t work with my controller adapter cables. So I wondered how easy it would be to convert one to USB? Posting on a NES developer forum helped me verify that it should be possible.

Christmas 2019 I bought a bunch of games from Japan and added a Famicom Mahjong controller to my order. It arrived, I put it on my to-do list, then a global pandemic happened.

Almost a year later I picked it up and decided to figure it out. I would need a little Arduino, a usb cable with data and power, and I’d have to write some Arduino code to poll the buttons a couple of times every update. Back in 2019 nobody had done this mod so I was in my own.

Just before I started to write code, I figured I’d do a quick Google search to see if anything had changed. And, unbelievably, somebody else had done this exact mod in February 2020 and open sourced their code. I thanked them and that meant the project was instantly half done.

I bought an additional Pro Micro (Arduino compatible) and set it up on a breadboard that made it easier for me to wire up a prototype and check everything was working.

Finally I cut the old controller cord and wired my new setup into the controller. It worked perfectly. I went back in to trim some supports and add some alternative reinforcements to prevent the controller bending and creaking.

Using this controller makes playing these games so much easier, and I’ve discovered a couple of games that have made this well worth the time and investment.

{% include carousel.html height="82" unit="%" duration="7" %}
