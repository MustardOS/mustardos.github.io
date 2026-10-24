---
layout: default
title: Secure Shell
permalink: /web/ssh
parent: Web Services
nav_order: 3
has_toc: false
---

# **Secure Shell**

A full command line on your device, reached from a terminal on your computer. Secure Shell is for maintenance and
troubleshooting, and [Secure File Transfer](/web/sftp) is the way to move files on and off the device.

Enable it under **Configuration > Connectivity > Web Services > Secure Shell**, then check
**Configuration > Connectivity > Web Dashboard Code** for the `.local` name or IP address.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Open a terminal</strong>Use Windows Terminal, macOS Terminal or a Linux shell.</div>
    <div class="guide-step"><strong>Connect</strong>Run <code>ssh root@muos.local</code>.</div>
    <div class="guide-step"><strong>Sign in</strong>Enter the password <code>root</code>.</div>
</div>

Replace `muos.local` with the address shown on your device, and add `-p <port>` to the `ssh` command if you changed
the port.

## Settings

<div class="guide-paths" markdown="0">
    <div><code>Port</code><span><code>22</code> by default.</span></div>
    <div><code>Username</code><span><code>root</code>, the only account accepted by this service.</span></div>
    <div><code>Password</code><span><code>root</code></span></div>
</div>

Secure Shell gives complete control of the device. Enable it only on a network you trust, and change the root
password with `passwd` if you plan to keep remote access on.
{: .warning }

Your device keeps its SSH identity between restarts. After reflashing or replacing its storage, your computer may warn
that the identity changed. Confirm you are connecting to the right device before removing the old record.
{: .note }
