---
layout: default
title: 2403 ORIGIN
permalink: /release/archive/origin
parent: Archive
grand_parent: Release
nav_order: 1
has_toc: false
---

# muOS 2403 ORIGIN
## Download
_This release is now archived._
```
f78f881aa18ea692e40964814b5ffdc46231e8fa32df77f38a26b7f9750d43a4  muOS-2403PLUSH-v10.img
```
## Significant Changes
- Added basic HDMI support
  - Sound output is on-device - _a future update will potentially fix this!_ 
- Additional preinstalled content
  - Thanks to **@joyrider** for all the brand new content to play straight away!
- Battery level has been replaced with glyph
  - Offset can be adjusted in advanced settings to help adjust accuracy for your battery
- External emulation support
  - DraStic
  - PICO-8
  - ScummVM (_Experimental_)
- Coming to a future update:
  - Mupen64
  - PPSSPP 
- New content explorer
  - Artwork and text descriptions are now structured by associated core
  - Content is now cached for faster loading
  - Files and folders now live side-by-side
  - Hiding files and folders no longer require **hidden.txt** file
    - Add a **.** character at the front and it will no longer appear in the content explorer
    - It uses the UNIX style way of hiding files and folders
- New core association
  - A lot easier to work out what core to use for your content
  - Predefined lists to help you find the right system for your content
  - _Automatic assign will be coming in a future update_
- On-device network configuration
  - Contains brand new On-Screen Keyboard (OSK) which will later be reused for future programs
  - Network web services can now be toggled
  - Some issues may occur if swapping between Static and DHCP (_will be fixed in a later update!_)
  - _Network profiles and SSID scanning will be coming in a future update_
- PortMaster support
  - A number of ready-to-go content is available with more on the way
  - Thanks to **@kloptops** and **@cebion** and the team at PortMaster for achieving this!
- Theme structure has been enhanced with additional functionality
  - A theme creator has been developed to help create themes: `Link removed.`
  - All thanks to `@jupyter` for their hard work developing this!
  - This is still a work-in-progress
  - Themes now support custom fonts which can be easily compiled following this guide: 
  - A whole slew of fantastic themes have been made by various muOS folk have been preinstalled

## RetroArch Changes
- Added baseline shader config to remove frame jitters
- Back to a single global configuration for all content
- Brand new overlays thanks to **@antikk** and **@jeltron**
- Main menu RetroArch launch no longer requires confirmation
- Quick menu hotkey changed to **MENU + X**
- Set default aspect ratio for numerous cores
- Updated the majority of cores and added additional ones

## General Changes
- Added additional debug messages for backend development
- Added brand new secret!
  - _Don't spoil it for everybody else!_
  - If you find it let me know for a secret role
- Added device selector
- Added factory reset bleeps and bloops for fun (_turn your volume up!_)
- Adjusted maximum brightness value
- Content description now scrolls vertically with a starting delay of 2 seconds
- Fixed screenshot timing (**L2 + R2**)
  - With proper rumble support
- General code went through the washing machine
- Messages are now displayed above the navigation footer element
- Moved datetime to top right corner
- Navigational messages are now displayed on the footer element
- On-device sync has been removed
- Redesigned input tester
- Removed SD Card tools as it is no longer required
- Separated settings items into Configuration and Information sections
- System Information now automatically updates giving you live details