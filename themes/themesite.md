---
layout: default
title: Themes
permalink: /themes
nav_enabled: true
nav_order: 5
has_children: true
---

# **Themes**

Themes can change the colours, typefaces, spacing, backgrounds, glyphs, sounds and layout of the MustardOS frontend.
They can target individual screens and supported display resolutions while sharing common assets from the theme root.

<div class="guide" markdown="0">
    <h2 class="guide-heading">Installing a theme</h2>

    <div class="guide-grid">
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxtheme/download.svg" alt="" width="48" height="48">
            <span class="guide-title">From the Theme Picker</span>
            <ol class="guide-numbered">
                <li>Connect the device to the internet.</li>
                <li>Open <strong>Configuration &gt; Customisation &gt; Theme Picker &gt; Theme Download</strong>.</li>
                <li>Download a theme, return to <strong>Theme Picker</strong> and select it.</li>
            </ol>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxarchive/installed.svg" alt="" width="48" height="48">
            <span class="guide-title">From a theme archive</span>
            <ol class="guide-numbered">
                <li>Copy the <code>.muxthm</code> file to <code>ARCHIVE</code> on SD1 or SD2.</li>
                <li>Open <strong>Applications &gt; Archive Manager</strong> and select the file.</li>
                <li>Open <strong>Configuration &gt; Customisation &gt; Theme Picker</strong> and select the installed theme.</li>
            </ol>
        </div>
    </div>

    <div class="guide-extra">
        <a class="tour-card" href="https://theme.muos.dev/">
            <img src="/tour/assets/glyphs/muxtheme/theme.svg" alt="" width="24" height="24">
            <span>Browse the community theme library</span>
        </a>
        <a class="tour-card" href="https://community.muos.dev/">
            <img src="/tour/assets/glyphs/muxinfo/news.svg" alt="" width="24" height="24">
            <span>Theme creators on the MustardOS Community</span>
        </a>
    </div>
</div>

Some themes provide matching folder or application artwork in a separate catalogue package. Install that package
when the theme creator supplies one.
{: .note }

<div class="guide" markdown="0">
    <h2 class="guide-heading">Creating a theme</h2>

    <div class="guide-grid compact">
        <a class="guide-card" href="/themes/structure">
            <img src="/tour/assets/glyphs/muxtheme/folder.svg" alt="" width="36" height="36">
            <span class="guide-title">Theme Structure</span>
            <span class="guide-text">Shared files in the theme root, with overrides for each display resolution. Start here.</span>
        </a>
        <a class="guide-card" href="/themes/images">
            <img src="/tour/assets/glyphs/muxcustom/videowallpaper.svg" alt="" width="36" height="36">
            <span class="guide-title">Images and Video</span>
            <span class="guide-text">Wallpapers, static images, boot logos and video, sized for each resolution.</span>
        </a>
        <a class="guide-card" href="/themes/fonts">
            <img src="/tour/assets/glyphs/muxcustom/font.svg" alt="" width="36" height="36">
            <span class="guide-title">Custom Fonts</span>
            <span class="guide-text">TrueType fonts for the whole theme, a single resolution or a single screen.</span>
        </a>
        <a class="guide-card" href="/themes/scheme">
            <img src="/tour/assets/glyphs/muxconfig/colour.svg" alt="" width="36" height="36">
            <span class="guide-title">Scheme Files</span>
            <span class="guide-text">The colours, sizes and layout values for every screen.</span>
        </a>
        <a class="guide-card" href="/themes/alternative">
            <img src="/tour/assets/glyphs/muxcustom/alternate.svg" alt="" width="36" height="36">
            <span class="guide-title">Theme Alternatives</span>
            <span class="guide-text">Several selectable styles in one theme, without duplicating the package.</span>
        </a>
        <a class="guide-card" href="/themes/assets">
            <img src="/tour/assets/glyphs/muxcustom/catalogue.svg" alt="" width="36" height="36">
            <span class="guide-title">Theme Assets</span>
            <span class="guide-text">Catalogue artwork and other user data installed alongside the theme.</span>
        </a>
        <a class="guide-card" href="/themes/finish">
            <img src="/tour/assets/glyphs/muxarchive/archive.svg" alt="" width="36" height="36">
            <span class="guide-title">Finishing Your Theme</span>
            <span class="guide-text">Preview images, credits and packaging the finished <code>.muxthm</code>.</span>
        </a>
        <a class="guide-card" href="/themes/glyphs">
            <img src="/tour/assets/glyphs/muxcustom/glyphlist.svg" alt="" width="36" height="36">
            <span class="guide-title">Glyph Gallery</span>
            <span class="guide-text">Every glyph the bundled theme provides, and where each one appears.</span>
        </a>
    </div>
</div>
