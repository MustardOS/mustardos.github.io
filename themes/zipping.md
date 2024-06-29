---
title: Finishing your Theme
layout: default
parent: Themes
nav_order: 5
has_toc: false
---

# Zipping your Theme 
To zip your theme correctly, you must compress the folder structure together **NOT** the root folder of your theme.
- Select `credits.txt`, `./images/`, `./scheme/`, and the rest of your folders for your theme together.
- Use a program such as WinRar (Windows), Keka (macOS), and 7zip (Linux/Windows) to compress those as one zip.
- Name your zip whatever you choose.

# Creating a Preview Image 
Most preview images are 288x216 resolution. Create your preview image by taking a screenshot on your device (Menu + Power), or generating an image you think best represents your theme. Resize it and **rename it to match your zip name**, and drop it into your preview folder of your main SD card; `./MUOS/theme/preview`.

> *Be warned: the preview image resolution will take up as much space on the screen as the size of the image itself. The typical screen for muOS is 640x480, so if you use a screenshot without resizing your image, your preview within Theme Picker will cover all of your options!*

# Theme Archive Format (Zip + Preview)
The current standard release format of themes is as an archive (see the Archive Manager page for more information). In this way, you can package your theme so that
a user can install both the working theme and preview as one zip file. To do this, follow the two steps above, and then create this folder structure as seen below, zipping the `mnt` folder to create a working theme archive;

```
mnt
└─ mmc
   └── MUOS
       └── theme
           ├── theme_name.zip
           └── preview
                └── theme_name.png
```
