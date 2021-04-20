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

Type theme comes with different customizations in the `_config.yml` file:

```sh
title:       ''
email:       ''
description: ''
author:      ''
baseurl:     '' # The subpath of your site, e.g. /blog
url:         '' # The base hostname & protocol for your site
homepage:    '' # A different site that is related to your blog
twitter:     ''
github:      ''
instagram:   ''
facebook:    ''

markdown:  kramdown
permalink: pretty
paginate:  60

sass:
  style: compressed

gems:
  - jekyll-paginate
  - jekyll/tagging

include:
  - _pages

exclude:
  - vendor
  - Gemfile
  - Gemfile.lock

# Tags
tag_page_dir:         tag
tag_page_layout:      tag_page
tag_permalink_style:  pretty

# Pages path
defaults:
  - scope:
      path: '_pages'
    values:
      permalink: /:basename:output_ext
```

## Deployment

To run the theme locally, navigate to the theme directory and run `bundle install` to install the dependencies, then run `jekyll serve` to start the Jekyll server.

I would recommend checking the [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

## Posts

To create a new post, you can create a new markdown file inside the `_posts` directory by following the [recommended file structure](https://jekyllrb.com/docs/posts/#creating-post-files).

The following is a post file with different configurations you can add as an example:

```sh
---
layout: post
title: Welcome to Jekyll!
tags: [frontpage, jekyll, blog]
nouns: [list, keywords, for, emphasise]
image: '/images/posts/welcome.jpg'
featured: true
comments: https://twitter.com/gingerbeardman/status/1380424305662656517
carousel: carousel-id
excerpt_separator: <!--more-->
---
```

You can set the `title`, and the following optional fields `tags`, `nouns`, post `image`, `featured`, `comments` link, `carousel` id, and `excerpt-separator`.

- To create a draft post, create the post file under the **_drafts** directory, and you can find more information at [Working with Drafts](http://jekyllrb.com/docs/drafts/).

- For tags, try to not add space between two words, for example, `Ruby on Rails`, could be something like (`ruby-on-rails`, `Ruby_on_Rails`, or `Ruby-on-Rails`).

- Nouns are similar to tags but list keywords that should be emphasised in the rendered post. I use these to emphasise, in italics, certain names, places, brands or products mentioned in the content. Doing it this way reduces the possibility of human error.

- To keep things more organized, add post images to **/images/posts** directory, and add page images to **/images/pages** directory.

- The `featured` key is to mark the post as a featured post, this will add a heart icon (♥) to the postcard.

- I prefer to encourage comments in a related twitter thread, so each post has an optional comments URL that can be defined.

- Carousel is taken from https://jekyllcodex.org/without-plugin/slider/ so please see that page for documentation. The only change I have made is allowing the id of the carousel to be specified in the post front matter, so that multple carousels can be defined in `carousel.yml`.

- Excerpt display is currently disabled on postcards, but an excerpt_separator can be defined. eg. <!--more-->

## Images

- I provide specific styling for images taken from the Playdate console. They're shown with a bezel at chunky pixel @2x size and can be inserted as follows, noting the trailing hash
  `![GIF](/images/posts/daily-driver-animation.gif#playdate)`

- Static images can be inserted normally and are displayed without any styling
  `![JPG](/images/posts/daily-driver-still.png)`

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


## Navigation

I have removed the top navigation.

My plan is to include all the links to the pages you have created in the footer.

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

EOF
