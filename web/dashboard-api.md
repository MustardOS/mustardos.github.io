---
layout: default
title: Web Dashboard API
permalink: /web/dashboard/api
parent: Web Dashboard
grand_parent: Web Services
nav_order: 1
has_toc: false
---

# **Web Dashboard API**

The Web Dashboard is a small web server on your device, and every page in it reads the same API you can use from your
own scripts, home automation or a status display. This page lists each request, what it needs and what it returns.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Find the address</strong>Use the address from <b>Configuration &gt; Connectivity &gt;
        Web Dashboard Code</b>, such as <code>http://muos.local</code>.</div>
    <div class="guide-step"><strong>Read freely</strong>Device status and play statistics are open to anyone on your
        network. No code is needed to read them.</div>
    <div class="guide-step"><strong>Unlock for changes</strong>When Authentication is enabled, changes and protected
        Remote View features need the six digit code shown on the device, or a session opened with it.</div>
</div>

```sh
curl http://muos.local/state/status.json
```

## Key ideas

<div class="guide-paths" markdown="0">
    <div><code>JSON</code><span>Every API answer is JSON. Errors come back as <code>{"error": "..."}</code> with a
        plain-language message you can show to people.</span></div>
    <div><code>Plain text bodies</code><span>Requests that send a name or path send it as plain text in the body. The
        core assignment editor is the one exception, and sends JSON.</span></div>
    <div><code>Same origin</code><span>Any request other than GET that carries an <code>Origin</code> header must come
        from the dashboard address itself, or it is refused with 403. Scripts that send no <code>Origin</code> header
        are not affected.</span></div>
    <div><code>No caching</code><span>Answers are sent with <code>Cache-Control: no-store</code>, so each request
        shows the device as it is now.</span></div>
</div>

## Authentication

Authentication is set in **Configuration > Connectivity > Web Services**. When it is on, the device shows a six digit
code that changes every 30 seconds. Send the code with a request, or trade it for a session that lasts while you use
it.

| Header           | Use                                                                                  |
|------------------|--------------------------------------------------------------------------------------|
| `X-muOS-Code`    | The code currently shown on the device. Accepted on any request that needs unlocking. |
| `X-muOS-Session` | A session token from <span class="api-route"><span class="api-method api-post">POST</span><code>/api/session</code></span>. Ends after 30 minutes without use.          |

```sh
# Open a session with the code shown on the device
curl -X POST -H "X-muOS-Code: 123456" http://muos.local/api/session

# Use the token from the answer for later requests
curl -H "X-muOS-Session: 0f4c..." http://muos.local/api/screen
```

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/auth</code></span><span>Whether a code is needed. Returns <code>required</code>,
        <code>readonly</code>, <code>lists_open</code>, <code>player_open</code>, <code>unlocked</code> (true when
        your session is still valid), <code>step</code> (seconds per code), <code>digits</code> and
        <code>remaining</code> (seconds until the code changes).</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/session</code></span><span>Send the code in <code>X-muOS-Code</code>. Returns
        <code>token</code> and <code>idle</code> (seconds a session lasts without use). Up to four sessions are kept,
        and a new one replaces the session closest to ending.</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/session</code></span><span>Ends the session named in <code>X-muOS-Session</code>.</span></div>
</div>

{: .warning }
With Authentication off, dashboard changes and controls are available to everyone on the local network. Enable
Authentication on shared or untrusted networks.

{: .warning }
Five wrong codes in a minute from one address locks that address out with 429, starting at a minute and doubling up to
15 minutes. More than 30 wrong codes a minute from all addresses together locks everyone out for a short time.

## Device status

These are files the device refreshes in the background, about every 5 seconds for status and every minute for the
slower details. They never need a code.

| File                       | What is in it                                                                        |
|----------------------------|--------------------------------------------------------------------------------------|
| <span class="api-route"><span class="api-method api-get">GET</span><code>/state/status.json</code></span>   | Clock and time zone, uptime, address, device name and version, battery, the running program with the frontend module it is showing, the running content, storage use and an activity summary. |
| <span class="api-route"><span class="api-method api-get">GET</span><code>/state/detail.json</code></span>   | System Information: processor, battery, network, integrity, frontend, power, traffic and storage details. |
| <span class="api-route"><span class="api-method api-get">GET</span><code>/state/activity.json</code></span> | Play statistics for each title, keyed by name: total time, launches, average and last session, core and device. |
| <span class="api-route"><span class="api-method api-get">GET</span><code>/state/tracker.json</code></span>  | The full Activity Tracker records, one per title, including first and last play, longest session and time per core and device. |
| <span class="api-route"><span class="api-method api-get">GET</span><code>/state/lang.json</code></span>     | The language file in use on the device, for showing the same words as the device.    |

