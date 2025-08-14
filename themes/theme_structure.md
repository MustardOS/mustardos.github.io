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

The following images are used for populating the glyphs displayed in the headers, footers, and list items.
<br><br>**Note:** If your theme does not supply images for the glyphs below then it will fall back to built in default
images. If you want to hide glyphs you will need to adjust the appropriate settings in your scheme file. For example
disable list item glyphs you would set these settings in your scheme file:

```
[list]
LIST_DEFAULT_GLYPH_ALPHA=0
LIST_FOCUS_GLYPH_ALPHA=0
```

```
├── glyph
│   ├── bar
│   |   ├── brightness.png
│   |   ├── volume_0.png
│   |   ├── volume_1.png
│   |   ├── volume_2.png
│   |   ├── volume_3.png
│   ├── footer
│   |   ├── a.png
│   |   ├── b.png
│   |   ├── c.png
│   |   ├── menu.png
│   |   ├── x.png
│   |   ├── y.png
│   |   ├── z.png
│   ├── header
│   |   ├── bluetooth.png
│   |   ├── capacity_0.png
│   |   ├── capacity_10.png
│   |   ├── capacity_100.png
│   |   ├── capacity_20.png
│   |   ├── capacity_30.png
│   |   ├── capacity_40.png
│   |   ├── capacity_50.png
│   |   ├── capacity_60.png
│   |   ├── capacity_70.png
│   |   ├── capacity_80.png
│   |   ├── capacity_90.png
│   |   ├── capacity_charging_0.png
│   |   ├── capacity_charging_10.png
│   |   ├── capacity_charging_100.png
│   |   ├── capacity_charging_20.png
│   |   ├── capacity_charging_30.png
│   |   ├── capacity_charging_40.png
│   |   ├── capacity_charging_50.png
│   |   ├── capacity_charging_60.png
│   |   ├── capacity_charging_70.png
│   |   ├── capacity_charging_80.png
│   |   ├── capacity_charging_90.png
│   |   ├── network_active.png
│   |   ├── network_normal.png
│   ├── muxapp
│   |   ├── app.png
│   |   ├── archive.png
│   |   ├── dingux.png
│   |   ├── flip.png
│   |   ├── moonlight.png
│   |   ├── music.png
│   |   ├── portmaster.png
│   |   ├── ppsspp.png
│   |   ├── retroarch.png
│   |   ├── rgbcontroller.png
│   |   ├── scummvm.png
│   |   ├── task.png
│   |   ├── terminal.png
│   ├── muxarchive
│   |   ├── archive.png
│   |   ├── installed.png
│   ├── muxassign
│   |   ├── core.png
│   |   ├── default.png
│   |   ├── system.png
│   ├── muxcollect
│   |   ├── collection.png
│   |   ├── folder.png
│   ├── muxconfig
│   |   ├── connect.png
│   |   ├── custom.png
│   |   ├── general.png
│   |   ├── interface.png
│   |   ├── language.png
│   |   ├── power.png
│   |   ├── storage.png
│   |   ├── theme.png
│   ├── muxconnect
│   |   ├── bluetooth.png
│   |   ├── network.png
│   |   ├── service.png
│   |   ├── usbfunction.png
│   ├── muxcustom
│   |   ├── backgroundanimation.png
│   |   ├── bgm.png
│   |   ├── blackfade.png
│   |   ├── boxart.png
│   |   ├── boxartalign.png
│   |   ├── catalogue.png
│   |   ├── config.png
│   |   ├── font.png
│   |   ├── launchsplash.png
│   |   ├── sound.png
│   |   ├── theme.png
│   |   ├── themealternate.png
│   ├── muxgov
│   |   ├── default.png
│   |   ├── governor.png
│   ├── muxhdmi
│   |   ├── audio.png
│   |   ├── depth.png
│   |   ├── enable.png
│   |   ├── range.png
│   |   ├── resolution.png
│   |   ├── scan.png
│   |   ├── space.png
│   |   ├── theme_resolution.png
│   ├── muxhistory
│   |   ├── collection.png
│   |   ├── history.png
│   ├── muxinfo
│   |   ├── credit.png
│   |   ├── screenshot.png
│   |   ├── space.png
│   |   ├── system.png
│   |   ├── tester.png
│   |   ├── tracker.png
│   ├── muxlanguage
│   |   ├── language.png
│   ├── muxlaunch
│   |   ├── apps.png
│   |   ├── collection.png
│   |   ├── config.png
│   |   ├── explore.png
│   |   ├── favourite.png
│   |   ├── history.png
│   |   ├── info.png
│   |   ├── reboot.png
│   |   ├── shutdown.png
│   ├── muxnetprofile
│   |   ├── profile.png
│   ├── muxnetscan
│   |   ├── netscan.png
│   ├── muxnetwork
│   |   ├── address.png
│   |   ├── connect.png
│   |   ├── dns.png
│   |   ├── enable.png
│   |   ├── gateway.png
│   |   ├── identifier.png
│   |   ├── password.png
│   |   ├── scan.png
│   |   ├── status.png
│   |   ├── subnet.png
│   |   ├── type.png
│   ├── muxoption
│   |   ├── core.png
│   |   ├── folder.png
│   |   ├── governor.png
│   |   ├── rom.png
│   |   ├── search.png
│   ├── muxpicker
│   |   ├── catalogue.png
│   |   ├── config.png
│   |   ├── folder.png
│   |   ├── theme.png
│   ├── muxplore
│   |   ├── collection.png
│   |   ├── folder.png
│   |   ├── history.png
│   |   ├── rom.png
│   ├── muxpower
│   |   ├── battery.png
│   |   ├── idle_display.png
│   |   ├── idle_sleep.png
│   |   ├── shutdown.png
│   ├── muxrtc
│   |   ├── day.png
│   |   ├── hour.png
│   |   ├── minute.png
│   |   ├── month.png
│   |   ├── notation.png
│   |   ├── timezone.png
│   |   ├── year.png
│   ├── muxsearch
│   |   ├── content.png
│   |   ├── folder.png
│   |   ├── global.png
│   |   ├── local.png
│   |   ├── lookup.png
│   ├── muxshot
│   |   ├── screenshot.png
│   ├── muxspace
│   |   ├── rfs.png
│   |   ├── sd1.png
│   |   ├── sd2.png
│   |   ├── usb.png
│   ├── muxstorage
│   |   ├── bios.png
│   |   ├── catalogue.png
│   |   ├── collection.png
│   |   ├── config.png
│   |   ├── content.png
│   |   ├── core.png
│   |   ├── favourite.png
│   |   ├── history.png
│   |   ├── language.png
│   |   ├── music.png
│   |   ├── name.png
│   |   ├── network.png
│   |   ├── pack-catalogue.png
│   |   ├── pack-config.png
│   |   ├── retroarch.png
│   |   ├── save.png
│   |   ├── screenshot.png
│   |   ├── syncthing.png
│   |   ├── theme.png
│   |   ├── userinit.png
│   ├── muxsysinfo
│   |   ├── capacity.png
│   |   ├── cpu.png
│   |   ├── device.png
│   |   ├── governor.png
│   |   ├── kernel.png
│   |   ├── memory.png
│   |   ├── service.png
│   |   ├── speed.png
│   |   ├── temp.png
│   |   ├── uptime.png
│   |   ├── version.png
│   |   ├── voltage.png
│   ├── muxtask
│   |   ├── backup.png
│   |   ├── clear.png
│   |   ├── diagnostic.png
│   |   ├── ethernet.png
│   |   ├── junk.png
│   |   ├── network.png
│   |   ├── retroarch.png
│   |   ├── sdcard.png
│   |   ├── theme.png
│   ├── muxtester
│   |   ├── btn_a.png
│   |   ├── btn_b.png
│   |   ├── btn_c.png
│   |   ├── btn_l1.png
│   |   ├── btn_l2.png
│   |   ├── btn_l3.png
│   |   ├── btn_menu.png
│   |   ├── btn_r1.png
│   |   ├── btn_r2.png
│   |   ├── btn_r3.png
│   |   ├── btn_select.png
│   |   ├── btn_start.png
│   |   ├── btn_x.png
│   |   ├── btn_y.png
│   |   ├── btn_z.png
│   |   ├── dpad_down.png
│   |   ├── dpad_left.png
│   |   ├── dpad_right.png
│   |   ├── dpad_up.png
│   |   ├── ls_down.png
│   |   ├── ls_left.png
│   |   ├── ls_right.png
│   |   ├── ls_up.png
│   |   ├── rs_down.png
│   |   ├── rs_left.png
│   |   ├── rs_right.png
│   |   ├── rs_up.png
│   |   ├── vol_down.png
│   |   ├── vol_up.png
│   ├── muxtheme
│   |   ├── theme.png
│   ├── muxtimezone
│   |   ├── timezone.png
│   ├── muxtweakadv
│   |   ├── accelerate.png
│   |   ├── brightness.png
│   |   ├── cardmode.png
│   |   ├── dpadswap.png
│   |   ├── led.png
│   |   ├── lock.png
│   |   ├── offset.png
│   |   ├── overdrive.png
│   |   ├── retrowait.png
│   |   ├── rumble.png
│   |   ├── state.png
│   |   ├── swap.png
│   |   ├── swapfile.png
│   |   ├── theme.png
│   |   ├── thermal.png
│   |   ├── userinit.png
│   |   ├── verbose.png
│   |   ├── volume.png
│   ├── muxtweakgen
│   |   ├── advanced.png
│   |   ├── brightness.png
│   |   ├── clock.png
│   |   ├── colour.png
│   |   ├── hdmi.png
│   |   ├── startup.png
│   |   ├── volume.png
│   ├── muxvisual
│   |   ├── battery.png
│   |   ├── clock.png
│   |   ├── counterfile.png
│   |   ├── counterfolder.png
│   |   ├── dash.png
│   |   ├── folderempty.png
│   |   ├── folderitemcount.png
│   |   ├── friendlyfolder.png
│   |   ├── hidden.png
│   |   ├── name.png
│   |   ├── network.png
│   |   ├── thetitleformat.png
│   |   ├── titleincluderootdrive.png
│   ├── muxwebserv
│   |   ├── ntp.png
│   |   ├── rslsync.png
│   |   ├── sftpgo.png
│   |   ├── sshd.png
│   |   ├── syncthing.png
│   |   ├── tailscaled.png
│   |   ├── ttyd.png
├── image
├── scheme
└── sound
```

