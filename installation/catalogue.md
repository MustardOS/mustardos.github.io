---
layout: default
title: Catalogue
permalink: /installation/catalogue
nav_order: 9
parent: Installation
has_children: false
---

# **Catalogue**

The Catalogue holds the artwork and information shown beside your content. The content itself can live anywhere
under a mounted `ROMS` directory. Core Assignment tells MustardOS which catalogue folder belongs to it.

## What the folders contain

| Folder | Contents |
|---|---|
| `box` | Box art used by list views and content details. Can be animated. |
| `grid` | Images used by grid layouts. |
| `preview` | Screenshots and secondary artwork shown in Information. Can be animated. |
| `text` | Plain-text descriptions. |
| `manual` | Plain-text manuals available from Pickles. |
| `overlay/base` | Per-content Pickles overlays. |
| `overlay/battery` | Ten-step battery gauge images. |
| `overlay/bright` | Ten-step brightness gauge images. |
| `overlay/volume` | Ten-step volume gauge images. |

System folders and these subfolders are generated from `core.json`. MustardOS also creates
special catalogue areas for Application, Archive, Collection, Folder, Root, Task and Theme items.

## Basic structure

```text
MUOS/info/catalogue/
├── Nintendo Game Boy Advance/
│   ├── box/
│   │   └── F-Zero - Maximum Velocity (USA, Europe).png
│   ├── preview/
│   │   └── F-Zero - Maximum Velocity (USA, Europe).png
│   ├── text/
│   │   └── F-Zero - Maximum Velocity (USA, Europe).txt
│   └── manual/
│       └── F-Zero - Maximum Velocity (USA, Europe).txt
├── Folder/
│   ├── box/
│   │   └── gba.png
│   └── grid/
│       └── Nintendo Game Boy Advance.png
└── Root/
    └── box/
        ├── sd1.png
        └── sd2.png
```

Match the catalogue filename to the content filename without its extension. Matching is case-insensitive. Artwork
stays directly inside the relevant catalogue media folder, even when the content sits in deeper ROM subfolders.

## Supported files

Catalogue images are checked in this order:

`svg`, `png`, `apng`, `jpg`, `jpeg`, `webp`, `qoi`, `tga`, `gif`, `bmp`, `pcx`

The `box` and `preview` folders also accept animated media, and check moving formats first:

`mp4`, `apng`, `gif`, `png`, `webp`, `jpg`, `jpeg`, `qoi`, `tga`, `bmp`, `pcx`, `svg`

Descriptions and manuals use `.txt`.

Resolution-specific media belongs in a resolution subfolder inside the media type:

```text
MUOS/info/catalogue/Nintendo Game Boy Advance/preview/640x480/Game Name.png
```

MustardOS checks the active resolution first, followed by the general media folder. A matching content name is
checked before a supplied fallback such as `default`.

## Catalogue name and assignment

Each system manifest contains a `catalogue` value. Core Assignment writes that value into the content or directory
assignment. Explore Content, History, Collections, Pickles and the Web Dashboard use it to find the same media.

If artwork is missing:

1. Confirm the content or its directory has the expected system and core assignment.
2. Confirm the system's catalogue name matches the folder under `MUOS/info/catalogue`.
3. Confirm the artwork name matches the content name without its extension.
4. Keep system artwork directly inside `box`, `preview`, `text`, `manual` or the required overlay folder.

## Folder and grid artwork

The `Folder` catalogue can use the visible folder name or its assigned catalogue name. This allows a theme or
catalogue set to provide stable system artwork even when users arrange ROM folders differently.

Grid lookup checks the active resolution and then the root grid folder. A matching `_focused` image can be drawn over
the selected cell. `default.png` and `default_focused.png` provide fallbacks.

```text
MUOS/info/catalogue/Folder/grid/
├── 640x480/
│   ├── Nintendo Game Boy Advance.png
│   └── default.png
├── Nintendo Game Boy Advance.png
├── default.png
└── default_focused.png
```

## Manuals

A matching file under `manual` is available through the Pickles manual viewer. The default hotkey is **Menu +
Select**. Long lines can wrap and the viewer provides scrolling and font controls. Manuals can use
[formatting codes]({{site.baseurl}}/docs/infrastructure/formatting) for colour, bold, italic, underline and
strikethrough.

## Animated artwork

An MP4 video, GIF or animated PNG in `box` or `preview` plays in place of a still image, and loops for as long as
the item stays selected. MP4 sound plays along with it. Moving to another item starts that item's artwork instead.

