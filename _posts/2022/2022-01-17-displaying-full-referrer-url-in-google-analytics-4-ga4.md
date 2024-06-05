---
layout: post
title: Displaying Full Referrer URL in Google Analytics 4 (GA4)
tags:
- google
- analytics
image: /images/posts/ga4-full-referrer-url.png
comments: https://twitter.com/gingerbeardman/status/1523605729357479937

---

Google are transitioning Analytics users to GA4, which has a different type of reporting. Previously it was very easy to see a list of referrers with their full URL. In GA4 it doesn't seem possible, but I found a reasonable workaround.

**Use the *Explore* tab to create a new *Exploration* with the following settings:**

Variables
- Dimensions: Page referrer
- Metrics: Active users

Tab Settings
- rows: Page referrer
- show rows: 500 (optional)
- values: Active users (or New users)
- cell type: Heat map (optional)
- filters: (exclude any URL patterns here)

Then minimise the Variables and Settings panels.

----

This will give you a long table of full referrer URLs along with the number of users that came from there. In my case most are domain names, but a handful are full URLs pointing to a page.

![PNG](https://cdn.gingerbeardman.com/images/posts/ga4-full-referrer-url.png)

It remains to be seen if this can be done more easily or more comprehensively.

> Originally posted [answering my own question at stackoverflow](https://stackoverflow.com/a/70742721/28290).