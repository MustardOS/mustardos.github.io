---
layout: default
title: 2410.2 BIG BANANA
permalink: /release/progress/bigbanana
parent: Progress
grand_parent: Release
nav_order: 1
has_toc: false
---

# muOS 2410.2 BIG BANANA
## Download
Not ready just yet!

## Support muOS
Love muOS? Want to help us on this **crazy** journey? Here's how to get involved.

**This can be done a few ways:**
- Be helpful around the Discord community server
- [Contribute code directly to our GitHub repositories](https://github.com/MustardOS)
- Spread the word about muOS and all its features

**Or you can join the testing crew directly by:**
- Supporting us via Ko-fi subscription
- Boosting the Discord community server

## Important

{: .highlight }
> This requires you to already have 2410.1 BANANA already setup and installed on your device!
> 
> Using modified muOS installations or previous versions may have strange outcomes.

## Contributors
- antiKk
- mattyj513
- Bitter_Bizarro
- j0tt
- bcat
- joyrider3774
- nmqanh
- xonglebongle

## Changes
- Added ability to use specific fonts, images, and schemes based on device resolution
- Added column mode to advanced box art config
- Added "Display Empty Folder" visual option
- Added GBA overlays
- Added device variable to indicate RGB support
- Added fade to black animation support
- Added formatted script logging system
- Added INI assign files for MegaDuck and Sega Pico systems
- Added migrate and sync scripts for storage module
- Added mReader application for general content launching
- Added MPV player
- Added PICO-8 Mouse Support
- Added PICO-8 Pixel Perfect Scaler
- Added `pgm.zip` to skipped files
- Added progress bar support for `muxstart` module for first init setup
- Added splash image on content launching support
- Added support for displaying assigned core
- Added support for device specific theme previews
- Added task scripts to restore friendly names and themes
- Defaulted to `performance` governor for CD-i
- Enabled PICO-8 to respect modern/retro control flag
- Factored idle logic to common script and inhibited idle during `ffplay` video playback
- Fixed advanced artwork config for favourite and history box art display
- Fixed auto assign routine to avoid running on storage selection or content root
- Fixed bind mount typo for DraStic-Legacy
- Fixed content count display on explore content root
- Fixed credit names and visual swap issue on friendly folder
- Fixed default BANANA theme layout
- Fixed inconsistent behaviour of scroll wrapping in interface options
- Fixed L1 and R1 glyphs in `muxtester`
- Fixed muX element priority loading and improved wallpaper loading logic
- Fixed missing strings in translations
- Fixed network options being shown when network disabled
- Fixed overlay image being applied twice
- Fixed overlay image priority
- Fixed save and load hotkeys for RG35XX-PLUS and RG35XX-2024 devices
- Fixed ScummVM log directory
- Fixed skeleton directory path in RA config backup and removed RA config during factory reset
- Fixed theme preview alignment and GIF file lock issue when switching themes
- Fixed wallpaper and `muxtheme` preview
- Fully separated idle display and sleep timers
- Merged device-specific `input.sh` scripts into `hotkey.sh` configured via JSON
- Modified screen refresh to accept wait value
- Moved internal fallback theme to default directory
- Moved storage preference module to configuration module
- Preserved empty directories and added progress bars during archive install
- Removed `evsieve` idle inhibitor
- Removed extra copy of default theme to avoid sync issues
- Removed global core auto assign options on directory change
- Removed L3 Binding from devices without analogues
- Removed naming of visible/hidden in favour of enabled/disabled
- Removed storage vars that are now unused
- Removed `sync_storage.sh` after storage mount updates
- Removed theme max item count
- Renamed `/opt/muos/backup` to `/opt/muos/default` and documented restore script
- Renamed Video Player to Media Player
- Suppressed idle sleep while charging to ease file transfers
- Updated languages
- Updated moonlight to use aarch64 `gptokeyb`
- Updated `muxsplash` to support screen resolutions
- Updated RetroArch overlays
- Updated PCSX Libretro core
- Updated PPSSPP external emulator to 1.18
- Updated reader and gptk files for load/save state of files
- Updated Sameboy Libretro core
- Updated supporter credits
- Updated theme overrides for radius and size
- Updated theme picker to support scrolling text
- Updated Vircon32 and Ardens Libretro cores for save state compatibility
