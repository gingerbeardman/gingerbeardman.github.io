# Get Info, a blog by Matt Sephton

See https://github.com/ahmadajmi/type for details of the original version of this theme.

The below text has been edited to reflect the changes I have made to the theme.

- [Configurations](#configurations)
- [Deployment](#deployment)
- [Posts](#posts)
- [Images](#images)
- [Pages](#pages)
- [Navigation](#navigation)
- [Disqus Comments](#disqus-comments)
- [Social Media Links](#social-media-links)
- [Update favicon](#update-favicon)
- [Extra Includes](#extra-includes)

## Configurations

Type theme comes with different customizations in the `_config.yml` file.

## Deployment

To run the theme locally, navigate to the theme directory and run `bundle install` to install the dependencies, then run `jekyll serve` to start the Jekyll server.

I use [Netlify](https://www.netlify.com) to deploy the site as it enables me to use Jekyll plugins without the limitations of GitHub Pages. 

I would recommend checking the [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

## Posts

To create a new post, you can create a new markdown file inside the `_posts` directory by following the [recommended file structure](https://jekyllrb.com/docs/posts/#creating-post-files).

The following is a post file with different configurations you can add as an example:

```sh
---
layout: post
date: '2023-12-16T09:42+00:00'
last_modified_at: '2024-06-08T00:37+01:00'
title: Welcome to Jekyll!
tags: [frontpage, jekyll, blog]
nouns: [list, keywords, for, emphasise]
image: '/images/posts/welcome.jpg'
featured: true
pinned: true
comments: https://twitter.com/gingerbeardman/status/1383034107672862722
carousel: carousel-id
excerpt_separator: <!--more-->
style: |
  #custom .lookandfeel {
    color: silver;
  }

---
```

You can set the `title`, and the following optional fields `tags`, `nouns`, post `image`, `featured`, `pinned`, `comments` link, `carousel` id, and `excerpt-separator`.

- To create a draft post, create the post file under the **_drafts** directory, and you can find more information at [Working with Drafts](http://jekyllrb.com/docs/drafts/).

- For tags, try to not add space between two words, for example, `Ruby on Rails`, could be something like (`ruby-on-rails`, `Ruby_on_Rails`, or `Ruby-on-Rails`).

- Nouns are similar to tags but list keywords that should be emphasised in the rendered post. I use these to emphasise (in italics) certain names, places, brands or products mentioned in the content. Doing it this way reduces the possibility of human error.

- To keep things more organized, add post images to **/images/posts** directory, and add page images to **/images/pages** directory.

- The `featured` key is to mark the post as a featured post, this will add a heart character (♥) to the postcard.

- The `pinned` key is to pin the post to the top of the first page, this will add a pin character () to the postcard.

- Recent posts (more recent than set number of seconds, currently disabled) are marked with an exclamation character (!) on the postcard.

- I prefer to encourage comments in a related twitter thread, so each post has an optional comments URL that can be defined.

- Carousel is taken from https://jekyllcodex.org/without-plugin/slider/ so please see that page for documentation. The only change I have made is allowing the id of the carousel to be specified in the post front matter, so that multiple carousels can be defined in `carousel.yml`.

- Excerpt display is currently disabled on postcards, but an excerpt_separator can be defined.

- Posts can be marked as `published: private`, so they can be seen by anybody with the URL but are excluded from listings, RSS feed. Also use `sitemap: false` to hide from sitemap.

## Images

- I provide specific styling for images taken from the Playdate console. They're shown with a bezel at chunky pixel @2x size and can be inserted as follows, noting the trailing hash
  `![GIF](/images/posts/daily-driver-animation.gif#playdate)`

- Static images can be inserted normally and are displayed without any styling
  `![JPG](/images/posts/daily-driver-still.png)`

- Captioned images can be inserted as follows:
  `![JPG](/images/posts/daily-driver-still.png "this is an image")
  {:.tofigure}`
  
- Local image paths are converted to use a CDN server by a custom plugin

- Carousels are inserted as below, but will only display if there is a `carousel-id` in the post front matter
  `{% include carousel.html height="82" unit="%" duration="7" %}`

## Pages

To create a new page, just create a new markdown file inside the `_pages` directory.

The following is the `about.md` file that you can find as an example included in the theme with the configurations you can set.

```sh
---
layout: page
title: About
image: '/images/pages/about.jpeg'
---
```

Things you can change are: `title` and `image` path.

## Disqus Comments

Open `_includes/disqus.html` file, and change the `aspirethemes-demos` value on line `12` with your [Disqus account shortname](https://help.disqus.com/customer/portal/articles/466208).

```js
s.src = '//aspirethemes-demo.disqus.com/embed.js';
```

So, if your Disqus shortname is `exampleone`, the final code above should be

```js
s.src = '//exampleone.disqus.com/embed.js';
```

That's all you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First, make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide)

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22) if you still have issues.

## Social Media Links

Removed in this fork.

## Update favicon

You can find the current favicon (favicon.ico) inside the theme root directory, just replace it with your new favicon.

## Extra Includes

- `read-time.html` to display reading time of non-html content
- `tag-cloud.html` to display a tag cloud with proportional sizing of tags (count per tags is present, but disabled by default)
- `analytics.html` to include Google Analytics. Requires `google_analytics` to be defined in `_config.yml` and `JEKYLL_ENV=production`
- error 404 page suggestions and search page both powered by plain JS and the sitemap file

EOF
