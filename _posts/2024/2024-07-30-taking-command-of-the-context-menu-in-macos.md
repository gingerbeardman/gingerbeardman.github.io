---
layout: post
title: "Taking command of the Context Menu in macOS"
date: '2024-07-30T17:14+01:00'
tags:
- macos
- hack
- poweruser
- software
- finder
- shell
nouns:
- ContextMenu
- Actions
- Automator
image: /images/posts/take-command-context-menu-finder.png
featured: false
pinned: false
comments: https://twitter.com/gingerbeardman/status/1818320135041769849
style: |
  img[src$='#half'] {
    height: 616px;
    margin: 0 auto;
  }

---

Yesterday on Twitter the inimitable Morten Just posted a preview of a tool he's created that wrap ffmpeg to allow movies, such screen recordings but pretty much anything, to be re-encoded to a smaller filesize.

I responded with a trick I use to do the same on right-click using a macOS app called ContextMenu, and others said it was possible to do it using Automator (with some caveats). In this blog post I'll compare the two.

But first... let's talk about how we will make this work.

----

# Processing files through shell scripts

We'll be making use of command line tools to do the heavy lifting, but don't worry I'll show that this can be as simple as a single-line command to process a single file, or a shell scripts of a few lines to process multiple files.

### Single files

The one-line command to convert a video or audio file can be as simple as the following:

```sh
/opt/homebrew/bin/ffmpeg -i "$@" "${@%.*}.mp4"
```

There are some assumptions here:
- `ffmpeg` has been installed using `brew`
- my Mac is Apple silicon, so `brew` installs commands to `/opt/homebrew/bin/`
- (older Intel Macs will have them installed to `/usr/local/bin/`)
- the script is called with parameters passed by `argv` so the file is `$@`
- the new file will have the same name as the original, but with a new .mp4 file extension
- it only works on single files (read on)

You can take the exact same approach with any destination format as it is decided by the file extension. Cool. You could convert any of ffmpeg's supported file types to any other, such as WAV, OGG, MKV, etc.

And as we'll see later we can take this simple command and change it to use other command line tools to compress GIFs, with or without upscaling, and many other timesaving tasks. Powerful stuff!

### Multiple files

To extend this approach for multiple files you can use the following for loop:

```sh
for f in "$@"
do
    /opt/homebrew/bin/ffmpeg -i "$f" "${f%.*}.mp4"
done
```

### Multiple files in parallel

And to process those multiple files in parallel (be careful not to overwhelm your computer!) we can background each execution using the `&` symbol.

```sh
for f in "$@"
do
    /opt/homebrew/bin/ffmpeg -i "$f" "${f%.*}.mp4" &
done
```

----

## Automator

Setup is relatively straightforward:

1. Create a new *Quick Action* workflow
1. Workflow receives current: *movie files*
1. in: *Finder*
1. Add a new action of type action *Run Shell Script* (search for it in the sidebar)
1. Pass input: *as arguments* (this will give us a template command)
1. *Replace the echo line with your command*
1. *Save*, name it "Duplicate as MP4"

![PNG](https://cdn.gingerbeardman.com/images/posts/take-command-automator-setup.png)

The menu item is now available on the right click menu, inside the *Quick Actions* submenu. After repeated use I find this submenu too annoying, but you may fare better.

![PNG](https://cdn.gingerbeardman.com/images/posts/take-command-automator-finder.png#half "Automator Quick Action in Finder Context Menu")
{:.tofigure}

So, pretty easy! But, there are some caveats or limitations that may, or may not, annoy you. Perhaps we don't want the menu item to appear for such a broad range of files (all "movie files"), or maybe we want it to appear for multiple types of files (both "audio files" and "movie files"). Sadly this is not so easy with Automator.

----

## ContextMenu

Many years ago I found [ContextMenu](https://apps.apple.com/us/app/context-menu/id1236813619?mt=12) ($4.99) which solves all of the issues I have with the Automator approach. There's also a free version, [ContextMenu Lite](https://apps.apple.com/gb/app/context-menu-lite/id1261373706?mt=12), that supports up to 3 actions to give you a taste of the good stuff.

- Submenu is optional
- Apply to multiple types (files or directories; can be as granular as file extension)
- Show output (sometimes you want to see the results of the command)
- Confirmation before running (if it's a potentially dangerous operation)

![PNG](https://cdn.gingerbeardman.com/images/posts/take-command-context-menu-setup.png#half)

The menu item displays in Finder as follows:

![PNG](https://cdn.gingerbeardman.com/images/posts/take-command-context-menu-finder.png#half "ContextMenu Action in Finder Context Menu")
{:.tofigure}

----

## Compressing a GIF

We can use the [gifsicle](https://www.lcdf.org/gifsicle/) command line tool to optimise (compress) an Animated GIF. The a parameters I use here are explained in the [gifsicle man page](https://www.lcdf.org/gifsicle/man.html), and I arrived at them with [years of experimentation](/2016/06/16/post-processing-animated-gifs/).

```sh
/opt/homebrew/bin/gifsicle -O1 -Okeep-empty --careful "$@" > "${@%.gif}.o.gif"
```

We can also do the same thing whilst scaling it up by a factor of 2:

```sh
/opt/homebrew/bin/gifsicle -O1 -Okeep-empty --careful --scale 2 "$@" > "${@%.gif}.o.gif"
```

----

## Repository of ContextMenu Actions

Here's my repo of shared actions. Inside each `.cmaction` file is a `main.sh` file which contains the command that you can use in Automator if you'd like.

- [https://github.com/gingerbeardman/contextmenu-actions](https://github.com/gingerbeardman/contextmenu-actions)

These include many useful commands such as:

- Convert BIN+CUE to ISO
- Change sample rate of audio
- Convert image to 1-bit
- Convert image format
- Create Clean ZIP
- Duplicate audio as alternative format
- Duplicate image as alternative format
- Duplicate movie as alternative format
- File information
- Generate images for web
- Make script executable
- Move file (includes helper app)
- New file with clipboard
- Open file with specific apps
- Optimize GIF
- Set GIF to loop infinitely
- Show GIF info
- Playdate Colorize IMG
- Replace Existing App (warning)
- Set as MacJapanese encoding
- Show hashes (includes helper app)
- Stub out file (warning)
- Touch file
