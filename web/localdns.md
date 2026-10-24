---
layout: default
title: Local DNS Resolver
permalink: /web/localdns
parent: Web Services
nav_order: 1
has_toc: false
---

# **Local DNS Resolver**

Gives your device an easy to remember address such as `muos.local`, so you do not need to look up its IP address. It
also finds the Web Dashboards of other MustardOS devices on your network.

## Settings

Open **Configuration > Connectivity > Web Services > Local DNS Resolver**.

<div class="guide-paths" markdown="0">
    <div><code>Service</code><span>Enabled by default. Starts or stops the <code>.local</code> name and the search for
        other devices.</span></div>
    <div><code>Local Name</code><span><code>muos</code> by default, the part before <code>.local</code>. Use letters,
        numbers and hyphens, up to 63 characters.</span></div>
</div>

If another device already uses `muos.local`, MustardOS picks a free numbered name such as `muos1.local`.
**Configuration > Connectivity > Web Dashboard Code** always shows the name your device ended up with.

## What it shares

With Local DNS enabled, these services announce themselves on the network, and other MustardOS dashboards appear in
the Web Dashboard's device switcher:

<div class="guide-tags" markdown="0">
    <span>Web Dashboard</span><span>Secure Shell</span><span>Secure File Transfer</span><span>Virtual Terminal</span><span>Syncthing</span>
</div>

`.local` names need support from your computer, phone and network. If the name does not work, use the device's IPv4
address instead.
{: .note }
