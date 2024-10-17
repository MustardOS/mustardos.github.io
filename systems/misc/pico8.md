---
layout: default
title: PICO-8
permalink: /systems/misc/pico8
parent: Miscellaneous
grand_parent: Systems
nav_enabled: true
has_children: false
has_toc: false
---

![](assets/images/pico8.png)

## PICO-8 Emulator Files

Native PICO-8 is now supported!  
Starting with muOS Banana, the pico8 files can go in your `MUOS/bios/pico8` on either SD1 or SD2 depending on where you've chosen to put those.  
Older version of muOS require the files here: `/MUOS/emulator/pico8`
The files required to run PICO-8 natively are stored on SD1 in the /MUOS/emulator/pico8 folder.  
In order to use native PICO-8 you'll need to place your own purchased binaries in there.  
You will need a copy of the following files from the **Raspberry Pi** version:  
- pico8_64
- pico8.dat

![](assets/images/pico-8.png)

muOS by default uses the Fake-08 libretro core for PICO-8 as it doesn't require users to purchase PICO-8.
Once you add your purchased files from Lexaloffle you'll need to set muOS to use the PICO-8 External emulator.
- Browse to where your PICO-8 games are in muOS content explorer.
- Press select on any of the items and change core.
- Select ``PICO-8 (External)`` 

**Legacy Instructions**
For muOS v10 you need the 32bit binary.
- pico8_dyn
- pico8.dat

## Where can I get those binaries?
You can purchase PICO-8 from lexaloffle.  
[https://www.lexaloffle.com/pico-8.php](https://www.lexaloffle.com/pico-8.php)

## Can I use Splore?
You sure can!  
You can either create a blank file named Splore.p8 [case sensitive] in your PICO-8 ROMs folder, or it will be automatically created for you when you first assign the PICO-8 (External) core.  
**Simply launch that Splore file and you're in!**
