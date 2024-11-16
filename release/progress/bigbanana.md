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
> This requires you to already have 2410.1 BANANA already setup and installed on your device.
>
> Using modified muOS installations or previous versions may have strange or breaking outcomes.
>
> You can also download the full image from the links above and start fresh!

## Contributors

- antiKk
- bcat
- Bitter_Bizarro
- cgimenes
- duncanyoyo1
- illumini_85
- j0tt
- joyrider3774
- koolkidkorey
- \_\_krt\_\_
- mattyj513
- nmqanh
- roastbean
- xonglebongle

## Changes

- Added ability to use specific fonts, images, and schemes based on device resolution
- Added additional catalogue directories
- Added async audio option for specific navigation block sounds
  - Additional sounds are: `keypress.wav` (_OSK_) and `muos.wav`
- Added binary size check for Syncthing
- Added catalogue priority image loader for applications, archives, and tasks
- Added column mode to advanced box art config
- Added DAT extension to `skip.ini` file
- Added device variable to indicate RGB support
- Added Diagnostics script to task toolkit
- Added "Display Empty Folder" visual option
- Added DPAD Swap variable for hotkey listener
- Added external Flycast directories
- Added fade to black animation support
- Added formatted script logging system
- Added function to load grid muxlaunch images through muxlaunch folder
- Added GBA overlays
- Added grid panel theme support to `muxlaunch` and `muxplore`
- Added Hebrew, Irish, and Persian languages
- Added INI assign files for MegaDuck and Sega Pico systems
- Added migrate and sync scripts for storage module
- Added MPV player
- Added mReader application for general content launching
- Added network wait for web services before initialisation
- Added PICO-8 Mouse Support
- Added PICO-8 Pixel Perfect Scaler
- Added `pgm.zip` to skipped files
- Added progress bar support for `muxstart` module for first init setup
- Added splash image on content launching support
- Added support for device specific theme previews
- Added support for disabling grid panel in `muxplore` with a `.nogrid` file
- Added support for displaying assigned core
- Added support for empty WiFi passwords
- Added support for user initialisation scripts
- Added Tailscale to Web Services
- Added task scripts to restore friendly names and themes
- Changed archive module to use collections
- Changed async sound for all modules
- Changed in-game working LED to be off on charge + sleep
- Changed Pipewire to use global configuration with realtime priority
- Changed SNES/SFC core to Snes9x as default
- Defaulted to `performance` governor for CD-i
- Disable drastic threaded 3D - [Drastic Link](https://drastic-ds.com/drastic_readme.txt)
  and [Reddit Link](https://old.reddit.com/r/EmulationOnAndroid/comments/1csvtic/pro_tip_do_not_use_the_multithreaded_renderer_in/)
- Enabled PICO-8 to respect modern/retro control flag
- Factored idle logic to common script and inhibited idle during `ffplay` video playback
- Fixed advanced artwork config for favourite and history box art display
- Fixed auto assign routine to avoid running on storage selection or content root
- Fixed bind mount typo for DraStic-Legacy
- Fixed content count display on explore content root
- Fixed credit names and visual swap issue on friendly folder
- Fixed default BANANA theme layout
- Fixed DPAD stylus press on A button for drastic-trngaje
- Fixed drastic-trngaje slow stylus
- Fixed inconsistent behaviour of scroll wrapping in interface options
- Fixed L1 and R1 glyphs in `muxtester`
- Fixed language setting for network configuration module
- Fixed low level brightness bug on sleep wake
- Fixed masked password issue for network configuration
- Fixed missing strings in translations
- Fixed muX element priority loading and improved wallpaper loading logic
- Fixed network options being shown when network disabled
- Fixed overlay image being applied twice
- Fixed overlay image priority
- Fixed save and load hotkeys for RG35XX-PLUS and RG35XX-2024 devices
- Fixed ScummVM log directory
- Fixed skeleton directory path in RA config backup and removed RA config during factory reset
- Fixed theme preview alignment and GIF file lock issue when switching themes
- Fixed upper bound on random image range
- Fixed wallpaper and `muxtheme` preview
- Fully separated idle display and sleep timers
- Increase close-content timeout from 5s to 10s
- Increase upper bound on random image range
- Merged device-specific `input.sh` scripts into `hotkey.sh` configured via JSON
- Modified screen refresh to accept wait value
- Modified skip entry file with wildcard suffix
- Moved BGM Kill function to general function script
- Moved boxart behind headers and footers
- Moved internal fallback theme to default directory
- Moved storage preference module to configuration module
- Optimised internal scripts
- Preserved empty directories and added progress bars during archive install
- Removed `evsieve` idle inhibitor
- Removed extra copy of default theme to avoid sync issues
- Removed global core auto assign options on directory change
- Removed `golden.sh` script
- Removed L3 Binding from devices without analogues
- Removed loading of network profile when network is active
- Removed naming of visible/hidden in favour of enabled/disabled
- Removed storage vars that are now unused
- Removed `sync_storage.sh` after storage mount updates
- Removed theme max item count
- Removed unused input_disable function
- Renamed `/opt/muos/backup` to `/opt/muos/default` and documented restore script
- Renamed Video Player to Media Player
- Renamed web service processes
- Replaced Drastic with Drastic-trngaje
- Replaced `gotty` with `ttyd`
- Suppressed idle sleep while charging to ease file transfers
- Updated grid panel to use panel font if available
- Updated grid panel width to be calculated off column width
- Updated languages
- Updated moonlight to use aarch64 `gptokeyb`
- Updated `muxplore` to default to SD1 if no content found
- Updated `muxsplash` to support screen resolutions
- Updated PCSX Libretro core
- Updated PPSSPP external emulator to 1.18.1
- Updated reader and gptk files for load/save state of files
- Updated RetroArch cheat archive
- Updated RetroArch configurations for all working systems
- Updated RetroArch overlays
- Updated Sameboy Libretro core
- Updated supporter credits
- Updated Syncthing and Tailscale
- Updated theme overrides for radius and size
- Updated theme picker to support scrolling text
- Updated Vircon32 and Ardens Libretro cores for save state compatibility
