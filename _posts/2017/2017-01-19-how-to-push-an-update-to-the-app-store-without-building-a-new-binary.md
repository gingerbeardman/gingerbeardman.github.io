---
layout: post
title: How to push an update to the App Store without building a new binary
tags:
- appstore
- apple
nouns:
- Application Loader
- iTunes Connect
comments: https://twitter.com/gingerbeardman/status/1517897365373571073

---

This post details how to easily deal with a request from Apple to update an old app that is still working perfectly — without having to setup a development environment to build it from source.

## TL;DR

1. Bump the version in `Info.plist`
2. Create a new `.icns` icon
3. Do a fresh `codesign` on the app bundle
4. Use Application Loader to get it into iTunes Connect
5. Submit for approval

## Background

There’s an App Store cleanup going on under the banner of “Improving the App Store”. I approve of this, in principle: removing apps that no longer launch, crash or otherwise operate incorrectly is a Good Thing™.

However, I’ve had a request to update an app that still functions perfectly despite not having been updated since 2011. That’s Snow Leopard vintage for all the old timers that are reading!

## Next Steps

First thing to know is that you can appeal such a request. You probably won’t have much luck—I didn’t. “Computer says no.”

A much easier way is to take the old, bug-free binary—easily downloaded from the App Store—and repackage it so that it appears to be new. Sounds like a plan!

## A new icon

The old icon was made before Retina displays existed, and even before multiple images in `.icns` files was enforced. So I had to make a new one. However, Apple has removed *Icon Composer* from their Developer Tools because it doesn’t support the 1024px icons required for the latest Retina displays. This makes things a little trickier.

As of today there are two options to create a valid Retina compatible `.icns`:

1. On the command line from a folder full of correctly named PNG files: `iconutil -c icns <foldername>` (see [man page](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/iconutil.1.html))
2. Using the the third-party, open-source app [Icon Composer 2x](https://github.com/lemonmojo/IconComposer2x) which is almost a drop-in replacement for the old Apple app. Nice work Lemon Mojo!

Final packaging shell script:

{% gist eb080bb29bfcf71f829e5ff9107f1d4a %}

So, what exactly are we doing here?

1. Bash *shebang* (see [wiki](https://en.wikipedia.org/wiki/Shebang_%28Unix%29))
2. Set `DATE` to a formatted date string, eg. 20170119164510
3. Set `CFBundleVersion` string in .plist to `$DATE` string
4. Copy `.plist` into app
5. Copy `.icns` into app
6. *Touch* app to set modified date
7. *Prune* the resource fork, Finder information, and similar detritus
8. *Codesign* app bundle with my current certificates
9. *Package* app as installer .pkg
10. *Assess/test* installer .pkg (see [docs](https://developer.apple.com/library/content/qa/qa1940/_index.html))

## Application Loader

Uploading to iTunes Connect outside of Xcode requires Application Loader. I tried using the version that comes with the latest Xcode, but it was giving me some nonsensical, badly written error messages:

![PNG](/images/posts/update-app-no-new-binary-app-loader-1.png "Error: The Info.plist indicates a iOS app, but submitting a pkg or mpkg.")
{:.tofigure}

![PNG](/images/posts/update-app-no-new-binary-app-loader-2.png "Error: No version found for ‘adamId — platform’ (485354734 — iOS App). If this problem persists for more than 24 hours, please contact your Apple representative.")
{:.tofigure}

Some Googling found a [StackOverflow post](http://stackoverflow.com/questions/32659970/upload-to-app-store-failed-no-version-found-for-adamid-platform) that recommended using [Application Loader 3.0](https://itunesconnect.apple.com/apploader/ApplicationLoader_3.0.dmg). After downloading this older version (interestingly it’s the one Apple link to from iTunes Connect) everything went smoothly!

![PNG](/images/posts/update-app-no-new-binary-app-loader-3.png "SUCCESS!")
{:.tofigure}

## Re-submission

After these simple changes you can resubmit. But what to write in the version change log? I tried the following:

> A new build with no changes because Apple asked for it, despite the game still working perfectly after all these years!

I was bitter.
Metadata Rejected.

> New build required due to the App Store Improvements process.

I was perfectly honest.
Metadata Rejected.

> Improvements for Retina displays.

Got to love that new icon.
Application Approved!

## That’s all folks

Hopefully you can get your app back on the App Store without too much effort. Of course, you should only do this for apps that you know are functioning correctly. Good luck!

Final thanks to Mark Sibly of [Blitz Research](https://en.wikipedia.org/wiki/Blitz_BASIC#BlitzMax) for making a tool that produces game binaries that stand the test of time! I can’t believe those binaries still run without error all these years later.

## A note to Apple Developer Relations

Rather than drawing an arbitrary line by date, how about investing in automated testing of apps? Developers would appreciate Apple taking on that burden, rather than asking developers to do new builds of apps that don’t really need it. Thanks for reading.

## 2022 update

*Wire Hang Redux*, the game I did this for, is no longer listed on the Mac App Store. The reason being that I didn't have a 64-bit version ready-to-go for the 2017 deadline Apple set for removal of 32-bit-only apps.

Since then I've been selling it elsewhere with better results. [You can grab it from itch.io](https://gingerbeardman.itch.io/wire-hang-redux).

I'm republishing this article to help developers dealing with similar requests from Apple over 5 years later.