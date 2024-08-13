---
layout: default
title: PortMaster
permalink: /help/portmaster
nav_order: 8
parent: Help
has_children: false
---

## PortMaster in muOS
Massive thanks to @kloptops, @Cebion and the rest of the fine folks over at [https://portmaster.games](PortMaster).

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

## What if a port doesn't run?the 
Look for a `log.txt` in `/ports/<portname>` for any possible issues.  
Head over to [https://discord.gg/SR4vbp5c3p](PortMaster Discord) and let them know!
