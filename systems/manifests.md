---
layout: default
title: Core Assign Reference
permalink: /systems/manifests
parent: Systems
nav_enabled: true
nav_order: 2
has_children: false
---

# **Core Assign Reference**

MustardOS describes every system and the cores that can run it in one file, `core.json`, under
`/opt/muos/share/info/manifest`. Each system lists its Libretro cores, which run through Pickles or RetroArch, and its
External emulators, which include standalone emulators, engines, readers, media players and other launchers.

## User file

A custom `core.json` belongs in `MUOS/info/manifest` on user storage. MustardOS binds this directory to
`/run/muos/storage/info/manifest` while the system is running.

1. A readable user `core.json` containing a JSON object replaces the bundled file.
2. A missing or invalid user file falls back to the bundled file.

The user file replaces the bundled file completely, so it needs every system that should remain available. Files
named `libretro.json` or `external.json` from older releases are no longer read. MustardOS also generates `assign.json`
in the same directory to match folder names to systems; do not edit that generated file by hand.

[Open the Core Assign Editor]({{site.baseurl}}/tools/core-assign-editor){: .btn .btn-primary }

The editor runs locally, preserves fields it does not recognise, validates the common schema and downloads the result
without sending the file to a server. Start with the current bundled `core.json` so unchanged systems remain present.

## System object

```json
{
  "ScummVM": {
    "name": "ScummVM",
    "namespace": "Game Engine",
    "catalogue": "ScummVM",
    "lookup": 0,
    "default": "scummvm",
    "runtime": "external",
    "friendly": ["scummvm", "scumm"],
    "bios": [],
    "libretro": {
      "scummvm": {"name": "ScummVM", "core": "scummvm_libretro.so", "launcher": "scummvm.sh"}
    },
    "external": {
      "scummvm": {"name": "ScummVM", "core": "ext-scummvm", "launcher": "scummvm.sh"}
    }
  }
}
```

| Key | Required | Meaning |
|---|:---:|---|
| `name` | Yes | Name shown in the system picker. Falls back to the system key when empty. |
| `namespace` | Yes | Group shown before the system picker, such as `Nintendo` or `Early Consoles`. Every system should set one; a missing value falls back to a group named `Other`. |
| `catalogue` | Yes | Folder under `MUOS/info/catalogue` used for artwork and metadata. Falls back to the system key when unavailable. |
| `lookup` | Yes | `1` enables friendly content-name lookup for the assignment, `0` keeps filenames. |
| `default` | Yes | Core key used by automatic assignment. It is read from `external` when `runtime` is `external`, and from `libretro` otherwise. |
| `runtime` | No | Runtime that automatic assignment tries first: `pickles`, `retroarch` or `external`. Without it, Pickles is tried first, then RetroArch, then External. If the default core is not available on a device, the next runtime is used. |
| `friendly` | Yes | Normalised folder aliases used to build automatic assignments. |
| `bios` | Yes | BIOS filename and MD5 hash records. Use an empty array when no BIOS is listed. |
| `libretro` | One of | Libretro cores for Pickles and RetroArch, keyed by core key. |
| `external` | One of | External emulators, keyed by core key. |
| `governor` | No | System-level CPU governor used when a core does not set one. |
| `control` | No | System-level control profile used when a core does not set one. |
| `extra` | No | `1` hides the system from the Core Assignment system list unless Additional Cores is enabled in Advanced Settings. Folders are still assigned to it automatically. |

A system needs at least one core in `libretro` or `external`. The same core key may appear in both groups, as
`scummvm` does above, because the stored assignment prefix says which group it belongs to.

Friendly aliases must be unique after normalisation. Existing entries in the generated assignment index are kept
when a later alias collides.

## Libretro core object

Entries in the `libretro` group.

```json
"mgba": {
  "name": "mGBA",
  "core": "mgba_libretro.so",
  "bios_required": 0,
  "governor": "performance"
}
```

| Key | Required | Meaning |
|---|:---:|---|
| `name` | Yes | Name shown in Core Assignment. Falls back to the core key when empty. |
| `core` | Yes | Shared object filename installed under the Libretro core directory. |
| `bios_required` | No | `1` marks BIOS as required, `0` or an omitted key does not. |
| `extra` | No | `1` hides the core from Core Assignment unless Additional Cores is enabled in Advanced Settings. Content already assigned to it keeps working. |
| `launcher` | No | Special launch script. Libretro entries use `general.sh` when this is omitted. |
| `governor` | No | Core-level CPU governor. This takes priority over the system value. |
| `control` | No | Core-level control profile. This takes priority over the system value. |
| `prep` | No | Executable preparation step run before the launcher. |
| `done` | No | Executable cleanup step run after a successful launch. |

Stored Pickles assignments are prefixed with `mu-`. RetroArch assignments keep the core key without a prefix. The
prefix selects the player and is not part of the core key in the JSON file.

## External emulator object

Entries in the `external` group.

```json
"azahar - standalone": {
  "name": "Azahar - Standalone",
  "core": "ext-azahar",
  "launcher": "azahar.sh",
  "require": {
    "device": ["rg-vita-pro"]
  }
}
```

External entries require `name`, `core` and `launcher`. They also accept `bios_required`, `extra`, `governor`,
`control`, `prep` and `done`.

The optional `require` object limits visibility. Supported facts are:

| Fact | Values |
|---|---|
| `device` | One or more internal board names. |
| `arch` | One or more of `aarch64`, `arm32`, `x64` or `x86`. |

Each fact is an array. A core is shown when the current device matches one of the values for every recognised fact.
External stored assignments use the `ext-` prefix.

## Launcher resolution

Launch scripts are searched in `/opt/muos/script/launch` first, followed by the shared launch directory. Runtime
prefixes are added automatically: `mu-` for Pickles, `lr-` for RetroArch and `ext-` for external launchers.

Content can override the selected launcher. Override priority is content, core, directory, then the `core.json`
launcher. The launch process also applies governor, control, display, audio and visual runtime files before starting
content, then restores the device state when the launcher returns.

## Safe editing checklist

- Keep system keys and core keys stable after release. Assignments store these identifiers.
- Keep `default` pointed at a core in the group that `runtime` selects.
- Use exact BIOS filenames and 32-character MD5 hashes.
- Give every external entry a resolvable launcher.
- Regenerate the assignment index and catalogue directories after changing system aliases or catalogue names.
- Install the finished file as `MUOS/info/manifest/core.json`, then restart the device.
- Test automatic assignment, manual assignment, Pickles, RetroArch and external launch cleanup on a device.
