---
title: Image Assistance
layout: default
permalink: /themes/images
parent: Themes
nav_order: 2
has_toc: false
---

# Image Format

There are currently three compatible image formats for themes with specific use cases;

- **`.bmp`** - the bootlogo only (24-bit, True Colour bitmap)
- **`.png`** - any static images within `./images/static/`, backgrounds in `./images/wall/`, and overlay.png

**If you decide to use images for your themes please ensure that you use the correct resolution for the device!**

{: .note }
> If you are struggling to find a method to easily convert an image to a 24-bit `.bmp` file, there are
> many [online converters](https://online-converting.com/image/convert2bmp/) that can do this for you.

# Menu Graphic Design

If you are new to graphic design in this context, there are many places you can start with to get the most out of the
MustardOS theme engine. Most people designing visual assets will use software such as Photoshop, Photopea (this one
is [online and free to use](https://www.photopea.com/)), Illustrator, GIMP, Procreate, Aesprite (pixel art app), or
Affinity.

With the introduction of individual list item images , theme creators can simulate complex navigation you would see in
other CFWs or software menus. The most common use case example for MustardOS is altering the main menu (`muxlaunch`)
from vertical lists to icon-based navigation.

|            <img height="320" src="https://raw.githubusercontent.com/VagueParade/dumping-ground/main/theme_gifs/GamePal.gif"/>            |
|:-----------------------------------------------------------------------------------------------------------------------------------------:|
|                                **Single row horizontal navigation across two pages**<br>_GamePal (by vacarotti)_                                |

|         <img height="320" src="https://raw.githubusercontent.com/VagueParade/dumping-ground/main/theme_gifs/GbOS.gif"/>         |
|:--------------------------------------------------------------------------------------------------------------------------:|
|                                   **Multiple row horizontal navigation**<br>_GbOS (by ciskao)_                                   |

|             <img height="320" src="https://raw.githubusercontent.com/VagueParade/dumping-ground/main/theme_gifs/Plexus.gif"/>              |
|:----------------------------------------------------------------------------------------------------------------------------------------------:|
|                                           **Vertical scrolling navigation**<br>_Plexus (by LMarcoMiranda)_                                           |

To achieve this, refer to both the Theme Structure and Scheme File pages - but to put it simply in these three specific
cases...

- Create an image folder within `./image/wall/` named `muxlaunch`, with files
  named; `explore.png`, `collection.png`, `history.png`, `apps.png`, `info.png`, `config.png`, `reboot.png`,
  and `shutdown.png`
- Duplicate `./scheme/default.ini` and rename it to `muxlaunch.ini`. All values here under `[LIST]` must have their
  alphas set to `=0` to make the list items invisible, and `[MISC] NAVIGATION_TYPE=0` or `=1` (`0` is vertical
  navigation, `1` is horizontal navigation).

Feel free to take inspiration from other themes if you are struggling to find a way to implement the perfect type of
menu navigation for your theme.