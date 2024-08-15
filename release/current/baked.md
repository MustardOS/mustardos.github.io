---
layout: default
title: 2405.2 Baked Beans
permalink: /release/current/baked
parent: Current
grand_parent: Release
nav_order: 2
has_toc: false
---

# muOS 2405.2 BAKED BEANS

## Download
[Download it from our release build page!](https://dl.muos.dev/)
```
46a6793941b3b0879a4976f97b55d7bac04b92b6390430b1b4f77eab5fd29d9e  muOS-2405.2-BAKED-c293d8af.zip
```

## This is an update package
Please ensure that you are on the current [Refried Beans](/release/current/2405.1) version before updating to 2405.2

This update is for the **RG28XX** and **RG35XX** //2024/PLUS/H/SP// models!

Add the ``muOS-2405.2-BAKED.zip`` file to either SD1, SD2, or USB in the ``ARCHIVE`` folder and install using the Archive Manager which is found in Applications.

## MAKE SURE TO REBOOT AFTER INSTALL

## Support muOS
If you like using muOS and would like to see it grow, and potentially support more devices, feel free to give a tip or subscribe and get access to extra goodies within our Discord server!  
[Support muOS via Ko-fi](https://ko-fi.com/xonglebongle)

## Important
This update will render existing favourite and history entries useless.  An internal change has been made to ensure that favourites and history will always use the current core configuration set.  They are no longer singular launch files.  Please ensure you clear these out by using the task toolkit options.

## General Changes
- Added additional script function to automatically sync with Syncthing after content close
- Added ''allow-rotation:true'' to RetroArch configuration
- Added Android Debug Bridge support
- Added ''api.txt'' file for Syncthing fix
- Added back button to device selector only if factory reset is 0
- Added box art alpha to theme schema
- Added check for manually launched content
- Added CHIP-8 RetroArch core
- Added conditional for RG35XX-SP to switch off if powered on with lid closed
  - With the exception of being plugged into power
- Added disabled option to box art visual options
- Added dotclean routine to hotswap mount
- Added DPAD/Analogue switch on short ''POWER'' press with vibration alert
  - **1** vibration for analogue
  - **2** vibration for digital (DPAD)
- Added Dreamcast VMU to Save Backup script
- Added flipclock application - ''MENU'' to quit - ''A'' for 12/24 mode
- Added FreeJ2ME LibRetro BIOS
- Added gptokeyb to Pico8 to allow exiting with key combo 
- Added latest RetroArch ''hiscore.dat'' for FBNeo
- Added Mednafen PCE core to assignable list
- Added mGBA rumble core RetroArch info file
- Added missing background colour and alpha to muxapp module
- Added missing MAME cores and fix ''Arcade.ini'' assign
- Added network loopback device
- Added new moonlight application
- Added NSO-GBA and NSO-GBC LUT shader
- Added PICO-8 files to BIOS Backup script
- Added pixel AA shader
- Added PortMaster executable process catch all script
- Added PPSSPP Cheats archive to archive manager
- Added proper foreground process variable to device sleep wake routine
- Added skip directory+file system. See ''''MUOS/info/skip.ini'''' file.
- Added slight performance gain on content explore items
- Added startup removal of update scripts
- Added wait auto loader for last and resume game state for RetroArch
- Changed default governor from ''schedutil'' to ''ondemand'' with modified tuning
- Changed ''gamecontrollerdb.txt'' to symlink from device folder
- Changed MAME2003 ''xy_device'' from mouse to disabled
- Changed PCSX-ReARMed enhanced resolution and speed hack to disabled by default
- Changed ''same_cdi'' RetroArch to a previous version that runs
- Disabled audio and brightness adjustments if HDMI is in use
- Drastic-steward minor modifications
  - Modified ''screen1'' to keep it as a touch screen
  - Fixed ''hotkey + L2'' to be a quick load instead of a quick save
  - Added ''settings.json'' to maintain the pixel filter value
- Fixed application launchers to use module variable system
- Fixed audio channel in device specific configuration
- Fixed background music restarting between modules
- Fixed background music not starting after application launch
- Fixed borderless screen for drastic-steward
- Fixed core assigned catalogue on manual selection
- Fixed favourite and history nav bar issue
- Fixed favourite and history not using friendly name
- Fixed file permissions
- Fixed full-screen + behind for box art
- Fixed GMU Music Player HOME directory preventing launch
- Fixed HDMI sound not being reset on reboot
- Fixed input mapping state machine
- Fixed issue with general settings not updating sleep mechanism on some devices
- Fixed lower case cached name retrieval
- Fixed N64 controls on non H devices
- Fixed network SSID in global configuration
- Fixed PPSSPP controls across all devices
- Fixed PPSSPP menu scaling
- Fixed PPSSPP resolution for RG28XX
- Fixed preview image recolouring
- Fixed random charging state skip issue
- Fixed RetroArch command line issue
- Fixed root mount location for RG28XX
- Fixed screenshot being triggered due to stuck power key input
- Fixed task toolkit backup scripts
- Fixed task toolkit to use module variable system
- Modified application scripts to prevent variable leaks
- Modified catalogue generation to add missing Folder and Root structure
- Modified ''ondemand'' threshold and sampling down factor
- Modified skip routine to read all lines and place into memory first
- Modified simple terminal to use proper font
- Moved all scripts to a modular variable system
- Moved device type confirmation to ''X'' after factory reset
- Moved dotclean script from device startup to task toolkit
- Moved input combo states to simplified case switch
- Removed extra ''/'' on module paths
- Removed hardcoded value on UI counted objects on module load
- Removed RetroArch save state mechanism on sleep init
- Removed sleep vibration
- Removed soundfont archive (//default now set in base image//)
- Updated ''assign.json'' with additional names
- Updated friendly name list
- Updated path of hallkey for RG35XX-SP