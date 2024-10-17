---
layout: default
title: Doom
permalink: /systems/misc/doom
parent: Miscellaneous
grand_parent: Systems
nav_enabled: true
has_children: false
has_toc: false
---

![](../assets/images/prboom.png)

| Version       | Core               | Build           |
|:--------------|:-------------------|:----------------|
| Libretro Core | prboom_libretro.so | 2.5.0 (6ec8549) |

## Where to create in the ROMs folder
Doom game files should all exist in a subdirectory of your main Doom folder in your ROMS directory. For example `ROMS/Doom/.Sigil` or `ROMS/Doom/.Ultimate Doom`

## IWADs or PWADs?
Doom uses two categories to separate content, you have IWAD (internal WAD) and PWAD (patch WAD). You will need to place all IWAD files into their own directory `ROMS/Doom/.IWADS`. These are the main commercial WADs for Doom, Doom 2, Ultimate Doom, Heretic etc. These are important and are required for games to run. 

## Creation of Files to run Doom Content
In to root of the `ROMS/Doom` directory create a text file named `<name of game>.doom` with the following contents:
```
parentwad ""
wadfile_1 ""
wadfile_2 ""
wadfile_3 ""
wadfile_4 ""
wadfile_5 ""
wadfile_6 ""
wadfile_7 ""
wadfile_8 ""
dehfile_1 ""
dehfile_2 ""
```

## An Example of Loading SIGIL
```
parentwad "DOOM.WAD"
wadfile_1 "SIGILC.WAD"
wadfile_2 ""
wadfile_3 ""
wadfile_4 ""
wadfile_5 ""
wadfile_6 ""
wadfile_7 ""
wadfile_8 ""
dehfile_1 ""
dehfile_2 ""
```

## Directory Structure
Example Layout of Doom Games
```
.
└─ ROMS
   └── DOOM
       ├── .IWAD
       │   └── DOOM.WAD
       ├── .Sigil
       │   ├── SIGILC.WAD
       ├── .Ultimate Doom
       ├── Sigil.doom
       └── Ultimate Doom.doom
```
As you can see "Ultimate Doom" will requires no additional PWAD files however the directory "Ultimate Doom" still needs to be created.

## Compatibility
Please note that not all PWADs you find on the internet will be compatible with PrBoom, if you search for vanilla mods you will have full compatibility. 