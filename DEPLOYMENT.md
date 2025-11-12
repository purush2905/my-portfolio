# GitHub Pages Deployment Guide

This portfolio is configured to be deployed on GitHub Pages as a static site.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Deployment Steps

### 1. Update package.json

Add the following script to your `package.json`:

```json
"scripts": {
  "build:gh-pages": "vite build"
}
```

### 2. Create GitHub Repository

1. Go to GitHub and create a new repository named `portfolio`
2. Don't initialize with README (we already have our code)

### 3. Push Your Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**

### 5. Trigger Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your React app into static files
- Deploy to GitHub Pages

The workflow triggers on every push to the `main` branch.

### 6. Access Your Site

After the deployment completes (check the "Actions" tab), your site will be available at:

```
https://YOUR_USERNAME.github.io/portfolio/
```

## Manual Build (Local Testing)

To test the production build locally:

```bash
npm run build:gh-pages
```

The built files will be in `dist/public/`. You can serve them locally with:

```bash
npx serve dist/public
```

## Important Notes

- **All assets** (images, resume PDF) are included in the build
- The site is **completely static** - no server required
- Resume download works via the `/resume.pdf` file in the public folder
- Build time is typically 1-2 minutes
- Changes pushed to `main` branch auto-deploy

## Troubleshooting

### Site not loading properly
- Check if the repository name is `portfolio` (or update the base path in vite.config.ts)
- Verify GitHub Pages is enabled in repository settings

### 404 errors for assets
- Ensure all images are imported correctly using the `@assets` alias
- Check that resume.pdf exists in `client/public/`

### Build failures
- Check the Actions tab for error logs
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility (v20 recommended)

## Updating Your Portfolio

To make changes and redeploy:

```bash
# Make your changes
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will automatically rebuild and deploy your changes.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `client/public/` with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

---

**Repository Structure for GitHub Pages:**
```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── client/
│   ├── public/
│   │   └── resume.pdf          # Resume file
│   └── src/                    # React components
├── dist/public/                # Built static files (generated)
├── package.json
└── vite.config.ts
```
