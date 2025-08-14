---
layout: default
title: Kiosk Mode
permalink: /installation/kiosk
nav_order: 5
parent: Installation
has_children: false
---

## Getting Started

Here is an [example kiosk configuration](https://github.com/MustardOS/internal/blob/main/config/kiosk.ini.example) file
that you will need to place at `MUOS/kiosk.ini` on your **SD1** card only!

```ini
[application]
archive = 0
task = 0

[config]
customisation = 0
language = 0
network = 0
storage = 0
webserv = 0

[content]
core = 0
governor = 0
option = 0
retroarch = 0
search = 0

[custom]
catalogue = 0
configuration = 0
theme = 0

[datetime]
clock = 0
timezone = 0

[launch]
application = 0
config = 0
explore = 0
collection = 0
history = 0
info = 0

[setting]
advanced = 0
general = 0
hdmi = 0
power = 0
visual = 0
``` 

## Processing

Change the `0` to `1` to disable the functionality of the specific element.

| Key                    | Description                 |
|:-----------------------|:----------------------------|
| `application/archive`  | Archive Manager             |
| `application/task`     | Task Toolkit                |
| `config/customisation` | Customisation Menu          |
| `config/language`      | Language Menu               |
| `config/network`       | Network Menu                |
| `config/storage`       | Storage Menu                |
| `config/webserv`       | Web Services Menu           |
| `content/core`         | Content Core Assign         |
| `content/governor`     | Content Governor Assign     |
| `content/option`       | Content Options             |
| `content/retroarch`    | RetroArch Kiosk Mode        |
| `content/search`       | Content Searching           |
| `custom/catalogue`     | Catalogue Customisation     |
| `custom/configuration` | Configuration Customisation |
| `custom/theme`         | Theme Customisation         |
| `datetime/clock`       | Date and Time Menu          |
| `datetime/timezone`    | Timezone Menu               |
| `launch/application`   | Main Menu - Application     |
| `launch/config`        | Main Menu - Configuration   |
| `launch/explore`       | Main Menu - Content Explore |
| `launch/collection`    | Main Menu - Collections     |
| `launch/history`       | Main Menu - History         |
| `launch/info`          | Main Menu - Information     |
| `setting/advanced`     | Advanced Settings Menu      |
| `setting/general`      | General Settings Menu       |
| `setting/hdmi`         | HDMI Output Menu            |
| `setting/power`        | Power Settings Menu         |
| `setting/visual`       | Interface Options Menu      |

Upon device boot the `kiosk.ini` file will be moved from `MUOS/kiosk.ini` to `/opt/muos/config/kiosk.ini` so sticky
fingers can't get access! If a clever cookie decides to create another file at `MUOS/kiosk.ini` it won't work because
the above exists.

You can omit certain sections if need be, for example if you wanted to:

* Disable Task Toolkit
* Disable Favourites
* Disable History
* Disable Advanced Settings

```ini
[application]
task = 1

[launch]
favourite = 1
history = 1

[setting]
advanced = 1
```

## Temporarily Disable

Press `L1 + R2 + Y` on the Reboot item. This will move `/opt/muos/config/kiosk.ini` back to `MUOS/kiosk.ini` and
reload the MustardOS frontend without the need of a reboot.

## Permanently Disable

Press `L1 + R2 + X` on the **Reboot** item. This will disable kiosk mode and purge the file at
`/opt/muos/config/kiosk.ini` and reload the MustardOS frontend without the need of a reboot.
