---
layout: default
title: Theme Engine
permalink: /help/themeengine
nav_order: 11
parent: Help
has_children: false
---

# muOS Theme Engine

## Screen IDs
When creating a theme the system will use the screen ID to apply fonts and scheme settings.  If a file does not exist matching the screen ID the system will look for a file name **default**. Font files will have a .bin extension and scheme files will have a .txt extension.
| Screen ID     | Description            |
|---------------|------------------------|
| muxapp        | Applications           |
| muxarchive    | Archive Manager        |
| muxassign     | Assign Core            |
| muxconfig     | Configuration          |
| muxfavourite  | Favourites             |
| muxhistory    | History                |
| muxinfo       | Information            |
| muxlaunch     | Main Launch Menu       |
| muxnetprofile | Wi-fi Network Profiles |
| muxnetscan    | Wi-fi Network Scan     |
| muxnetwork    | Wi-fi Network          |
| muxplore      | Context Explorer       |
| muxrtc        | Date and Time          |
| muxstorage    | Storage Preferences    |
| muxsysinfo    | System Details         |
| muxtask       | Task Toolkit           |
| muxtheme      | Theme Picker           |
| muxtimezone   | Set Time Zone          |
| muxtweakadv   | Advance Settings       |
| muxtweakgen   | General Settings       |
| muxvisual     | Interface Options      |
| muxwebserv    | Web Services           |

## Folder Structure
The below table breaks down how the theme.zip file should be structured.  If {ScreenID} is referenced refer to Screen ID section above.
| Path                                  | Description                                                                                 |
|---------------------------------------|---------------------------------------------------------------------------------------------|
| fonts/default.bin                     | Default font to use if {ScreenID}.bin is not found.                                         |
| fonts/{ScreenID}.bin                  | Font for screen relating to specific {ScreenID}.                                            |
| fonts/panel/default.bin               | Default font to use for content panel items if {ScreenID}.bin is not found.                 |
| fonts/panel/{ScreenID}.bin            | Font to use for content panel items for screen relating to specific {ScreenID}.             |
| image/bootlogo.bmp                    | Logo that appears while booting device.                                                     |
| image/wall/default.png                | Default wallpaper used for all screens unless overwritten by a {ScreenID}.png wallpaper     |
| image/wall/{ScreenID}.png             | Default wallpaper used for all screens unless overwritten by a {ScreenID}.png wallpaper     |
| image/wall/{ScreenID}/{Wallpaper}.png | See https://muos.dev/help/theme/wallpaper for more details on all possible wallpaper files. |
| scheme/default.bin                    | Default scheme file used for styling screen if {ScreenID}.bin is not found.                 |
| scheme/{ScreenID}.bin                 | Scheme file used for styling screen for screen relating to specific {ScreenID}.             |
| sound/                                | Sound files for navigation.  Not currently implemented.                                     |

## Theme Preview Image
In addition to the theme.zip file the Theme Picker system supports having a preview image for your theme.  Name of the file should match the name of your theme zip file.  The image should be 288px wide by 216px height and located in **/mnt/mmc/MUOS/theme/preview/{ThemeName}.png** 

## Theme Scheme File Breakdown
### Section [background]
| Setting          | Description                                       |
|------------------|---------------------------------------------------|
| BACKGROUND       | Background colour. Most used in [list] gradients. |
| BACKGROUND_ALPHA | Background colour transparency.                   |

