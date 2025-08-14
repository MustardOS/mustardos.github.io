---
title: Theme Assets (Grid Images)
layout: default
parent: Themes
nav_order: 6
has_toc: false
---

# Asset File Introduction

Sometimes when creating a theme there will be a need to include files that are not part of theme but still required by
the theme. This guide will specifically be focused on including grid icon images for a theme that supports grid mode in
content explorer but it can be used to include any files with your theme. This can be accomplished by
including `assets.muxzip` file in root of your theme. When theme is selected from theme picker the `assets.muxzip` file
in the root of theme will also be extracted.

> *`MustardOS - Pixie - Grid` on the [theme](https://theme.muos.dev/) website is good example of this.*

# Asset File Structure For Grid Images

When creating an `assets.muxzip` you should follow the structure of `/catalogue/Application/grid/` for application
images and `/catalogue/Folder/grid/` for content explorer images.

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

# Displaying Grid Images

When displaying grid images MustardOS will look in the following locations:

| Screen           | Grid Path                      | File Name                                                                                                                                                   |
|------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications     | `/catalogue/Application/grid/` | File name is pulled from `ICON` variable at the top of the application script file. <br> If `ICON` variable does not exist in the script `app` will be used |
| Collections      | `/catalogue/Collection/grid/`  | Matches the name of the Collection                                                                                                                          |
| Content Explorer | `/catalogue/Folder/grid/`      | Matches on rom folder name.<br> If it does not find a match it will then look for an image that matches the catalogue name of the folder's assigned core.   |

When display a grid image MustardOS will search for images in this order:

`/{Grid Path}/{Resolution}/{Filename}.png`<br>
`/{Grid Path}/{Resolution}/default.png`

If the image is not found it will then search the root of the image folder:

`/{Grid Path}/{Filename}.png`<br>
`/{Grid Path}/default.png`

**Note:** `default.png` is a fall back in case MustardOS cannot find an image associated with the grid item. Typically
theme creators would use an image to indicate that this grid item does not have it's own image file like a question
mark.

After all grid items are populated MustardOS will overlay a focused image on top of the grid item image. The focused
image is not required but allows the user to provide a custom indicator for denoting the currently selected item. You
have two options for focused image files:

* `{Filename}_focused.png` allows for having a custom focused image per grid item.
* `default_focused.png` this applies to all items that do not have their own specific focused image.  
  It will search for these images in the same locations as the regular grid icons.

> *Rom folders will vary from user to use so it is a good idea to use the catalogue names for the image file names
like `/catalogue/Folder/grid/Sega Mega Drive - Genesis.png`. This ensures that MustardOS is able to display the correct
image regardless of what user has named their folders.*

# Zipping Your Assets

- Select files and folders you want to include in your assets file. In the case of grid images this would be
  the `catalogue` folder.
- Use a program such as WinRar (Windows), Keka (macOS), and 7zip (Linux/Windows) to compress your theme assets as one
  zip.
- Rename the file to `assets.muxzip`
- Add `assets.muxzip` to the root of your theme.
