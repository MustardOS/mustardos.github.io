---
layout: default
title: 2405.3 COOL BEANS
permalink: /release/progress/coolbeans
parent: Progress
grandparent: Release
nav_order: 1
has_toc: false
---


# muOS 2405.3 COOL BEANS
## Download
[Not available yet!]({{site.baseurl}}/release/progress/coolbeans)  
``Come back later!``

## Support muOS
If you like using muOS and would like to see it grow, and potentially support more devices, feel free to give a tip or subscribe and get access to extra goodies within our Discord server!  
[Support muOS via Ko-fi](https://ko-fi.com/xonglebongle)

## Important - Please Read
Due to recent changes with the H700 firmware this has to unfortunately be a full-image release and not a simple update. This contains a partition layout change along with a few internal backend changes which helps bring simple changes for development purposes.

Apologies to those who dislike re-flashing their device constantly, however with this update which includes the new storage preference module this should no longer be a hassle to update to full images in the future!
## Significant Changes
- Added PipeWire support (thanks @koolkidcorey)
  - Falls back to standard ALSA for some applications and ports
- Added RG40XX device support
- Added storage preference module
  - This allows users to switch to SD2 for configurations, catalogue metadata, save games etc.
  - This can be found in general settings
- Analogue sticks on RG35XX-H and RG40XX no longer have snapping (thanks @thegammasqueeze)
## General Changes
- Added 2x4 and 3x5 navigation icon support for main menu launcher (thanks @mehstrongbadmeh)
- Added ADB function switch to advanced settings
- Added additional directory preparation for storage mount
- Added additional sleep timers
- Added additional suspend modes for other suspend modes
- Added additional suspend power state
- Added audio and brightness init switch
- Added back navigation sound support
- Added BlueMSX BIOS files
- Added border variables to item counter
- Added checks for RetroArch configurations and muX themes for mount preparation
- Added compressed content support for mupen64plus emulator (thanks @bcat and @voodatari)
- Added counter visual options to global configuration
- Added CPU core count to device configuration
- Added device specific suspend script
- Added Discord Rich Presence support files (thanks @koolkidcorey)
- Added extra padding variables to item counter
- Added fade to item counter
- Added file counter to context explorer (thanks @bitter_bizarro)
- Added framebuffer virtual terminal support for archive and task modules
- Added frontend HDMI support for devices with rotated displays (thanks @ajmandourah)
- Added home permission correction
- Added item content to global configuration
- Added item counter to visual options for file/folder visibility (thanks @bitter_bizarro)
- Added LED control support to RG40XX (thanks @thegammasqueeze and @koolkidkorey)
- Added method to sync themes from SD1 to storage preference (thanks @antikk)
- Added multiple character string removal function
- Added mux_audio_source to func.sh (thanks @duncanyoyo1)
- Added network operating state variable
- Added new framebuffer switch to some external emulators
- Added new shutdown and reboot method (thanks @bcat)
- Added OpenBOR support (thanks @antikk)
- Added power state global variable
- Added power state in advanced settings
- Added PPSSPP graphics backend fix
- Added RG40XX N64 support (thanks @koolkidcorey)
- Added scrolling text to context explorer (thanks @bitter_bizarro)
- Added secondary storage directory prep
- Added separate font support for panels with dynamic elements (thanks @bitter_bizarro)
- Added setting variable init on startup
- Added storage preference link to frontend launcher
- Added storage preference to global config
- Added storage preference to launch scripts
- Added task to clear SFTPGO Keys (thanks @antikk)
- Added text separator option to item counter
- Added unset variables to external emulators
- Added verbose key to global configuration
- Added verbose messages to junk cleanup kit
- Added WASM-4 libretro configuration (thanks @joyrider3774)
- Added zxs to `assign.json` (thanks @birdie)
- Adjusted content counter theme values
- Adjusted default theme with item counter variables
- Adjusted udevadm settle message
- Adjusted visual options module for UI builder
- Changed item counter visual options icon
- Changed screen suspend to screen blank
- Changed to network state variable for network connection
- Disabled mouse/XY device for all mame cores (thanks @duncanyoyo1)
- Enabled power sleep triggers after first init finish
- Fixed 2048 aspect ratio (thanks @antikk)
- Fixed cave story bios location
- Fixed checking for sleep method
- Fixed debounce power press after wake from suspend (thanks @bcat)
- Fixed drastic steward to use storage preference path for save states
- Fixed external scummvm save file location
- Fixed extra trailing spaces in assign.json file names (thanks @bcat)
- Fixed favourite and history loading from SD2
- Fixed favourite and history size 0 deletion
- Fixed garbled framebuffer on PPSSPP load
- Fixed image preview using wrong setting for radius
- Fixed image refresh routine on content explorer start
- Fixed image_list_radius only applying the radius to the background and not the image itself
- Fixed item counter foreground priority
- Fixed last selection for muxplore (thanks @bitter_bizarro)
- Fixed library paths for drastic-steward
- Fixed mali gpu kernel mode loading
- Fixed missing footer glyphs for muxplore (thanks @bitter_bizarro)
- Fixed navigation speed issues for muxplore (thanks @bitter_bizarro)
- Fixed navigation wrap around for themes using PNG
- Fixed network interface variables
- Fixed network status comparison
- Fixed padding issue where values where not aligned with labels (thanks @bitter_bizarro)
- Fixed pipewire node ID retrieval
- Fixed prboom bios location
- Fixed RetroArch device controls (thanks @koolkidcorey)
- Fixed RetroArch hangs and delays on content close during sleep timeout (thanks @bcat)
- Fixed RetroArch info files being symlinks
- Fixed screenshot storage
- Fixed scripts still using old "mp3play" process
- Fixed scrolling text for muxplore (thanks @bitter_bizarro)
- Fixed sorting of history list entries (thanks @bcat)
- Fixed static art delay for muxplore (thanks @bitter_bizarro)
- Fixed storage preference common variables
- Fixed storage preference locations
- Fixed storage preference previous selection
- Fixed string comparison function (thanks @bcat)
- Fixed theme module to load from storage preference
- Fixed toolkit tasks with storage preference
- Forced 32 bit ports to use ALSA (thanks @koolkidcorey)
- Guard verbose shutdown output by advanced setting (thanks @bcat)
- Modified analogue values for new non-snap kernel
- Modified archive process to use virtual terminal
- Modified auto-assign with simplified assign structure (thanks @Matsyir)
- Modified content explore UI backend
- Modified explore content to use storage preference
- Modified item counter to default set not display
- Modified item skip to item count
- Modified mp3play instances to mpg123
- Modified ROM partition to new layout
- Modified task scripts to use virtual terminal
- Modified theme engine to support more element customisation (thanks @bitter_bizarro)
- Modified theme loader to fallback to internal theme
- Moved catalogue and favourite storage to global variable
- Moved reboot and shutdown routine to frontend script
- Moved suspend script to global scripts
- Moved to rsync for first init move
- Optimised catalogue folder creation
- Optimised Discord Rich Presence method
- Optimised notation string variable
- Optimised pattern skipping routine by loading all into memory first
- Optimised `assign.json` file to reduce character comparison
- Refactored how the status bar is displayed and aligned to the bottom (thanks @bitter_bizarro)
- Removed device change from configuration
- Removed device firmware binaries
- Removed enabled variable from item counter
- Removed H specific mupen64plus files (thanks @koolkidcorey)
- Removed more hardcoded path variables
- Removed mupen64plus-next RMP file as it's no longer needed (thanks @koolkidcorey)
- Removed NO_COLOR environment variable
- Removed PATH environment variable
- Removed ping script for frontend network status
- Removed RetroArch from system information
- Removed touch notification displayed when swap screen (thanks @trngaje)
- Removed wget from Pico-8 emulator pack
- Removed whitespace from `assign.json` keys (thanks @Matsyir)
- Renamed item counter element name
- Renamed power in general settings
- Replaced launch `pkill` to `killall` for 32-bit ports
- Set dpad function to digital on PPSSPP application exit (thanks @duncanyoyo1)
- Sorted `assign.json` by key value
- Switched to mpg123 for factory init sound
- Updated init.d scripts with proper start/stop actions (thanks @bcat)
- Updated input testing to use device values
- Updated menus to use theme settings (thanks @bitter_bizarro)
- Updated secret mode
- Updated static menus to scroll (thanks @bitter_bizarro)
- Updated sync_storage.sh to accept arguments (thanks @antikk)
- Updated WASM-4 libretro core (thanks @joyrider3774)
- Updated `name.json` with MAME2003 entries (thanks @voodatari)
- Update internal theme scheme
- Various Pico-8 Fixes (thanks @duncanyoyo1)
