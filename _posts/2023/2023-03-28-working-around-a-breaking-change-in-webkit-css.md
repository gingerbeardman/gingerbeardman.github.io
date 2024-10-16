---
layout: post
title: Working around a breaking change in WebKit CSS
tags:
- webkit
- bug
- css
- hack
nouns:
- WebKit
- Polyglot
- Safari
- Extension
comments: https://twitter.com/gingerbeardman/status/1640754668484657164

---

Safari 16.4 has some breaking changes (fixes?) to CSS, which means [Polyglot](https://github.com/uetchy/Polyglot) the Safari Extension by [Yasuaki Uechi](https://twitter.com/uechz) that I use every day no longer displays its popup. Oh no!

It turns out that some [6-year-old CSS](https://github.com/uetchy/Polyglot/blob/2c3c52e6eb35f0bd1a59a067afc92ff8f876fbc1/PolyglotSafariExtension/ContentScript/content.css#L39) and recent changes in WebKit mean the translation popup disappears immediately after it appears.

But, all is not lost, I created a quick-fix workaround with a user stylesheet! 

[github.com/uetchy/Polyglot/issues/128#issuecomment-1487229870](https://github.com/uetchy/Polyglot/issues/128#issuecomment-1487229870)

{% gist 5baabc9b141e1c395c73af237fdd0e49 %}