---
layout: default
title: Upgrade to Pixie
permalink: /help/upgradepixie
nav_order: 2
parent: Help
has_children: false
---

## Requirements
- This guide is designed for all previous version of muOS

## Can I directly upgrade over the top of muOS Banana/Beans/ETC?
No. You must perform a full flash as there is significant changes that will not be able to apply without the full build.

## Migrating Data
The answer to this dilemma is migrating all of your user data to SD Card 2.  
Starting with muOS Banana you can store saves, configs, artwork, bios and more on SD2.

To faciliate this migration please navigate to Applications > Task Toolkit and run **Migrate to SD2**

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
- Network Profiles (Not applicable to Baked Beans)
- PICO-8 Files
- Saves (Drastic, Retroarch, OpenBOR, PPSSPP)

## Additional Notes 
Once the script is completed you will be able to navigate to Configuration > Storage and move any additional data to SD2 at your leisure.

<div itemscope itemtype="https://schema.org/WebSite">
  <meta itemprop="url" content="https://muos.dev"/>
  <meta itemprop="name" content="muOS - Custom Firmware"/>
</div>
