---
layout: default
title: First Steps
permalink: /installation/first-steps
nav_order: 2
parent: Installation
has_toc: false
---

# **First Steps**

This page follows a new install from the first boot to playing your first game, and points to the detailed page for
each step once you want to know more.

## 1. The first boot

The first screen on a freshly flashed card prepares MustardOS before the frontend starts. Work through it from top to
bottom:

| Option        | What it does                                                                           |
|:--------------|:---------------------------------------------------------------------------------------|
| Date and Time | Sets the date, time and timezone so saves and screenshots are stamped correctly.       |
| Language      | Chooses the interface language, which can be changed later from Configuration.         |
| Profiles      | Applies a profile for contrast, motion or text size, or one supplied with your device. |
| Input Tester  | Confirms every button and stick on the device reports correctly.                       |
| Shutdown      | Powers the device down if you need to finish setting up later.                         |
| Install       | Prepares the games card and restarts into the frontend.                                |

**Install** asks how the games card should be formatted. Only the formats your device can create are offered.

| Format    | Best for                                                                                    |
|:----------|:--------------------------------------------------------------------------------------------|
| **exFAT** | Recommended for almost everyone, because every computer can read and write it.             |
| **FAT32** | Works on every computer, but cannot hold a single file larger than 4GB.                     |
| **EXT4**  | Copes better with sudden power loss, but Windows cannot read it without extra software.     |

