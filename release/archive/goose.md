---
layout: default
title: 2508.0 GOOSE
permalink: /release/archive/goose
parent: Archive
grand_parent: Release
nav_order: 1
has_toc: false
---

# MustardOS 2508.0 Goose

#### _Pronunciation_

/goo͞s/

## Download

[Download from Gofile](https://gofile.io/d/VAfGUZ){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }
[Download from MEGA](https://mega.nz/folder/kzRGRbpK#CHR1G3KlaHdcdm590Wg6ag){: .btn .fs-5 .mb-4 .mb-md-0 }

{: .important }
> If you are updating from Banana please ensure that you do **NOT** have any themes or RetroArch configurations as
> major changes have occurred. You can find all compatible themes from the
> <a href="https://theme.muos.dev">https://theme.muos.dev</a> page or from the on-device theme download module.

{: .important }
> As this is a major release you will be required to reflash to update your device to this version. Updates are only
> for subsequent releases within the same version.

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

## Fun Facts

* There are over **600** changes with **21** contributors
* This release took over **6 months** of hard work and dedication
* Rotated screens are still **annoying** as ever
* Compiling specific emulators _still_ suck...
* The goose is a highly social animal and is often seen in large groups known as flocks or gaggles. They have a strong
  sense of community and rely on their flock for protection, foraging, and navigation during migration. They communicate
  with each other through a variety of vocalizations, including honking and hissing sounds.

***

## Contributors

* acmeplus
* aeverdyn
* antikk
* arkun
* bgelmini
* bitter_bizarro
* cart-su
* chronoss09
* duncanyoyo1
* habbening
* imcokeman
* incognitoman
* johnnyonflame
* koolkidcorey
* kriznick
* mikhailzrick
* synthic
* voodatari
* wakeboxer
* xonglebongle
* zarquon

***

## Changes

### Added

* Added active speaker module
* Added active storage check on mount and eject
* Added Activity Tracker to backup options
* Added additional checks for clearing governor and control scheme files
* Added additional checks for union mounting
* Added additional dangerous options
* Added additional date time setting safety checks
* Added additional loading state options
* Added additional logging to frontend start
* Added additional navigation sounds
* Added additional "Wi-Fi Enable" scripts to Task Toolkit
* Added additional zram and swap values
* Added assigned core information to launch pointers
* Added audio initialisation retry
* Added automatic friendly core assign generator
* Added available governor pointer to device specifics
* Added background process execution support
* Added backup module to kiosk modes
* Added backwards compatible theme checking
* Added basic network details module
* Added BGM music tracks from previous MustardOS versions
* Added blank check to brightness change only for idle mode
* Added blank overlay due to weird RetroArch performance delay
* Added blitter skipping to SDL environment export
* Added boot logo package installer
* Added box art layering to shared function
* Added brightness clamping to potentially fix drops in general settings
* Added cached navigation sounds
* Added catalogue clear task toolkit scripts
* Added catalogue match check script
* Added channel information to network detail module
* Added charger specific check to blank LCD
* Added check for display suspend option for LCD toggle
* Added check for in use theme resources
* Added check for navigation for less than 2 items on screen
* Added check for zram/swap file before purge
* Added chime done to last/resume content launch
* Added clear playtime data task toolkit script
* Added collection access kiosk variable
* Added collection modification toggles to kiosk mode
* Added comparison check for idle display and idle sleep in power settings
* Added config and device variable collection to diagnostics
* Added content collection export Task Toolkit script
* Added content control scheme mapping functionality
* Added content launch override script support
* Added content loader handler to ignore RetroArch auto load
* Added content tagging system
* Added custom boot logo picker to customisation menu
* Added custom name lookup by content directory name
* Added custom toggle for content shuffle
* Added default fallback font for `muterm`
* Added device lid switch toggle to advanced options
* Added device module script with (un)load methods
* Added device RGB light toggle to general settings
* Added device specific RetroArch global shaders
* Added direct audio mute upon halt
* Added directory slash detection for skip file
* Added directory support to Task Toolkit
* Added disclaimer on first install
* Added display suspend variable to advanced settings
* Added Drastic layout files for Brick
* Added dynamic `gamecontrollerdb.txt` scheme support
* Added `error` sound to collection error
* Added "External" option to Device Backup
* Added extra core download mechanism
* Added fallback collection export template
* Added fallback for input hold handling
* Added file check and sync to global function script
* Added file locking to brightness script
* Added filtering to theme downloader
* Added first boot screen refresh
* Added first install disclaimer module
* Added forced reset brightness
* Added friendly association pointers to assign files
* Added frontend refresh to system information module
* Added frontend stop/start function to global
* Added full refresh option to display initialisation
* Added `gamecontrollerdb.txt` scheme to backup and storage modules
* Added Geolith core override
* Added getting ready message on first init
* Added global governor deletion on change
* Added global function init to root login profile
* Added global sound support
* Added glyph tag file check for storage mounts
* Added governor and control scheme support for applications
* Added governor and tag glyphs to default theme
* Added hardcoded calibration files for TrimUI input modules
* Added help and icon to collection export task
* Added hidden dangerous config module
* Added hidden device specific settings module
* Added history removal toggle to kiosk mode
* Added HOME to global function
* Added hostfile restore on network connection
* Added hostname editing and MAC changing
* Added hotkey and frontend safety stops to system halt
* Added hotkey service to global function
* Added idle mute configuration variable and modified idle script
* Added initial Anbernic RG34XX-SP support
* Added initial rumble for TrimUI and modified rumble path
* Added inline IAID calculation for network connections
* Added joystick GUID grabber binary
* Added junk file cleanup on storage mount
* Added kernel tuning variables
* Added kiosk mode global check
* Added kiosk passing for reboot and shutdown options
* Added kiosk restricted message toggle
* Added L2 hold and release for specific hotkey combos in content explorer
* Added launch exec to existing assignable systems
* Added LCD display toggle on brightness
* Added left/right footer navigation glyph for options
* Added live listen support to message module
* Added loading message to custom module sub menus
* Added logic in `halt.sh` to gracefully shut down Syncthing
* Added low powered speaker keep alive script
* Added LR glyphs to default theme
* Added Ludicrous N64 core to `extra` repo
* Added MAC retrieval from interface otherwise from stored MAC
* Added main menu launch to muX modules
* Added manual loading to collections and history
* Added menu short release combo to hotkey reader
* Added method to hide storage menu item if SD2 is not present
* Added method to refresh config on save
* Added method to reload network module before connection
* Added method to skip last play if specified outside of default start
* Added `min_freq` and `max_freq` for device specific `ondemand` governor
* Added missing hold calls to modules
* Added missing names to the lookup tables
* Added modified GPU parameters to TUI devices
* Added MustardOS settings to backup support
* Added mute on display timeout power option
* Added `muterm` SDL2 virtual terminal emulator
* Added `muxbackup` module
* Added `muxbackup` to idle inhibit
* Added `mux_dimension` to device init
* Added navigation glyphs to help screens
* Added network check for download modules
* Added network profile hostname entry support
* Added network reconnecting from suspend
* Added network throughput statistics
* Added network watchdog and network on boot option
* Added new kiosk values
* Added new sounds and glyphs to default theme
* Added `NOGEN` flag to static item generation
* Added `.ogg` sound support
* Added "option" adjustment sound
* Added OSK safety checks
* Added panel fix hotkey
* Added parameter to display initialisation in specific modules
* Added partition check for backup module
* Added physical switch support for TrimUI devices
* Added play sound to global functions
* Added playtime track data to bind mount
* Added PPSSPP Restore Config Task Toolkit Script
* Added pre and post launch configurable scripts
* Added preset launch swap variable
* Added program to list writable module parameters
* Added quotes around RetroArch config variable for device specific control
* Added reboot and shutdown messages for themes without splashes
* Added reboot and shutdown sounds
* Added reboot/shutdown sounds to default share
* Added removal assurance function
* Added removal of charger bright temp file on charger exit
* Added reset button usage warning
* Added reset DPAD switch on content exit for TUI devices
* Added RetroArch config freedom check
* Added RetroArch configuration freedom to advanced settings
* Added RetroArch menu toggle on suspend and resume
* Added RGB config check for alternative theme switch
* Added routine to stop rumble motor on content quit
* Added RTC frequency change to startup
* Added safer friendly file lookup checks
* Added safer secondary and external mount path checks
* Added SAFE_QUIT global definition
* Added save state launch swap toggle
* Added saving messages to configurable modules
* Added scaling to theme downloader previews
* Added SDL and RA environment setup functions
* Added SDL cleanup to independent modules
* Added secondary and external eject and mount task toolkit scripts
* Added secondary and external partition mount option in advanced settings
* Added separate file sync global variable script
* Added settings for adjusting rotation pivot
* Added shared navigation bar builder
* Added signal watchdog to frontend to safely quit upon script shutdown initiation
* Added small delay to show content refresh message
* Added special kiosk collection folder support
* Added startup chime support
* Added static animation time and delay for credits
* Added supporter credits infinite loop
* Added support for additional XRoar machine types
* Added support for devices that treat DPAD as buttons
* Added support for `EV_ABS` for TrimUI shoulder buttons
* Added support for RGB light toggle
* Added Syncthing API calls to launch and quit scripts
* Added Syncthing auto-scan toggle
* Added sync to config changes
* Added system core and governor to options menu on content only
* Added target backup storage option
* Added terminal resource loader
* Added theme downloader module
* Added theme downloader to kiosk module
* Added time played to content options
* Added times launched to content options info panel
* Added TrimUI DPAD swap mechanism
* Added TrimUI specific PPSSPP emulator
* Added `ui_count` checks on navigation
* Added up down footer glyph to default theme
* Added wait for interface before MAC change and store MAC value
* Added XRoar Tandy TRS-80 color computer emulator to extra

### Fixed

* Fixed A<>B X<>Y remapping for control schemes
* Fixed adding to collections from history
* Fixed additional RG34XX-SP controls
* Fixed additional sleep calls
* Fixed advance settings scroll going off-screen
* Fixed alignment on theme download previews
* Fixed application menu reloading
* Fixed Archive Manager and Task Toolkit loader
* Fixed Archive Manager loading after installing theme
* Fixed assign core and governor modules
* Fixed assign global name to match directory
* Fixed assign system information
* Fixed automatic assign JSON
* Fixed `back` sound not playing on custom exit
* Fixed battery charging module
* Fixed bar values getting in the way of outside modules
* Fixed box art not loading for the first item
* Fixed brightness bar not displaying in some instances
* Fixed brightness combo glyph interpretation
* Fixed brightness setting randomly decreasing
* Fixed broken screenshots on RG28XX-H device
* Fixed built-in application loader for LOTE
* Fixed card mode and state restore values in danger module
* Fixed catalogue entries
* Fixed catalogue generation script
* Fixed catalogue name for NES Famicom system
* Fixed catalogue references
* Fixed changing month but day not changing to a valid day
* Fixed charger boot message to hide battery/voltage labels
* Fixed charging module shutdown on blank screen
* Fixed clearing network profile items from memory
* Fixed collection adding and internal name lookup
* Fixed collection screen navbar
* Fixed content base level directory name string
* Fixed content being displayed all lower case
* Fixed content help glyphs being hidden
* Fixed content loading for control schemes
* Fixed copy paste whoopsie with RG40XX-H start script
* Fixed core assignment builder to obtain assign system
* Fixed credits screens
* Fixed customisation picker to use specific preview alignment
* Fixed customisation menu nav items
* Fixed customisation module with theme alternates
* Fixed default theme LED scripts
* Fixed delayed custom module modification saving
* Fixed DPAD switch variable error in hotkey
* Fixed empty tag file being assigned if no tags exist
* Fixed entering date time module
* Fixed existing device RA key duplication
* Fixed external PPSSPP controls
* Fixed factory reset LED lights
* Fixed factory reset theme font location
* Fixed fallback to catalogue name for `Folder` box art
* Fixed footer element centering
* Fixed freeing of playtime JSON data
* Fixed freeze when device startup set to history
* Fixed freeze with scrolling text
* Fixed freezing issue collecting content with no assigned system
* Fixed frontend taking care of used reset
* Fixed getting stuck in grid mode
* Fixed glyph icon spelling
* Fixed glyph padding for folder labels on the search screen
* Fixed governor change on loading
* Fixed halt verbose messages
* Fixed HDMI resolution count
* Fixed incorrect width on Archive Manager due to not excluding file extension
* Fixed INI files for XRoar coco3 and dragon machines
* Fixed installing theme while theme music playing
* Fixed internal display check function
* Fixed item hidden bool for previous element selection
* Fixed item scroll position for option modules
* Fixed last focused navigation element
* Fixed launch script to affect H700 specific classes
* Fixed launch script with corrected parsed lines
* Fixed LED lights on TrimUI devices
* Fixed live battery capacity indicator
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
* Fixed missing partition entries
* Fixed module first open navigation sounds
* Fixed muX looking for incorrect theme path on factory reset mode
* Fixed navigation sound on first module start
* Fixed network module LR nav bar
* Fixed options navigation generation issue
* Fixed option value sound playing if there are zero options
* Fixed OSK element reuse issue and added safe delete define
* Fixed pivot point if pivot specific doesn't exist
* Fixed playing sound on no content
* Fixed PPSSPP home directory path on content launch
* Fixed PPSSPP launch script to correct Vulkan backend on H700
* Fixed PPSSPP modern controls
* Fixed preview image overriding picker type name value
* Fixed purging of SDL mapper due to symlinks
* Fixed reboot/shutdown chime
* Fixed restoring folder index theme picker
* Fixed RetroArch auto saving/loading for resume/last device boot
* Fixed RG34XX-SP configuration specifics
* Fixed RetroArch default control for RG34XX-SP
* Fixed RGB lights displaying after low power warning whilst in idle mode
* Fixed saving theme resolution setting
* Fixed scaling of Dracula, Faux Dark, muVB, and Orange themes
* Fixed screen freeze on themes using grid mode with focus images
* Fixed screenshot width for other devices
* Fixed script logging to use consistent date time
* Fixed scrolling text when language set to Korean
* Fixed scrolling to all content options
* Fixed SDL2 libraries for TrimUI devices
* Fixed SDL "Game Controller" paths
* Fixed SDL input names for TrimUI devices
* Fixed SDL mapping logic
* Fixed SD/USB hot mounting
* Fixed search module panel priority reference
* Fixed setting long label mode on no content
* Fixed shifting text issue in OSK text area
* Fixed size to content not being disabled on Connectivity and Customisation screens
* Fixed sleep references
* Fixed small mistake with external port launching via correct script
* Fixed standalone key mapping files for YabaSanshiro emulator
* Fixed static list navigation functions
* Fixed storage information help on element focus
* Fixed storage migration and sync scripts
* Fixed storage module init values
* Fixed suspend brightness issue
* Fixed suspend state with RetroArch
* Fixed system core assignment files
* Fixed theme backwards compatibility
* Fixed theme download preview to use specific alignment
* Fixed theme installation
* Fixed theme installer on usage error
* Fixed theme picker showing preview on folders and download option
* Fixed theme preview extraction to catalogue
* Fixed theme resolution with themes that do not support all resolutions
* Fixed theme scaling
* Fixed theme version check
* Fixed Toggle Ethernet to reflect correct `operstate`
* Fixed TrimUI analogue swap
* Fixed TrimUI device input
* Fixed TrimUI device min/max frequency pointer key
* Fixed typo in controller name
* Fixed UI count in network module
* Fixed USB connection version point
* Fixed wallpaper loading
* Fixed writing the uptime variable for sleep
* Fixed wrong width on Applications and Task Toolkit screens when using LOTE

### Optimised

* Adapted SDL environment with priority control scheme switching
* Adjusted 1024x768 default scheme Y position for messages
* Adjusted archive creation logic to handle multiple files and directories for external sources
* Adjusted charging logic
* Adjusted content information to shared common function
* Adjusted default Drastic input mappings for Brick
* Adjusted device hotkeys
* Adjusted device specific startup scripts
* Adjusted existing drastic-trngaje device configurations
* Adjusted help handler with fixed info box sound
* Adjusted LVGL colour mixing and gradient settings
* Adjusted random selection function to use `ui_count` on selected index
* Adjusted SSID scan log message
* Adjusted startup to bypass charging module when in Console Mode
* Adjusted usage messages for mount scripts
* Centralised device dimension variable
* Changed input tester due to hotkey change
* Changed mGBA default governor to `ondemand`
* Disabled shutting off CPU cores on TrimUI devices
* Enhanced backup script with external source handling
* Ensure blank element does not exist if not on zero brightness
* Ensure compatibility for future apps
* Factory reset improvements with rsync changes and progress integer validation
* Improved error handling for missing destination paths and source validation
* Included missing stat header to appease the compiler
* Merged content and help information box functions
* Merged content governor loading to shared function
* Merged device specific input bright and audio to script directory
* Minor Pico-8 external launch changes
* Modified active speaker script to be executed alone on Pipewire start
* Modified archive install script to overwrite existing files from PICO-8 archive
* Modified backlight resume amounts
* Modified bar behaviour to avoid covering modules
* Modified catalogue generator to skip over files within assign directory
* Modified charger brightness logic for same values
* Modified charging module brightness
* Modified charging module to check for blank state first
* Modified chime to ensure it is only played once on startup
* Modified console mode checking routine
* Modified debug log message for EXEC_MUX function
* Modified default RetroArch audio latency to 64
* Modified download options to only appear if network connected
* Modified frontend paths to new internal structure
* Modified frontend service function
* Modified general settings to live update brightness and volume options
* Modified junk file removal function
* Modified keepalive to disable idle network disconnect
* Modified kiosk denied message function
* Modified label elements to use formatted strings
* Modified LED RGB control routine
* Modified LOG output to match script logging with uptime information
* Modified low power script to use device specific LED scripts
* Modified mount scripts to only create directory paths when required
* Modified `muxfrontend` to be modular
* Modified network module loading to be separate functions
* Modified network timeout period to 20 seconds each
* Modified OSK key events
* Modified Pipewire script to check board type for active speaker script
* Modified Retroarch audio latency
* Modified scope of grid element to focused and unfocused events
* Modified ScummVM launch script to use `gameid`
* Modified secondary and external mount scripts with mount and eject capabilities
* Modified storage mount to use user defined kernel tuning variables
* Modified theme picker to use capitalised 'Theme' in catalogue
* Modified theme preview images to scale by device resolution
* Modified volume and brightness bar behaviour
* Moved `assign.json` to inside assign directory
* Moved back to `alsathread` instead of `pipewire` for RetroArch audio driver
* Moved BGM support to `.ogg` specific to muX
* Moved card mode to danger and created display suspend in advanced settings
* Moved cardmode to danger options
* Moved charging module boot from POWER to START to avoid potential hotkey conflicts
* Moved Clear Favorites to Clear Collections in Task Toolkit
* Moved configuration fields to global options
* Moved default governor setter to global functions
* Moved direct toybox binary reference to global variable
* Moved external port assign back for Portmaster compatibility
* Moved file counter function to shared file
* Moved friendly folder, title update, and item label generation to shared functions
* Moved from define to enum for simple core content reading
* Moved frontend audio init to own function
* Moved global function muOS path back to static path
* Moved help message builder to UI common
* Moved internal build and version info to config structure
* Moved junk file cleanup function to global function script
* Moved junk file cleanup to first init only
* Moved kiosk language from enable/disable to allowed/restricted
* Moved LED RGB control to global function
* Moved LVGL element hide and float flags to single define
* Moved manual Syncthing scan to a dedicated script
* Moved `muxplore` to central list move function
* Moved `muxstart` to `muxmessage`
* Moved navigation support to `.wav` specific to muX
* Moved panel adjustments to separate function
* Moved partition mount and storage info functions to common
* Moved Pipewire wait to before frontend script start
* Moved reboot/shutdown sound play to frontend module
* Moved RetroArch config to auto load/save with content loader change
* Moved RetroArch device resolution setting to common function
* Moved SDL and RA setup to global functions
* Moved SP lid switch kill to top of halt list
* Moved subsection of systems to extra packages
* Moved system power state to danger options
* Moved system suspend state to danger options
* Moved Task Toolkit scripts to directories
* Moved theme resolution setting
* Moved to modular based content launch system
* Moved TrimUI rumble support to early startup instead
* Moved union validation and path creation on union mount start
* Moved viewport refresh and directory item count functions to shared file
* Optimised brightness and volume scripts
* Optimised collection navigation bar generation routine
* Optimised content index shuffling
* Optimised datetime RTC module
* Optimised default RetroArch global config
* Optimised frontend input handler to stop epoll blocking on frontend stops
* Optimised idle inhibit script for current running processes
* Optimised list navigation functions
* Optimised module element structure generation
* Optimised mounting routines
* Optimised network code maintainability
* Optimised pre-installed application scripts
* Optimised quit and halt scripts
* Optimised `run_exec` function for terminal loading
* Optimised SDL2 driver to flush element regions
* Optimised SDL environment setup function
* Optimised static panel elements in network config
* Optimised supporter screen with additional triggers
* Optimised suspend script with constant start values
* Optimised web services script with additional process kill methodology
* Rearranged advanced settings options
* Redesigned content detail options module
* Re-enable RA content load animation
* Refactored backup.sh to support backing up external emulator files and directories
* Refactored frontend to centralised define structure
* Refactored system core and governor assignment modules
* Refactor Syncthing scan logic and improve shutdown
* Refactor to allow loading content from root
* Reformatted factory reset logic
* Renamed global fallback friendly file name
* Renamed kiosk values for kiosk module changes
* Replaced `fbpad` with `muterm`
* Replaced `rsync` copy with itemised file list method for factory reset
* Replaced silence WAVE with OGG
* Reset time on timezone change at factory reset
* Reverted back to current item index due to grid layout
* Reverted progress method back to separate piped function
* Reverted `ripgrep` binary
* Reworked UI/UX for network information upon editing values
* Unload kernel modules on halt and suspend

### Removed

* Removed active speaker script in favour of active speaker module
* Removed animated background option from custom module
* Removed animations and static images
* Removed any active theme terminal fonts before installing a new theme
* Removed background process from frontend
* Removed collection timing debug generation
* Removed confusing no-unroll-loops with unroll-loops in Makefiles
* Removed control scheme for all applications and content except for RetroArch and associated cores
* Removed copy-on-write for union mounting
* Removed debug message about history and search boxart not active
* Removed direct sound from module exit
* Removed extraneous compiler stubs
* Removed first sync on startup
* Removed global configuration backup
* Removed global RetroArch shader
* Removed HDMI scripts from TrimUI devices
* Removed incorrect friendly associations
* Removed internal process extraction for PM content
* Removed kernel panic halt mode
* Removed leftover language strings
* Removed line break from start message
* Removed `muplay` program
* Removed network info module if there is no network capability
* Removed newlines from configuration pointers
* Removed old HDMI code in main menu module
* Removed per element wallpaper loading
* Removed preinstalled cheat archives
* Removed random theme on boot
* Removed Resilio Sync due to distribution licensing
* Removed script based BGM player
* Removed sound wait function
* Removed specific config line for mGBA audio latency
* Removed temporary extraction directory on startup
* Removed toast and counter label fade
* Removed union mounting lock mechanism due to single user system only
* Removed unnecessary library path in frontend script
* Removed unused shared global variables
* Removed unused variables in muX executing in global functions
* Removed verbose message option
* Removed waking display backlight just to power off

### Updated

* Updated and improved credits module
* Updated archive icons for default theme
* Updated assign files to remove invalid characters
* Updated bind storage script
* Updated block_input checks
* Updated `bootlogo.bmp` update function
* Updated built in fonts to TTF
* Updated Cave Story launch script
* Updated Clear System Cache Task
* Updated content explorer to auto hide files
* Updated core and governor assignment fix
* Updated current index is set before terminal execution
* Updated default `muterm` font size
* Updated default theme with larger font for reboot/shutdown images
* Updated default theme with new Lineicons
* Updated diagnostics Task Toolkit script
* Updated diagnostics to grab kiosk files
* Updated drastic-trngaje layout and controls for TrimUI Smart Pro
* Updated drastic-trngaje libraries
* Updated extraction script to use frontend function
* Updated factory reset routine
* Updated factory reset scripts for new muX procedures
* Updated factory reset to use compressed init user data
* Updated `ffplay` launch to start in fullscreen
* Updated first install messages
* Updated font functions to use internal theme path on factory reset
* Updated `gptokeyb2` binaries
* Updated info credit option text
* Updated input modules for TrimUI devices
* Updated input to check TrimUI switch state
* Updated internal device specific drastic-trngaje configs
* Updated languages
* Updated launch scripts for PPSSPP on TrimUI devices
* Updated logic for collection freeze on boot
* Updated low power script to adhere to user RGB settings
* Updated message padding default theme
* Updated messages to include header for new muX message module
* Updated `message.txt` with additional entries
* Updated `muxstart` to support message file on loop
* Updated muX with a major refactored frontend to work as a single process
* Updated option and value items with index support
* Updated options to use info items to launch configurations
* Updated package picker scripts to use frontend function
* Updated Pipewire script to run device specific audio script
* Updated preinstalled global music
* Updated preinstalled task scripts to use frontend function
* Updated RetroArch to 1.21.0
* Updated RG34XX-SP SDL control mapping
* Updated ScummVM launch script
* Updated SDL `gamecontrollerdb.txt` controls
* Updated SFTPgo to 2.6.6
* Updated `skip.ini` to exclude Disc and Track files
* Updated storage mount path generation
* Updated Syncthing to 2.0.2
* Updated the fix for launching PPSSPP after Vulkan is set on RG devices
* Updated theme resolution setting
* Updated thermal setting to be in reverse setting
* Updated union mounting script to have single lock mechanism on multiple mounts
* Updated unknown module handling
* Updated XRoar system support INI files
