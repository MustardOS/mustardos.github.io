---
layout: systems_category
title: Systems
permalink: /systems
nav_enabled: true
nav_order: 6
has_children: true
description: Choose a system category for setup notes, supported content and BIOS information.
---

MustardOS identifies a content folder, assigns it to a system, then offers the compatible Pickles, RetroArch and
external choices installed on the device. A system is the shared identity used by core assignment, artwork,
friendly names and launch settings. It is separate from the emulator or core used to run the content.

## Getting content ready

1. Place content under `ROMS` on SD1, SD2 or supported USB storage.
2. Use a recognisable folder name. MustardOS normalises spaces, hyphens, underscores and common aliases when it
   performs automatic assignment.
3. Open the folder in Explore Content. MustardOS creates a directory assignment when a known folder name is found.
4. Open Content Options and choose **Core** whenever you want to change the system, core or player.
5. Place any required BIOS files in the BIOS location shown on the relevant system page. Content on a core that
   cannot run without a BIOS stops at launch and lists the files it needs.

{: .note }
> A folder assignment is inherited by its content. A content-specific assignment can override one game without
> changing the rest of the folder.

## Players and launchers

| Choice | Purpose |
|---|---|
| Pickles | MustardOS' own Libretro core player, using the active frontend theme and Pickles settings. |
| RetroArch | The RetroArch Libretro frontend and its configuration system. |
| External | A standalone emulator, engine, reader, media player or port launcher. |

Pickles and RetroArch use the same installed Libretro core file where the core supports both players. External
entries use their own launcher scripts and may be restricted to a device or processor architecture.

[Read the Core Assignment guide]({{site.baseurl}}/systems/cores){: .btn .btn-primary }
[Open the manifest reference]({{site.baseurl}}/systems/manifests){: .btn }
