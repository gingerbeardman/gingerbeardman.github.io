---
layout: post
title: 'Daily Driver: Pseudo-HDR'
tags:
- dailydriver
- playdate
- cars
- graphics
nouns:
- OpenSCAD
- Playdate
- Makefile
- HDR 1-bit rendering
comments: https://twitter.com/gingerbeardman/status/1395782266509475840

---
I love OpenSCAD "the programmer's solid 3D CAD modeller", despite its idiosyncrasies. One of the quirks that causes me most pain is the lack of controls for scene lighting in the Preview render. Unfortunately, I use that very Preview render as my main output!

This lighting issue manifests as shadows cast on the model. As I rotate the car some white "highlight" elements become darker. At this point the model is made up of many more shades of grey than I'd like.

The problem escalates when I take the Preview renders and convert them to 1-bit (black and white) ready for display on Playdate. I use a simple threshold conversion where any pixels darker than the threshold value become black, and any lighter become white. The highlight elements that have been cast in shadow are now grey and in many cases after the threshold conversion they end up as black pixels when they should be white. The net visual result is a loss of detail as well as flashing elements as they disappearing on certain frames.

My first attempt at solving this problem was to set model-specific threshold levels. This worked to a degree but there were still elements that would flash on and off as the car rotated, with headlights being the most noticeable. Whilst I lived with the issue for a long time it always bothered me as it did make the sprite feel buggy. Deep down I knew that the results could be better. However, looking at the OpenSCAD development roadmap made it clear that any improvements would have to come from me.

One day, out of the blue, I realised that if black pixels are more reliably rendered then why don't I take advantage of that and render the model in opposite colours so that the highlights are now black. After rendering I could simply negate the colours in the resulting image and the highlights would become white again. I tried a quick test and the results were good!

Of course this means an additional render stage is added to my workflow, but that's of little consequence since the Makefile is doing all the hard work. I also had to make some changes to my render scripts so that the normal and negative images are composited together into the final image. The resulting sprites have no flashing elements, maintain more fine detail, and appear a lot more solid as a result. Excellent!

Afterwards it struck me that this process is similar to HDR photography where multiple photographs are combined to increase the dynamic range in the final image. So, just for kicks, I'm referring to this technique as HDR 1-bit rendering.

![GIF](/images/posts/daily-driver-prerendered-sprites-old.gif "Old rendering workflow: note the disappearing headlights")
{:.tofigure}

![GIF](/images/posts/daily-driver-prerendered-sprites-new.gif "New rendering workflow: headlights are present and correct")
{:.tofigure}