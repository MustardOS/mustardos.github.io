#!/bin/sh
# Copies core.json and the core versions from the internal repository for the systems and BIOS pages

set -eu

INTERNAL=${1:-../internal}
SOURCE="$INTERNAL/share/info/manifest"
INFO="$INTERNAL/share/emulator/retroarch/info"
TARGET="$(dirname "$0")/../_data/core_manifest"
VERSIONS="$(dirname "$0")/../_data/core_versions.json"

[ -d "$SOURCE" ] || {
	printf 'Manifest folder not found: %s\n' "$SOURCE" >&2
	exit 1
}

mkdir -p "$TARGET"
cp "$SOURCE/core.json" "$TARGET/"
printf 'Copied core.json from %s\n' "$SOURCE"

[ -d "$INFO" ] || {
	printf 'Core info folder not found: %s\n' "$INFO" >&2
	exit 1
}

{
	printf '{\n'
	FIRST=1
	for FILE in "$INFO"/*_libretro.info; do
		[ -f "$FILE" ] || continue
		VER=$(sed -n 's/^display_version[[:space:]]*=[[:space:]]*"\(.*\)"[[:space:]]*$/\1/p' "$FILE" | head -n 1)
		VER=${VER#[Vv]}
		case "$VER" in "" | [Gg][Ii][Tt] | [Ss][Vv][Nn]) continue ;; esac
		VER=$(printf '%s' "$VER" | sed 's/\\/\\\\/g; s/"/\\"/g')
		[ "$FIRST" -eq 1 ] || printf ',\n'
		FIRST=0
		printf '  "%s": "%s"' "$(basename "$FILE" .info)" "$VER"
	done
	printf '\n}\n'
} >"$VERSIONS"
printf 'Wrote core versions to %s\n' "$VERSIONS"
