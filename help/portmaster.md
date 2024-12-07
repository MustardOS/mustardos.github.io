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

## What if a port doesn't run?the 
Look for a `log.txt` in `/ports/<portname>` for any possible issues.  
Head over to [PortMaster Discord](https://discord.gg/SR4vbp5c3p) and let them know!
