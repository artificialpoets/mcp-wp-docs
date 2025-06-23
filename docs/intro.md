---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  ```bash
  node --version
  ```
- A package manager such as npm, yarn, or pnpm:
  ```bash
  npm --version
  ```

### Generate a new site

Create a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npx create-docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

### Start your site

Run the development server:

```bash
cd my-website
npx docusaurus start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npx docusaurus start` command builds your website locally and serves it through a development server, ready for you to view at `http://localhost:3000`.

Open your browser and navigate to **http://localhost:3000** to check your site.

Your site is now running. Edit `docs/intro.md` and save. The page auto-reloads and displays your changes.

## Customize your site

### Modify the configuration

Edit `docusaurus.config.js` to update your site configuration:

```js title="docusaurus.config.js"
module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
}
```

### Add a new page

Create a new file at `docs/hello.md`:

```md title="docs/hello.md"
---
sidebar_position: 2
---

# Hello

This is my **first Docusaurus document**!
```

A new document is now available at `http://localhost:3000/docs/hello`.

### Create your first blog post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors: [slorber, yangshun]
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

Your first blog post is now available at `http://localhost:3000/blog/greetings`.

## Deploy your site

### Build your site

Build your site for production:

```bash
npx docusaurus build
```

The static files are generated in the `build` folder.

### Deploy your site

Test your production build locally:

```bash
npx docusaurus serve
```

The `build` folder is now served at `http://localhost:3000`.

You can now deploy the `build` folder to almost any hosting service (Netlify, Vercel, etc.)

## What's next?

- Read the [official Docusaurus tutorial](https://docusaurus.io/docs/category/tutorials---basics/)
- Play with the [Docusaurus playground](https://docusaurus.io/playground)
- Join the [Docusaurus community](https://docusaurus.io/community/support) 