# Program Names

MustardOS has numerous programs, so they are individually named so that you Themers can set different properties for
every single page if you so wish to do so! Anything named ```default.xxx``` in the above folder structure can be renamed
to  ```mux...``` to apply ideas to single pages.

You can also set images to appear for individual list items (see the files above under `./image/static/muxlaunch/`.
> *Caution - as MustardOS is a constantly updating system, there is a high chance that in time, list items will be added
or removed from sections. Be wary of this when creating graphics that show all the options for a program.*

Check out the updated naming conventions of all modules below;

| Program Name  | Function                                    | List Item Names                                                                                                                                                                                                      |
|:-------------:|:--------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    muxapp     | Dynamic applications page                   | *List item wallpapers named directly after application names. Default example here;* <br>Archive Manager / Dingux Commander / GMU Music Player / Moonlight / PortMaster / RetroArch / Simple Terminal / Task Toolkit |
|  muxarchive   | Archive Manager page                        | -                                                                                                                                                                                                                    |
|   muxassign   | Shows when assigning a core to a folder     | -                                                                                                                                                                                                                    |
|   muxcharge   | Charging Screen                             | -                                                                                                                                                                                                                    |
|   muxconfig   | Configuration page                          | general / theme / network / service / clock / device                                                                                                                                                                 |
|  muxcredits   | -                                           | -                                                                                                                                                                                                                    |
| muxfavourite  | Favourites page                             | -                                                                                                                                                                                                                    |
|    muxgov     | -                                           | -                                                                                                                                                                                                                    |
|  muxhistory   | History page                                | -                                                                                                                                                                                                                    |
|    muxinfo    | Information page                            | tester / system / credit                                                                                                                                                                                             |
|  muxlanguage  | -                                           | -                                                                                                                                                                                                                    |
|   muxlaunch   | Main Menu                                   | explore / favourite / history / apps / info / config / reboot / shutdown                                                                                                                                             |
| muxnetprofile | Network Profiles (within Wi-FI).            | -                                                                                                                                                                                                                    |
|  muxnetscan   | Shows when scanning for networks.           | -                                                                                                                                                                                                                    |
|  muxnetwork   | Wi-Fi Network Page                          | enable / identifier / password / type / address / subnet / gateway / DNS / status / connect                                                                                                                          |
|   muxoption   | -                                           | -                                                                                                                                                                                                                    |
|    muxpass    | Passcode Lock Screen                        | -                                                                                                                                                                                                                    |
|   muxplore    | Content Explore Page                        | *Use `MUOS/info/catalogue` outside of themes to create list item wallpapers.*                                                                                                                                        |
|   muxpower    | -                                           | -                                                                                                                                                                                                                    |
|    muxrtc     | Date and Time page                          | year / month / day / hour / minute / notation / timezone                                                                                                                                                             |
|   muxsplash   | -                                           | -                                                                                                                                                                                                                    |
|   muxstart    | -                                           | -                                                                                                                                                                                                                    |
|  muxstorage   | Storage Migrate/Sync                        | bios / config / catalogue / fav / music / save / screenshot / theme                                                                                                                                                  |
|  muxsysinfo   | System details                              | version / kernel / uptime / cpu / speed / governor / memory / temp / service / capacity / voltage                                                                                                                    |
|    muxtask    | Task toolkit page                           | -                                                                                                                                                                                                                    |
|   muxtester   | Input Tester                                | -                                                                                                                                                                                                                    |
|   muxtheme    | Theme Picker page                           | -                                                                                                                                                                                                                    |
|  muxtimezone  | Timezone Selection                          | -                                                                                                                                                                                                                    |
|  muxtweakadv  | Advanced (within General Settings)          | swap / thermal / font / volume / brightness / offset / lock / led / theme / retrowait / android / state / verbose                                                                                                    |
|  muxtweakgen  | General Settings                            | hidden / bgm / sound / startup / colour / brightness / hdmi / shutdown / battery / sleep / interface / storage / advanced                                                                                            |
|   muxvisual   | Interface Options (within General Settings) | battery / network / bluetooth / mux_clock / boxart / name / dash / counterfolder / counterfile                                                                                                                       |
|  muxwebserv   | Web Services page                           | shell / browser / terminal / sync / ntp                                                                                                                                                                              |

# Sound Files - Navigation

You are able to use sounds within your theme. Place `WAVE` files in to the `sound` directory.

|  Sound File  | Function                               |
|:------------:|:---------------------------------------|
|   back.wav   | Pressing the back button               |
| confirm.wav  | Selecting an active item               |
| keypress.wav | On Screen Keyboard (OSK) key press     |
|   muos.wav   | Something secret - _What could it be?_ |
| navigate.wav | Pressing UDLR buttons                  |
|  reboot.wav  | Rebooting the device                   |
| shutdown.wav | Shutting down the device               |
