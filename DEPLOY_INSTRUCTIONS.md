# Deployment Instructions — Hostinger

## 1. Build the project

```bash
npm run build
```

This generates the `dist/` folder with all production assets.

---

## 2. Upload to Hostinger File Manager

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com)
2. Go to **Hosting → Manage → File Manager**
3. Navigate to the `public_html` folder (or your domain root)
4. Delete any existing `index.html` or old files
5. Upload the entire contents of the `dist/` folder (not the folder itself — upload its contents) into `public_html`

---

## 3. .htaccess for SPA routing

Create a file named `.htaccess` in `public_html` with this content:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

This ensures all routes (e.g. `/about`, `/projects`) redirect to `index.html` so React Router handles them.

---

## 4. Point domain root to dist/ contents

When you upload `dist/` contents directly into `public_html`, the domain root automatically serves `index.html`. No additional path config is needed.

If you have a subdirectory deployment, update `vite.config.ts`:

```ts
export default defineConfig({
  base: '/subdirectory-name/',
})
```

Then rebuild and re-upload.

---

## 5. Enable SSL/HTTPS

1. In hPanel, go to **Security → SSL**
2. Select your domain
3. Click **Install** under the free Let's Encrypt SSL certificate
4. Wait ~5 minutes for propagation
5. Enable **Force HTTPS** to redirect all HTTP traffic to HTTPS

---

## 6. Verify

- Visit your domain — the portfolio should load
- Navigate to `/about` or any section anchor and refresh — should not 404 (handled by .htaccess)
- Check that assets load over HTTPS with no mixed-content warnings
