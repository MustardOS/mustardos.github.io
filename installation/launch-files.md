---
layout: default
title: Folder Launch Files
permalink: /installation/launch-files
nav_order: 12
parent: Installation
has_children: false
---

# **Folder Launch Files**

Some content is more than one file. A PICO-8 game can span many carts, a DOS game sits in a folder full of data, and a
ScummVM game needs every file beside it. Browsing into the folder and picking the right file each time is tedious, and
renaming things to suit the frontend can break the game.

A folder launch file solves this. You choose which file in a folder starts the game, and from then on Explore Content
shows the whole folder as a single item that launches that file directly.

## Why use it

- The folder keeps its original name and layout.
- The folder appears as one tidy item in your lists, named after the folder.
- History, collections, play time and core assignment all follow the real file, so they behave exactly as they do for
  any other content.
- Nothing is written into your `ROMS` folders.
- The setting is stored with your other personal data, so it is included in backups and can live on SD2.

## Setting a launch file

1. Open the folder in **Explore Content**.
2. Highlight the file that starts the game.
3. Press **MENU** and choose **Set Launch File**.

Explore Content returns to the folder above, with the new item highlighted. Press **A** on it to launch the game.

{: .note }
> **Set Launch File** is offered for files inside any folder below `ROMS`. It is not offered for files sitting directly
> in the `ROMS` folder itself, as that would turn your whole content list into a single item.

## Opening the folder again

When you want to add, update or remove files inside the folder, highlight the item, press **MENU** and choose
**Open Folder**. Press **B** from inside the folder to return to the item.

**Open Folder** also works for folders that already open as a single game through the naming rules described below.

## Clearing a launch file

Highlight the item, or the chosen file inside the folder, press **MENU** and choose **Clear Launch File**. The folder
goes back to opening as an ordinary folder.

When kiosk mode locks **Content Options**, both **Set Launch File** and **Clear Launch File** are hidden. **Open
Folder** remains available.

## Where the setting is stored

Each launch file is a small text file under `MUOS/info/launch`, named after the folder's path below `ROMS` with `.cfg`
added. It contains one line, which is the name of the file to launch.

| Content folder        | Launch setting                     | Contents     |
|:----------------------|:-----------------------------------|:-------------|
| `ROMS/PICO-8/Poom`    | `MUOS/info/launch/PICO-8/Poom.cfg` | `poom_0.p8`  |
| `ROMS/DOS/Doom`       | `MUOS/info/launch/DOS/Doom.cfg`    | `DOOM.EXE`   |

The folder is identified by its path below `ROMS`, so it is recognised on either card. You can
also create these files yourself on a computer, as long as the file named inside is in that folder.

- **Storage** lists the location as **Folder Launch Files**, so it can be moved to SD2 with your other personal data.
- **Backup** includes **Folder Launch Files** in its **Content** section.

## Naming

The item shows the folder's name, so name the folder the way you want the game to appear in your lists.

## Folders that already launch as one game

MustardOS already treats a folder as a single game in these cases, without any launch file:

- The folder holds a file with the same name as the folder, such as `Game.zip/Game.zip`.
- The folder holds a `.m3u`, `.cue`, `.gdi` or `.scummvm` file with the same name as the folder.

These rules continue to work as before. A launch file is simply a way to get the same result without renaming
anything, and it takes priority when both apply.
