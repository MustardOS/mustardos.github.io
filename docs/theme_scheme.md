---
title: Scheme Files
layout: default
parent: Themes
nav_order: 4
has_toc: false
---

# Scheme File Introduction
Scheme files will determine what to do with your files within `./images/` and alter the aesthetic and operations of your theme.
You'll be able to change variables per program here such as;
- The alignment of the navigation buttons in the footer.
- Colour and transparency of all text + backgrounds.
- Positioning of text.

***Hex codes*** are 6 digit sequences that determine the colours of different elements.

***Alphas range*** from 0-255, with 0 being invisible and 255 being opaque.

Below you will find all the available attributes you can change in a scheme file, and explanations for every line.

> *Tip: Refer to the Theme Structure page to find the muxprogram list. Each individual page
> can have unique properties by creating another* `.txt` *file within the* `./scheme/` *folder with matching names to that program.*

# Scheme File Line-By-Line

This is an example of a random `./scheme/default.txt` file from the theme library.
```
[background]
BACKGROUND=000000              <--  Background colour. Most used in [list] gradients.
BACKGROUND_ALPHA=0             <--  Background colour transparency.

[font]
FONT_HEADER_PAD_TOP=6              <--  Number of pixels from top of header area to header text.
FONT_HEADER_PAD_BOTTOM=0           <--  Number of pixels from bottom of header area to header text.
FONT_HEADER_ICON_PAD_TOP=0         <--  Number of pixels from top of header area to header icons.
FONT_HEADER_ICON_PAD_BOTTOM=13     <--  Number of pixels from bottom of header area to header icons.
FONT_FOOTER_PAD_TOP=0              <--  Number of pixels from top of footer area to footer text.
FONT_FOOTER_PAD_BOTTOM=0           <--  Number of pixels from bottom of footer area to footer text.
FONT_FOOTER_ICON_PAD_TOP=0         <--  Number of pixels from top of footer area to footer icons.
FONT_FOOTER_ICON_PAD_BOTTOM=0      <--  Number of pixels from bottom of footer area to footer icons.
FONT_MESSAGE_PAD_TOP=0             <--  Number of pixels from top of message area to message text.
FONT_MESSAGE_PAD_BOTTOM=0          <--  Number of pixels from bottom of message area to message text.
FONT_MESSAGE_ICON_PAD_TOP=0        <--  Number of pixels from top of message area to message icons.
FONT_MESSAGE_ICON_PAD_BOTTOM=0     <--  Number of pixels from bottom of message area to message icons.
FONT_LIST_PAD_TOP=-3               <--  Number of pixels from top of a list item area to a list item text.
FONT_LIST_PAD_BOTTOM=0             <--  Number of pixels from bottom of an item area to a list item text.
FONT_LIST_ICON_PAD_TOP=5           <--  Number of pixels from top of a list item area to a list item glyph.
FONT_LIST_ICON_PAD_BOTTOM=0        <--  Number of pixels from bottom of an item area to a list item glyph.

[status]
PADDING_RIGHT=47             <--  Number of pixels from the right side of the screen to the battery icon.

[battery]
BATTERY_NORMAL=000000             <--  Battery icon standard colour.
BATTERY_ACTIVE=207d0e             <--  On-charge battery icon colour. 
BATTERY_LOW=7d0e0e                <--  Low battery icon colour.
BATTERY_NORMAL_ALPHA=255          <--  Battery icon standard transparency. 
BATTERY_ACTIVE_ALPHA=255          <--  On-charge battery icon transparency.
BATTERY_LOW_ALPHA=255             <--  Low battery icon transparency.

[network]
NETWORK_NORMAL=53422e           <--  Disconnected network icon colour.
NETWORK_ACTIVE=000000           <--  Connected network icon colour.
NETWORK_NORMAL_ALPHA=255        <--  Disconnected network icon transparency.
NETWORK_ACTIVE_ALPHA=255        <--  Connected network icon transparency.

[bluetooth]
BLUETOOTH_NORMAL=53422e           <--  Disconnected bluetooth icon colour. Yet to be implemented.
BLUETOOTH_ACTIVE=000000           <--  Connected bluetooth icon colour. Yet to be implemented.
BLUETOOTH_NORMAL_ALPHA=255        <--  Disconnected bluetooth icon transparency. Yet to be implemented.
BLUETOOTH_ACTIVE_ALPHA=255        <--  Connected bluetooth icon transparency. Yet to be implemented.

[date]
DATETIME_TEXT=000000        <--  Time text colour.
DATETIME_ALPHA=255          <--  Time text transparency.
PADDING_LEFT=49             <--  Number of pixels from the left side of the screen to the time text.

[footer]
FOOTER_BACKGROUND=000000        <--  Footer area/background colour.
FOOTER_BACKGROUND_ALPHA=0       <--  Footer area/background transparency.
FOOTER_TEXT=000000              <--  Footer text colour, not including any navigation buttons.
FOOTER_TEXT_ALPHA=255           <--  Footer text transparency, not including any navigation buttons.

[header]
HEADER_BACKGROUND=000000        <--  Header area/background colour.
HEADER_BACKGROUND_ALPHA=0       <--  Header area/background transparency.
HEADER_TEXT=000000              <--  Header text colour, not including time text.
HEADER_TEXT_ALPHA=255           <--  Header text transparency, not including time text.

[help]
HELP_BACKGROUND=5d0014            <--  Help/info background window colour.
HELP_BACKGROUND_ALPHA=255         <--  Help/info background window transparency.
HELP_BORDER=ffe5b9                <--  Help/info window border colour.
HELP_BORDER_ALPHA=255             <--  Help/info window border transparency.
HELP_CONTENT=ffe5b9               <--  Help/info window standard text colour.
HELP_TITLE=ffe5b9                 <--  Help/info window title text colour.
HELP_RADIUS=10                    <--  Border roundness. 0 is a right angle. 10+ is very round.

[navigation]                      Regarding all navigation buttons in the footer. 0 = aligned to the left,
ALIGNMENT=1                  <--  1 = central aligned, 2 = aligned to the right. Anything above is a secret.
NAV_A_GLYPH=000000           <--  The device's "A" button - icon colour. 
NAV_A_GLYPH_ALPHA=255        <--  The device's "A" button - icon transparency.
NAV_A_TEXT=000000            <--  Text describing the function of the "A" button - colour.
NAV_A_TEXT_ALPHA=255         <--  Text describing the function of the "A" button - transparency.
NAV_B_GLYPH=000000           <--  The device's "B" button - icon colour.
NAV_B_GLYPH_ALPHA=255        <--  The device's "B" button - icon transparency.
NAV_B_TEXT=000000            <--  Text describing the function of the "B" button - colour.
NAV_B_TEXT_ALPHA=255         <--  Text describing the function of the "B" button - transparency.
NAV_C_GLYPH=000000           <--  !!!! Unconfirmed !!!!
NAV_C_GLYPH_ALPHA=255        <--  !!!! Unconfirmed !!!!
NAV_C_TEXT=000000            <--  !!!! Unconfirmed !!!!
NAV_C_TEXT_ALPHA=255         <--  !!!! Unconfirmed !!!!
NAV_X_GLYPH=000000           <--  The device's "X" button - icon colour.
NAV_X_GLYPH_ALPHA=255        <--  The device's "X" button - icon transparency.
NAV_X_TEXT=000000            <--  Text describing the function of the "X" button - colour.
NAV_X_TEXT_ALPHA=255         <--  Text describing the function of the "X" button - transparency.
NAV_Y_GLYPH=000000           <--  The device's "Y" button - icon colour.
NAV_Y_GLYPH_ALPHA=255        <--  The device's "Y" button - icon transparency.
NAV_Y_TEXT=000000            <--  Text describing the function of the "Y" button - colour.
NAV_Y_TEXT_ALPHA=255         <--  Text describing the function of the "Y" button - transparency.
NAV_Z_GLYPH=000000           <--  !!!! Unconfirmed !!!!
NAV_Z_GLYPH_ALPHA=255        <--  !!!! Unconfirmed !!!!
NAV_Z_TEXT=000000            <--  !!!! Unconfirmed !!!!
NAV_Z_TEXT_ALPHA=255         <--  !!!! Unconfirmed !!!!
NAV_MENU_GLYPH=000000        <--  The device's "M/MENU" button - icon colour.
NAV_MENU_GLYPH_ALPHA=255     <--  The device's "M/MENU" button - icon transparency.
NAV_MENU_TEXT=000000         <--  Text describing the function of the "M" button - colour.
NAV_MENU_TEXT_ALPHA=255      <--  Text describing the function of the "M" button - transparency.

[list]                                For all list item backgrounds, gradients can be applied. L-R = 0-255.
LIST_DEFAULT_BACKGROUND=ececec        <--  Unselected list item main background colour.
LIST_DEFAULT_BACKGROUND_ALPHA=0       <--  Unselected list item main background transparency.
LIST_DEFAULT_GRADIENT_START=0         <--  Start point of gradient change. [background] changes 2nd colour.
LIST_DEFAULT_GRADIENT_STOP=0          <--  End point of gradient change.
LIST_DEFAULT_INDICATOR=ececec         <--  Unselected list item " | " indicator colour.
LIST_DEFAULT_INDICATOR_ALPHA=0        <--  Unselected list item " | " indicator transparency.
LIST_DEFAULT_TEXT=53422e              <--  Unselected list item text colour.
LIST_DEFAULT_TEXT_ALPHA=255           <--  Unselected list item text transparency.
LIST_DISABLED_TEXT=a78b65             <--  Unavailable list item text colour.
LIST_DISABLED_TEXT_ALPHA=255          <--  Unavailable list item text transparency.
LIST_FOCUS_BACKGROUND=000000          <--  Selected list item main background colour.
LIST_FOCUS_BACKGROUND_ALPHA=0         <--  Selected list item main background transparency.
LIST_FOCUS_GRADIENT_START=0           <--  Start point of gradient change. [background] changes 2nd colour.
LIST_FOCUS_GRADIENT_STOP=0            <--  End point of gradient change.
LIST_FOCUS_INDICATOR=5d0014           <--  Selected list item " | " indicator colour.
LIST_FOCUS_INDICATOR_ALPHA=255        <--  Selected list item " | " indicator transparency.
LIST_FOCUS_TEXT=5d0014                <--  Selected list item text colour.
LIST_FOCUS_TEXT_ALPHA=255             <--  Selected list item text transparency.

[image_list]                        Alters properties of list images. Unconfirmed if this has an effect.
IMAGE_LIST_RADIUS=3                <--  Image window radius. 0 = no change. 10+ = heavily rounded window.
IMAGE_LIST_RECOLOUR=ad0000         <--  Image recolour.
IMAGE_LIST_RECOLOUR_ALPHA=0        <--  Transparency of this colour.
IMAGE_PREVIEW_RADIUS=3             <--  Image window radius. 0 = no change. 10+ = heavily rounded window.
IMAGE_PREVIEW_RECOLOUR=ad0000      <--  Image recolour.
IMAGE_PREVIEW_RECOLOUR_ALPHA=0     <--  Transparency of this colour.

[charging]                      When placed on charge without booting, the charging screen will appear.
CHARGER_BACKGROUND=100808       <--  Charging banner background colour. 
CHARGER_BACKGROUND_ALPHA=0      <--  Charging banner background transparency.
CHARGER_TEXT=000000             <--  Charging banner text colour.
CHARGER_TEXT_ALPHA=255          <--  Charging banner text transparency.
CHARGER_Y_POS=100               <--  Position of the banner from the centre. -100 is up, 100 is down.

[keyboard]
OSK_BACKGROUND=5d0014                      <--  On-screen keyboard background window colour.
OSK_BACKGROUND_ALPHA=255                   <--  On-screen keyboard background window transparency.
OSK_BORDER=ffe5b9                          <--  On-screen keyboard background window border colour.
OSK_BORDER_ALPHA=255                       <--  On-screen keyboard background window border transparency.
OSK_RADIUS=10                              <--  Background window border radius. 0 = square, 5+ = round. 
OSK_TEXT=ffe5b9                            <--  Unselected and inputted text colour.
OSK_TEXT_ALPHA=255                         <--  Unselected and inputted text transparency.
OSK_TEXT_FOCUS=ffe5b9                      <--  Selected text colour.
OSK_TEXT_FOCUS_ALPHA=255                   <--  Selected text transparency.
OSK_ITEM_BACKGROUND=000000                 <--  Unselected text background / button colour.
OSK_ITEM_BACKGROUND_ALPHA=50               <--  Unselected text background / button transparency.
OSK_ITEM_BACKGROUND_FOCUS=000000           <--  Selected text background / button colour.
OSK_ITEM_BACKGROUND_FOCUS_ALPHA=150        <--  Selected text background / button transparency.
OSK_ITEM_BORDER=c0c0c0                     <--  Unselected text button border colour.
OSK_ITEM_BORDER_ALPHA=0                    <--  Unselected text button border transparency.
OSK_ITEM_BORDER_FOCUS=ffe5b9               <--  Selected text button border colour.
OSK_ITEM_BORDER_FOCUS_ALPHA=255            <--  Selected text button border transparency.
OSK_ITEM_RADIUS=5                          <--  All button border radius. 0 = square, 5+ = round.

[notification]
MSG_BACKGROUND=5d0014           <--  Pop-up message background colour.
MSG_BACKGROUND_ALPHA=255        <--  Pop-up message background transparency.
MSG_BORDER=ffe5b9               <--  Pop-up message window border colour.
MSG_BORDER_ALPHA=255            <--  Pop-up message window border transparency.
MSG_RADIUS=10                   <--  Pop-up message window border roundness. 0 = square, 5+ = round.
MSG_TEXT=ffe5b9                 <--  Pop-up message text colour.
MSG_TEXT_ALPHA=255              <--  Pop-up message text transparency.

[bar]                                        This is the horizontal bar showing volume/brightness.
BAR_BACKGROUND=5d0014                            <--  Background of the bar window - colour.
BAR_BACKGROUND_ALPHA=255                         <--  Background of the bar window - transparency.
BAR_BORDER=ffe5b9                                <--  Bar window border colour.
BAR_BORDER_ALPHA=255                             <--  Bar window border transparency.
BAR_RADIUS=10                                    <--  Bar window border roundness. 0 = square, 5+ = round.
BAR_PROGRESS_BACKGROUND=000000                   <--  Inactive section of the progress bar - colour. 
BAR_PROGRESS_BACKGROUND_ALPHA=255                <--  Inactive section of the progress bar - transparency.
BAR_PROGRESS_ACTIVE_BACKGROUND=ffe5b9            <--  Active section of the progress bar - colour.
BAR_PROGRESS_ACTIVE_BACKGROUND_ALPHA=255         <--  Active section of the progress bar - transparency.
BAR_PROGRESS_RADIUS=3                            <--  Progress bar roundness. 0 = square, 5+ = round.
BAR_ICON=ffe5b9                                  <--  Bar icon/glyph colour. Volume/brightness symbol.
BAR_ICON_ALPHA=255                               <--  Bar icon transparency. Volume/brightness symbol.

[roll]                                This relates to the passcode/lock screen when enabled in settings.
ROLL_TEXT=53422e                       <--  Unselected passcode text colour.
ROLL_TEXT_ALPHA=255                    <--  Unselected passcode text transparency.
ROLL_BACKGROUND=fbfbfb                 <--  Unselected passcode background / button colour.
ROLL_BACKGROUND_ALPHA=255              <--  Unselected passcode background / button transparency.
ROLL_RADIUS=10                         <--  Unselected passcode button border radius.
ROLL_SELECT_TEXT=000000                <--  Selected passcode text colour.
ROLL_SELECT_TEXT_ALPHA=255             <--  Selected passcode text transparency.
ROLL_SELECT_BACKGROUND=000000          <--  Selected passcode background / button colour.
ROLL_SELECT_BACKGROUND_ALPHA=50        <--  Selected passcode background / button transparency.
ROLL_SELECT_RADIUS=10                  <--  Selected passcode button border radius.
ROLL_BORDER_COLOUR=53422e              <--  Window border colour.
ROLL_BORDER_ALPHA=255                  <--  Window border transparency.
ROLL_BORDER_RADIUS=10                  <--  Window border roundness. 0 = square, 5+ = round.

[meta]
META_CUT=40                     <--  Number of characters on each line in help/info windows before
                                     making a new one.
[misc]
ANIMATED_BACKGROUND=0         <--  Do you want to use a .gif file in /wall? 0 is no. 1 is yes.
CONTENT_PADDING_LEFT=0        <--  Number of pixels from screen left to list items. Commonly on 0.
CONTENT_WIDTH=640             <--  Adjust the width of list item content by horizontal pixels.
NAVIGATION_TYPE=0             <--  0 for vertical (up/down) navigation. 1 for horizontal (left/right).
STATIC_ALIGNMENT=0            <--  Custom images that can outside of wallpapers. See below for details.
OVERLAY_IMAGE=0               <--  Do you want to use an overlay .png image? 0 is no. 1 is yes.

Static Alignment Values - Describes the layering and position of static images with other elements.
                        - Place static images in ./images/static/ named similarly to wall images.
                        - You cannot use a default.png as a static image.
                        - You can use static images for individual list items and programs.
0 - Bottom Right (Just above the footer)
1 - Middle Right
2 - Top Right (Just below the header)
3 - Fullscreen - behind header and footer
4 - Fullscreen - above header and footer
```
