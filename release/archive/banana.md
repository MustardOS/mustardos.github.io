---
layout: default
title: 2410.1 BANANA
permalink: /release/archive/banana
parent: Archive
grand_parent: Release
nav_order: 1
has_toc: false
---

# MustardOS 2410.1 BANANA

#### _Pronunciation_
/bəˈnæn.ə/

## Download
_This release is now archived._

## Support MustardOS
Love MustardOS? Want to help us on this **crazy** journey? Here's how to get involved.

**This can be done a few ways:**
- Be helpful around the Discord community server
- [Contribute code directly to our GitHub repositories](https://github.com/MustardOS)
- Spread the word about MustardOS and all its features

**Or you can join the testing crew directly by:**
- Supporting us via Ko-fi subscription
- Boosting the Discord community server

## Important - PLEASE READ

{: .highlight }
> Due to recent changes with firmware this release has to unfortunately be a full-image release and not a simple update.
> This contains a partition layout change along with a few internal backend changes which helps bring simple changes for
> development purposes and closer to support smaller patches and possible OTA updates in the near future.
>
> Apologies to those who dislike re-flashing their device constantly, however with this update which includes the new
> storage preference module this should no longer be a hassle to update to full images in the future!

{: .note }
> Please read our guide to help upgrade or migrate your data from a previous version.
> This can be found in the HELP section on the sidebar.

{: .warning }
> The RetroArch configuration structure has changed to allow RetroArch settings to be shared across devices. Manually
> copying a `retroarch.cfg` file from an older release to a device running Banana may break your controls, hotkeys, etc.
> (If this happens, use the "Restore RetroArch Configuration" script in Task Toolkit to revert to defaults.)

## Significant Changes
- Added full PipeWire support (thanks @koolkidcorey)
- Added individual and recursive system/core and governor selection
- Added language support (thanks @bitter_bizarro)
- Added method of storing user configurable data on SD2
- Added network profile support
- Added RG40XX line device support
- Fixed analogue sticks on RG35XX-H and RG40XX to remove cardinal snapping (thanks @thegammasqueeze)

## General Changes
- Added 2x4 and 3x5 navigation icon support for main menu launcher (thanks @mehstrongbadmeh)
- Added acceleration to `muxlaunch` (thanks @bitter_bizarro)
- Added ADB function switch to advanced settings
- Added additional directory preparation for storage mount
- Added additional sleep timers
- Added additional suspend modes for other suspend modes
- Added additional suspend power state
- Added audio and brightness init switch
- Added back navigation sound support
- Added bind mount for Syncthing (thanks @bcat)
- Added BlueMSX BIOS files
- Added border variables to item counter
- Added check of AXP boot_mode for charger detection on boot (thanks @bcat)
- Added checks for RetroArch configurations and muX themes for mount preparation
- Added circular long scroll back to explore content module (thanks @bitter_bizarro)
- Added common library to handle gamepad inputs (thanks @bcat)
- Added compressed content support for mupen64plus emulator (thanks @bcat and @voodatari)
- Added counter visual options to global configuration
- Added CPU core count to device configuration
- Added device serial number for stable hostname (thanks @bcat)
- Added device specific suspend script
- Added Discord Rich Presence support files (thanks @koolkidcorey)
- Added DraStic Steward saves to migrate script (thanks @antiKk)
- Added extra padding variables to item counter
- Added extra theme engine parameters for header elements
- Added fade to item counter
- Added fade to screen message when adding or removing favourites (thanks @bitter_bizarro)
- Added file counter to context explorer (thanks @bitter_bizarro)
- Added fix for idle while evsieve is active (thanks @bcat)
- Added framebuffer virtual terminal support for archive and task modules
- Added friendly name look up to volume label (thanks @bitter_bizarro)
- Added full support for ARMHF Pipewire (massive thanks to both @corey and @Duncanyoyo1)
- Added gdb and strace binaries (thanks @bcat)
- Added generic language translation support
- Added HDMI audio output switch
- Added home permission correction
- Added hotkeys for RGB control (thanks @bcat and @JanTrueno)
- Added idle display and sleep function
- Added input handle for disabled sleep and suspend-to-RAM on lid close (thanks @bcat)
- Added item content to global configuration
- Added item counter to visual options for file/folder visibility (thanks @bitter_bizarro)
- Added language fallback font support (thanks @bitter_bizarro)
- Added LED control support to RG40XX (thanks @thegammasqueeze and @koolkidkorey)
- Added memory of content item index on core/governor select
- Added method for manually doing ellipse (thanks @bitter_bizarro)
- Added method to read preview.png directly in theme archives
- Added method to sync themes from SD1 to storage preference (thanks @antikk)
- Added MTP support to USB settings (thanks @bcat)
- Added muhotkey to monitor key combos and idle time (thanks @bcat)
- Added multiple character string removal function
- Added mux\_audio\_source to func.sh (thanks @duncanyoyo1)
- Added muX force refresh on HDMI plug
- Added muX method of loading base Noto Sans fonts via external libraries (thanks @bitter_bizarro)
- Added network connectivity verification
- Added network operating state variable
- Added network profile loader, storage preference, and global support
- Added network profiles to migrate scripts (thanks @antikk)
- Added new framebuffer switch to some external emulators
- Added new input library (thanks @bcat)
- Added new option for toggling whether root drive is displayed in content explorer title (thanks @bitter_bizarro)
- Added new SDL lib for drastic to fix touch accuracy (thanks @trngaje)
- Added new SDL library for drastic to fix touch accuracy (thanks @trngaje)
- Added new secret - Be the first one to find it for a prize! (Did you find it? DM @xonglebongle)
- Added new settings for box art alignment (thanks @bitter_bizarro)
- Added new shutdown and reboot method (thanks @bcat)
- Added OpenBOR support (thanks @antikk)
- Added overrides for `FONT_LIST_PAD_RIGHT` and `CONTENT_WIDTH` in a theme (thanks @bitter_bizarro)
- Added partition label retrieval for content root title
- Added password encryption for profile save without connect first
- Added power settings to own module
- Added power state global variable
- Added power state in advanced settings
- Added PPSSPP graphics backend fix
- Added random background support for themes
- Added read_int_from_file for common cases (thanks @bcat)
- Added reusable input handling library (thanks @bcat)
- Added RG40XX N64 support (thanks @koolkidcorey)
- Added RGB Controller app and theme RGB checks (thanks @JanTrueno)
- Added RGB off at idle / back on at resume (thanks @antiKk)
- Added screen refresh before joystick task and general common functions
- Added scrolling text to context explorer (thanks @bitter_bizarro)
- Added secondary storage directory prep
- Added separate font support for panels with dynamic elements (thanks @bitter_bizarro)
- Added setting variable init on startup
- Added startup/shutdown/sleep rumble option to advanced settings
- Added storage preference link to frontend launcher
- Added storage preference to global config
- Added storage preference to launch scripts
- Added task to clear SFTPGO Keys (thanks @antikk)
- Added task to restore default RetroArch override files (thanks @bcat)
- Added text separator option to item counter
- Added theme support for placeholder box, preview art, and disabling background animations
- Added title setting for displaying root drive (thanks @bitter_bizarro)
- Added unset variables to external emulators
- Added user configurable menu acceleration in advanced settings
- Added verbose key to global configuration
- Added verbose messages to junk cleanup kit
- Added WASM-4 libretro configuration (thanks @joyrider3774)
- Added zero IP check on network connection
- Added zxs to `assign.json` (thanks @birdie)
- Adjusted content counter theme values
- Adjusted default theme with item counter variables
- Adjusted screen refresh, wait, and joystick task for responsiveness (thanks @bitter_bizarro)
- Adjusted udevadm settle message
- Adjusted visual options module for UI builder
- Changed AXIS max value to signed to fix comparisons (thanks @bcat)
- Changed button swap language to retro/modern
- Changed button swap language to retro/modern
- Changed item counter visual options icon
- Changed screen suspend to screen blank
- Changed theme engine to auto centre items in header vertically (thanks @bitter_bizarro)
- Changed to network state variable for network connection
- Clear network info on scan selection
- Clear WPA Supplicant configuration on network disable
- Decouple screen update rate from menu acceleration (thanks @bcat)
- Disabled displaying help menu when screenshot is taken (thanks @bitter_bizarro)
- Disabled framebuffer blanking if HDMI is currently being used
- Disabled HDMI on the RG28XX
- Disabled idle sleep on default
- Disabled mouse/XY device for all mame cores (thanks @duncanyoyo1)
- Disabled network changes and scanning while connected
- Disabled SSH service by default (You can enable this in Web Services!)
- Disabled swap controls on Modern/Retro for PPSSPP external (thanks @antiKk)
- Disable idle sleep on default
- Doubled max hotkeys to 32 (thanks @bcat)
- Enabled power sleep triggers after first init finish
- Enabled work LED after booting from `muxcharge` (thanks @bcat)
- Fixed 2048 aspect ratio (thanks @antikk)
- Fixed awake brightness from idle sleep state
- Fixed back confirm handle for storage preference
- Fixed button labels for modern retro toggle (thanks @bitter_bizarro)
- Fixed cave story bios location
- Fixed checking for sleep method
- Fixed content explorer launch as device startup
- Fixed debounce power press after wake from suspend (thanks @bcat)
- Fixed default colour temperature value
- Fixed device board checking, remaps, graphical issues, and info text in Content Explorer
- Fixed DPAD switch on close content, charger boot messages, and various control timings
- Fixed extra trailing spaces in assign.json file names (thanks @bcat)
- Fixed favourite and history loading from SD2
- Fixed favourite and history size 0 deletion
- Fixed flicker on volume and brightness up/down (thanks @bitter_bizarro)
- Fixed friendly folder setting save/load (thanks @bcat)
- Fixed garbled framebuffer on PPSSPP load
- Fixed governor auto select to choose default system governor
- Fixed image_list_radius only applying the radius to the background and not the image itself
- Fixed image preview using wrong setting for radius
- Fixed image refresh routine on content explorer start
- Fixed issue not being able to use left/right on `muxnetwork` (thanks @bitter_bizarro)
- Fixed issue using left and right to enable network (thanks @bitter_bizarro)
- Fixed issue with catalogue text files not showing for games that haven't been launched at least once (thanks @bitter_bizarro)
- Fixed issue with content explorer items scrolling vertically (thanks @bitter_bizarro)
- Fixed issue with favourites not running after setting core for directory or recursively (thanks @bitter_bizarro)
- Fixed issue with messages not displaying in `muxplore`
- Fixed issue with preview images for themes not displaying due to LVGL image cache (thanks @bitter_bizarro)
- Fixed issue with theme picker menu item not being selected when backing out of theme picker (thanks @bitter_bizarro)
- Fixed issue with UI count in `muxvisual` (thanks @bitter_bizarro)
- Fixed issue with X glyph being displayed when toggling enabled (thanks @bitter_bizarro)
- Fixed item counter foreground priority
- Fixed known bugs in RG35XX-SP lid sleep (thanks @bcat)
- Fixed last selection for `muxplore` (thanks @bitter_bizarro)
- Fixed library paths for drastic-steward
- Fixed message box horizontal scrolling issue
- Fixed missing footer glyphs for `muxplore` (thanks @bitter_bizarro)
- Fixed `muxtester` to be compatible with hall sticks (thanks @bcat)
- Fixed navigation issue when leaving on connect in network manager
- Fixed navigation speed issues for `muxplore` (thanks @bitter_bizarro)
- Fixed navigation wrap around for themes using PNG
- Fixed network interface variables
- Fixed network progress, placeholder image path, sleep/resume bug, and screen animation timing
- Fixed network status comparison
- Fixed off-by-one in `muxpower` settings load (thanks @bcat)
- Fixed ondemand reset (thanks @Duncanyoyo1)
- Fixed padding issue where values where not aligned with labels (thanks @bitter_bizarro)
- Fixed pipewire node ID retrieval
- Fixed PPSSPP 28XX Menu/Select Binding (thanks @antiKk)
- Fixed RetroArch device controls (thanks @koolkidcorey)
- Fixed RetroArch hangs and delays on content close during sleep timeout (thanks @bcat)
- Fixed RetroArch info files being symlinks
- Fixed reverse logic of network scanning
- Fixed rgbcli theme path to use storage mount (thanks @bcat)
- Fixed RGB theme path to use storage mount (thanks @bcat)
- Fixed screenshot storage
- Fixed scripts still using old `mp3play` process
- Fixed scrolling text for `muxplore` (thanks @bitter_bizarro)
- Fixed Scummvm exit issue (thanks @bitter_bizarro)
- Fixed segfault in `muxnetwork` when opening keyboard (thanks @bcat)
- Fixed Sleep Shutdown w/ verbose messages enabled (thanks @bcat)
- Fixed sorting of history list entries (thanks @bcat)
- Fixed static art delay for `muxplore` (thanks @bitter_bizarro)
- Fixed storage preference common variables
- Fixed storage preference locations
- Fixed storage preference previous selection
- Fixed string comparison function (thanks @bcat)
- Fixed strings in incorrect translation sections
- Fixed subdirectory start path for core and governor assign
- Fixed theme module to load from storage preference
- Fixed toolkit tasks with storage preference
- Fixed view-port object item index
- Fixed viewport object item index
- Fixed volume an brightness bar not updating when doing hold (thanks @bitter_bizarro)
- General code cleanup
- Guard verbose shutdown output by advanced setting (thanks @bcat)
- Improved input/idle handling & fix a memory leak (thanks @bcat)
- Improved input/idle handling (thanks @bcat)
- Merged storage detect functions and optimised UI counts
- Migrated input.sh event loops to use muhotkey (thanks @bcat)
- Minor tweaks to default emulator configs (thanks @bcat)
- Modified analogue values for new non-snap kernel
- Modified archive process to use virtual terminal
- Modified auto-assign with simplified assign structure (thanks @Matsyir)
- Modified content explore UI backend
- Modified explore content to use storage preference
- Modified int file read to accept line number
- Modified item counter to default set not display
- Modified item skip to item count
- Modified modules to only save settings if changed
- Modified mp3play instances to mpg123
- Modified MTP to hide SD2 folder when SD2 isn't mounted (thanks @bcat24)
- Modified RA control swap to use menu_swap_ok_cancel_buttons instead of remapping (thanks @antiKk)
- Modified ROM partition to new layout
- Modified task scripts to use virtual terminal
- Modified theme engine to support more element customisation (thanks @bitter_bizarro)
- Modified theme loader to fallback to internal theme
- Modify RetroArch config to reflect modern/retro controller style (thanks @antiKk)
- Moved catalogue and favourite storage to global variable
- Moved general setting power options to own module
- Moved reboot and shutdown routine to frontend script
- Moved retroarch.device.cfg out of retroarch mount (thanks @bcat)
- Moved suspend script to global scripts
- Moved to rsync for first init move
- New Screen Timing - Huge thanks to @shauninman for finding out correct screen timings for these devices
- Optimised `assign.json` file to reduce character comparison
- Optimised catalogue folder creation
- Optimised Discord Rich Presence method
- Optimised notation string variable
- Optimised pattern skipping routine by loading all into memory first
- Optimise epoll_wait timeout to save CPU (thanks @bcat)
- Optimise input loop further & port more apps (thanks @bcat)
- Optimise password encoding script
- Overhauled menu acceleration to improve Hall-effect stick compatibility (thanks @bcat)
- Reduced configuration axis value to single point of entry
- Refactored how the status bar is displayed and aligned to the bottom (thanks @bitter_bizarro)
- Relocated `skip.ini` into config folder so that it can be stored on SD2 (thanks @bitter_bizarro)
- Removed device change from configuration
- Removed device firmware binaries
- Removed duplicated refresh, help header, unused code, and short menu input
- Removed enabled variable from item counter
- Removed H specific mupen64plus files (thanks @koolkidcorey)
- Removed L3 click next option to stop interference with RGB controller
- Removed more hardcoded path variables
- Removed mupen64plus-next RMP file as it's no longer needed (thanks @koolkidcorey)
- Removed NO_COLOR environment variable
- Removed PATH environment variable
- Removed ping script for frontend network status
- Removed RetroArch from system information
- Removed touch notification displayed when swap screen (thanks @trngaje)
- Removed translation fonts as they are no longer required
- Removed useless health status on charging screen
- Removed wget from Pico-8 emulator pack
- Removed whitespace from `assign.json` keys (thanks @Matsyir)
- Renamed item counter element name
- Renamed power in general settings
- Replaced drastic with aarch64 build (thanks @antiKk and @trngaje)
- Replaced launch `pkill` to `killall` for 32-bit ports
- Replaced sdljoytest with sdl2-jstest (thanks @bcat)
- Reverted GIF timing that would slow down old themes (thanks @bitter_bizarro)
- Set dpad function to digital on PPSSPP application exit (thanks @duncanyoyo1)
- Set gpSP RTC enabled by default (thanks @antiKk)
- Sorted `assign.json` by key value
- Speaking of settings, there are a whole bunch of exciting new options to check out!
- Split controller map into its own script and added to tweak.sh (thanks @antiKk)
- Split PCE/PCECD, SG-1000, retroarch.cfg, and tidied general configurations
- Startup device storage mounting has been improved for faster boot times (thanks @bcat)
- Swapped X+Y when preference is set, not just A+B (thanks @antiKk)
- Switched to mpg123 for factory init sound
- Updated and fixed RA device controls (thanks @antiKk)
- Updated default theme for Banana (thanks @Lmarcomiranda)
- Updated default theme with HDMI Audio Output glyph
- Updated external ScummVM, fixed controls, and added application launcher (thanks @antiKk)
- Updated favourites button to toggle between adding and removing favourites (thanks @bitter_bizarro)
- Updated init.d scripts with proper start/stop actions (thanks @bcat)
- Updated input testing to use device values
- Updated languages
- Updated menus to use theme settings (thanks @bitter_bizarro)
- Updated migrate script for external emulators (thanks @antiKk)
- Updated `name.json` with MAME2003 entries (thanks @voodatari)
- Updated Portmaster
- Updated RetroArch cores
- Updated ScummVM External and fix controls (thanks @antiKk)
- Updated static menus to scroll (thanks @bitter_bizarro)
- Updated supporter credits
- Updated sync_storage.sh to accept arguments (thanks @antikk)
- Updated WASM-4 libretro core (thanks @joyrider3774)
- Updated web services management
- Update internal theme scheme
- Various Pico-8 Fixes (thanks @duncanyoyo1)
