---
title: Theme Assets (Grid Images)
layout: default
parent: Themes
nav_order: 6
has_toc: false
---

# Asset File Introduction
Sometimes when creating a theme there will be a need to include files that are not part of theme but still required by the theme.  This guide will specifically be focused on including grid icon images for a theme that supports grid mode in content explorer but it can be used to include any files with your theme.  This can be accomplished by including `assets.muxzip` file in root of your theme.  When theme is selected from theme picker the `assets.muxzip` file in the root of theme will also be extracted.  

> *`muOS - Pixie - Grid` on the [theme](https://theme.muos.dev/) website is good example of this.*

# Asset File Structure For Grid Images
When creating an `assets.muxzip` you should follow the structure of `/catalogue/Application/grid/` for application images and `/catalogue/Folder/grid/` for content explorer images.

```
├── catalogue
│   ├── Application
|   │   └── grid
|   |   │   └── app.png
|   |   │   └── archive.png
|   |   │   └── dingux.png
|   |   │   └── flip.png
|   |   │   └── moonlight.png
|   |   │   └── ...
|   |   │   └── {Resolution}
|   |   |   │   └── app.png
|   |   |   │   └── archive.png
|   |   |   │   └── dingux.png
|   |   |   │   └── flip.png
|   |   |   │   └── moonlight.png
|   |   |   │   └── ...
│   ├── Folder
|   │   └── grid
|   |   │   └── Atari 2600.png
|   |   │   └── Atari 5200.png
|   |   │   └── Atari 7800.png
|   |   │   └── default.png
|   |   │   └── default_focused.png
|   |   │   └── ...
|   |   |   │   └── {Resolution}
|   |   |   │   └── Atari 2600.png
|   |   |   │   └── Atari 5200.png
|   |   |   │   └── Atari 7800.png
|   |   |   │   └── default.png
|   |   |   │   └── default_focused.png
|   |   |   │   └── ...
```

> *When displaying system images muOS will first look for an image that matches the rom folder name.  If it does not find a match it will then look for an image that matches the catalogue name of the folder's assigned core.  For this reason it is important to use the catalogue names for the image file names like `/catalogue/Folder/grid/Sega Mega Drive - Genesis.png`.  This ensures that muOS is able to display the correct image regardless of what user has named their folders.*

# Zipping Your Assets
- Select files and folders you want to include in your assets file.  In the case of grid images this would be the `catalogue` folder.
- Use a program such as WinRar (Windows), Keka (macOS), and 7zip (Linux/Windows) to compress your theme assets as one zip.
- Rename the file to `assets.muxzip`
- Add `assets.muxzip` to the root of your theme.
