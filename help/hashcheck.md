---
layout: default
title: How to check Download Hash
permalink: /help/hashcheck
nav_order: 2
parent: Help
has_children: false
---

### Summary

This will cover how and why a hash check is important, not all files download the same and some can even be victims of man in the middle attacks. Checking the hash of your download is a surefire way of ensuring the files are exactly what *should* be downloaded.

## Essential Steps
Please make sure your device is charged, and if your device is making beeps (scweeps and boops), showing little silly messages on the screen then it is doing it’s first setup,you will just need to wait a little. This process takes *approximately* 5 minutes before the credits pending your SD card of choice and size, after this the main menu should pop up!

## Troubleshooting: 

First, we need to check the *ZIPPED FILE* (Do *NOT* use the "download as ZIP" option when using MEGA). The  image’s SHA256 hash will need to match the one correspondent for your device's image from the download page/release channel hash.txt file, to be sure the download was not corrupted. 

You can drop the zipped image here https://emn178.github.io/online-tools/sha256_checksum.html to get it's sha256 hash. This will be a long string of seemingly random letters and numbers. 

Compare this SHA256 hash with those on the muOS download servers inside the hash.txt file, where you will find the appropriate hash followed by your device's image name. If it doesn’t check, proceed to re-downloading the image. Download managers may help this task.

If the hash checks out fine try formatting your card with the SD Card Formatter - (https://www.sdcard.org/downloads/formatter/) before flashing.

When flashing please avoid Balena Etcher. It is well known to cause issues with all versions of muOS. 
The Raspberry Pi Imager( https://github.com/raspberrypi/rpi-imager) will work for Windows, Mac and Linux, also Rufus( https://rufus.ie/ ) is great on Windows.

## Additional Help

Please navigate to the Discord and leave a message, someone will be happy to assist.


<div itemscope itemtype="https://schema.org/WebSite">
  <meta itemprop="url" content="https://muos.dev"/>
  <meta itemprop="name" content="muOS - Custom Firmware"/>
</div>
