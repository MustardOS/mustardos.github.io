---
layout: default
title: Artwork
permalink: /help/artwork
nav_order: 8
parent: Help
has_children: false
---

# muOS Artwork

![](assets/images/muos_boxart.png)
![](assets/images/muos_preview.png)

## muOS Catalogue Structure

Folders for all available systems should be automatically created for you.  
These systems match the `catalogue=` entry in `MUOS/info/assign/<system>.ini`

### Example INI file

```ini
[global]
name = Atari 2600
default = Stella
catalogue = Atari 2600
cache = 0
```

Here we can see the catalogue folder for this system is `Atari 2600`.

**All game artwork should be named to match your ROMs.**

```
SD1
└─ MUOS
    └── info
        └── catalogue
            ├── <System>
            │    ├── box
            │    │   └── romname.png
            │    ├── preview
            │    │   └── romname.png
            │    ├── splash
            │    │   └── romname.png
            │    └── text
            │        └── romname.txt
            ├── Folder
            │    ├── box
            │    │   └── foldername.png
            │    ├── preview
            │    │   └── foldername.png
            │    └── text
            │        └── foldername.txt
            └── Root
                └── box
                     ├── sd1.png
                     └── sd2.png
```

As muOS assigns artwork by system, you will need to assign a core before artwork is displayed.  
Starting in `muOS Beans` it should attempt to assign a system automatically.

**Example**  
If you have some ROMs in:

```
/mnt/sdcard/roms/Nintendo/SNES/Action/*.zip
```

Artwork files for this system go in:

```
MUOS/info/catalogue/Nintendo SNES-SFC/
```

The folder named **Folder** can be used to apply artwork to any folder in content explorer and just needs to match the
folder name.  
(_not case sensitive_).
To have folder icons for all subdirectories listed, you would need:

```
catalogue
└── Folder
    └── box
        ├── nintendo.png
        ├── snes.png
        └── action.png
```

## Advanced Box Art Configuration

Advanced Box Art Configuration allows for overriding how box art is displayed within content explore. Up to 5 images can
be displayed. Images are loaded from separate sub folders of `/MUOS/info/catalogue/` as defined in the configuration.
See examples below.

### File Structure

Configuration files must be created in the catalogue folder to enable this feature. You can have one configuration per
catalogue folder for example `Sega Mega Drive - Genesis.ini`. If a configuration file does not exist for the
folder then `default.ini` will be used.<br><br>
**Example File Structure**

```
SD1
└─ MUOS
    └── info
        └── catalogue
            ├── default.ini
            ├── Folder.ini
            └── Sega Mega Drive - Genesis.ini
```

### Configuration File Breakdown

### Section [viewport]

The viewport section configures the canvas that all images will be drawn on. Alignment of the view port is controlled
by `Configuration -> General Settings -> Interface Options -> Content Box Art Alignment`

| Setting                 | Description                                                                                                            |
|-------------------------|------------------------------------------------------------------------------------------------------------------------|
| WIDTH=354               | Width in pixels of the canvase.  Setting of 0 will size to content.                                                    |
| HEIGHT=0                | Height in pixels of the canvase.  Setting of 0 will size to content.                                                   |
| COLUMN_MODE=1           | With Column Mode enabled all images are stacked vertically. Image padding can be used to control space between images. |
| COLUMN_MODE_ALIGNMENT=2 | When COLUMN_MODE controls the horizontal alignment of all images. <br>0=Left<br>1=Right<br>2=Center                    |

### Section [image#]

A maximum of 5 image locations can be defined starting with section [image1] to section [image5].

| Setting      | Description                                                                                                                                                                                                                        |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FOLDER=box   | Name of the folder in `/MUOS/info/catalogue/` where the image is located                                                                                                                                                           |
| ALIGN=2      | When COLUMN_MODE=0 this controls the alignment of the image within the viewport <br>1=Top Left<br>2=Top Center<br>3=Top Right<br>4=Bottom Left<br>5=Bottom Center<br>6=Bottom Right<br>7=Center Left<br>8=Center<br>9=Center Right |
| MAX_WIDTH=0  | Used to resize the image. Maximum Image Width.                                                                                                                                                                                     |
| MAX_HEIGHT=0 | Used to resize the image. Maximum Image Height.                                                                                                                                                                                    |
| PAD_LEFT=0   | Used to adjust position of the image in pixels.                                                                                                                                                                                    |
| PAD_RIGHT=0  | Used to adjust position of the image in pixels.                                                                                                                                                                                    |
| PAD_TOP=0    | Used to adjust position of the image in pixels.                                                                                                                                                                                    |
| PAD_BOTTOM=0 | Used to adjust position of the image in pixels.                                                                                                                                                                                    |

**Note:** Resizing images using MAX_WIDTH and MAX_HEIGHT settings cause graphical issues like screen tearing while fast
scrolling. It is recommended to leave these settings at 0 and instead resize your images to the appropriate size.

### Example ini configuration for Column Mode

```ini
[viewport]
WIDTH=354
HEIGHT=0
COLUMN_MODE=1
COLUMN_MODE_ALIGNMENT=2

[image1]
FOLDER=box324x300

[image2]
FOLDER=preview324x300
PAD_TOP=15
```

### Example ini configuration for Standard Mode

```ini
[viewport]
WIDTH=354
HEIGHT=480
COLUMN_MODE=0
COLUMN_MODE_ALIGNMENT=0

[image1]
FOLDER=box324
ALIGN=8
MAX_WIDTH=0
MAX_HEIGHT=0
PAD_LEFT=0
PAD_RIGHT=15
PAD_TOP=0
PAD_BOTTOM=0
```

### Example file tree for Column Mode example

```
└─ MUOS
    └── info
        └── catalogue
            └── <System>
                ├── box
                │   └── romname.png
                ├── preview
                │   └── romname.png
                ├── text
                │   └── romname.txt
                ├── box324x300
                │   └── romname.png
                └── preview324x300
                     └── romname.png
``` 

## Theme overrides for Artwork

The max width for the text of an item in content explorer is controlled by the theme. This can result in scenarios where
the item text is partially covered by the boxart. <br>

![](assets/images/muox_boxart_override_eample_1.png) <br>
You can override this behaviour so regardless of what theme you have installed the text will stop at a defined length.
In `/theme/override` you will find 3 files `muxfavourite.txt`, `muxhistory.txt`, and `muxplore.txt`.<br>

If you want to adjust just where the text auto ellipses you can set a value for FONT_LIST_PAD_RIGHT. Example:

```ini
[font]
FONT_LIST_PAD_RIGHT=280

[misc]
CONTENT_WIDTH=-1
```

![](assets/images/muox_boxart_override_eample_2.png)<br>
If you also want the background bar of the item to resize you would instead adjust CONTENT_WIDTH. Example:

```ini
[font]
FONT_LIST_PAD_RIGHT=10

[misc]
CONTENT_WIDTH=360
```

![](assets/images/muox_boxart_override_eample_3.png)<br>

## antiKk's muOS Artwork

Skraper mixes, and Artwork for the Tiny Best Set are available here:  
[https://github.com/antiKk/muOS-Artwork](https://github.com/antiKk/muOS-Artwork)
