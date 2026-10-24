#!/usr/bin/env python3
# Builds _data/theme_scheme.json from the frontend theme loader for the Theme Validator

import json
import pathlib
import re
import sys

frontend = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "../frontend")
source = (frontend / "common/display/theme.c").read_text()
entries = re.findall(r'\{"([a-z_0-9]+)", "([A-Z0-9_]+)", THEME_OFF\([^)]*\), theme_(\w+)', source)
if not entries:
    sys.exit("No scheme keys found in common/display/theme.c")

for kind, section, key in re.findall(r'get_ini_(int|hex|string)\(\s*\w+,\s*"([a-z_0-9]+)",\s*"([A-Z0-9_]+)"', source):
    entries.append((section, key, "str" if kind == "string" else kind))

scheme = {}
for section, key, kind in entries:
    scheme.setdefault(section, {})[key] = kind

# Hidden screens stay off the website
hidden = {"muxarc"}
modules = sorted(({path.stem for path in (frontend / "module").glob("mux*.c")} - hidden) | {"muxretro", "muxmedia", "muxterm"})

target = pathlib.Path(__file__).resolve().parent.parent / "_data/theme_scheme.json"
target.write_text(json.dumps({"scheme": scheme, "modules": modules}, indent=1, sort_keys=True) + "\n")
print(f"Wrote {len(entries)} keys in {len(scheme)} sections and {len(modules)} modules to {target}")
