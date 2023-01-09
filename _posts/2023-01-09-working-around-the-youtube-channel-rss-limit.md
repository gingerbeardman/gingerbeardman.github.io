---
layout: post
title: 'Working around the YouTube Channel RSS limit'
tags:
- hack
- youtube
- rss
nouns:
comments: https://twitter.com/gingerbeardman/status/1612493181941174272

---

I've been falling behind watching Masahiro Sakurai's game development videos, so decided to subscribe to his YouTube channel using RSS. This is as simple as plugging the channel URL https://youtube.com/@sora_sakurai_en into your RSS feed reader.

*BUT only the most recent 15 videos will be listed!*

Google's YouTube API allows listing of the most recent 50 videos, but that's easier said than done as you'd have to get an API key, write some code to do this query, and host it somewhere online. Wouldn't it be great if somebody else has already done the hard work and is sharing their solution?

*Well, we're in luck!*

Thanks to this [helpful StackOverflow comment](https://stackoverflow.com/questions/56430703/how-to-use-youtube-data-api-v3-to-get-more-than-15-videos-in-an-rss-reader-ne#comment99478631_56430703), you can use the following URL to list the most recent 50 videos from Sakurai's channel:

> https://scriptbarrel.com/xml.cgi?channel_id=UCv1DvRY5PyHHt3KN9ghunuw&name=%40sora_sakurai_en

This will work for any other YouTube channel by simply substituting the relevant `channel_id` and `name` details.

## If you need more than 50

You can [use Authory](https://authory.com/blog/create-a-youtube-rss-feed-with-vastly-increased-limits/) (free 30 day trial) to create a feed that will return up to 1000 most recent videos.

## Important: getting back on track

After you've retrieved the historic videos, you should change the RSS feed link in your reader back to the YouTube channel link. This will let you keep the historic entries that you need to catch up on and retrieve any future videos from the standard YouTube feed, so you're not relying on a third party service.