{: .important-title }
> **Be Patient**
>
> Installing takes a little while and must not be interrupted. If the device appears stuck, allow at least 5 to 10
> minutes before pressing reset, and report it on the [Community Forum](https://community.muos.dev) if it happens.

Once the frontend starts, MustardOS offers a **Guided Tour** that explains each screen the first time you open it.
Press **X** on any tour message to stop the tour. Every screen is also described in the
[Grand Tour]({{ site.baseurl }}/tour).

## 2. What is on your cards

MustardOS reads content from SD1, SD2 and supported USB storage, and Explore Content shows all of them together. Each
card is given the following folders when it is mounted:

| Folder    | Purpose                                                                                       |
|:----------|:----------------------------------------------------------------------------------------------|
| `ROMS`    | Your games and other content, organised into any folders you like.                           |
| `ARCHIVE` | Updates, themes, applications and backups waiting to be installed from **Archive Manager**.   |
| `ports`   | Ports installed through [PortMaster]({{ site.baseurl }}/installation/portmaster).            |

The `MUOS` folder holds your BIOS files, saves, themes, fonts, boot logos and other personal data. BIOS files go in
`MUOS/bios`, and the [BIOS Checker]({{ site.baseurl }}/tools/bios-checker) confirms that yours are correct.

SD2 and USB storage can be formatted as exFAT, FAT32 or EXT4.

## 3. Adding content

Copy your content into `ROMS` on any card, using whatever folder names and as many subfolders as you like. Content
only needs a system and core assigned to it or to a folder above it, and folders with a recognised name are assigned
automatically. [System Finder]({{ site.baseurl }}/tools/system-finder) lists the recognised names for every system.

Multi-disc and multi-track games stay tidy with a playlist. When a `.m3u`, `.cue` or `.gdi` file sits beside the
files it lists, those files are hidden automatically and only the playlist shows. The
[Playlist Builder]({{ site.baseurl }}/tools/playlist-builder) makes a `.m3u` for a multi-disc game.

Games made of many files, such as PICO-8 multicarts or DOS games, can open as a single item too. Choose the file that
starts the game with **Set Launch File**, as described in
[Folder Launch Files]({{ site.baseurl }}/installation/launch-files).

To assign a folder or a single item yourself, highlight it in Explore Content, press **X** to open Content Options and
choose **Core**. Use the **Recursive** scope on a top folder to cover every subfolder below it.
[Core Assignment]({{ site.baseurl }}/systems/cores) explains each scope.

Core Assignment only lists the systems and cores that suit most people. If a system or core you expected is not
there, enable **Additional Cores** in Advanced, as described in
[Additional Cores]({{ site.baseurl }}/systems/cores#additional-cores).

You can also copy files over your network without removing the card. Use **File Management** in the
[Web Dashboard]({{ site.baseurl }}/web/dashboard), or turn on **Secure File Transfer** or **Syncthing** from
**Web Services**, where each service has its own settings and port. The
[Web Services tour]({{ site.baseurl }}/tour/modules/muxwebserv) covers each service.

## 4. Pickles, RetroArch and external emulators

MustardOS can launch content through three kinds of player:

- **[Pickles]({{ site.baseurl }}/tour/modules/muxretro)** is the MustardOS Libretro player and is chosen first when
  a system supports it.
- **RetroArch** is used when Pickles does not offer the core, or when you choose it yourself.
- **External** emulators run standalone programs for systems that need them.

If a game runs poorly or behaves differently from what you expect, open **Content Options > Core** and press
**Left** or **Right** on the core to switch to another player where one is available. Coming from RetroArch,
[Moving from RetroArch]({{ site.baseurl }}/installation/retroarch-to-pickles) explains how to bring your saves into
Pickles and what needs to be set up again.

## 5. Controls to learn first

| Action                       | Control                                    |
|:-----------------------------|:-------------------------------------------|
| Open the in-game menu        | **MENU** in Pickles, **MENU + X** in RetroArch |
| Quit back to the frontend    | **MENU + START**                           |
| Sleep and wake               | Press **POWER** once                       |
| Content Options              | Press **X** on content                     |
| Safe restart                 | **L2 + R2 + START**                        |
| Safe shutdown                | **L2 + R2 + SELECT**                       |

The [Hotkeys]({{ site.baseurl }}/hotkeys) page lists every shortcut, including those for Wasabi and the LED controls.

## 6. Artwork and names

Box art, previews and descriptions come from the catalogue folders on your card. Box art and previews can also be an
MP4 video, a GIF or an animated PNG, placed and sized by the same Customisation settings as a still image. The
[Catalogue]({{ site.baseurl }}/installation/catalogue) page explains the folder layout, and
[Friendly Names and Tags]({{ site.baseurl }}/installation/names) explains how file names are tidied for display.

## 7. Themes

Themes are stored as open folders in `MUOS/theme`, so they switch quickly and can be chosen at random on start. Older
`.muxthm` theme files must be extracted into that folder before they appear. New themes can be downloaded directly
from the device, and the [Theme Validator]({{ site.baseurl }}/tools/theme-validator) checks a theme you have made
before you share it.

## 8. Protecting your saves

Updating MustardOS is safest with a freshly flashed card, which replaces everything on SD1. If your device has a
second card slot, open **Configuration > Storage** to move saves, collections, history, the catalogue and other
personal data to SD2, so a reflash leaves them untouched. Nothing is removed from SD1 until a move has finished
successfully. The [Storage tour]({{ site.baseurl }}/tour/modules/muxstorage) lists everything that can be moved.

Core assignments and RetroArch configurations are kept on the system partition, so Storage cannot move them and a
reflash removes them. The **Backup** module includes both, along with your other personal data, and saves a
`.muxbak` file to the `ARCHIVE` folder of the card you choose. Restore it from **Archive Manager** after reflashing,
which checks the backup against its checksum manifest before anything is restored.

## 9. When something goes wrong

If the frontend fails to start on two boots in a row, the third boot starts in safe mode. Safe mode skips
optional services and opens at the main menu without resuming your last content, which gives you a chance to undo
a setting that caused the problem. The device returns to normal once the frontend has started successfully.

Logs are kept in `/opt/muos/log` on the device and can be reached over **Secure Shell** from Web Services. Please
include them when you ask for help on the [Community Forum](https://community.muos.dev) or the
[Discord Server](https://discord.gg/mustardos-1152022492001603615).
