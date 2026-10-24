---
layout: default
title: Web Dashboard
permalink: /web/dashboard
parent: Web Services
nav_order: 2
has_toc: false
has_children: true
---

# **Web Dashboard**

A web page for your device. Open it in any browser on the same network to see what your device is doing, manage its
files, artwork and saves, browse your play history and see what is on screen.

## Get started

<div class="guide-steps two" markdown="0">
    <div class="guide-step"><strong>Find the address</strong>Open <b>Configuration &gt; Connectivity &gt; Web Dashboard
        Code</b> on the device.</div>
    <div class="guide-step"><strong>Open it</strong>Type the address shown into a browser on the same network, usually
        <code>http://muos.local</code>.</div>
</div>

If another device already uses `muos.local`, a numbered name is shown instead. Without Local DNS the screen shows an
IP address, and a custom Web Port is added to the address for you.

<div class="guide" markdown="0">
    <h2 class="guide-heading">What you will find</h2>

    <div class="guide-grid compact">
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxwebserv/landing.svg" alt="" width="36" height="36">
            <span class="guide-title">Dashboard</span>
            <span class="guide-text">Time, battery, uptime, playtime, what is playing, storage, activity and links to your
                enabled services, including a ready to copy Secure File Transfer command.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxmedia/resume.svg" alt="" width="36" height="36">
            <span class="guide-title">Now Playing</span>
            <span class="guide-text">Controls for whatever is playing in Pickles or Wasabi.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxinfo/activity.svg" alt="" width="36" height="36">
            <span class="guide-title">Activity Tracker</span>
            <span class="guide-text">Your full play history and statistics, grouped by how each title was launched.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxinfo/detail.svg" alt="" width="36" height="36">
            <span class="guide-title">System Information</span>
            <span class="guide-text">Everything about the device, refreshed live while the page is open.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxlaunch/explore.svg" alt="" width="36" height="36">
            <span class="guide-title">File Management</span>
            <span class="guide-text">Upload, download and organise the files on every mounted storage.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxlaunch/history.svg" alt="" width="36" height="36">
            <span class="guide-title">History</span>
            <span class="guide-text">Everything you have played, sortable, searchable and ready to rename or collect.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxlaunch/collection.svg" alt="" width="36" height="36">
            <span class="guide-title">Collections</span>
            <span class="guide-text">Every collection and its content, opened like folders.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxstorage/catalogue.svg" alt="" width="36" height="36">
            <span class="guide-title">Catalogue</span>
            <span class="guide-text">Artwork, descriptions and manuals for your content, with missing artwork marked.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxstorage/pickles.svg" alt="" width="36" height="36">
            <span class="guide-title">Pickles Saves</span>
            <span class="guide-text">Save games and save states for each title, with earlier copies to restore.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxinfo/screenshot.svg" alt="" width="36" height="36">
            <span class="guide-title">Remote View</span>
            <span class="guide-text">A picture of what the device is showing, with optional controls and sound.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxinfo/tester.svg" alt="" width="36" height="36">
            <span class="guide-title">Editors and Tools</span>
            <span class="guide-text">The website's <a href="/tools">Editors and Tools</a>, opening and saving files on the
                device.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxwebserv/local_name.svg" alt="" width="36" height="36">
            <span class="guide-title">Other Devices</span>
            <span class="guide-text">Links to the dashboards of other MustardOS devices found by Local DNS.</span>
        </div>
    </div>
</div>

## Activity Tracker

The full [Activity Tracker]({{site.baseurl}}/tour/modules/muxactivity) report, with All Media first and then Pickles,
Wasabi, RetroArch and External by how each title was launched.

- Each group shows its play time, launches, titles, play style and a summary.
- A searchable table lists every title and can be sorted by any column.
- The latest sessions show their length, battery use, temperature and how each one ended.

To read an activity history away from the device, open its `MUOS/info/track` folder in the
[Activity Tracker Importer]({{site.baseurl}}/tools/activity-tracker).

## System Information

Everything on the Details screen, plus the active theme, language, time zone and storage. It is grouped into equal
panels for software, device, runtime, memory and storage, processor, graphics, battery, charging, powered off, network,
traffic, and system and boot modification checks.

## File Management

Browse and change the files on the device from the browser. The first page groups everything into three areas.

<div class="guide-paths" markdown="0">
    <div><code>Library</code><span>History, Collections, Pickles Saves and Catalogue, each with its own view described
        below.</span></div>
    <div><code>User Storage</code><span>Primary Storage, plus Secondary Storage and External Storage while a card or USB
        drive is mounted.</span></div>
    <div><code>System Storage</code><span>Internal and Boot. These are protected, and each change asks you to confirm
        first, because changing system files can stop MustardOS from starting.</span></div>
