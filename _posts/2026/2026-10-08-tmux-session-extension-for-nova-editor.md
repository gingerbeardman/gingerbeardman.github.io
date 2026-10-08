---
layout: post
title: Tmux Session Extension for Nova editor
date: '2026-10-08T15:19+01:00'
tags:
- nova
- extension
- tooling
- workflow
- poweruser
- software
nouns:
- Panic
- Nova Extensions Library
- Nova Extensions
- Nova editor
- Nova API
featured: false
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2108205578845602198
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mxeotb4rtk2y
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/117405801954512277

---

A [Nova](https://nova.app) extension that keeps your terminals running in a [*tmux*](https://github.com/tmux/tmux) session per project, shared between Nova's terminal and *Ghostty*, *iTerm*, *kitty* or *Terminal*.

## Why?

With the this setup, each project gets a session and each Nova terminal tab gets a tmux window. Close a tab or quit Nova and your shells, builds and other processes keep running. Open another tab to return to an unused window, or join the session from your external terminal.

tmux also provides renamable sessions, split panes, windows and searchable scrollback inside Nova's terminal.

## Usage

Invoke via **Extensions > Tmux Session**, or search in the Command Palette:

- **Open in External Terminal** — opens this project's session in your terminal app
- **Copy Join Command** — copies a command to join the session from another terminal
- **Show All Sessions…** — lists every running session, to open, copy, rename or end one
- **Rename Session…** — gives this project's session a new name
- **End Session…** — ends this project's session and everything running in it

## Get it now

You can install it in Nova Extensions Library, or from the web at: [extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.TmuxSession/](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.TmuxSession/)
