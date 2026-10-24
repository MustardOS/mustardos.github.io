---
layout: default
title: Syncthing
permalink: /web/syncthing
parent: Web Services
nav_order: 6
has_toc: false
---

# **Syncthing**

Keeps folders such as your saves in step with your computer or other devices, automatically and without a cloud
service.

## Get started

Enable it under **Configuration > Connectivity > Web Services > Syncthing**, then open `http://muos.local:7070`.

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Install Syncthing</strong>Install it on the other device as well.</div>
    <div class="guide-step"><strong>Open both</strong>Open the Syncthing interface on MustardOS and on the other device.</div>
    <div class="guide-step"><strong>Pair them</strong>Add each device using the Device ID that Syncthing shows.</div>
    <div class="guide-step"><strong>Add a folder</strong>Add or accept a folder and choose the right MustardOS path.</div>
    <div class="guide-step"><strong>Choose a direction</strong>Pick Send &amp; Receive, Send Only or Receive Only.</div>
    <div class="guide-step"><strong>Share it</strong>Confirm the folder is shared with the other device.</div>
</div>

## Good to know

<div class="guide-paths" markdown="0">
    <div><code>Web Port</code><span><code>7070</code> by default.</span></div>
    <div><code>/run/muos/storage/save</code><span>A good folder for your saves. It always follows the storage MustardOS is
        using, so the share keeps working if that changes.</span></div>
    <div><code>Configuration</code><span>Syncthing keeps its own settings on your selected storage. MustardOS starts it
        without automatic updates, browser launching or external port checks.</span></div>
</div>

Watching for changes does not work reliably on every card format. For a folder on exFAT storage, turn off **Watch for
Changes** and let Syncthing scan on its schedule instead.
{: .note }

MustardOS can ask Syncthing to scan your saves when you leave a game, if Syncthing and its automatic scan option are both
enabled. Turn on file versioning on at least one receiving device before syncing saves in both directions.
{: .important }
