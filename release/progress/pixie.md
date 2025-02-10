---
layout: default
title: 2502.0 PIXIE
permalink: /release/progress/pixie
parent: Progress
grand_parent: Release
nav_order: 1
has_toc: false
---

# muOS 2502.0 Pixie

_<small>Date Not Confirmed</small>_

#### _Pronunciation_

/ˌpɪk ˈsiː/

## Download Full Image

_Not ready just yet_

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

* antikk
* cmclark00
* Bitter_Bizarro
* duncanyoyo1
* FarisFiroz
* fishcu
* illumini_85
* kloptops
* pete.woods_35330
* plaidman
* TheWalruzz
* trngaje
* videah
* xonglebongle

## Changes

* Added additional names to internal lookup table
* Added animated background repeat count for themes
* Added background process safe quit for frontend modules for faster loading
* Added basic gradient support to background and grid cells
* Added collections module to replace favourites
* Added custom event input type reading
* Added custom framebuffer set module
* Added device folders for brick and teaspoon
* Added extra input value descriptors
* Added global splash image
* Added icon for theme alternates
* Added `midssio.zip` to skipped files
* Added `mugwomp93` perfect overlays for RetroArch
* Added pause menu exit functionality to PPSSPP
* Added sdcard `skip.ini` check
* Added splash image fallbacks
* Added subfolder support to `muxpicker`
* Added supporter music to credits when viewed from information module
* Added support for 1024x768 to default themes
* Added support for grid cell drop shadow
* Added support for theme alternates
* Added support global structure within theme scheme files
* Added theme alternates menu option
* Added theme compatibility via version detection
* Added theme gradient
* Added theme picker compatible version checking
* Added theme version to default theme
* Added UnionFS userspace utility
* Adjusted device configurations and scripts to use new input descriptors
* Adjusted start progress bar with background visual
* Adjust storage mount scripts for union mount
* Allow for outside set custom defined idle power values
* Allow official PICO-8 `.zip` to be installed via Archive Manager
* Allow only single directory from root in collections
* Centralised frontend display initialise functions
* Centralised screenshot functionality
* Changed Pipewire to use different output sample rates instead of resampling
* Created standard CLI based shutdown and reboot method scripts
* Deprecated standard text files over formatted INI for theme scheme files
* Enabled network module by default
* Fixed advanced box art not working in history
* Fixed box art displaying for collection folder
* Fixed box art not loading in collections
* Fixed content description in history
* Fixed CPU core count on sleep resume
* Fixed description displaying for collection folder
* Fixed Dingux Commander not launching on devices without analogue sticks
* Fixed displaying box art in history
* Fixed first item not being focused in collections
* Fixed graphical glitches on HDMI disable
* Fixed HDMI output variable reading on content exit
* Fixed issue on last/resume boot with external content
* Fixed issue with loading certain theme scheme files
* Fixed issue with selecting search result
* Fixed issue with wrong item being focused on search results
* Fixed keyboard navigation when using grid mode
* Fixed low power detection script
* Fixed navigation bugs in grid mode
* Fixed navigation glyphs for `muxarchive` and `muxtask` modules
* Fixed overwriting user overrides for RetroArch
* Fixed PICO-8 favourites not saving in launched content folder
* Fixed spacing in file counter for default theme
* Fixed speaker swap issue for the RGCUBEXX-H device
* Fixed theme fallback except for factory reset
* Fixed theme previews with new theme structure for Pixie
* Fixed toast messages from randomly disappearing
* Fixed unplug to power off issue in charge mode
* Initial Pipewire work for `a113p` devices
* Lowered default HDMI resolution mode
* Modified customisation package extraction script to use specific extensions
* Modified package internal name system to `name.txt`
* Moved `favourite` nomenclature to `collection` for themes
* Moved friendly folder to be a lowercase check
* Moved frontend to use SDL2 instead of fbdev
* Optimised content loading for large item lists (_30k items load in < 1s_)
* Optimised launch scripts for uniformity
* Optimised task toolkit module
* Removed active option in network as the network will always be active
* Removed favourites in favour of collections module
* Removed file entries from showing in content explore root
* Removed hardcoded device paths in archive manager
* Removed hardcoded path in collection log
* Removed SDL clear render routine in LVGL display window update
* Reserved `muOS-keys` as **Port 1** of controller in RetroArch
* Restrict archive manager to specific extensions
* Restrict customisation picker to specific archive extensions
* Sanitise slash characters in network profile names
* Separated NES and FDS systems due to ROM name overlap
* Sorted options for alternate themes
* Split content explorer module into individual history and collection modules
* Swapped grep 'deeplay' with 'muOS-keys'
* Update advanced-drastic
* Updated archive extensions to match frontend
* Updated archive manager to detect catalogue and info archives
* Updated brick input descriptors
* Updated collection unique ID
* Updated default themes to new Pixie structure
* Updated default themes to support RG34XX and HDMI resolutions
* Updated default theme with 1024x768 resolution
* Updated Drastic layouts for updated SDL
* Updated fall back for game names for collections and history
* Updated Languages
* Updated `muxcharge` and `muxsplash` to use background theme colours
* Updated `muxsplash` to centre image
* Updated naming of history pointers to include hash to avoid collisions
* Updated Portmaster with internal tool
* Updated preinstalled themes with version information
* Updated RetroArch cores
* Updated RetroArch GLSL shaders
* Updated RetroArch info files
* Updated RetroArch to 1.20.0
* Updated system information module
* Updated theme engine to fall back to 640x480 resolution
* Updated theme loading to use new Pixie theme structure
