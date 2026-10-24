---
layout: default
title: Contributing
permalink: /contributing
nav_order: 6
has_toc: false
---

# **Contributing**

MustardOS is open source and built by a small crew with a lot of help from its community. There is room to help
whether you write code, translate, make themes, test new releases or simply report what went wrong.

## Ways to help

<div class="guide-grid" markdown="0">
    <a class="guide-card" href="#translating">
        <span class="guide-title">Translate</span>
        <span class="guide-text">Put MustardOS into your own language through Weblate, right in your browser.</span>
        <span class="guide-go">How to translate</span>
    </a>
    <a class="guide-card" href="#reporting-a-problem">
        <span class="guide-title">Report a problem</span>
        <span class="guide-text">A clear report with a diagnostics file is one of the most useful things you can
            send.</span>
        <span class="guide-go">How to report</span>
    </a>
    <a class="guide-card" href="/docs/support">
        <span class="guide-title">Test new releases</span>
        <span class="guide-text">Artificer and Knight supporters try new features and fixes before each
            release.</span>
        <span class="guide-go">Supporting MustardOS</span>
    </a>
    <a class="guide-card" href="/themes">
        <span class="guide-title">Make a theme</span>
        <span class="guide-text">Design a theme for everyone to download from the theme library.</span>
        <span class="guide-go">Theme guides</span>
    </a>
    <a class="guide-card" href="#improving-this-website">
        <span class="guide-title">Improve this website</span>
        <span class="guide-text">Fix a mistake or add a missing guide. Every page links to its source on
            GitHub.</span>
        <span class="guide-go">Edit the website</span>
    </a>
    <a class="guide-card" href="#working-on-the-code">
        <span class="guide-title">Work on the code</span>
        <span class="guide-text">Fix bugs and add features in the frontend, the system scripts or the core
            builder.</span>
        <span class="guide-go">Get the code</span>
    </a>
</div>

## Translating

