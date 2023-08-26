---
layout: post
title: 'Casio CALEID XM-700 Mobile Navigator (1997)'
date: '2023-08-25T22:44+01:00'
tags:
- japanese
- hanafuda
- casio
- pda
- history
- preservation
nouns:
- Casio CALEID XM-700 Mobile Navigator
- DATA IMPRESSION for CALEID
- Game Boy Advance
- WonderSwan 
- Apple Newton
- Palm Pilot
- Palm 
- Sony VAIO
- Wayback Machine
- Yahoo! Japan Auctions
- DATA IMPRESSION
- Data Impression 2
- Data Impression for CALEID
- Casio
- Caleid
- CALEID
- Windows 98
- Windows
comments: https://twitter.com/gingerbeardman/status/1695192750809919969

---

I like to think everybody collects something odd. Me? I collect hanafuda video games: digital implementations of traditional physical Japanese card games. Mostly that means physical copies of games for consoles and computers both new and old, for handhelds like Game Boy Advance, WonderSwan, digital versions for computers, handhelds and smart phones, and sometimes versions for platforms nobody has ever heard of. 

## Down the rabbit hole

At some point last year (shortly before I began writing this blog post!) I found reference to a hanafuda video game created in 1998 for the Casio CALEID XM-700 Mobile Navigator [on a random old, Japanese website](http://webcache.googleusercontent.com/search?q=cache%3Ahp.vector.co.jp%2Fauthors%2FVA003746%2FCALEID3.HTM&ie=UTF-8&oe=UTF-8&hl=en-gb&client=safari). It turns out this device is a long-forgotten handheld computer that was released in 1997, only in Japan. The device is what you might refer to as a PIM or PDA, roughly equivalent to Apple Newton or Palm Pilot, particularly as it featured handwriting recognition. Not what we would consider powerful in this day and age, but good at running database lookups and any undemanding software written specifically for it. The CPU was Intel 8086 compatible, like [other period CASIO handheld personal computers](https://www.youtube.com/watch?v=q3qIS5XvzfQ), and [an SDK was available](https://www.sci.u-toyama.ac.jp/~iwao/caleid.html). Cost of the device was 47800JPY, which was around 240GBP or 400USD at the time.

The game file came with a reference bitmap showing hanafuda scoring, which was just the type of guarantee and encouragement I needed to start hunting.

![PNG](https://cdn.gingerbeardman.com/images/posts/caleid-hanafuda-cards.png#pixel "Scoring reference image, included inside HANA100.LZH")
{:.tofigure}

## Research first

So, after making sure the related web pages were archived to the Wayback Machine, and the downloads backed up, I did a bunch of reading to try to figure out whether or not I would be able to play this game if I bought a device.

It turns out the device arrived around the same time as USB 1.0. So perhaps its development, and most definitely its buyers, existed in a world that predated widespread support for USB. To that end, the device only has a serial connection. And not only that, the serial connection is on a dock that was not always sold with the device. Without the dock there is no way to transfer files to/from the device!

For me to stand a chance at this, I'd need to buy a device with a dock and the software to put files onto the device. After some searching, lots of waiting, and more searching, one came up for auction on Yahoo! Japan Auctions. I bought it.

![PNG](https://cdn.gingerbeardman.com/images/posts/caleid-promo.jpg "Promotional photo of Casio CALEID XM-700 Mobile Navigator")

----

## CALEID GET!

The screen is 320x240 monochrome (1-bit) which exhibits an odd quirk that active pixels cast a shadow because the LCD is clear and the silver backing is some distance away. This is long before the LCD would be fused to the backing. In fact, some units you see for sale have creases in the silver backing, I'm not sure what must have happened to those devices!

The system software is a charming custom OS, featuring a full mobile office suite, and 2MB of flash storage (1.49MB free for user data). Most importantly it allows user-created Add-ins to be loaded onto it, we would call them plugins or apps today. The device even has an expansion port for communications peripherals, enabling it to do email/fax using a cell phone or pay phone as data connection. A salaryman's dream in late-90s Japan!

My goal: sideload the hanafuda game, along with anything else I can lay my hands on, using the proprietary dock, sync software and a Japanese install of Windows 98!

I love this sort of challenge that requires discovery and understanding of old hardware and software, and a little (but not too much) messing around with old versions of Windows.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6vCO28GqnlA?si=PbbotMFu7dJpDUIa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

----

## Installation

> You can [follow this process in a Twitter thread I created last year](https://twitter.com/gingerbeardman/status/1560631734198104065) which contains additional images. I've also created an [imgur gallery](https://imgur.com/a/4Ef6nXP) of photos and screenshots from the installation process.

I thought it would be fun to try to do this on period correct hardware, so I tried to use my old Sony VAIO PCG-Z600RE from 1999, but the battery is coming up to 20 years old and even with mains power it no longer turns on reliably enough for me to do anything. I would have had to install Japanese language support into Windows. So I quickly gave up this folly.

A better approach would be to use modern hardware running Windows in a Virtual machine, and [I already have one set up running Japanese Windows 98](https://archive.org/details/windows-98-se-japanese-vmware). I hit a temporary roadblock whilst installing the DATA IMPRESSION for CALEID sync software: it is date locked to only run between the years 1988 and 2010. And here I am over a decade late! Thankfully a quick date change and we're back in business.

The first run of sync software post-install requests that you run a Comms check. You have to tap the menu and folder buttons alternately seven times to put the device into a special debug mode, a tip cleaned from an addendum leaflet that came in the box. Without that leaflet I probably would have been stuck.

I used a USB to Serial cable to take care of the connection to the dock and it just worked, though I know from first hand experience that is lucky as some cheap adapters require a bit of fiddling to work with ancient Windows versions. Data transfer is slow at 9600 baud, that's less than 1KB per second. I'll try increasing the baud rate later, maybe.

## Syncing

Syncing is done using a custom version of Data Impression 2, renamed Data Impression for CALEID. It has arcane, overly complicated user interface along with a multitude of period and cultural quirks.

After some time spent browsing and translating the menus I found the section of the interface listing Add-ins and imported a bunch that I downloaded earlier. There's some awkwardness to this process which I'll describe later.

Syncing was working, but the add-ins were not syncing across for some reason. My thought that it was probably something obvious was correct. In the DATA IMPRESSION app you need to press the button that doesn't look like other buttons (yellow text) and then enable Add-in syncing! We're almost there, I can feel it.

![PNG](https://cdn.gingerbeardman.com/images/posts/caleid-data-impression.png "Data synchronisation is achieved using Data Impression for CALEID (see <a href='https://imgur.com/a/4Ef6nXP'>imgur gallery</a>)")
{:.tofigure}

## Add-ins

The last little bits are worth bullet pointing, as they require some detailed operation:

1. Launch "DATA IMPRESSION for CALEID"
2. Select 電子手帳 ("Electronic Notebook") from the buttons above the clock on the right (2nd from bottom) and then:
   1. Make the model selection カレイド ("Caleid", default)
   2. Make the type of communication データ送信 ("data transmission", dropdown 2, 3rd list item)
   3. Click the 動作設定 ("operation settings", button 3)
   4. Check the アドイン ("Add-in") checkbox (bottom, alt+D)
   5. Uncheck all other types of data to disable syncing of those
3. Select メモ帳 ("Notepad") from the menu on the right and then:
   1. Select the アドイン ("Add-in") folder
   2. Select メモ帳 ("Notepad") -> アドインデータの読み込み ("Read Add-in Data") from the menu bar (alt+M, R)
   3. Choose an add-in file (*.adi)
   4. Repeat steps 1-3 for multiple add-ins
4. Press the スタート ("Start") button on the dock. Add-In will be forwarded to the CALEID.

**Gotchas:**
- Serial ports in VMs can be a hassle, try both the host PC and guest VM ports
- DATA IMPRESSION will let you know if it can't communicate over the selected serial port
- Cursor needs to be in the Add-Ins folder for the Add-in menu items to be enabled
- Syncing without an Add-in selected will result in a failure message
- If you select an existing add-in rather than the Add-in folder, the existing add-in will be overwritten by the newly imported one(!)
- If you start with the demo data you'll have a bunch of test items in the various apps, see note below

Awkwardness: Add-ins have to be transferred one at a time, but a sync of a single Add-in goes fast enough after disabling syncing of all other types of data (notes, calendar, spreadsheets, etc). 

Note: the first time I setup the device starting with the demo data it must have been syncing 25 years worth of recurring demonstration calendar events. Each sync of a single add-in took multiple minutes. Maybe that's why they didn't want anybody running the sync software so long after the device had been released?

The final, [highest supported baud rate is 38400](https://lucidar.me/en/serialib/most-used-baud-rates-table/) (4800 bytes/sec theoretical speed, 3840 bytes/s actual speed, that's 3.75KB/sec). Game sizes range between 3KB and 32KB, averaging 12KB each. So the slowest part of the process is the GUI busy work to install the Add-ins in DATA IMPRESSION for CALEID, and then syncing them one by one.

----

## Game on!

Here's my Casio CALEID XM-700 Mobile Navigator running 花合わせ (Hana-awase) a hanafuda game made by すーさん (Sū-san) in 1998. Pixels are slightly wider than they are tall so the cards in the game display wider than in the image at the top of the page.

...I wonder how many other people have played this game in the last 25 years?

> In a follow-up post I'll detail the other games that I was able to install on the device.

![JPG](https://cdn.gingerbeardman.com/images/posts/caleid-hanafuda-running.jpg)

![JPG](https://cdn.gingerbeardman.com/images/posts/caleid-hanafuda-running-close-up.jpg)

----

## CASIO Catalog '97-12

![WEBP](https://cdn.gingerbeardman.com/images/posts/caleid-catalog.webp "CALEID page from the CASIO Catalog, December 1997, with thanks to <a href='https://www.casio-calculator.com/Download/Catalogue/Catalogues.html'>casio-calculator.com</a>")
{:.tofigure}

*[PIM]: Personal Information Manager
*[PDA]: Personal Data Assistant

----

## Extras
- [caleid.addins.dim.zip](https://cdn.gingerbeardman.com/files/caleid-addins.dim.zip) (294KB) a profile for DATA IMPRESSION for CALEID that has all the Add-ins I've found so far pre-installed and ready to sync
- [caleid.portmon-serial-addin.txt](https://cdn.gingerbeardman.com/files/caleid.portmon-serial-addin.txt)
  (44KB) a [portmon](https://learn.microsoft.com/en-us/sysinternals/downloads/portmon) serial log taken whilst syncing a single Add-in (the sample card game that comes with DATA IMPRESSION for CALEID)