### Section [font]
| Setting                      |  Description                                                         |
|------------------------------|----------------------------------------------------------------------|
| FONT_HEADER_PAD_TOP          |  Number of pixels from top of header area to header text.            |
| FONT_HEADER_PAD_BOTTOM       |  Number of pixels from bottom of header area to header text.         |
| FONT_HEADER_ICON_PAD_TOP     |  Number of pixels from top of header area to header icons.           |
| FONT_HEADER_ICON_PAD_BOTTOM  |  Number of pixels from bottom of header area to header icons.        |
| FONT_FOOTER_PAD_TOP          |  Number of pixels from top of footer area to footer text.            |
| FONT_FOOTER_PAD_BOTTOM       |  Number of pixels from bottom of footer area to footer text.         |
| FONT_FOOTER_ICON_PAD_TOP     |  Number of pixels from top of footer area to footer icons.           |
| FONT_FOOTER_ICON_PAD_BOTTOM  |  Number of pixels from bottom of footer area to footer icons.        |
| FONT_MESSAGE_PAD_TOP         |  Number of pixels from top of message area to message text.          |
| FONT_MESSAGE_PAD_BOTTOM      |  Number of pixels from bottom of message area to message text.       |
| FONT_MESSAGE_ICON_PAD_TOP    |  Number of pixels from top of message area to message icons.         |
| FONT_MESSAGE_ICON_PAD_BOTTOM |  Number of pixels from bottom of message area to message icons.      |
| FONT_LIST_PAD_TOP            |  Number of pixels from top of a list item area to a list item text.  |
| FONT_LIST_PAD_BOTTOM         |  Number of pixels from bottom of an item area to a list item text.   |
| FONT_LIST_ICON_PAD_TOP       |  Number of pixels from top of a list item area to a list item glyph. |
| FONT_LIST_ICON_PAD_BOTTOM    |  Number of pixels from bottom of an item area to a list item glyph.  |

### Section [status]
| Setting       |  Description                                                             |
|---------------|--------------------------------------------------------------------------|
| PADDING_RIGHT |  Number of pixels from the right side of the screen to the battery icon. |

### Section [battery]
| Setting              |  Description                          |
|----------------------|---------------------------------------|
| BATTERY_NORMAL       |  Battery icon standard colour.        |
| BATTERY_ACTIVE       |  On-charge battery icon colour.       |
| BATTERY_LOW          |  Low battery icon colour.             |
| BATTERY_NORMAL_ALPHA |  Battery icon standard transparency.  |
| BATTERY_ACTIVE_ALPHA |  On-charge battery icon transparency. |
| BATTERY_LOW_ALPHA    |  Low battery icon transparency.       |

### Section [network]
| Setting              |  Description                             |
|----------------------|------------------------------------------|
| NETWORK_NORMAL       |  Disconnected network icon colour.       |
| NETWORK_ACTIVE       |  Connected network icon colour.          |
| NETWORK_NORMAL_ALPHA |  Disconnected network icon transparency. |
| NETWORK_ACTIVE_ALPHA |  Connected network icon transparency.    |

### Section [bluetooth]
| Setting                |  Description                                                       |
|------------------------|--------------------------------------------------------------------|
| BLUETOOTH_NORMAL       |  Disconnected bluetooth icon colour. Yet to be implemented.        |
| BLUETOOTH_ACTIVE       |  Connected bluetooth icon colour. Yet to be implemented.           |
| BLUETOOTH_NORMAL_ALPHA |  Disconnected bluetooth icon transparency. Yet to be implemented.  |
| BLUETOOTH_ACTIVE_ALPHA |  Connected bluetooth icon transparency. Yet to be implemented.     |

### Section [date]
| Setting        |  Description                                                         |
|----------------|----------------------------------------------------------------------|
| DATETIME_TEXT  |  Time text colour.                                                   |
| DATETIME_ALPHA |  Time text transparency.                                             |
| PADDING_LEFT   |  Number of pixels from the left side of the screen to the time text. |

### Section [footer]
| Setting                 |  Description                                                     |
|-------------------------|------------------------------------------------------------------|
| FOOTER_BACKGROUND       |  Footer area/background colour.                                  |
| FOOTER_BACKGROUND_ALPHA |  Footer area/background transparency.                            |
| FOOTER_TEXT             |  Footer text colour, not including any navigation buttons.       |
| FOOTER_TEXT_ALPHA       |  Footer text transparency, not including any navigation buttons. |

### Section [header]
| Setting                 |  Description                                        |
|-------------------------|-----------------------------------------------------|
| HEADER_BACKGROUND       |  Header area/background colour.                     |
| HEADER_BACKGROUND_ALPHA |  Header area/background transparency.               |
| HEADER_TEXT             |  Header text colour, not including time text.       |
| HEADER_TEXT_ALPHA       |  Header text transparency, not including time text. |

