---
layout: default
title: Kiosk Mode
permalink: /help/kiosk
nav_order: 5
parent: Help
has_children: false
---

## Getting Started
This is an example file that people can place at SD1:/MUOS/kiosk.ini  
[Example File](https://github.com/MustardOS/internal/blob/main/config/kiosk.ini.example)  
_(It's fairly self explanatory what each of the sections and keys do but let me know!)_  

## Processing
Upon device boot this file will be moved into /opt/muos/config/kiosk.ini so sticky fingers can't get access.  
If a clever cookie decides to create another file at SD1:/MUOS/kiosk.ini it won't work because the above exists.  
[Disabling Kiosk Mode](https://github.com/MustardOS/frontend/blob/main/module/muxlaunch.c#L432-L452)  

## Temporarily Disable
Press `L1 + R2 + Y` on the Reboot item. This will copy the `kiosk.ini` from `/opt/muos/config` back to `MUOS/kiosk.ini` and purge the file in `/opt/muos/config` so that upon _next_ reboot it will process the `kiosk.ini` file. Think of it like a quick change, there is no save mechanism for the `kiosk.ini` as I believe this should be done _outside_ of the device itself.  

## Permanently Disable
Press `L1 + R2 + X` on the **Reboot** item. This will purge the file at `/opt/muos/config/kiosk.ini` and reboot.