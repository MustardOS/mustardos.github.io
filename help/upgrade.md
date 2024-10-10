---
layout: default
title: Upgrading from Previous Version
permalink: /help/upgrade
nav_order: 2
parent: Help
has_children: false
---

## Requirements
- This guide is designed for people running muOS **Baked Beans**.
- Any other version is not supported!
- You **must** be using a 2 SD card setup.

## Can I directly upgrade over the top of muOS Baked Beans?
Unfortunately no.
The move from muOS Baked Beans to muOS Banana involved a huge rework of the underlying systems.
The changes to the file system makes a direct upgrade **impossible**.

## Migrating Data
The answer to this dilemma is migrating all of your user data to SD Card 2.  
Starting with muOS Banana you can store saves, configs, artwork, bios and more on SD2.

To faciliate this migration we have prepared the following script which can be installed using the Archive Manager in muOS Baked Beans.

{: .warning}
> While we do our best to ensure this script works correctly, **please backup** any data you do not want to lose!  
> **Use of this script is at your own risk!**  
> The Migrate Script **does not** remove any data from SD1

### Download
[Migrate_Script_Installer.zip](https://github.com/antiKk/muOS-docs/raw/refs/heads/banana/help/assets/files/Migrate_Script_Installer.zip)

## How to use
- **BACKUP YOUR IMPORTANT DATA**
- Copy ``Migrate_Script_Installer.zip`` into the Archive folder in the root of either SD Card
- In muOS, navigate to Applications > Archive Manager
- Install the ``Migrate_Script_Installer.zip``archive
- Reboot your console
- In muOS, navigate to Applications > Task Toolkit
- Run ``Migrate to SD2``
- Once completed, ensure once more you have backed up your data and turn off your console.
- Flash muOS Banana to an SD card, leaving your old SD2 inserted.

## What does it migrate to SD2?
The migrate script will **copy** (not move) the following to SD2 into a location usable by muOS Banana
The script also exists in Banana and is used to move to a 2 SD Card setup.
- BIOS
- Catalogue (Artwork)
- Config (Retroarch core config/overrides)
- Content (Core assignment, history, favourites) (Not applicable to Baked Beans)
- Languages (Not applicable to Baked Beans)
- Music
- Name (Not applicaple to Baked Beans)
- Network Profiles (Not applicaple to Baked Beans)
- PICO-8 Files
- Saves (Drastic-Steward, Retroarch, OpenBOR, PPSSPP)

## Known Issues
- DraStic saves are not migrated as we only have DraStic-Steward in muOS Banana
- Themes are not migrated due to theme changes in muOS Banana

<div itemscope itemtype="https://schema.org/WebSite">
  <meta itemprop="url" content="https://muos.dev"/>
  <meta itemprop="name" content="muOS - Custom Firmware"/>
</div>
