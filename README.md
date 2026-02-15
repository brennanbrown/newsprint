# 🗞️ Newsprint

> All the news that's fit to ship!

[![Netlify Status](https://api.netlify.com/api/v1/badges/02c318a5-b434-425b-a5d6-e0ced348e18d/deploy-status)](https://app.netlify.com/projects/newsprint/deploys)
[![11ty](https://img.shields.io/badge/11ty-%23000000.svg?style=flat-square&logo=11ty&logoColor=white)](https://www.11ty.dev/)
[![License](https://img.shields.io/badge/License-MIT-%23000000.svg?style=flat-square)](https://github.com/brennanbrown/newsprint/blob/main/LICENSE)
[![CSS](https://img.shields.io/badge/CSS-Custom-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)](https://github.com/brennanbrown/newsprint/tree/main/src/css)

![Newsprint Theme Screenshot](src/images/screenshot.jpg)

A newspaper-style blog built with [Eleventy (11ty)](https://www.11ty.dev/) embracing a classic newspaper aesthetic while functioning as a newsletter-first publication.

## Features

- **Newspaper Design** — Multi-column layouts, traditional masthead, drop caps, pull quotes, ruled lines, grayscale palette
- **Newsletter-First RSS** — Full-content Atom feeds with email-safe HTML, plus category-specific feeds
- **Multi-Author Support** — Display different authors for articles with author bios
- **Social Media Integration** — Sharing and follow links for Mastodon, Bluesky, Threads
- **Donation Support** — Built-in donation section for supporting independent journalism
- **Responsive** — Mobile-first design that gracefully collapses columns on smaller screens
- **Accessible** — Semantic HTML, proper heading hierarchy, skip links, ARIA labels
- **Print-Ready** — Dedicated print stylesheet
- **Fast** — Static HTML, lazy-loaded images, optimized web fonts

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The dev server runs at `http://localhost:8080`.

## Configuration

Edit `src/_data/site.json` to customize your site:

```json
{
  "title": "Your Publication Name",
  "description": "Your publication description",
  "url": "https://yoursite.com",
  "author": "Editorial Team",
  "email": "editor@yoursite.com",
  "donationUrl": "https://ko-fi.com/yourusername",
  "social": {
    "mastodon": "https://mastodon.social/@yourusername",
    "bluesky": "https://bsky.app/profile/yourusername",
    "threads": "https://threads.com/@yourusername"
  },
  "masthead": {
    "tagline": "Your tagline",
    "established": "2026"
  }
}
```

### Social Media Configuration

- Set any social platform to `null` or remove it to hide from the sidebar
- Leave empty string to show the platform but no link
- Provide full URL to enable the follow link

### Donation Configuration

- Set `donationUrl` to your preferred platform (Ko-fi, Patreon, etc.)
- Remove or set to `null` to hide the donation section

## Project Structure

```
src/
├── _data/          # Site metadata and navigation
├── _includes/
│   ├── layouts/    # Page layouts (base, home, article, archive)
│   ├── components/ # Reusable components (masthead, footer, sidebar, etc.)
│   └── partials/   # Head, scripts
├── articles/       # Blog posts (Markdown)
├── pages/          # Static pages and category pages
├── css/            # Newspaper-style CSS architecture
│   ├── base/       # Variables, reset, typography
│   ├── components/ # Masthead, article, sidebar, footer styles
│   └── layouts/    # Homepage, article page, archive styles
├── feed.njk        # Main Atom feed
└── index.njk       # Homepage
```

## Writing Articles

Create a new `.md` file in `src/articles/`:

```yaml
---
title: "Article Headline"
subtitle: "Optional deck/subheading"
date: 2026-02-06
author: "Writer Name"
category: "News"       # News, Opinion, Features, Culture, Business
featured: true         # Show in featured section on homepage
excerpt: "Article summary for RSS and meta"
image: "/path/to/image.jpg"
imageCaption: "Photo caption"
---
```

### Front Matter Fields

- **title** (required): Article headline
- **subtitle** (optional): Deck or subheading
- **date** (required): Publication date (YYYY-MM-DD format)
- **author** (optional): Author name (defaults to site author)
- **category** (required): News, Opinion, Features, Culture, or Business
- **featured** (optional): Set to `true` for homepage featured placement
- **excerpt** (optional): Article summary for RSS and meta descriptions
- **image** (optional): Featured image URL
- **imageCaption** (optional): Caption for featured image

### Multi-Author Support

- Different authors can be specified per article
- Author bios display in article footers
- Authors appear in article metadata and bylines

## RSS Feeds

- **All articles:** `/feed.xml`
- **News:** `/feed/news.xml`
- **Opinion:** `/feed/opinion.xml`
- **Features:** `/feed/features.xml`
- **Culture:** `/feed/culture.xml`
- **Business:** `/feed/business.xml`

## Social Features

### Article Sharing
Each article includes sharing links for:
- Mastodon
- Bluesky  
- Threads
- Email

### Social Media Follow
The sidebar includes follow links for configured platforms. Configure in `site.json`:

```json
"social": {
  "mastodon": "https://mastodon.social/@username",
  "bluesky": "https://bsky.app/profile/username", 
  "threads": "https://threads.com/@username"
}
```

## Monetization

### Donation Support
Built-in donation section in sidebar to support independent journalism. Configure your donation URL in `site.json`:

```json
"donationUrl": "https://ko-fi.com/yourusername"
```

### Ad Space
Placeholder ad space included at bottom of sidebar. Replace the ad placeholder in `src/_includes/components/sidebar.njk` with your ad code.

## Customization

### Categories
Articles are organized into five main categories:
- **News**: Current events, reporting
- **Opinion**: Commentary, editorials  
- **Features**: Long-form, in-depth pieces
- **Culture**: Arts, reviews, cultural criticism
- **Business**: Industry, economics, tech business

### Homepage Layout
- Featured article section (shows latest `featured: true` article)
- Latest articles grid (9 articles, excludes featured)
- Sidebar with navigation, newsletter signup, social follows, donation, and feeds

### Footer Attribution
Footer includes:
- Copyright and licensing (MIT code, CC BY-SA content)
- Theme attribution with links
- 11ty attribution

## Demo Content

**Important Note**: The demo articles are real articles written by Brennan Brown and published at [https://brennan.day](https://brennan.day). These are included to demonstrate the theme's typography, layout, and multi-author capabilities. When using this theme for your own publication, you should replace these articles with your own content.

## SEO Configuration

The theme includes SEO protection for demo sites. In `src/_data/site.json`, set `noindex: true` to prevent search engines from indexing your demo site:

```json
{
  "noindex": true
}
```

**Important**: Remember to set `"noindex": false` or remove this field when launching your actual publication to allow proper SEO indexing.

## License

AGPL License - see LICENSE file for details.

Content licensing is CC BY-SA 4.0 unless otherwise specified.
