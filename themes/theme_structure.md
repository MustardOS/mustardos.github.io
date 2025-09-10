---
title: Theme Structure
layout: default
parent: Themes
nav_order: 1
has_toc: false
---

# Theme Folder Structure

For a theme to function as intended, you will need to use the proper folder structure containing all your files in the
correct place. Below is an example of the correct structure that you can replicate if you are creating/editing a theme.

```
.
├── active.txt
├── assets.muxzip
├── credits.txt
├── alternate
│   └── {alternate 1}.ini
│   └── {alternate 1}.muzip
│   └── {altrenate 2}.ini
│   └── {altrenate 2}.muxzip
│   ├── rgb
│   │   ├── {alternate 1}
|   |   │   └── rgbconf.sh
│   │   ├── {alternate 2}
|   |   │   └── rgbconf.sh
├── font
│   └── default.bin
│   ├── header
|   │   └── default.bin
│   ├── footer
|   │   └── default.bin
│   ├── panel
|   │   └── default.bin
├── glyph
│   ├── muxlaunch
│   |   ├── explore.png
│   |   ├── favourite.png
│   |   ├── history.png
│   |   ├── apps.png
│   |   ├── info.png
│   |   ├── config.png
│   |   ├── reboot.png
│   |   ├── shutdown.png
├── scheme
│   └── global.ini
├── 640x480
│   ├── font
│   │   └── default.bin
│   ├── glyph
│   │   ├── muxlaunch
│   │   |   ├── explore.png
│   │   |   ├── favourite.png
│   │   |   ├── history.png
│   │   |   ├── apps.png
│   │   |   ├── info.png
│   │   |   ├── config.png
│   │   |   ├── reboot.png
│   │   |   ├── shutdown.png
│   ├── image
│   |   ├── bootlogo.bmp
│   |   ├── overlay.png
│   |   ├── static
│   |   |   ├── muxlaunch
│   |   |   |   ├── explore.png
│   |   |   |   ├── favourite.png
│   |   |   |   ├── history.png
│   |   |   |   ├── apps.png
│   |   |   |   ├── info.png
│   |   |   |   ├── config.png
│   |   |   |   ├── reboot.png
│   |   |   |   └── shutdown.png
│   |   |   └── muxinfo.png
│   |   └── wall
│   |       ├── default.png
│   |       ├── muxtester.png
│   |       └── muxcharge.png
│   ├── scheme
│   |   ├── default.ini
│   |   └── muxtester.ini
├── 720x480
├── 720x576
├── 720x720
├── 1280x720
└── sound  
```

In the above example, there are some files here that are not necessary to have a *working* theme - however the elements
included
above show off the amount of possible customisation available.

- **font** - Here is where you can place custom fonts compiled into a `.bin` format. Fonts placed in the panel subfolder
  will override the font used for list items. Fonts placed in the header subfolder will override the font used for the
  header. Fonts placed in the footer subfolder will override the font used for the footer.
