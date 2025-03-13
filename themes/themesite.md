---
layout: default
title: Themes
permalink: /themes
nav_enabled: true
nav_order: 4
has_children: true
---

# Themes
You can find all themes for muOS here. Click on a theme title to download a `.muxthm` file. Place that file on your device within `MUOS/theme`.

# Theme Library
Currently the Theme Repo is undertaking an overhaul, however you can still access themes shared by the community via the discord below.

- [Discord Community](https://discord.gg/muos). All these themes were made by members of the muOS community. Join the community today!

  
> *Some themes have matching folder artwork whilst navigating Explore Content, this is installed separately from themes. To see if a theme has these available, navigate to the specific theme's release page on the [muOS Discord server](https://discord.gg/muos).*

## Theme Filters
{% include themes_pixie.html %}

<script>
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".filter-checkbox").forEach(checkbox => {
            checkbox.addEventListener("change", filterItems);
        });

        function filterItems() {
            let checkedFilters = Array.from(document.querySelectorAll(".filter-checkbox:checked"))
                                      .map(cb => cb.value);

            document.querySelectorAll(".grid-item").forEach(item => {
                let tags = item.getAttribute("data-tags").split(" ");

                if (checkedFilters.length === 0 || tags.some(tag => checkedFilters.includes(tag))) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        }
    });
</script>