```sh
curl -s http://muos.local/state/status.json | jq '.battery'
```

## File Management

File Management exposes the same mounted storage locations as the dashboard. User storage is writable whenever it is
mounted. Internal and boot storage are protected, and each change must also include `X-muOS-System-Write: confirm`.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/files</code></span><span>Lists the available storage roots. Each root includes an
        <code>id</code>, display <code>label</code>, filesystem <code>path</code> and whether it is
        <code>protected</code>. Removable roots only appear while mounted.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/files/{root}/browse/{path}</code></span><span>Lists a folder, its free and total space, and
        its files. Each item includes its name, type, size and modification time.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/files/{root}/download/{path}</code></span><span>Downloads a file. Byte ranges are supported
        for large media and resumable transfers. A folder downloads as a ZIP file.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/files/{root}/archive/{path}</code></span><span>Starts building one ZIP file from two or more
        items in the folder. Send their names as plain text, one to a line. Returns a <code>job</code>, or 429 while
        two archives are already being built.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/files/{root}/archive-status/{job}</code></span><span>Returns <code>state</code>
        (<code>waiting</code>, <code>working</code>, <code>ready</code> or <code>failed</code>), the
        <code>current</code> item, <code>completed</code> and <code>total</code> items, the archive size in
        <code>bytes</code> and an <code>error</code> when it failed.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/files/{root}/archive-download/{job}</code></span><span>Downloads a ready archive once. It is
        removed from the device afterwards, and unclaimed archives are removed after an hour.</span></div>
    <div><span class="api-route"><span class="api-method api-put">PUT</span><code>/api/files/{root}/upload/{path}</code></span><span>Uploads one file as the request body. Uploads
        are streamed to disk and limited by the free space on the destination.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/files/{root}/mkdir/{path}</code></span><span>Creates a folder.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/files/{root}/move/{path}</code></span><span>Moves or renames an item. Send the destination
        path as plain text in the body.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/files/{root}/copy/{path}</code></span><span>Copies an item. Send the destination path as
        plain text in the body.</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/files/{root}/remove/{path}</code></span><span>Removes a file or folder recursively.</span></div>
</div>

{: .warning }
Sensitive system paths are never exposed. Take particular care with protected storage: removing or replacing system
files can prevent MustardOS from starting.

## History and Collections

History and Collections are lists of shortcuts to your content. Changes are refused with 409 while the matching screen
is open on the device.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/history</code></span><span>Returns <code>busy</code> (the History screen is open) and
        <code>items</code>, each with <code>id</code>, <code>path</code>, <code>system</code>, <code>name</code>,
        <code>modified</code> and <code>exists</code> (the content is still on the card).</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/history/{id}</code></span><span>Removes the entry from History.</span></div>
    <div><span class="api-route"><span class="api-method api-put">PUT</span><code>/api/history/{id}/path</code></span><span>Points the entry at a new content path, sent as the body.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/history/{id}/rename</code></span><span>Renames the underlying content file and updates every
        matching History and Collection entry. Send the complete new file name as plain text in the body.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/history/{id}/collect</code></span><span>Adds the entry to a collection. The body is the collection
        name, or empty for the top level.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/collection</code></span><span>Returns <code>busy</code>, <code>items</code> (as above, with the
        collection folder in the <code>id</code>) and <code>collections</code>.</span></div>
    <div><span class="api-route"><span class="api-method api-put">PUT</span><code>/api/collection/{name}</code></span><span>Creates an empty collection.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/collection/{name}/rename</code></span><span>Renames a collection. The body is the new name.</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/collection/{name}</code></span><span>Removes a collection. It must be empty first.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/collection/{name}/add</code></span><span>Adds existing content to a collection. Send the
        full path of the content file on the device as the body. Returns 409 when the collection already holds it.</span></div>
    <div><span class="api-route"><span class="api-method api-put">PUT</span><code>/api/collection/{id}/path</code></span><span>Points an entry at a new content path.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/collection/{id}/rename</code></span><span>Renames the underlying content file and updates
        every matching History and Collection entry. Send the complete new file name as plain text in the body.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/collection/{id}/move</code></span><span>Moves an entry to another collection, named in the body, or
        to the top level with an empty body.</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/collection/{id}</code></span><span>Removes the entry from its collection.</span></div>
