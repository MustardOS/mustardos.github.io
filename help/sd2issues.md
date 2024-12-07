---
layout: default
title: Issue with SD2
permalink: /help/sd2issues
nav_order: 7
parent: Help
has_children: false
---

# muOS is not detecting your SD2 card
There are a couple of checks you can do to ensure your SD card is properly formatted correctly.  The first thing is that you have to make sure your SD card is formatted to one of the following types:
  * FAT32 - Compatible for all systems to read and write
  * EXFAT - Compatible for all systems to read and write (recommended)

## The SD card is properly formatted but still not being picked up
Some SD card manufacturers place a hidden security partition at the beginning of each card to protect the SD card in some form or another.  This can cause some issues, you are best to backup all of the data from the SD card and format it using the following tool:  
[https://www.sdcard.org/downloads/formatter/](https://www.sdcard.org/downloads/formatter/)

## Fake SD cards...
This could also be a possible, and unfortunate, thing to happen when purchasing SD cards from Amazon, Aliexpress, or any retail store.  There are several ways to detect fake SD cards however take the time to read the following websites which have more detailed information about this:  
[https://photographylife.com/fake-memory-cards](https://photographylife.com/fake-memory-cards)  
[https://rmprepusb.com/tutorials/007-all-about-fake-sd-cards-and-usb-flash-drives/](https://rmprepusb.com/tutorials/007-all-about-fake-sd-cards-and-usb-flash-drives/)