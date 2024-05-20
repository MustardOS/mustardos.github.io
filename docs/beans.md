---
title: 2405 Beans
layout: default
parent: RG35XX 2024, Plus, H, SP
grand_parent: Release
permalink: /docs/splush24/
nav_order: 1
---

# muOS 2405 Beans
## Download
[Download it from our release build page](https://dl.muos.dev/RG35XX-PLUSH24/)

``2b0796202dfcb010dcf47b8cd3ed35100d0dace9909560306e748cbb2d4633c7  muOS-RG35XX-2405-BEANS.img``
## Alternative
[Torrent File](https://dl.muos.dev/RG35XX-PLUSH24/muOS-RG35XX-2405-BEANS_t1.torrent)

## Support muOS
If you like using muOS and would like to see it grow, and potentially support more devices, feel free to give a tip or subscribe and get access to extra goodies within our Discord server!

[Support muOS via Ko-fi](https://ko-fi.com/xonglebongle)

## Significant Changes
  * ``AARCH64`` is now default architecture (Major thanks to both @siliconexarch and @acmeplus)
    * This is a major change to the underlying system and _should_ bring some performance benefits!
    * Would not have been possible if not for @siliconexarch finding a 64-bit compatible system!
  * Archive Manager introduction
    * Place your specially crafted ``.zip`` files in a folder called ARCHIVE on your SD cards to install them
    * [Guide to create archives **LINK TBC**](../index.md)
  * Automatic assigned cores to content folders
    * Pre-defined folder names are automatically assigned cores so you can start playing straight away!
  * Backup Manager introduction
    * Specifically crafted scripts will allow you to backup anything and everything
  * Dropbear has now been replaced by OpenSSH
  * Dynamic SD2 and USB Support
    * SD2 can now be removed and plugged back in without rebooting the device
    * USB-C memory sticks to be available in the Content Explorer
    * Reports have said external SSDs work well too!
  * Filebrowser has been replaced with [SFTPGo](https://github.com/drakkan/sftpgo)
    * Full SFTP support including web interface
      * Username and password is ``muos``
      * SFTP port is ``2022``
      * WebUI port is ``9090``
  * GMU Music Player has been added (Thanks @antikk)
  * Indicators for brightness and volume are now visible onscreen
  * Micro terminal editor has been added
    * This can be accessed through SSH
  * Network can now scan for surrounding Wi-fi networks
    * Press ``X`` when network enabled to start scan
    * This will automatically fill in the Identifier field
  * New theme icon glyphs for all menu icons
    * Glyphs can now be moved independently from the label
    * Pre-installed themes have been updated to use the new schema
  * Passcode Lock function to help unwanted fingers ruining your save game
    * Add a lock for boot, launch, and or settings
    * On-device configuration coming in a future update!
  * Pre-installed background music - 6 exciting tracks!
    * Music generously provided by [Cilantro Productions](https://soundcloud.com/cilantro-productions) (Thanks @fudgeycaca)
  * Refreshed header UI
    * Header item visibility can be toggled in Configuration
  * RetroArch updated to 1.18.0 (Thanks @shengy)
    * Changes can be found here: [RetroArch 1.18.0 release](https://github.com/libretro/RetroArch/blob/master/CHANGES.md)
    * Updated gpSP and mGBA cores
    * Updated Mupen core (Thanks @UHAX)
    * Updated PCSX ReARMed core
  * Updated external emulators
    * Amiberry (Thanks @koolkidkorey)
      * Still needs KeyBinds configured
    * DraStic (Thanks @antikk)
    * Mupen64Plus (Thanks @koolkidkorey)
    * PPSSPP (Thanks @koolkidkorey)
    * ScummVM (Thanks @antikk)
  * Updated PortMaster to stable release
    * Can now use both 64-bit ``AARCH64`` and 32-bit ``ARMHF`` ports (Thanks @kloptops)
  * Volume setting has been fixed
    * Will now be saved upon reboot and shutdown
    * New option in Advanced Settings to boot with low volume
  * Wallpapers now supported for individual list items (_where supported_)
    * Animated GIF support is included
    * More information can be found here: [Generic Program Wallpapers **LINK TBC**](../index.md)

## General Changes
  * Added "A+B Button Swap" to Advanced Settings
  * Added "Colour Temperature" in General Settings
    * This replaced "Night Mode"
  * Added DuckStation and SwanStation default configs for better performance (Thanks @antiKk)
  * Added Fish shell as default root shell (Thanks @kloptops)
  * Added "HDMI Output" in General Settings
  * Added individual device script support
  * Added Ko-fi Support screen after first system init
    * This screen will automatically close after ``10`` seconds
  * Added LED During Play function
    * Allows you to toggle the green LED during gameplay
  * Added logger module for verbose messages
  * Added menu acceleration
  * Added Network Configuration restore option
  * Added "Show Hidden Content" in General Settings
  * Adjusted internal build scripts
  * Adjusted main configuration file defaults
  * Background music is now theme independant
    * It now lives in ``MUOS/music`` and will only play MP3 files
  * Content explorer automatically loads single SD/USB storage on load
  * Disabled theme based navigation sounds until we move to pipewire
  * Fixed blue outline on drop-down elements
  * Fixed box art loading issue
  * Fixed box art preferred location option
  * Fixed brightness setting not saving properly
  * Fixed content explorer UI flashing
  * Fixed issue with launching content with extra ``.`` in the filename
  * Fixed missing theme engine variables
  * Fixed name cache for content explorer
  * Fixed network configuration refresh
  * Fixed network kernel module loading (Thanks @twvd)
  * Fixed out-of-sync dynamic list items
  * Fixed RetroArch top-right graphics glitch
  * Fixed RTC daylight savings bug (Thanks @irilivibi)
  * Fixed thermal zone control script
  * Fixed update system due to change with compression files
  * Fixed verbose boot colour and alpha values
  * Improved screen refresh
  * Internal script structure changed to allow development flexibility
  * List items are now case insensitive allow upper and lowercase names to co-exist
  * List items have been reduced from 14 to 13
    * This allows the expansion of future CJK support
  * Moved zero content messages to centre screen
  * Optimised network manager status report
  * Password asterisks in Network Manager OSK have been removed
  * Removed Debug, Battery, and SD Sync in Advanced Settings
  * Removed Screenshot option in General Settings
  * Removed header and footer image support
    * Header and footer background alpha support has been added
    * Wallpaper can now be used to theme header and footer if needed
  * Renamed Credits to Supporters
  * Separated core info into individual files for better maintenance
  * Theme manager now switches themes without leaving and stays on index
  * Theme schema has been improved with extra functionality
    * Horizontal and vertical navigation styles are introduced
  * Updated verbose boot messages for system init
