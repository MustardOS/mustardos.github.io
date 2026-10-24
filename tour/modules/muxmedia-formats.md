---
layout: default
title: Supported Formats
glyph: muxmedia
card_icon: muxmedia/video
card_desc: Every video and audio file type Wasabi recognises, with the common ones up front.
permalink: /tour/modules/muxmedia-formats
parent: Wasabi Menu
nav_order: 5
has_toc: false
---

{%- assign formats = site.data.wasabi_formats -%}

# <strong>Supported Formats</strong>

Wasabi recognises the file types below by their extension, in any letter case. Assign Wasabi to the folders that hold
your media through Core Assignment, and anything matching these extensions appears ready to play. Every extension is
only listed once it has a decoder built into Wasabi.

<hr>

<h2 class="format-heading"><img src="/tour/assets/glyphs/muxmedia/video.svg" alt="" width="28" height="28"><strong>Video</strong></h2>

<p>The most common video formats are below. Hover over or select an extension to see what Wasabi can do with it.</p>

<div class="format-chips common">
    {%- for ext in formats.video.common -%}{% include format_chip.html ext=ext group="Video" caps=formats.video.caps notes=formats.video.notes %}{%- endfor -%}
</div>

<details class="format-all">
    <summary>All {{ formats.video.all.size }} video formats</summary>
    <div class="format-chips">
        {%- for ext in formats.video.all -%}{% include format_chip.html ext=ext group="Video" caps=formats.video.caps notes=formats.video.notes %}{%- endfor -%}
    </div>
</details>

<hr>

<h2 class="format-heading"><img src="/tour/assets/glyphs/muxmedia/audio.svg" alt="" width="28" height="28"><strong>Audio</strong></h2>

<p>
    The most common audio formats are listed first. Wasabi recognises {{ formats.audio.all.size }} audio formats in
    total, grouped below by the kind of music they hold.
</p>

<div class="format-chips common">
    {%- for ext in formats.audio.common -%}
    {%- for family in formats.audio.families -%}
    {%- if family.extensions contains ext -%}{% include format_chip.html ext=ext group=family.name caps=family.caps notes=family.notes %}{%- endif -%}
    {%- endfor -%}
    {%- endfor -%}
</div>

{%- for family in formats.audio.families %}
<details class="format-all">
    <summary>{{ family.name }} ({{ family.extensions.size }})</summary>
    <p>{{ family.desc }}</p>
    <div class="format-chips">
        {%- for ext in family.extensions -%}{% include format_chip.html ext=ext group=family.name caps=family.caps notes=family.notes %}{%- endfor -%}
    </div>
</details>
{%- endfor %}

<hr>

<h2><strong>Quick Tips</strong></h2>

- MIDI files (`.mid`, `.midi`, `.kar`, and `.rmi`) are played with the soundfont chosen in
  **[Soundfont](/tour/modules/muxsoundfont)**, so the same tune can sound quite different depending on which one you pick.
- Chiptune, SID, and game music files that hold several songs list them as Tracks, so you can pick a song or let them
  play in order. A single song can also be opened directly, or added to a playlist, by adding `#` and its number to the
  path, such as `Commando.sid#3`.
- SID song lengths come from an HVSC `Songlengths.md5` placed beside your tunes or in a `DOCUMENTS` folder above
  them. Without one, each song plays for three minutes.
- Looping game music plays its loop twice and then fades out, and chiptunes without a stored length fade out once
  their loop has played.
- Seeking in a SID tune replays it up to the new position, so long jumps take a moment, and SID files always start
  from the beginning, even when opened from History.
- When two unrelated formats share an extension, Wasabi checks the file itself. A `.dsf` file only plays when it holds
  DSD audio, and a CRI `.awb` sound bank is handled separately from an AMR-WB `.awb` recording.
- Playlists (`.m3u`, `.m3u8`, `.pls`, and `.json`) open as Tracks, Episodes, or Channels. See
  **[Playlists](/tour/modules/muxmedia-playlists)** for how each is presented.
- A recognised extension means Wasabi will offer to play the file. Unusual codecs inside a familiar container can
  still fail to decode.

<script>
document.querySelectorAll(".format-chip").forEach((chip) => {
    const place = () => {
        const box = chip.closest(".format-chips").getBoundingClientRect();
        const own = chip.getBoundingClientRect();
        chip.classList.toggle("flip", own.left - box.left > box.width / 2);
    };
    chip.addEventListener("mouseenter", place);
    chip.addEventListener("focus", place);
});
</script>
