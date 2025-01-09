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
* pete.woods_35330
* trngaje
* xonglebongle

## Changes

* Added UnionFS userspace utility
* Added `mugwomp93` perfect overlays for RetroArch
* Adjust storage mount scripts for union mount
* Adjusted start progress bar with background visual
* Centralise screenshot functionality
* Deprecated standard text files over formatted INI for theme scheme files
* Fixed Dingux Commander not launching on devices without analogue sticks
* Fixed advanced box art not working in history
* Fixed box art displaying for collection folder
* Fixed box art not loading in collections
* Fixed content description in history
* Fixed description displaying for collection folder
* Fixed displaying box art in history
* Fixed first item not being focused in collections
* Fixed keyboard navigation when using grid mode
* Fixed low power detection script
* Fixed overwriting user overrides for RetroArch
* Fixed theme fallback except for factory reset
* Modified package internal name system to `name.txt`
* Moved `favourite` nomenclature to `collection` for themes
* Optimise launch scripts for uniformity
* Optimised task toolkit module
* Removed hardcoded device paths in archive manager
* Removed hardcoded path in collection log
* Reserved `muOS-keys` as **Port 1** of controller in RetroArch
* Separated NES and FDS systems due to ROM name overlap
* Split content explorer module into individual history and collection modules
* Update advanced-drastic
* Updated Drastic layouts for updated SDL
* Updated Portmaster with internal tool
* Updated RetroArch cores
* Updated RetroArch shaders
* Updated RetroArch to 1.20.0
* Updated collection unique ID
* Updated default themes to support RG34XX and HDMI resolutions
* Updated fall back for game names for collections and history
* Updated naming of history pointers to include hash to avoid collisions
* Updated theme engine to fall back to 640x480 resolution
