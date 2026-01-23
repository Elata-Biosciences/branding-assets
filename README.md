# Elata branding info
This repo contains a reference to all of Elata's branding info.
## Typrography
For its typography system, Elata uses **Inter**.
### Headlines (Desktop/laptop)
All headlines for desktop and mobile are written in **Inter** standardized at **140% line height** with a **weight of 600**
- **Headline 1:**
  - Size: 56px
 - **Headline 2:**
   - Size: 34px
- **Headline 3:**
  - Size: 22px
### Headlines (Mobile/tablet)
- **Headline 1:**
  - Size: 40px
- **Headline 2:**
  - Size: 28px
- **Headline 3:**
  - Size: 20px
 ### Text
For its text system, Elata uses solely **Montserrat** font kit. For weight on any size, **bold fonts are 700 weight, semibolds are 600 weight, mediums are 500 weight, and regulars are 400 weight**.
- **X-Large**
  - Size: 22px
- **Large**
  - Size: 18px
- **Normal**
  - Size: 16px
- **Small**
  - Size: 14px
- **X-Small**
  - Size: 12px
  ### Paragraph
For its paragraphs, Elata uses solely **SF Pro Text** font kit. For weight on any size, **bold fonts are 700 weight, semibolds are 600 weight, mediums are 500 weight, and regulars are 400 weight**.
- **Large**
  - Size: 18px
- **Normal**
  - Size: 16px
- **Small**
  - Size: 14px
- **X-Small**
  - Size: 12px
## Theme — Blue (dark)
The repository now includes a dark "Blue" theme inspired by the provided Figma screenshot. The theme focuses on a deep background, translucent panels, a purple accent for primary actions, and a set of neutral and semantic colors.

Colors included (hex):
- Background: #0B0D11
- Surface / Panel: #0F1114
- Panel translucent: rgba(255,255,255,0.02)
- Border (subtle): rgba(255,255,255,0.06)
- Text primary: #E6E9EE
- Text muted: #9DA4AB
- Accent (primary / purple): #7C4DFF
- Semantic — Danger (red): #FF6B5B
- Semantic — Success (green): #3CD38D
- Semantic — Warning (yellow): #FFCF58
- Semantic — Info (blue): #4FB5FF

See `themes/blue-theme.css` and `design-tokens/blue-theme.json` for token names, usage examples, and utility classes.

## Demo
A small interactive demo has been added at `themes/demo/index.html`. Open that file in a browser locally to preview components, color tokens, and quick interactions (accent toggle & UI scale). The demo uses `data-theme="blue"` on the `<html>` element and references the theme CSS found in `themes/blue-theme.css`.

## Usage
Quick local preview (no tools required):
- Open `themes/demo/preview.html` in a browser for a fast preview.
- Open `themes/demo/index.html` for an interactive demo (JS toggles for accent and scale).

Serve locally (recommended for consistent behavior):
- Python (built-in):
  - Run from the repo root: `python -m http.server 8000`
  - Visit: `http://localhost:8000/themes/demo/index.html`
- npm (no install required):
  - Run from the repo root: `npm run demo` (uses `npx http-server` via the provided `package.json` script)

Design tokens and assets:
- Tokens: `design-tokens/blue-theme.json`
- Theme CSS: `themes/blue-theme.css`
- Demos and previews: `themes/demo/` and `themes/preview.html`

If you want, I can remove `themes/preview.html` and keep only `themes/demo/preview.html` to avoid duplication.

---

## Contributing
Want to add or change a theme? Follow these steps:
1. Add a theme CSS file under `themes/`, e.g. `themes/my-theme.css` and scope variables under `:root[data-theme="my-theme"]`.
2. Add a JSON tokens file under `design-tokens/`, e.g. `design-tokens/my-theme.json`.
3. Add an interactive demo in `themes/demo/` or add a `themes/my-theme-demo/` folder. Keep demos self-contained with a relative link to `../<theme>.css`.
4. Add supporting screenshots to `images/themes/<theme-name>/` and reference them from documentation or the top-level `index.html`.
5. Update `themes/README.md` and `README.md` to mention the new theme and tokens.

### GitHub Pages
A top-level `index.html` exists and is ready for GitHub Pages. To host the demo on GitHub Pages:
- Go to the repository Settings → Pages and select the branch and root folder to serve.
- The site will serve `index.html` from the repository root and show the interactive demo inline.

Thanks for contributing — feel free to open a branch and a PR with the changes and I can help tidy up or add more demo content.
