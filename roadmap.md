---
layout: default
title: Roadmap
permalink: /roadmap
nav_enabled: true
nav_order: 5
has_toc: false
---

# **Roadmap**

A look at ideas the MustardOS crew is working on or thinking about. Nothing here is a promise: ideas can change shape,
move around or be dropped as development goes, and there is no set date for any of them. Have an idea of your own?
Bring it to the [community]({{site.baseurl}}/crew) on Discord or the forum.

{%- assign stages = "progress|In Progress|label-green,planned|Planned|label-yellow,exploring|Exploring|label-grey" | split: "," %}

<table class="roadmap-table">
    <thead>
    <tr>
        <th style="text-align:left;">Idea</th>
        <th style="text-align:left;">Area</th>
        <th style="text-align:left;">Status</th>
        <th style="text-align:left;">Details</th>
    </tr>
    </thead>
    <tbody>
    {%- for stage in stages -%}
    {%- assign parts = stage | split: "|" -%}
    {%- assign ideas = site.data.roadmap | where: "status", parts[0] -%}
    {%- for idea in ideas %}
    <tr>
        <td><strong>{{ idea.title }}</strong></td>
        <td>{{ idea.area }}</td>
        <td><span class="label {{ parts[2] }}">{{ parts[1] }}</span></td>
        <td>{{ idea.desc }}</td>
    </tr>
    {%- endfor -%}
    {%- endfor %}
    </tbody>
</table>
