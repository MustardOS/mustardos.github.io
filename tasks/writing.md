---
layout: default
title: Writing Your Own Tasks
parent: Task Toolkit
permalink: /tasks/writing
nav_order: 1
has_toc: false
---

# **Writing Your Own Tasks**

A task is a shell script with a few header lines at the top. It shows its progress on the device screen through a small
set of `TASK_` functions, and the same script still works when you run it from a terminal over SSH.

<div class="guide-steps four" markdown="0">
    <div class="guide-step"><strong>Connect</strong>Copy files with <a href="/web/sftp">Secure File Transfer</a>, or
        work on the device over <a href="/web/ssh">Secure Shell</a>.</div>
    <div class="guide-step"><strong>Add a script</strong>Save it in <code>/opt/muos/share/task</code>, shown as
        <code>Internal/share/task</code> over Secure File Transfer, or in a folder inside it. The file name,
        without <code>.sh</code>, is the name in the menu.</div>
    <div class="guide-step"><strong>Make it runnable</strong>Run <code>chmod +x</code> on the script, or the device
        cannot start it.</div>
    <div class="guide-step"><strong>Try it</strong>Open <b>Applications &gt; Task Toolkit</b> and run it. Folders only
        appear once they hold a script.</div>
</div>

## A first task

```sh
#!/bin/sh
# HELP: Counts the files in your ROMS folder
# ICON: storage
# EXECUTION_MODE: progress
# CAN_CANCEL: 0
# PROTOCOL_VERSION: 1

. /opt/muos/script/var/func.sh
. /opt/muos/script/var/ui.sh

TASK_BEGIN "count_roms" "Count ROMs"

ROMS="$(GET_VAR "device" "storage/rom/mount")/ROMS"
TASK_STATUS "Counting files in $ROMS"

COUNT=$(find "$ROMS" -type f 2>/dev/null | wc -l)
TASK_DETAIL "$COUNT files found"

TASK_COMPLETE "Found $COUNT files"
```

`func.sh` brings in the MustardOS settings helpers, and `ui.sh` brings in the `TASK_` functions. Source both, in that
order, at the top of every task.

## Header lines

The frontend reads these comment lines from the top of the script. Each is written as `# KEY: value`.

| Header             | Values                             | What it does                                                   |
|--------------------|------------------------------------|----------------------------------------------------------------|
| `HELP`             | Text                               | Shown when you press **Menu** on the task.                      |
| `ICON`             | A glyph name                       | The glyph beside the task, such as `clear`, `diagnostic`, `junk`, `network`, `storage` or `theme`. |
| `EXECUTION_MODE`   | `progress`, `prompt` or `terminal` | How the task runs. Without this line the task opens a terminal. |
| `CAN_CANCEL`       | `0` or `1`                         | Whether **B** can stop the task while it runs.                  |
| `NEVER_CANCEL`     | `1`                                | Refuses cancelling even where `CAN_CANCEL` allows it. Use it for work that must not stop halfway. |
| `PROTOCOL_VERSION` | `1`                                | The version of the task functions the script was written for.   |

<div class="guide-paths" markdown="0">
    <div><code>progress</code><span>Shows a progress screen and reads the <code>TASK_</code> functions. Best for most
        tasks.</span></div>
    <div><code>prompt</code><span>The same as <code>progress</code>, for tasks that ask questions with
        <code>TASK_PROMPT</code>.</span></div>
    <div><code>terminal</code><span>Opens a terminal and shows everything the script prints. Use it when the output
        itself is the point, such as a live input test.</span></div>
</div>

## Task functions

Every function takes plain text. Tabs and line breaks are removed, so keep each message to one line.

<div class="guide-paths" markdown="0">
    <div><code>TASK_BEGIN id title</code><span>Starts the task. The <code>id</code> is a short name with no spaces,
        and the <code>title</code> is shown at the top of the progress screen.</span></div>
    <div><code>TASK_STATUS text</code><span>The main line saying what the task is doing now.</span></div>
    <div><code>TASK_DETAIL text</code><span>A smaller second line, such as a file name or a count.</span></div>
    <div><code>TASK_PROGRESS value max</code><span>Fills the progress bar, for example <code>TASK_PROGRESS 3
        10</code>. A <code>max</code> of 0 shows a moving bar for work of unknown length.</span></div>
    <div><code>TASK_LOG level text</code><span>Writes a line to the log without showing it, with a level such as
        <code>info</code> or <code>warn</code>.</span></div>
    <div><code>TASK_ERROR code text</code><span>Reports a failure. The <code>code</code> is a short name for the log
        and the <code>text</code> is shown to the person using the device.</span></div>
    <div><code>TASK_COMPLETE text</code><span>Finishes the task and shows the closing message.</span></div>
    <div><code>TASK_PROMPT ...</code><span>Asks a question and gives back the answer. See Asking a question,
        below.</span></div>
    <div><code>TASK_IS_NATIVE</code><span>True when the task is running on the progress screen, and false in a
        terminal or over SSH.</span></div>
</div>

{: .important }
A task finishes well when it calls `TASK_COMPLETE` and exits with 0. Calling `TASK_ERROR` or exiting with any other
number shows the task as failed.

## Asking a question

`TASK_PROMPT` shows a dialogue on the device and prints the option that was chosen. Set `EXECUTION_MODE` to `prompt` for
tasks that use it.

```sh
CHOICE=$(TASK_PROMPT "clear_saves" "confirm" "Clear Saves" \
	"Remove every save file in this folder?" "Clear|Cancel" "Cancel") || CHOICE="Cancel"

if [ "$CHOICE" != "Clear" ]; then
	TASK_COMPLETE "Nothing was changed"
	exit 0
fi
```

