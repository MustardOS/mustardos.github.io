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
* Bitter_Bizarro
* duncanyoyo1
* fishcu
* illumini_85
* kloptops
* pete.woods_35330
* plaidman
* TheWalruzz
* trngaje
* xonglebongle

## Changes

* Added additional names to internal lookup table
* Added animated background repeat count for themes
* Added background process safe quit for frontend modules for faster loading
* Added collections module to replace favourites
* Added custom framebuffer set module
* Added global splash image
* Added `midssio.zip` to skipped files
* Added `mugwomp93` perfect overlays for RetroArch
* Added sdcard `skip.ini` check
* Added splash image fallbacks
* Added support global structure within theme scheme files
* Added theme compatibility via version detection
* Added theme picker compatible version checking
* Added theme version to default theme
* Added UnionFS userspace utility
* Adjusted start progress bar with background visual
* Adjust storage mount scripts for union mount
* Allow official PICO-8 `.zip` to be installed via Archive Manager
* Allow only single directory from root in collections
* Centralised frontend display initialise functions
* Centralised screenshot functionality
* Changed Pipewire to use different output sample rates instead of resampling
* Created standard CLI based shutdown and reboot method scripts
* Deprecated standard text files over formatted INI for theme scheme files
* Fixed advanced box art not working in history
* Fixed box art displaying for collection folder
* Fixed box art not loading in collections
* Fixed content description in history
* Fixed description displaying for collection folder
* Fixed Dingux Commander not launching on devices without analogue sticks
* Fixed displaying box art in history
* Fixed first item not being focused in collections
* Fixed graphical glitches on HDMI disable
* Fixed HDMI output variable reading on content exit
* Fixed issue with selecting search result
* Fixed issue with wrong item being focused on search results
* Fixed keyboard navigation when using grid mode
* Fixed low power detection script
* Fixed overwriting user overrides for RetroArch
* Fixed PICO-8 favourites not saving in launched content folder
* Fixed speaker swap issue for the RGCUBEXX-H device
* Fixed theme fallback except for factory reset
* Fixed toast messages from randomly disappearing
* Lowered default HDMI resolution mode
* Modified package internal name system to `name.txt`
* Moved `favourite` nomenclature to `collection` for themes
* Moved frontend to use SDL2 instead of fbdev
* Optimised content loading for large item lists (_30k items load in < 1s_)
* Optimised launch scripts for uniformity
* Optimised task toolkit module
* Removed favourites in favour of collections module
* Removed file entries from showing in content explore root
* Removed hardcoded device paths in archive manager
* Removed hardcoded path in collection log
* Reserved `muOS-keys` as **Port 1** of controller in RetroArch
* Separated NES and FDS systems due to ROM name overlap
* Split content explorer module into individual history and collection modules
* Update advanced-drastic
* Updated archive manager to detect catalogue and info archives
* Updated collection unique ID
* Updated default themes to support RG34XX and HDMI resolutions
* Updated Drastic layouts for updated SDL
* Updated fall back for game names for collections and history
* Updated Languages
* Updated naming of history pointers to include hash to avoid collisions
* Updated Portmaster with internal tool
* Updated preinstalled themes with version information
* Updated RetroArch cores
* Updated RetroArch GLSL shaders
* Updated RetroArch info files
* Updated RetroArch to 1.20.0
* Updated system information module
* Updated theme engine to fall back to 640x480 resolution
