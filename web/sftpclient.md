---
layout: default
title: SFTP Client
permalink: /web/sftpclient
parent: Web Services
nav_enabled: true
has_children: false
has_toc: false
---

## How to use an SFTP Client to connect to muos on your device

## General Idea
This guide will help you enable the SFTP service on your device and connect using a dedicated SFTP client (such as WinSCP, FileZilla, or Cyberduck).

### Prerequisites
* You are familiar with your SFTP client of choice.
* Your handheld and your PC are on the same local network (e.g., 192.168.1.x).
* Wi-Fi is enabled and connected on your muOS device.

---

## Steps

### 1. Enable Services and Note IP
1. On your device, navigate to **Configuration**.
2. Select **Webservices**.
3. Toggle **SFTP + Filebrowser** to enabled.
4. Note your device's **IP Address** displayed in the Wi-Fi settings or the Webservices menu.

### 2. Configure Your SFTP Client
Open your client on your PC and enter the following credentials:

| Setting  | Value |
| :--- | :--- |
| **Host / IP** | `<Your Device IP>` |
| **Port** | **2022** |
| **Protocol** | SFTP (SSH File Transfer Protocol) |
| **Username** | `muos` |
| **Password** | `muos` |

> **Note:** The port **2022** is mandatory. Standard SFTP usually defaults to port 22, so you must manually change this.

### 3. Understanding the File Structure
Once connected, you will see the following directories:

* **MUX:** Internal system files (avoid modifying these).
* **MMC:** SD1 - contains saves, ROMs, and BIOS.
* **SDCARD:** SD2 - secondary storage (recommended for most users).
* **USB:** Any externally connected storage devices.

## Further Assistance
For further assistance, please refer to the [muOS Discord](https://discord.gg/muos).
