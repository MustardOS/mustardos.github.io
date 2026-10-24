/*
 * Option filter for busy tour pages: hides options whose name and description do not match, and any
 * section left empty. Block comments only, see the note at the top of feature-grid.js.
 */
(function () {
    function init() {
        var filter = document.getElementById("tour-item-filter");
        var root = document.getElementById("tour-groups");
        if (!filter || !root) return;

        var groups = Array.prototype.slice.call(root.querySelectorAll(".tour-group"));
        var items = Array.prototype.slice.call(root.querySelectorAll(".tour-item"));
        var intro = document.querySelector(".tour-sections-intro");
        var empty = document.getElementById("tour-item-empty");
        var text = items.map(function (item) { return item.textContent.toLowerCase(); });

        filter.addEventListener("input", function () {
            var term = filter.value.trim().toLowerCase();
            var shown = 0;

            items.forEach(function (item, i) {
                item.hidden = Boolean(term) && text[i].indexOf(term) === -1;
            });

            groups.forEach(function (group) {
                group.hidden = group.querySelector(".tour-item:not([hidden])") === null;
                if (!group.hidden) shown += 1;
            });

            if (intro) intro.hidden = Boolean(term);
            empty.hidden = shown > 0;
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
