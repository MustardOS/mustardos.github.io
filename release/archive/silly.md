---
layout: default
title: 2508.2 SILLY GOOSE
permalink: /release/archive/silly
parent: Archive
grand_parent: Release
nav_order: 1
has_toc: false
---

# MustardOS 2508.2 Silly Goose

#### _Pronunciation_

/ˈsɪli ɡuːs/

## Download - Full Image

[Download from Gofile](https://gofile.io/d/nDf0Bk){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }
[Download from MEGA](https://mega.nz/folder/d7Yk0SjT#0Gsdw2LCu6T2ee9Yk3by2Q){: .btn .fs-5 .mb-4 .mb-md-0 }

{: .warning }
> Upon full image reflash on devices with SD2 inserted your `MUOS` folder will be moved to `MUOS_old` to ensure update
> safety. However do not panic, your save games, configurations, and other user data can be safely copied back. However
> please do so with caution as there may be conflicts.

## Download - Update Archive

[Download from Gofile](https://gofile.io/d/XYLZkM){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }
[Download from MEGA](https://mega.nz/folder/1vw0zSjI#erolN9tBEtzHTbUkYhFf7A){: .btn .fs-5 .mb-4 .mb-md-0 }

{: .important }
> This is a simple **Archive Manager** installable patch for those of you who are running the MustardOS **2508.1 CANADA
> GOOSE** version only. However you can download the full image for a reflash.

***

## Additional Notes

{: .note }
> Due to the amount of issues in the past relating to people changing their RetroArch global configuration
> we have opted to freeze it. If you would like to know how to unfreeze it please see
> the following [FAQ](https://community.muos.dev/t/my-retroarch-configuration-is-being-repressed/823) page.

{: .note }
> Please ensure you read the handy hotkeys on the front page (<a href="https://muos.dev">https://muos.dev</a>) as there
> are a few changes that have been made. Including the change from **POWER** to **START** for the charging module along
> with the screenshot and DPAD swap hotkey changes.

***

## Support MustardOS

Want to join us on this **crazy** and rewarding journey?

**This can be done a few ways:**

* Take part in the [Community Forum](https://community.muos.dev)
* Be helpful around the [Discord Server](https://discord.gg/muos)
* Contribute code directly to our [GitHub Repositories](https://github.com/MustardOS)
* Spread the good word about MustardOS and all the amazing features

**You can join the testing crew directly by:**

* Supporting xonglebongle via a [Ko-fi Subscription](https://ko-fi.com/xonglebongle)
* Boosting the [Discord Server](https://discord.gg/muos)
* Contributing major code pull requests on our [GitHub Repositories](https://github.com/MustardOS)
* Showing exceptional values and building rapport

***

## Support Development Crew

We are a small team and with your generous support we can hopefully grow and spread some of that sweet MustardOS
across other devices. So if you can, help out the following MustardOS development crew:

### AntiKk - <a href="https://buymeacoffee.com/antikk">https://buymeacoffee.com/antikk</a>

### Corey - <a href="https://ko-fi.com/cmclark00">https://ko-fi.com/cmclark00</a>

### Bitter Bizarro - <a href="https://ko-fi.com/bitterbizarro">https://ko-fi.com/bitterbizarro</a>

***

## Contributors

* antiKk
* Bitter_Bizarro
* guzzloid
* ImCoKeMaN
* Shijikori
* thewalruzz
* void_linux
* wakeboxer
* xonglebongle

***

## Changes

* Added ability to assign core/gov/control to directory item
* Added additional rules to WirePlumber configuration
* Added background music archive support
* Added background music bind mount to `MUOS` directory
* Added brightness and volume increment adjustment options to advanced settings
* Added config option for Menu Repeat Delay
* Added confirmation sound to core download option
* Added file lock for concurrent audio changes
* Added framework for potential on-device updates
* Added governor set on tweak script run
* Added grid current item label theme settings
* Added grid mode support for content
* Added idle and default governor settings to power module
* Added idle input variable file
* Added longer suspend timeout for WirePlumber
* Added merged backup archive support
* Added network module compatibility layer
* Added network settings module with lots of configurable options
* Added performance governor switching for specific frontend tasks
* Added proper directory process checking during theme installation
* Added ScummVM support for `_hidden` directories
* Added support for PNG boot logos
* Added theme operation lock
* Adjusted theme package installer
* Changed default audio mix freq to 44.1
* Changed network handling to attempt module reloads
* Fixed active message box closure on installer module
* Fixed application backup pointer
* Fixed booting into last game using incorrect governor
* Fixed default governor value saving
* Fixed `ext-pico8.sh` to launch PICO-8 content with spaces
* Fixed freeze when updating PNG boot logo
* Fixed init audio function
* Fixed label recolouring tag to single byte character
* Fixed `muxapp` extraction path to use storage preference
* Fixed pass code boot lock by embedding it before frontend start
* Fixed pass code content launching
* Fixed PipeWire initialisation hangup when switching between Console and Handheld modes
* Fixed PSX log hard path
* Fixed reset alert
* Fixed RetroArch achievement config path
* Fixed RGB controller hotkey path
* Fixed `track.sh` to use user storage preferences instead of defaulting to SD1
* Fixed TrimUI Smart Pro menu and select buttons being swapped
* Fixed user data integer misuse in grid panel item
* Minor UI change for timezone and RTC options
* Modified brightness and volume scripts to use specific increment settings
* Modified opacity variables to use LVGL built-ins
* Modified options to hide play and launch counter on directory
* Modified supporter name label generation to use recolouring tags
* Modified theme extraction to temporary directory first then move atomically
* Moved PipeWire init earlier
* Optimised credit supporter module
* Refactored grid mode rendering performance
* Removed default governor assigns as it will use CPU default
* Removed factory reset checking on extra routines
* Removed leftover assign pointers
* Removed pass code auth check as it is done via the frontend
* Removed pass code lock in startup script
* Removed unused missing image
* Replaced deprecated `CURLINFO_SIZE_DOWNLOAD` with `_T` variant for large file support
* Reverted parallel frontend threading
* Simplified frontend startup by using existing function
* Updated Mupen64plus standalone emulators
* Updated ScummVM to 2.9.1.1