</div>

```sh
curl -X POST -H "X-muOS-Session: 0f4c..." --data "Favourites" \
     "http://muos.local/api/history/Descent-0B5695F2.cfg/collect"
```

## Now Playing

### Wasabi

Controls Wasabi, the music and video player. These follow the same rule as History and Collections, so they are open
to everyone when Authentication is off.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/player</code></span><span>What Wasabi is playing, or <code>{"active": false}</code> when nothing has
        played in the last 10 seconds. Includes <code>title</code>, <code>artist</code>, <code>album</code>,
        <code>uri</code>, <code>paused</code>, <code>position</code>, <code>duration</code>, <code>index</code> and
        <code>count</code> in the playlist, <code>volume</code>, <code>shuffle</code> and <code>repeat</code>.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/player/list</code></span><span>The playlist or channel list as <code>items</code>, each with a
        <code>title</code> and <code>index</code>.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/player/{command}</code></span><span>One of <code>toggle</code>, <code>play</code>,
        <code>pause</code>, <code>stop</code>, <code>next</code>, <code>previous</code>, <code>skip</code>,
        <code>seek</code>, <code>volume</code>, <code>setvolume</code>, <code>jump</code>, <code>shuffle</code> or
        <code>repeat</code>. Returns 409 when Wasabi is not running.</span></div>
</div>

| Command     | Body                                                        |
|-------------|-------------------------------------------------------------|
| `seek`      | A position in seconds.                                      |
| `skip`      | Seconds to move forward, or back with a minus sign.         |
| `volume`    | An amount to raise or lower the volume by.                  |
| `setvolume` | The volume to set, from 0 to 200.                           |
| `jump`      | The `index` of the playlist item or channel to play.        |
| `shuffle`   | `1` to turn shuffle on or `0` to turn it off.               |
| `repeat`    | `0` for off, `1` to repeat the item or `2` to repeat all.   |

```sh
curl -X POST --data 3 http://muos.local/api/player/jump
```

### Pickles

Controls the game running in Pickles. These follow the same rule as Wasabi, so they are open to everyone when
Authentication is off, and need a code or session when it is on.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/game</code></span><span>What Pickles is running, or <code>{"active": false}</code>. Includes
        <code>name</code>, <code>folder</code>, <code>core</code>, <code>library</code>, <code>version</code>,
        <code>paused</code>, <code>speed</code> (<code>normal</code>, <code>fast_forward</code> or
        <code>slow_motion</code>), <code>menu</code> (the Pickles menu is open), <code>netplay</code>,
        <code>saves</code> (state saves are allowed), <code>quicksave</code> (a quick save exists), <code>fps</code>
        and <code>played</code> (seconds of play this session).</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/game/{command}</code></span><span>One of <code>pause</code>, <code>resume</code>, <code>toggle</code>,
        <code>fast_forward</code>, <code>slow_motion</code>, <code>quicksave</code>, <code>quickload</code>,
        <code>fps</code> or <code>quit</code>. <code>fast_forward</code> and <code>slow_motion</code> take
        <code>1</code> or <code>0</code> as the body. Returns 409 when Pickles is not running.</span></div>
</div>

{: .note }
Commands work the same way as the hotkeys on the device. While the Pickles menu is open only `quit` is carried out,
pausing and speed changes are refused during netplay, and quick saves follow the game's save state rules. `quit` saves
first when Auto Save is on.

```sh
curl -X POST -H "X-muOS-Session: 0f4c..." http://muos.local/api/game/quicksave
```

## Remote View

Remote View pictures the device screen. It needs Authentication and a code or session, unless privacy was turned off
on the device. While a private screen is open, such as the Web Dashboard Code or a password entry, nothing is captured.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/screen</code></span><span>Returns <code>captured</code> (time of the last picture), <code>age</code>
        (seconds since), <code>interval</code>, <code>rotate</code> (degrees to turn the picture),
        <code>live</code> (Live is chosen), <code>audio</code> (Live Sound is on), <code>audio_rate</code> (its sample
        rate), <code>manual</code> (Manual is chosen) and <code>state</code> (<code>ok</code>, <code>hidden</code> or
        <code>failed</code>). Takes a new picture when the last one is older than the interval, except
        in Manual. Add <code>?peek=1</code> to only read the status.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/screen</code></span><span>Takes a new picture now. At most one every 10 seconds.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/screen/image</code></span><span>The last picture, as PNG.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/screen/live</code></span><span>A live MJPEG stream (<code>multipart/x-mixed-replace</code>), when
        Live is chosen on the device. Each part is a JPEG, or a short text part while a private screen is open. Up to
        two streams at once. Each ends after 30 minutes, when the session that opened it is locked, or when the
        dashboard restarts. Add <code>?raw=1</code> to receive the same stream as
        <code>application/octet-stream</code>, which Safari passes to scripts unchanged.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/screen/audio</code></span><span>The sound the device is playing, when
        Live Sound is turned on. The body is raw signed 16-bit little endian stereo, and the
        <code>X-Audio-Format</code> header gives the sample rate. It follows the same rules as the live picture,
        with up to two streams at once, and the capture stops when the connection closes.</span></div>
