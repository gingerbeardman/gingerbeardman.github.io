---
layout: post
title: Markdown File Linker for Nova editor
date: '2024-10-08T11:40+01:00'
tags:
- nova
- extension
- jekyll
nouns:
- Panic
- Nova Extensions
- Nova editor
- Nova
- Markdown File Linker
- Markdown
- Jekyll
image: /images/posts/markdown-file-linker.png
comments: https://twitter.com/gingerbeardman/status/1843604784236110243

---

**YAML Tag Picker** allows you to easily select tags for the YAML front matter in your blog posts. It scans your existing posts for tags and presents them in a Choice Palette, making it easy to maintain consistent tagging across your blog.

You can select multiple tags one after another; when you're done choose "Finish Selection" or press `Esc`.

Each tag is inserted on a new line, prefixed with a hyphen and a space:

```
- just
- like
- this
```

## Usage

1. Open your blog project in Nova
2. Place your cursor at the start of the line where you want to insert tags in your front matter
3. Run the `YAML Tag Picker` command from the Command Palette (`Cmd`+`Shift`+`Enter`)
4. Choose the tags you want to use from the presented list
5. The selected tags will be inserted at your cursor position

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