<div class="guide-paths" markdown="0">
    <div><code>id</code><span>A short name for the question.</span></div>
    <div><code>type</code><span><code>confirm</code> for a yes or no style question, or <code>choice</code> to pick
        from a list.</span></div>
    <div><code>title</code><span>The heading of the dialogue.</span></div>
    <div><code>message</code><span>The question itself.</span></div>
    <div><code>options</code><span>The answers, separated by <code>|</code>, such as
        <code>Low|Medium|High</code>.</span></div>
    <div><code>default</code><span>The answer selected when the dialogue opens, and the answer given when the task
        runs outside the frontend.</span></div>
</div>

{: .warning }
Pressing **B** on a question picks the **last** option, so always put the safe answer, such as `Cancel`, last. If the
task is cancelled while a question is open, `TASK_PROMPT` returns a non-zero status, which is why the example falls back
to `Cancel`.

## Cancelling

With `CAN_CANCEL: 1`, pressing **B** while the task runs asks it to stop. After a second and a half the task receives
`TERM`, and after three seconds it is stopped outright. Catch `TERM` to tidy up anything left half finished.

```sh
TEMP="$MUOS_RUN_DIR/my_task.tmp"
trap 'rm -f "$TEMP"; exit 1' TERM

# long running work that writes to $TEMP
```

## Rules for task scripts

<div class="guide-paths" markdown="0">
    <div><code>POSIX sh</code><span>Tasks run in BusyBox <code>sh</code>, so avoid features that only bash has, such
        as <code>[[ ]]</code> and arrays.</span></div>
    <div><code>Descriptor 3</code><span>The task functions talk to the frontend through descriptor 3. Never close
        or redirect it.</span></div>
    <div><code>Plain output</code><span>In <code>progress</code> and <code>prompt</code> modes, ordinary
        <code>echo</code> output is not shown. Use <code>TASK_STATUS</code> or <code>TASK_DETAIL</code> for anything
        the user should see.</span></div>
    <div><code>Errors</code><span>Anything written to stderr goes to the log only.</span></div>
    <div><code>Unique names</code><span>Give your tasks names that the built-in tasks do not use, so an update cannot
        replace them.</span></div>
    <div><code>Keep a copy</code><span>A fresh install replaces <code>/opt/muos/share/task</code>, so keep your own
        tasks somewhere safe as well.</span></div>
</div>

## Useful helpers

These come from `func.sh` and are used throughout the built-in tasks.

<div class="guide-paths" markdown="0">
    <div><code>GET_VAR area key</code><span>Reads a setting. Areas are <code>config</code>, <code>device</code>,
        <code>kiosk</code> and <code>system</code>, for example <code>GET_VAR "device"
        "storage/rom/mount"</code>.</span></div>
    <div><code>SET_VAR area key value</code><span>Changes a setting, for example <code>SET_VAR "config"
        "settings/general/orientation" 0</code>.</span></div>
    <div><code>DELETE_CRUFT folder</code><span>Removes macOS and Windows junk files from a folder.</span></div>
    <div><code>LOG_INFO "$0" 0 tag text</code><span>Writes to the MustardOS log when debug logging is on.
        <code>LOG_WARN</code>, <code>LOG_ERROR</code> and <code>LOG_DEBUG</code> work the same way.</span></div>
    <div><code>$MUOS_STORE_DIR</code><span>The MustardOS storage folder, which holds the catalogue, history,
        collections and other user data.</span></div>
    <div><code>$MUOS_SHARE_DIR</code><span>The shared MustardOS folder, which holds emulator files, tasks and other
        bundled data.</span></div>
    <div><code>$MUOS_RUN_DIR</code><span>A folder in memory for temporary files. It is cleared at every
        restart.</span></div>
</div>

### Writing a report

The Diagnostics tasks share a report library. It loads `func.sh` and `ui.sh` itself, so it is the only file a report
task needs to source. Reports are saved to `MUOS/log/diagnostics` on SD1.

```sh
#!/bin/sh
# HELP: Checks the fan sensor and saves a report to SD1
# ICON: diagnostic
# EXECUTION_MODE: progress
# CAN_CANCEL: 0
# PROTOCOL_VERSION: 1

. /opt/muos/script/var/diag.sh

DIAG_BEGIN "fan_report" "Fan Report"

DIAG_SECTION "Fan"
DIAG_KV "Speed" "$(cat /sys/class/hwmon/hwmon0/fan1_input 2>/dev/null)"
DIAG_CMD "Temperatures" cat /sys/class/thermal/thermal_zone0/temp
[ -e /sys/class/hwmon/hwmon0 ] || DIAG_FINDING "FAN" "No fan sensor was found."

DIAG_FINISH "Fan report saved"
```

<div class="guide-paths" markdown="0">
    <div><code>DIAG_BEGIN id title</code><span>Starts the task and the report, and records the board, version and
        kernel.</span></div>
    <div><code>DIAG_SECTION name</code><span>Starts a new section in the report and shows it as the
        status.</span></div>
    <div><code>DIAG_KV label value</code><span>Writes one labelled value.</span></div>
    <div><code>DIAG_CMD label command</code><span>Runs a command for up to 15 seconds and writes its
        output.</span></div>
    <div><code>DIAG_FILE path</code><span>Writes the contents of a file, or notes that it is missing.</span></div>
    <div><code>DIAG_FINDING area text</code><span>Adds a finding to the list at the end of the report.</span></div>
    <div><code>DIAG_FINISH message</code><span>Writes the findings, saves the report and finishes the
        task.</span></div>
</div>

## Testing from a terminal

Run the script over SSH to check it before trying it on the device screen. Outside the frontend the task functions
print plain text, and `TASK_PROMPT` answers with its default.

```sh
sh "/opt/muos/share/task/Count ROMs.sh"
```
