/*
 * Grand Tour map: live filter plus expand and collapse for the groups on /tour/map.
 * Block comments only, see the note at the top of feature-grid.js.
 */
(function () {
    function init() {
        var map = document.getElementById("tour-map-tree");
        var filter = document.getElementById("tour-map-filter");
        if (!map || !filter) return;

        var groups = Array.prototype.slice.call(map.querySelectorAll(".tour-map-group"));
        var items = Array.prototype.slice.call(map.querySelectorAll(".tour-map-list li"));
        var empty = document.getElementById("tour-map-empty");
        var saved = null; /* open state from before filtering, restored once the filter is cleared */

        function setAll(open) {
            saved = null;
            groups.forEach(function (group) { group.open = open; });
        }

        function apply() {
            var term = filter.value.trim().toLowerCase();
            var shown = 0;

            if (term && !saved) saved = groups.map(function (group) { return group.open; });

            /* children first, so a parent stays visible when any of its descendants match */
            for (var i = items.length - 1; i >= 0; i--) {
                var li = items[i];
                var link = li.firstElementChild;
                var self = !term || link.textContent.toLowerCase().indexOf(term) !== -1;
                var child = li.querySelector(":scope > ul > li:not([hidden])") !== null;
                li.hidden = !(self || child);
                link.classList.toggle("tour-map-hit", Boolean(term) && self);
            }

            groups.forEach(function (group) {
                var any = group.querySelector(".tour-map-list > li:not([hidden])") !== null;
                group.hidden = Boolean(term) && !any;
                if (term && any) group.open = true;
                if (!group.hidden) shown += 1;
            });

            empty.hidden = shown > 0;

            if (!term && saved) {
                groups.forEach(function (group, i) { group.open = saved[i]; });
                saved = null;
            }
        }

        filter.addEventListener("input", apply);
        document.getElementById("tour-map-expand").addEventListener("click", function () { setAll(true); });
        document.getElementById("tour-map-collapse").addEventListener("click", function () { setAll(false); });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