### Section [help]
| Setting               |  Description                                              |
|-----------------------|-----------------------------------------------------------|
| HELP_BACKGROUND       |  Help/info background window colour.                      |
| HELP_BACKGROUND_ALPHA |  Help/info background window transparency.                |
| HELP_BORDER           |  Help/info window border colour.                          |
| HELP_BORDER_ALPHA     |  Help/info window border transparency.                    |
| HELP_CONTENT          |  Help/info window standard text colour.                   |
| HELP_TITLE            |  Help/info window title text colour.                      |
| HELP_RADIUS           |  Border roundness. 0 is a right angle. 10+ is very round. |

### Section [navigation]
Relates to all navigation guides located in the footer. 
| Setting              |  Description                                                                                         |
|----------------------|------------------------------------------------------------------------------------------------------|
| ALIGNMENT            |  0 = aligned to the left, 1 = central aligned, 2 = aligned to the right. Anything above is a secret. |
| NAV_A_GLYPH          |  The device's "A" button - icon colour.                                                              |
| NAV_A_GLYPH_ALPHA    |  The device's "A" button - icon transparency.                                                        |
| NAV_A_TEXT           |  Text describing the function of the "A" button - colour.                                            |
| NAV_A_TEXT_ALPHA     |  Text describing the function of the "A" button - transparency.                                      |
| NAV_B_GLYPH          |  The device's "B" button - icon colour.                                                              |
| NAV_B_GLYPH_ALPHA    |  The device's "B" button - icon transparency.                                                        |
| NAV_B_TEXT           |  Text describing the function of the "B" button - colour.                                            |
| NAV_B_TEXT_ALPHA     |  Text describing the function of the "B" button - transparency.                                      |
| NAV_C_GLYPH          |  The device's "C" button - icon colour.                                                              |
| NAV_C_GLYPH_ALPHA    |  The device's "C" button - icon transparency.                                                        |
| NAV_C_TEXT           |  Text describing the function of the "C" button - colour.                                            |
| NAV_C_TEXT_ALPHA     |  Text describing the function of the "C" button - transparency.                                      |
| NAV_X_GLYPH          |  The device's "X" button - icon colour.                                                              |
| NAV_X_GLYPH_ALPHA    |  The device's "X" button - icon transparency.                                                        |
| NAV_X_TEXT           |  Text describing the function of the "X" button - colour.                                            |
| NAV_X_TEXT_ALPHA     |  Text describing the function of the "X" button - transparency.                                      |
| NAV_Y_GLYPH          |  The device's "Y" button - icon colour.                                                              |
| NAV_Y_GLYPH_ALPHA    |  The device's "Y" button - icon transparency.                                                        |
| NAV_Y_TEXT           |  Text describing the function of the "Y" button - colour.                                            |
| NAV_Y_TEXT_ALPHA     |  Text describing the function of the "Y" button - transparency.                                      |
| NAV_Z_GLYPH          |  The device's "Z" button - icon colour.                                                              |
| NAV_Z_GLYPH_ALPHA    |  The device's "Z" button - icon transparency.                                                        |
| NAV_Z_TEXT           |  Text describing the function of the "Z" button - colour.                                            |
| NAV_Z_TEXT_ALPHA     |  Text describing the function of the "Z" button - transparency.                                      |
| NAV_MENU_GLYPH       |  The device's "M/MENU" button - icon colour.                                                         |
| NAV_MENU_GLYPH_ALPHA |  The device's "M/MENU" button - icon transparency.                                                   |
| NAV_MENU_TEXT        |  Text describing the function of the "M" button - colour.                                            |
| NAV_MENU_TEXT_ALPHA  |  Text describing the function of the "M" button - transparency.                                      |

