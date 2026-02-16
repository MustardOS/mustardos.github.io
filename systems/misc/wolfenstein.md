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

## Creation of Files to run Wolfenstein Content

In to root of your Wolfenstein 3D running directory create a text file named `<name of game>.wolf` with the following contents:

```
VGAHEAD.WL6
```

Then create a directory with the same name as the file you just created without the extension.

```
<name of game>
```

Place all of the required Wolfenstein 3D files within that directory.

## Directory Structure

Example layout of Wolfenstein 3D content

```
.
├── .Wolfenstein 3D
│   ├── AUDIOHED.WL6
│   ├── AUDIOT.WL6
│   ├── CONFIG.WL6
│   ├── GAMEMAPS.WL6
│   ├── MAPHEAD.WL6
│   ├── VGADICT.WL6
│   ├── VGAGRAPH.WL6
│   ├── VGAHEAD.WL6
│   └── VSWAP.WL6
└── Wolfenstein 3D.wolf
```

# Keybinds

Please refer to the [Handy Hotkeys](/#handy-hotkeys) on the homepage for keybindings.

## File Extensions

Some operating systems like to hide extensions by default leading sometimes to files being renamed improperly.
Ensure that your `<name of game>.wolf` file has the `.wolf` extension only by allowing your system to show extensions.

* For MacOS you can
  follow, [https://support.apple.com/en-au/guide/mac-help/mchlp2304/mac](https://support.apple.com/en-au/guide/mac-help/mchlp2304/mac)
* For Windows you can
  follow, [https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/)
