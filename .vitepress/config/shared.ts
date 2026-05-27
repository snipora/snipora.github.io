import {defineConfig} from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import mditPluginIconify, {createIconRenderer} from "mdit-plugin-iconify";
import mditPluginBracketedSpans from "markdown-it-bracketed-spans";

import { icons as lucideIcons } from "@iconify-json/lucide";
import { icons as simpleIcons } from "@iconify-json/simple-icons";

const iconRenderer = createIconRenderer({
  collections: {
    lucide: lucideIcons,
    social: simpleIcons,
  },
  defaultCollection: "lucide",
  iconResolver(collection, name) {
    if (collection === undefined && name === "void") {
      return { body: ``, attributes: {} };
    }
    if (collection === undefined && name === "snipora") {
      return { body: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 10 2 1h5v-2h-5z" /><path d="m15 16 2 1h5v-2h-5z" /><path d="m15 20v2h-13v-20h9l4 4" /><path d="m6 10h5" /><path d="m6 14h5" /><path d="m6 18h5" /></g>`, width: 24, height: 24, attributes: {} };
    }
  }
});

export default defineConfig({
  title: "Snipora",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  srcExclude: ["**/README.md", "**/TODO.md"],
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  ignoreDeadLinks: "localhostLinks",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Snipora' }],
    ['meta', { property: 'og:site_name', content: 'Snipora' }],
    ['meta', { property: 'og:image', content: 'https://snipora.github.io/og-image.png' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: 'https://snipora.github.io/' }],
    ['meta', { name: "google-site-verification", content: "s-RFUyj8uPAfBi5liG2lNJMYw9dg6QuM2EPSH7DDKgc" }],
  ],

  sitemap: {
    hostname: "https://snipora.github.io",
  },

  themeConfig: {
    logo: {
      src: "/favicon.svg",
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/snipora/snipora' },
    ],
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()}-present <a href='https://github.com/snipora/' target="_blank" rel="noopener noreferrer">Snipora</a>`,
    },
    search: {
      provider: "local",
    },
  },

  markdown: {
    config(md) {
      md.use(mditPluginIconify, iconRenderer);
      md.use(mditPluginBracketedSpans);
    },
    image: {
      lazyLoading: true,
    },
    emoji: {
      enabled: [],
    },
  },

  vite: {
    plugins: [
        tailwindcss(),
    ],
  },
});
