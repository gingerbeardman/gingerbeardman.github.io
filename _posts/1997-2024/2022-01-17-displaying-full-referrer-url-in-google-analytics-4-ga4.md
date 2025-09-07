---
layout: post
title: Displaying Full Referrer URL in Google Analytics 4 (GA4)
date: '2022-01-17T12:00+00:00'
modified: '2025-09-07T19:43+01:00'
tags:
- google
- analytics
image: /images/posts/ga4-full-referrer-url.png
comments: https://twitter.com/gingerbeardman/status/1523605729357479937

---

Google are transitioning Analytics users to GA4, which has a different type of reporting. Previously it was very easy to see a list of referrers with their full URL. In GA4 it doesn't seem possible, but I found a reasonable workaround.

To view the full referrer URL in GA4, follow these steps:

1. Navigate to the **Explore** section in your GA4 property.
2. Create a new **Blank** exploration report.
3. In the "Variables" column, click the plus sign (+) next to **Dimensions** and add the **Page referrer** _and_ **Landing page + query string** dimensions.
4. Next, click the plus sign (+) next to **Metrics** and add a metric like **Views** _or_ **Event count**.
5. In the "Settings" column, drag and drop the **Page referrer** and **Landing page + query string** dimensions into the **Rows** section.
6. Drag and drop your chosen metric (e.g., **Views**) into the **Values** section.

This will give you a long table of full referrer URLs along with the number of users that came from there. In my case most are domain names, but a handful are full URLs pointing to a page.

![PNG](/images/posts/ga4-full-referrer-url.png)

> Originally posted [answering my own question at stackoverflow](https://stackoverflow.com/a/70742721/28290).
