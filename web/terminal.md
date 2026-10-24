---
layout: default
title: Virtual Terminal
permalink: /web/terminal
parent: Web Services
nav_order: 5
has_toc: false
---

# **Virtual Terminal**

A command line for your device that runs in your web browser, so you can type commands without a keyboard attached or
an SSH client installed.

## Get started

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Enable it</strong>Open <b>Configuration &gt; Connectivity &gt; Web Services &gt;
        Virtual Terminal</b>.</div>
    <div class="guide-step"><strong>Add a login</strong>Set a username and password if other people use your network.</div>
    <div class="guide-step"><strong>Open it</strong>Visit <code>http://muos.local:8080</code> in a browser on the same
        network.</div>
</div>

## Settings

<div class="guide-paths" markdown="0">
    <div><code>Port</code><span><code>8080</code> by default.</span></div>
    <div><code>Username</code><span>Not set by default. Letters, numbers, underscores and hyphens are allowed.</span></div>
    <div><code>Password</code><span>Not set by default. It cannot contain a colon.</span></div>
</div>

Set both the username and password to require a browser login, or leave both empty to open the terminal straight away.
MustardOS will not accept one without the other.

This is a writable root shell. Set login details before using it on a shared network, and disable the service when you
no longer need it.
{: .warning }