</div>

```sh
curl -X POST -H "X-muOS-Code: 123456" http://muos.local/api/screen
curl -H "X-muOS-Code: 123456" -o screen.png http://muos.local/api/screen/image
```

## Remote Controls

Presses buttons and changes the volume and brightness, as if you were holding the device. Available when **Remote
Controls** is on in Web Services, and every change needs a code or session. With Authentication and Remote View
Privacy both disabled, no code is needed, but the controls are only available while Remote View is set to Live.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/input</code></span><span>Returns <code>buttons</code>, the buttons and stick axes this device has, and
        <code>ready</code> (the input service is running), <code>local_active</code> (someone is using the device
        itself, so the controls are paused) and <code>locked</code> (the physical controls are locked).</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/input/{button}</code></span><span>Send <code>1</code> to press and <code>0</code> to release.
        Buttons are <code>up</code>, <code>down</code>, <code>left</code>, <code>right</code>, <code>a</code>,
        <code>b</code>, <code>x</code>, <code>y</code>, <code>l1</code>, <code>r1</code>, <code>l2</code>,
        <code>r2</code>, <code>l3</code>, <code>r3</code>, <code>select</code>, <code>start</code> and
        <code>menu</code>. A press lasts 1.5 seconds, so send <code>1</code> again every half second to keep holding
        it. A press is held for at least 60 milliseconds, so a quick press and release still registers.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/input/stick</code></span><span>Moves the analogue sticks, on devices
        that have them. Send axis and level pairs such as <code>lx 0.5 ly -1</code>, where <code>lx</code> and
        <code>ly</code> are the left stick, <code>rx</code> and <code>ry</code> the right stick, and each level runs
        from <code>-1</code> to <code>1</code>. A stick returns to the centre 300 milliseconds after the last
        update, so send the levels again at least every 150 milliseconds while it is held. When the physical stick
        is also moved, whichever is further from the centre wins.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/input/lock</code></span><span>Send <code>1</code> once a second
        to lock the physical controls on the device. Each request renews a three second lease, so the controls unlock
        by themselves when the client disconnects. Send <code>0</code> to unlock them straight away. This works even
        while the controls are paused.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/input/clear</code></span><span>Releases every button and centres the sticks. This
        always works, even while the controls are paused.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/input/volume/up</code></span><span>Steps the volume up, as the volume button does. Use
        <code>down</code> to step it down, and <code>brightness/up</code> or <code>brightness/down</code> for the
        brightness.</span></div>
</div>

With **Device Input Priority** on, presses and stick moves return 409 for a moment after someone uses a button or
stick on the device.

```sh
# Press and release A
curl -X POST -H "X-muOS-Session: 0f4c..." --data 1 http://muos.local/api/input/a
curl -X POST -H "X-muOS-Session: 0f4c..." --data 0 http://muos.local/api/input/a
```

## Editors and Tools

The Editors and Tools in the dashboard open and save device files through these requests. Reading is open, and saving
needs a code or session.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/tools</code></span><span>Lists the areas with <code>name</code> and <code>writable</code>, plus
        whether core assignments and content folders are available.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/tools/{area}</code></span><span>Lists the files in an area, each with <code>path</code>,
        <code>size</code> and <code>modified</code>. Add a folder name ending in <code>/</code> to list inside it.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/tools/{area}/{file}</code></span><span>Reads a file.</span></div>
    <div><span class="api-route"><span class="api-method api-put">PUT</span><code>/api/tools/{area}/{file}</code></span><span>Saves a file. The body is the file itself.</span></div>
</div>

