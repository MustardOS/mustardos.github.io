---
layout: default
title: Core Assignment
permalink: /systems/cores
parent: Systems
nav_enabled: true
nav_order: 1
has_children: false
---

# **Core Assignment**

Core Assignment decides how a content item or folder starts. It stores the selected system, core, player,
catalogue, lookup setting, CPU governor and control profile together so the launch path is repeatable.

## Assigning content

From Explore Content, highlight a game or folder, press **X** to open Content Options, then open **Core**.

1. Choose a namespace such as Handheld, Home Console, Arcade or Computer.
2. Choose the system.
3. Choose a core. Press **Left** or **Right** where the same core is available through more than one player.
4. Choose the assignment scope.

| Scope | Result |
|---|---|
| Content | Applies only to the selected file. |
| Directory | Applies to content directly inside the current folder. |
| Recursive | Applies to the current folder and its subfolders. |

Content-specific settings take priority over a directory assignment. A nearer directory assignment takes priority
over a recursive assignment inherited from a parent folder.

## Additional Cores

Core Assignment shows the systems and cores that suit most people, which keeps each list short. Many more come with
MustardOS but stay out of sight until you ask for them, so a system or core you expected may seem to be missing.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Open Advanced</strong>In Configuration, highlight <strong>General</strong>,
        press <strong>X</strong> and confirm the warning.</div>
    <div class="guide-step"><strong>Switch it on</strong>In the System section, set <strong>Additional
        Cores</strong> to Enabled, then leave the screen and save the change.</div>
    <div class="guide-step"><strong>Assign as usual</strong>The extra systems and cores now appear in Core
        Assignment beside the main ones.</div>
</div>

With Additional Cores enabled:

- extra systems appear in the system list, such as the Atari Jaguar, GCE Vectrex, Mattel Intellivision, the 3DO,
  the Sinclair ZX Spectrum and several Commodore computers, along with game engines such as OpenLara and
  PuzzleScript;
- extra cores appear for the main systems, such as further MAME and FinalBurn Alpha versions for Arcade, more Game
  Boy, NES and SNES cores, and melonDS for the Nintendo DS;
- Core Management lists the extra Libretro cores, so they can be installed and updated.

Turning the setting off again only shortens the lists. Content already assigned to an extra system or core keeps
working, and folders with a recognised name are still assigned to an extra system automatically. The
[Systems]({{ site.baseurl }}/systems) pages list every core for each system, with the extra ones marked Additional.

A few cores only appear on the devices that can run them. The Nintendo 3DS, for example, is only listed on the
RG Vita Pro, because Azahar is its only emulator.
{: .note }

## Automatic assignment

MustardOS builds an assignment index from the `friendly` names in `core.json`. Folder names
are converted to lower case and stripped of spaces, hyphens, underscores and plus signs before lookup. A matching
system uses its `default` core.

Defaults are resolved in this order:

1. Pickles
2. RetroArch
3. External

This order only applies when a new automatic assignment is created. A manual choice stays assigned until you change
or remove it.

## Core Management

Open **Configuration > Core Management** to see published Libretro cores.

- **Update** means a newer published build is ready. Updates appear alphabetically at the top.
- **Not Installed** means the core is available to download.
- **Installed** means the installed build matches the published build. It can be reinstalled.

Cores that are only used by Additional Cores are left out of this list until that setting is enabled.

A network connection is required to refresh, install, update or reinstall a core. External emulators are supplied
and maintained separately from the Libretro core catalogue.

## Where assignments are stored

Assignments are kept on the system partition under `/opt/muos/share/info/content`, in a folder for each content
directory. Directory assignments use `core.cfg`, recursive assignments use `core_recursive.cfg`, and content overrides
use a matching `.cfg` filename. Related governor and control overrides are stored beside them.

The generated files are an internal format. Use the Core Assignment screen for normal changes. Developers adding a
new system or launch choice should use the [Core Assign Reference]({{site.baseurl}}/systems/manifests).
