---
layout: default
title: Artwork
permalink: /help/artwork
nav_order: 8
parent: Help
has_children: false
---

# muOS Artwork
## Changes since muOS Origin `v10`
Box Art / Preview Art / Game Text is no longer tied to the directory structure you use for your ROMs.  
All of these files are now stored in a location referred to as the **catalogue.**
![](assets/images/muos_boxart.png)
![](assets/images/muos_preview.png)

## muOS Catalogue Structure
Folders for all available systems should be automatically created for you.  
These systems match the `catalogue=` entry in `/mnt/mmc/MUOS/info/assign/<system>.ini`
### Example ini file
```ini
[global]
name=Atari 2600
default=Stella
catalogue=Atari 2600
cache=0
```
Here we can see the catalogue folder for this system is `Atari 2600`.  

**All game artwork should be named to match your ROMs.**  
```
SD1
└─ MUOS
    └── info
        └── catalogue
            ├── <System>
            │    ├── box
            │    │   └── romname.png
            │    ├── preview
            │    │   └── romname.png
            │    └── text
            │        └── romname.txt
            ├── Folder
            │    ├── box
            │    │   └── foldername.png
            │    ├── preview
            │    │   └── foldername.png
            │    └── text
            │        └── foldername.txt
            └── Root
                └── box
                     ├── sd1.png
                     └── sd2.png
```
As muOS assigns artwork by system, you will need to assign a core before artwork is displayed.  
Starting in `muOS Beans` it should attempt to assign a system automatically.

**Example**  
If you have some ROMs in:
```
/mnt/sdcard/roms/Nintendo/SNES/Action/*.zip
```
Artwork files for this system go in:
```
/mnt/mmc/MUOS/info/catalogue/Nintendo SNES-SFC/
```
The folder named **Folder** can be used to apply artwork to any folder in content explorer and just needs to match the folder name.  
(_not case sensitive_).
To have folder icons for all subdirectories listed, you would need:
```
catalogue
└── Folder
    └── box
        ├── nintendo.png
        ├── snes.png
        └── action.png
```

## Theme overrides for Artwork
The max width for the text of an item in content explorer is controlled by the theme.  This can result in scenarios where the item text is partially covered by the boxart. <br>
![](assets/images/muox_boxart_override_eample_1.png) <br>
You can override this behaviour so regardless of what theme you have installed the text will stop at a defined length.  In `/theme/override` you will find 3 files `muxfavourite.txt`, `muxhistory.txt`, and `muxplore.txt`.<br>

If you want to adjust just where the text auto ellipses you can set a value for FONT_LIST_PAD_RIGHT.  Example:
```
[font]
FONT_LIST_PAD_RIGHT=280
[misc]
CONTENT_WIDTH=-1
```
![](assets/images/muox_boxart_override_eample_2.png)<br>
If you also want the background bar of the item to resize you would instead adjust CONTENT_WIDTH. Example:
```
[font]
FONT_LIST_PAD_RIGHT=10
[misc]
CONTENT_WIDTH=360
```
![](assets/images/muox_boxart_override_eample_3.png)<br>

## antiKk's muOS Artwork
Skraper mixes, and Artwork for the Tiny Best Set are available here:  
[https://github.com/antiKk/muOS-Artwork](https://github.com/antiKk/muOS-Artwork)
