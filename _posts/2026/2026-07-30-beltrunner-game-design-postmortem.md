---
layout: post
title: "BELTRUNNER: game design postmortem"
date: '2026-07-30T23:34+01:00'
tags:
- gamedev
- design
- videogame
- arcade
- postmortem
nouns:
- Beltrunner
- Asteroids
- Bomb Jack
- Pang
- Pac-Man
- Donkey Kong
- Flicky
- Nintendo
- Phoenix
- Wii
- Dreamcast
image: /images/posts/jinksgg-beltrunner.png
featured: true
pinned: false

---

Last week I [shared a look at an arcade-faithful version of Asteroids](/2026/07/21/im-working-a-new-way-to-make-games/) to demonstrate the totally new way of making games that I've been working on. It's called [Jinks](/2026/07/30/hi-jinks/) and it's a lightweight game-engine, interactive development environment, and a language of sorts.

This post is a game design postmortem for BELTRUNNER, an original game built from the same bones of Asteroids. Roughly 1,300 lines for a whole game you can finish. Built on the same system, in same succinct language, with all the same nicities, though I'll continue to stay a little coy about the machinery for now, mostly because things are still changing so much every day. Things need to settle down so I can describe what it is rather than what it used to be.

What I *do* want to talk about are the design methods that made it in, the ones that didn't, and the bits the system had to grow so the game could exist. A lot of the methods are old, which is the point.

----

<iframe height="167" frameborder="0" src="https://itch.io/embed/4820811" width="552" style="max-width:100%;display:block;margin:1.5rem auto"><a href="https://gingerbeardman.itch.io/beltrunner">BELTRUNNER by gingerbeardman</a></iframe>

----

## Explorations

The prototype was nothing like Asteroids at all. I built an orbital shooter perhaps more like Space Duel: numbered targets on fixed shells around a central sun. As with everything made in Jinks it was quick to bring up, but playing it just wasn't fun. I had to decided whether it showed promise, and I don't think it did.

Deterministic orbits are sitting ducks. Asteroids' fun is its unpredictable rock drift—the dodging, not the shooting gallery. Lesson kept: motion chaos is the fun engine; target arrangement is not. Salvage kept: numbered targets, the highlight, the chain, and it got me thinking about the song "Countdown" by Phoenix (Bankrupt!, 2013).

I then had the idea to pivot back towards Asteroids, but making the numbered pickups kind of like the rings in Pilotwings or the gates in Wave Race 64. And to dress it all behind a Donkey Kong '94 masquerade.

----

## Masquerade

Stage 1 is pure Asteroids: one large rock, classic thrust-and-drift, classic splits, classic death-and-respawn. The only tell is a race clock that appears on first hit. The first clue that things are not how they seem. Clear the field and instead of "next wave of rocks," a black hole tears open at screen centre. Gravity pulls you in, and you can do a little dash to help it along.

From stage 2 the real game reveals itself. Numbered gates are scattered through the same drifting rock field, taken in **descending** order—5… 4… 3… 2… 1…—so the race chants a countdown as you fly it. Take the last gate and the zero opens again. Warp. Change. Rinse. Repeat.

Teach the chassis first, then recontextualise it. If you already know Asteroids you can fly stage 1 on muscle memory. If you don't, you still learn the only movement model that matters before the race asks you to thread it.

Two countdowns converge on zero:

1. **The gate count**, which you drive.
2. **The race clock**, which drives you—every gate feeds it a few seconds; rocks tax it.

There are no lives. Time is the only resource. That single decision collapsed a lot of classic arcade bookkeeping into one stake you can read at a glance—and it stuck through every playtest.

----

## Waves with stepped difficulty (the Nintendo way)

Sixteen waves. Four acts of four. Not an endless ramp that quietly plateaus—a game you can actually finish.

Each act teaches **one** new gate behaviour, then spends three more waves letting it bed in:

