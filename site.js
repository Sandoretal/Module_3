(() => {
  const STORAGE_KEYS = {
    colorMode: "module3-color-mode",
    contrastMode: "module3-contrast-mode",
    toolbarCollapsed: "module3-toolbar-collapsed",
    zoom: "module3-zoom"
  };

  function ensureToolbar() {
    if (document.querySelector(".accessibility-toolbar")) {
      return;
    }

    const toolbar = document.createElement("div");
    toolbar.className = "accessibility-toolbar";
    toolbar.innerHTML = `
      <button type="button" class="toolbar-button toolbar-toggle" data-action="toggle-collapse" aria-expanded="true" aria-label="Minimize accessibility bar">
        ▾
      </button>
      <div class="toolbar-controls">
        <button type="button" class="toolbar-button" data-action="toggle-contrast" aria-pressed="false">
          Color-blind friendly
        </button>
        <button type="button" class="toolbar-button" data-action="toggle-high-contrast" aria-pressed="false">
          Contrast
        </button>
        <button type="button" class="toolbar-button" data-action="zoom-out" aria-label="Zoom out">
          A-
        </button>
        <button type="button" class="toolbar-button" data-action="zoom-reset" aria-label="Reset zoom">
          100%
        </button>
        <button type="button" class="toolbar-button" data-action="zoom-in" aria-label="Zoom in">
          A+
        </button>
        <button type="button" class="toolbar-button" data-action="toggle-help" aria-expanded="false" aria-label="Keyboard shortcuts">
          ?
        </button>
        <div class="shortcut-panel" hidden>
          <strong>Keyboard shortcuts</strong>
          <ul>
            <li><kbd>Tab</kbd> move through controls</li>
            <li><kbd>Enter</kbd> activate selected button or link</li>
            <li><kbd>+</kbd> zoom in</li>
            <li><kbd>-</kbd> zoom out</li>
            <li><kbd>0</kbd> reset zoom</li>
            <li><kbd>C</kbd> toggle color-blind friendly mode</li>
            <li><kbd>H</kbd> toggle high contrast mode</li>
            <li><kbd>?</kbd> open or close shortcuts</li>
          </ul>
        </div>
      </div>
    `;

    document.body.appendChild(toolbar);
  }

  function applyColorMode(mode) {
    document.body.classList.toggle("colorblind-friendly", mode === "friendly");
    const toggleButton = document.querySelector('[data-action="toggle-contrast"]');
    if (toggleButton) {
      toggleButton.setAttribute("aria-pressed", String(mode === "friendly"));
    }
  }

  function applyContrastMode(mode) {
    document.body.classList.toggle("high-contrast", mode === "high");
    const contrastButton = document.querySelector('[data-action="toggle-high-contrast"]');
    if (contrastButton) {
      contrastButton.setAttribute("aria-pressed", String(mode === "high"));
    }
  }

  function applyZoom(level) {
    const clamped = Math.max(0.9, Math.min(1.4, level));
    document.documentElement.style.setProperty("--user-zoom", clamped.toFixed(2));
    const resetButton = document.querySelector('[data-action="zoom-reset"]');
    if (resetButton) {
      resetButton.textContent = `${Math.round(clamped * 100)}%`;
    }
    return clamped;
  }

  function applyToolbarCollapsed(collapsed) {
    const toolbar = document.querySelector(".accessibility-toolbar");
    if (!toolbar) {
      return;
    }

    toolbar.classList.toggle("is-collapsed", collapsed);
    const toggleButton = toolbar.querySelector('[data-action="toggle-collapse"]');
    if (toggleButton) {
      toggleButton.setAttribute("aria-expanded", String(!collapsed));
      toggleButton.setAttribute(
        "aria-label",
        collapsed ? "Expand accessibility bar" : "Minimize accessibility bar"
      );
      toggleButton.textContent = collapsed ? "▸" : "▾";
    }

    if (collapsed) {
      const helpButton = toolbar.querySelector('[data-action="toggle-help"]');
      const panel = toolbar.querySelector(".shortcut-panel");
      if (helpButton) {
        helpButton.setAttribute("aria-expanded", "false");
      }
      if (panel) {
        panel.hidden = true;
      }
    }
  }

  function init() {
    ensureToolbar();

    const savedMode = localStorage.getItem(STORAGE_KEYS.colorMode) || "default";
    const savedContrast = localStorage.getItem(STORAGE_KEYS.contrastMode) || "default";
    const savedCollapsed = localStorage.getItem(STORAGE_KEYS.toolbarCollapsed) === "1";
    const savedZoom = Number(localStorage.getItem(STORAGE_KEYS.zoom) || "1");

    applyColorMode(savedMode);
    applyContrastMode(savedContrast);
    applyToolbarCollapsed(savedCollapsed);
    let zoomLevel = applyZoom(savedZoom);

    document.querySelector(".accessibility-toolbar").addEventListener("click", (event) => {
      const button = event.target.closest(".toolbar-button");
      if (!button) {
        return;
      }

      const action = button.dataset.action;

      if (action === "toggle-collapse") {
        const collapsed = !document.querySelector(".accessibility-toolbar").classList.contains("is-collapsed");
        applyToolbarCollapsed(collapsed);
        localStorage.setItem(STORAGE_KEYS.toolbarCollapsed, collapsed ? "1" : "0");
        return;
      }

      if (action === "toggle-contrast") {
        const nextMode = document.body.classList.contains("colorblind-friendly") ? "default" : "friendly";
        applyColorMode(nextMode);
        localStorage.setItem(STORAGE_KEYS.colorMode, nextMode);
        return;
      }

      if (action === "toggle-high-contrast") {
        const nextMode = document.body.classList.contains("high-contrast") ? "default" : "high";
        applyContrastMode(nextMode);
        localStorage.setItem(STORAGE_KEYS.contrastMode, nextMode);
        return;
      }

      if (action === "toggle-help") {
        const panel = document.querySelector(".shortcut-panel");
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
        return;
      }

      if (action === "zoom-in") {
        zoomLevel = applyZoom(zoomLevel + 0.1);
      } else if (action === "zoom-out") {
        zoomLevel = applyZoom(zoomLevel - 0.1);
      } else if (action === "zoom-reset") {
        zoomLevel = applyZoom(1);
      }

      localStorage.setItem(STORAGE_KEYS.zoom, String(zoomLevel));
    });

    document.addEventListener("keydown", (event) => {
      const activeTag = document.activeElement && document.activeElement.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA") {
        return;
      }

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomLevel = applyZoom(zoomLevel + 0.1);
        localStorage.setItem(STORAGE_KEYS.zoom, String(zoomLevel));
      } else if (event.key === "-") {
        event.preventDefault();
        zoomLevel = applyZoom(zoomLevel - 0.1);
        localStorage.setItem(STORAGE_KEYS.zoom, String(zoomLevel));
      } else if (event.key === "0") {
        event.preventDefault();
        zoomLevel = applyZoom(1);
        localStorage.setItem(STORAGE_KEYS.zoom, String(zoomLevel));
      } else if (event.key.toLowerCase() === "c") {
        event.preventDefault();
        const nextMode = document.body.classList.contains("colorblind-friendly") ? "default" : "friendly";
        applyColorMode(nextMode);
        localStorage.setItem(STORAGE_KEYS.colorMode, nextMode);
      } else if (event.key.toLowerCase() === "h") {
        event.preventDefault();
        const nextMode = document.body.classList.contains("high-contrast") ? "default" : "high";
        applyContrastMode(nextMode);
        localStorage.setItem(STORAGE_KEYS.contrastMode, nextMode);
      } else if (event.key === "?") {
        event.preventDefault();
        if (document.querySelector(".accessibility-toolbar").classList.contains("is-collapsed")) {
          return;
        }
        const button = document.querySelector('[data-action="toggle-help"]');
        const panel = document.querySelector(".shortcut-panel");
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