### Section [list]
For all list item backgrounds, gradients can be applied. L-R = 0-255.
| Setting                       |  Description                                                                                                                              |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| LIST_DEFAULT_RADIUS           |  Background window border radius. 0 = square, 5+ = round. This applies setting applies to LIST_DEFAULT_BACKGROUND & LIST_FOCUS_BACKGROUND |
| LIST_DEFAULT_BACKGROUND       |  Unselected list item main background colour.                                                                                             |
| LIST_DEFAULT_BACKGROUND_ALPHA |  Unselected list item main background transparency.                                                                                       |
| LIST_DEFAULT_GRADIENT_START   |  Start point of gradient change. [background] changes 2nd colour.                                                                         |
| LIST_DEFAULT_GRADIENT_STOP    |  End point of gradient change.                                                                                                            |
| LIST_DEFAULT_INDICATOR        |  Unselected list item " \| " indicator colour.                                                                                            |
| LIST_DEFAULT_INDICATOR_ALPHA  |  Unselected list item " \| " indicator transparency.                                                                                      |
| LIST_DEFAULT_TEXT             |  Unselected list item text colour.                                                                                                        |
| LIST_DEFAULT_TEXT_ALPHA       |  Unselected list item text transparency.                                                                                                  |
| LIST_DISABLED_TEXT            |  Unavailable list item text colour.                                                                                                       |
| LIST_DISABLED_TEXT_ALPHA      |  Unavailable list item text transparency.                                                                                                 |
| LIST_FOCUS_BACKGROUND         |  Selected list item main background colour.                                                                                               |
| LIST_FOCUS_BACKGROUND_ALPHA   |  Selected list item main background transparency.                                                                                         |
| LIST_FOCUS_GRADIENT_START     |  Start point of gradient change. [background] changes 2nd colour.                                                                         |
| LIST_FOCUS_GRADIENT_STOP      |  End point of gradient change.                                                                                                            |
| LIST_FOCUS_INDICATOR          |  Selected list item " \| " indicator colour.                                                                                              |
| LIST_FOCUS_INDICATOR_ALPHA    |  Selected list item " \| " indicator transparency.                                                                                        |
| LIST_FOCUS_TEXT               |  Selected list item text colour.                                                                                                          |
| LIST_FOCUS_TEXT_ALPHA         |  Selected list item text transparency.                                                                                                    |

### Section [image_list]
Alters properties of box art displayed while navigating context explorer.
| Setting                      |  Description                                                               |
|------------------------------|----------------------------------------------------------------------------|
| IMAGE_LIST_ALPHA             |  Image transparency                                                        |
| IMAGE_LIST_RADIUS            |  Image radius. 0 = no change. 10+ = heavily rounded window.                |
| IMAGE_LIST_RECOLOUR          |  Image recolour.                                                           |
| IMAGE_LIST_RECOLOUR_ALPHA    |  Transparency of this colour.                                              |
| IMAGE_PREVIEW_ALPHA          |  Preview image transparency                                                |
| IMAGE_PREVIEW_RADIUS         |  Preview image window radius. 0 = no change. 10+ = heavily rounded window. |
| IMAGE_PREVIEW_RECOLOUR       |  Preview image recolour.                                                   |
| IMAGE_PREVIEW_RECOLOUR_ALPHA |  Transparency of this colour.                                              |

### Section [charging]
When placed on charge without booting, the charging screen will appear.

| Setting                  |  Description                                                      |
|--------------------------|-------------------------------------------------------------------|
| CHARGER_BACKGROUND       |  Charging banner background colour.                               |
| CHARGER_BACKGROUND_ALPHA |  Charging banner background transparency.                         |
| CHARGER_TEXT             |  Charging banner text colour.                                     |
| CHARGER_TEXT_ALPHA       |  Charging banner text transparency.                               |
| CHARGER_Y_POS            |  Position of the banner from the centre. -100 is up, 100 is down. |

