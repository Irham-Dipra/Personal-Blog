# Minimalistic Next.js + MDX Blog

A blazing fast, minimalistic personal blog built with Next.js (App Router), MDX, and Tailwind CSS. The design strictly uses shades of black and white, focusing entirely on typography and content.

## Features
- **Next.js 15+ App Router** for optimal performance and static generation.
- **MDX Support** to write posts in Markdown with the ability to embed React components.
- **Tailwind CSS v4** for styling and theming.
- **Strictly Monochromatic:** No colors, just black, white, and shades of gray. Respects system light/dark mode preference.

## Local Development

1. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Posts

All posts are located in the `src/content/` directory.
To create a new post, simply create a new `.mdx` file in that folder with the following frontmatter:

```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "A short summary of your post."
---

Your markdown content here...
```

## Deployment

### Step 1: Push to GitHub
1. Stage your files: `git add .`
2. Commit your changes: `git commit -m "Initial commit"`
3. Push to your GitHub repository: `git push -u origin main`

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and log in with your GitHub account.
2. Click **Add New Project**.
3. Import your GitHub repository (`blog`).
4. Vercel will automatically detect that it's a Next.js app. Leave the build settings as default.
5. Click **Deploy**.

Your blog will be live in less than a minute!