Animated box art follows the same settings as a still image. **Box Art Alignment**, **Box Art Scale** and **Box Art
Padding** under **Customisation** place and size it. With Box Art Scale disabled, artwork is shown at its own size,
so a 480 by 360 video stays 480 by 360. **Box Art** is honoured as well, so moving artwork sits in front of or behind
the content list, fullscreen or not, and fades or slides in with **Box Art Transition** like any other artwork. Menus
and dialogues open over it while it keeps playing. The [multiple artwork layers](#multiple-artwork-layers) below
apply to still artwork only.

Preview media plays inside the Information preview, which opens first whenever an item has some, and stops at the
next button press. Hold **Menu** on an item to open Information straight away.

| Format | Notes |
|---|---|
| `.mp4` | H.264, HEVC or MPEG-4 video, with optional sound. Can be trimmed and faded. |
| `.gif` | Animated GIF, played silently. |
| `.apng`, `.png` | Animated PNG. An animated image saved with a `.png` name is recognised as well. |

With **Reduce Motion** turned on, GIF and animated PNG artwork stays still and MP4 artwork is not shown. An MP4 is
always matched ahead of an image with the same name, so choose a GIF or animated PNG when the artwork should still
appear with Reduce Motion on.

An MP4 can be trimmed, faded and muted without editing the video itself. A matching file in an `_edit` folder beside
it holds the settings, with times in milliseconds and `mute=1` to play the video silently:

```text
MUOS/info/catalogue/Nintendo Game Boy Advance/box/_edit/F-Zero - Maximum Velocity (USA, Europe).conf
```

```ini
start_ms=2000
end_ms=12000
fade_in_ms=500
fade_out_ms=750
mute=1
```

The Web Dashboard writes this file for you when you adjust a video, and removes it when new box or preview artwork
is uploaded in its place, so a new video always starts from its full length.

## Multiple artwork layers

An INI file at the catalogue root can combine up to five image folders. Use `<Catalogue Name>.ini` for one catalogue
or `default.ini` as the fallback.

```ini
[viewport]
WIDTH = 354
HEIGHT = 480
COLUMN_MODE = 0
COLUMN_MODE_ALIGNMENT = 2

[image1]
FOLDER = box
ALIGN = 8
MAX_WIDTH = 0
MAX_HEIGHT = 0
PAD_RIGHT = 15

[image2]
FOLDER = preview
ALIGN = 8
PAD_TOP = 15
```

| Setting | Meaning |
|---|---|
| `WIDTH`, `HEIGHT` | Artwork canvas size. `0` sizes that dimension to its content. |
| `COLUMN_MODE` | `1` stacks image layers vertically, `0` positions each layer independently. |
| `COLUMN_MODE_ALIGNMENT` | Horizontal alignment for column mode: `0` left, `1` right, `2` centre. |
| `FOLDER` | Media folder inside the selected catalogue. |
| `ALIGN` | Position from 1 to 9: top left, top centre, top right, bottom left, bottom centre, bottom right, centre left, centre right, centre. |
| `MAX_WIDTH`, `MAX_HEIGHT` | Optional maximum dimensions. `0` keeps the source dimension. |
| `PAD_LEFT`, `PAD_RIGHT`, `PAD_TOP`, `PAD_BOTTOM` | Pixel offsets around an image layer. |

Preparing artwork at its display size reduces decode and scaling work while scrolling.

## Catalogue packages

A `.muxcat` archive holds the folders found inside `MUOS/info/catalogue`, with no `catalogue` folder around them. Place the
archive in `MUOS/package/catalogue`, then open **Configuration > Customisation > Catalogue Sets** to install it.

Installing a set replaces the current catalogue contents and regenerates the required directories. Press **Y** in
the Catalogue Sets picker to package the current catalogue with a timestamped filename. Keep a separate backup of
hand-edited media before installing another set.

## Web Dashboard

The Web Dashboard can inspect catalogue coverage from the content present on mounted cards, marking content and
folders that have no artwork and previewing images and videos. It can upload, crop, resize, layer, replace and
remove catalogue images, set the start, end and fades of box and preview videos, and edit descriptions and manuals
as text. Browsing and downloads are always available, and with authentication enabled each change needs the
six-digit device code, which changes regularly.

[Read the Web Dashboard guide]({{site.baseurl}}/web/dashboard).
