---
title: Images and Video
layout: default
permalink: /themes/images
parent: Themes
nav_order: 2
has_toc: false
---

# **Images and Video**

Wallpapers, artwork and video bring a theme to life. Use vector artwork where you can, and export other artwork at the
size of the screen it is for.

## Supported files

<div class="guide-paths" markdown="0">
    <div><code>Boot logo</code><span>24-bit true colour <code>.bmp</code></span></div>
    <div><code>Wallpapers and overlays</code><span><code>.png</code> or <code>.svg</code></span></div>
    <div><code>Video wallpaper</code><span><code>.mp4</code></span></div>
    <div><code>Glyphs</code><span><code>.svg</code>, <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>,
        <code>.webp</code>, <code>.qoi</code>, <code>.tga</code>, <code>.gif</code>, <code>.bmp</code> or <code>.pcx</code></span></div>
    <div><code>Static and catalogue artwork</code><span>The same formats as glyphs, where the image loader supports
        them.</span></div>
</div>

If several glyph files share a name, MustardOS uses the first format in the order above. SVG keeps glyphs sharp at every
resolution.
{: .note }

<div class="guide" markdown="0">
    <h2 class="guide-heading">Wallpapers</h2>

    <div class="guide-grid">
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxcustom/backgroundscale.svg" alt="" width="48" height="48">
            <span class="guide-title">Static wallpaper</span>
            <span class="guide-text">Put <code>default.png</code> or <code>default.svg</code> in <code>image/wall</code>
                for every screen, and <code>{module}.png</code> or <code>{module}.svg</code> for a single screen.
                Artwork for one resolution goes in <code>{resolution}/image/wall</code>.</span>
        </div>
        <div class="guide-card">
            <img src="/tour/assets/glyphs/muxcustom/videowallpaper.svg" alt="" width="48" height="48">
            <span class="guide-title">Video wallpaper</span>
            <span class="guide-text">Use <code>image/wall/{module}.mp4</code> for a screen, and
                <code>image/background.mp4</code> for every other screen. Users turn it on with Video Wallpaper in
                Configuration &gt; Customisation.</span>
        </div>
    </div>
</div>

Keep a static wallpaper even when you supply video. It is shown when video is turned off, cannot play, or a screen has
no video of its own.

## Static artwork

Static artwork is drawn over a screen from `image/static/{module}`. A screen can also show artwork for one item, such as
`image/static/muxlaunch/explore.png`. The scheme decides where it sits and how transparent it is, alongside the lists,
header and panels.

[Theme Structure]({{site.baseurl}}/themes/structure) explains how resolution folders fall back to the theme root, and
[Scheme Files]({{site.baseurl}}/themes/scheme) covers placement, alignment, transparency and layout.
