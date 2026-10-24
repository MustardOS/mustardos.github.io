(() => {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const data = JSON.parse($("#glyph-data").textContent);
  const files = data.files.filter(Boolean);
  const usage = data.usage.filter(Boolean);
  const NAMES = {
    header: "Header status icons", footer: "Footer navigation buttons", bar: "Volume and brightness bars",
    section: "Section bar arrows"
  };

  const uses = new Map();
  for (const entry of usage) {
    const key = `${entry.g}/${entry.i}`;
    if (!uses.has(key)) uses.set(key, []);
    const list = uses.get(key);
    if (!list.some(known => known.u === entry.u && known.n === entry.n)) list.push(entry);
  }

  const known = new Set(files);
  const folders = [...new Set(files.map(file => file.split("/")[0]))].sort();
  const select = $("#glyph-folder");
  for (const folder of folders) {
    const option = document.createElement("option");
    option.value = folder;
    option.textContent = NAMES[folder] ? `${folder} (${NAMES[folder]})` : folder;
    select.append(option);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function row(path) {
    const [folder, name] = [path.slice(0, path.indexOf("/")), path.slice(path.indexOf("/") + 1)];
    const item = element("li", "glyph-row");
    const image = element("img");
    image.src = `/tour/assets/glyphs/${path}.svg`;
    image.alt = "";
    image.width = 28;
    image.height = 28;
    image.loading = "lazy";
    item.append(image, element("code", "", `${folder}/${name}.svg`));
    const where = element("span", "glyph-where");
    const list = uses.get(path) || [];
    if (list.length) {
      list.slice(0, 3).forEach((entry, index) => {
        if (index) where.append(document.createTextNode(", "));
        const link = element("a", "", entry.n);
        link.href = entry.u;
        link.title = entry.t;
        where.append(link);
      });
      if (list.length > 3) where.append(element("span", "help", ` and ${list.length - 3} more`));
    } else if (!NAMES[folder]) {
      where.append(element("span", "help", "Not shown in the Grand Tour"));
    }
    item.append(where);
    return item;
  }

  function matches(path, query) {
    if (!query) return true;
    if (path.toLowerCase().includes(query)) return true;
    return (uses.get(path) || []).some(entry => `${entry.n} ${entry.t}`.toLowerCase().includes(query));
  }

  function render() {
    const query = $("#glyph-filter").value.trim().toLowerCase();
    const folder = select.value;
    const unusedOnly = $("#glyph-unused").checked;
    const holder = $("#glyph-groups");
    holder.replaceChildren();
    let shown = 0;
    for (const group of folders) {
      if (folder && group !== folder) continue;
      const paths = files.filter(path => path.startsWith(`${group}/`) && matches(path, query)
        && (!unusedOnly || !uses.has(path))).sort();
      if (!paths.length) continue;
      shown += paths.length;
      const section = element("section", "glyph-group");
      const head = element("div", "section-head");
      head.append(element("h2", "", group), element("span", "count", NAMES[group] || `${paths.length} glyphs`));
      section.append(head);
      const list = element("ul", "glyph-list");
      for (const path of paths) list.append(row(path));
      section.append(list);
      holder.append(section);
    }
    $("#glyph-count").textContent = `Showing ${shown} of ${files.length} glyphs.`;

    const missing = [...uses.keys()].filter(path => !known.has(path) && (!folder || path.startsWith(`${folder}/`))).sort();
    const list = $("#glyph-missing");
    list.replaceChildren();
    for (const path of missing) {
      const entry = uses.get(path)[0];
      const item = element("li");
      const link = element("a", "", entry.n);
      link.href = entry.u;
      item.append(element("code", "", `${path}.svg`), element("span", "", " for "), link);
      list.append(item);
    }
    $("#glyph-missing-panel").hidden = missing.length === 0;
  }

  $("#glyph-filter").addEventListener("input", render);
  select.addEventListener("change", render);
  $("#glyph-unused").addEventListener("change", render);
  render();
})();
