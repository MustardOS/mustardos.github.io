---
layout: default
title: EasyRPG
permalink: /emulators/easyrpg
parent: Emulators
nav_enabled: true
has_children: false
has_toc: false
---

![](assets/images/easyrpg_logo.png)

| Version       | Core               | Build           |
|:--------------|:-------------------|:----------------|
| Libretro Core | easyrpg_libretro.so | 0.8 |

## Creation of files to run EasyRPG content
In the root of the roms/EasyRPG directory create a text file named `<name of game>.cfg` containing the name of the file used to launch the game.  
**This filename must match the directory name the game files are in (without the . prefix)**  
Content that can be loaded by the EasyRPG core have the following file extensions:
- .ldb
- .zip
- .easyrpg

You will need to find the name of the file to add.  The usual file is called **RPG_RT.ldb.**  
More information here: [https://docs.libretro.com/library/easyrpg/](https://docs.libretro.com/library/easyrpg/)

## Hide the game directory
To hide the Easy RPG game files directory (or any directory) just prepend the folder name with a `.`  
**Example Layout of EasyRPG Games**
```
.
└─ roms
   └── Easy RPG
       ├── .Grimm's Hollow
       │   │── Backdrop
       │   │   └── <game files here>
       │   └── Battle
       │       └── <game files here>
       └── Grimm's Hollow.cfg
```

**Quick PS script to create the config**
```powershell
# This should be run from a directory where the only subfolder is your extracted EasyRPG game
# It currently only handles one extracted game folder at a time.
#
#  └── Easy RPG
#     ├── .Some EasyRPG Game Folder
#     ├── easyme.ps1 [Place the script here..]
#     ├── Backdrop
#     │   └── <game files here>
#     └── Battle
#         └── <game files here>

# Get the first subdirectory name (This will determine the name of the config file created)
$firstSubdirectory = Get-ChildItem -Directory | Select-Object -First 1 -ExpandProperty Name

# Create a config file in the root directory and populate it with the correct EasyRPG launch file
$configFileName = "$firstSubdirectory.cfg"
$configFilePath = Join-Path -Path $PSScriptRoot -ChildPath $configFileName
$configContent = Get-ChildItem -Recurse -Include *.ldb, *.easyrpg | Select-Object -ExpandProperty Name
$configContent | Out-File -FilePath $configFilePath -Force -Verbose
```