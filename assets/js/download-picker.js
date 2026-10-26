(() => {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const data = JSON.parse($("#picker-data").textContent);
  const devices = data.devices;
  const feature = (device, key) => (device.features || {})[key];
  const aspect = screen => {
    const [width, height] = String(screen || "").split("x").map(Number);
    if (!width || !height) return "";
    const ratio = width / height;
    if (Math.abs(ratio - 1) < 0.05) return "Square (1:1)";
    if (Math.abs(ratio - 4 / 3) < 0.05) return "Standard (4:3)";
    if (Math.abs(ratio - 3 / 2) < 0.05) return "Wide (3:2)";
    if (Math.abs(ratio - 16 / 9) < 0.05) return "Widescreen (16:9)";
    return `${width}x${height}`;
  };
  const FORMS = {horizontal: "Horizontal", vertical: "Vertical", clamshell: "Clamshell (Lid)"};
  const STICKS = ["No Sticks", "One Stick", "Two Sticks"];

  const groups = [
    {key: "maker", label: "Manufacturer", value: device => device.maker},
    {key: "form", label: "Shape", value: device => FORMS[feature(device, "form")] || ""},
    {key: "sticks", label: "Analogue Sticks", value: device => STICKS[feature(device, "sticks")] || ""},
    {key: "screen", label: "Screen", value: device => aspect(feature(device, "screen"))}
  ];
  const filters = {};
  let chosen = null;

  function option(label, pressed, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-pressed", String(pressed));
    if (pressed) button.className = "active";
    button.addEventListener("click", onClick);
    return button;
  }

  function matches(device, except) {
    return groups.every(group => group.key === except || !filters[group.key] || group.value(device) === filters[group.key]);
  }

  function renderFilters() {
    const holder = $("#picker-filters");
    holder.replaceChildren();
    for (const group of groups) {
      const values = [...new Set(devices.map(group.value).filter(Boolean))];
      if (values.length < 2) continue;
      const order = {Horizontal: 0, Vertical: 1, "Clamshell (Lid)": 2, "No Sticks": 0, "One Stick": 1, "Two Sticks": 2};
      values.sort((a, b) => (order[a] ?? 9) - (order[b] ?? 9) || a.localeCompare(b, "en-AU"));

      const row = document.createElement("div");
      row.className = "picker-filter";
      const title = document.createElement("span");
      title.className = "picker-filter-label";
      title.textContent = group.label;
      const options = document.createElement("div");
      options.className = "picker-options";
      options.setAttribute("role", "group");
      options.setAttribute("aria-label", group.label);
      options.append(option("Any", !filters[group.key], () => setFilter(group.key, "")));
      for (const value of values) {
        const available = devices.some(device => matches(device, group.key) && group.value(device) === value);
        const button = option(value, filters[group.key] === value, () => setFilter(group.key, filters[group.key] === value ? "" : value));
        button.disabled = !available && filters[group.key] !== value;
        options.append(button);
      }
      row.append(title, options);
      holder.append(row);
    }
    $("#picker-clear").hidden = !Object.values(filters).some(Boolean);
  }

  function tags(device) {
    const list = [FORMS[feature(device, "form")], STICKS[feature(device, "sticks")], aspect(feature(device, "screen"))];
    if (feature(device, "wifi") === 1) list.push("Wi-Fi");
    if (feature(device, "wifi") === 2) list.push("External Wi-Fi");
    if (feature(device, "bluetooth")) list.push("Bluetooth");
    if (feature(device, "hdmi")) list.push("HDMI");
    return list.filter(Boolean);
  }

  function renderDevices() {
    const holder = $("#picker-devices");
    holder.replaceChildren();
    const shown = devices.filter(device => matches(device));
    for (const device of shown) {
      const button = option("", chosen && chosen.id === device.id, () => chooseDevice(device));
      button.className = `picker-device${chosen && chosen.id === device.id ? " active" : ""}`;
      if (device.image) {
        const thumb = document.createElement("span");
        thumb.className = "picker-thumb";
        const image = document.createElement("img");
        image.src = device.image;
        image.alt = "";
        image.width = 64;
        image.height = 64;
        image.loading = "lazy";
        thumb.append(image);
        button.append(thumb);
      }
      const text = document.createElement("span");
      text.className = "picker-device-text";
      const name = document.createElement("strong");
      name.textContent = `${device.maker} ${device.name}`;
      const detail = document.createElement("span");
      detail.className = "picker-device-tags";
      detail.textContent = tags(device).join(" · ");
      text.append(name, detail);
      button.append(text);
      holder.append(button);
    }
    $("#picker-count").textContent = `(${shown.length})`;
    $("#picker-none").hidden = shown.length > 0;
  }

  function setFilter(key, value) {
    filters[key] = value;
    renderFilters();
    renderDevices();
  }

  function link(label, href, primary) {
    const anchor = document.createElement("a");
    anchor.className = primary ? "btn btn-primary" : "btn";
    anchor.href = href;
    anchor.textContent = label;
    return anchor;
  }

  function copyButton(value) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Copy";
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "Copied";
      } catch (_) {
        button.textContent = "Select and copy";
      }
      setTimeout(() => { button.textContent = "Copy"; }, 2000);
    });
    return button;
  }

  function renderResult() {
    const panel = $("#picker-result");
    panel.hidden = !chosen;
    if (!chosen) return;

    $("#picker-title").textContent = `${chosen.maker} ${chosen.name}`;
    $("#picker-thumb").hidden = !chosen.image;
    if (chosen.image) $("#picker-image").src = chosen.image;

    const release = data.release;
    $("#picker-release").textContent = release ? `MustardOS ${release.ver} ${release.code}` : "";

    const holder = $("#picker-downloads");
    holder.replaceChildren();
    const downloads = Array.isArray(chosen.downloads) ? chosen.downloads : [];
    if (!downloads.length) {
      const note = document.createElement("p");
      note.className = "empty";
      note.textContent = "Downloads for this device are coming soon. Check the release page for updates.";
      holder.append(note);
      if (release) holder.append(link("View Release Details", release.url, false));
      return;
    }

    for (const download of downloads) {
      const block = document.createElement("div");
      block.className = "picker-download";
      if (download.variant) {
        const title = document.createElement("h3");
        title.textContent = download.variant;
        block.append(title);
      }
      const row = document.createElement("div");
      row.className = "toolbar";
      if (download.gofile) row.append(link("Download from Gofile", download.gofile, true));
      if (download.mega) row.append(link("Download from MEGA", download.mega, false));
      if (download.filen) row.append(link("Download from Filen", download.filen, false));
      if (download.torrent) row.append(link("Download Torrent", `/assets/torrents/${download.torrent}.torrent`, false));
      block.append(row);
      if (download.hash) {
        const hash = document.createElement("p");
        hash.className = "picker-hash";
        const label = document.createElement("strong");
        label.textContent = "SHA256";
        const code = document.createElement("code");
        code.textContent = download.hash;
        hash.append(label, code, copyButton(download.hash));
        block.append(hash);
      }
      holder.append(block);
    }
  }

  function chooseDevice(device, block = "nearest") {
    chosen = device;
    renderDevices();
    renderResult();
    $("#picker-result").scrollIntoView({behavior: "smooth", block});
  }

  $("#picker-clear").addEventListener("click", () => {
    for (const key of Object.keys(filters)) filters[key] = "";
    renderFilters();
    renderDevices();
  });

  const start = devices.find(device => device.id === location.hash.slice(1));
  if (start) chosen = start;
  renderFilters();
  renderDevices();
  renderResult();
})();
