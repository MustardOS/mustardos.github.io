(() => {
  "use strict";
  const mock = document.getElementById("menu-mock");
  if (!mock) return;
  const tiles = [...mock.querySelectorAll(".menu-mock-tile")];
  const label = document.getElementById("menu-mock-label");
  const power = document.getElementById("menu-mock-power");
  const soundButton = document.getElementById("menu-mock-sound");
  const screen = document.getElementById("menu-mock-screen");
  const wall = document.getElementById("menu-mock-wall");
  const BOOT_MS = 2200;
  const COLUMNS = 4;
  const sounds = {};
  let index = 0;
  let soundOn = false;
  let busy = false;

  try { soundOn = localStorage.getItem("mustard-menu-sound") === "1"; } catch (_) {}

  function play(name) {
    if (!soundOn) return;
    if (!sounds[name]) sounds[name] = new Audio(`/assets/sounds/${name}.mp3`);
    const sound = sounds[name];
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  function paintSound() {
    soundButton.textContent = soundOn ? "Sound on" : "Sound off";
    soundButton.setAttribute("aria-pressed", String(soundOn));
  }

  function focusTile(next, silent) {
    if (next === index) return;
    tiles[index].classList.remove("active");
    index = next;
    tiles[index].classList.add("active");
    label.textContent = tiles[index].dataset.label;
    if (!silent) play("navigate");
  }

  function move(dx, dy) {
    if (busy) return;
    const row = Math.floor(index / COLUMNS);
    const column = index % COLUMNS;
    const rows = Math.ceil(tiles.length / COLUMNS);
    const nextColumn = (column + dx + COLUMNS) % COLUMNS;
    const nextRow = (row + dy + rows) % rows;
    focusTile(nextRow * COLUMNS + nextColumn);
  }

  function boot() {
    screen.classList.remove("booting");
    void screen.offsetWidth;
    screen.classList.add("booting");
    focusTile(0, true);
    setTimeout(() => { busy = false; }, BOOT_MS);
  }

  function powerCycle(kind) {
    busy = true;
    play("confirm");
    if (kind === "reboot") {
      power.hidden = false;
      power.className = "menu-mock-power";
      power.textContent = "";
      setTimeout(() => {
        power.hidden = true;
        boot();
      }, 500);
      return;
    }
    power.hidden = false;
    power.className = "menu-mock-power shutdown";
    power.textContent = "";
    setTimeout(() => {
      power.textContent = "Press any button to power on";
      const resume = () => {
        mock.removeEventListener("keydown", resume);
        mock.removeEventListener("click", resume);
        power.hidden = true;
        boot();
      };
      mock.addEventListener("keydown", resume);
      mock.addEventListener("click", resume);
    }, 700);
  }

  function select() {
    if (busy) return;
    const tile = tiles[index];
    if (tile.dataset.power) {
      powerCycle(tile.dataset.power);
      return;
    }
    play("confirm");
    setTimeout(() => { window.location.href = tile.getAttribute("href"); }, soundOn ? 160 : 0);
  }

  mock.addEventListener("keydown", event => {
    if (busy) return;
    const keys = {ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1]};
    if (keys[event.key]) {
      event.preventDefault();
      move(...keys[event.key]);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      select();
    }
  });

  tiles.forEach((tile, position) => {
    tile.tabIndex = -1;
    tile.addEventListener("mouseenter", () => { if (!busy) focusTile(position); });
    tile.addEventListener("click", event => {
      event.preventDefault();
      if (busy) return;
      focusTile(position, true);
      select();
    });
  });

  soundButton.addEventListener("click", () => {
    soundOn = !soundOn;
    try { localStorage.setItem("mustard-menu-sound", soundOn ? "1" : "0"); } catch (_) {}
    paintSound();
    play("info_open");
  });

  const time = document.getElementById("menu-mock-time");
  const tick = () => {
    time.textContent = new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
  };
  tick();
  setInterval(tick, 15000);

  let polling = false;
  let held = {};
  function poll() {
    const pads = navigator.getGamepads ? [...navigator.getGamepads()].filter(Boolean) : [];
    if (!pads.length) {
      polling = false;
      return;
    }
    const pad = pads[0];
    const pressed = id => pad.buttons[id] && pad.buttons[id].pressed;
    const edge = id => {
      const now = pressed(id);
      const fired = now && !held[id];
      held[id] = now;
      return fired;
    };
    const axisX = pad.axes[0] || 0;
    const axisY = pad.axes[1] || 0;
    if (edge(14) || (axisX < -0.6 && !held.ax)) move(-1, 0);
    if (edge(15) || (axisX > 0.6 && !held.ax)) move(1, 0);
    if (edge(12) || (axisY < -0.6 && !held.ay)) move(0, -1);
    if (edge(13) || (axisY > 0.6 && !held.ay)) move(0, 1);
    held.ax = Math.abs(axisX) > 0.6;
    held.ay = Math.abs(axisY) > 0.6;
    if (edge(0)) select();
    requestAnimationFrame(poll);
  }
  window.addEventListener("gamepadconnected", () => {
    if (!polling) {
      polling = true;
      requestAnimationFrame(poll);
    }
  });

  const still = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  function applyMotion() {
    if (!wall) return;
    if (still && still.matches) wall.pause();
    else wall.play().catch(() => {});
  }
  if (still && still.addEventListener) still.addEventListener("change", applyMotion);
  applyMotion();

  busy = true;
  setTimeout(() => { busy = false; }, BOOT_MS);
  paintSound();
})();
