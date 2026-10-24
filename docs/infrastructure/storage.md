---
layout: default
title: Where Things Live
parent: How MustardOS Works
permalink: /docs/infrastructure/storage
nav_order: 6
---

# **Where Things Live**

## On the device

<div class="guide-paths" markdown="0">
    <div><code>/opt/muos/config</code><span>Persistent system and frontend settings.</span></div>
    <div><code>/opt/muos/share/info/content</code><span>Folder and content core assignments.</span></div>
    <div><code>/opt/muos/share/info/config</code><span>RetroArch global, core, folder and content configuration.</span></div>
    <div><code>/opt/muos/share</code><span>Bundled manifests, assets, web files and other shared resources.</span></div>
    <div><code>/run/muos</code><span>Temporary state shared by the frontend, services and launch process.</span></div>
</div>

## On your card

<div class="guide-paths" markdown="0">
    <div><code>MUOS/bios</code><span>System BIOS files.</span></div>
    <div><code>MUOS/info/manifest</code><span>An optional <code>core.json</code> of your own, plus the generated assignment index.</span></div>
    <div><code>MUOS/info/name</code><span>Friendly folder names, game name lookups and tags.</span></div>
    <div><code>MUOS/info/launch</code><span>The file each folder launches, set with <strong>Set Launch File</strong> in Explore Content.</span></div>
    <div><code>MUOS/info/catalogue</code><span>Artwork, including animated box and preview media, descriptions, manuals and catalogue configuration.</span></div>
    <div><code>MUOS/pickles</code><span>Pickles save data, save states, thumbnails and related details.</span></div>
    <div><code>MUOS/wasabi</code><span>Wasabi content and folder settings, history, bookmarks, screenshots and downloaded filters, shaders and overlays.</span></div>
    <div><code>MUOS/theme</code><span>Installed themes, active theme data and local theme overrides.</span></div>
    <div><code>MUOS/package</code><span>Installable catalogue and configuration packages.</span></div>
    <div><code>MUOS/screenshot</code><span>Screenshots taken with the screenshot hotkey.</span></div>
</div>

The storage configuration decides which mounted storage holds `MUOS`. Use the on-device menus or the Web Dashboard
for routine management, so caches and generated files stay in step.
