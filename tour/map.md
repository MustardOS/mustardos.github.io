---
layout: default
title: Tour Map
permalink: /tour/map
parent: Grand Tour
nav_order: 0
has_toc: false
map_icons:
  MustardOS Frontend: muxlaunch/explore
  Pickles Menu: muxretro/settings
  Wasabi Menu: muxmedia/video
  Installer: muxinstall/install
  Mustard Terminal: muxterm/terminal
---

# <strong>Tour Map</strong>

Every stop on the Grand Tour on a single page. Open a group to see how its screens are laid out, or type into the
filter to find a screen by name and jump straight to it.

<div class="tour-map-tools">
    <input class="tour-map-filter" id="tour-map-filter" type="search" placeholder="Filter screens" aria-label="Filter screens">
    <button type="button" class="feature-refresh" id="tour-map-expand">Expand All</button>
    <button type="button" class="feature-refresh" id="tour-map-collapse">Collapse All</button>
</div>

<p class="tour-map-empty" id="tour-map-empty" hidden>No screens match that filter.</p>

<div class="tour-map" id="tour-map-tree">
{%- assign map_roots = site.pages | where: "parent", "Grand Tour" | sort: "nav_order", "last" -%}
{%- for map_root in map_roots -%}
{%- unless map_root.url contains "/tour/modules/" -%}{%- continue -%}{%- endunless -%}
<details class="tour-map-group">
    <summary>
        {%- assign map_icon = page.map_icons[map_root.title] -%}
        {%- if map_icon -%}
        <img src="/tour/assets/glyphs/{{ map_icon }}.svg" alt="" width="32" height="32">
        {%- endif -%}
        <span>{{ map_root.title }}</span>
    </summary>
    <p class="tour-map-root"><a href="{{ map_root.url }}">Open {{ map_root.title }}</a></p>
    {%- include tour_map.html node=map_root menu=map_root.title -%}
</details>
{%- endfor -%}
</div>

<script src="/assets/js/tour-map.js"></script>
