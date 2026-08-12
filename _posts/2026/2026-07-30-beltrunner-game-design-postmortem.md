---
layout: post
title: "BELTRUNNER: game design postmortem"
date: '2026-07-30T23:34+01:00'
modified: '2026-08-12T02:28+01:00'
tags:
- gamedev
- design
- videogame
- arcade
- postmortem
- gmtkjam
nouns:
- Beltrunner
- Asteroids
- Bomb Jack
- Pang
- Pac-Man
- Donkey Kong
- Flicky
- Nintendo
- Arcade
- Phoenix
- Wii
- Dreamcast
image: /images/posts/jinksgg-beltrunner.png
featured: true
pinned: false
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/2082982312304627857
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3mrvo54opts2q
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/117011688514871946

---

> This blog post assumes you have played BELTRUNNER, the game whose design it discusses in detail, or are familiar enough JC4880P433 360 400mhz revisionwith video game design and history that you don't need to play it.

Last week I [shared a look at an arcade-faithful version of Asteroids](/2026/07/21/im-working-a-new-way-to-make-games/) to demonstrate the totally new way of making games that I've been working on. It's called [Jinks](/2026/07/30/hi-jinks/) and it's a lightweight game engine, interactive development environment, a language of sorts, and more.

BELTRUNNER is an original game built from the same bones as Asteroids, and was my entry into #GMTKjam 2026. The whole thing is roughly 1,300 lines and, importantly, it is a complete game that you can finish. It uses the same system and succinct language as my Asteroids recreation, though I'm going to remain a little coy about the machinery for now because it is still a work in progress and changing every day. I need it to settle down enough that I can describe what it *is*, rather than what it used to be.

For now I want to talk about how the game developed: which ideas made it in, which ones didn't, and what Jinks had to learn along the way. Many of the design methods are adapted from lessons learned playing old games, which is how I like to approach game design.

