---
layout: default
title: DraStic
permalink: /emulators/drastic
nav_enabled: true
has_children: false
has_toc: false
---
![](/assets/images/drastic_new.png)

{: .important}
> muOS includes both DraStic, and the modified version by steward-fu
> For most uses the modified version is preferred.

## DraStic (Steward) Keys
| Button             | Action             |
|:-------------------|:-------------------|
| F+Select           | Main Drastic Menu  |
| F+Start            | Steward Menu(new options) |
| F+Y                | Change Overlays/Wallpaper |
| F+A                | Set Alt. Display mode On/Off |
| F+B                | Change Pixel/Blur Filter |
| F+D-pad Left/Right | Change Screens Layout |
| F+R2               | Quick Save |
| F+L2               | Quick Load |
| F+R1               | Fast Forward |
| F+L1               | Quit Drastic |
| Just R2            | Change Main/Secondary Screens |
| Just L2            | Enable/Disable D-Pad Stylus Mode(Use A to Click) |
**When in D-Pad to Stylus mode**
| Button             | Action             |
|:-------------------|:-------------------|
| F+D-Pad Up/Down    | Change Stylus focus screen |
| F+Y                | Change Stylus Icon/Style |
**Devices with analogue sticks**
| Button             | Action             |
|:-------------------|:-------------------|
| Left Analog        | Stylus Controls |
| R3                 | Stylus Click |

## DraStic Keys
| Button             | Action             |
|:-------------------|:-------------------|
| R2                 | Enable/Disable D-Pad Stylus Mode |
| R1                 | Stylus Click |
| L2                 | Swap Screen |
| Select + L2        | Save State |
| Select + R2        | Load State |
| Select + B         | Screen Orientation A |
| Select + X         | Screen Orientation B |

## Toggle Bilinear / Nearest Filter
{: .warning}
> This is not for DraStic Steward
>
> This script needs updating for newer muOS versions.

```bash
#!/bin/sh
    
# Scaling adjustment script created for muOS 2405 Beans +
# Lets you switch between Nearest Neighbour (sharper) and Bilinear (smoother)
     
# Fire up the logger!
/opt/muos/extra/muxlog &
sleep 1
     
echo "Waiting..." > /tmp/muxlog_info
sleep 1
     
TMP_FILE=/tmp/muxlog_global
rm -rf "$TMP_FILE"
     
EMU_DIR=/mnt/mmc/MUOS/emulator/drastic
     
cd $EMU_DIR
     
xxd drastic > drastic.txt
     
# Check for Bilinear Scaling
if grep -q "6c69 6e65 6172" drastic.txt; then
    echo "Bilinear Scaling detected" > /tmp/muxlog_info
    # Swap Scaling Method
    sed -i 's/6c69 6e65 6172/3000 0000 0000/g' drastic.txt
    xxd -r drastic.txt > drastic
    echo "Setting to Nearest Neighbour" > /tmp/muxlog_info
    rm drastic.txt
     
# Check for Nearest Neighbour Scaling
elif grep -q "3000 0000 0000" drastic.txt; then
    echo "Nearest Neighbour Scaling detected" > /tmp/muxlog_info
    # Swap Scaling Method
    sed -i 's/3000 0000 0000/6c69 6e65 6172/g' drastic.txt
    xxd -r drastic.txt > drastic
    echo "Setting to Bilinear" > /tmp/muxlog_info
    rm drastic.txt
fi
     
echo "All Done!" > /tmp/muxlog_info
sleep 1
     
# Cleanup after myself
killall -q muxlog
rm -rf "$MUX_TEMP" /tmp/muxlog_*
     
killall -q "DraStic Switcher.sh"
```