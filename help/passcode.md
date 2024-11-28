---
layout: default
title: Passcode Lock
permalink: /help/passcode
nav_order: 11
parent: Help
has_children: false
---

# Passcode Lock
You will need to edit the following text file with your favourite text editor.  
```
MUOS/info/pass.ini
```
Here you will see the following contents:
```
[code]
boot=000000
launch=000000
setting=000000

[message]
boot=
launch=
setting=
```
 The `000000` is a hex code that can range between `000000` and `FFFFFF`. This is used for the scrolling bars when presented on screen. **Uppercase is important!**  

If you enable this function and the codes are left at `000000` it will ignore it and continue on. This is handy if you only want to lock certain aspects of the device.  

The messages are small messages that appear at the bottom of the screen if you wish to display something cheeky to the end user.  

You can then enable the function in Advanced Settings! 