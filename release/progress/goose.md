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
* arkun
* bgelmini
* Bitter_Bizarro
* chronoss09
* duncanyoyo1
* Habbening
* johnnyonflame
* koolkidcorey
* kriznick
* synthic
* xonglebongle

## Changes

* Added additional checks for union mounting
* Added additional dangerous options
* Added additional date time setting safety checks
* Added additional logging to frontend start
* Added additional navigation sounds
* Added additional zram and swap values
* Added audio initialisation retry
* Added available governor pointer to device specifics
* Added background process execution support
* Added basic network details module
* Added BGM music tracks from previous muOS versions
* Added boot logo package installer
* Added box art layering to shared function
* Added cached navigation sounds
* Added channel information to network detail module
* Added check for in use theme resources
* Added check for navigation for less than 2 items on screen
* Added check for zram/swap file before purge
* Added comparison check for idle display and idle sleep in power settings
* Added content collection export task toolkit script
* Added content tagging system
* Added custom boot logo picker to customisation menu
* Added default fallback font for `muterm`
* Added device module script with (un)load methods
* Added direct audio mute upon halt
* Added directory support to task toolkit
* Added disclaimer on first install
* Added `error` sound to collection error
* Added fallback collection export template
* Added fallback for input hold handling
* Added first install disclaimer module
* Added frontend stop/start function to global
* Added full refresh option to display initialisation
* Added Geolith core override
* Added getting ready message on first init
* Added global governor deletion on change
* Added global sound support
* Added governor and tag glyphs to default theme
* Added help and icon to collection export task
* Added hidden dangerous config module
* Added HOME to global function
* Added hostname editing and MAC changing
* Added initial Anbernic RG34XX-SP support
* Added initial MagicX Zero28 device support
* Added inline IAID calculation for network connections
* Added kernel tuning variables
* Added left/right footer navigation glyph for options
* Added live listen support to message module
* Added LR glyphs to default theme
* Added main menu launch to mux modules
* Added main menu launch to muX modules
* Added method to hide storage menu item if SD2 is not present
* Added method to refresh config on save
* Added method to reload network module before connection
* Added method to skip last play if frontend module is specified outside of default start
* Added `min_freq` and `max_freq` for device specific `ondemand` governor
* Added `muterm` SDL2 virtual terminal emulator
* Added `muxbackup` module
* Added `mux_dimension` to device init
* Added network reconnecting from suspend
* Added network throughput statistics
* Added new sounds and glyphs to default theme
* Added `NOGEN` flag to static item generation
* Added `.ogg` sound support
* Added "option" adjustment sound
* Added OSK safety checks
* Added parameter to display initialisation in specific modules
* Added physical switch support for TrimUI devices
* Added play sound to global functions
* Added PPSSPP Restore Config Task Toolkit Script
* Added quotes around RetroArch config variable for device specific control
* Added reboot and shutdown sounds
* Added reboot/shutdown sounds to default share
* Added reset button usage warning
* Added routine to stop rumble motor on content quit
* Added RTC frequency change to startup
* Added SAFE_QUIT global definition
* Added saving messages to configurable modules
* Added SDL and RA environment setup functions
* Added SDL cleanup to independent modules
* Added settings for adjusting rotation pivot
* Added shared navigation bar builder
* Added startup chime support
* Added support for devices that treat DPAD as buttons
* Added support for `EV_ABS` for TrimUI shoulder buttons
* Added sync to config changes
* Added system core and governor to options menu on content only
* Added target backup storage option
* Added terminal resource loader and optimised `run_exec` function for terminal loading
* Added TrimUI specific PPSSPP emulator
* Added `ui_count` checks on navigation
* Adjust 1024x768 default scheme Y position for messages
* Adjusted content information to shared common function
* Adjusted device specific startup scripts
* Adjusted help handler with fixed info box sound
* Adjusted random selection function to use `ui_count` on selected index
* Adjusted SSID scan log message
* Centralised device dimension variable
* Changed mGBA default governor to `ondemand`
* Disable shutting off CPU cores on TrimUI devices
* Factory reset improvements with rsync changes and progress integer validation
* Fixed adding to collections from history
* Fixed additional sleep calls
* Fixed advance settings scroll going off-screen
* Fixed assign core and governor modules
* Fixed `back` sound not playing on custom exit
* Fixed battery charging module
* Fixed brightness combo glyph interpretation
* Fixed catalogue generation script
* Fixed changing month but day not changing to a valid day
* Fixed clearing network profile items from memory
* Fixed collection screen navbar
* Fixed copy paste whoopsie with RG40XX-H start script
* Fixed credits screens
* Fixed customisation menu nav items
* Fixed customisation module with theme alternates
* Fixed default theme LED scripts
* Fixed entering date time module
* Fixed external PPSSPP controls
* Fixed factory reset LED lights
* Fixed factory reset theme font location
* Fixed freeze when device startup set to history
* Fixed freezing issue collecting content with no assigned system
* Fixed frontend taking care of used reset
* Fixed glyph icon spelling
* Fixed governor change on loading
* Fixed halt verbose messages
* Fixed HDMI resolution count
* Fixed incorrect width on Archive Manager due to not excluding file extension
* Fixed installing theme while theme music playing
* Fixed internal display check function
* Fixed issue getting stuck in grid mode
* Fixed issue loading wallpapers
* Fixed issue reloading application menu
* Fixed issue with bar values getting in the way of outside modules
* Fixed issue with brightness bar not displaying
* Fixed issue with brightness setting decreasing
* Fixed issue with centering footer elements
* Fixed issue with glyph padding for folder labels on search screen
* Fixed issue with screen freeze on themes using grid mode with focus images
* Fixed issue with writing uptime variable for sleep
* Fixed last focused navigation element
* Fixed live brightness and volume adjustments
* Fixed loading network profiles
* Fixed loading non muX applications
* Fixed local governor on core reassignment
* Fixed long text ellipse break point
* Fixed main menu grid mode
* Fixed main menu object duplication
* Fixed message label not auto sizing
* Fixed minor compile complaint issues
* Fixed missing name sound logging
* Fixed muX looking for incorrect theme path on factory reset mode
* Fixed navigation sound on first module start
* Fixed network module LR nav bar
* Fixed options navigation generation issue
* Fixed option value sound playing if there are zero options
* Fixed playing sound on no content
* Fixed saving theme resolution setting
* Fixed scaling of Dracula, Faux Dark, muVB, and Orange themes
* Fixed scrolling text when language set to Korean
* Fixed scrolling to all content options
* Fixed SD/USB hot mounting
* Fixed search module panel priority reference
* Fixed shifting text issue in OSK text area
* Fixed size to content not being disabled on Connectivity and Customisation screens
* Fixed static list navigation functions
* Fixed storage migration and sync scripts
* Fixed storage module init values
* Fixed system core assignment files
* Fixed theme installer on usage error
* Fixed TrimUI device min/max frequency pointer key
* Fixed typo in controller name
* Fixed wrong width on Applications and Task Toolkit screens when using LOTE
* Merged content and help information box functions
* Merged content governor loading to shared function
* Modified bar behaviour to avoid covering modules
* Modified charging module brightness
* Modified chime to ensure it is only played once on startup
* Modified console mode checking routine
* Modified debug log message for EXEC_MUX function
* Modified frontend paths to new internal structure
* Modified general settings to live update brightness and volume options
* Modified keepalive to disable idle network disconnect
* Modified label elements to use formatted strings
* Modified low power script to use device specific LED scripts
* Modified `muxfrontend` to be modular
* Modified network module loading to be separate functions
* Modified network timeout period to 20 seconds each
* Modified OSK key events
* Modified Retroarch audio latency
* Modified scope of grid element to focused and unfocused events
* Modified ScummVM launch script to use `gameid`
* Modified storage mount to use user defined kernel tuning variables
* Modified volume and brightness bar behaviour
* Moved BGM support to `.ogg` specific to muX
* Moved configuration fields to global options
* Moved default governor setter to global functions
* Moved file counter function to shared file
* Moved friendly folder, title update, and item label generation to shared functions
* Moved frontend audio init to own function
* Moved help message builder to UI common
* Moved internal build and version info to config structure
* Moved LVGL element hide and float flags to single define
* Moved `muxplore` to central list move function
* Moved `muxstart` to `muxmessage`
* Moved muxstart to muxmessage and fixed message issues
* Moved navigation support to `.wav` specific to muX
* Moved panel adjustments to separate function
* Moved partition mount and storage info functions to common
* Moved reboot/shutdown sound play to frontend module
* Moved SDL and RA setup to global functions
* Moved SP lid switch kill to top of halt list
* Moved task toolkit scripts to directories
* Moved theme resolution setting
* Moved viewport refresh and directory item count functions to shared file
* Optimised brightness and volume scripts
* Optimised datetime RTC module
* Optimised list navigation functions
* Optimised module element structure generation
* Optimised mounting routines
* Optimised network code maintainability
* Optimised quit and halt scripts
* Optimised SDL2 driver to flush element regions
* Optimised static panel elements in network config
* Optimised supporter screen with additional triggers
* Optimised suspend script with constant start values
* Redesigned content detail options module
* Refactored frontend to centralised define structure
* Refactored system core and governor assignment modules
* Reformatted factory reset logic
* Removed animated background option from custom module
* Removed animations and static images
* Removed any active theme terminal fonts before installing a new theme
* Removed background process from frontend
* Removed collection timing debug generation
* Removed confusing no-unroll-loops with unroll-loops in Makefiles
* Removed debug message about history and search boxart not active
* Removed direct sound from module exit
* Removed first sync on startup
* Removed global configuration backup
* Removed HDMI scripts from TrimUI devices
* Removed internal process extraction for PM content
* Removed kernel panic halt mode
* Removed leftover language strings
* Removed line break from start message
* Removed `muplay` program
* Removed network info module if there is no network capability
* Removed old HDMI code in main menu module
* Removed random theme on boot
* Removed script based BGM player
* Removed sound wait function
* Removed temporary extraction directory on startup
* Removed toast and counter label fade
* Removed unnecessary library path in frontend script
* Removed unneeded shared variables
* Removed verbose message option
* Removed waking display backlight just to power off
* Remove newlines from configuration pointers
* Replaced `fbpad` with `muterm`
* Replaced `rsync` copy with itemised file list method for factory reset
* Replaced silence WAVE with OGG
* Reverted progress method back to separate piped function
* Reverted `ripgrep` binary
* Reworked UI/UX for network information upon editing values
* Simplified key handlers to ternary operators
* Unload kernel modules on halt and suspend
* Updated and improved credits module
* Updated archive icons for default theme
* Updated assign files to remove invalid characters
* Updated bind storage script
* Updated block_input checks
* Updated `bootlogo.bmp` update function
* Updated built in fonts to TTF
* Updated Cave Story launch script
* Updated 'Clear Favorites' to 'Clear Collections' in Task Toolkit
* Updated core and governor assignment fix
* Updated current index is set before terminal execution
* Updated default `muterm` font size
* Updated default theme with larger font for reboot/shutdown images
* Updated diagnostics task toolkit script
* Updated extraction script to use frontend function
* Updated factory reset routine
* Updated factory reset scripts for new muX procedures
* Updated `ffplay` launch to start in fullscreen
* Updated font functions to use internal theme path on factory reset
* Updated input to check TrimUI switch state
* Updated languages
* Updated launch scripts for PPSSPP on TrimUI devices
* Updated logic for collection freeze on boot
* Updated message padding default theme
* Updated messages to include header for new muX message module
* Updated `muxstart` to support message file on loop
* Updated muX with a major refactored frontend to work as a single process
* Updated option and value items with index support
* Updated options to use info items to launch configurations
* Updated package picker scripts to use frontend function
* Updated pipewire script to run device specific audio script
* Updated preinstalled global music
* Updated pre-installed task scripts to use frontend function
* Updated RetroArch to 1.21.0
* Updated ScummVM launch script
* Updated the fix for launching PPSSPP after Vulkan is set on RG devices
* Updated theme resolution setting
* Updated unknown module handling
