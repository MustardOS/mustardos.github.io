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

## IWADs or PWADs?

Within your Doom content directory create a directory named `.WAD` (capitalisation matters!). You will need to place
required files based on your `.doom` file within.

* IWAD files are the commercial, or shareware, of the parent WAD that is always required to run the content.
* PWAD files are patch files that change how the game looks, sounds, functions etc.
* DEH files are DeHackEd files which are used to modify the gameplay.

The launch script will look at this central repository of files for anything it requires to copy to the game directory.

## Creation of Files to run Doom Content

In to root of your Doom running directory create a text file named `<name of game>.doom` with the following contents:

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
wadfile_2 "VSMOOTH.WAD"
wadfile_3 ""
wadfile_4 ""
wadfile_5 ""
wadfile_6 ""
wadfile_7 ""
wadfile_8 ""
dehfile_1 "VSMOOTH.DEH"
dehfile_2 ""
```

## Directory Structure

Example layout of Doom content

```
.
├── .WAD
│   ├── DOOM.WAD
│   ├── SIGILC.WAD
│   ├── VSMOOTH.DEH
│   └── VSMOOTH.WAD
├── Doom.doom
└── Sigil.doom
```

Upon launching it will automatically create the `.Sigil` directory if it does not exist, copy across all the required
files within the `Sigil.doom` file if they do not exist, and then load based on the launch name which will create
unique save files for each Doom game.

## Compatibility

Please note that not all PWADs you find on the internet will be compatible with PrBoom, if you search for vanilla mods
you will have full compatibility.

## File Extensions

Some operating systems like to hide extensions by default leading sometimes to files being renamed improperly.
Ensure that your `<name of game>.doom` file has the `.doom` extension only by allowing your system to show extensions.

* For MacOS you can
  follow, [https://support.apple.com/en-au/guide/mac-help/mchlp2304/mac](https://support.apple.com/en-au/guide/mac-help/mchlp2304/mac)
* For Windows you can
  follow, [https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/)
