---
layout: default
title: 2508.0 GOOSE
permalink: /release/progress/goose
parent: Progress
grand_parent: Release
nav_order: 1
has_toc: false
---

# MustardOS 2508.0 Goose

#### _Pronunciation_

/goo͞s/

## Download

_Not yet available!_

{: .important }
> As this is a major release you will be required to reflash to update your device to this version. Updates are only
> for subsequent releases within the same version.

<hr>

## Support MustardOS

Love MustardOS? Want to help us on this **crazy** journey? Here's how to get involved.

**This can be done a few ways:**

* Be helpful around the Discord community server
* [Contribute code directly to our GitHub repositories](https://github.com/MustardOS)
* Spread the word about MustardOS and all its features

**Or you can join the testing crew directly by:**

* Supporting us via Ko-fi subscription
* Boosting the Discord community server

<hr>

## Fun Facts

* There are over **500** changes with **20** contributors
* This release took over **6 months** of hard work
* Rotated screens are still **annoying** as ever
* The goose is a highly social animal and is often seen in large groups known as flocks or gaggles. They have a strong
  sense of community and rely on their flock for protection, foraging, and navigation during migration. They communicate
  with each other through a variety of vocalizations, including honking and hissing sounds.

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
* xonglebongle
* zarquon

## Changes

* Added Activity Tracker to backup options
* Added additional checks for union mounting
* Added additional dangerous options
* Added additional date time setting safety checks
* Added additional logging to frontend start
* Added additional navigation sounds
* Added additional "Wi-Fi Enable" scripts for RG28XX-H and RG35XX-2024 devices
* Added additional zram and swap values
* Added assigned core information to launch pointers
* Added audio initialisation retry
* Added automatic friendly core assign generator
* Added available governor pointer to device specifics
* Added background process execution support
* Added backwards compatible theme checking
* Added basic network details module
* Added BGM music tracks from previous MustardOS versions
* Added blank overlay due to weird RetroArch performance delay
* Added boot logo package installer
* Added box art layering to shared function
* Added brightness clamping to potentially fix brightness drops in general settings
* Added cached navigation sounds
* Added catalogue match check script
* Added channel information to network detail module
* Added charger specific check to blank LCD
* Added check for display suspend option for LCD toggle
* Added check for in use theme resources
* Added check for navigation for less than 2 items on screen
* Added check for zram/swap file before purge
* Added chime done to last/resume content launch
* Added collection access kiosk variable
* Added collection modification toggles to kiosk mode
* Added comparison check for idle display and idle sleep in power settings
* Added config and device variable collection to diagnostics
* Added content collection export task toolkit script
* Added content control scheme mapping functionality
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
* Added directory support to task toolkit
* Added disclaimer on first install
* Added display suspend variable to advanced settings
* Added Drastic layout files for Brick
* Added dynamic `gamecontrollerdb.txt` scheme support
* Added `error` sound to collection error
* Added "External" option to Device Backup
* Added fallback collection export template
* Added fallback for input hold handling
* Added file locking to brightness script
* Added filtering to theme downloader
* Added first install disclaimer module
* Added forced reset brightness
* Added friendly association pointers to assign files
* Added frontend stop/start function to global
* Added full refresh option to display initialisation
* Added `gamecontrollerdb.txt` scheme to backup and storage modules
* Added Geolith core override
* Added getting ready message on first init
* Added global governor deletion on change
* Added global sound support
* Added governor and tag glyphs to default theme
* Added hardcoded calibration files for TrimUI input modules
* Added help and icon to collection export task
* Added hidden dangerous config module
* Added hidden device specific settings module
* Added history removal toggle to kiosk mode
* Added HOME to global function
* Added hostfile restore on network connection
* Added hostname editing and MAC changing
* Added idle mute configuration variable and modified idle script
* Added initial Anbernic RG34XX-SP support
* Added initial rumble for TrimUI and modified rumble path
* Added inline IAID calculation for network connections
* Added joystick GUID grabber binary
* Added kernel tuning variables
* Added kiosk restricted message toggle
* Added L2 hold and release for specific hotkey combos in content explorer
* Added launch exec to existing assignable systems
* Added LCD display toggle on brightness
* Added left/right footer navigation glyph for options
* Added live listen support to message module
* Added logic in `halt.sh` to gracefully shut down Syncthing
* Added LR glyphs to default theme
* Added Ludicrous N64 core to `extra` repo
* Added MAC retrieval from interface otherwise from stored MAC
* Added main menu launch to mux modules
* Added main menu launch to muX modules
* Added manual loading to collections and history
* Added menu short release combo to hotkey reader
* Added method to hide storage menu item if SD2 is not present
* Added method to refresh config on save
* Added method to reload network module before connection
* Added method to skip last play if frontend module is specified outside of default start
* Added `min_freq` and `max_freq` for device specific `ondemand` governor
* Added missing names to the lookup tables
* Added modified GPU parameters to TUI devices
* Added MustardOS settings to backup support
* Added mute on display timeout power option
* Added `muterm` SDL2 virtual terminal emulator
* Added `muxbackup` module
* Added `muxbackup` to idle inhibit
* Added `mux_dimension` to device init
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
* Added preset launch swap variable
* Added quotes around RetroArch config variable for device specific control
* Added reboot and shutdown messages for themes without splashes
* Added reboot and shutdown sounds
* Added reboot/shutdown sounds to default share
* Added removal of charger bright temp file on charger exit
* Added reset button usage warning
* Added reset DPAD switch on content exit for TUI devices
* Added RetroArch config freedom check
* Added RetroArch configuration freedom to advanced settings
* Added RetroArch menu toggle on suspend and resume
* Added RGB config check for alternative theme switch
* Added routine to stop rumble motor on content quit
* Added RTC frequency change to startup
* Added SAFE_QUIT global definition
* Added save state launch swap toggle
* Added saving messages to configurable modules
* Added scaling to theme downloader previews
* Added SDL and RA environment setup functions
* Added SDL cleanup to independent modules
* Added secondary and external partition mount option in advanced settings
* Added settings for adjusting rotation pivot
* Added shared navigation bar builder
* Added special kiosk collection folder support
* Added startup chime support
* Added static animation time and delay for credits
* Added supporter credits infinite loop
* Added support for additional XRoar machine types
* Added support for devices that treat DPAD as buttons
* Added support for `EV_ABS` for TrimUI shoulder buttons
* Added support for RGB light toggle
* Added Syncthing auto-scan toggle and add back API calls to launch and quit scripts
* Added sync to config changes
* Added system core and governor to options menu on content only
* Added target backup storage option
* Added terminal resource loader and optimised `run_exec` function for terminal loading
* Added theme downloader module
* Added theme downloader to kiosk module and added device network check
* Added time played to content options
* Added times launched to content options info panel
* Added TrimUI DPAD swap mechanism
* Added TrimUI specific PPSSPP emulator
* Added `ui_count` checks on navigation
* Added wait for interface before MAC change and store MAC value
* Added XRoar Tandy TRS-80 color computer emulator to extra
* Adjust 1024x768 default scheme Y position for messages
* Adjusted archive creation logic to handle multiple files and directories for external sources
* Adjusted charging logic
* Adjusted content information to shared common function
* Adjusted default Drastic input mappings for Brick
* Adjusted device hotkeys
* Adjusted device specific startup scripts
* Adjusted help handler with fixed info box sound
* Adjusted LVGL colour mixing and gradient settings
* Adjusted random selection function to use `ui_count` on selected index
* Adjusted SSID scan log message
* Adjust existing drastic-trngaje device configurations
* Bypass charging mode if device is in console mode
* Centralised device dimension variable
* Changed input tester due to hotkey change
* Changed mGBA default governor to `ondemand`
* Default to sharp bilinear simple shader
* Disable shutting off CPU cores on TrimUI devices
* Enhance backup script with external source handling
* Factory reset improvements with rsync changes and progress integer validation
* Fixed A<>B X<>Y remapping for control schemes
* Fixed adding to collections from history
* Fixed additional sleep calls
* Fixed advance settings scroll going off-screen
* Fixed assign core and governor modules
* Fixed assign global name to match directory
* Fixed assign system information
* Fixed automatic assign JSON
* Fixed `back` sound not playing on custom exit
* Fixed battery charging module
* Fixed brightness combo glyph interpretation
* Fixed broken screenshots on RG28XX-H device
* Fixed catalogue entries
* Fixed catalogue generation script
* Fixed catalogue name for NES Famicom system
* Fixed catalogue references
* Fixed changing month but day not changing to a valid day
* Fixed charger boot message to hide battery/voltage labels
* Fixed clearing network profile items from memory
* Fixed collection adding and internal name lookup
* Fixed collection screen navbar
* Fixed content being displayed all lower case
* Fixed content loading for control schemes
* Fixed copy paste whoopsie with RG40XX-H start script
* Fixed core assignment builder to obtain assign system
* Fixed credits screens
* Fixed customisation menu nav items
* Fixed customisation module with theme alternates
* Fixed default theme LED scripts
* Fixed DPAD switch variable error in hotkey
* Fixed entering date time module
* Fixed existing device RA key duplication
* Fixed external PPSSPP controls
* Fixed factory reset LED lights
* Fixed factory reset theme font location
* Fixed freeze when device startup set to history
* Fixed freeze with scrolling text
* Fixed freezing issue collecting content with no assigned system
* Fixed frontend taking care of used reset
* Fixed glyph icon spelling
* Fixed governor change on loading
* Fixed halt verbose messages
* Fixed HDMI resolution count
* Fixed incorrect width on Archive Manager due to not excluding file extension
* Fixed INI files for XRoar coco3 and dragon machines
* Fixed installing theme while theme music playing
* Fixed internal display check function
* Fixed issue getting stuck in grid mode
* Fixed issue installing themes
* Fixed issue loading wallpapers
* Fixed issue reloading application menu
* Fixed issue with bar values getting in the way of outside modules
* Fixed issue with box art not loading for first item
* Fixed issue with brightness bar not displaying
* Fixed issue with brightness setting decreasing
* Fixed issue with centering footer elements
* Fixed issue with fallback to catalogue name for Folder box art
* Fixed issue with freeing playtime JSON data
* Fixed issue with glyph padding for folder labels on search screen
* Fixed issue with screen freeze on themes using grid mode with focus images
* Fixed issue with writing uptime variable for sleep
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
* Fixed muX looking for incorrect theme path on factory reset mode
* Fixed navigation sound on first module start
* Fixed network module LR nav bar
* Fixed options navigation generation issue
* Fixed option value sound playing if there are zero options
* Fixed OSK element reuse issue and added safe delete define
* Fixed pivot point if pivot specific doesn't exist
* Fixed playing sound on no content
* Fixed PPSSPP launch script to correct Vulkan backend on H700
* Fixed PPSSPP modern controls and adapted SDL environment with priority control scheme switching
* Fixed purging of SDL mapper due to symlinking
* Fixed RetroArch auto saving/loading for resume/last device boot
* Fixed RG34XX-SP configuration specifics
* Fixed RGB lights displaying after low power warning whilst in idle mode
* Fixed saving theme resolution setting
* Fixed scaling of Dracula, Faux Dark, muVB, and Orange themes
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
* Fixed static list navigation functions
* Fixed storage migration and sync scripts
* Fixed storage module init values
* Fixed suspend state with RetroArch
* Fixed system core assignment files
* Fixed theme backwards compatibility
* Fixed theme installer on usage error
* Fixed theme resolution with themes that do not support all resolutions
* Fixed theme scaling
* Fixed theme version check
* Fixed Toggle Ethernet to reflect correct operstate
* Fixed TrimUI analogue swap
* Fixed TrimUI device input
* Fixed TrimUI device min/max frequency pointer key
* Fixed typo in controller name
* Fixed UI count in network module
* Fixed USB connection version point
* Fixed wrong width on Applications and Task Toolkit screens when using LOTE
* Improved error handling for missing destination paths and source validation
* Included missing stat header to appease the compiler
* Merged content and help information box functions
* Merged content governor loading to shared function
* Merged device specific input bright and audio to script directory
* Minor Pico-8 external launch changes
* Modified archive install script to overwrite existing files from PICO-8 archive
* Modified backlight resume amounts
* Modified bar behaviour to avoid covering modules
* Modified charging module brightness
* Modified chime to ensure it is only played once on startup
* Modified console mode checking routine
* Modified debug log message for EXEC_MUX function
* Modified default RetroArch audio latency to 64
* Modified frontend paths to new internal structure
* Modified general settings to live update brightness and volume options
* Modified keepalive to disable idle network disconnect
* Modified kiosk denied message function
* Modified label elements to use formatted strings
* Modified LED RGB control routine
* Modified LOG output to match script logging with uptime information
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
* Moved `assign.json` to inside assign directory
* Moved back to `alsathread` instead of `pipewire` for RetroArch audio driver
* Moved BGM support to `.ogg` specific to muX
* Moved card mode to danger and created display suspend in advanced settings
* Moved cardmode to danger options
* Moved configuration fields to global options
* Moved default governor setter to global functions
* Moved external port assign back for Portmaster compatibility
* Moved file counter function to shared file
* Moved friendly folder, title update, and item label generation to shared functions
* Moved from define to enum for simple core content reading
* Moved frontend audio init to own function
* Moved help message builder to UI common
* Moved internal build and version info to config structure
* Moved kiosk language from enable/disable to allowed/restricted
* Moved LED RGB control to global function
* Moved LVGL element hide and float flags to single define
* Moved manual Syncthing scan to a dedicated script
* Moved `muxplore` to central list move function
* Moved `muxstart` to `muxmessage`
* Moved muxstart to muxmessage and fixed message issues
* Moved navigation support to `.wav` specific to muX
* Moved panel adjustments to separate function
* Moved partition mount and storage info functions to common
* Moved reboot/shutdown sound play to frontend module
* Moved RetroArch config to auto load/save with content loader change
* Moved RetroArch device resolution setting to common function
* Moved screenshot to L2+R2+MENU
* Moved SDL and RA setup to global functions
* Moved SP lid switch kill to top of halt list
* Moved subsection of systems to extra packages and changed emulator and application repo locations
* Moved system power state to danger options
* Moved system suspend state to danger options
* Moved task toolkit scripts to directories
* Moved theme resolution setting
* Moved to modular based content launch system with pre and post launch configurable scripts
* Moved TrimUI rumble support to early startup instead
* Moved viewport refresh and directory item count functions to shared file
* Optimised brightness and volume scripts
* Optimised collection navigation bar generation routine
* Optimised content index shuffling
* Optimised datetime RTC module
* Optimised default RetroArch global config
* Optimised list navigation functions
* Optimised module element structure generation
* Optimised mounting routines
* Optimised network code maintainability
* Optimised quit and halt scripts
* Optimised SDL2 driver to flush element regions
* Optimised SDL environment setup function
* Optimised static panel elements in network config
* Optimised supporter screen with additional triggers
* Optimised suspend script with constant start values
* Rearranged advanced settings options
* Redesigned content detail options module
* Re-enable RA content load animation
* Refactored backup.sh to support backing up external emulator files and directories
* Refactored frontend to centralised define structure
* Refactored system core and governor assignment modules
* Refactor Syncthing scan logic and improve shutdown
* Refactor to allow loading content from root
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
* Removed global RetroArch shader
* Removed HDMI scripts from TrimUI devices
* Removed incorrect friendly associations
* Removed internal process extraction for PM content
* Removed kernel panic halt mode
* Removed leftover language strings
* Removed line break from start message
* Removed `muplay` program
* Removed network info module if there is no network capability
* Removed old HDMI code in main menu module
* Removed per element wallpaper loading
* Removed pre-installed cheat archives
* Removed random theme on boot
* Removed Resilio Sync due to distribution licensing
* Removed script based BGM player
* Removed sound wait function
* Removed specific config line for mGBA audio latency
* Removed temporary extraction directory on startup
* Removed toast and counter label fade
* Removed unnecessary library path in frontend script
* Removed unneeded shared variables
* Removed verbose message option
* Removed waking display backlight just to power off
* Remove extraneous compiler stubs
* Remove newlines from configuration pointers
* Rename global fallback friendly file name
* Replaced `fbpad` with `muterm`
* Replaced `rsync` copy with itemised file list method for factory reset
* Replaced silence WAVE with OGG
* Reset time on timezone change at factory reset
* Reverted back to current item index due to grid layout
* Reverted progress method back to separate piped function
* Reverted `ripgrep` binary
* Reworked UI/UX for network information upon editing values
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
* Updated Clear System Cache Task
* Updated core and governor assignment fix
* Updated current index is set before terminal execution
* Updated default `muterm` font size
* Updated default theme with larger font for reboot/shutdown images
* Updated diagnostics task toolkit script
* Updated diagnostics to grab kiosk files
* Updated Drastic-trngaje libraries
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
* Updated pipewire script to run device specific audio script
* Updated preinstalled global music
* Updated pre-installed task scripts to use frontend function
* Updated RetroArch to 1.21.0
* Updated RG34XX-SP SDL control mapping
* Updated ScummVM launch script
* Updated SDL `gamecontrollerdb.txt` controls
* Updated the fix for launching PPSSPP after Vulkan is set on RG devices
* Updated theme resolution setting
* Updated thermal setting to be in reverse setting
* Updated unknown module handling
* Updated XRoar system support INI files