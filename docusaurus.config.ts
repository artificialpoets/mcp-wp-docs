import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MCP for WP',
  tagline: 'Supercharge WordPress with AI',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.mcp-wp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wp-mcp', // Usually your GitHub org/user name.
  projectName: 'wp-mcp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Custom HTML template for Google Tag Manager
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-CTNWL8RFSL',
      async: true,
    },
  ],

  // Custom HTML head tags
  headTags: [
    // Author metadata
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Matias Sanchez Moises',
      },
    },
    // Twitter Card metadata
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:site',
        content: '@matysanchez',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:creator',
        content: '@matysanchez',
      },
    },
    // Open Graph metadata
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://docs.mcp-wp.com/img/og-image.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:width',
        content: '1200',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:height',
        content: '630',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:alt',
        content: 'MCP for WP - Supercharge WordPress with Intelligent AI',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'MCP for WP',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'en_US',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'article:author',
        content: 'https://www.matysanchez.com',
      },
    },
    // WhatsApp specific metadata
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:type',
        content: 'image/png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:secure_url',
        content: 'https://docs.mcp-wp.com/img/og-image.png',
      },
    },
    // Additional social media metadata
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://docs.mcp-wp.com',
      },
    },
    // SEO metadata
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'googlebot',
        content: 'index, follow',
      },
    },
    // Google Analytics script
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CTNWL8RFSL');
      `,
    },
    // Google Tag Manager (noscript)
    {
      tagName: 'noscript',
      innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDK6M366" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/artificialpoets/mcp-wp-docs/tree/main/docs/',
        },
        // Removed blog configuration
        theme: {
          customCss: './src/css/custom.css',
        },
        // Google Analytics configuration
        googleAnalytics: {
          trackingID: 'G-CTNWL8RFSL',
          anonymizeIP: true,
        },
        // Google Tag Manager configuration
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Replace with your Google Analytics tracking ID
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/og-image.png',
    
    // Color mode configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    navbar: {
      title: 'MCP for WP',
      logo: {
        alt: 'MCP for WP Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Home',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/get-in-touch',
          position: 'left',
          label: 'Contact',
        },
        {
          href: 'https://github.com/artificialpoets/mcp-wp-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://docs.wp-llm.com/',
          label: 'WP LLM',
          position: 'right',
        },
        {
          href: 'https://www.artificialpoets.com/?ref=docs.mcp-wp.com',
          label: 'AI for WordPress',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [], // Links are managed in the custom footer
      copyright: `Copyright © ${new Date().getFullYear()} Artificial Poets, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Algolia Search Configuration
    algolia: {
      appId: 'YOUR_APP_ID', // Replace with your Algolia App ID
      apiKey: 'YOUR_SEARCH_API_KEY', // Replace with your Algolia Search API Key
      indexName: 'YOUR_INDEX_NAME', // Replace with your Algolia Index Name
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
