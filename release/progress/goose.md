---
layout: default
title: 250?.0 GOOSE
permalink: /release/progress/goose
parent: Progress
grand_parent: Release
nav_order: 1
has_toc: false
---

# muOS 250?.0 Goose

#### _Pronunciation_

/goo͞s/

## Download

_Not yet available!_

{: .important }
> As this is a major release you will be required to reflash to update your device to this version. Updates are only
> for subsequent releases within the same version.

<hr>

## Support muOS

Love muOS? Want to help us on this **crazy** journey? Here's how to get involved.

**This can be done a few ways:**

* Be helpful around the Discord community server
* [Contribute code directly to our GitHub repositories](https://github.com/MustardOS)
* Spread the word about muOS and all its features

**Or you can join the testing crew directly by:**

* Supporting us via Ko-fi subscription
* Boosting the Discord community server

<hr>

## Contributors

* acmeplus
* antikk
* Bitter_Bizarro
* Habbening
* koolkidcorey
* xonglebongle

## Changes

* Added additional navigation sounds
* Added back 1080p HDMI support
* Added background process execution support
* Added cached navigation sounds
* Added default fallback font for `muterm`
* Added fallback for input hold handling
* Added frontend stop/start function to global
* Added global sound support
* Added method to hide storage menu item if SD2 is not present
* Added method to refresh config on save
* Added method to skip last play if frontend module is specified outside of default start
* Added `min_freq` and `max_freq` device specific defaults
* Added `min_freq` and `max_freq` for device specific `ondemand` governor
* Added `muterm` SDL2 virtual terminal emulator
* Added `.ogg` sound support
* Added physical switch support for TrimUI devices
* Added support for `EV_ABS` for TrimUI shoulder buttons
* Added terminal resource loader and optimised `run_exec` function for terminal loading
* Added TrimUI specific PPSSPP emulator
* Added `ui_count` checks on navigation
* Factory reset improvements with rsync changes and progress integer validation
* Fixed assign core and governor modules
* Fixed brightness combo glyph interpretation
* Fixed clearing network profile items from memory
* Fixed factory reset theme font location
* Fixed incorrect width on Archive Manager due to not excluding file extension
* Fixed issue getting stuck in grid mode
* Fixed issue loading wallpapers
* Fixed issue reloading application menu
* Fixed issue with brightness bar not displaying
* Fixed issue with centering footer elements
* Fixed issue with glyph padding for folder labels on search screen
* Fixed loading network profiles
* Fixed loading non muX applications
* Fixed message label not auto sizing
* Fixed muX looking for incorrect theme path on factory reset mode
* Fixed scaling of Dracula, Faux Dark, muVB, and Orange themes
* Fixed SD/USB hot mounting
* Fixed shifting text issue in OSK text area
* Fixed size to content not being disabled on Connectivity and Customisation screens
* Fixed wrong width on Applications and Task Toolkit screens when using language other than English
* Modified debug log message for EXEC_MUX function
* Modified network timeout period to 20 seconds each
* Moved BGM support to `.ogg` specific to muX
* Moved default governor setter to global functions
* Moved navigation support to `.wav` specific to muX
* Moved theme resolution setting
* Moved verbose messages down a bit on 1024x768 resolution
* Optimised datetime RTC module
* Optimised list navigation functions
* Optimised mounting routines
* Removed any active theme terminal fonts before installing a new theme
* Removed line break from start message
* Removed `muplay` program
* Removed script based BGM player
* Removed temporary extraction directory on startup
* Removed unnecessary library path in frontend script
* Replaced `fbpad` with `muterm`
* Replaced silence WAVE with OGG
* Reverted progress method back to separate piped function
* Reverted `ripgrep` binary
* Updated and improved credits module
* Updated archive icons for default theme
* Updated `bootlogo.bmp` update function
* Updated current index is set before terminal execution
* Updated default theme with larger font for reboot/shutdown images
* Updated default `muterm` font size
* Updated extraction script to use frontend function
* Updated factory reset routine
* Updated factory reset scripts for new muX procedures
* Updated font functions to use internal theme path on factory reset
* Updated languages
* Updated launch scripts for PPSSPP on TrimUI devices
* Updated message padding default theme
* Updated messages to include header for new muX message module
* Updated `muxstart` to support message file on loop
* Updated muX with a major refactored frontend to work as a single process
* Updated package picker scripts to use frontend function
* Updated preinstalled global music
* Updated pre-installed task scripts to use frontend function
* Updated RetroArch to 1.21.0
* Updated theme resolution setting
* Updated unknown module handling
