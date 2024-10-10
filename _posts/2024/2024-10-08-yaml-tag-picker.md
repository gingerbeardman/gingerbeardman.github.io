---
layout: post
title: YAML Tag Picker for Nova editor
date: '2024-10-08T17:20+01:00'
tags:
- nova
- extension
- jekyll
- yaml
nouns:
- Panic
- Nova Extensions
- Nova editor
- Nova
- YAML Tag Picker
- Jekyll
- Choice Palette
image: /images/posts/yaml-tag-picker.png
comments: https://twitter.com/gingerbeardman/status/1843688193679663193

---

YAML Tag Picker is an extension for the [Nova editor](https://nova.app) that allows you to easily select tags for the front matter in your blog posts. It scans your existing posts for tags and presents them in a Choice Palette, making it easy to maintain consistent tagging across your blog.

You can select multiple tags one after another; when you're done choose "Finish Selection" or pressing the `Esc` key.

Each tag is inserted on a new line, prefixed with a hyphen and a space:

```
- just
- like
- this
```

## Usage

1. Open your blog project in Nova
2. Place your cursor at the start of the line where you want to insert tags in your front matter
3. Run the `YAML Tag Picker` command from the Command Palette (I map it to keyboard `Cmd`+`Shift`+`Enter`)
4. Choose the tags you want to use from the presented list (repeat)
5. When you're done choose "Finish Selection" or press `Esc`
6. The selected tags will be inserted at your cursor position

![IMG](/images/posts/yaml-tag-picker.png "Searching existing tags for the word “play”")
{:.tofigure}

### Configuration

To configure global preferences, open **Extensions → Extension Library...** then select YAML Tag Picker's **Settings** tab.

You can customise the following:

- Posts Folder Name
	- default: `_posts`
- Tag Prefix Character
	- default: `-`
- Skip Tags Containing
	- default: `'`

## Requirements

- This extension requires access to your filesystem to read your blog posts
- Your blog posts should be in the `_posts` directory (default for Jekyll static site generator)
- Tags should be defined in the front matter of your posts using the YAML format
- It can cope with tags specified as an array or as one per-line

----

## Download

Grab it from the [Nova Extensions website](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.YAMLTagPicker/), or from the Extension Library inside the app.