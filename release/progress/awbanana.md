---
layout: default
title: 2410.3 AW BANANA
permalink: /release/progress/awbanana
parent: Progress
grand_parent: Release
nav_order: 1
has_toc: false
---

# muOS 2410.3 AW BANANA

## Download Full Image

_Not ready just yet!_

## Download Update Only

_Not ready just yet!_

<hr>

{: .note }
> If you have alternative storage support please reach out to @xonglebongle on the muOS Community Discord server!
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
> * To get the most benefit out of this testing release you will **need to reflash!**
> * We now set threaded video to off and set the display timing to `60.00hz` for all devices
> * If you are running into any weird stuttering ensure you reset (_or remove_) your current RetroArch configuration set
> * You can install the update straight over the top of **any existing Banana**, or **Big Banana**, release including
    those who have previously installed updates 1080p resolution via HDMI has been temporarily disabled due to video
    memory issues with muX. This is not a breaking issue and will be fixed for Pixie.

<hr>

## Contributors

* antikk
* bgelmini
* duncanyoyo1
* \_\_krt\_\_
* thegammasqueeze
* xonglebongle
* yomama78

## Changes

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
* Updated Microsoft MSX assignable system
* Updated ScummVM to 2.9.0 with TWP fix
* Updated SFTPgo system
* Updated theme for RG34XX-H device resolution
