---
layout: default
title: Boot and Services
parent: How MustardOS Works
permalink: /docs/infrastructure/boot
nav_order: 1
---

# **Boot and Services**

## From power-on to the main menu

<div class="guide-steps five" markdown="0">
    <div class="guide-step"><strong>Firmware and kernel</strong>The device firmware and kernel start the hardware.</div>
    <div class="guide-step"><strong>Storage</strong>MustardOS mounts storage and prepares its runtime paths.</div>
    <div class="guide-step"><strong>Hardware services</strong>Input and the essential hardware services start.</div>
    <div class="guide-step"><strong>Display and audio</strong>The display and audio routes are restored.</div>
    <div class="guide-step"><strong>Frontend</strong>The frontend launches and the main menu appears.</div>
</div>

Networking runs on its own, separately from the main menu, so a slow or missing network never holds the frontend
back. Services that need a network become available once an interface and address are ready.

## Three kinds of location

<div class="guide-paths" markdown="0">
    <div><code>/run/muos</code><span>Temporary files the frontend, services and launch process use to coordinate.
        They are gone after a restart.</span></div>
    <div><code>MUOS</code><span>Your persistent choices, saves and content, kept on the selected storage.</span></div>
    <div><code>/opt/muos</code><span>Read-only application resources and programs.</span></div>
</div>

[Where Things Live]({{site.baseurl}}/docs/infrastructure/storage) lists every folder in detail.

[Network Services]({{site.baseurl}}/docs/infrastructure/network) covers the remote access services that start alongside
the frontend.