- **glyph** - Place png images for list item glyphs. See [Theme Folder Structure Glyphs](#theme-folder-structure-glyphs)
  section for full list of names.
- **image** - Place all image assets of your theme here. Animated images are also supported (use `.gif`).
    - **static** - Images can be set to sit on top of other elements. They are named following their associated program.
    - **wall** - All backgrounds used sit here. Anything named `default.xxx` is applied on all programs without
      dedicated assets.
- **scheme** - The brain of the theme. This file will tell your device how windows and text should appear per program,
  and will also
  tell your device how to use the files you have dropped into your image folder.
- **sound** - These folders will contain files heard during your time in the MustardOS menus.

Themes can support multiple device resolutions by including resolution-specific folders (e.g., `640x480`, `720x480`).
Each resolution folder can contain subfolders such as `font`, `image`, `scheme`, and `glyph`.

When a device resolution matches a folder, MustardOS will use the content from that specific resolution folder.

To ensure MustardOS can detect the resolutions a theme can support, it is essential to create a subfolder for each
resolution your theme is designed to support.

For shared resources across all resolutions, you can place them in the root (outside of the resolution subfolder) of the
theme. For example, if all resolutions will use the same fonts and glyphs, you can create a `font` and `glyph` folder(s)
in the root directory.

The default MustardOS theme is a good example of what can be done on a basic theme level.

# Theme Folder Structure Glyphs

Images for populating menu glyphs frequently change as we add new featues to muOS.  For a list of all glyphs that are supported be sure to check out the `MustardOS.muxthm` theme included with muOS located here `/MUOS/theme`.  You can also view the list of glyph images on our [github](https://github.com/MustardOS/internal/tree/main/init/MUOS/theme/active/glyph) page.  
<br><br>**Note:** If your theme does not supply images for glyphs then it will fall back to built in default
images found in `MustardOS.muxthm`. If you want to hide glyphs you will need to adjust the appropriate settings in your scheme file. For example
disable list item glyphs you would set these settings in your scheme file:

```
[list]
LIST_DEFAULT_GLYPH_ALPHA=0
LIST_FOCUS_GLYPH_ALPHA=0
```

# Program Names

MustardOS has numerous programs, so they are individually named so that you Themers can set different properties for
every single page if you so wish to do so! Anything named ```default.xxx``` in the above folder structure can be renamed
to  ```mux...``` to apply ideas to single pages.

You can also set images to appear for individual list items on the main launch page (see the files above under `./image/static/muxlaunch/`.

Check out the updated naming conventions of all modules below;

| Program Name  | Function                                    | List Item Names                                                                                                                                                                                                      |
|:-------------:|:--------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    muxapp     | Dynamic applications page                   | N/A  |
|  muxarchive   | Archive Manager page                        | N/A  |
|   muxassign   | Shows when assigning a core to a folder     | N/A  |
|  muxbackup    | Device Backup                               | N/A  |
|   muxcharge   | Charging Screen                             | N/A  |
|  muxcollect   | Collections page                            | N/A  |
|   muxconfig   | Configuration page                          | N/A  |
|  muxconnect   | Connectivity                                | N/A  |
|  muxcontrol   | Setting Content Control                     | N/A  |
|  muxcredits   | -                                           | N/A  |
|  muxcustom    | Customisation                               | N/A  |
|  muxdownload  | Core/Language Downloader                    | N/A  |
|    muxgov     | -                                           | N/A  |
|  muxhdmi      | HDMI Output Settings                        | N/A  |
|  muxhistory   | History page                                | N/A  |
|    muxinfo    | Information page                            | N/A  |
|  muxkiosk     | Kiosk Settings                              | N/A  |
|  muxlanguage  | -                                           | N/A  |
|   muxlaunch   | Main Menu                                   | explore / collection / history / apps / info / config / reboot / shutdown  |
|  muxmessage   | -                                           | N/A  |
|  muxnetinfo   | Network Details                             | N/A  |
| muxnetprofile | Network Profiles (within Wi-FI).            | N/A  |
|  muxnetscan   | Shows when scanning for networks.           | N/A  |
|  muxnetwork   | Wi-Fi Network Page                          | N/A  |
|   muxoption   | -                                           | N/A  |
|    muxpass    | Passcode Lock Screen                        | N/A  |
|  muxpicker    | Catalogue Sets / RetroArch Configurations / Theme Picker | N/A  |
|   muxplore    | Content Explore Page                        | N/A  |
|   muxpower    | -                                           | N/A  |
|    muxrtc     | Date and Time page                          | N/A  |
|  muxsearch    | Search Content                              | N/A  |
|  muxshot      | Screenshots                                 | N/A  |
|  muxstorage   | Storage Space                               | N/A  |
|   muxsplash   | -                                           | N/A  |
|   muxstart    | -                                           | N/A  |
|  muxstorage   | Storage Migrate/Sync                        | N/A  |
|  muxsysinfo   | System details                              | N/A  |
|  muxtag       | Tag Content                                 | N/A  |
|    muxtask    | Task toolkit page                           | N/A  |
|   muxtester   | Input Tester                                | N/A  |
|  muxthemedown | Theme Downloader                            | N/A  |
|  muxthemefilter | Theme Filters                             | N/A  |
|  muxtimezone  | Timezone Selection                          | N/A  |
|  muxtweakadv  | Advanced (within General Settings)          | N/A  |
|  muxtweakgen  | General Settings                            | N/A  |
|   muxvisual   | Interface Options (within General Settings) | N/A  |
|  muxwarn      | Reset warning page                          | N/A  |
|  muxwebserv   | Web Services page                           | N/A  |

# Sound Files - Navigation

You are able to use sounds within your theme. Place `WAVE` files in to the `sound` directory.

|  Sound File    | Function                               |
|:--------------:|:---------------------------------------|
|   back.wav     | Pressing the back button               |
| confirm.wav    | Selecting an active item               |
| error.wav      | Error sound                            |
| info_close.wav | Closing Info Window                    |
| info_open.wav  | Opening Info window                    |
| keypress.wav   | On Screen Keyboard (OSK) key press     |
|   muos.wav     | Something secret - _What could it be?_ |
| navigate.wav   | Pressing UDLR buttons                  |
| option.wav     | Change Option Value                    |
|  reboot.wav    | Rebooting the device                   |
| shutdown.wav   | Shutting down the device               |
| startup.wav    | Starting up the device                 |
