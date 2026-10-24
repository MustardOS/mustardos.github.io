---
layout: default
title: Direct Link
parent: How MustardOS Works
permalink: /docs/infrastructure/direct-link
nav_order: 3
---

# **Direct Link**

Direct Link joins two MustardOS devices with a cable so they can play together without a Wi-Fi network. Pickles
netplay and Game Link see the other device as if both were on the same network, and Wi-Fi stays available for
everything else.

<div class="guide-grid" markdown="0">
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxlink/interface.svg" alt="" width="48" height="48">
        <span class="guide-title">Network Adapters</span>
        <span class="guide-text">A supported USB wired network adapter on each device, joined with a network
            cable.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxlink/usbcable.svg" alt="" width="48" height="48">
        <span class="guide-title">USB-C Cable</span>
        <span class="guide-text">A single USB-C data cable between two supported devices, with nothing else
            needed.</span>
    </div>
</div>

## How the USB-C cable works

One device powers the cable, and the other is powered and charged by it. Each device works out which end it is from
the port the cable is plugged into, so nothing needs to be chosen by hand, and either device can host the game.

Some devices have two USB-C ports, a charging port and another port. These are all of the TrimUI devices and the
Anbernic RG35XX H. Connect the **charging port of one device** to the **other port of a device with two USB-C
ports**. The device with two ports powers the cable, and its own charging port stays free for a charger.

{: .note }
At least one of the two devices needs two USB-C ports. Two devices with only one USB-C port each cannot be joined
with a cable.

## Devices

| Device                | USB-C cable   | Charging port | Other port |
|-----------------------|---------------|---------------|------------|
| Anbernic RG28XX H     | Supported     | USB-C         | None       |
| Anbernic RG34XX H     | Supported     | USB-C         | None       |
| Anbernic RG34XX SP    | Supported     | USB-C         | None       |
| Anbernic RG35XX 2024  | Supported     | USB-C         | None       |
| Anbernic RG35XX H     | Supported     | DC            | OTG        |
| Anbernic RG35XX PLUS  | Supported     | USB-C         | None       |
| Anbernic RG35XX PRO   | Supported     | USB-C         | None       |
| Anbernic RG35XX SP    | Supported     | USB-C         | None       |
| Anbernic RG40XX H     | Supported     | USB-C         | None       |
| Anbernic RG40XX V     | Supported     | USB-C         | None       |
| Anbernic RGCUBEXX     | Supported     | USB-C         | None       |
| Anbernic RG SP        | Supported     | USB-C         | None       |
| TrimUI Brick          | Supported     | Bottom        | Top        |
| TrimUI Brick Pro      | Supported     | Bottom        | Top        |
| TrimUI Smart Pro      | Supported     | Charging      | Other      |
| Anbernic RG Vita Pro  | Not available | -             | -          |
| GKD Pixel 2           | Not available | -             | -          |
| BatleXP G350          | Not available | -             | -          |

Devices marked **Not available** do not show the **USB Cable** setting, and can still use network adapters.

### Examples

<div class="guide-paths" markdown="0">
    <div><strong>RG35XX H and Brick Pro</strong><span>RG35XX H <strong>OTG</strong> to Brick Pro
        <strong>Bottom</strong>, or Brick Pro <strong>Top</strong> to RG35XX H <strong>DC</strong>.</span></div>
    <div><strong>Brick and Brick</strong><span><strong>Top</strong> of one to <strong>Bottom</strong> of the
        other.</span></div>
    <div><strong>RG40XX H and Brick</strong><span>Brick <strong>Top</strong> to the RG40XX H USB-C port.</span></div>
    <div><strong>RG40XX H and RG35XX PLUS</strong><span>Not possible with a cable, as neither has a second USB-C
        port. Use network adapters.</span></div>
</div>

## Turning it on

1. Open **Configuration > Connectivity > Direct Link** on both devices.
2. Set **USB Cable** to **Enabled** on both.
3. Connect the cable as shown above.
4. Wait a few seconds for **USB Cable** and **Status** to show **Connected**.

Then open Pickles netplay or Game Link as usual. **USB Function** (ADB or MTP) is paused while **USB Cable** is
enabled, and returns when it is disabled.

## If it does not connect

<div class="guide-paths" markdown="0">
    <div><strong>No USB Cable setting</strong><span>The device does not support the USB-C cable. Use network adapters
        instead.</span></div>
    <div><strong>Waiting For Cable</strong><span>Check the ports, that <strong>USB Cable</strong> is enabled on both
        devices, and that the cable carries data. Many charging-only cables do not.</span></div>
    <div><strong>Connects, then drops every few seconds</strong><span>The device powering the cable is low on battery.
        Connect a charger to its charging port.</span></div>
</div>

## For tinkerers

| Item              | Detail                                                                    |
|-------------------|---------------------------------------------------------------------------|
| Setting           | `/opt/muos/config/settings/network/usb_cable`, `0` or `1`                 |
| Service           | `mulink`, the Direct Link service                                         |
| Network interface | `usblink0`, with a private `169.254.x.x` address chosen automatically     |
| USB identity      | `1d6b:0110`, vendor interface class `ff`, subclass `4d`, protocol `4c`    |
| Status file       | `/run/muos/network/link`, where `cable=` is `off`, `waiting`, `device`, `host`, `failed` or `unsupported` |
