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

| Name       | Version       | Core               |
|------------|:--------------|:-------------------|
| **PrBoom** | Libretro Core | prboom_libretro.so |

## What You Need

PrBoom needs a base game IWAD. Add-on content may also include PWAD, DEH, or BEX files.

* An IWAD is the base game and is always required.
* A PWAD adds or changes levels, graphics, sounds, and other game content.
* A DEH or BEX file changes game behaviour through a DeHackEd patch.

MustardOS recognises the usual IWAD names, including `DOOM.WAD`, `DOOM2.WAD`, `TNT.WAD`, `PLUTONIA.WAD`, and the
FreeDoom files. If none has a recognised name, the largest WAD in the folder is treated as the base game.

{: .important }
> PrBoom also needs `prboom.wad` in the `MUOS/bios` directory.

## Simple Setup

Create one folder for each game or mod set and give the folder a name ending in `.doom`. Place the required files
directly inside it. The folder name is what appears in Explore Content.

A base game needs only its IWAD:

```
Doom.doom/
└── DOOM.WAD
```

For a PWAD, place its base IWAD and add-on files together:

```
SIGIL.doom/
├── DOOM.WAD
├── SIGILC.WAD
├── VSMOOTH.DEH
└── VSMOOTH.WAD
```

Launch the `.doom` folder from Explore Content. MustardOS finds the files and prepares PrBoom automatically. The
base IWAD loads first, followed by up to seven PWADs and two DEH or BEX patches in filename order.

## Complete Example

```
ROMS/
└── Doom/
    ├── Doom.doom/
    │   └── DOOM.WAD
    └── SIGIL.doom/
        ├── DOOM.WAD
        ├── SIGILC.WAD
        ├── VSMOOTH.DEH
        └── VSMOOTH.WAD
```

MustardOS creates a hidden working folder beside each title when it is launched. This holds the generated PrBoom
configuration and keeps save data separate for each `.doom` folder. Your original WAD files stay where you placed
them.

## Compatibility

PrBoom is intended for Doom-compatible content. PWADs made for another source port may use features that PrBoom does
not support. Content described as vanilla or PrBoom compatible is the safest choice.

## File Extensions

Some operating systems hide extensions by default. Make sure the folder name ends in `.doom`.

* For macOS, follow the [Apple file extension guide](https://support.apple.com/en-au/guide/mac-help/mchlp2304/mac).
* For Windows, follow the [Windows file extension guide](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/).

