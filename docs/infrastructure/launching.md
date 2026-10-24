---
layout: default
title: Frontend and Launching
parent: How MustardOS Works
permalink: /docs/infrastructure/launching
nav_order: 4
---

# **Frontend and Launching**

## Frontend modules

The frontend is a collection of small programs that share display, input, configuration and storage libraries. Each
screen is a module whose name starts with `mux`:

<div class="guide-paths" markdown="0">
    <div><code>muxlaunch</code><span>The Main Menu.</span></div>
    <div><code>muxplore</code><span>Explore Content.</span></div>
    <div><code>muxconfig</code><span>Configuration.</span></div>
</div>

Themes use the active module name to pick a screen specific scheme, wallpaper, static image, font and glyph set. The
[Grand Tour]({{site.baseurl}}/tour) documents every visible module and its controls, and
[Theme Structure]({{site.baseurl}}/themes/structure) explains how module names map to theme assets.

## Content and core assignment

Explore Content finds content on mounted storage. Core Assignment connects a file or folder to a system and a way to
launch it. The system manifests provide the available Pickles, RetroArch and external choices, along with the
catalogue name, folder aliases, BIOS records and optional performance or control settings.

## What happens when you launch

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Resolve settings</strong>Content and folder specific settings are worked out.</div>
    <div class="guide-step"><strong>Prepare</strong>The short-lived runtime state is written.</div>
    <div class="guide-step"><strong>Choose the player</strong>The assigned launcher is selected.</div>
    <div class="guide-step"><strong>Track</strong>Activity tracking starts when it is enabled.</div>
    <div class="guide-step"><strong>Play</strong>The content is handed to the selected player.</div>
    <div class="guide-step"><strong>Clean up</strong>The governor, controls, display mode, audio route and LEDs are restored.</div>
</div>

[Core Assignment]({{site.baseurl}}/systems/cores) covers this from the user side, and the
[Core Assign Reference]({{site.baseurl}}/systems/manifests) covers the developer schema and how launches are resolved.
