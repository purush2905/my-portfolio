# 🚀 GitHub Pages Deployment - Quick Setup

Your portfolio is ready to deploy! Follow these simple steps:

## Step 1: Add Build Script

Open `package.json` and add this line to the `"scripts"` section:

```json
"build:gh-pages": "vite build"
```

Your scripts section should look like:
```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "build:gh-pages": "vite build",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
}
```

## Step 2: Initialize Git and Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your GitHub username!

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**

## Step 4: Deploy!

That's it! The GitHub Actions workflow is already configured.

Every time you push to `main`, your site will automatically rebuild and deploy.

Check the **Actions** tab to see deployment progress.

## Your Live Site

After deployment completes, visit:

```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## ✨ What's Included

✅ All your projects with images  
✅ Skills and certifications  
✅ Downloadable resume (PDF)  
✅ Responsive design (mobile, tablet, desktop)  
✅ Dark theme with modern animations  
✅ Contact form  
✅ Social links (GitHub, LinkedIn)

## 📝 Making Updates

To update your portfolio:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push
```

Auto-deploys in ~2 minutes! 🎉

## 🔧 Local Build Test

Want to test the build locally?

```bash
npm run build:gh-pages
npx serve dist/public
```

## 📂 File Structure

```
portfolio/
├── .github/workflows/deploy.yml   ← Auto-deployment
├── client/
│   ├── public/resume.pdf          ← Your resume
│   └── src/                       ← React components
├── attached_assets/               ← Your images
└── package.json                   ← Add build script here
```

---

**Need help?** Check `DEPLOYMENT.md` for detailed troubleshooting.
