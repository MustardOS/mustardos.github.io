#!/usr/bin/env python3
"""Copies the settings profile schema and the built-in accessibility profiles for the Profile Builder tool."""

import json
import os
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
FRONTEND = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "..", "frontend")
INTERNAL = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "..", "internal")

SCHEMA = os.path.join(FRONTEND, "common", "generated", "profile_schema.json")
BUILTIN = os.path.join(INTERNAL, "share", "profile", "accessibility")
TARGET = os.path.join(ROOT, "assets", "data", "profile-schema.json")


def read_profile(path):
    header = {}
    settings = {}
    with open(path, encoding="utf-8") as handle:
        for line in handle:
            line = line.rstrip("\r\n")
            if not line or line.lstrip().startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            if "/" in key:
                settings[key] = value
            else:
                header[key] = value
    return {
        "file": os.path.basename(path),
        "name": header.get("name", os.path.basename(path)),
        "description": header.get("description", ""),
        "settings": settings,
    }


def main():
    if not os.path.exists(SCHEMA):
        sys.exit(f"Profile schema not found: {SCHEMA} (run ./build.sh generate in the frontend first)")

    with open(SCHEMA, encoding="utf-8") as handle:
        schema = json.load(handle)

    builtin = []
    if os.path.isdir(BUILTIN):
        for name in sorted(os.listdir(BUILTIN)):
            if name.endswith(".conf"):
                builtin.append(read_profile(os.path.join(BUILTIN, name)))
    schema["builtin"] = builtin

    os.makedirs(os.path.dirname(TARGET), exist_ok=True)
    with open(TARGET, "w", encoding="utf-8") as handle:
        json.dump(schema, handle, separators=(",", ":"), ensure_ascii=False)
        handle.write("\n")

    print(f"Wrote {len(schema['settings'])} settings and {len(builtin)} built-in profiles to {TARGET}")


if __name__ == "__main__":
    main()
