---
layout: default
title: Torrents
permalink: /installation/torrents
nav_order: 5
parent: Installation
has_children: false
---

# <strong>Full Image Torrents</strong>

Below is an automatically generated list of available torrent files for MustardOS images. Please download
the correct image for your device. If in doubt, see the <a href="/devices">Supported Devices</a> page.

<a style="margin-top:0.5rem;" class="btn btn-primary fs-5 mb-4 mb-md-0 mr-2 text-grey-dk-300"
href="/assets/torrents/MustardOS_2601.1_FUNKY_JACARANDA_Torrents.zip">
Download All
</a>

{% assign torrents = site.static_files
| where_exp: "f", "f.path contains '/assets/torrents/'"
| where_exp: "f", "f.extname == '.torrent'"
| sort: "name"
%}

{% if torrents.size == 0 %}
<p>No torrent files found...</p>
{% endif %}

{% assign anbernic = "" | split: "" %}
{% assign trimui = "" | split: "" %}

{% for t in torrents %}
{% assign clean = t.name
| replace: 'MustardOS_', ''
| replace: '.torrent', ''
| replace: '_', ' '
%}

{% assign first_word = clean | split: " " | first | upcase %}
{% assign prefix2 = first_word | slice: 0, 2 %}
{% assign prefix3 = first_word | slice: 0, 3 %}

{% capture entry %}{{ clean }}|{{ t.path | relative_url }}{% endcapture %}

{% if prefix2 == "RG" %}
{% assign anbernic = anbernic | push: entry %}
{% elsif prefix3 == "TUI" %}
{% assign trimui = trimui | push: entry %}
{% endif %}
{% endfor %}

{% assign vendors = "Anbernic:anbernic, TrimUI:trimui" | split: "," %}

{% for v in vendors %}
{% assign pair = v | split: ":" %}
{% assign title = pair[0] %}
{% assign key = pair[1] %}

{% case key %}
{% when "anbernic" %}
{% assign group = anbernic %}
{% when "trimui" %}
{% assign group = trimui %}
{% endcase %}

{% if group and group.size > 0 %}

---

## <strong>{{ title }}</strong>

<table>
  <thead>
    <tr>
      <th style="text-align:left;">Device</th>
      <th style="text-align:left;">Release</th>
      <th style="text-align:left;">Build</th>
      <th style="text-align:left;">Download</th>
    </tr>
  </thead>
  <tbody>

{% for item in group %}
{% assign parts = item | split: "|" %}
{% assign clean = parts[0] %}
{% assign url = parts[1] %}

{% assign dash_parts = clean | split: "-" %}
{% assign build = dash_parts | last %}

{% assign left = clean | remove: "-" | split: build | first %}

{% assign words = left | split: " " %}
{% assign device = words[0] %}
{% assign version = words[1] %}
{% assign release_words = words | slice: 2, 10 %}

{% capture release_name %}
{% for w in release_words %}
{{ w | downcase | capitalize }}{% unless forloop.last %} {% endunless %}
{% endfor %}
{% endcapture %}

{% assign release_name = release_name | strip %}

  <tr>
    <td>{{ device }}</td>
    <td><a href="/release/current/2601_1">{{ version }} {{ release_name }}</a></td>
    <td><code>{{ build }}</code></td>
    <td><a href="{{ url }}">Download</a></td>
  </tr>

{% endfor %}

  </tbody>
</table>

{% endif %}
{% endfor %}
