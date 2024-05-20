---
layout: default
title: Archive Manager
permalink: /help/archive
nav_order: 3
parent: Help
has_children: false
---

# Archive Manager
**muOS Beans** introduces a new archive manager for easily restoring backup up content.

NOTE: Only install archives that you trust!
{: .label .label-yellow }

**We accept no responsibility for either the content of your archives or any loss of data or functionality as a result of using this feature.**  

The Archive Manager is located at `Applications > Archive Manager`
![](assets/images/archive.png)

## How does it work?
If it doesn't exist, you can create a folder named `ARCHIVE` in the root of `SD1, SD2, USB`   
Here you can place specially created archive manager `.zip` files.  
The archive manager will extract the contents of **any** `.zip` file, so it's important that they are created correctly.
### Example
```
SD2
└── Archive
    ├── BIOS Files.zip
    ├── Retroarch Overrides.zip
    ├── Save Games.zip
    └── WiFi Config.zip
USB
└── Archive
    └── Box Art.zip
```

## How should I structure the Archive .zip files?
Each archive file extracts to / so this means you need to ensure that the archive contains the **Full Path** you wish to extract to.  
### Example
To create an archive of your muOS saves the zip should contain the complete file path.
```
mnt
└─ mmc
   └── MUOS
       └── save
           ├── file
           │   └── <core>
           │       └── <save files>
           └── state
               └── <core>
                   └── <save files>
```
SD1 root is `/mnt/mmc`   
SD2 root is `/mnt/sdcard`   
USB root is `/mnt/usb`  

## What can I restore with this Archive Manager?
It's very flexible and can be used for pretty much anything.  
Simply create a `.zip` file with the correct path.
### Example
Want to backup and restore your favourite games? Go for it!
```
mnt/sdcard/roms/Game Boy Color/Opossum Country.zip
```
Want to share your latest Pokemon save with a friend? No problem!
```
mnt/mmc/MUOS/save/file/gpSP/Pokemon Emerald.srm
```
