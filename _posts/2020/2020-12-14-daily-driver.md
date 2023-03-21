---
layout: post
title: 'デイリードライバー'
tags: [dailydriver, playdate, graphics, japanese, logo]
nouns: [Playdate, SDK, 60fps, Daily Driver, Playdate, Season]
---

The last couple of months have been tough going for a couple of reasons.

Firstly, a new version of the Playdate SDK broke my game in a couple of important ways: my method of targeting 60fps stopped working, and more seriously the controls stopped working. The workaround for both of these issues was long and drawn out, but here's a quick summary:

Until this point I was waiting for the next frame update using the SDK `wait()` function: one line of code that waits for a required amount of time. A change in how this works meant I was stuck. My workaround was do it in a more naïve way - just constantly checking the system timestamp to see if the allowed time for the current frame has passed. Keep it simple, I guess.

The overhead of idling the CPU — the time it takes for it to wind down, do the wait, and then wind back up — is actually quite substantial when it takes a few milliseconds and you only have sixteen of them for each update!

The end result is that the game is now running... better than ever. Even after these issues were resolved at a higher level by the Playdate SDK team, I have kept using my workarounds as the game runs faster. So, silver linings and all that!

Secondly, an important issue that remains unresolved is exactly how — and when — Daily Driver will be released. I'm hopeful that will be as part of a Playdate Season, where games are delivered to the device on a schedule and you don't know what game you'll be playing until you see the light flash and you pick up and wake up your device. That's the magic I want my players to have a piece of. That might turn out to be later rather than sooner, so we'll have to be patient.

![PNG](/images/posts/daily-driver-katakana.png#playdate)

Anyway, other news: I've been trying to decide how to render the name of the game in Japanese. The English title uses _**Futura Bold Oblique**_ which is a style that does not translate directly into non-Roman typefaces. I had found some bold Japanese fonts, with a little bit of character, but they seemed too cute and not geometric enough. After much investigation and many mockups I opted to draw the necessary katakana characters by hand, on a grid, and it's turned out rather well. I'd love to expand this into a full typeface, but that's a project for another time.

Doing this sort of graphics work, or car design/rendering, are my goto procrastination tasks when I don't have enough mojo to dive into the code and tackle the remaining work. So I'm sort of treading water on the final push of work needed to get the game over the line.