### Section [keyboard]
| Setting                         |  Description                                               |
|---------------------------------|------------------------------------------------------------|
| OSK_BACKGROUND                  |  On-screen keyboard background window colour.              |
| OSK_BACKGROUND_ALPHA            |  On-screen keyboard background window transparency.        |
| OSK_BORDER                      |  On-screen keyboard background window border colour.       |
| OSK_BORDER_ALPHA                |  On-screen keyboard background window border transparency. |
| OSK_RADIUS                      |  Background window border radius. 0 = square, 5+ = round.  |
| OSK_TEXT                        |  Unselected and inputted text colour.                      |
| OSK_TEXT_ALPHA                  |  Unselected and inputted text transparency.                |
| OSK_TEXT_FOCUS                  |  Selected text colour.                                     |
| OSK_TEXT_FOCUS_ALPHA            |  Selected text transparency.                               |
| OSK_ITEM_BACKGROUND             |  Unselected text background / button colour.               |
| OSK_ITEM_BACKGROUND_ALPHA       |  Unselected text background / button transparency.         |
| OSK_ITEM_BACKGROUND_FOCUS       |  Selected text background / button colour.                 |
| OSK_ITEM_BACKGROUND_FOCUS_ALPHA |  Selected text background / button transparency.           |
| OSK_ITEM_BORDER                 |  Unselected text button border colour.                     |
| OSK_ITEM_BORDER_ALPHA           |  Unselected text button border transparency.               |
| OSK_ITEM_BORDER_FOCUS           |  Selected text button border colour.                       |
| OSK_ITEM_BORDER_FOCUS_ALPHA     |  Selected text button border transparency.                 |
| OSK_ITEM_RADIUS                 |  All button border radius. 0 = square, 5+ = round.         |

### Section [notification]
| Setting              |  Description                                                     |
|----------------------|------------------------------------------------------------------|
| MSG_BACKGROUND       |  Pop-up message background colour.                               |
| MSG_BACKGROUND_ALPHA |  Pop-up message background transparency.                         |
| MSG_BORDER           |  Pop-up message window border colour.                            |
| MSG_BORDER_ALPHA     |  Pop-up message window border transparency.                      |
| MSG_RADIUS           |  Pop-up message window border roundness. 0 = square, 5+ = round. |
| MSG_TEXT             |  Pop-up message text colour.                                     |
| MSG_TEXT_ALPHA       |  Pop-up message text transparency.                               |

### Section [bar]
This is the horizontal bar showing volume/brightness.

| Setting                              |  Description                                          |
|--------------------------------------|-------------------------------------------------------|
| BAR_BACKGROUND                       |  Background of the bar window - colour.               |
| BAR_BACKGROUND_ALPHA                 |  Background of the bar window - transparency.         |
| BAR_BORDER                           |  Bar window border colour.                            |
| BAR_BORDER_ALPHA                     |  Bar window border transparency.                      |
| BAR_RADIUS                           |  Bar window border roundness. 0 = square, 5+ = round. |
| BAR_PROGRESS_BACKGROUND              |  Inactive section of the progress bar - colour.       |
| BAR_PROGRESS_BACKGROUND_ALPHA        |  Inactive section of the progress bar - transparency. |
| BAR_PROGRESS_ACTIVE_BACKGROUND       |  Active section of the progress bar - colour.         |
| BAR_PROGRESS_ACTIVE_BACKGROUND_ALPHA |  Active section of the progress bar - transparency.   |
| BAR_PROGRESS_RADIUS                  |  Progress bar roundness. 0 = square, 5+ = round.      |
| BAR_ICON                             |  Bar icon/glyph colour. Volume/brightness symbol.     |
| BAR_ICON_ALPHA                       |  Bar icon transparency. Volume/brightness symbol.     |

### Section [roll]
This relates to the passcode/lock screen when enabled in settings.

| Setting                      |  Description                                           |
|------------------------------|--------------------------------------------------------|
| ROLL_TEXT                    |  Unselected passcode text colour.                      |
| ROLL_TEXT_ALPHA              |  Unselected passcode text transparency.                |
| ROLL_BACKGROUND              |  Unselected passcode background / button colour.       |
| ROLL_BACKGROUND_ALPHA        |  Unselected passcode background / button transparency. |
| ROLL_RADIUS                  |  Unselected passcode button border radius.             |
| ROLL_SELECT_TEXT             |  Selected passcode text colour.                        |
| ROLL_SELECT_TEXT_ALPHA       |  Selected passcode text transparency.                  |
| ROLL_SELECT_BACKGROUND       |  Selected passcode background / button colour.         |
| ROLL_SELECT_BACKGROUND_ALPHA |  Selected passcode background / button transparency.   |
| ROLL_SELECT_RADIUS           |  Selected passcode button border radius.               |
| ROLL_BORDER_COLOUR           |  Window border colour.                                 |
| ROLL_BORDER_ALPHA            |  Window border transparency.                           |
| ROLL_BORDER_RADIUS           |  Window border roundness. 0 = square, 5+ = round.      |

