---
layout: default
title: Wolfenstein 3D
permalink: /systems/misc/wolfenstein
parent: Miscellaneous
grand_parent: Systems
nav_enabled: true
has_children: false
has_toc: false
---

| Name       | Version       | Core               |
|:-----------|:--------------|--------------------|
| **ECWolf** | Libretro Core | ecwolf_libretro.so |

## What You Need

Use the complete data set from the game you want to run. A Wolfenstein 3D set usually contains files such as
`VGAHEAD.WL6`, `GAMEMAPS.WL6`, and `VSWAP.WL6`.

ECWolf also recognises the usual shareware, Spear of Destiny, and Noah 3D data extensions. Add-on files such as
`.pk3`, `.ecwolf`, `.wl6a`, `.bmp`, and `.cfg` can sit beside the base data.

## Simple Setup

Create one folder for each title and give the folder a name ending in `.wolf`. Place the game data directly inside
it. The folder name is what appears in Explore Content.

```
Wolfenstein 3D.wolf/
├── AUDIOHED.WL6
├── AUDIOT.WL6
├── GAMEMAPS.WL6
├── MAPHEAD.WL6
├── VGADICT.WL6
├── VGAGRAPH.WL6
├── VGAHEAD.WL6
└── VSWAP.WL6
```

Launch the `.wolf` folder from Explore Content. MustardOS finds the data and prepares ECWolf automatically. An `.exe`
from the data set is used when one is present. No launcher text file is required.

## Complete Example

```
ROMS/
└── Wolfenstein 3D/
    └── Wolfenstein 3D.wolf/
        ├── AUDIOHED.WL6
        ├── AUDIOT.WL6
        ├── GAMEMAPS.WL6
        ├── MAPHEAD.WL6
        ├── VGADICT.WL6
        ├── VGAGRAPH.WL6
        ├── VGAHEAD.WL6
        └── VSWAP.WL6
```

MustardOS creates a hidden working folder beside each title when it is launched. This keeps save data separate for
each `.wolf` folder. Your original game data stays where you placed it.

## Controls

Open the Pickles Menu while playing to change the controller, button mapping, stick behaviour, or other input
settings for this title. The default shortcuts are listed on the [Handy Hotkeys](/hotkeys) page.

## File Extensions

Some operating systems hide extensions by default. Make sure the folder name ends in `.wolf`.

* For macOS, follow the [Apple file extension guide](https://support.apple.com/en-au/guide/mac-help/mchlp2304/mac).
* For Windows, follow the [Windows file extension guide](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/).

