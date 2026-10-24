---
layout: default
title: System Finder
permalink: /tools/system-finder
parent: Editors and Tools
nav_order: 1
has_toc: false
---

# **System Finder**

Explore Content does not depend on any naming convention. Your content and folders can use any names you like and
can sit as many subfolders deep as you want, because the only thing MustardOS needs is a system and core assigned to
the content or to a folder that holds it. See [Core Assignment]({{ site.baseurl }}/systems/cores) for how to assign
them from the device.

{: .note }
> The folder names listed below are optional shortcuts. When a folder uses one of them, MustardOS assigns the system
> and its default core automatically, matching without regard to case, spaces, hyphens, underscores or plus signs, so
> `Game Boy Advance` and `gameboyadvance` both work. Any other name works just as well once it has an assignment.

Type a system, console or folder name to see the folder names MustardOS assigns automatically, the cores that run the
system, and any BIOS files it needs.

<div class="tool" id="files-tool">
    <label class="files-search"><span>System or folder name</span>
        <input id="files-query" type="search" autocomplete="off" placeholder="For example: gba, PlayStation, megadrive">
    </label>
    <p id="files-status" class="help" role="status" aria-live="polite">Loading the system list…</p>
    <div id="files-results" class="files-results"></div>
</div>

<p class="note">BIOS files go in <code>MUOS/bios</code> on SD1 or SD2. Use the
    <a href="{{ site.baseurl }}/tools/bios-checker">BIOS Checker</a> to confirm yours are correct.</p>

<script src="{{ site.baseurl }}/assets/js/tool-storage.js"></script>
<script src="{{ site.baseurl }}/assets/js/where-files.js"></script>
