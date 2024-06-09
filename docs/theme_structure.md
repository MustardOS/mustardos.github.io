---
title: Theme Structure
layout: default
parent: Themes
nav_order: 1
has_toc: false
---

# Theme Folder Structure
For a theme to function as intended, you will need to use the proper folder structure containing all your files in the correct
place. Below is an example of the correct structure that you can replicate if you are creating/editing a theme.

```
.
├── credits.txt
├── font
│   └── default.bin
├── image
│   ├── bootlogo.bmp
│   ├── overlay.png
│   ├── static
│   |   ├── muxlaunch
│   |   |   ├── explore.png
│   |   |   ├── favourite.png
│   |   |   ├── history.png
│   |   |   ├── apps.png
│   |   |   ├── info.png
│   |   |   ├── config.png
│   |   |   ├── reboot.png
│   |   |   └── shutdown.png
│   |   └── muxinfo.png
│   └── wall
│       ├── default.png
│       ├── muxtester.png
│       └── muxcharge.png
├── scheme
│   ├── default.txt
│   └── muxtester.txt
├── music
└── sound  
```
In the above example, there are some files here that are not necessary to have a *working* theme - however the elements included
above show off the amount of possible customisation available.
- **font** - Here is where you can place custom fonts compiled into a `.bin` format.
- **image** - Place all image assets of your theme here. Animated images are also supported (use `.gif`).
  - **static** - Images can be set to sit on top of other elements. They are named following their associated program.
  - **wall** - All backgrounds used sit here. Anything named `default.xxx` is applied on all programs without dedicated assets.
- **scheme** - The brain of the theme. This file will tell your device how windows and text should appear per program, and will also
               tell your device how to use the files you have dropped into your image folder.
- **music** + **sound** - These folders will contain files heard during your time in the muOS menus. Yet to be implemented.
  
# Program Names
muOS has numerous programs, so they are individually named so that you Themers can set different properties for every single page if
you so wish to do so!
Anything named ```default.xxx``` in the above folder structure can be renamed to  ```mux...``` to apply ideas to single pages.

You can also set images to appear for individual list items (see the files above under `./image/static/muxlaunch/`. 
> *Caution - as muOS is a constantly updating system, there is a high chance that in time, list items will be added or removed
from sections. Be wary of this when creating graphics that show all the options for a program.*

Check out the updated naming conventions of all muxprograms below;
```
muxcharge - Charging Screen
muxlaunch - Main menu
- explore / favourite / history / apps / info / config / reboot / shutdown

muxplore - Content Explore page
muxassign - Shows when assigning a core

muxfavourite - Favourites page
muxhistory - History page

CURRENTLY DISABLED >>> muxapps - Applications page
                       - archive / dingux / gmu / portmaster / retroarch / terminal / commander

muxinfo - Information page
- tester / system / credit
muxtester - Input Tester
muxcredits - Supporters
muxsysinfo - System Details
- version / kernel / uptime / cpu / speed / governor / memory / temp / service
  / capacity / voltage

muxconfig - Configuration page
- general / theme / network / service / clock / device

muxtweakgen - General Settings
- hidden / bgm / startup / colour / brightness / hdmi / sleep / shutdown
  / battery / sleep / interface / advanced
muxvisual - Interface Options (within General Settings)
- battery / network / clock / boxart
muxtweakadv - Advanced (within General Settings)
- swap / thermal / font / volume / offset / lock / led

muxtheme - Theme Picker
muxnetwork - Wi-Fi Network page
- enable / identifier / password / type / address / subnet / gateway / dns
  / status / connect
muxnetscan - Shows when scanning for networks
CURRENTLY DISABLED >>> muxwebserv - Web Services page
                       - shell / browser / terminal / sync / ntp
muxrtc - Date and Time page
- year / month / day / hour / minute / notation / timezone
muxdevice - Device type page (will differ for muOS on RG28XX)
- rg35xx-h / rg35xx-plus / rg35xx-sp / rg35xx-2024
```