[![BELTRUNNER](/images/posts/jinksgg-beltrunner.png "Play BELTRUNNER in your browser at my page on itch.io")](https://gingerbeardman.itch.io/beltrunner)
{:.tofigure}

<iframe height="167" frameborder="0" src="https://itch.io/embed/4820811" width="552" style="max-width:100%;display:block;margin:1.5rem auto"><a href="https://gingerbeardman.itch.io/beltrunner">BELTRUNNER by gingerbeardman</a></iframe>

----

## Explorations

The first prototype was nothing like Asteroids. I built an orbital shooter, perhaps more like Space Duel, with numbered targets on fixed shells around a central sun. As with everything made in Jinks it was quick to get up and running, but playing it just wasn't fun. I had to decide whether it showed enough promise to keep going, and I don't think it did. I always say that no work is truly wasted; it’s simply put aside until it usefulness or suitability becomes apparent.

The fixed orbits made the targets into sitting ducks. What I missed from Asteroids was the unpredictable drift of the rocks and the dodging that comes with it. I discarded the orbital structure but kept the numbered targets, the highlight, and the idea of a chain. It also got me thinking about the song "Countdown" by Phoenix (*Bankrupt!*, 2013).

So I moved back towards Asteroids and turned the numbered pickups into something more like the rings in Pilotwings or the gates in Wave Race 64. I also borrowed a trick from Donkey Kong '94: initially pretend to be an old, familiar game, then reveal that something different and new has been hiding behind it.

----

## Masquerade

Wave 1 is pure Asteroids: one large rock, classic thrust-and-drift, classic splits, classic death-and-respawn. The only clue that things are not quite as they seem is a race clock that appears when you make the first hit, and no lives to be lost on your first collision. Clear the field and, instead of another wave of rocks, a black hole tears open at the centre of the screen. Gravity pulls you in, and you can do a little dash to help it along.

From wave 2 the real game reveals itself. Numbered gates are scattered through the same drifting rock field and must be taken in **descending** order—5… 4… 3… 2… 1…—so the race chants a countdown as you fly it. Take the last gate and the black hole opens again, then you warp to the next wave.

Starting this way lets the player learn the controls before the race asks them to do something more involved. If you already know Asteroids you can fly the first wave on muscle memory. If you don't, you still get some time with the central game mechanic.

Two countdowns converge on zero:

1. **The gate count**, which you drive.
2. **The race clock**, which drives you—every gate feeds it and every collision depletes it.

There are no lives, so time becomes the only resource. This got rid of a lot of classic arcade bookkeeping and left me with one thing that can be read at a glance. It worked well and stuck through every play-test.

----

## Waves with stepped difficulty (the Nintendo way)

The game has sixteen waves arranged as four acts of four. I didn't want an endless difficulty ramp that quietly plateaus; I wanted to make a game you can actually finish.

Each act teaches **one** new gate behaviour, then spends three more waves letting it bed in:

| Act | Waves | What it teaches |
|---|---|---|
| I | 1–4 | The reveal—pure Asteroids, black hole, elliptical gates—introduces pathfinding skill |
| II | 5–8 | Directional (one-way) gates—introduces routing skill |
| III | 9–12 | Spinning gates—introduces timing skill |
| IV | 13–16 | Both at once—everything all at once, then ends |

I think of that "introduce → practice → practice → close" cadence as a very Nintendo way of doing things. A mechanic shown once and then immediately buried under the next one was never really taught. Four waves gives you enough time to notice it, get caught by it, and then start planning around it.

In the game code I only write down what *changes* from one wave to the next. A practice wave that keeps the previous setup is empty on purpose. Introductory text appears only when something new is actually on screen. It isn't a tutorial, just a small toast that gives you enough of a clue.

Early gates were round rings. Side-on grazes felt wrong, so elliptical slots became the baseline after the first play-test. Directional and spinning came later as routing and timing problems, not as decoration.

----

## Deterministic gameplay (the Arcade way)

I love learning the patterns in Pac-Man, the barrel logic in Donkey Kong, and the routes through Flicky. Those games feel like *courses*: learn the layout and your knowledge begins to compound. Beltrunner leans into the same approach.

Every "random" draw—rock spawn edges and headings, gate placement, power-up scatter—comes from one seeded stream. A single number describes the whole layout. Restart the game and the first run of one session will match the first run of the next, given the same inputs. Change the seed and you get a completely different but equally fair course from the same rules.

That matters for learning (the field is a place you can know), for replays (a recording only works if the stream matches), and for tuning (you're adjusting rules and a seed, not praying to chance).

Power-up drops are on a fixed cadence too. Every eighth rock kill arms one, cycling `[T]` → `[I]` → `[S]`, rather than using a "1-in-8 chance" fudge like the diamond drop in Flicky. The gun still *feels* generous, but the schedule is learnable and predictable.

----

## Discoverable hidden things (the Bomb Jack way)

Bomb Jack has a sequential bonus that rewards you for collecting the lit targets in order. I think it is still one of the best examples of a game teaching something without using a manual, so I applied a similar idea to the rock field.

From wave 2 onwards, one large rock is highlighted at a time. Split it in sequence and a sustained voice joins a chord: root, third, fifth, octave. Split one out of turn and the voices cut. You notice you've done something wrong because the choir is no longer singing. A missing pip is easy to miss, but a chord that suddenly stops is not.

Follow the lights and the last stop is always the *clover*, a rock shaped a little like a lucky four-leaf clover and hiding in plain sight among the others. Complete the sequence and it drops *`[E]`*, the secret jackpot containing time, invincibility and freeze all at once.

None of this is explained on screen. The power-ups legend reads `????` until you've found it once; after that it says `EXTRA` as a small badge of honour.

I tried putting numbers on the rocks themselves, but the result was much too cluttered. Highlighting them was the simpler solution I arrived at afterwards.

There's a second secret one layer up. Finish all sixteen waves and attract mode unlocks the ancestor game, turning PUSH START into a Beltrunner/Asteroids selector. I like that the reward for finishing the game is being able to play the game it came from.

----

## Loose collectable power-ups (the Pang way)

Pang, and a long line of arcade games before and after it, understood that a power-up you have to *go and get* is a decision in itself. Beltrunner follows the same tradition, placing tokens directly into the playfield. Each one has a stroked ring, coloured letter, slow drift, and an accelerating blink during its final two seconds, so you get fair warning that it is about to disappear.

**Drops**—the gun creates these while you play:

- **`[T]` TIME**—clock +10. The game's main currency.
- **`[I]` INVINCIBLE**—a few seconds of ramming without dying; rocks split on contact like billiard balls.
- **`[S]` STOP**—rocks freeze *and* the race clock freezes. An early version froze only the rocks and left the clock running, which was quietly mean during the one window that was supposed to be a breather.

**Placed**—these always appear under specific conditions:

- **`[E]` EXTRA**—the clover sequence described above. For a while it paid only a little more time than `[T]`, which was an anticlimax for a secret. Now it gives you time, invincibility and freeze together.
- **`[W]` WARP**—appears only on the last wave of acts I–III, once that act's mechanic has been taught. It orbits a host rock as a satellite and can be claimed by shaving past it. Shoot the host and the token breaks loose and begins to drift. Collecting it opens the black hole immediately, forfeiting the remaining gates and banking the clock. An earlier version placed it on the wave that *introduced* a mechanic, which was definitely the wrong time to offer an escape. There is no warp on wave 16 because there is nothing left to escape into.

The loop I was aiming for was to crowd the field for more valuable gates, fish for a drop, and then take the route while protected. The tools are useful, but obtaining them also raises the risk.

----

## Other things that survived

Here are some of the other details that made it through:

**FIELD as a measure of risk.** Every rock carries an invisible weight (large 1 / medium 2 / small 3), and FIELD is the live sum of those values. Gate payouts scale with it. Splitting rocks *raises* FIELD, so shooting is not simply a way to clear a lane; it also raises the stakes. Hit a rock by accident and it still splits, as it would in Asteroids, so a careless bounce can make the field more valuable too. FIELD increases the base score while COMBO multiplies it, giving the two values separate jobs on the HUD.

**Wrap-edge racing.** The playfield is a real torus: rocks and the ship can straddle both sides of a wrap, and collisions reach across it. In the original Asteroids, rocks teleport when their centre point crosses an edge, before and after which up to half of the rock is invisible. In Beltrunner the fastest route to the next gate is often through the edge of the screen, so the wrap needs to be something the player can trust.

**Black hole sun.** The black hole pulls from across the arena but has a tiny event horizon at its centre. You can fly past it, feel the tug, graze the rings, and warp only when you pass through the eye. This leaves room to grab a loose power-up before leaving, which can be worthwhile because its effects carry into the next wave. The opening sound climbs to a hanging dominant and the dive resolves it.

**Attract mode.** I checked the original Asteroids and found one continuous simulation: rocks drift underneath changing text overlays, there is no ship or self-play while idle, and the high-score table is not drawn while empty. Beltrunner adopts the same approach, so the world never stops.

**Design System.** HUD text with the same intent always appears at the same y-position and size, allowing the player to learn its meaning through familiarity. Three different text sizes further reinforce the hierarchy. Tables are described using a top position and a step, so moving the high-score block is one decision rather than ten. The BELTRUNNER logo is even hand-kerned because L+T leaves a gaping hole in the vector monospaced font.

**High scores that understand the economy.** The attract-mode high-score table is not ten numbers typed in by hand and left to go stale. It is derived from what the game can actually pay, so retuning a gate or warp bank moves the whole table with it. The Jinks IDE also shows the theoretical maximum score in its inspector.

**Audio as teaching.** Greenwich Time Signal pips play during the final six seconds. B5 is near enough to 1000Hz and is also the tonic of the audio bed. The lit-rock sequence uses the one sustained timbre that the bed deliberately avoids, helping it to stand out rather than become buried.

**Invincible ramming.** While `[I]` is active, ramming splits the rock and sends both bodies away from the point of contact. You bounce off a large rock but can plough through a small one. Earlier versions either did not bounce at all or sent the ship flying off uncontrollably. The rebound is yet another fun surprise hidden in the game systems.

----

## What the game forced into the system

Asteroids already sat comfortably in the Jinks engine, but making a *race* through the same field meant that the system had to grow in a few places. I tried to make each addition general enough that the next game needing the same feature will also benefit from it.

**Better vector support.** Beltrunner is a white-on-black vector game rather than a raster game wearing a CRT filter. It needed stroke glyphs that every shell draws in the same way, a proper beam, bolder lines that survive the phosphor bloom, and several missing characters added as I went. Intensity is now a property of the *display*, rather than something that has to be reduced by hand on every shape. Other vector games became brighter as a side effect. Everybody is a winner!

**Torus wrapping that tells the truth.** The usual screen wrap teleports an object to the other side, which is fine for many games but not when the fastest line to a gate passes through the screen edge. A world can now opt into a real torus: an entity straddling a seam is drawn on both sides (up to four copies in a corner), and collisions reach across the boundary using the shortest wrapped distance. Beltrunner and my version of Asteroids both use it, whereas the original Asteroids wrapped rocks when their midpoint origin crossed the screen edge.

**Colliders that match what you see.** Circles are my first port of call for collision, and the game jam version shipped with them, but extended play showed that they caused unfair collisions. The ship was a slender dart wearing a fat disc, while the thin elliptical gates collided from too far away. I added polygon colliders with real concave decomposition, rather than a convex hull that fills in the tail notch, and oriented ellipse colliders that rotate with their heading. The system also needed ellipse-versus-polygon contact. Without it, the gates fell through every narrow-phase branch and became oversized AABBs again, allowing players to take gates they had flown nowhere near.

**A real deflect.** I added this after the jam. Ramming rocks whilst invincible should feel like snooker: glancing blows turn you, head-on collisions bounce you, small rocks yield, and big rocks don't. The system now performs a proper 2D elastic deflection along the contact normal, updating both bodies and deriving mass from their geometry. There is no magic knockback table, and I'm sure other games will benefit from it being built in.

**A few smaller necessities.** Grace time—the moment of temporary invincibility after a respawn—now *blinks* so you can see the respawn shield, while pickups can still pass through it. Tokens blink more quickly as they near their expiration. A satellite power-up can detach and drift when its host dies. Point gravity makes the black hole strong enough to feel from the edge of the arena, whilst keeping its eye small enough that you can still fly past. Thrust can be bound to either the d-pad or a face button. Finally, beating the game can unlock Asteroids—its ancestor—selectable in attract mode, with a CRT power-off shrink-to-a-dot hiding the switch between the two games.

None of that is Beltrunner-only code. It has all become part of Jinks because the design and implementation were useful enough to be generalised.

----

## New homes, post-jam

None of the above is platform work, and that's deliberate, but that side of the project has kept going too. Since the jam, a second engine shell using SDL2 and GLES2 has taken the same unmodified core across Linux desktops and handhelds, including those running muOS, and further back onto the Nintendo Wii and Sega Dreamcast. This sits alongside the native macOS/iOS path and a raylib desktop shell.

Beltrunner runs on all of them without being ported or rebuilt. It uses the same 1,300 lines, tick loop and deterministic seed stream, reading the same per-frame contract that each new shell has to satisfy. This is why I have tried to keep the core unaware of any specific platform: once a machine can satisfy that contract, it gets the whole library, including this game.

----

## About 1,300 lines

That is the whole game, rather than a prototype with the "real" code somewhere else or a thin shell over a bespoke mode. Waves, attract mode, high scores, power-ups, sounds, victory, and the secret unlock of Asteroids all live in one place. The engine features are the shared bones; the 1,300 lines are how Beltrunner arranges them.

I like that it begins as Asteroids, turns into a countdown race, borrows ideas from Nintendo, Bomb Jack and Pang, and then actually ends after sixteen waves that can be learnt by heart.

I'll write more about how games are authored in Jinks once the system has stopped changing quite so quickly. 

Until then…have fun!

----

## Post Postmortem

The game is now available for:

- Nintendo Wii
- Linux (handhelds like the Anbernic RG35XXH)

Still to come:

- standalone desktop releases for macOS, Linux, and Windows— which I just need to package up correctly
- and Dreamcast, if I can squeeze a little more performance out of it
