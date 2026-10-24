---
layout: default
title: Pickles and Wasabi
parent: How MustardOS Works
permalink: /docs/infrastructure/players
nav_order: 5
---

# **Pickles and Wasabi**

<div class="guide-grid" markdown="0">
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxretro/pickles.svg" alt="" width="48" height="48">
        <span class="guide-title">Pickles</span>
        <span class="guide-text">Pickles loads a Libretro core directly and presents its controls through MustardOS,
            styled by the active theme.</span>
        <div class="guide-tags">
            <span>Core options</span><span>Save states</span><span>SRAM</span><span>Input mapping</span><span>Controller profiles</span>
            <span>Macros</span><span>Hotkeys</span><span>Achievements</span><span>Game Link</span><span>Netplay</span><span>Patches</span>
            <span>Manuals</span><span>Shaders</span><span>Colour filters</span><span>Overlays</span><span>Video corrections</span>
        </div>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxmedia/wasabi.svg" alt="" width="48" height="48">
        <span class="guide-title">Wasabi</span>
        <span class="guide-text">Wasabi is the <code>muxmedia</code> module, assigned to media folders through Core
            Assignment like any other launcher and styled by the active theme.</span>
        <div class="guide-tags">
            <span>Video</span><span>Audio</span><span>Playlists</span><span>Live television</span><span>Live radio</span><span>Bookmarks</span>
            <span>History</span><span>Collections</span><span>Visualisers</span><span>Shaders</span><span>Overlays</span><span>Vignettes</span>
            <span>Gapless playback</span><span>Cross-fade</span><span>Hotkeys</span>
        </div>
    </div>
</div>

## How settings are saved

When you leave a settings screen after changing something, both players ask where the change should apply:

<div class="guide-paths" markdown="0">
    <div><code>This Content</code><span>Only the game or piece of media that is playing.</span></div>
    <div><code>This Core</code><span>Every game played with the same core. Pickles only.</span></div>
    <div><code>This Directory</code><span>Everything in the same folder.</span></div>
    <div><code>This Session Only</code><span>Keep the change until you stop playing, without saving it.</span></div>
    <div><code>Discard</code><span>Undo the change.</span></div>
</div>

Wasabi starts from its built-in defaults, then applies folder settings and finally content settings, so content
settings always win. In Pickles, missing or invalid values fall back to the defaults, so nothing ever needs migrating.
Wasabi keeps its settings, bookmarks, history and downloaded filters, shaders and overlays with its save data.

## Softpatching

Pickles applies <code>.ips</code>, <code>.bps</code> and <code>.ups</code> patches, such as translations and fixes, as a
game loads, without changing the original file:

<div class="guide-paths" markdown="0">
    <div><code>SNES/Super Metroid.ips</code><span>A patch with the game's name, minus its extension, always applies. Number
        more to stack them, such as <code>Super Metroid1.bps</code>.</span></div>
    <div><code>SNES/Super Metroid.sfc/</code><span>A folder named exactly like the game, extension included. Put the game
        and any patches inside, and choose which ones to use from the Patches screen in the Pickles Menu.</span></div>
</div>

[Patches]({{site.baseurl}}/tour/modules/muxretro-patches) in the Grand Tour explains both methods in full.

## How Wasabi plays audio

Playback runs through a static FFmpeg build with only the decoders Wasabi uses, so it does not depend on the system's
own media libraries. Every audio extension belongs to exactly one backend:

<div class="guide-paths" markdown="0">
    <div><code>SDL_mixer</code><span>MIDI, played with the selected soundfont.</span></div>
    <div><code>Game Music Emu</code><span>Console chiptunes.</span></div>
    <div><code>libsidplayfp</code><span>Commodore 64 SID music.</span></div>
    <div><code>vgmstream</code><span>Console game audio streams.</span></div>
    <div><code>FFmpeg</code><span>Everything else, including tracker modules through libopenmpt.</span></div>
</div>

Files that contain several songs list them as Tracks.

## Read more

The [Pickles Grand Tour]({{site.baseurl}}/tour/modules/muxretro) and
[Wasabi Grand Tour]({{site.baseurl}}/tour/modules/muxmedia) cover every menu, and
[Supported Formats]({{site.baseurl}}/tour/modules/muxmedia-formats) lists every file type Wasabi can play. The
community article [Pickles vs RetroArch](https://community.muos.dev/t/pickles-vs-retroarch/1592) introduces both ways
to run Libretro cores.