| Area              | Files                                    | Can save |
|-------------------|------------------------------------------|----------|
| `name`            | Custom content names (`.json`)           | Yes      |
| `profile`         | Settings profiles (`.conf`)              | Yes      |
| `profile-builtin` | The built-in accessibility profiles      | No       |
| `equaliser`       | Wasabi equaliser profiles (`.eq`)        | Yes      |
| `track`           | Activity Tracker records (`.json`)       | Yes      |
| `bios`            | BIOS files, for checking what is present | No       |
| `theme`           | Installed themes, for checking           | No       |

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/tools/core</code></span><span>Returns <code>source</code>: <code>user</code> when you have your own
        core assignments, or <code>bundled</code>.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/tools/core/core.json</code></span><span>The core assignments in use.</span></div>
    <div><span class="api-route"><span class="api-method api-put">PUT</span><code>/api/tools/core</code></span><span>Saves your own core assignments. The body must be a JSON object.</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/tools/core</code></span><span>Goes back to the bundled assignments, keeping a backup of yours.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/tools/content</code></span><span>Lists the content folders as <code>roots</code>, each with an
        <code>index</code> and <code>path</code>. Browse one with <code>/api/tools/content/{index}/{folder}/</code>,
        and read or save <code>.m3u</code> playlists inside it.</span></div>
</div>

## Library

These areas are available under **Library** in File Management. Reading is open, and changes need a code or session.

<div class="guide-paths" markdown="0">
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/content</code></span><span>Free and used storage, the artwork types and each content folder with its
        artwork counts.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/catalogue</code></span><span>Every catalogue system with its artwork counts. Add
        <code>/{system}</code> for the files of one system.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/catalogue/{system}/{type}/{file}</code></span><span>Uploads artwork. Types are <code>box</code>,
        <code>grid</code>, <code>preview</code>, <code>text</code>, <code>manual</code> and the <code>overlay/</code>
        types. <code>box</code> and <code>preview</code> also accept <code>.mp4</code>, and a video's start, end and fade
        settings are saved as <code>_edit/{name}.conf</code> beside it.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/catalogue/refresh</code></span><span>Reads the catalogue again, after artwork has been
        changed on the device.</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/catalogue/{system}/{type}/{file}</code></span><span>Removes artwork.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/pickles</code></span><span>Pickles save states, save files and backups. Each save
        file includes its <code>core</code>.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/api/pickles/state/{content}</code></span><span>The save states of one title.</span></div>
    <div><span class="api-route"><span class="api-method api-delete">DELETE</span><code>/api/pickles/state/{content}/{slot}</code></span><span>Removes a save state and its preview
        image.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/pickles/sram/{save}</code></span><span>Replaces or imports a save game with the request
        body, where <code>{save}</code> starts with the core folder. Accepts <code>.srm</code>, <code>.rtc</code>,
        <code>.sav</code>, <code>.mcd</code>, <code>.mcr</code>, <code>.mpk</code>, <code>.eep</code>,
        <code>.fla</code>, <code>.dsv</code>, <code>.brm</code>, <code>.bkr</code>, <code>.vmu</code>,
        <code>.vms</code>, <code>.gme</code>, <code>.pak</code>, <code>.sgm</code> and <code>.nv</code>.</span></div>
    <div><span class="api-route"><span class="api-method api-post">POST</span><code>/api/pickles/backup/{index}/{save}</code></span><span>Restores an earlier copy of a save game
        over the current one.</span></div>
    <div><span class="api-route"><span class="api-method api-get">GET</span><code>/media/catalogue/{path}</code></span><span>Downloads a catalogue file. <code>/media/pickles/{path}</code>
        does the same for saves.</span></div>
</div>

{: .note }
Uploads are limited to 32 MB.

## Status codes

| Code | Meaning                                                                                       |
|------|-----------------------------------------------------------------------------------------------|
| 200  | Done.                                                                                         |
| 400  | Something in the request is not valid, such as a name, path or file type.                     |
| 401  | Unlock the dashboard with the code from Web Dashboard Code on the device.                     |
| 403  | Read only, a different origin, or the files cannot be changed from the dashboard.             |
| 404  | Not found, or the feature is turned off on the device.                                        |
| 405  | That method is not used for this request.                                                     |
| 409  | The matching screen is open on the device, or the change clashes with something already there. |
| 413  | The request is too large. File Management uploads are streamed instead and are limited by destination free space. |
| 429  | Too many wrong codes. Wait and try again.                                                     |
| 503  | Wasabi or the input service did not accept the request.                                        |
| 507  | There is not enough free space to complete an upload.                                         |
