---
title: Image Assistance
layout: default
parent: Themes
nav_order: 2
has_toc: false
---

# Image Format

There are currently three compatible image formats for themes with specific use cases;

- **`.bmp`** - the bootlogo only (24-bit, True Colour bitmap)
- **`.png`** - any static images within `./images/static/`, backgrounds in `./images/wall/`, and overlay.png
- **`.gif`** - creating animated backgrounds within `./images/wall`

**If you decide to use images for your themes please ensure that you use the correct resolution for the device!**

{: .note }
> If you are struggling to find a method to easily convert an image to a 24-bit `.bmp` file, there are
> many [online converters](https://online-converting.com/image/convert2bmp/) that can do this for you. There are
> also similar places to convert a video file to a `.gif` file [easily](https://ezgif.com/video-to-gif) as well.

# Menu Graphic Design

If you are new to graphic design in this context, there are many places you can start with to get the most out of the
MustardOS theme engine. Most people designing visual assets will use software such as Photoshop, Photopea (this one
is [online and free to use](https://www.photopea.com/)), Illustrator, GIMP, Procreate, Aseprite (pixel art app), or
Affinity.

With the introduction of individual list item images (in MustardOS Beans), themers can now simulate complex navigation
you would see in other CFWs or software menus. The most common use case example for MustardOS is altering the main
menu (`muxlaunch`) from vertical lists to icon-based navigation. Here are three examples of this;

| !["GamePal" by vacarotti](https://raw.githubusercontent.com/VagueParade/dumping-ground/main/theme_gifs/GamePal.gif "GamePal (by vacarotti)") | !["GbOS" by ciskao](https://raw.githubusercontent.com/VagueParade/dumping-ground/main/theme_gifs/GbOS.gif "GbOS (by ciskao)") | !["Plexus" by LMarcoMiranda](https://raw.githubusercontent.com/VagueParade/dumping-ground/main/theme_gifs/Plexus.gif "Plexus (by LMarcoMiranda)") |
|:--------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                           *Single row horizontal <br>navigation across two pages*                                            |                                               *Multi-row horizontal navigation*                                               |                                                          *Vertical scrolling navigation*                                                          |

To achieve this, refer to both the Theme Structure and Scheme File pages - but to put it simply in these three specific
cases...

- Create an image folder within `./image/wall/` named `muxlaunch`, with files
  named; `explore.png`, `favourite.png`, `history.png`, `apps.png`, `info.png`, `config.png`, `reboot.png`,
  and `shutdown.png`
- Duplicate `./scheme/default.txt` and rename it to `muxlaunch.txt`. All values here under `[LIST]` must have their
  alphas set to `=0` to make the list items invisible, and `[MISC] NAVIGATION_TYPE=0` or `=1` (`0` is vertical
  navigation, `1` is horizontal navigation).

| <img src="https://raw.githubusercontent.com/VagueParade/dumping-ground/main/theme_gifs/PS%20Blue.gif" title="PS Blue (by VagueParade)" alt="PS Blue (by VagueParade)" width="360"/> |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                 *Animated background with <br>static images on top*                                                                 |

If you would like an animated background, place your background sequence named `default.0.png`, `default.1.png`, etc.,
or
`muxprogram.0.png`, `muxprogram.1.png`, etc., in ./images/wall/. Set `[MISC] ANIMATED_BACKGROUND=2` to inform the
corresponding program(s) that it should use the sequenced PNG files (instead of a static .png).

{: .warning }
> GIFs are still somewhat supported by using `[MISC] ANIMATED_BACKGROUND=1` however this is being deprecated and will be
> removed in future MustardOS updates!

{: .note }
> Static Images: These are very useful when using animated backgrounds, as you can save your theme size and quality by
> placing icons on top of a looping background. The file structure is the same as if you were placing a muxlaunch folder
> in ./images/wall/, but you cannot use a single default.png in this case.
>
> Use fullscreen static images sitting underneath your header/footer in your program(s) by changing [MISC]
> STATIC_ALIGNMENT=X to 3.

Feel free to take inspiration from other themes if you are struggling to find a way to implement the perfect type of
menu navigation for your theme.