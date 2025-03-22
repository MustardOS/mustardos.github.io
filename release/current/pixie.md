---
layout: default
title: 2502.0 PIXIE
permalink: /release/current/pixie
parent: Current
grand_parent: Release
nav_order: 1
has_toc: false
---

# muOS 2502.0 Pixie

#### _Pronunciation_

/ˌpɪk ˈsiː/

## Download **Full Image**

[Download from Gofile](https://gofile.io/d/qsjQVI){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }
[Download from MEGA](https://mega.nz/folder/suBlXAiZ#xIVmGP7M8aly-aHmRDecRw){: .btn .fs-5 .mb-4 .mb-md-0 }

#### OneDrive Mirror - Provided by IonutBarna
[Download from OneDrive](https://1drv.ms/f/c/4b74904a7f19bbfb/EuAq_yV9NelAhxFXs02JefcB_1xr41BQwLj59MGYB5kYKw){: .btn .fs-5 .mb-4 .mb-md-0 }

{: .important }
> If you are updating from Banana please ensure that you do **NOT** have any themes or RetroArch configurations as
> major changes have occurred.  You can find most converted themes from https://theme.muos.dev page.

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

* Added activity tracking
* Added additional modes to brightness and volume settings
* Added additional names to internal lookup table
* Added animated background repeat count for themes
* Added antialiasing toggle for themes
* Added application container support
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
* Added display backlight change on system suspend
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
* Added keyboard support for muX frontend and OSK
* Added labels to default theme splash screens
* Added menu button to input tester
* Added `midssio.zip` to skipped files
* Added MinUI compatibility to `assign.json`
* Added missing image for theme previews
* Added `mugwomp93` perfect overlays for RetroArch
* Added muX blanking element for zero brightness
* Added on-device screenshot manager
* Added open sourced GBA BIOS for compatibility
* Added overlay image and transparency visual options
* Added pause menu exit functionality to PPSSPP
* Added sdcard `skip.ini` check
* Added `sdljoymap` and `sdljoytest` binaries
* Added SDL rotation and zoom method to display driver
* Added setting to toggle activity tracker
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
* Added support for resolution specific overlays
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
* Added Zram support
* Adjusted device configurations and scripts to use new input descriptors
* Adjusted device specific audio and brightness input scripts
* Adjusted start progress bar with background visual
* Adjust storage mount scripts for union mount
* Allow for outside set custom defined idle power values
* Allow official PICO-8 archive to be installed via Archive Manager
  * _Rename extension to `.muxzip` for it to show!_
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
* Fixed display blanking and improved sleep triggers
* Fixed displaying box art in history
* Fixed empty SSID scans showing
* Fixed error with restore volume variable for Pipewire initialisation
* Fixed extra navigation glyphs showing if no screenshots available
* Fixed factory reset mode change
* Fixed first item not being focused in collections
* Fixed folder count and collections
* Fixed framebuffer issue with PPSSPP
* Fixed graphical glitches on HDMI disable
* Fixed HDMI Console Mode audio output
* Fixed HDMI detection on device startup
* Fixed HDMI framebuffer output
* Fixed HDMI output variable reading on content exit
* Fixed HDMI scaling at all resolutions
* Fixed input testing module refresh
* Fixed installation of incorrect versioned theme
* Fixed invalid reference in `muxtask`
* Fixed issue exiting customisation menu
* Fixed issue on last/resume boot with external content
* Fixed issue with background gradient overlap
* Fixed issue with collection start
* Fixed issue with device being stuck in console mode
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
* Fixed RGB Controller hotkey location
* Fixed RGCUBEXX initial rotation value
* Fixed scrolling to previous directory in grid mode
* Fixed search result display name fullpath issue
* Fixed spacing in file counter for default theme
* Fixed speaker swap issue for the RGCUBEXX-H device
* Fixed SSID scanning to show spaces correctly
* Fixed SSID scan results with certain bytecodes
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
* Modified HDMI enable function for Console Mode startup
* Modified LED control to not start in Console Mode
* Modified package internal name system to `name.txt`
* Modified safe quit to close module earlier
* Modified startup script to init audio/brightness/led functions
* Moved and renamed theme picker and theme alternative options
* Moved `favourite` nomenclature to `collection` for themes
* Moved friendly folder to be a lowercase check
* Moved frontend to use SDL2 instead of fbdev
* Moved input tester values to use image glyphs instead of hardcoded font
* Moved random theme from startup to shutdown
* Moved refresh timer intialisation
* Moved to alsathread for Flycast cores
* Moved to sleep suspend using RTC method
* Optimised content loading for large item lists (_30k items load in < 1s_)
* Optimised launch scripts for uniformity
* Optimised task toolkit module
* Reformatted theme initialisers
* Removed active option in network as the network will always be active
* Removed `awesome_small` and `gamepad` hardcoded fonts as they are no longer required
* Removed favourites in favour of collections module
* Removed file entries from showing in content explore root
* Removed hardcoded device paths in archive manager
* Removed hardcoded path in collection log
* Removed HDMI and network enabled variable instances
* Removed HDMI enable toggle for Console Mode
* Removed network enable toggle global variable
* Removed resolution switch for PPSSPP
* Removed SDL blitter from external ScummVM launcher
* Removed SDL clear render routine in LVGL display window update
* Renamed device specific RTC variables
* Renamed internal assign location definition for uniformity
* Reserved `muOS-keys` as **Port 1** of controller in RetroArch
* Restrict archive manager to specific extensions
* Restrict customisation picker to specific archive extensions
* Reworked suspend script as to not trigger DPAD switch
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
* Updated `extract.sh` for other archive types
* Updated fall back for game names for collections and history
* Updated file counter to use LVGL for fade
* Updated gradient settings for HDMI resolution
* Updated HDMI output to only show supported theme resolutions
* Updated input paths for audio and brightness controls
* Updated Languages
* Updated `muxcharge` and `muxsplash` to use background theme colours
* Updated `muxsplash` to centre image
* Updated naming of history pointers to include hash to avoid collisions
* Updated PortMaster
* Updated PPSSPP with UI scaling
* Updated preinstalled themes with version information
* Updated RetroArch cores
* Updated RetroArch GLSL shaders
* Updated RetroArch info files
* Updated RetroArch to `c94e4cf`
* Updated system information module
* Updated theme engine to fall back to 640x480 resolution
* Updated theme loading to use new Pixie theme structure
* Updated theme overrides to support all settings
* Updated theme resolution check for any resolution
* Updated volume and brightness bar to use icon images
