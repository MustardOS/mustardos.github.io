---
layout: default
title: Secure File Transfer
permalink: /web/sftp
parent: Web Services
nav_order: 4
has_toc: false
---

# **Secure File Transfer**

Move files on and off your device with any SFTP app, such as FileZilla, WinSCP, Cyberduck or the file manager on
Linux. Everyone signs in with the same details, and files are read and written with full access.

Enable it under **Configuration > Connectivity > Web Services > Secure File Transfer**, then check
**Configuration > Connectivity > Web Dashboard Code** for the `.local` name or IP address.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Choose SFTP</strong>Pick the SFTP protocol in your file transfer app.</div>
    <div class="guide-step"><strong>Connect</strong>Use <code>muos.local</code> on port <code>2022</code>, or open
        <code>sftp://muos@muos.local:2022/</code>.</div>
    <div class="guide-step"><strong>Sign in</strong>Use the username <code>muos</code> and the password
        <code>muos</code>.</div>
</div>

Replace `muos.local` with the address shown on your device, and change the port if you moved it.

## Settings

<div class="guide-paths" markdown="0">
    <div><code>Port</code><span><code>2022</code> by default.</span></div>
    <div><code>Username</code><span><code>muos</code>, the only account accepted by this service.</span></div>
    <div><code>Password</code><span><code>muos</code>, set again each time the service starts.</span></div>
</div>

## Folders

The top level lists the storage that is available right now. A card or USB drive that is not inserted and mounted is
left out until it is.

<div class="guide-paths" markdown="0">
    <div><code>Primary Storage</code><span>Your primary card.</span></div>
    <div><code>Secondary Storage</code><span>Your secondary storage, when it is available.</span></div>
    <div><code>External Storage</code><span>Supported USB storage, when connected.</span></div>
    <div><code>Internal</code><span>MustardOS itself. Changes here can stop the device from starting.</span></div>
    <div><code>Boot</code><span>The boot partition. Changes here can stop the device from starting.</span></div>
</div>

Three more folders lead straight to the places MustardOS keeps your lists and artwork, wherever your storage
settings have put them.

<div class="guide-paths" markdown="0">
    <div><code>History</code><span>The content you have played recently.</span></div>
    <div><code>Collections</code><span>Your collections.</span></div>
    <div><code>Catalogue</code><span>Box art, previews, descriptions and other catalogue media.</span></div>
</div>

The top level itself is read only, so new files and folders belong inside one of these folders.

The [Web Dashboard](/web/dashboard) also has **File Management** for uploading, downloading and organising files in
a browser, with no app to install.

Secure File Transfer can change anything in the folders it offers, and it always signs in with the username and
password `muos`. Enable it only on a network you trust, and switch it off when you are done.
{: .warning }

Let a transfer finish before turning the device off or removing storage.
{: .warning }
