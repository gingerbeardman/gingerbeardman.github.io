---
layout: post
title: "Remove Comments Extension for Nova editor"
date: '2025-12-08T15:00+00:00'
tags:
- nova
- extension
- hack
- tooling
- workflow
- poweruser
- software
nouns:
- Panic
- Nova Extensions
- Nova editor
- Nova
- Remove Comments
- JavaScript
- Python
- HTML
featured: false
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/

---

I've released a new extension for the Nova editor.

It's called *Remove Comments* and it ...removes comments from the current line, or selected lines, in your code. That's it! 

Oh, I've tried to support as many comment/syntax formats as I can think of. Sadly it's not possible to get the current comment formatting from the Nova API, so I had to roll my own logic and heuristics.

[extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.remove-comments/](https://extensions.panic.com/extensions/com.gingerbeardman/com.gingerbeardman.remove-comments/)

----

## Examples

**JavaScript (C-style comments):**
```javascript
// This comment will be removed
const x = 10; // This trailing comment will be removed
/* This block comment will be removed */
```

After running Remove Comments:
```javascript

const x = 10;

```

**Python (hash-style comments):**
```python
# This comment will be removed
value = 42  # This trailing comment will be removed
```

After running Remove Comments:
```python

value = 42
```

**HTML:**
```html
<!-- This comment will be removed -->
<div>Content</div> <!-- This trailing comment will be removed -->
```

After running Remove Comments:
```html

<div>Content</div>
```
