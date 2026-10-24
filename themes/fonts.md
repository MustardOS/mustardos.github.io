---
title: Custom Fonts
layout: default
permalink: /themes/fonts
parent: Themes
nav_order: 3
has_toc: false
---

# **Custom Fonts**

Themes can use their own TrueType (`.ttf`) fonts. Put them in the `font` folder in the theme root, or in a resolution
folder for a version made for one screen size.

## Where fonts go

<div class="guide-paths" markdown="0">
    <div><code>font/default.ttf</code><span>The main font for lists and the interface.</span></div>
    <div><code>font/{module}.ttf</code><span>The main font for one screen.</span></div>
    <div><code>font/header/default.ttf</code><span>The header font.</span></div>
    <div><code>font/footer/default.ttf</code><span>The footer font.</span></div>
    <div><code>font/panel/default.ttf</code><span>The font for grid panels.</span></div>
    <div><code>font/{area}/{module}.ttf</code><span>A header, footer or panel font for one screen.</span></div>
</div>

For example, `font/header/muxlaunch.ttf` is used for the Main Menu header, and
`640x480/font/header/muxlaunch.ttf` does the same at 640x480 only.

## Fonts for a language

Put language-specific fonts in `font/{language}`, keeping the rest of the path the same:

```
font/{language}/default.ttf
font/{language}/header/default.ttf
font/{language}/footer/default.ttf
font/{language}/panel/default.ttf
```

Screens in grid mode can also use the `grid` path the frontend recognises. Keep a general fallback font when a theme
covers several languages or layouts.

## How a font is chosen

MustardOS looks in the resolution folder first, then the theme root. In each place it tries these in order:

<div class="guide-steps four" markdown="0">
    <div class="guide-step"><strong>Language</strong>A font for the active language.</div>
    <div class="guide-step"><strong>Area</strong>A font for the header, footer or panel being drawn.</div>
    <div class="guide-step"><strong>Screen</strong>A font named after the current screen.</div>
    <div class="guide-step"><strong>Default</strong><code>default.ttf</code>.</div>
</div>

If nothing matches, the bundled interface font is used.

Font sizes and padding are set in the `[font]` section of the [scheme reference]({{site.baseurl}}/themes/scheme#section-font).
A user's own Font Settings always take priority over the theme.
{: .note }
