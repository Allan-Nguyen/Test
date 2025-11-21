# Test

## Project structure

- `web/` – static front-end scaffold
  - `index.html` – landing page markup
  - `assets/css/main.css` – styling
  - `assets/js/main.js` – lightweight interactions

## How to view the page

You can open the page directly from the repo or serve it locally:

1) **Open the file directly**
   - Double-click `web/index.html` in your file browser, or open it in your editor and use "Open in default browser."

2) **Serve locally (recommended for correct asset paths)**
   - From the repo root, run:
     ```bash
     cd web
     python -m http.server 8000
     ```
   - Then visit http://localhost:8000 in your browser.

Stop the server with `Ctrl+C` when you’re done.

## View via GitHub Pages

If you prefer to host the static files from the `main` branch, enable GitHub Pages for this repository:

1. In GitHub, go to **Settings → Pages**.
2. Under **Source**, choose the `main` branch and the `/ (root)` folder, then click **Save**.

Once enabled, the site will be available at:


https://allan-nguyen.github.io/Test/web/


Replace `<your-github-username>` with your GitHub handle and, if the repository name differs, adjust `Test` accordingly.
