# themes/

This folder contains theme CSS and small preview/demo pages.

Structure:

- `blue-theme.css` — The main CSS variables and small utility classes for the Blue (dark) theme.
- `demo/` — Interactive demo and a quick preview living together:
  - `index.html` — Interactive demo (controls, JS toggles) for testing tokens and component behavior.
  - `demo.js` — Small script powering the interactive demo.
  - `preview.html` — Compact preview similar to the old `preview.html` used for quick checking.
- `preview.html` — A short quick-load preview that points to the demo (kept for backwards compatibility).

How to use:

- Open `themes/demo/preview.html` or `themes/demo/index.html` in a browser to preview the theme.
- The theme is applied via `data-theme="blue"` on the `<html>` element and requires `blue-theme.css` to be present in the same folder level (`../blue-theme.css` from the demo files).

Notes:
- `themes/preview.html` remains at the top of the `themes/` folder as a convenience entry; it now points users to the new interactive demo.
- If you'd like, I can remove the legacy `themes/preview.html` and keep only `themes/demo/preview.html` to reduce duplication.