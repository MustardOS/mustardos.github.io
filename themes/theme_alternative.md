---
title: Theme Alternatives
layout: default
permalink: /themes/alternative
parent: Themes
nav_order: 5
has_toc: false
---

# **Theme Alternatives**

Alternatives let one theme offer several looks, such as a light and a dark version, without making separate theme
packages. Users choose one in **Configuration > Customisation > Alternative Theme**.

<div class="guide" markdown="0">
    <h2 class="guide-heading">Two kinds of alternative</h2>

    <div class="guide-grid">
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxconfig/colour.svg" alt="" width="48" height="48">
            <span class="guide-title">Scheme alternative</span>
            <span class="guide-text">An INI file in <code>alternate</code>, such as <code>alternate/Dark.ini</code>. The
                file name is the name users see. It can change any scheme setting and is applied after the theme's own
                schemes, which suits colours, transparency and spacing.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxarchive/archive.svg" alt="" width="48" height="48">
            <span class="guide-title">Packaged alternative</span>
            <span class="guide-text">A <code>.muxalt</code> archive in <code>alternate</code>, for variations that need
                different images, fonts, glyphs or several scheme files. It is unpacked into the theme when selected,
                so its paths start from the theme folder it replaces.</span>
        </div>
    </div>
</div>

## Extras

<div class="guide-paths" markdown="0">
    <div><code>active.txt</code><span>Holds the name of the alternative to use when the theme is first selected. It must
        match an <code>.ini</code> or <code>.muxalt</code> name in <code>alternate</code>.</span></div>
    <div><code>alternate/rgb/{name}/rgbconf.sh</code><span>A matching lighting setup, applied with that alternative on
        devices with lighting controls.</span></div>
</div>

Give every alternative a unique name, test each one at every resolution your theme supports, and keep a
`.muxalt` to only the files it actually replaces.
{: .note }
