# Covista Dashboard – Desktop App (offline)

This builds a **standalone desktop app** that runs the dashboard **without internet** and **without installing Python, Node, or any runtime**. End users only need to double‑click the `.exe`.

## One-time setup (on a machine with Node.js)

1. **Copy your images** into `dashboard/`  
   Copy all images used by the dashboard (e.g. `CovistaLogo.png`, `PrimaryLocation.png`, `SiteLocation.png`, `Site.png`, `Students.png`, `Faculty.png`, `Facilities.png`, scheme images, etc.) from your main Dashboard folder into `desktop-app/dashboard/` so they are bundled with the app.

2. **Install dependencies and build**
   ```bash
   cd desktop-app
   npm install
   npm run dist
   ```

3. **Get the app**  
   The portable executable will be in:
   - `dist/Covista-Dashboard-1.0.0.exe`  
   You can copy this single `.exe` to any Windows PC and run it there. No install, no internet, no extra software required.

## Run in development (optional)

```bash
cd desktop-app
npm install
npm start
```

## What the app does

- Opens in its own window (no browser needed).
- Works **fully offline** (Chart.js and fonts are bundled; no Google Fonts or CDN).
- No Python, Node, or other runtimes needed for end users—just the `.exe`.

## Building for other platforms

- **macOS**: `npm run dist` with `electron-builder` configured for `mac` (requires Mac to build).
- **Linux**: Same idea with `linux` target.

The `package.json` is set up for Windows portable by default.