| Act | Waves | What it teaches |
|---|---|---|
| I | 1–4 | The reveal—pure Asteroids—then elliptical gates |
| II | 5–8 | Directional (one-way) gates—a routing problem |
| III | 9–12 | Spinning gates—a timing problem |
| IV | 13–16 | Both at once—asks for everything, then ends |

That "introduce → practice → practice → close" cadence is The Nintendo Way. A mechanic shown once and immediately buried under the next one was never really taught. Four waves is enough to notice it, get caught by it once, and start planning around it.

In the game code I only write down what *changes* from wave to wave. A practice wave that keeps last wave's setup is empty on purpose. Intro text only appears when something new is actually on screen—it's not a tutorial but a toast and enough to clue you in.

Early gates were round rings. Side-on grazes felt wrong, so elliptical slots became the baseline after the first playtest. Directional and spinning came later as routing and timing problems, not as decoration.

----

## Deterministic gameplay (the Arcade way)

Pac-Man's patterns. Donkey Kong's fixed barrel logic. Flicky's routes. What I love about those games is that they were **courses**. Learn the layout and skill compounds.

Beltrunner leans into that approach.

Every "random" draw—rock spawn edges and headings, gate placement, powerup scatter—comes from one seeded stream. A single number *is* the layout. Restart it and run 1 of a session matches run 1 of the next under the same inputs. Change the seed and you get a completely different, equally fair course from the same rules.

