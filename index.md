---
layout: default
title: Welcome
nav_enabled: true
nav_order: 0
has_children: true
---

<section class="hero">
    <div class="hero-text">
        <h1 class="hero-title"><strong>MustardOS</strong></h1>
        <p class="hero-tagline">Configurable, themeable, friendly, <span class="nowrap">easy-to-use</span>.</p>
        <p class="hero-desc">
            MustardOS gives your handheld a fresh, modern interface that you can shape to suit you. Change the look,
            the layout and how it behaves, then get on with playing.
        </p>
        <div class="hero-actions">
            <a href="tour" class="btn btn-primary fs-5 text-grey-dk-300">Take the Grand Tour</a>
            <a href="devices" class="btn fs-5">Download</a>
        </div>
    </div>
    <div class="hero-media">
        <div class="menu-mock" id="menu-mock" tabindex="0" role="group"
             aria-label="Playable MustardOS main menu. Use the arrow keys to move and Enter to open.">
            <div class="menu-mock-screen booting" id="menu-mock-screen">
                <video class="menu-mock-wall" id="menu-mock-wall" src="/assets/menu/wall.mp4" poster="/assets/menu/wall.jpg"
                       muted loop playsinline autoplay preload="metadata" aria-hidden="true"></video>
                <div class="menu-mock-header">
                    <span id="menu-mock-time">02:28 AM</span>
                    <span class="menu-mock-status">
                        <i class="menu-mock-icon network" style="--glyph: url(/assets/menu/network_active.svg)"></i>
                        <i class="menu-mock-icon battery" style="--glyph: url(/assets/menu/capacity_80.svg)"></i>
                    </span>
                </div>
                <div class="menu-mock-grid" id="menu-mock-grid">
                    <a class="menu-mock-tile active" href="/tour/modules/muxplore" data-label="Explore Content"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/explore.svg)"></i></a>
                    <a class="menu-mock-tile" href="/tour/modules/muxcollect" data-label="Collections"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/collection.svg)"></i></a>
                    <a class="menu-mock-tile" href="/tour/modules/muxhistory" data-label="History"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/history.svg)"></i></a>
                    <a class="menu-mock-tile" href="/tour/modules/muxapp" data-label="Applications"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/apps.svg)"></i></a>
                    <a class="menu-mock-tile" href="/tour/modules/muxinfo" data-label="Information"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/info.svg)"></i></a>
                    <a class="menu-mock-tile" href="/tour/modules/muxconfig" data-label="Configuration"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/config.svg)"></i></a>
                    <a class="menu-mock-tile" href="#" data-label="Reboot" data-power="reboot"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/reboot.svg)"></i></a>
                    <a class="menu-mock-tile" href="#" data-label="Shutdown" data-power="shutdown"><i class="menu-mock-glyph" style="--glyph: url(/assets/menu/grid/shutdown.svg)"></i></a>
                </div>
                <div class="menu-mock-label" id="menu-mock-label">Explore Content</div>
                <div class="menu-mock-footer">
                    <i class="menu-mock-icon nav-a" style="--glyph: url(/assets/menu/a.svg)"></i> Select
                </div>
                <div class="menu-mock-boot" aria-hidden="true"><img src="/assets/menu/bootlogo.png" alt="" width="720" height="480"></div>
                <div class="menu-mock-power" id="menu-mock-power" hidden></div>
            </div>
        </div>
        <div class="menu-mock-help">
            <span>Explore with the arrow keys, a controller, or a tap</span>
            <button type="button" class="menu-mock-sound" id="menu-mock-sound" aria-pressed="false">Sound off</button>
        </div>
    </div>
</section>

## Features

MustardOS ships packed with quality of life touches, from the pause menu you land in mid-game to how your library
looks and feels. Here is a small taste, refreshed every time you load this page.

<div class="feature-grid" id="feature-grid">
    <noscript>
        <a class="feature-card" href="/tour/modules/muxretro">
            <img src="/tour/assets/glyphs/muxretro/settings.svg" alt="" width="40" height="40">
            <div class="feature-card-title">Pickles</div>
            <p>Our own Libretro core player, with themed menus, flexible saves, controls, visual tools, multiplayer, and achievements.</p>
        </a>
    </noscript>
</div>

<button type="button" id="feature-refresh" class="feature-refresh">&#8635; Refresh Features</button>

<script src="/assets/js/feature-grid.js"></script>
<script src="/assets/js/menu-mock.js"></script>

***

## Download

Write MustardOS to an SD card with any image flashing tool, then insert the card into your handheld and power it on
so MustardOS can set itself up on the first boot.

[View Supported Devices](devices){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }

{: .note }
> Always ensure you download from our official download page or supported mirrors!

***

## Join the Community

What began as a small personal hobby project has grown into a thriving community of passionate people who share
the same love for games, tinkering, and discovery.

[Discord](https://discord.gg/mustardos-1152022492001603615){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }
[Forum](https://community.muos.dev/){: .btn .fs-5 .mb-4 .mb-md-0 .mr-2 }
[IRC](https://web.libera.chat/#MustardOS){: .btn .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Instagram](https://instagram.com/muos.dev){: .btn .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Twitter/X](https://x.com/@_mustardOS){: .btn .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Merch](https://shop.muos.dev/){: .btn .fs-5 .mb-4 .mb-md-0 }

[Read About Our Story](about){: .fs-3 }

***

## Handy Hotkeys

A quick reference of general frontend hotkeys, plus dedicated Pickles, RetroArch, and LED hotkey tables.

[View All Hotkeys](hotkeys){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }

<div itemscope itemtype="https://schema.org/WebSite">
  <meta itemprop="url" content="https://muos.dev"/>
  <meta itemprop="name" content="MustardOS - Custom Firmware"/>
</div>
