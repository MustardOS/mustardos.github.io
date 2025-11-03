---
layout: default
title: Releases
permalink: /release
nav_enabled: true
nav_order: 1
has_children: true
has_toc: false
---

# **MustardOS Releases**

{% assign all_releases = "" | split: "" %}
{% for item in site.data.releases %}
{% assign release = item[1] %}
{% assign all_releases = all_releases | push: release %}
{% endfor %}

{%- assign current = all_releases | where: "type", "current" | sort: "ver" | reverse -%}
{%- assign progress = all_releases | where: "type", "progress" | sort: "ver" | reverse -%}
{%- assign archive = all_releases | where: "type", "archive" | sort: "ver" | reverse -%}

## **Current**

{% if current and current.size > 0 %}
{% for rel in current %}
- [{{ rel.ver }} {{ rel.code }}](/release/current/{{ rel.ver | replace: '.', '_' }})
  {% endfor %}
  {% else %}
  _No current releases available._
  {% endif %}

## **In Progress**

{% if progress and progress.size > 0 %}
{% for rel in progress %}
- [{{ rel.ver }} {{ rel.code }}](/release/progress/{{ rel.ver | replace: '.', '_' }})
  {% endfor %}
  {% else %}
  _No progress releases available._
  {% endif %}

## **Archive**

{% if archive and archive.size > 0 %}
{% for rel in archive %}
- [{{ rel.ver }} {{ rel.code }}](/release/archive/{{ rel.ver | replace: '.', '_' }})
  {% endfor %}
  {% else %}
  _No archived releases available._
  {% endif %}
