---
layout: default
title: Task Toolkit
permalink: /tasks
nav_order: 7.5
has_children: true
has_toc: false
---

# **Task Toolkit**

A collection of small scripts for looking after your device. They clear and restore files, mount and eject storage,
switch layouts and write diagnostic reports for the MustardOS crew. You can also write your own.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Open it</strong>Go to <b>Applications &gt; Task Toolkit</b>. Folders hold related
        tasks.</div>
    <div class="guide-step"><strong>Read first</strong>Press <b>Menu</b> on a task to read what it does before you run
        it.</div>
    <div class="guide-step"><strong>Run it</strong>Press <b>A</b>. Most tasks show their progress on screen and say when
        they are done.</div>
</div>

## How tasks run

<div class="guide-paths" markdown="0">
    <div><code>Progress</code><span>The task runs while a progress screen shows what it is doing, then reports that it
        finished or what went wrong.</span></div>
    <div><code>Prompt</code><span>Like Progress, but the task can stop and ask you a question before it carries
        on.</span></div>
    <div><code>Terminal</code><span>The task opens a terminal and shows its output as text. Used for tests that print a
        lot as they run.</span></div>
    <div><code>Cancel</code><span>Some tasks can be stopped part way with <b>B</b>. Tasks that would leave things half
        done, such as restores, cannot be stopped.</span></div>
</div>

{: .note }
Reports from the Diagnostics tasks are saved to `MUOS/log/diagnostics` on SD1. Attach the report when asking for help
on Discord or the forum.

## What each task does

{% for group in site.data.tasks %}
{% if group.group == "" %}### Main Toolkit{% else %}### {{ group.group }}{% endif %}

<div class="guide-list" markdown="0">
{%- for task in group.tasks %}
    <div class="guide-list-row">
        <img src="/tour/assets/glyphs/muxtask/{{ task.icon }}.svg" alt="" width="28" height="28">
        <span class="guide-list-text"><strong>{{ task.name }}</strong>{{ task.desc | escape }}</span>
        <span class="guide-list-meta"><span class="guide-badge{% if task.mode != 'progress' %} on{% endif %}">{{ task.mode | capitalize }}</span>{% if task.cancel %}<span>Can cancel</span>{% endif %}</span>
    </div>
{%- endfor %}
</div>
{% endfor %}

## Make your own

Tasks are ordinary shell scripts, so you can add your own to the toolkit. A task can show progress, ask questions and
report errors on the device screen with a handful of functions.

<div class="guide-grid" markdown="0">
    <a class="guide-card" href="/tasks/writing">
        <span class="guide-title">Writing Your Own Tasks</span>
        <span class="guide-text">Where scripts go, the header lines, every TASK function, prompts, cancelling and
            worked examples.</span>
        <span class="guide-go">Start writing</span>
    </a>
    <a class="guide-card" href="/docs/infrastructure/extending">
        <span class="guide-title">Extending MustardOS</span>
        <span class="guide-text">Other ways to add to MustardOS without changing the frontend, such as launchers,
            applications and themes.</span>
        <span class="guide-go">Read more</span>
    </a>
</div>