All translations are made on [Hosted Weblate](https://hosted.weblate.org/projects/muos/mux/), and the language files in
the device come from there.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Sign in</strong>Create a free Weblate account, or sign in with GitHub.</div>
    <div class="guide-step"><strong>Pick a language</strong>Open the MustardOS project and choose your language, or
        start a new one.</div>
    <div class="guide-step"><strong>Translate</strong>Work through the untranslated strings. Your changes reach the
        next release.</div>
</div>

{: .important }
Make every change in Weblate. The language repository on GitHub is filled from Weblate, so anything changed there
directly is replaced.

## Reporting a problem

Bring problems to the [Discord server](https://discord.gg/mustardos-1152022492001603615) or the
[forum](https://community.muos.dev/). A report the crew can act on straight away includes these things.

<div class="guide-paths" markdown="0">
    <div><code>Device</code><span>The device and the MustardOS version, both shown in Information on the
        device.</span></div>
    <div><code>What happened</code><span>What you expected, what happened instead, and any message on the
        screen.</span></div>
    <div><code>How to repeat it</code><span>The steps that cause it, starting from the Main Menu.</span></div>
    <div><code>Diagnostics</code><span>Run <b>System Diagnostics</b> in the <a href="/tasks">Task Toolkit</a>, or the
        Diagnostics report for the area that is misbehaving, and attach the file it saves to SD1.</span></div>
</div>

{: .note }
Check whether the problem happens on a fresh install before reporting it. Leftover files from older releases or other
systems cause a lot of strange behaviour.

## Improving this website

This website lives in the [mustardos.github.io](https://github.com/MustardOS/mustardos.github.io) repository and is
built with Jekyll. The **Edit this page on GitHub** link at the bottom of each page opens its source.

```sh
git clone https://github.com/MustardOS/mustardos.github.io
cd mustardos.github.io
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` to see your changes as you make them, then send a pull request.

<div class="guide-paths" markdown="0">
    <div><code>Writing</code><span>Use Australian English and plain wording. Call the project MustardOS, and the
        people behind it the "crew".</span></div>
    <div><code>Layout</code><span>Card grids should fill every row, so pick a number of cards that suits the
        grid.</span></div>
    <div><code>Generated data</code><span>Some data is copied from the other repositories by the scripts in
        <code>_scripts</code>, such as the task list and the settings profile schema. Change the source and run the
        script to update the data.</span></div>
</div>

## Working on the code

<div class="guide-list" markdown="0">
    <a class="guide-list-row" href="https://github.com/MustardOS/frontend">
        <img src="/tour/assets/glyphs/muxlaunch/config.svg" alt="" width="28" height="28">
        <span class="guide-list-text"><strong>frontend</strong>The menus, Pickles, Wasabi, the Web Dashboard server and
            the background helpers, written in C.</span>
        <span class="guide-list-meta"><span class="guide-badge">C</span></span>
    </a>
    <a class="guide-list-row" href="https://github.com/MustardOS/internal">
        <img src="/tour/assets/glyphs/muxapp/terminal.svg" alt="" width="28" height="28">
        <span class="guide-list-text"><strong>internal</strong>The system scripts, device settings, Task Toolkit,
            applications and shared files that make up the rest of MustardOS.</span>
        <span class="guide-list-meta"><span class="guide-badge">Shell</span></span>
    </a>
    <a class="guide-list-row" href="https://github.com/MustardOS/extra">
        <img src="/tour/assets/glyphs/muxapp/retroarch.svg" alt="" width="28" height="28">
        <span class="guide-list-text"><strong>extra</strong>Builds and packages the Libretro cores offered for
            download.</span>
        <span class="guide-list-meta"><span class="guide-badge">Builder</span></span>
    </a>
    <a class="guide-list-row" href="https://github.com/MustardOS/theme">
        <img src="/tour/assets/glyphs/muxtheme/theme.svg" alt="" width="28" height="28">
        <span class="guide-list-text"><strong>theme</strong>The theme library.</span>
        <span class="guide-list-meta"><span class="guide-badge">Themes</span></span>
    </a>
    <a class="guide-list-row" href="https://github.com/MustardOS/language">
        <img src="/tour/assets/glyphs/muxlanguage/language.svg" alt="" width="28" height="28">
        <span class="guide-list-text"><strong>language</strong>The translations, filled from Weblate.</span>
        <span class="guide-list-meta"><span class="guide-badge">Weblate</span></span>
    </a>
    <a class="guide-list-row" href="https://github.com/MustardOS/mustardos.github.io">
        <img src="/tour/assets/glyphs/muxinfo/news.svg" alt="" width="28" height="28">
        <span class="guide-list-text"><strong>mustardos.github.io</strong>This website.</span>
        <span class="guide-list-meta"><span class="guide-badge">Jekyll</span></span>
    </a>
</div>

### Building the frontend

You need `make`, `ccache` and a C compiler, plus `curl` or `wget`, `perl` and `tar` for the libraries the build
fetches itself. Cross builds for devices expect an aarch64 toolchain in `~/x-tools`, or wherever `XTOOL` points.

```sh
git clone https://github.com/MustardOS/frontend
cd frontend

# Guided setup that asks for the device, build type and toolchain
./build.sh

# A release build for the usual Cortex-A53 devices
BUILD=release ./build.sh make -j$(nproc)
```

<div class="guide-paths" markdown="0">
    <div><code>DEVICE</code><span>The target, such as <code>ARM64_A53</code> for H700 and A133 devices, which is
        the default.</span></div>
    <div><code>BUILD</code><span><code>release</code> for a device image, or <code>test</code> for a development
        build with test flags.</span></div>
    <div><code>./build.sh generate</code><span>Refreshes the generated language template and script hashes without
        compiling. Keep the <code>internal</code> repository beside <code>frontend</code> so the hashes match your
        scripts.</span></div>
    <div><code>./build.sh database</code><span>Writes <code>compile_commands.json</code> for clangd, CLion and
        similar editors.</span></div>
</div>

The [frontend README](https://github.com/MustardOS/frontend#readme) has the full build options, native builds and the
layout of the source tree.

### Checks on every pull request

<div class="guide-paths" markdown="0">
    <div><code>C formatting</code><span>Run <code>./build.sh format</code> before committing. It uses a pinned
        clang-format version, and <code>./build.sh format --check</code> is what the pull request check
        runs.</span></div>
    <div><code>Shell scripts</code><span>Scripts in <code>internal</code> run under BusyBox, so they must start with
        <code>#!/bin/sh</code> and avoid bash-only features. The pull request check runs ShellCheck in POSIX
        mode.</span></div>
    <div><code>User-facing text</code><span>Add new frontend strings in English. They reach Weblate through the
        generated language template.</span></div>
</div>

<div class="guide-steps four" markdown="0">
    <div class="guide-step"><strong>Fork</strong>Fork the repository on GitHub and clone your fork.</div>
    <div class="guide-step"><strong>Branch</strong>Make your change on its own branch, one topic at a time.</div>
    <div class="guide-step"><strong>Test</strong>Build it and try it on a device, and run the format or shell
        checks.</div>
    <div class="guide-step"><strong>Pull request</strong>Open a pull request that explains what changed and
        why.</div>
</div>

## Licences

The frontend, internal scripts, core builder, themes and translations are released under the
[GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0.html). Except where otherwise noted, the
content of this website is licensed under
[CC Attribution-Noncommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/deed.en). By contributing,
you agree that your work is released under the same licence as the project it goes into.
