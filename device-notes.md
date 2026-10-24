---
layout: default
title: Device Notes
description: Hardware features that are switched off by default on some devices, and how to switch them back on.
permalink: /devices/notes
nav_order: 2
has_toc: false
---

# **Device Notes**

Some hardware features are switched off by default on certain devices, usually because they caused more problems
than they were worth. Here is what has been switched off, which devices it applies to, and how to switch it back on
if you would like to use it anyway.

## Network

These devices have no Wi-Fi built in and can only get online with a supported USB Wi-Fi dongle. Network support is
off by default, so MustardOS does not spend time at startup looking for a connection that is not there.

<div class="device-tags" markdown="0"><span>RG28XX H</span><span>RG35XX 2024</span><span>G350</span><span>Pixel 2</span></div>

## HDMI Output

The RG Vita Pro has an HDMI port, but we have switched its output off for now until it works reliably.

<div class="device-tags" markdown="0"><span>RG Vita Pro</span></div>

## Switching a feature back on

Each of these features can be switched back on from the device settings, which are tucked away in Device Details.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Open Device Details</strong>Head to Information, then Device Details.</div>
    <div class="guide-step"><strong>Press START on Device</strong>Highlight Device at the top of the list, press
        START and confirm the warning to open the <a href="/tour/modules/muxdevice">device settings</a>.</div>
    <div class="guide-step"><strong>Switch it on</strong>Set Network Integration or HDMI Integration to
        Enabled, then restart your device.</div>
</div>

These settings change how MustardOS works with your hardware. Only switch on a feature your device can actually
use, and switch it back off if anything starts acting up.
{: .warning }
