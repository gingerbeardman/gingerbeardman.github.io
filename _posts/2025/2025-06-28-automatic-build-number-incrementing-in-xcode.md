---
layout: post
title: "Automatic build number incrementing in Xcode"
date: '2025-06-28T17:01+01:00'
tags:
- tools
- xcode
- software
nouns:
- Xcode
featured: false
pinned: false
image: /images/posts/xcode-automatic-build-number-01.png
comments:
  - platform: twitter
    url: https://twitter.com/gingerbeardman/status/1939003982124396856
  - platform: bluesky
    url: https://bsky.app/profile/gingerbeardman.com/post/3lsomi5sdz22e
  - platform: mastodon
    url: https://mastodon.gamedev.place/@gingerbeardman/114762023824620373
style: |
  img {
    margin: 0 auto;
  }

---

There are many ways to do automatic build version number incrementing in Xcode. I don't know of any really easy universal way of doing it, so this is simply my preferred way of doing it. I just added it to a new project so thought I'd document if only for my own future reference!

----

## 1. Create a .xcconfig

- Add a file (eg, `YourProject/BuildNumber.xcconfig`) to your project
- Add that file to your `.gitignore` because it will change frequently
- Add a *Pre-Action Script* to your *Scheme*:
    - In Xcode, edit your scheme (*Product > Scheme > Edit Scheme*).
    - For both "Run" and "Archive" actions, add a *Pre-action* with a script like the one below
    - Here I'm using a reverse notation date and time format
    - Make sure to set "Provide build settings from" to your project

```sh
#!/bin/sh
BUILD_NUMBER=`date '+%y%m%d.%H%M'`

PROJECT_NAME=$(basename "$PROJECT_FILE_PATH" .xcodeproj)
echo "CURRENT_PROJECT_VERSION = $BUILD_NUMBER" > "${PROJECT_DIR}/${PROJECT_NAME}/BuildNumber.xcconfig"

echo "Updated build number to: $BUILD_NUMBER"
```

![IMG](/images/posts/xcode-automatic-build-number-01.png)

----

## 2. Reference the .xcconfig in your project

- In your project set the base configuration file to your `BuildNumber.xcconfig`
    - In the main editor, you’ll see two sections: *PROJECT* and *TARGETS*
    - Click the name of your project and make sure *Info* tab is selected
    - You can set the base configuration at the project level (as here) or for each target individually

![IMG](/images/posts/xcode-automatic-build-number-02.png)

----

## 3. Set the version to use the config variable

- In the build settings, set: Current Project Version to: `$(CURRENT_PROJECT_VERSION)`
- It will show the version number in place

![IMG](/images/posts/xcode-automatic-build-number-03.png)

----

## 4. Confirm by displaying the value in your app

- Use `CFBundleVersion` for the build version number

![IMG](/images/posts/xcode-automatic-build-number-04.png)
