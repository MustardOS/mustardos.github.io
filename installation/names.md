---
layout: default
title: Friendly Names and Tags
permalink: /installation/names
nav_order: 11
parent: Installation
has_children: false
---

# **Friendly Names and Tags**

MustardOS can replace technical folder and file names with friendlier labels without renaming the original content.
The files live under `MUOS/info/name` on user storage. MustardOS checks USB storage, SD2 and SD1 in that order, then
uses its bundled information when no user file is available.

[Open the Name Lookup Editor]({{site.baseurl}}/tools/name-lookup-editor){: .btn .btn-primary }

The editor runs entirely in your browser. It can create or update the JSON formats on this page and downloads the
finished file to your computer.

## Friendly folders

`folder.json` maps the real folder name to the label shown in Explore Content. Keys are lowercase.

```json
{
  "nintendo entertainment system": "Nintendo Entertainment System",
  "sfc": "Super Nintendo Entertainment System"
}
```

Friendly folder display must also be enabled in the frontend settings.

## Global game names

`global.json` maps a content filename to its displayed name. Remove the final file extension and make the key
lowercase.

```json
{
  "f-zero - maximum velocity (usa, europe)": "F-Zero: Maximum Velocity"
}
```

## Names for one content folder

A folder-specific lookup uses the ROM folder's exact basename as its JSON filename. Content in `ROMS/GBA`, for
example, uses `GBA.json`. Its entries follow the same lowercase, extension-free key format as `global.json`.

When a folder-specific file exists, MustardOS uses it for that directory and ignores `global.json` there. A missing
entry can still use MustardOS' internal catalogue lookup before falling back to the original
filename.

## Tags

`tag.txt` is a plain-text list with one tag on each line. Tags are available when organising content collections.
This format does not require JSON, so it is best edited with an ordinary text editor.

## Safe editing

- Keep each JSON file as one flat object containing string keys and string values.
- Avoid duplicate keys; the final duplicate silently wins in many JSON readers.
- Save files as UTF-8.
- Keep a copy of your working file before replacing it on storage.
- Restart the frontend after changing lookup files so every list is rebuilt consistently.
