---
layout: default
title: Syncthing
permalink: /web/syncthing
parent: Web Services
nav_enabled: true
has_children: false
has_toc: false
---

## How to Setup Syncthing with PC and muOS

## Terminology

| Name | Description |
|:---|:---|
[Syncthing](https://syncthing.net/) | Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it’s transmitted over the internet. |

## General Idea
The guide will help you to setup Syncthing between a PC and muOS, if your host system is different the concept would be the same however you might need to tweak a few things.  
In this guide we'll be syncing the muOS `save` folder to a PC as a backup method.

1. Install/Setup Syncthing on your PC
2. Enable/Setup Syncthing in muOS

## Steps

### 1 Install and setup Syncthing for PC
Download from the [here](https://github.com/Bill-Stewart/SyncthingWindowsSetup/)

After installation head to [127.0.0.1:8384](127.0.0.1:8384), you should see something like the following

![PC just setup](assets/images/pc_setup.png)

### 1.1 Create a folder to sync that lives in PC

Click "Add Folder" and let's go through some important tabs

![PC Setup Folder Tab1](assets/images/add_folder.png)

You would need to create a folder label, and set the folder path, note that the path here is what folder do you want to sync on your PC.

Let's go to the File Versioning Tag

![PC Setup Folder File Versioning](assets/images/versioning.png)

Here you can setup how back up files are being versioned, I prefer a Simple File Versioning, you can see the details by clicking the Help link

![PC Setup Folder Advanced](assets/images/folder_advanced.png)

Here I'm changing the Folder Type to be "Receive Only" because I would only be receiving save files from my muOS, if you want to actually sync between your PC and muOS you can keep it as Send and Receive

## 2 Enable and Setup Syncthing in muOS
At this point we installed Syncthing in PC and we also setup a folder that would store our backed up save files on PC. Now we need to setup Syncthing in muOS.

First make sure your muOS is connected to WiFi and note down your IP, your IP should look similar to 192.168.1.217, from now on I would use 192.168.1.217 as the muOS IP.

In muOS main MENU -> Configuration -> WebServices -> Syncthing (toggle this to Enabled)

Once Syncthing is enabled in muOS, refresh [127.0.0.1:8384](127.0.0.1:8384), you should be seeing your PC recognizing a new device on network, add it in by clicking "Add Device", pick a name of your device and click "Save"

![PC Add Device](assets/images/add_device.png)

At this point you added muOS in PC, but on PC's "Remove Devices" section you would see "muos" showing as "Disconnected(Unused). Now you need to add PC in muOS

### 2.1 Add PC to muOS's Syncthing

Go to your muOS IP with port 7070, in my case it's `192.168.1.217:7070`, you should see the familiar Syncthing web UI, here you should be able to see it recogonizing your PC

![muos new device showing up](assets/images/new_device.png)

Click "Add Device"

![muos Add Device](assets/images/muos_add_device.png)

Pick a name of the device and click "Save"

Now you need to setup which folder in muOS to sync with your PC, under Folders section click "Add Folder", here it's pretty much the same as how you added a folder in PC, the Folder Label could be anything but the Folder ID needs to be same as the Folder ID you had in PC (wmtcf-gbjgs in this case), and you would need to set the folder path to `/mnt/mmc/MUOS/save` if you only want to backup the saves. It would be nice to setup File Versioning and change Advances to Send only to make sure the sync is going one way from muOS to PC in this setup

In "Sharing" tab also make sure to check your PC

![muos add folder sharing](assets/images/folder_sharing.png)

### 2.2 Go back to share PC folder with muOS

Go back to [https://127.0.0.1:8384/](https://127.0.0.1:8384/) and click on the folder you created, click on "Edit", go to Sharing tab and click `muos` (which is the device you are connected to)

![PC Add Folder Sharing](assets/images/pc_sharing.png)

## Caveats

Please note that that "Watch for Changes" option in Syncthing will not work on muOS due to the way fuseblk is used to mount the SD card. Make sure that this option is disabled on your muOS device and set the Full Rescan Interval to something appropriate for your setup (it will default to 60 seconds when this option is turned off).

## The End

At this point your muOS would send your save files to your PC :)