---
layout: default
title: 2410.3 AW BANANA
permalink: /release/archive/awbanana
parent: Archive
grand_parent: Release
nav_order: 1
has_toc: false
---

# muOS 2410.3 AW BANANA

#### _Pronunciation_
/ˌeɪ ˈdʌb.l̩.juː bəˈnæn.ə/

<hr>

## Download **Full Image**

[Download from Gofile](https://gofile.io/d/BwXOqY){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }
[Download from MEGA](https://mega.nz/folder/4iJyFQTR#FUEPC-zID0WzGukTsHHLDg){: .btn .fs-5 .mb-4 .mb-md-0 }

#### OneDrive Mirror - Provided by IonutBarna
[Download from OneDrive](https://1drv.ms/f/c/4b74904a7f19bbfb/Esab5mtJ_aROug_SagXr7EUB7VgBVZFrT-6pbOTgzBD1Iw?e=HH6ql0){: .btn .fs-5 .mb-4 .mb-md-0 }

<hr>

## Download **Update Only**

[Download from Gofile](https://gofile.io/d/kTJWRA){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .text-grey-dk-300 }
[Download from MEGA](https://mega.nz/folder/53pxgIbB#ZoEPgwNofI82JB2zxDSswQ){: .btn .fs-5 .mb-4 .mb-md-0 }

#### OneDrive Mirror - Provided by IonutBarna
[Download from OneDrive](https://1drv.ms/f/c/4b74904a7f19bbfb/EuCAD6zGLOtPvzNb7oM8E6ABKH9Saw7pYwnaSfIEDp47Fg?e=l3bOCZ){: .btn .fs-5 .mb-4 .mb-md-0 }

<hr>

{: .note }
> If you have alternative storage support please reach out to **xonglebongle** on the muOS Community Discord server!
>
> So everybody is aware, MEGA has restrictions on certain countries and places a download limit. Use either Gofile or
> the Torrents if you cannot use MEGA. And for goodness sake we are **not** moving to a paid subscription like some
> people might be thinking.  <small>_The absurdity..._</small>

<hr>

## Support muOS

Love muOS? Want to help us on this **crazy** journey? Here's how to get involved.

**This can be done a few ways:**

* Be helpful around the Discord community server
* [Contribute code directly to our GitHub repositories](https://github.com/MustardOS)
* Spread the word about muOS and all its features

**Or you can join the testing crew directly by:**

* Supporting us via Ko-fi subscription
* Boosting the Discord community server

<hr>

## Please Read Carefully

{: .new }
> The update requires you to already have **2410.1 BANANA** or **2410.2 BIG BANANA** already setup and installed
> on your device. Using modified muOS installations or previous versions may have strange or breaking outcomes.

{: .important }
> * To get the most benefit out of this release you will **need to reflash!**
> * We now set threaded video to off and set the display timing to `60.00hz` for all devices
> * If you are running into any weird stuttering ensure you reset (_or remove_) your current RetroArch configuration set
> * You can install the update straight over the top of **any existing Banana**, or **Big Banana**, release including
    those who have previously installed updates
> * 1080p resolution via HDMI has been temporarily disabled due to video memory issues with muX. This is not a breaking
    issue and will be fixed for Pixie.

<hr>

## Contributors

* antikk
* bgelmini
* Bitter_Bizarro
* duncanyoyo1
* \_\_krt\_\_
* thegammasqueeze
* trngaje
* xonglebongle
* yomama78

## Changes

* Added additional assignable cores and systems
* Added disk health check through `fsck` on device startup
* Added extra PICO-8 favourite directory checking
* Added friendly names for ChannelF, IPTV, J2ME, Odyssey2, TIC-80 and Amstrad CPC/GX4000
* Added navigation sound `error.wav` for the times where something goes wrong
* Added Odyssey2/VideoPac assignable system
* Added resolution change hack for HDMI output change
* Added RG34XX-H device support
* Adjusted default backlight brightness on first boot
* Adjusted device panel timings
* Adjusted mSD card frequency
* Centralised language layout and separated most OSK functions
* Disabled forced power off functionality
* Disable HDMI changes whilst in use
* Ensure muX resolution is restored on startup
* Fixed charging module brightness path structure
* Fixed CPU core count variable on suspend
* Fixed default RetroArch resolution for RG34XX-H
* Fixed HDMI startup values
* Fixed low power indicator
* Fixed network module element count
* Fixed NX-Engine download script
* Fixed ports not having sound when line is commented
* Fixed power light while charging logic
* Fixed RetroArch network wait status messages
* Fixed RG28XX-H screenshot rotation
* Fixed RG35XX-SP charging and sleep conflict issue
* Fixed ScummVM launch script getting stuck with trailing spaces
* Fixed virtual terminal service saving
* Modified `fastfetch` information with muOS logo
* Modified GPU maximum frequency
* Moved low power indicator and RetroArch precache to after charge mode
* Obtain output resolution for HDMI modes
* Optimised frontend modules
* Reduced power script CPU usage by delaying power off functionality
* Removed 4:3 overlays from RG34XX-H
* Removed retro achievements on RetroArch configuration set save
* Revised HDMI output logic
* Updated Application grid mode to use catalogue images
* Updated default theme for `720x576` and `1280x720` support
* Updated Libretro cores
* Updated Microsoft MSX assignable system
* Updated ScummVM to 2.9.0 with TWP fix
* Updated SFTPgo system
* Updated theme for RG34XX-H device resolution
