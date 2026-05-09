# Color Scheme Fix & Usage Guide

I have fixed the styling issues! Tailwind was missing the explicit body classes to force the colors, which is why it was reverting to a default dark mode for you.

## 1. The Color Schemes
I have successfully implemented both themes:
- **Light Mode (Default):** A warm, whitish-yellow "paperback book" cream background (`#F4F1EA`) with black text.
- **Dark Mode:** A sleek black background with white/cream text. 

*Your browser or operating system's theme will automatically trigger the correct mode.*

## 2. How to Use Your Blog

### Writing a New Post
To add a new blog post, simply create a new Markdown (`.mdx`) file inside the `d:\My codes\blog\src\content\` directory.

Every file **must** have a block of metadata at the very top (called "frontmatter"), enclosed in `---` dashes. Here is the exact template you should use:

```mdx
---
title: "Your Post Title Here"
date: "2024-05-12"
description: "A short summary of what the post is about."
section: "tech"
highlighted: false
---

Write your post content here! You can use **bold text**, *italics*, and lists:

1. First point
2. Second point

Since it's MDX, you can also write code blocks:
```javascript
console.log("Hello!");
```
```

### Explaining the Fields:
- **`section`**: This determines which menu category the post appears under. Valid options are `"books"`, `"movies"`, `"tech"`, or `"life"`.
- **`highlighted`**: If you set this to `true`, the post will appear on the homepage under "Editor's Picks". If `false`, it will only appear in its specific section.

### Viewing the Site
Since you are already running `npm run dev` in your terminal, the site is live! Open [http://localhost:3000](http://localhost:3000) in your web browser. Whenever you save a new `.mdx` file, the website will automatically update without needing a refresh.
