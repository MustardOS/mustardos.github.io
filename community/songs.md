---
layout: default
title: Release Songs
permalink: /community/songs
nav_enabled: true
nav_order: 2
has_toc: false
---

# **Release Songs**

Every MustardOS release has its own song, voted for by our supporters when the release comes out. Put one on while you
play, and if you would like a say in the next one, consider [supporting the project]({{site.baseurl}}/docs/support).

{%- assign sortable = "" | split: "" -%}
{%- for item in site.data.releases -%}
{%- assign rel = item[1] -%}
{%- assign parts = rel.ver | split: "." -%}
{%- assign major = parts[0] | plus: 0 -%}
{%- assign minor = parts[1] | default: 0 | plus: 0 -%}
{%- assign key = major | times: 1000 | plus: minor -%}
{%- capture entry -%}{{ key | prepend: "000000" | slice: -6, 6 }}::{{ item[0] }}{%- endcapture -%}
{%- assign sortable = sortable | push: entry -%}
{%- endfor -%}
{%- assign sorted = sortable | sort | reverse %}

<table class="release-songs">
    <thead>
    <tr>
        <th style="text-align:left;">Release</th>
        <th style="text-align:left;">Song</th>
        <th style="text-align:left;">Listen</th>
    </tr>
    </thead>
    <tbody>
    {%- for entry in sorted -%}
    {%- assign file = entry | split: "::" | last -%}
    {%- assign rel = site.data.releases[file] -%}
    {%- assign song = site.data.release_songs[file] %}
    <tr>
        <td><a href="{{ '/release/' | append: rel.type | append: '/' | append: file | relative_url }}">{{ rel.ver }} {{ rel.code }}</a></td>
        {%- if song and song.song != "" %}
        <td>{{ song.song }}{% if song.artist != "" %} <span class="release-song-artist">by {{ song.artist }}</span>{% endif %}</td>
        {%- else %}
        <td><em>Coming soon</em></td>
        {%- endif %}
        {%- if song and song.youtube != "" %}
        <td><a href="{{ song.youtube }}" target="_blank" rel="noopener">YouTube</a></td>
        {%- else %}
        <td></td>
        {%- endif %}
    </tr>
    {%- endfor %}
    </tbody>
</table>
