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
│   ├── header
|   │   └── default.bin
│   ├── footer
|   │   └── default.bin
│   ├── panel
|   │   └── default.bin
├── glyph
│   ├── muxlaunch
│   |   ├── explore.png
│   |   ├── favourite.png
│   |   ├── history.png
│   |   ├── apps.png
│   |   ├── info.png
│   |   ├── config.png
│   |   ├── reboot.png
│   |   ├── shutdown.png
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
- **font** - Here is where you can place custom fonts compiled into a `.bin` format.  Fonts placed in the panel subfolder will override the font used for list items.  Fonts placed in the header subfolder will override the font used for the header.  Fonts placed in the footer subfolder will override the font used for the footer.
- **glyph** - Place png images for list item glyphs.  See Program names section for full list of names.
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

List item glyphs will use the same List Item Names unless otherwise noted.

Check out the updated naming conventions of all muxprograms below;

| Program Name | Function | List Item Names |
|:--:|:--|:--|
|muxcharge|Charging Screen|-|
|muxlaunch|Main Menu|explore / favourite / history / apps / info / config / reboot / shutdown|
|muxplore|Content Explore Page|*Use `/MUOS/catalogue` outside of themes to create list item wallpapers.*<br><br>Item Glyphs: history / favourite / folder / rom|
|muxassign|Shows when assigning a core to a folder.|Item Glyphs: system / core|
|muxfavourite|Favourites page|Item Glyph: favourite|
|muxhistory|History page|Item Glyphs: favourite / history|
|muxapp|Dynamic applications page|*List item wallpapers named directly after application names. Default example here;* <br>Archive Manager / Dingux Commander / GMU Music Player / Moonlight / PortMaster / RetroArch / Simple Terminal / Task Toolkit<br><br>Item Glyphs: archive / dingux / music / portmaster / retroarch / terminal / task / app|
|muxarchive|Archive Manager page|Item Glyphs: archive / archiveinstalled|
|muxtask|Task toolkit page|Item Glyph: task|
|muxinfo|Information page|tester / system / credit|
|muxtester|Input Tester|-|
|muxsysinfo|System details|version / kernel / uptime / cpu / speed / governor / memory / temp / service / capacity / voltage|
|muxconfig|Configuration page|general / theme / network / service / clock / device|
|muxtweakgen|General Settings|hidden / bgm / sound / startup / colour / brightness / hdmi / shutdown / battery / sleep / interface / storage / advanced|
|muxvisual|Interface Options (within General Settings)| battery / network / bluetooth / mux_clock / boxart / name / dash / counterfolder / counterfile|
|muxtweakadv|Advanced (within General Settings)|swap / thermal / font / volume / brightness / offset / lock / led / theme / retrowait / android / state / verbose
|muxtheme|Theme Picker page|Item Glyph: theme|
|muxnetwork|Wi-Fi Network Page|enable / identifier / password / type / address / subnet / gateway / DNS / status / connect|
|muxnetprofile|Network Profiles (within Wi-FI).|Item Glyph: netprofile|
|muxnetscan|Shows when scanning for networks.|Item Glyph: netscan|
|muxwebserv|Web Services page|shell / browser / terminal / sync / ntp|
|muxrtc|Date and Time page|year / month / day / hour / minute / notation / timezone|
|muxtimezone|Timezone Selection|Item Glyph: timezone|
|muxdevice|Device type page (will differ for muOS on RG28XX)|rg35xx-h / rg35xx-plus / rg35xx-sp / rg35xx-2024|
|muxpass|Passcode Lock Screen|-|
|muxstorage|Storage Preferences|bios / config / catalogue / fav / music / save / screenshot / theme|
