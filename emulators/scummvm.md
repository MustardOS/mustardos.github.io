---
layout: default
title: ScummVM
permalink: /emulators/scummvm
parent: Emulators
nav_enabled: true
has_children: false
has_toc: false
---

![](assets/images/scummvm__modern_remastered__logo.png)

| Version       | Core               | Build           |
|:--------------|:-------------------|:----------------|
| Libretro Core | scummvm_libretro.so | 2.9.0-git |
| Standalone    | ext-scummvm         | 2.8.1 |

{: .new}
> Starting with muOS Banana ScummVM Standalone is the default.

## ScummVM (Standalone) Keys _(WIP)_

| Button                        | Action             |
|:------------------------------|:-------------------|
| Left Stick                    | Move virtual mouse |
| DPAD (Stickless devices only) | Move virtual mouse |
| R1                            | Slow Virtual Mouse |
| A                             | Interact           |
| Y                             | Skip Cutscene      |
| Select                        | Virtual Keyboard   |
| Start                         | Menu               |

## Where should I put my games?
ScummVM game files should all exist in a sub-directory of your main ScummVM folder inside your muOS roms folder.  
For example:
```roms/ScummVM/.Day of the Tentacle```

## Creation of files to run ScummVM content
ScummVM determines which game it is launching by using a special text file named after the directory the game files exist in.  
Assume you have your game files for **Day of the Tentacle** in the following folder.
```
.
└─ roms
   └── SCUMMVM
       └── .Day of the Tentacle
```
You would now need to create a file named `Day of the Tentacle.scummvm`  
This text file needs to contain the **Full Game ID** for the game you are trying to add.  
In our example the file would contain `scumm:tentacle`  
For a list of all possible Game IDs please see [ScummVM Game IDs](https://www.scummvm.org/compatibility)

## How can I hide the game files directory?
OK, so now that you've set that up, you no longer want to see the Day of the Tentacle folder in the games list.  
That's easy. muOS will hide any directory that has a prepended `.`  
So simply rename that folder to `.Day of the Tentacle`

## Example Layout of ScummVM Game
```
.
└─ roms
   └── SCUMMVM
       ├── .Day of the Tentacle
       │   └── <game files here>
       └── Day of the Tentacle.scummvm
```

## Known Issues with ScummVM Standalone
- Native mouse movement for the DPAD isn't working. For now we're leveraging muOS analogue<>dpad swap functionality for stickless devices.
- Menu cursor in Grim Fandango is invisible. This can be fixed by forcing the Software renderer, but performance is much worse.
