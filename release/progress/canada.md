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

* Added additional archive support
* Added additional RetroArch restore functions to task toolkit script
* Added archive extraction with top level pattern support
* Added boot logo update function to global
* Added built-in application support
* Added check for free space on destination
* Added check for temporary RetroArch autoload config deletion
* Added control script to remove redundant Task Toolkit scripts
* Added copy file global function
* Added customisation option for hiding grid mode box art
* Added debug pass for default theme modification
* Added default MustardOS theme protection
* Added direct 2048 launch override (_as an example_)
* Added emulator archive extractor
* Added file stream fnv-1a hash calculation
* Added FNV-1a hash calculation of default theme
* Added "game" support bind mount to PPSSPP emulator
* Added Genesis Plus GX Expanded
* Added missing help strings
* Added network disconnect and module unload on shutdown
* Added override path to archive extractor patterns
* Added plugin based system for archive extractors
* Added separate zip global function script
* Added string capitalisation global function
* Added theme alternative extraction method
* Added theme and package deletion function
* Added theme catalogue image support
* Added toast message delay values
* Added top level directory structure support for general archives
* Centralised device specific boot logo images
* Centralised device specific start scripts
* Fixed ADB/MTP gadget mode
* Fixed archive specific package extractions
* Fixed audio initialisation for first init
* Fixed called script paths
* Fixed catalogue generation script
* Fixed catalogue path due to internal change
* Fixed catalogue saving script path
* Fixed core assigns from Collection and History modules
* Fixed device network initialisation hang that happened on certain devices
* Fixed device speaker pop on shutdown
* Fixed friendly folder names in 2 card setup
* Fixed global internal sound path
* Fixed history and collection glyph on Content Explore module
* Fixed internal emulator path for restore scripts
* Fixed issue with glyphs not showing if cores were cleared
* Fixed issue with sleep wake exceeding maximum brightness
* Fixed launching apps while in grid mode
* Fixed LED control change function
* Fixed loading global user SDL mappings for Pyxel core
* Fixed picker font deletion
* Fixed PipeWire console mode audio adjustments
* Fixed PortMaster extraction location
* Fixed PPSSPP archive extraction
* Fixed reboot and shutdown halt processing order
* Fixed RetroArch configuration appending
* Fixed RetroArch temporary auto loader file removal
* Fixed saving RetroArch achievement config on application quit
* Fixed screenshot bind mount
* Fixed serial based RGB driver
* Fixed several RetroArch core issues
* Fixed storage space bar percentage calculation
* Fixed Task Toolkit restore scripts
* Fixed theme previews
* Merged device specific control scripts
* Merged device specific tasks and remove tasks
* Modified backup module to suit archive extraction format
* Modified backup script to use new archive functions
* Modified backup script to utilise new archive format
* Modified device control script to ensure control paths exist
* Modified disclaimer and supporter credits background to black
* Modified first install reset script
* Modified frontend paths for internal refactor
* Modified internal theme path
* Modified low brightness default values
* Modified PipeWire to get NodeID from dumped information
* Modified restore tasks to suit merged control scripts
* Modified RetroArch launch functions and scripts to use symlinked RetroArch paths
* Modified RetroArch launch to purge potential existing home config directory
* Modified RetroArch setup to purge configuration by default
* Modified scripts to use global share and storage paths
* Modified secondary and external storage to rename old `MUOS` directory on first init
* Modified suspend and device scripts with `setalpha` for TrimUI shenanigans
* Modified suspend to reload network modules on sleep wake
* Modified theme installer to use global boot logo update function
* Moved additional info files internally to be copied across on first init
* Moved additional media and tasks to internal
* Moved core assignments to internal storage
* Moved core launch configurations to internal storage
* Moved default and pre-installed themes to internal storage
* Moved emulators to internal storage
* Moved languages to internal storage
* Moved muX controllers to internal storage
* Moved RetroArch and LibRetro cores to internal storage
* Moved RetroArch configurations to internal storage
* Moved syncthing API file generation to reset script
* Moved tasks, update pointers, and media paths to internal
* Moved unused emulator scripts to extra repository
* Optimised archive extraction methods
* Optimised core and system assign files
* Optimised LED control change function
* Optimised startup and function scripts
* Removed active speaker process from audio stack
* Removed backup tasks from Task Toolkit
* Removed boot logo package install script
* Removed boot logo update routine from custom module
* Removed card mode switch for USB external devices
* Removed drastic themes and assets from TrimUI layouts
* Removed duplicate core listings for Dragon and Coco
* Removed empty directories and create them on first init
* Removed event emulation on Dingux start
* Removed leftover debug strings
* Removed leftover network tasks
* Removed PPSSPP device prefix
* Removed PPSSPP minimum frequency setter
* Removed unused backup and storage options due to internal refactor
* Removed unused glyphs and updated default theme
* Unified several device specific scripts to global script location
* Updated backup module with additional backup methods
* Updated Collection and History pointers to use full path to content
* Updated drastic control configuration
* Updated `folder.json` with new entries and spelling corrections
* Updated GB Dark theme for higher resolutions
* Updated `global.ini` with friendly name for Atari 2600
* Updated `message.txt` with delicious food
* Updated package installer scripts
* Updated PortMaster restore task toolkit script to use new archive extractor
* Updated PPSSPP to 1.19.3
* Updated RGB LED process
* Updated specific Libretro launch scripts
* Updated storage info generation function
