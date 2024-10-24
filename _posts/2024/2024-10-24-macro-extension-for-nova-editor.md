---
layout: post
title: Macro extension for Nova editor
date: '2024-10-24T15:02+01:00'
tags:
- nova
- extension
- macro
nouns:
- Panic
- Nova Extensions
- Nova editor
- Nova API
- TextMate
comments: https://twitter.com/gingerbeardman/status/
style: |
  img {
    width: 50%;
  }

---

After creating [a bunch of smaller Nova Extensions quite quickly](/2024/10/17/extensions-for-nova-editor/) I wondered how far I could push things, just as a personal challenge. I had the idea of implementing a Macro text recording and playback system. There was something similar in TextMate editor, and whilst the Nova API doesn't currently allow as sophisticated a system I thought it was something still worth exploring.

It took a few aborted attempts to land on a good mechanism of recording and playing back "actions", which currently encompass: 

- insertions
- deletions
- cursor position changes
- selection changes
- selection replacements

I encode these changes with some simple JSON markup. Insertions are represented as text, and replacements as pairs of text, whilst deletions, cursor position changes, and selection changes are represented as numbers where positive means "to the right" and negative means "to the left". It's a simple system but should prove to be expandable if the Nova API is expanded to include extra capabilities, such as hooking into the *Find*, *Files* sidebar, or the *Command Palette*.

Macro data can end up quite large, as we're recording single character or position changes, so I added the ability to compress a macro by coalescing actions of the same type into one. A sort of naïve huffman encoding scheme. This makes a huge difference to both size and playback speed. 

You can download the extension at: [extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.Macro/](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.Macro/)

----

## Recording

Recording is done on-demand, only when you want it. A notification will signal recording has begun. When done, you select the Stop button in the notification and the macro will be automatically saved to the sidebar.

You can also start the recording using the + sidebar icon, or a command via the menu or command palette, but recording is always stopped through the notification.

After recording a macro a number of options become available via the context menu.

![IMG](/images/posts/nova-macro-extension-record.png "Macro recording notification")
{:.tofigure}

----

## Example Macro

Let us type:

- `Nova!<move left 1><select -3><replace "ova" → "O">VA<move left 3><delete 3>ova`

The end result of which is:

- `Nova!`

If we were to record this, the results would be...

Raw macro (17 actions):
```json
{"name":"Macro 1","actions":[{"type":"INS","text":"N"},{"type":"INS","text":"o"},{"type":"INS","text":"v"},{"type":"INS","text":"a"},{"type":"INS","text":"!"},{"type":"POS","direction":"←","count":1},{"type":"SEL","count":-1},{"type":"SEL","count":-2},{"type":"SEL","count":-3},{"type":"REP","old":"ova","new":"O"},{"type":"INS","text":"V"},{"type":"INS","text":"A"},{"type":"POS","direction":"←","count":1},{"type":"POS","direction":"←","count":1},{"type":"POS","direction":"←","count":1},{"type":"DEL","count":1},{"type":"DEL","count":1},{"type":"DEL","count":1},{"type":"INS","text":"o"},{"type":"INS","text":"v"},{"type":"INS","text":"a"}],"isExpanded":false}
```

Compressed macro (6 actions):
```json
[{"type":"INS","text":"Nova!"},{"type":"POS","direction":"←","count":1},{"type":"SEL","count":-3},{"type":"REP","old":"ova","new":"O"},{"type":"INS","text":"VA"},{"type":"POS","direction":"←","count":3},{"type":"DEL","count":3},{"type":"INS","text":"ova"}]
```

Compression also helps with readability though I added a function to copy a human-readable version of the macro,which is how the [text at the start of this example](#example-macro) was generated.

![IMG](/images/posts/nova-macro-extension-anim.gif "Playback of the above macro")
{:.tofigure}

----

## Sidebar

Recorded macros live in a bespoke sidebar, and can be expanded or collapsed on demand. We can see each action in the macro and see exactly how the compressed version differs. We can use the context menu to manipulate macros.

![IMG](/images/posts/nova-macro-extension-sidebar.png "Macro sidebar with raw and compressed versions, expanded to show all actions")
{:.tofigure}

----

### Context Menu

After a macro is recorded you can manipulate it using the context menu of items in the Macro sidebar:

- Replay
- Compress
- Duplicate
- Rename
- Copy (Compressed)
- Copy (Raw)
- Copy (Readable)
- Delete

----

## Configuration

Recording selections adds extra weight and slowness to a macro, so whilst the extension defaults to recording text selection changes I added the option to switch it off. Plus, if you're only ever concerned with the smallest macros you can enable automatic compression of every macro which happens as the macro is saved after recording.

Playback is very quick but in some situations such as playing back for a screen recording you might want the text to appear more slowly, so I added a playback speed option.

Note: if you want to see the smoothest character-by-character playback, you should make sure both compression and record selection changes are switched off.

----

## Improvements

There are still some improvements I'd like to make in the future, to be able to more easily see the cursor during playback, and to highlight the current action in the sidebar so you can keep track of progress. The [source code is available on GitHub](https://github.com/gingerbeardman/Macro) and PRs are more than welcome!