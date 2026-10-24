---
layout: default
title: Moving from RetroArch
permalink: /installation/retroarch-to-pickles
nav_order: 3
parent: Installation
has_toc: false
---

# **Moving from RetroArch**

Pickles is the MustardOS Libretro player. It runs the same cores as RetroArch, so most games play the same way, but
it keeps its own saves, settings and menus. This page explains what carries over from RetroArch, what needs to be set
up again, and how to bring your save games across.

## Choosing Pickles for your content

Pickles is chosen first for any system that supports it. Content that was assigned to RetroArch before stays with
RetroArch until you change it. Highlight the content or folder in Explore Content, press **X** to open Content Options,
choose **Core**, and press **Left** or **Right** to pick the Pickles version of the core. Use the **Recursive** scope
on a top folder to change every folder below it at once, as described in
[Core Assignment]({{ site.baseurl }}/systems/cores).

## Bringing your saves across

The **Import RetroArch Saves to Pickles** task copies your RetroArch save games, and your save states if you choose,
into Pickles. Your RetroArch files are left untouched, and a save that Pickles already has is never replaced, so the
task is safe to run again whenever you like.

<div class="guide-steps four" markdown="0">
    <div class="guide-step"><strong>Assign Pickles first</strong>Set the content to the Pickles version of the core
        you used in RetroArch. The task only imports a save when the content it belongs to is assigned to a matching
        core.</div>
    <div class="guide-step"><strong>Open the task</strong>Head to Applications, then Task Toolkit, then Migration
        Tasks, and choose Import RetroArch Saves to Pickles.</div>
    <div class="guide-step"><strong>Choose what to import</strong>Pick Save Games and States, or Save Games Only.</div>
    <div class="guide-step"><strong>Read the report</strong>When it finishes, the task lists what was copied and what
        was skipped. The full report is saved to <code>MUOS/log/retroarch-pickles-import.txt</code> on SD1.</div>
</div>

The task looks for RetroArch saves in `MUOS/save/file` and save states in `MUOS/save/state`, each sorted into a folder
for the core that made them. It matches each file to your content by name across SD1, SD2 and USB storage.

<div class="guide-paths" markdown="0">
    <div><code>Save games</code><span>The <code>.srm</code>, <code>.sav</code>, <code>.eep</code>, <code>.fla</code>,
        <code>.sra</code>, <code>.mpk</code>, <code>.ram</code>, <code>.nv</code> and <code>.rtc</code> types are
        copied to <code>MUOS/pickles/sram</code>, where Pickles finds them the next time the game starts.</span></div>
    <div><code>Save states</code><span>Each state is added to the next free numbered slot, up to 64 for each game,
        named Imported RetroArch State with its slot number, along with its screenshot when RetroArch saved
        one.</span></div>
</div>

A file is skipped and listed in the report when:

- no content with a matching name is assigned to a matching Pickles core;
- more than one piece of content matches, so the right one cannot be worked out;
- the file was saved with RetroArch save file compression switched on, which Pickles cannot read;
- the game already has its 64 save state slots in use.

Save states depend on the exact core version that made them, so a state from an older RetroArch core may not load
in Pickles. Save games do not have this problem, so load from your in-game save if a state fails.
{: .note }

To bring across a single save game from your computer, use **Import** in the Pickles Saves section of the
[Web Dashboard]({{ site.baseurl }}/web/dashboard).

## What needs setting up again

Pickles does not read RetroArch configuration files, so these settings start fresh. Each one is changed from the
Pickles Menu, opened with **MENU** while you play.

| RetroArch                    | In Pickles                                                                                                          |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------|
| Overrides and core options   | [Settings]({{ site.baseurl }}/tour/modules/muxretro-settings) and [Core Options]({{ site.baseurl }}/tour/modules/muxretro-options) |
| Remaps                       | [Button Mapping]({{ site.baseurl }}/tour/modules/muxretro-buttonmapping) under Settings > Input for each port      |
| Hotkeys                      | [Hotkeys]({{ site.baseurl }}/tour/modules/muxretro-hotkeys) under Settings > Input                             |
| Shaders                      | [Shaders]({{ site.baseurl }}/tour/modules/muxretro-shaders), which use their own format                            |
| Overlays                     | [Overlay]({{ site.baseurl }}/tour/modules/muxretro-overlay) images from Downloads or your own folders              |
| RetroAchievements sign in    | [RetroAchievements]({{ site.baseurl }}/tour/modules/muxretro-settings-cheevo) in Settings                         |

When you leave a Pickles settings screen after a change, it asks whether the change should apply to This Content,
This Core, This Directory or This Session Only, which covers what game, core and directory overrides did in
RetroArch. [Pickles and Wasabi]({{ site.baseurl }}/docs/infrastructure/players) explains how these levels work
together.

RetroArch cheat files do carry over. Place the `.cht` file for a game in `MUOS/pickles/cheats`, inside a folder named
after the core file and the same folders the game sits in under `ROMS`, and Pickles converts it the next time the game
starts, as described in [Cheats]({{ site.baseurl }}/tour/modules/muxretro-cheats).

## Controls in each player

| Action                    | RetroArch          | Pickles           |
|:--------------------------|:-------------------|:------------------|
| Open the in-game menu     | **MENU + X**       | **MENU**          |
| Quit back to the frontend | **MENU + START**   | **MENU + START**  |
| Save and load a state     | **MENU + R2 / L2** | **MENU + R2 / L2** |
| Show the frame rate       | **MENU + Y**       | **MENU + Y**      |

**MENU + X** opens the RetroArch menu, but in Pickles it shows or hides the header. The
[Hotkeys]({{ site.baseurl }}/hotkeys) page lists every shortcut for both players.

## Going back to RetroArch

RetroArch stays installed, so you can switch any content back from **Content Options > Core** at any time. The community article
[Pickles vs RetroArch](https://community.muos.dev/t/pickles-vs-retroarch/1592) compares the two in more detail.
