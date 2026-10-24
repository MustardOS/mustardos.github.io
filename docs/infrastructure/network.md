---
layout: default
title: Network Services
parent: How MustardOS Works
permalink: /docs/infrastructure/network
nav_order: 2
---

# **Network Services**

Web services are managed independently of everything else, and networking never holds back the frontend. Services
become available once an interface and address are ready.

<div class="guide-grid compact" markdown="0">
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxwebserv/mdns.svg" alt="" width="36" height="36">
        <span class="guide-title">Local DNS</span>
        <span class="guide-text">Advertises a conflict-free <code>.local</code> name for the device on your network.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxwebserv/landing.svg" alt="" width="36" height="36">
        <span class="guide-title">Web Dashboard</span>
        <span class="guide-text">Device status, file management, play history, collections, Remote View and the Editors
            and Tools in your browser.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxwebserv/sshd.svg" alt="" width="36" height="36">
        <span class="guide-title">Secure Shell</span>
        <span class="guide-text">Optional command line access to the device from a terminal on your computer.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxwebserv/ttyd.svg" alt="" width="36" height="36">
        <span class="guide-title">Browser Terminal</span>
        <span class="guide-text">An optional command line that runs in your browser.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxwebserv/syncthing.svg" alt="" width="36" height="36">
        <span class="guide-title">Syncthing</span>
        <span class="guide-text">Optional syncing of saves and other folders with your other devices.</span>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxwebserv/sftp.svg" alt="" width="36" height="36">
        <span class="guide-title">Secure File Transfer</span>
        <span class="guide-text">Optional file transfer with any SFTP app, covering your storage, the boot partition,
            MustardOS itself, and your history, collections and catalogue.</span>
    </div>
    <a class="guide-card" href="/web/dashboard/api">
        <img src="/tour/assets/glyphs/muxwebserv/port.svg" alt="" width="36" height="36">
        <span class="guide-title">Dashboard API</span>
        <span class="guide-text">Read the device status and manage files and lists from your own scripts.</span>
    </a>
    <a class="guide-card" href="/web">
        <img src="/tour/assets/glyphs/muxwebserv/authentication.svg" alt="" width="36" height="36">
        <span class="guide-title">Security</span>
        <span class="guide-text">Each service has its own defaults, addresses and sign-in expectations, listed in the
            Web Services guide.</span>
    </a>
</div>

To join two devices for netplay or Game Link without Wi-Fi, see [Direct Link](/docs/infrastructure/direct-link). It
works with network adapters or a single USB-C cable.
