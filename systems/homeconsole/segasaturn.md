---
layout: default
title: Sega Saturn
parent: Home Console
grand_parent: Systems
permalink: /systems/homeconsole/saturn
nav_enabled: true
has_children: false
has_toc: false
---

![](../assets/images/yaba.png)

# Available Emulators

| Name               | Type             | Version           |
|:-------------------|:-----------------|:------------------|
| YabaSanshiro       | Libretro Core    | 2.6.8             |
| YabaSanshiro-Ext   | Standalone       | 1.9.0             |
| Yabause            | Libretro Core    | 0.9.15            |

## YabaSanshiro Standalone Button Mapping

| Button                  | Action                   |
|:------------------------|:-------------------------|
| SELECT                  | YabaSanshiro Menu        |
| START                   | START                    |
| Y                       | A                        |
| B                       | B                        |
| A                       | C                        |
| X                       | X                        |
| L1                      | Y                        |
| R1                      | Z                        |
| L2                      | L                        |
| R2                      | R                        |

## YabaSanshiro Standalone Compatibility List
[RG ARC Saturn Compatibility List](https://docs.google.com/spreadsheets/d/1GJfdZuFZLvtn6l6K16dvRrBRXopnKWZLqA42QmHhqQU/edit?gid=0#gid=0)  
This list should give a good overview of what can be expected on YabaSanshiro External, compatibility and perfomance wise.  
Even though the list was compiled for the RG ARC, it is also pretty accurate for the H700 chipset!  

## YabaSanshiro Standalone Bios Files
YabaSanshiro-Ext supports the use of an optional Sega Saturn BIOS file.  
The BIOS file needs to be named 'saturn_bios.bin' and placed in `/MUOS/bios`.  

Using a BIOS *can* improve performance and fix graphical issues in some games.  

***Do note that some games will require a specific region BIOS or will not work with a BIOS at all.***  

If a game boots into a black screen after playing the BIOS animation, try assigning the YabaSanshiro (External - No BIOS) core to it.
