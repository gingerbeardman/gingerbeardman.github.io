---
layout: post
title: 'YouTube Channel RSS limits'
tags:
- hack
- youtube
- rss
nouns:
comments: https://twitter.com/gingerbeardman/status/1612493181941174272

---

I've been falling behind watching Masahiro Sakurai's game development videos, so decided to subscribe to his YouTube channel using RSS. This is as simple as plugging the channel URL https://youtube.com/@sora_sakurai_en into your RSS feed reader.

BUT only the most recent 15 videos will be listed!

Google's YouTube API allows listing of the most recent 50 videos, but that's easier said than done as you'd have to get an API key, write some code to do this query, and host it somewhere online. Wouldn't it be great if somebody else has already done the hard work and is sharing their solution?

Well, we're in luck!

Thanks to this [helpful StackOverflow comment](https://stackoverflow.com/questions/56430703/how-to-use-youtube-data-api-v3-to-get-more-than-15-videos-in-an-rss-reader-ne#comment99478631_56430703), you can use the following URL to list the most recent 50 videos from Sakurai's channel:
https://scriptbarrel.com/xml.cgi?channel_id=UCv1DvRY5PyHHt3KN9ghunuw&name=%40sora_sakurai_en (or any other channel by substituting the relevant details).
