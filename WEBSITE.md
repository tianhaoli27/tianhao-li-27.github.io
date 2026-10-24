# Tianhao Li — Personal website

Responsive static personal website with Chinese and English, a remembered language preference, and email contact.

Live website: https://tianhaoli27.github.io/tianhao-li-27.github.io/

## Edit the website

- `index.html`: Chinese copy, layout, social sharing metadata, and contact links.
- `assets/script.js`: English copy and language / email interactions.
- `assets/style.css`: typography, colors, and responsive layout.
- `assets/portrait.jpg`: profile photograph.

Update both the Chinese and English text when changing personal information. The original Jekyll template files remain in the repository; the static `index.html` is the active homepage, and `.nojekyll` disables template processing for GitHub Pages.

## Local preview

Run `python3 -m http.server 8000` from the directory containing `index.html`, then open http://localhost:8000.

GitHub Pages publishes from the `main` branch root. No package installation or build step is needed.
