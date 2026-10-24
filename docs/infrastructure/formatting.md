---
layout: default
title: Text Formatting
parent: How MustardOS Works
permalink: /docs/infrastructure/formatting
nav_order: 8
---

# **Text Formatting**

MustardOS understands a set of formatting codes that add colour and style to text, in a way that will feel familiar
to anyone who has spent a few too many evenings in a popular block building game. Each code is the section sign `§`
followed by a single character, and everything after the code takes on its style until the text says otherwise.

## Where codes work

<div class="guide-paths" markdown="0">
    <div><code>File and folder names</code><span>Content in Explore Content, Collections, History and Search shows its colours and styles. Long names still end in an ellipsis and scroll when highlighted.</span></div>
    <div><code>Content descriptions</code><span>Catalogue text files shown from <strong>Information</strong> use the full set of colours and styles.</span></div>
    <div><code>Pickles manuals</code><span>Catalogue manuals in the Pickles manual viewer show colours, bold, italic, underline and strikethrough. Obfuscated text is not used there.</span></div>
    <div><code>Help and information boxes</code><span>Any message shown in the information box, including translated help text.</span></div>
    <div><code>Toasts and notifications</code><span>Short messages that appear along the screen use the codes as well.</span></div>
</div>

Codes are hidden wherever they are understood, so a folder named `§6Gold Classics` appears in gold as **Gold
Classics**. Names are still sorted by their visible text, and the title at the top of the screen shows the plain name.

## Typing the section sign

| Where you are typing | How to type `§`                                                              |
|:---------------------|:-----------------------------------------------------------------------------|
| Windows              | Hold <kbd>Alt</kbd> and type <kbd>0167</kbd> on the number pad               |
| macOS                | Press <kbd>Option</kbd> + <kbd>6</kbd>                                       |
| Linux                | Press <kbd>Compose</kbd>, then <kbd>s</kbd> and <kbd>o</kbd>                 |
| Web Dashboard        | Use the formatting buttons when editing a manual in **Catalogue**            |
| Anywhere else        | Copy it from this page: §                                                    |

## Colour codes

| Code | Colour       | Swatch                                                   | Hex       |
|:-----|:-------------|:---------------------------------------------------------|:----------|
| `§0` | Black        | <span class="format-swatch format-swatch-0"></span>      | `#000000` |
| `§1` | Dark Blue    | <span class="format-swatch format-swatch-1"></span>      | `#0000AA` |
| `§2` | Dark Green   | <span class="format-swatch format-swatch-2"></span>      | `#00AA00` |
| `§3` | Dark Aqua    | <span class="format-swatch format-swatch-3"></span>      | `#00AAAA` |
| `§4` | Dark Red     | <span class="format-swatch format-swatch-4"></span>      | `#AA0000` |
| `§5` | Dark Purple  | <span class="format-swatch format-swatch-5"></span>      | `#AA00AA` |
| `§6` | Gold         | <span class="format-swatch format-swatch-6"></span>      | `#FFAA00` |
| `§7` | Grey         | <span class="format-swatch format-swatch-7"></span>      | `#AAAAAA` |
| `§8` | Dark Grey    | <span class="format-swatch format-swatch-8"></span>      | `#555555` |
| `§9` | Blue         | <span class="format-swatch format-swatch-9"></span>      | `#5555FF` |
| `§a` | Green        | <span class="format-swatch format-swatch-a"></span>      | `#55FF55` |
| `§b` | Aqua         | <span class="format-swatch format-swatch-b"></span>      | `#55FFFF` |
| `§c` | Red          | <span class="format-swatch format-swatch-c"></span>      | `#FF5555` |
| `§d` | Light Purple | <span class="format-swatch format-swatch-d"></span>      | `#FF55FF` |
| `§e` | Yellow       | <span class="format-swatch format-swatch-e"></span>      | `#FFFF55` |
| `§f` | White        | <span class="format-swatch format-swatch-f"></span>      | `#FFFFFF` |

## Style codes

| Code | Style         | Looks like                         | Notes                                                              |
|:-----|:--------------|:-----------------------------------|:-------------------------------------------------------------------|
| `§l` | Bold          | <strong>Bold text</strong>         | Fonts without a bold weight are thickened to match.                |
| `§o` | Italic        | <em>Italic text</em>               | Fonts without an italic style are slanted to match.                |
| `§n` | Underline     | <u>Underlined text</u>             |                                                                    |
| `§m` | Strikethrough | <s>Struck through text</s>         |                                                                    |
| `§k` | Obfuscated    | Letters that keep changing         | Each letter cycles through others of the same width. With **Reduce Motion** turned on, the scrambled letters stay still. |
| `§r` | Reset         | Back to normal                     | Clears every colour and style that came before it.                 |
| `§§` | Section sign  | §                                  | Shows a single section sign instead of starting a code.            |

## How codes combine

Codes stack, so `§c§l§n` gives red, bold, underlined text. A colour code changes only the colour, which means bold,
italic and the other styles stay on when the colour changes. Use `§r` to return to the normal look before carrying
on with plain text. Codes can be written in capitals as well, so `§C` and `§c` are the same red. A section sign
followed by anything that is not a code is shown exactly as it was typed.

## Examples

| You type                                | You see                                                                                   |
|:----------------------------------------|:------------------------------------------------------------------------------------------|
| `§6Gold Classics`                       | <span class="format-swatch format-swatch-6"></span> Gold Classics, in gold                |
| `§lBest of§r 1994`                      | <strong>Best of</strong> 1994                                                             |
| `§a§lNew§r Arrivals`                    | <span class="format-swatch format-swatch-a"></span> <strong>New</strong> in green, then Arrivals |
| `§oDirector's Cut§r Edition`            | <em>Director's Cut</em> Edition                                                           |
| `Secret §kLevel§r Ahead`                | Secret, a word that keeps scrambling, then Ahead                                          |
| `§9§nHighlights`                        | <span class="format-swatch format-swatch-9"></span> <u>Highlights</u>, in blue            |

{: .note }
> On a computer or in a file manager the codes are not understood, so names show the section sign and its letter as
> they were typed. That is expected, and MustardOS reads them as formatting once the card is back in your device.

## For translators and theme makers

Translated help text can use the same codes to pick out option names or important warnings, and the information box
shows them as formatted text. Help text shown on this website, such as the Profile Builder tooltips, has its codes
removed so it reads normally. Keep in mind that colours sit on top of whatever the active theme uses, so a coloured
name can be harder to read against a highlighted row in some themes.