That matters for learning (the field is a place you can know), for replays (a recording only works if the stream matches), and for tuning (you're adjusting rules and a seed, not praying to chance).

Powerup drops are on a fixed cadence too: every eighth rock kill arms one, cycling [T] → [I] → [S]. No "1-in-8 chance" fudge like the diamond drop in Flicky. The gun still *feels* generous; the schedule is learnable and predictable.

----

## Discoverable hidden things (the Bomb Jack way)

Bomb Jack's sequential bonus—achieved when you collect the lit targets in order, rewarding you for paying attention—is still one of the best "the game teaches without a manual" systems ever shipped.

I've applied something similar to the rock field.

From stage 2 on, one large rock is highlighted at a time. Split it in-sequence and a sustained voice joins a chord: root, third, fifth, octave. Split a sequenced rock out of turn and the voices cut. You notice you've done something wrong when the choir is no longer singing—a missing pip is easy to miss, a chord that *stops* is not.

Follow the lights faithfully and the last stop is always the **clover**: a rock that is visually reminiscent of a lucky four-leaf clover, hiding in plain sight among ordinary rocks of the same shape. Complete the ladder on it and it drops **[E]**, the secret jackpot—time, invincibility and freeze, all at once. Take the risk and you will be rewarded.

Never explained on screen. The powerups legend reads `????` until you've found it once; after that it says `EXTRA` as a badge of honour. You found a secret.

One thing to note: I tried putting numbers on the rocks themselves at some point, but it was too cluttered. It was only after trying this that I landed on highlighting the rocks.

There's a second secret one layer up: finish all 16 waves and attract mode unlocks the ancestor game. PUSH START becomes a Beltrunner / Asteroids selector. The descendant teaches you its own origin story.

----

## Loose collectable powerups (the Pang way)

Not menu upgrades. Not locked loadouts. Tokens in the field.

Pang (and a long line of arcade games before and after it) understood that a powerup you have to *go and get* is a decision, not a buff popup. Beltrunner uses the same idiom: stroked ring, coloured letter, slow drift, and an accelerating blink in the last two seconds so expiry reads as a countdown you lost rather than a vanish the game cheated with.

**Drops**—the gun mints tools while it raises the stakes:

- **[T] TIME**—clock +10. The game's main currency.
- **[I] INVINCIBLE**—a few seconds of ramming without dying; rocks split on contact like billiard balls.
- **[S] STOP**—rocks freeze *and* the race clock freezes. A real breather. (An early version froze only the rocks and left the clock running—quietly mean during the one window that was supposed to be a breather.)

**Placed**—field knowledge, not luck:

- **[E] EXTRA**—the clover ritual above. For a while it paid only "a bit more time than [T]", which is an anticlimax for a secret. Now it's the jackpot: time + invincibility + freeze together.
- **[W] WARP**—only on the last wave of acts I–III, once that act's mechanic has actually been taught. Orbits a host rock as a satellite; claim it by shaving past. Shoot the host and the token knocks loose to drift. Effect: open the black hole *now*, forfeit remaining gates, bank the clock. The escape hatch for a field gone wrong—never on wave 16, because there is nothing left to escape into. (An earlier cadence put the escape on the wave that *introduced* a mechanic, definitely the wrong place for it.)

The loop I care about: crowd the field for fatter gates, fish a drop, cash the route while protected. Tools and risk sit happily alongside each other.

----

## And many more…

A non-exhaustive tour of other bits that survived the cut:

**FIELD as risk throttle.** Every rock carries an invisible weight (large 1 / medium 2 / small 3). FIELD is the live sum—how crowded and dangerous the screen is. Gate payouts scale with it. Splitting rocks *raises* FIELD, so the gun is not lane-clearing hygiene; it's a deliberate stake-raise. Hit a rock and it still splits (authentic to Asteroids), so a careless bounce is an accidental raise too. FIELD widens the base; COMBO multiplies it. Two different jobs, both on the HUD.

**Wrap-edge racing.** The torus is real—rocks and ship straddle both sides of a wrap, collisions reach across. Contrast this approach to original Asteroids where rocks teleport to the other side when their centre-point crosses the edge, before and after which you can't see upto half the rock. The fast route to the next gate is often through the screen edge. Classic Asteroids geometry, read as a race line.

**Black hole sun.** Pull across the arena; a tiny event horizon at the centre. You can fly *by* the hole, feel the tug, graze the rings, and only warp if you thread the eye. Perhaps there's still a loose powerup to grab, worthwhile as their effects last across wave transitions. The open sound climbs to a hanging dominant; the dive resolves it. Musical design, not just VFX.

**Attract mode.** I checked the original Asteroids: it's one continuous simulation, rocks drifting under swappable text overlays, no ship while idle, no self-play, high-score table not drawn while empty. Beltrunner adopts that approach. The world never stops.

**High scores that know the economy.** The attract high score table isn't ten numbers typed in by hand and left to go stale. It derives from what the game can actually pay—retune a gate or a warp bank and the whole table moves with it. Cold ranks still look like clean arcade scores, not arithmetic leftovers. Jinks IDE surfaces theoretical maximum score in its inspector.

**Typographic grid system.** Four sizes, role-based baselines so that text with the same intent appears at the same place on screen, and the player can learn through familiarity. Tables described as a top and a step. Moving the high-score block is one decision, not ten. The BELTRUNNER logo is even hand-kerned (L+T has a gaping hole with the vector monospaced font).

**Audio as teaching.** Greenwich Time Signal pips on the last six seconds (B5 is near enough 1000Hz, and also the tonic of the bed). A drone bed that borrows a well-used chord progression—voiced as cabinet hum, not soundtrack. The lit-sequence chord uses the one sustained timbre the bed deliberately never uses, so it colours rather than buries.

**Invincible ram as snooker.** While [I] is up, ramming splits the rock and both bodies leave along the contact—bounce off the big one, plough through the small one. The ladder of feel falls out of the shapes. Earlier versions either didn't bounce at all or sent the ship flying off uncontrollably.

----

## What the game forced into the system

Beltrunner did not come for free. Whilst Asteroids already sat comfortably in the Jinks engine; making a *race* through that field meant the system had to grow in a few places. Everything below is general—named after the mechanic, not the game—so the next game that needs it gets it for free.

**Better vector support.** Beltrunner is a white-on-black vector game, not a raster game wearing a CRT filter. That forced real work on the vector face: stroke glyphs that every shell draws the same way, a proper beam (intensity is a property of the *display*, not something you pre-dim by hand on every shape), bolder lines that survive the phosphor bloom, and adding missing characters as I went. Other vector games got brighter and more honest as a side effect. Everybody is a winner.

**Torus wrapping that tells the truth.** Classic wrap is "teleport to the other side." Fine for most games. Not fine when the fast line to the next gate *is* the screen edge. The world can now opt into a real torus: an entity straddling a seam draws on both sides (up to four copies in a corner), and collisions reach across the boundary with a shortest-wrap contact instead of snapping you across the map. Beltrunner and Asteroids both flipped it on. Suddenly wrap-edge racing is a real skill, not a visual glitch you hope the player doesn't notice.

**Colliders that match what you see.** Circles are my first port of call for collision, and the game jam version shipped with them, but extended play showed that they were not accurate enough and resulted in some unfair collisions. The ship was a slender dart wearing a fat disc; the gates are thin ellipses that used to collide from too far away. So the system learned polygon colliders (real concave decomposition, not a convex hull that fills in the tail notch) and oriented ellipse colliders that rotate with heading. Then it had to learn ellipse-versus-polygon contact, because the moment the ship dropped its circle radius the gates fell through every narrow-phase branch and became oversized AABBs again—players were taking gates they had flown nowhere near.

**A real deflect.** This is another one added post-jam. Ramming rocks whilst invincible should feel like snooker: glancing blows turn you, head-ons bounce you, small rocks yield, big rocks don't. So the system got a proper 2D elastic deflect along the contact normal, both bodies updated, mass from geometry. Bounce off the large, plough through the small—no magic knockback table. Other games will surely benefit from this now being a built-in.

**A few smaller necessities.** Grace that *blinks* so you can see the respawn shield, while pickups still pierce it (invincible to rocks, not blind to gifts). Tokens that accelerate their blink as they expire. A satellite that can detach and drift when its host dies. Point gravity for the black hole, strong enough to feel from the edge of the arena and small enough at the eye that you can still fly past. Dual bindings so thrust can be d-pad *or* a face button. And the quiet one: beating the game can unlock its ancestor in attract mode—one cart, two games, a CRT power-off between them so the swap itself is invisible.

None of that is Beltrunner-only code. It's the recipe book getting a few more ingredients because this one game's design and implementation was versatile enough to be generalised.

----

## New homes, post-jam

None of the above is platform work, and that's deliberate—but the platform work has kept going too. Since the jam, a second engine shell (SDL2 and GLES2, rather than the native macOS/iOS path or the raylib desktop shell) has taken the same core, unmodified, across Linux—desktops and handhelds alike, including those running muOS—and further back still, onto the Nintendo Wii and the Sega Dreamcast.

Beltrunner runs on all of them. Not a port, not a rebuild: the same 1,300 lines, the same tick loop, the same deterministic seed stream, reading the same per-frame contract a new shell just has to satisfy. That's the whole bet behind keeping the core platform-ignorant—every machine that learns to speak that contract inherits the entire library for free, this game included.

----

## ~1,300 active lines

That is the whole game.

Same spirit as the Asteroids cart: not a prototype with the "real" code elsewhere, not a thin shell over a bespoke mode. The whole loop lives in one place—waves, attract, high scores, powerups, sounds, victory, the secret unlock of its own ancestor—and it shares its bones with the rest of the collection. The system features above are the shared bones; the 1,400 lines are how Beltrunner arranges them.

Beltrunner starts like Asteroids, becomes a countdown race, teaches like Nintendo, hides like Bomb Jack, drops like Pang, and ends—actually ends—after sixteen waves you can learn by heart.

I'll keep being a little coy about how a game is authored in this system. The design methods—and what they forced the machine to learn—are the point of this postmortem. Until next time: have fun!
