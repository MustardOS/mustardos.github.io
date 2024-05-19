---
layout: default
title: Add Content
permalink: /help/addcontent
nav_order: 2
parent: Help
has_children: false
---

## Where do I put my content?
One of the key differentiators between muOS and other CFW's is its flexibility with content storage.
Essentially, it _most_ doesn't care where you put things.

The only firm rule is that all your content **must be in sub-folders** under a folder named **roms**.

This can be on SD1, SD2 or both.

### Example
```
.
└─ ROMS
   ├── SEGA
   │    ├── Master System
   │    │   └── <game files here>
   │    └── Mega Drive
   │        └── <game files here>
   ├── Nintendo Entertainment Sytem
   │   └── <game files here>
   └── SNES
       └── <game files here>
```
## What about Multi-Disc Content?
Some systems split their content over multiple discs. The preferred way to handle these so that your content list isn't cluttered with all the disc names is to use `.m3u` & `.chd` files.

A handy article on how to convert to CHD can be found [here.](https://wiki.recalbox.com/en/tutorials/utilities/rom-conversion/chdman)

To prevent the individual discs appearing in the content list simply move them to a hidden subfolder. Folders can be hidden by prefixing the name with a `.` or `_`
### Example
Here's how you would setup a multi-disc game to only have one entry in the content list.
```
.
└─ roms
   └── Sony Playstation
        ├── .hidden
        │   └── <game discs here>
        └── Final Fantasy VII.m3u   
```
In this example the `Final Fantasy VII.m3u` would contain the following.
```
.hidden/Final Fantasy VII (Disc 1).chd
.hidden/Final Fantasy VII (Disc 2).chd
.hidden/Final Fantasy VII (Disc 3).chd
```

## Incorrect M3U Files
Please note that some created ROM sets like TinyBestSet come with incorrect M3U formatting and will need to be modified for it to work with muOS!
## What about BIOS files?
muOS conforms to libretro standards for BIOS files.  
For information around which particular BIOS you need, please consult their documentation:

[https://docs.libretro.com/library/bios/](https://docs.libretro.com/library/bios/)

NOTE: muOS does not supply any BIOS files!{: .label .label-yellow }

muOS requires that its BIOS files be located in ``/mnt/mmc/MUOS/bios``  
Most files can be placed in the root of that folder unless otherwise specified by the libretro docs.

## How does muOS know what my content is?
This is one of the key features of muOS.

When you first browse through to a folder, simply try launching some content.  
If muOS doesn't know what it is, it will prompt you to select which system it's for.

### Example
If I attempt to launch content from my SNES folder it will prompt which system.  
Here I'm selecting the system ``Nintendo SNES-SFC``

You can then select which core you would like to use. In this case I'd select ``Beetle Supafaust``.

Once done, muOS knows that folder contains ``Nintendo SNES`` content and will no longer prompt.

## I chose poorly
What happens if you inadvertently choose a core you don't want or like?  
No problem. Simply hit `SELECT` on a game and it'll prompt you to choose again!
