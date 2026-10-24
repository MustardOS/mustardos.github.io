/*
 * No widows for browsers without text-wrap-style: pretty. The last two words of every block of text are joined with a
 * non-breaking space, and hyphens and slashes in or between those words get a word joiner, so the final word never
 * wraps onto a line by itself. A pair too wide for its box would break inside a word instead, so it is left apart, with
 * only the last word kept whole. Only the text after the last line break of a block counts. Text added later by the
 * tools, and resizing, are handled as they happen.
 */
(function () {
    if (window.CSS && CSS.supports && CSS.supports("text-wrap-style", "pretty")) return;

    var NBSP = "\u00a0";
    var WJ = "\u2060";
    var HYPHEN = /[-\u2010\u2012\u2013\u2014]/;
    var BREAKS = /[-\u2010\u2012\u2013\u2014\/]/;
    var SKIP = { PRE: 1, TEXTAREA: 1, INPUT: 1, SELECT: 1, OPTION: 1, SCRIPT: 1, STYLE: 1, SVG: 1, NOSCRIPT: 1 };
    var FIXED = { CODE: 1, KBD: 1, SAMP: 1 };
    var joined = new WeakMap();

    function inside(el, names) {
        for (; el && el !== document.body; el = el.parentElement) {
            if (names[el.nodeName.toUpperCase()] || el.isContentEditable) return true;
        }
        return false;
    }

    function blockOf(node, cache) {
        for (var el = node.parentElement; el && el !== document.body; el = el.parentElement) {
            if (!cache.has(el)) cache.set(el, getComputedStyle(el));
            var display = cache.get(el).display;
            if (display !== "inline" && display !== "contents") return el;
        }
        return null;
    }

    function layout(nodes) {
        var text = "", parts = [];
        nodes.forEach(function (node) {
            parts.push({ node: node, from: text.length });
            text += node.nodeValue;
        });
        var words = [], match, re = /\S+/g;
        while ((match = re.exec(text))) {
            words.push({ start: match.index, end: match.index + match[0].length });
            if (words.length > 2) words.shift();
        }
        return { text: text, parts: parts, words: words };
    }

    function at(parts, pos) {
        for (var i = parts.length - 1; i >= 0; i--) {
            if (parts[i].from <= pos) return { node: parts[i].node, offset: pos - parts[i].from };
        }
        return null;
    }

    function oneLine(nodes, first) {
        var info = layout(nodes);
        if (info.words.length < 2) return true;
        var from = first ? info.words[1].start : info.words[0].end - 1;
        var start = at(info.parts, from), end = at(info.parts, info.words[1].end - 1);
        var range = document.createRange();
        range.setStart(start.node, start.offset);
        range.setEnd(end.node, end.offset + 1);
        var rects = range.getClientRects();
        for (var i = 1; i < rects.length; i++) {
            if (rects[i].width && rects[i].top >= rects[0].bottom - 1) return false;
        }
        return true;
    }

    function restore(nodes) {
        nodes.forEach(function (node) {
            if (!joined.has(node)) return;
            node.nodeValue = joined.get(node);
            joined.delete(node);
        });
    }

    function replace(parts, pos, length, glue) {
        var spot = at(parts, pos), node = spot.node, text = node.nodeValue;
        if (!joined.has(node)) joined.set(node, text);
        node.nodeValue = text.slice(0, spot.offset) + glue + text.slice(spot.offset + length);
    }

    function glueWord(info, index) {
        var word = info.text.slice(info.words[index].start, info.words[index].end);
        if (word.length > 24 || /:\/\/|^www\./i.test(word)) return;
        for (var pos = info.words[index].end - 2; pos >= info.words[index].start; pos--) {
            if (!BREAKS.test(info.text.charAt(pos)) || info.text.charAt(pos + 1) === WJ) continue;
            var mark = at(info.parts, pos);
            if (mark.offset + 1 < mark.node.nodeValue.length && !inside(mark.node.parentElement, FIXED)) {
                replace(info.parts, pos + 1, 0, WJ);
            }
        }
    }

    function join(nodes) {
        var info = layout(nodes);
        if (info.words.length < 2) return;
        var gap = info.words[1].start - 1;
        var gapAt = at(info.parts, gap);

        if (info.text.charAt(gap) === NBSP) {
            if (joined.has(gapAt.node) && !oneLine(nodes, 0)) restore(nodes);
            else return;
        } else if (!inside(gapAt.node.parentElement, FIXED)) {
            glueWord(info, 1);
            replace(info.parts, gap, 1, HYPHEN.test(info.text.charAt(gap - 1)) ? WJ + NBSP : NBSP);
            glueWord(layout(nodes), 0);
            if (oneLine(nodes, 0)) return;
            restore(nodes);
        }

        glueWord(layout(nodes), 1);
        if (!oneLine(nodes, 1)) restore(nodes);
    }

    function run() {
        var cache = new WeakMap();
        var blocks = new Map();
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
        for (var node = walker.nextNode(); node; node = walker.nextNode()) {
            var br = node.nodeName.toUpperCase() === "BR";
            if (node.nodeType !== 3 && !br) continue;
            if (inside(node.parentElement, SKIP)) continue;
            var block = blockOf(node, cache);
            if (!block || cache.get(block).whiteSpace.indexOf("nowrap") !== -1) continue;
            if (br) blocks.set(block, []);
            else {
                if (!blocks.has(block)) blocks.set(block, []);
                blocks.get(block).push(node);
            }
        }
        blocks.forEach(join);
    }

    var queued = false;

    function queue() {
        if (queued) return;
        queued = true;
        requestAnimationFrame(function () {
            queued = false;
            run();
        });
    }

    function start() {
        run();
        new MutationObserver(function (records) {
            for (var i = 0; i < records.length; i++) {
                if (records[i].addedNodes.length) return queue();
            }
        }).observe(document.body, { childList: true, subtree: true });
        window.addEventListener("resize", queue);
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();
})();