### Section [counter]
This section controls displaying a position counter while navigation the Context Explorer.  It would be recommended to include this in your theme.  There are menu settings the user can set to disable the counter.
Configuration -> General Settings -> Interface Options -> Menu Counter Folder = Displays file counter on Content Explorer screens that only contain folders.
Configuration -> General Settings -> Interface Options -> Menu Counter File = Displays file counter on Content Explorer screens that contain at least one file.
| Setting                  |  Description                                                                     |
|--------------------------|----------------------------------------------------------------------------------|
| COUNTER_ALIGNMENT        | 0 = aligned to the left, 1 = central aligned, 2 = aligned to the right.  |
| COUNTER_PADDING_AROUND   | Number of pixels around the text of the counter.   |
| COUNTER_PADDING_SIDE     | Number of pixels to move the counter from the side of the screen.  Only used with left and right alignments  |
| COUNTER_PADDING_TOP      | Number of pixels from screen top to place the counter.  |
| COUNTER_BORDER_COLOUR    | Border colour.   |
| COUNTER_BORDER_ALPHA     | Border transparency.  |
| COUNTER_BORDER_WIDTH     | Border width in pixels.  |
| COUNTER_RADIUS           | Border roundness. 0 is a right angle. 10+ is very round.  |
| COUNTER_BACKGROUND       | Counter area/background colour.    |
| COUNTER_BACKGROUND_ALPHA | Counter area/background transparency.   |
| COUNTER_TEXT             | Counter text colour.  |
| COUNTER_TEXT_ALPHA       | Counter text transparency.  |
| COUNTER_TEXT_FADE_TIME   | Used to gradually fade out the counter when screen activity is idle.  A value of 0 will disable the setting.   |
| COUNTER_TEXT_SEPARATOR   | Separator in between the current item index and the number of items in the list.  Default value " / " which would display as "1 / 50". |

### Section [meta]
| Setting  |  Description                                                                     |
|----------|----------------------------------------------------------------------------------|
| META_CUT |  Number of characters on each line in help/info windows before making a new one. <br> **Note:** This setting is a global setting and must be inside the default.txt scheme in order to be active.|

### Section [misc]
| Setting              |  Description                                                             |
|----------------------|--------------------------------------------------------------------------|
| ANIMATED_BACKGROUND  |  Do you want to use a .gif file in /image/wall? 0 is no. 1 is yes.             |
| CONTENT_ITEM_COUNT   |  Number of list items displayed in content panel.  This setting along with CONTENT_HEIGHT to determine the height of each item.  For example if CONTENT_HEIGHT = 300 and CONTENT_ITEM_COUNT = 10 then each item will be 30px tall. The first 28px will be used to display the item followed by a 2px gap. <br> **Note:** This field has a minimum value of 5 and a maximum value of 13.  The value set here also controls paging up and down in the list.|
| CONTENT_PADDING_LEFT |  Number of pixels from screen left to list items. Commonly on 0.         |
| CONTENT_PADDING_TOP  |  Number of pixels from screen top to list items.  <br> **Note:** By default the list is already 44px from the top in order for it to be past the header.  If you want the content list to take up the full screen you can use a value of -44 here.            |
| CONTENT_HEIGHT       |  Adjust the height of the content panel by pixels.  (Minimum value = 100 Maximum value = Device Screen Height) |
| CONTENT_WIDTH        |  Adjust the width of the content panel list items by horizontal pixels.             |
| NAVIGATION_TYPE      |  0 for vertical (up/down) navigation. 1 for horizontal (left/right).     |
| STATIC_ALIGNMENT     |  Custom images that can be outside of wallpapers. See below for details. |
| IMAGE_OVERLAY        |  Do you want to use an overlay .png image? 0 is no. 1 is yes.            |




