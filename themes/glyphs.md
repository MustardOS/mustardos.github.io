---
layout: default
title: Glyph Gallery
permalink: /themes/glyphs
parent: Editors and Tools
nav_order: 8
has_toc: false
---

# **Glyph Gallery**

Every glyph the bundled MustardOS theme provides, grouped by the folder it lives in under `glyph/` in a theme. Each
glyph shows where it appears in the Grand Tour. Glyphs a theme leaves out fall back to the bundled theme, so you only
need to draw the ones you want to change.

{%- assign glyph_files = site.static_files | where_exp: "file", "file.path contains '/tour/assets/glyphs/'" -%}
{%- assign tour_pages = site.pages | where: "layout", "module" -%}

<script id="glyph-data" type="application/json">
{
    "files": [
        {%- for file in glyph_files -%}
        {%- if file.extname == ".svg" -%}
        {{ file.path | remove_first: "/tour/assets/glyphs/" | remove: ".svg" | jsonify }},
        {%- endif -%}
        {%- endfor -%}
        null
    ],
    "usage": [
        {%- for page in tour_pages -%}
        {%- assign modset = site.data.modules[page.module] -%}
        {%- if modset and page.glyph -%}
        {%- for item in modset.visible -%}{%- if item.icon -%}
        {"g": {{ page.glyph | jsonify }}, "i": {{ item.icon | jsonify }}, "n": {{ item.name | jsonify }}, "t": {{ page.title | jsonify }}, "u": {{ page.url | jsonify }}},
        {%- endif -%}{%- endfor -%}
        {%- for item in modset.settings -%}{%- if item.icon -%}
        {"g": {{ page.glyph | jsonify }}, "i": {{ item.icon | jsonify }}, "n": {{ item.name | jsonify }}, "t": {{ page.title | jsonify }}, "u": {{ page.url | jsonify }}},
        {%- endif -%}{%- endfor -%}
        {%- for section in modset.sections -%}{%- for item in section.items -%}{%- if item.icon -%}
        {"g": {{ page.glyph | jsonify }}, "i": {{ item.icon | jsonify }}, "n": {{ item.name | jsonify }}, "t": {{ page.title | jsonify }}, "u": {{ page.url | jsonify }}},
        {%- endif -%}{%- endfor -%}{%- endfor -%}
        {%- endif -%}
        {%- endfor -%}
        null
    ]
}
</script>

<div class="tool" id="glyph-tool">
    <div class="controls glyph-controls">
        <label><span>Filter glyphs</span>
            <input id="glyph-filter" type="search" autocomplete="off" placeholder="Glyph, folder or setting name">
        </label>
        <label><span>Folder</span>
            <select id="glyph-folder"><option value="">All folders</option></select>
        </label>
        <label class="bios-toggle"><input id="glyph-unused" type="checkbox"> <span>Only glyphs not shown in the tour</span></label>
    </div>
    <p id="glyph-count" class="help" role="status" aria-live="polite"></p>
    <div id="glyph-groups"></div>
    <section class="panel" id="glyph-missing-panel" hidden>
        <h2>Referenced without artwork</h2>
        <p class="help">The Grand Tour names these glyphs, but the bundled theme has no file for them yet.</p>
        <ul id="glyph-missing" class="glyph-missing"></ul>
    </section>
</div>

<script src="{{ site.baseurl }}/assets/js/glyph-gallery.js"></script>
