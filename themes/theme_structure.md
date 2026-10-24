---
title: Theme Structure
layout: default
permalink: /themes/structure
parent: Themes
nav_order: 1
has_toc: false
---

# **Theme Structure**

A theme is a folder of files. Shared files live in its root, and you only add a resolution folder when a particular
screen size needs something different. A small theme can be as little as one scheme, a wallpaper and a few glyphs.

## How MustardOS finds a file

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Resolution folder</strong>It looks in the folder for the device's resolution first,
        such as <code>1920x1080</code>.</div>
    <div class="guide-step"><strong>Theme root</strong>If the file is not there, it uses the copy in the theme root.</div>
    <div class="guide-step"><strong>Bundled theme</strong>Anything your theme leaves out comes from the bundled MustardOS
        theme.</div>
</div>

Resolution folders can be named:

<div class="guide-tags" markdown="0">
    <span>640x480</span><span>720x480</span><span>720x576</span><span>720x720</span><span>1024x768</span>
    <span>1280x720</span><span>1920x1080</span>
</div>

## What goes in a theme

<div class="guide-paths" markdown="0">
    <div><code>scheme</code><span>Colours, sizes and layout, globally, by default and for each screen.
        <a href="/themes/scheme">Scheme Files</a></span></div>
    <div><code>font</code><span>TrueType fonts for the whole theme, a screen, a language or an area of the screen.
        <a href="/themes/fonts">Custom Fonts</a></span></div>
    <div><code>glyph</code><span>Icons for lists, the header, the footer, status and navigation.
        <a href="/themes/glyphs">Glyph Gallery</a></span></div>
    <div><code>image/wall</code><span>Wallpapers, shared or for a single screen.
        <a href="/themes/images">Images and Video</a></span></div>
    <div><code>image/static</code><span>Artwork drawn over a screen, or shown for one list item.</span></div>
    <div><code>alternate</code><span>Selectable variations of the theme.
        <a href="/themes/alternative">Theme Alternatives</a></span></div>
    <div><code>sound</code><span>Interface sounds supplied by the theme.</span></div>
</div>

A theme root can also hold these files:

<div class="guide-paths" markdown="0">
    <div><code>name.txt</code><span>The theme's name.</span></div>
    <div><code>version.txt</code><span>The theme's version.</span></div>
    <div><code>credits.txt</code><span>Who made it.</span></div>
    <div><code>active.txt</code><span>Which alternative is selected when the theme is first used.</span></div>
    <div><code>assets.muxzip</code><span>Extra files, such as matching catalogue artwork, installed when the theme is
        selected. <a href="/themes/assets">Theme Assets</a></span></div>
</div>

Here is a fuller example. Only include the folders and files your theme needs.

```
.
├── name.txt
├── version.txt
├── credits.txt
├── active.txt
├── assets.muxzip
├── alternate
│   ├── Dark.ini
│   ├── Light.muxalt
│   └── rgb
│       └── Dark
│           └── rgbconf.sh
├── font
│   ├── default.ttf
│   ├── header
│   │   └── default.ttf
│   ├── footer
│   │   └── default.ttf
│   └── panel
│       └── default.ttf
├── glyph
│   └── muxlaunch
│       ├── explore.svg
│       └── config.svg
├── image
│   ├── background.mp4
│   ├── static
│   │   └── muxlaunch
│   │       └── explore.png
│   └── wall
│       ├── default.png
│       └── muxlaunch.png
├── scheme
│   ├── global.ini
│   ├── default.ini
│   └── muxlaunch.ini
├── sound
└── 1920x1080
    ├── font
    ├── glyph
    ├── image
    └── scheme
```

## Files for one screen

Each screen has a module name, shown in its [Grand Tour]({{site.baseurl}}/tour) page address. Name a file after the
module to use it only on that screen, and use `default` for everything without its own file.

<div class="guide-paths" markdown="0">
    <div><code>muxlaunch</code><span>Main Menu</span></div>
    <div><code>muxplore</code><span>Explore Content</span></div>
    <div><code>muxconfig</code><span>Configuration</span></div>
    <div><code>muxcustom</code><span>Customisation</span></div>
    <div><code>muxretro</code><span>Pickles</span></div>
</div>

Use the same name everywhere:

```
scheme/muxlaunch.ini
font/muxlaunch.ttf
glyph/muxlaunch/explore.svg
image/wall/muxlaunch.png
image/static/muxlaunch/explore.png
```

Files for a single list item use that item's internal glyph or content name.

## How schemes are layered

Each layer is applied in order, and later layers win:

<div class="guide-steps five" markdown="0">
    <div class="guide-step"><strong>Global</strong>The root <code>scheme/global.ini</code>.</div>
    <div class="guide-step"><strong>Default</strong><code>scheme/default.ini</code>, from the resolution folder or root.</div>
    <div class="guide-step"><strong>Screen</strong><code>scheme/{module}.ini</code>, from the resolution folder or root.</div>
    <div class="guide-step"><strong>Alternative</strong>The alternative the user selected.</div>
    <div class="guide-step"><strong>User override</strong>The user's own <code>MUOS/theme/override/{module}.ini</code>.</div>
</div>

[Scheme Files]({{site.baseurl}}/themes/scheme) lists every supported setting.

Use the bundled MustardOS theme as the reference for glyph names. Missing glyphs fall back to the bundled theme, so set
a glyph's alpha to zero in the scheme when it should stay hidden.
{: .note }
