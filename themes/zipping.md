---
title: Finishing Your Theme
layout: default
permalink: /themes/finish
parent: Themes
nav_order: 7
has_toc: false
---

# **Finishing Your Theme**

Three things turn a folder of files into a theme people can install: a preview, some details about it, and the
package itself.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Add a preview</strong>A picture of the theme for the Theme Picker.</div>
    <div class="guide-step"><strong>Add the details</strong>Its name, version and credits.</div>
    <div class="guide-step"><strong>Package it</strong>Zip it up as a <code>.muxthm</code> file.</div>
</div>

## Preview

Take a screenshot with **Menu + Power**, or make an image about 45 per cent of the screen's size. Name it `preview.png`
and put it in the matching resolution folder. Add a preview for each resolution that looks different.

## Details

<div class="guide-paths" markdown="0">
    <div><code>name.txt</code><span>A clear name for the theme.</span></div>
    <div><code>version.txt</code><span>Its version.</span></div>
    <div><code>credits.txt</code><span>Everyone whose artwork, fonts, sounds or code is included.</span></div>
    <div><code>active.txt</code><span>The first alternative to use, if the theme has any.</span></div>
</div>

## Package

<div class="guide-steps four" markdown="0">
    <div class="guide-step"><strong>Select the contents</strong>Pick the details files and the <code>scheme</code>,
        <code>font</code>, <code>glyph</code>, <code>image</code>, <code>sound</code>, <code>alternate</code> and
        resolution folders you use.</div>
    <div class="guide-step"><strong>Zip them</strong>Make a ZIP of those items directly, with no folder around
        them.</div>
    <div class="guide-step"><strong>Rename it</strong>Change the extension to <code>.muxthm</code>.</div>
    <div class="guide-step"><strong>Try it</strong>Copy it to <code>ARCHIVE</code>, install it with Archive Manager and
        select it in Theme Picker.</div>
</div>

## Before you share it

Check each of these on the device:

<div class="guide-tags" markdown="0">
    <span>Every resolution you support</span><span>Each navigation mode</span><span>Dialogues</span>
    <span>Help panels</span><span>Long translated labels</span><span>Empty lists</span><span>Hidden glyphs</span>
    <span>Static wallpaper fallback</span><span>Video wallpaper fallback</span>
</div>

Also confirm that everything the theme installs can be removed or replaced cleanly.
