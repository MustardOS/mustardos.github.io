---
title: Custom Fonts
layout: default
permalink: /themes/fonts
parent: Themes
nav_order: 3
has_toc: false
---

# Converting fonts into a Binary file

For themes on MustardOS, you can implement custom fonts! To do this, you can either use
this [website](https://lvgl.io/tools/fontconverter), or you can do so offline using terminal commands. For the later,
you must first install the script that will convert your
`.ttf`, `.otf`, or `.woff` type font into a specific `.bin` file that MustardOS will accept.

- You will first need node.js installed. Install a pre-built packaged version of
  this [here](https://nodejs.org/en/download/prebuilt-installer).
- Next, open up cmd (Windows) / Command Line (Linux) / Terminal (macOS), and paste this line of code to install the
  script;

`npm i lv_font_conv -g`

> *For macOS users, you may need to run this command as an admin. Instead, type `sudo` and then paste the code to
install this.
> You may need to type in your computer's admin password.*

# Using the script

`lv_font_conv --bpp 4 --size 20 --font "username/folder/example.ttf" -r 0x00-0xFF --format bin --no-compress --no-prefilter -o "./Downloads/default.bin"`

Paste this line of code, replacing the `username/folder/example.ttf` with your font (by dragging and dropping it into
your terminal window,
or pasting the file path), and you can convert your font to the right format.

This will place your font in your current user directory's Downloads folder. If you want to change this, just type in
your preferred output path at the end of the command line.

The information below is applicable to users converting fonts with the offline scripts
or [online website](https://lvgl.io/tools/fontconverter);

- Feel free to adjust the size value. 20 is a good size for most of the elements on screen.
- Where it states `0x00-0xFF` is the range of symbols in the font. It is recommended to include the following ranges in
  your font to support the most languages while still maintaining performance.

| Range                          | Description               |
|--------------------------------|---------------------------|
| 0x0020-0x007E                  | Basic Latin               |
| 0x00A1-0x00AC<br>0x00AE-0x00FF | Latin-1 Supplement        |
| 0x0100-0x017F                  | Latin Extended-A          |
| 0x0180-0x024F                  | Latin Extended-B          |
| 0x0400-0x04FF                  | Cyrillic                  |
| 0x0900-0x097F                  | Devanagari                |
| 0x1E00-0x1EFF                  | Latin Extended Additional |
| 0x2010-0x2027<br>0x2030-0x205E | General Punctuation       |

The resulting command would look like this: <br>
`lv_font_conv --bpp 4 --size 20 --font "username/folder/example.ttf" -r 0x0020-0x007E,0x00A1-0x00AC,0x00AE-0x00FF,0x0100-0x017F,0x0180-0x024F,0x0400-0x04FF,0x0900-0x097F,0x1E00-0x1EFF,0x2010-0x2027,0x2030-0x205E --format bin --no-compress --no-prefilter -o "./Downloads/default.bin"` <br><br>
**Note:** Not all fonts support the character ranges listed above. You may receive a message a message
like `Font "Font_Name.ttf" doesn't have any characters included in range 0x900-0x97f` If this happens you can either try
a different font or try the lv_font_conv again without that range.

- bpp is used for smoothness. 4 is a good value for most fonts. You can change this to either 1, 2, 4, or 8.

> *You may have an issue generating* `.bin` *files if the font you are trying to convert has ` ` (spaces) in the path.
> In place of them, you can get* `\` *(backslashes). On macOS (and potentially on the other systems), this will not
work.
> You will need to first rename the* `.ttf` *file (and folders leading to the file) removing spaces in order to remove
backslashes.*

If you want to learn more about this type of font conversion, or for more details on this script, see
the [lv_font_conv GitHub repository](https://github.com/lvgl/lv_font_conv).

# Install Custom Fonts

Within the `./font/` folder, you can drop in a compiled font here either named `default.bin` or `mux_example.bin`
according
to whichever program you'd like that individual font to be used for. Check out the naming conventions in the Theme
Structure page.
