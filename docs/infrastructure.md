---
layout: default
title: How MustardOS Works
permalink: /docs/infrastructure
nav_order: 5
has_children: true
has_toc: false
---

# **How MustardOS Works**

MustardOS is built from a small set of layers. Most people only ever see the themed frontend. Tinkerers can change
content, themes, catalogues and assignments on their card without rebuilding anything, and developers can work on a
single module, service or player while keeping the same configuration rules.

<div class="guide" markdown="0">
    <h2 class="guide-heading">The main parts</h2>

    <div class="guide-grid compact">
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxinfo/detail.svg" alt="" width="36" height="36">
            <span class="guide-title">Device Layer</span>
            <span class="guide-text">Board specific display, audio, input, power, storage and kernel settings.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxconfig/general.svg" alt="" width="36" height="36">
            <span class="guide-title">Internal Services</span>
            <span class="guide-text">Boot, networking, Bluetooth, audio routing, storage discovery, web services and
                launch scripts.</span>
        </div>
        <a class="guide-card" href="/tour/modules/muxlaunch">
            <img src="/tour/assets/glyphs/muxlaunch/explore.svg" alt="" width="36" height="36">
            <span class="guide-title">Frontend</span>
            <span class="guide-text">The themed menu modules used for browsing, configuration and device management.</span>
        </a>
        <a class="guide-card" href="/tour/modules/muxretro">
            <img src="/tour/assets/glyphs/muxretro/pickles.svg" alt="" width="36" height="36">
            <span class="guide-title">Pickles</span>
            <span class="guide-text">The MustardOS Libretro core player, with its pause menu and per-content
                settings.</span>
        </a>
        <a class="guide-card" href="/tour/modules/muxmedia">
            <img src="/tour/assets/glyphs/muxmedia/wasabi.svg" alt="" width="36" height="36">
            <span class="guide-title">Wasabi</span>
            <span class="guide-text">The MustardOS media player for video, music, playlists, live television and
                radio.</span>
        </a>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxapp/retroarch.svg" alt="" width="36" height="36">
            <span class="guide-title">RetroArch</span>
            <span class="guide-text">An available Libretro frontend with its own configuration and menus.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxapp/app.svg" alt="" width="36" height="36">
            <span class="guide-title">External Launchers</span>
            <span class="guide-text">Standalone emulators, engines, ports and utilities started through launch
                scripts.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxconfig/storage.svg" alt="" width="36" height="36">
            <span class="guide-title">Your Storage</span>
            <span class="guide-text">Content, saves, themes, catalogues, packages and your own configuration.</span>
        </div>
    </div>

    <h2 class="guide-heading">Dig deeper</h2>

    <div class="guide-grid">
        <a class="guide-card" href="/docs/infrastructure/boot">
            <img src="/tour/assets/glyphs/muxtweakgen/startup.svg" alt="" width="48" height="48">
            <span class="guide-title">Boot and Services</span>
            <span class="guide-text">What happens between power-on and the main menu, and the three kinds of location
                MustardOS uses.</span>
            <span class="guide-go">Read about booting</span>
        </a>
        <a class="guide-card" href="/docs/infrastructure/network">
            <img src="/tour/assets/glyphs/muxwebserv/landing.svg" alt="" width="48" height="48">
            <span class="guide-title">Network Services</span>
            <span class="guide-text">Local DNS, the Web Dashboard and the optional remote access services.</span>
            <span class="guide-go">Read about network services</span>
        </a>
        <a class="guide-card" href="/docs/infrastructure/direct-link">
            <img src="/tour/assets/glyphs/muxlink/usbcable.svg" alt="" width="48" height="48">
            <span class="guide-title">Direct Link</span>
            <span class="guide-text">Joining two devices with network adapters or a USB-C cable for netplay and Game
                Link, and which devices work together.</span>
            <span class="guide-go">Read about Direct Link</span>
        </a>
        <a class="guide-card" href="/docs/infrastructure/launching">
            <img src="/tour/assets/glyphs/muxassign/core.svg" alt="" width="48" height="48">
            <span class="guide-title">Frontend and Launching</span>
            <span class="guide-text">How the menu modules fit together, and what happens when you start a game or a
                piece of media.</span>
            <span class="guide-go">Read about launching</span>
        </a>
        <a class="guide-card" href="/docs/infrastructure/players">
            <img src="/tour/assets/glyphs/muxretro/controller.svg" alt="" width="48" height="48">
            <span class="guide-title">Pickles and Wasabi</span>
            <span class="guide-text">The game player and media player built into MustardOS, and how their settings are
                saved.</span>
            <span class="guide-go">Read about the players</span>
        </a>
        <a class="guide-card" href="/docs/infrastructure/storage">
            <img src="/tour/assets/glyphs/muxstorage/save.svg" alt="" width="48" height="48">
            <span class="guide-title">Where Things Live</span>
            <span class="guide-text">Every folder MustardOS uses on the device and on your card, and what each one
                holds.</span>
            <span class="guide-go">Read about storage</span>
        </a>
        <a class="guide-card" href="/docs/infrastructure/extending">
            <img src="/tour/assets/glyphs/muxstorage/package.svg" alt="" width="48" height="48">
            <span class="guide-title">Extending MustardOS</span>
            <span class="guide-text">Adding systems, themes, catalogues and software without changing the frontend
                itself.</span>
            <span class="guide-go">Read about extending</span>
        </a>
    </div>
</div>
