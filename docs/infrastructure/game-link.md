---
layout: default
title: Game Link
parent: How MustardOS Works
permalink: /docs/infrastructure/game-link
nav_order: 3.1
---

# **Game Link**

The original Game Boy and Game Boy Color could be joined with a link cable, so two people could trade, battle or play
head to head. Game Link brings that back in Pickles, either between two devices or between two machines running side
by side on one device. It appears in the Pickles Menu when the game's core supports it.

| Core     | What it supports                                                   |
|:---------|:-------------------------------------------------------------------|
| Gambatte | Linking two devices over your network or with a Device Link cable  |
| SameBoy  | Two Players, with both machines running on the one device          |

Game Link and [Netplay]({{site.baseurl}}/tour/modules/muxretro-netplay) do different jobs. Netplay shares one running
game between two players and works with many systems. Game Link connects two separate copies of a game, in the same
way the original cable connected two consoles.

## Choosing a link mode

<div class="guide-grid" markdown="0">
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxretro/network.svg" alt="" width="48" height="48">
        <span class="guide-title">Host</span>
        <span class="guide-text">This device waits for another device on the same network and shows the address the
            other person needs to enter.</span>
        <div class="guide-tags"><span>Two devices</span><span>Same network</span></div>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxretro/network.svg" alt="" width="48" height="48">
        <span class="guide-title">Client</span>
        <span class="guide-text">This device joins a host by entering the address shown on the host device.</span>
        <div class="guide-tags"><span>Two devices</span><span>Same network</span></div>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxlink/usbcable.svg" alt="" width="48" height="48">
        <span class="guide-title">Cable</span>
        <span class="guide-text">Two devices joined by <a href="/docs/infrastructure/device-link">Device Link</a>, with
            network adapters or a USB-C cable. The devices decide between themselves which one hosts.</span>
        <div class="guide-tags"><span>Two devices</span><span>No Wi-Fi needed</span></div>
    </div>
    <div class="guide-card">
        <img src="/tour/assets/glyphs/muxretro/controller.svg" alt="" width="48" height="48">
        <span class="guide-title">Two Players</span>
        <span class="guide-text">Both machines run on one device, which suits trading with yourself or passing the
            device between two people.</span>
        <div class="guide-tags"><span>One device</span><span>SameBoy</span></div>
    </div>
</div>

<div class="guide-paths" markdown="0">
    <div><strong>Two devices on the same Wi-Fi</strong><span>Set one device to <strong>Host</strong> and the other to
        <strong>Client</strong>.</span></div>
    <div><strong>Two devices without Wi-Fi</strong><span>Connect them with <a href="/docs/infrastructure/device-link">Device
        Link</a>, then set both to <strong>Cable</strong>.</span></div>
    <div><strong>One device</strong><span>Use <strong>Two Players</strong> with the SameBoy core.</span></div>
</div>

## Linking over your network

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Same game</strong>Start the same game with Gambatte on both devices.</div>
    <div class="guide-step"><strong>Host</strong>On the first device, open <strong>Game Link</strong> in the Pickles
        Menu, set <strong>Link Mode</strong> to <strong>Host</strong> and note the <strong>Host Address</strong>.</div>
    <div class="guide-step"><strong>Client</strong>On the second device, set <strong>Link Mode</strong> to
        <strong>Client</strong> and enter that address in <strong>Host Address</strong>.</div>
    <div class="guide-step"><strong>Menus</strong>Close the Pickles Menu on both devices and go to the game's own link
        or two player menu.</div>
    <div class="guide-step"><strong>Start</strong>The person on the client device starts the two player mode, such as
        <strong>2 PLAYERS</strong> in Tetris.</div>
    <div class="guide-step"><strong>Play</strong>Both games now run linked, ready for trading, battles or head to head
        play.</div>
</div>

## Linking with a cable

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Device Link</strong>Connect the devices and wait for <strong>Status</strong> to
        show <strong>Connected</strong>, as described on the <a href="/docs/infrastructure/device-link">Device Link</a>
        page.</div>
    <div class="guide-step"><strong>Same game</strong>Start the same game with Gambatte on both devices.</div>
    <div class="guide-step"><strong>Cable</strong>Set <strong>Link Mode</strong> to <strong>Cable</strong> on both
        devices, then start the two player mode from the client device.</div>
</div>

## Two Players on one device

<div class="guide-steps" markdown="0">
    <div class="guide-step"><strong>Choose</strong>With a game running in SameBoy, set <strong>Link Mode</strong> to
        <strong>Two Players</strong>.</div>
    <div class="guide-step"><strong>Restart</strong>Choose <strong>Restart</strong> in the Pickles Menu, as Two Players
        takes effect the next time the game starts.</div>
    <div class="guide-step"><strong>Switch</strong>Hold <strong>MENU</strong> and press <strong>A</strong> to move your
        buttons between the two machines. The sound follows whichever one you control.</div>
</div>

Both machines are shown side by side by default. **Single Screen** shows one machine at a time filling the display,
with a small marker in the corner naming the machine on screen.

## Good to know

- Both devices need the same game, in the same way two consoles needed two copies of the same cartridge.
- The person who joined as the client starts the two player mode. Starting it from the host returns both games to the
  title screen.
- Opening the Pickles Menu during a network or cable link does not pause the game, because the other device would be
  left waiting. Your buttons stop reaching the game while the menu is open, and the other player sees a message
  saying so.

## If it does not connect

<div class="guide-paths" markdown="0">
    <div><strong>No Game Link in the Pickles Menu</strong><span>The core does not support it. Assign Gambatte for
        linking two devices, or SameBoy for Two Players, from <strong>Core</strong> in Content Options.</span></div>
    <div><strong>The client cannot reach the host</strong><span>Check that both devices are on the same network and
        that the Host Address was entered exactly as the host shows it.</span></div>
    <div><strong>Cable stays waiting</strong><span>Device Link has to show <strong>Connected</strong> on both devices
        before Game Link can use it.</span></div>
    <div><strong>Both games return to the title screen</strong><span>The two player mode was started from the host.
        Start it from the client device instead.</span></div>
</div>

[Game Link]({{site.baseurl}}/tour/modules/muxretro-gamelink) in the Grand Tour describes every option on the screen.
