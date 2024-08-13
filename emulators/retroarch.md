---
layout: default
title: RetroArch
permalink: /emulators/retroarch
parent: Emulators
nav_enabled: true
has_children: false
has_toc: false
---

![](assets/images/retroarch_logo.png)

{: .note-title}
> NOTE
>
> This page serves as a quick reference for RetroArch configuration.

## RetroArch Configuration Priority
RetroArch applies configurations in the following order  
- Load Global Config - `MUOS/retroarch/retroarch.cfg`
- Apply Core Overrides - `MUOS/info/config/<corename>/<corename>.cfg` - `<corename>.rmp`
- Apply Content Directory Overrides - `MUOS/info/config/<corename>/<directoryname>.cfg` - `<directoryname>.rmp`
- Apply Game Overrides - `MUOS/info/config/<corename>/<gamename>.cfg` - `<gamename>.rmp`


## Modifying RetroArch Settings
### Global Settings
This is only for changes to the RetroArch configuration that wish to apply to apply all games.  
From the muOS MAIN MENU, choose Launch RetroArch.  
All global settings can be found by entering the **Settings** menu item from this screen.  
To save any changes, return to the RetroArch **Main Menu**.  
Select **Configuration File**. Select **Save Current Configuration**

### Core, Directory, and Game Overrides
{: .note}
> These settings can only be modified once a game is loaded.

Once the game has started press the MENU button to open RetroArch.  
By default it opens into the **Quick Menu**, you may need to go back a level if you wish to access the **Settings** option used earlier.  
To save any changes you will need to go back to the **Quick Menu** and select **Overrides**.  
From here you can choose to save your changes as Game, Content Directory, or Core override.

### Other Configuration Options
There are some settings in RetroArch that are not covered by the Global and Override configurations.  
These are Remaps, Core Options, and Shaders.  Much like Overrides, these can only be modified once a game is loaded.  
In the RetroArch **Quick Menu** you can modify these and save their files.

### Remaps
From the **Quick Menu** select **Controls**.  
Make any changes then select Manage Remap Files.  Here you can choose to save changes as Game, Content Directory, or Core remap.

### Core Options
From the **Quick Menu** select **Core Options**.  
Make any changes then select Manage Core Options.  Here you can choose to save changes as Game or Content Directory.

### Shaders
From the **Quick Menu** select **Shaders**.  Make any changes then select **Save**.  Here you can choose to save changes as Game, Content Directory, or Core shader preset.

### RetroAchievements
**General Information**  
[https://docs.libretro.com/guides/retroachievements/](https://docs.libretro.com/guides/retroachievements/)
If you would like to enable RetroAchievements it is best to makes these changes in the Retroarch Global Config.  
You will need to create a RetroAchievements account: [https://retroachievements.org/](https://retroachievements.org/)

### Enabling Achievements
Settings -> Achievements -> Achievements: On  
Make sure you also enter your Username and Password on this screen.

### Enabling Achievement Notifications
Settings -> User Interface -> On-Screen Display -> On-Screen Notifications -> Graphics Widgets: On  
It's also advisable on this screen to set:  
Scale Graphics Widgets Automatically: Off  
Graphics Widgets Scale Override: 1.30x  

### More Achievement Information
To show more Achievement details.  
Settings -> User Interface -> Menu Item Visibility -> Show Menu Sub-Labels: On

### Check Achievement Progress
While a game is loaded.   
Quick Menu -> Achievements
