---
layout: default
title: PortMaster
permalink: /help/portmaster
nav_order: 10
parent: Help
has_children: false
---

## Disclaimer
PortMaster does not endorse or support any form of piracy. All ready-to-run ports included in our software are provided with full respect to the wishes and licenses of the respective copyright holders. We take intellectual property rights very seriously and ensure that our offerings comply with all relevant legal requirements and permissions.

It is important to note that game files for ports that are not ready-to-run must be obtained legally. Users are required to purchase or otherwise acquire these games through legitimate means to include support for them in PortMaster. By using our software, you agree to abide by these terms and respect the rights of content creators and developers.

## PortMaster in muOS
Massive thanks to @kloptops, @Cebion and the rest of the fine folks over at [PortMaster](https://portmaster.games).

## Compatibility
Starting with muOS Beans we have full Multi-Arch `aarch64` and `amrhf` support which increases compatibility significantly!

## muOS v10 and earlier
PortMaster on legacy build only supports `armhf` and updating to the latest release is strongly advised.

## Where does PortMaster install the ports?
PortMaster will detect whether or not you have an SD card in slot 2 and use that if it is available.  
If SD2 isn't available SD1 is used. The following example shows the relative path that the port **Stardew Valley** would go on either SD1 or SD2.

#### Example
```
.
├── ports
│   └── stardewvalley
│       └── <game files here>
└── roms
    └── PORTS
        └── Stardew Valley.sh
```

## What if a port doesn't run?
Look for a `log.txt` in `/ports/<portname>` for any possible issues.  
Head over to [PortMaster Discord](https://discord.gg/SR4vbp5c3p) and let them know!

## Offline Install Instructions

If you have a device that doesn't support Wifi (such as the Rg35xx) or otherwise cannot access WiFi, it is possible to install games. **This is not reccomended** as it is significantly more difficult. 


### Update PortMaster 
In order to ensure compatability of games, first download and install the latest release of PortMaster.

1) Download the latest version of the **muos.portmaster.zip** file from here https://github.com/PortsMaster/PortMaster-GUI/releases

2) Open the primary SD card and open the /ARCHIVE/ folder. Place the .zip file here. 

3) From MuOS, open Applications -> Archive Manager -> muos.portmaster

### Retrieve game runtimes

Many games share the same required files to run. Since this is an offline install, it's easiest to grab all of the required files at once. It is possible to check on a game-by-game basis which files are needed if you do not wish to do this. 

1) Go to https://portmaster.games/runtimes.html and download all the .squashfs files (you can ignore the .md5 files; they are only used to verify that any downloaded files have not been corrupted)

2) Put the .squashfs files in  ```(primary SD card)/MUOS/PortMaster/libs ```

### Download the PortMaster Port Files

1) Find the games you want from https://portmaster.games/games.html and press "Download".
**Note**: Each game will have instructions in their site for providing your files. Make sure to reference this for step 4!

2) Unzip the downloaded file. There will be a folder and a .sh file.

3) If you have two SD cards, open the second SD card. If you have 1 SD card, open the SD card. 
    * The folder goes in ```/ports/```
    * The .sh file goes in ```/roms/ports/```
If you are installing Stardew Valley, you will end up with:

```
/ports/stardewvalley/
/roms/ports/stardewvalley.sh
```

***Note:*** You might have to create the /ports/ folder in both cases.

4) Follow any additional instructions for the game. For example, Stardew Valley asks you to copy content into /ports/StardewValley/gamedata/

### Launch the game

To open the game, go to **Explore Content** -> Ports.