</div>

- Upload files or whole folders with the buttons at the top, or drop them onto the page. Uploads show in a Transfers
  list and are limited only by the free space shown for that storage.
- Create folders, and download, rename, copy, move or remove anything. A folder downloads as a ZIP file.
- Select two or more items and choose **Download All** to receive them together in one ZIP file. The device prepares
  the file first, and Transfers shows each item as it is added.
- Search the current folder, sort by name, size or date, and select several items to copy, move or remove them
  together.
- Edit text files up to 4 MB in place, and edit images up to 32 MB with the [image editor](#image-editor).

Network and terminal settings and the dashboard's own secret are never shown.

## History and Collections

History shows each entry's system, when it was last played and where it lives, and marks entries whose content can no
longer be found. Collections can be searched and opened like folders. Both lists can be sorted by any column.

With the device code, or freely when Authentication is disabled, you can:

- Update an entry's path, add it to a collection or remove it from History.
- Rename the content itself, which updates every History and Collection entry that points at it.
- Create, rename and remove empty collections, and update, move or remove their content.
- Select several entries to add them to a collection, move them or remove them together. The content itself is never
  touched.
- Open a collection and choose **Add Content** to add any content on the device by its full path, such as
  `/mnt/mmc/ROMS/Nintendo Game Boy/Tetris (World).gb`.

While History or Collections is open on the device itself, the dashboard pauses changes to it until it is closed
there.

## Catalogue

Shows every system in the [catalogue]({{site.baseurl}}/installation/catalogue) with how much artwork it has, and marks
content and folders that have no artwork. Hover over an image or video to preview it. Content needs an assigned system
before artwork can be stored for it.

- Box art and preview artwork can be a still image, an animated GIF or PNG, or an MP4 video.
- Upload new artwork and prepare still images in the [image editor](#image-editor) before they are saved.
- Choose **Adjust** on an MP4 to set where it starts and ends, how long it fades in and out, and whether its sound is
  muted. The video itself is left untouched, and the device plays it with those settings. Uploading new artwork in its
  place clears them.
- Edit descriptions and manuals as text, or remove artwork you no longer want. Manuals add buttons for bold, italic,
  underline, strikethrough and colour, which insert the matching [formatting codes](/docs/infrastructure/formatting),
  and a formatted preview below the text shows how the manual will look.
- Press **Refresh** to read the catalogue again after artwork has been changed on the device or copied over another
  way.

### Image editor

The image editor opens when you upload or adjust a still image, from Catalogue or File Management.

- Drag the frame or its corners to crop, and choose **Crop size** to keep the cropped size or a 640, 480 or 320 pixel
  output to shrink the saved image. The sizes of the crop and the saved image are shown below it.
- Rotate or flip the selected layer from **Transform**.
- **Add Layer** places another image over the base. Select it to change its opacity and scale, rotate or flip it,
  raise or lower it, or drag it into position. The arrow keys nudge it as well, with **Shift** for larger steps.
- **Reset** returns to the original image.

## Pickles Saves

Groups the Pickles save games and save states of each title together, and shows the core each save belongs to.

- Save games can be downloaded, replaced with a file from your computer, or restored from one of the earlier copies
  Pickles keeps. Replacing a save keeps the earlier copies.
- **Import** adds a save game from your computer. Enter where it belongs, starting with the Pickles core folder, such
  as `Gambatte/Tetris (World).srm`. Common save types such as `.srm`, `.sav`, `.mcd`, `.eep` and `.vmu` are
  accepted.
- Save states show their preview image and can be downloaded or removed.

## Now Playing

Shows what is playing in Wasabi and Pickles, with controls for each. The Dashboard shows a link to it while something
is playing.

<div class="guide-paths" markdown="0">
    <div><code>Wasabi</code><span>Play and pause, seek, skip, previous and next, volume, shuffle, repeat and stop. Open
        the playlist to jump straight to any item or channel.</span></div>
    <div><code>Pickles</code><span>Pause and resume, slow motion, fast forward, the frame rate display, Quick Save,
        Quick Load and Quit. Quick Load and Quit ask first, because they lose anything not yet saved.</span></div>
</div>

With Authentication on, the controls need the device code. While the Pickles menu is open on the device, only Quit
works.

## Remote View

Shows what the device is showing. Pictures are only taken while the page is open, and **Save image** keeps the one
on screen. How it updates is set by **Remote View** in **Configuration > Connectivity > Web Services > Web Dashboard**.

<div class="guide-paths" markdown="0">
    <div><code>Manual</code><span>A new picture only when you press <b>Refresh now</b>. Good for lining up a
        screenshot on the device, because the picture never changes on its own.</span></div>
    <div><code>30s to 10m</code><span>A new picture at that interval, with a bar showing roughly when the next one
        arrives.</span></div>
    <div><code>Live</code><span>A moving picture of the screen as it changes. <b>Live View FPS</b> and <b>Live View
        Quality</b> in Web Services set how smooth and how sharp it is. With <b>Live Sound</b> turned on, press
        <b>Sound</b> to hear the device in the browser as well.</span></div>
    <div><code>Pause</code><span>Holds the current picture in Timed or Live until you press <b>Resume</b>.</span></div>
    <div><code>Pop out</code><span>Opens the picture in its own small window that stays open while you use other
        pages or programs.</span></div>
</div>

### Remote Controls

Turn on **Remote Controls** in **Configuration > Connectivity > Web Services > Web Dashboard** to show a controller
under the picture. It has the D-pad, A, B, X and Y, the shoulder buttons, Select, Menu and Start, and volume and
brightness. Choose **Enabled with Sticks** to add the analogue sticks on devices that have them, which a game
controller connected to the browser can also move. Buttons act exactly like the ones on the device, and buttons the device does not have are greyed out. The
controls need Authentication and the device code. With Authentication and Remote View Privacy both disabled, they are
open to anyone on your network, but only while Remote View is set to Live.

Choose **Mobile** at the top of Remote View to fill the screen with just the picture and the controller, laid out
like a handheld when your phone is sideways. **Desktop** brings back the full page. **Hide Live View** leaves only the
controller and stops the device capturing its screen, which is handy when you are watching the device itself. Each
browser remembers both choices.

**Lock** stops the buttons on the device itself from doing anything while you control it from the browser. The lock
lifts when you press **Lock** again, switch to another tab or page, or lose the connection, so the device never stays
locked after you leave.

Hold a button to keep it pressed. While Remote View is paused, the controls are turned off and send nothing. With
**Device Input Priority** turned on in Web Services, which is the default, the controls also pause for a moment
whenever someone uses a button or stick on the device, and Remote View says so until the device is left alone. If the connection drops while a button is held, the device lets go of it on its own
within two seconds.

| Key       | Button            | Key       | Button            |
|-----------|-------------------|-----------|-------------------|
| `W`       | D-pad up          | `I`       | X                 |
| `A`       | D-pad left        | `J`       | Y                 |
| `S`       | D-pad down        | `K`       | B                 |
| `D`       | D-pad right       | `L`       | A                 |
| `F`       | Select            | `Q`       | L1                |
| `G`       | Menu              | `E`       | L2                |
| `H`       | Start             | `R`       | L3                |
| `O`       | R1                | `U`       | R2                |
| `Y`       | R3                | `V` / `N` | Volume down / up  |
|           |                   | `C` / `B` | Brightness down / up |

{: .warning }
Anyone with the device code can use the controls to do anything you can do with the device in your hands, including
changing settings and deleting content. Turn them on only on a network you trust.

<div class="guide-paths" markdown="0">
    <div><code>Privacy on</code><span>The default. Remote View needs Authentication and the device code, and never
        captures the Web Dashboard Code, passcode or password screens.</span></div>
    <div><code>Privacy off</code><span>Anyone on the network can open it, and every screen is captured.</span></div>
    <div><code>Disabled</code><span>Removes Remote View from the dashboard.</span></div>
</div>

## Saving and sharing

Activity Tracker and System Information both have **Save as image**, which downloads a picture of the selected group's
summary or of every System Information panel, ready to post or send.

The System Information picture includes the serial number and MAC address. Check it before sharing it publicly.
{: .warning }

The dashboard uses the language chosen on the device. Text that has not been translated yet is shown in English, and
right-to-left languages such as Arabic, Hebrew and Persian are laid out from right to left.

## Authentication and the device code

Authentication is enabled by default. **Web Dashboard Code** shows a six-digit code and how long it lasts. The browser
asks for the current code before any protected action, then keeps you signed in for a short time.

The code is generated on the device from a local secret, and a new code appears when the current one runs out.

Anyone on the same network can read the dashboard, including Activity Tracker, System Information, History and
Collections, without the device code. With Authentication enabled, every change needs the code. With it disabled,
anyone on the network can change files, lists and saves without one. Because System Information includes the serial
number and MAC address, disable Web Dashboard on networks you do not trust.
{: .warning }

## Use it from your own scripts

Every dashboard page reads the same API that your own scripts, home automation or status displays can use. The
[Web Dashboard API](/web/dashboard/api) page lists each request. The same page is in the dashboard under
**Documentation > Dashboard API**.
