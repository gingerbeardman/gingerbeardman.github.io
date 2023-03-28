---
layout: post
title: Working around a breaking change in WebKit CSS
tags:
- webkit
- bug
nouns:
- WebKit
- Polyglot
- Safari
- Extension
comments: https://twitter.com/gingerbeardman/status/1640754668484657164

---

Safari 16.4 has some breaking changes (fixes?) to CSS, which means [Polyglot](https://github.com/uetchy/Polyglot) the Safari Extension by [Yasuaki Uechi](https://twitter.com/uechz) that I use every day no longer displays its popup. Oh no!

But, all is not lost, I created a quick-fix workaround with a user stylesheets! 

[https://github.com/uetchy/Polyglot/issues/128#issuecomment-1487229870](https://github.com/uetchy/Polyglot/issues/128#issuecomment-1487229870)

<script src="https://gist.github.com/gingerbeardman/5baabc9b141e1c395c73af237fdd0e49.js"></script>