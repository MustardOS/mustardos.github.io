---
layout: default
title: Web Services
permalink: /web
nav_enabled: true
nav_order: 7
has_children: true
---

# **Web Services**

Web Services make selected parts of a MustardOS device available over a network. Open **Configuration >
Connectivity > Web Services** to enable a service or change its port. Each service runs only while enabled and
starts when networking is ready.

<div class="guide" markdown="0">
    <h2 class="guide-heading">Services and defaults</h2>

    <div class="guide-list">
        <a class="guide-list-row" href="/web/localdns">
            <img src="/tour/assets/glyphs/muxwebserv/mdns.svg" alt="" width="28" height="28">
            <span class="guide-list-text"><strong>Local DNS Resolver</strong>Provides the device's conflict-free
                <code>.local</code> address and discovers other MustardOS dashboards.</span>
            <span class="guide-list-meta"><span class="guide-badge on">Enabled</span><span>mDNS</span></span>
        </a>
        <a class="guide-list-row" href="/web/dashboard">
            <img src="/tour/assets/glyphs/muxwebserv/landing.svg" alt="" width="28" height="28">
            <span class="guide-list-text"><strong>Web Dashboard</strong>Device status, file management, play history,
                collections, Remote View and the Editors and Tools.</span>
            <span class="guide-list-meta"><span class="guide-badge on">Enabled</span><span>Port 80</span></span>
        </a>
        <a class="guide-list-row" href="/web/ssh">
            <img src="/tour/assets/glyphs/muxwebserv/sshd.svg" alt="" width="28" height="28">
            <span class="guide-list-text"><strong>Secure Shell</strong>A root command line through an SSH
                client.</span>
            <span class="guide-list-meta"><span class="guide-badge">Disabled</span><span>Port 22</span></span>
        </a>
        <a class="guide-list-row" href="/web/sftp">
            <img src="/tour/assets/glyphs/muxwebserv/sftp.svg" alt="" width="28" height="28">
            <span class="guide-list-text"><strong>Secure File Transfer</strong>File transfer through an SFTP app,
                signing in as <code>muos</code>.</span>
            <span class="guide-list-meta"><span class="guide-badge">Disabled</span><span>Port 2022</span></span>
        </a>
        <a class="guide-list-row" href="/web/terminal">
            <img src="/tour/assets/glyphs/muxwebserv/ttyd.svg" alt="" width="28" height="28">
            <span class="guide-list-text"><strong>Virtual Terminal</strong>A root shell in your browser.</span>
            <span class="guide-list-meta"><span class="guide-badge">Disabled</span><span>Port 8080</span></span>
        </a>
        <a class="guide-list-row" href="/web/syncthing">
            <img src="/tour/assets/glyphs/muxwebserv/syncthing.svg" alt="" width="28" height="28">
            <span class="guide-list-text"><strong>Syncthing</strong>Folder synchronisation with other devices.</span>
            <span class="guide-list-meta"><span class="guide-badge">Disabled</span><span>Port 7070</span></span>
        </a>
    </div>
</div>

Ports can be changed from 1 to 65535. Save the service screen to apply a change. MustardOS restarts the selected
service and refreshes Local DNS advertisements and Web Dashboard links where required.

<div class="guide" markdown="0">
    <h2 class="guide-heading">Finding the address</h2>

    <p>Open <strong>Configuration &gt; Connectivity &gt; Web Dashboard Code</strong> to see the current dashboard
        address. The row is shown while Web Dashboard is enabled.</p>

    <div class="guide-tips">
        <div class="guide-tip">
            <img src="/tour/assets/glyphs/muxwebserv/local_name.svg" alt="" width="32" height="32">
            <div>
                <span class="guide-title">With Local DNS</span>
                <p>Use the <code>.local</code> address shown on screen.</p>
            </div>
        </div>
        <div class="guide-tip">
            <img src="/tour/assets/glyphs/muxconnect/network.svg" alt="" width="32" height="32">
            <div>
                <span class="guide-title">Without Local DNS</span>
                <p>Use the IPv4 address shown on screen.</p>
            </div>
        </div>
        <div class="guide-tip">
            <img src="/tour/assets/glyphs/muxwebserv/port.svg" alt="" width="32" height="32">
            <div>
                <span class="guide-title">Other ports</span>
                <p>Add <code>:&lt;port&gt;</code> when the service does not use its default web port.</p>
            </div>
        </div>
    </div>
</div>

The Wi-Fi screen reports internet availability separately from the local network connection. Most services only need
a working local network. Downloads and other internet features also need internet access.

## Security

These services can expose files or a root shell. Enable only the services you need and use networks you trust.
{: .warning }

<div class="guide-paths" markdown="0">
    <div><code>Web Dashboard</code><span>Changes need its rotating device code when authentication is enabled, and are
        open to anyone on the network when it is disabled.</span></div>
    <div><code>Virtual Terminal</code><span>Can be protected with its optional username and password.</span></div>
    <div><code>Secure Shell</code><span>Signs in with the device's root account, which only works on this
        service.</span></div>
    <div><code>Secure File Transfer</code><span>Signs in as <code>muos</code> and works on files with full root
        access, limited to the storage folders it offers.</span></div>
    <div><code>Syncthing</code><span>Has its own device trust and folder sharing controls.</span></div>
</div>

Both Secure Shell and Secure File Transfer use well known default passwords. Change the root password with
`passwd` if you plan to keep Secure Shell on. Secure File Transfer always signs in with `muos`, so only enable it on
a network you trust.
{: .note }
