---
layout: default
title: Extending MustardOS
parent: How MustardOS Works
permalink: /docs/infrastructure/extending
nav_order: 7
---

# **Extending MustardOS**

MustardOS is built around data and small launch boundaries, so the most common additions need no changes to the
frontend at all.

<div class="guide-grid compact five" markdown="0">
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxstorage/manifest.svg" alt="" width="36" height="36">
        <span class="guide-title">Systems</span>
        <span class="guide-text">Add systems and launch choices through your own manifests under
            <code>MUOS/info/manifest</code>.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxstorage/name.svg" alt="" width="36" height="36">
        <span class="guide-title">Folder Aliases</span>
        <span class="guide-text">Add alternative folder names through a system's <code>friendly</code> list.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxstorage/catalogue.svg" alt="" width="36" height="36">
        <span class="guide-title">Catalogues</span>
        <span class="guide-text">Add artwork and other catalogue assets under the system's catalogue name.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxstorage/theme.svg" alt="" width="36" height="36">
        <span class="guide-title">Themes</span>
        <span class="guide-text">Add themes as a <code>.muxthm</code> package.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxassign/core.svg" alt="" width="36" height="36">
        <span class="guide-title">Overrides</span>
        <span class="guide-text">Set per-content launchers, governors and controls through the assignment flow.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxretro/shader.svg" alt="" width="36" height="36">
        <span class="guide-title">Visual Presets</span>
        <span class="guide-text">Add Pickles visual presets through the downloadable manifests and creator folders.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxapp/app.svg" alt="" width="36" height="36">
        <span class="guide-title">External Software</span>
        <span class="guide-text">Add a dedicated launcher script, with explicit preparation and clean up where
            needed.</span>
    </div>
    <a class="guide-card" href="/tasks/writing">
        <img src="/tour/assets/glyphs/muxtask/diagnostic.svg" alt="" width="36" height="36">
        <span class="guide-title">Task Toolkit</span>
        <span class="guide-text">Add your own maintenance scripts with progress, questions and error reporting on the
            device screen.</span>
    </a>
    <a class="guide-card" href="/web/dashboard/api">
        <img src="/tour/assets/glyphs/muxwebserv/landing.svg" alt="" width="36" height="36">
        <span class="guide-title">Web Dashboard API</span>
        <span class="guide-text">Read the device status and drive File Management, History, Collections, Remote View
            and the controls from your own scripts.</span>
    </a>
    <a class="guide-card" href="/tools">
        <img src="/tour/assets/glyphs/muxinfo/tester.svg" alt="" width="36" height="36">
        <span class="guide-title">Editors and Tools</span>
        <span class="guide-text">Browser tools for core manifests, friendly names and Activity Tracker history. They
            never upload or keep your files.</span>
    </a>
</div>

## Rules for developers

These rules keep your additions compatible with normal frontend and shutdown behaviour:

- Keep identifiers stable.
- Replace persistent files atomically.
- Keep user input out of shell interpolation.
- Restore every device resource a launch changes.
