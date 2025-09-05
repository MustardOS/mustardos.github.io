---
layout: default
title: 2508.1 CANADA GOOSE
permalink: /release/progress/canada
parent: Progress
grand_parent: Release
nav_order: 1
has_toc: false
---

# MustardOS 2508.1 Canada Goose

#### _Pronunciation_

/ˈkænədə ɡuːs/

## Download

_Not available yet!_

{: .important }
> As this is a major release you will be required to reflash to update your device to this version. Due to the changes
> within the internal structure we have been forced to release this as a full image rather than an update. Apologies for
> any inconvenience.

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

* acmeplus
* Aeverdyn
* antikk
* arkun
* bgelmini
* Bitter_Bizarro
* cart-su
* chronoss09
* duncanyoyo1
* eqagunn
* Habbening
* ImCoKeMaN
* IncognitoMan
* johnnyonflame
* koolkidcorey
* kriznick
* mikhailzrick
* pcorbel
* synthic
* voodatari
* wakeboxer
* xonglebongle
* zarquon

***

## Changes

* Added built-in application support
* Added check for temporary RetroArch autoload config deletion
* Added copy file global function
* Added debug pass for default theme modification
* Added default MustardOS theme protection
* Added file stream fnv-1a hash calculation
* Added FNV-1a hash calculation of default theme
* Added Genesis Plus GX Expanded
* Added missing help strings
* Added theme and package deletion function
* Added toast message delay values
* Fixed ADB/MTP gadget mode
* Fixed audio initialisation for first init
* Fixed called script paths
* Fixed catalogue path due to internal change
* Fixed catalogue saving script path
* Fixed device network initialisation hang that happened on certain devices
* Fixed device speaker pop on shutdown
* Fixed friendly folder names in 2 card setup
* Fixed global internal sound path
* Fixed internal emulator path for restore scripts
* Fixed issue with sleep wake exceeding maximum brightness
* Fixed launching apps while in grid mode
* Fixed loading global user SDL mappings for Pyxel core
* Fixed reboot and shutdown halt processing order
* Fixed RetroArch configuration appending
* Fixed RetroArch temporary auto loader file removal
* Fixed saving RetroArch achievement config on application quit
* Fixed serial based RGB driver
* Fixed several RetroArch core issues
* Merged device specific control scripts
* Merged device specific tasks and remove tasks
* Modified device control script to ensure control paths exist
* Modified disclaimer and supporter credits background to black
* Modified frontend paths for internal refactor
* Modified low brightness default values
* Modified restore tasks to suit merged control scripts
* Modified RetroArch setup to purge configuration by default
* Modified secondary and external storage to rename old `MUOS` directory on first init
* Moved additional info files internally to be copied across on first init
* Moved additional media and tasks to internal
* Moved core assignments to internal storage
* Moved core launch configurations to internal storage
* Moved emulators to internal storage
* Moved languages to internal storage
* Moved muX controllers to internal storage
* Moved RetroArch and LibRetro cores to internal storage
* Moved RetroArch configurations to internal storage
* Moved syncthing API file generation to reset script
* Moved tasks, update pointers, and media paths to internal
* Moved unused emulator scripts to extra repository
* Optimised core and system assign files
* Optimised startup and function scripts
* Removed backup tasks from Task Toolkit
* Removed boot logo package install script
* Removed duplicate core listings for Dragon and Coco
* Removed empty directories and create them on first init
* Removed event emulation on Dingux start
* Removed leftover debug strings
* Removed unused backup and storage options due to internal refactor
* Removed unused glyphs and updated default theme
* Unified several device specific scripts to global script location
* Updated drastic control configuration
* Updated GB Dark theme for higher resolutions
* Updated RGB LED process
* Updated `folder.json` with new entries and spelling corrections
* Updated `global.ini` with friendly name for Atari 2600
* Updated `message.txt` with delicious food
