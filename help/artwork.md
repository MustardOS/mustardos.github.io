---
layout: default
title: Artwork
permalink: /help/artwork
nav_order: 6
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
            │    └── foldername.png
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
    ├── nintendo.png
    ├── snes.png
    └── action.png
```
## antiKk's muOS Artwork
Skraper mixes, and Artwork for the Tiny Best Set are available here:  
[https://github.com/antiKk/muOS-Artwork](https://github.com/antiKk/muOS-Artwork)
