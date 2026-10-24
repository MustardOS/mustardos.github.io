---
title: Theme Assets
layout: default
permalink: /themes/assets
parent: Themes
nav_order: 6
has_toc: false
---

# **Theme Assets**

A theme can bring matching artwork with it, such as folder and application tiles. Put those files in an optional
`assets.muxzip` in the theme root, and they are installed when the theme is selected.

## Example

```
catalogue
├── Application
│   └── grid
│       ├── app.png
│       └── 1280x720
│           └── app.png
└── Folder
    └── grid
        ├── default.png
        ├── default_focused.png
        └── Nintendo Game Boy Advance.png
```

## How artwork is matched

<div class="guide-paths" markdown="0">
    <div><code>Applications</code><span>Use the application's icon name.</span></div>
    <div><code>Collections</code><span>Use the collection's name.</span></div>
    <div><code>Explore Content</code><span>Uses the folder name first, then the catalogue name of the system assigned to
        it.</span></div>
    <div><code>default.png</code><span>The tile used when nothing more specific exists.</span></div>
    <div><code>{name}_focused.png</code><span>A highlight layer for one item. <code>default_focused.png</code> is the
        shared highlight layer.</span></div>
</div>

Artwork in a resolution folder is checked before the main `grid` folder.

## Packaging

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Zip the folders</strong>Make a normal ZIP of the data folders, such as
        <code>catalogue</code>.</div>
    <div class="guide-step"><strong>No outer folder</strong>Zip the contents themselves, with no folder around
        them.</div>
    <div class="guide-step"><strong>Rename it</strong>Name the file <code>assets.muxzip</code> and put it in the theme
        root.</div>
</div>

Only include files that belong to your theme, so selecting it never replaces anything else the user has.
{: .warning }

[Catalogue]({{site.baseurl}}/installation/catalogue) covers every kind of artwork and how it is looked up.
