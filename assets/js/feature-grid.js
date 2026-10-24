/*
 * Homepage feature grid: renders a random subset of the feature pool below, every
 * slot included, and rewires itself on demand via the "Refresh" button.
 *
 * NOTE: just-the-docs compresses page HTML at build time (see the theme's
 * compress.html layout), which collapses whitespace/newlines everywhere outside
 * <pre> blocks. That has no effect here since this file is loaded as a separate
 * static asset, not inlined into the page - but keep using block comments like
 * this one rather than "//" line comments if any of this logic ever gets inlined
 * into a page again, since a collapsed "//" comment would swallow every line of
 * code that followed it.
 */
(function () {
    var POOL = [
        {
            icon: "/tour/assets/glyphs/muxretro/settings.svg",
            href: "/tour/modules/muxretro",
            title: "Pickles",
            desc: "Our own Libretro core player, with themed menus, flexible saves, controls, visual tools, multiplayer, and achievements."
        },
        {
            icon: "/tour/assets/glyphs/muxmedia/video.svg",
            href: "/tour/modules/muxmedia",
            title: "Wasabi",
            desc: "Play video, audio, playlists, live television, and live radio with bookmarks, visualisers, and themed controls."
        },
        {
            icon: "/tour/assets/glyphs/muxoption/core.svg",
            href: "/tour/modules/muxoption",
            title: "Content Options",
            desc: "Fine tune the core, governor, control scheme, filters, and shaders on a per content, core, or directory basis."
        },
        {
            icon: "/tour/assets/glyphs/muxtweakgen/rgb.svg",
            href: "/tour/modules/muxrgb",
            title: "RGB Lighting",
            desc: "Configure the RGB lighting fitted to supported devices, with animation modes, brightness, and per zone colours."
        },
        {
            icon: "/tour/assets/glyphs/muxoption/overlay.svg",
            href: "/tour/modules/muxoverlay",
            title: "Overlays",
            desc: "Layer a base overlay, and battery, volume, and brightness indicators, over your content with full control over placement and scale."
        },
        {
            icon: "/tour/assets/glyphs/muxcustom/animation.svg",
            href: "/tour/modules/muxcustom#box-art",
            title: "Box Art Transitions",
            desc: "Fade or slide box art in as you scroll through the Content Explorer, or turn transitions off entirely."
        },
        {
            icon: "/tour/assets/glyphs/muxcustom/videowallpaper.svg",
            href: "/tour/modules/muxcustom",
            title: "Video Wallpapers",
            desc: "Themes can ship an animated MP4 background, which you can turn on from Customisation whenever a theme supports it."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/shimmerfix.svg",
            href: "/tour/modules/muxretro-imagecorrections",
            title: "Shimmer Fix",
            desc: "Snap the game image to exact pixel multiples of its native size, removing the shimmer you sometimes see on scrolling repeated textures."
        },
        {
            icon: "/tour/assets/glyphs/muxconfig/theme.svg",
            href: "/tour/modules/muxtheme",
            title: "Theme Customisation",
            desc: "Browse and download themes directly on-device, or install your own, to completely change the look and feel of the frontend."
        },
        {
            icon: "/tour/assets/glyphs/muxkiosk/advanced.svg",
            href: "/tour/modules/muxkiosk",
            title: "Kiosk Mode",
            desc: "Lock down the frontend for shared or public use, hiding or restricting whichever features you choose."
        },
        {
            icon: "/tour/assets/glyphs/muxinfo/activity.svg",
            href: "/tour/modules/muxactivity",
            title: "Activity Tracker",
            desc: "Track play time, launch counts, and long term trends to better understand your personal play habits."
        },
        {
            icon: "/tour/assets/glyphs/muxconfig/backup.svg",
            href: "/tour/modules/muxbackup",
            title: "Device Backup",
            desc: "Create individual backups or merge everything into one big archive, great for updating or sharing configurations."
        },
        {
            icon: "/tour/assets/glyphs/muxassign/download.svg",
            href: "/tour/modules/muxcore",
            title: "Core Management",
            desc: "Check every installed Libretro core, install missing ones, and bring published updates straight onto the device."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/state.svg",
            href: "/tour/modules/muxretro-gamestate",
            title: "Game State",
            desc: "Save your progress to a quicksave, autosave, or one of many numbered slots, each with its own screenshot preview."
        },
        {
            icon: "/tour/assets/glyphs/muxconnect/bluetooth.svg",
            href: "/tour/modules/muxbtall",
            title: "Bluetooth",
            desc: "Pair controllers, headphones, and other Bluetooth devices, and manage previously paired connections."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/patch.svg",
            href: "/tour/modules/muxretro-patches",
            title: "Patches",
            desc: "Enable or disable translation and fix patches kept with your content, applied as the game loads without changing the original file."
        },
        {
            icon: "/tour/assets/glyphs/muxsearch/global.svg",
            href: "/tour/modules/muxsearch",
            title: "Universal Search",
            desc: "Quickly locate content by name across every connected storage device from a single search screen."
        },
        {
            icon: "/tour/assets/glyphs/muxremap/layout.svg",
            href: "/tour/modules/muxremap",
            title: "Button Remapping",
            desc: "Remap physical buttons and analogue sticks to different in-game inputs, with independent Retro and Modern layouts."
        },
        {
            icon: "/tour/assets/glyphs/muxcustom/type.svg",
            href: "/tour/modules/muxcustom#font",
            title: "Font Settings",
            desc: "Choose where fonts come from and fine tune individual sizes across different areas of the interface."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/network.svg",
            href: "/tour/modules/muxretro-netplay",
            title: "Network Play",
            desc: "Play the same game together over your home network or the internet, with one device hosting and the other joining."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/network.svg",
            href: "/tour/modules/muxretro-gamelink",
            title: "Game Link",
            desc: "Bring back the link cable, trading and battling between two devices over your network or two games side by side."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/trophy.svg",
            href: "/tour/modules/muxretro-cheevo",
            title: "RetroAchievements",
            desc: "Optional challenges, progress tracking, and leaderboards for supported content, with unlocks held safely through brief connection drops."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/cheat.svg",
            href: "/tour/modules/muxretro-cheats",
            title: "Cheats",
            desc: "Switch cheat codes on or off for the current content, loaded from its matching cheat file and applied through the core."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/macro.svg",
            href: "/tour/modules/muxretro-macros",
            title: "Macros",
            desc: "Record a named sequence of buttons and fire the whole thing from a single press, set up separately for each controller port."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/settings.svg",
            href: "/tour/modules/muxretro-profiles",
            title: "Pickles Profiles",
            desc: "Apply Safe, Balanced, or Quality in one step, or save your own setup as a profile for a game, a core, or everything."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/shader.svg",
            href: "/tour/modules/muxretro-shaders",
            title: "Shaders",
            desc: "Download, collect, and preview shaders live over the game picture, then fine tune their parameters before saving."
        },
        {
            icon: "/tour/assets/glyphs/muxretro/border.svg",
            href: "/tour/modules/muxretro-vignette",
            title: "Vignette",
            desc: "Shape and soften the edge of the picture with round, square, or squircle vignettes, previewed as you adjust them."
        },
        {
            icon: "/tour/assets/glyphs/muxmedia/bookmark.svg",
            href: "/tour/modules/muxmedia-bookmarks",
            title: "Media Bookmarks",
            desc: "Save named positions in any video or audio file in Wasabi, complete with thumbnails, and jump straight back to them."
        },
        {
            icon: "/tour/assets/glyphs/muxterm/terminal.svg",
            href: "/tour/modules/muxterm",
            title: "Mustard Terminal",
            desc: "A full command line built into Applications, with its own on-screen keyboard, drawn in your theme's colours and fonts."
        },
        {
            icon: "/tour/assets/glyphs/muxconnect/link.svg",
            href: "/tour/modules/muxlink",
            title: "Direct Link",
            desc: "Cable two MustardOS devices together with wired network adapters, with addresses and discovery handled for you."
        },
        {
            icon: "/tour/assets/glyphs/muxconnect/service.svg",
            href: "/tour/modules/muxwebserv",
            title: "Web Services",
            desc: "Switch on remote shells, file transfer, syncing, and the Web Dashboard to reach your device from any other machine."
        },
        {
            icon: "/tour/assets/glyphs/muxlaunch/collection.svg",
            href: "/tour/modules/muxcollect",
            title: "Collections",
            desc: "Group your favourite content into personal sets and folders, freely mixing items from any system."
        },
        {
            icon: "/tour/assets/glyphs/muxinfo/screenshot.svg",
            href: "/tour/modules/muxshot",
            title: "Screenshots",
            desc: "Browse, preview, and tidy every screenshot you have captured, right on the device."
        },
        {
            icon: "/tour/assets/glyphs/muxconfig/access.svg",
            href: "/tour/modules/muxprofile",
            title: "Profiles",
            desc: "Apply an accessibility profile, the one supplied with your device or your own saved settings in one step."
        },
        {
            icon: "/tour/assets/glyphs/muxtweakgen/displaytemp.svg",
            href: "/tour/modules/muxdistemp",
            title: "Colour Temperature",
            desc: "Warm the screen automatically between sunset and sunrise, or pick a fixed colour temperature that suits you."
        },
        {
            icon: "/tour/assets/glyphs/muxtweakgen/lock.svg",
            href: "/tour/modules/muxpasscfg",
            title: "Passcodes",
            desc: "Lock booting, launching content, or system settings behind their own PIN, each with an optional lock screen message."
        },
        {
            icon: "/tour/assets/glyphs/muxtweakgen/soundfont.svg",
            href: "/tour/modules/muxsoundfont",
            title: "Soundfonts",
            desc: "Choose the instruments General MIDI music is played back with, from any compatible soundfont on your device."
        },
        {
            icon: "/tour/assets/glyphs/muxcustom/logo.svg",
            href: "/tour/modules/muxlogo",
            title: "Boot Logo",
            desc: "Pick the picture shown while your device starts up, including your own images dropped onto storage."
        },
        {
            icon: "/tour/assets/glyphs/muxinfo/space.svg",
            href: "/tour/modules/muxspace",
            title: "Storage Space",
            desc: "See how much room is used and left on every storage device, with a section for each one."
        },
        {
            icon: "/tour/assets/glyphs/muxapp/archive.svg",
            href: "/tour/modules/muxarchive",
            title: "Archive Manager",
            desc: "Install updates, applications, themes, saves, and configuration packages simply by copying them onto your device."
        },
        {
            icon: "/tour/assets/glyphs/muxinfo/tester.svg",
            href: "/tour/modules/muxtester",
            title: "Input Tester",
            desc: "Press any button or push a stick and watch it light up, so you know everything is working and mapped correctly."
        }
    ];

    var DISPLAY_COUNT = 6; /* cards drawn at random from POOL */

    function shuffle(arr) {
        /* Fisher-Yates */
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    function buildCard(feature) {
        var a = document.createElement("a");
        a.className = "feature-card";
        a.href = feature.href;

        var img = document.createElement("img");
        img.src = feature.icon;
        img.alt = "";
        img.width = 40;
        img.height = 40;
        img.decoding = "async";
        a.appendChild(img);

        var title = document.createElement("div");
        title.className = "feature-card-title";
        title.textContent = feature.title;
        a.appendChild(title);

        var desc = document.createElement("p");
        desc.textContent = feature.desc;
        a.appendChild(desc);

        return a;
    }

    function render() {
        var grid = document.getElementById("feature-grid");
        if (!grid) return;

        var features = shuffle(POOL.slice()).slice(0, DISPLAY_COUNT);

        grid.innerHTML = "";
        features.forEach(function (feature) { grid.appendChild(buildCard(feature)); });
    }

    function init() {
        render();

        var refreshBtn = document.getElementById("feature-refresh");
        if (refreshBtn) refreshBtn.addEventListener("click", render);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
