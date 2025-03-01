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
* baxysquare
* bgelmini
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

* Added additional modes to brightness and volume settings
* Added additional names to internal lookup table
* Added animated background repeat count for themes
* Added antialiasing toggle for themes
* Added audio mute on idle detection
* Added background process safe quit for frontend modules for faster loading
* Added basic gradient support to background and grid cells
* Added collections module to replace favourites
* Added common input options for input initialisation
* Added custom event input type reading
* Added custom framebuffer set module
* Added default input combo to common input initialisation
* Added `default.png` fallback for static images
* Added device folders for brick and teaspoon
* Added dither and blur options to background gradient
* Added double buffering back into display initialisation
* Added extra input value descriptors
* Added force install option for themes
* Added global splash image
* Added gradient and dithering to default theme
* Added icon for theme alternates
* Added input tester glyph recolour theme settings
* Added input tester image glyphs
* Added internal display blanking on zero brightness
* Added keyboard support for muX frontend
* Added keyboard support OSK
* Added menu button to input tester
* Added `midssio.zip` to skipped files
* Added MinUI compatibility to `assign.json`
* Added missing image for theme previews
* Added `mugwomp93` perfect overlays for RetroArch
* Added muX blanking element for zero brightness
* Added on-device screenshot manager
* Added open sourced GBA BIOS for compatibility
* Added pause menu exit functionality to PPSSPP
* Added sdcard `skip.ini` check
* Added SDL rotation and zoom method to display driver
* Added short name support for `muxapp` and `muxlaunch` grid mode
* Added space to file counter default theme
* Added specific volume set to general settings
* Added splash image fallbacks
* Added SSID check for network startup
* Added storage space module for checking free space
* Added subfolder support to `muxpicker`
* Added supporter music to credits when viewed from information module
* Added support for 1024x768 to default themes
* Added support for grid cell drop shadow
* Added support for theme alternates
* Added support global structure within theme scheme files
* Added Syncthing scanner process on quit
* Added tasks for toggling grid mode
* Added theme alternates menu option
* Added theme compatibility via version detection
* Added theme gradient
* Added theme picker compatible version checking
* Added theme resolution check
* Added theme support for RGB settings for alternates
* Added theme version to default theme
* Added UnionFS userspace utility
* Added zoom variable to device configurations
* Adjusted device configurations and scripts to use new input descriptors
* Adjusted start progress bar with background visual
* Adjust storage mount scripts for union mount
* Allow for outside set custom defined idle power values
* Allow official PICO-8 `.zip` to be installed via Archive Manager
* Allow only single directory from root in collections
* Centralised frontend display initialise functions
* Centralised screenshot functionality
* Changed default HDMI modes to reduce external display incompatibilities
* Changed OSF to support both reboot and shutdown methods
* Changed Pipewire to use different output sample rates instead of resampling
* Cleaned default theme charging image
* Cleared explore directory before launching muxplore
* Closed additional joystick events on module exit
* Configuration Menu Refactor
* Created standard CLI based shutdown and reboot method scripts
* Deprecated standard text files over formatted INI for theme scheme files
* Enabled network module by default
* Fixed advanced box art not working in history
* Fixed and updated supporter credits
* Fixed audio resuming sound on sleep shutdown
* Fixed box art displaying for collection folder
* Fixed box art not loading in collections
* Fixed charger text Y position on default PIXIE theme
* Fixed content description in history
* Fixed CPU core count on sleep resume
* Fixed custom module navigation
* Fixed description displaying for collection folder
* Fixed Dingux Commander not launching on devices without analogue sticks
* Fixed displaying box art in history
* Fixed error with restore volume variable for Pipewire initialisation
* Fixed extra navigation glyphs showing if no screenshots available
* Fixed first item not being focused in collections
* Fixed folder count and collections
* Fixed graphical glitches on HDMI disable
* Fixed HDMI output variable reading on content exit
* Fixed input testing module refresh
* Fixed installation of incorrect versioned theme
* Fixed issue exiting customisation menu
* Fixed issue on last/resume boot with external content
* Fixed issue with background gradient overlap
* Fixed issue with collection start
* Fixed issue with launching app in grid mode
* Fixed issue with loading certain theme scheme files
* Fixed issue with RG28XX framebuffer rotation
* Fixed issue with selecting search result
* Fixed issue with wrong item being focused on search results
* Fixed keyboard navigation when using grid mode
* Fixed launching applications when using passlock
* Fixed loading current alternative with factory reset mode
* Fixed low power detection script
* Fixed `muxapp` to only use grid names in grid mode
* Fixed `muxstart` information wallpaper image location
* Fixed navigation bugs in grid mode
* Fixed navigation glyphs for `muxarchive` and `muxtask` modules
* Fixed overwriting user overrides for RetroArch
* Fixed passlock screen
* Fixed PICO-8 favourites not saving in launched content folder
* Fixed pre-installed archives
* Fixed RG40XX device rotation in device configuration
* Fixed RGCUBEXX initial rotation value
* Fixed search display name
* Fixed spacing in file counter for default theme
* Fixed speaker swap issue for the RGCUBEXX-H device
* Fixed SSID scanning to show spaces correctly
* Fixed theme fallback except for factory reset
* Fixed theme previews with new theme structure for Pixie
* Fixed toast messages from randomly disappearing
* Fixed unplug to power off issue in charge mode
* Fixed volume and brightness bar location default theme
* Fixed volume variable setter
* Ignore idle script functions during factory reset
* Initial Pipewire work for `a113p` devices
* Lowered default HDMI resolution mode
* Modified customisation package extraction script to use specific extensions
* Modified device scripts to get volume from global config
* Modified package internal name system to `name.txt`
* Moved and renamed theme picker and theme alternative options
* Moved `favourite` nomenclature to `collection` for themes
* Moved friendly folder to be a lowercase check
* Moved frontend to use SDL2 instead of fbdev
* Moved input tester values to use image glyphs instead of hardcoded font
* Moved refresh timer intialisation
* Optimised content loading for large item lists (_30k items load in < 1s_)
* Optimised launch scripts for uniformity
* Optimised task toolkit module
* Reformatted theme initialisers
* Removed active option in network as the network will always be active
* Removed `awesome_small` font as it is no longer required
* Removed favourites in favour of collections module
* Removed file entries from showing in content explore root
* Removed `gamepad` font as it is no longer required
* Removed hardcoded device paths in archive manager
* Removed hardcoded path in collection log
* Removed referenced `gamepad` and `awesome_small` fonts
* Removed SDL clear render routine in LVGL display window update
* Renamed internal assign location definition for uniformity
* Reserved `muOS-keys` as **Port 1** of controller in RetroArch
* Restrict archive manager to specific extensions
* Restrict customisation picker to specific archive extensions
* Sanitise slash characters in network profile names
* Scaled theme resolution to fit on HDMI
* Scaled theme supported resolution to target resolution
* SDL display driver cleanup
* Separated NES and FDS systems due to ROM name overlap
* Sorted options for alternate themes
* Split content explorer module into individual history and collection modules
* Stop background music if credits are played
* Swapped archive extraction return values to reduce mild confusion
* Swapped grep 'deeplay' with 'muOS-keys'
* Update advanced-drastic
* Update archive manager glyphs
* Updated archive extensions to match frontend
* Updated archive manager to detect catalogue and info archives
* Updated archive manager to support scrolling text
* Updated BIOS for PUAE RetroArch core
* Updated brick input descriptors
* Updated collection unique ID
* Updated content description to scroll manually
* Updated default themes to new Pixie structure
* Updated default themes to support RG34XX and HDMI resolutions
* Updated default theme to include alternate RGB
* Updated default theme with 1024x768 resolution
* Updated Discord presence integration
* Updated Drastic layouts
* Updated Drastic SDL2 library
* Update default theme overrides
* Updated extraction script to use switch statements
* Updated extract script to with new extensions
* Updated fall back for game names for collections and history
* Updated gradient settings for HDMI resolution
* Updated Languages
* Updated `muxcharge` and `muxsplash` to use background theme colours
* Updated `muxsplash` to centre image
* Updated naming of history pointers to include hash to avoid collisions
* Updated PortMaster
* Updated preinstalled themes with version information
* Updated RetroArch cores
* Updated RetroArch GLSL shaders
* Updated RetroArch info files
* Updated RetroArch to 1.20.0
* Updated system information module
* Updated theme engine to fall back to 640x480 resolution
* Updated theme loading to use new Pixie theme structure
* Updated theme overrides to support all settings
* Updated volume and brightness bar to use icon images
