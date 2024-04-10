---
layout: post
title: "Remote monitoring a web server job queue"
date: '2024-04-10T20:04+01:00'
tags:
- hack
- server
- automation
nouns:
- Huginn
- Uptime Robot
- Scenario
- Website Agent
- Ping URL
- Status Badge URL
featured: false
pinned: false
comments: https://twitter.com/gingerbeardman/status/1778139331804160262
---

I use some software called [*Huginn*](https://github.com/huginn/huginn) to do various automated web searching and scraping. One use case is [checking the status of all the institutions where the Great Wave is currently on view](/2023/04/10/where-can-i-see-hokusai-great-wave-today/), or not. I also have it do automatic auction searches for various items I'm looking for, that would otherwise take up a bunch of my time. And much more.

## Huginn, we have a problem

Huginn is installed on one of my web servers and does its thing on hourly, every day of the week without fail. Well, that's not quite true. Sometimes, something happens outside of its control and the job queue gets jammed. It should be able to cope with this event, but for whatever reason it doesn't. There's no easy way to tell when this has happened, and the way I usually notice is by my RSS feed appearing less busy than usual. So, the most recent time this happened I promised myself I'd find a solution to monitoring the job queue remotely.

## Help from the community

Another Huginn user [mentioned](https://github.com/huginn/huginn/issues/3368#issuecomment-2045510388) that I could send a regular request to [healthchecks.io](https://www.healthchecks.io), which would raise a notification if the requests stopped coming in (a method known as [the Dead man's switch](https://en.wikipedia.org/wiki/Dead_man%27s_switch)) which is exactly what would happen when the job queue is jammed. This was a good idea! Whilst I could be notfications by email or various push notification services, I'd prefer to get my notifications the same way as my server notifications - through [uptimerobot.com](https://www.uptimerobot.com) - so I added that to the process.

Here is my final recipe:

1. [healthchecks.io](https://healthchecks.io/) to get a Ping URL
1. create a new Huginn Scenario with a Website Agent to request the above Ping URL every hour
1. [healthchecks.io](https://healthchecks.io/) to get a Status Badge URL (JSON format)
1. [uptimerobot.com](uptimerobot.com) Keyword monitor watching the contents of the Status Badge URL (check for keyword "up", and start incident when keyword does not exist)

And that's it! Next time the job queue jams, the Uptime Robot app will send me a push notification. I know it works because I tested it—a very important step!

## Future features?

Maybe this setup will help me spot a pattern in the queue jams? Or perhaps I can take this further and have the Huginn restart when it gets jammed? As with all these sorts of things, I take it step by step and make one change at a time. Let's see how it goes.