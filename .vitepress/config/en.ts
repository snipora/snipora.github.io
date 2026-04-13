import {DefaultTheme, defineConfig} from "vitepress";

export default defineConfig({
  lang: "en-US",
  description: "Snipora is a lightweight, local-first snippet manager for fast capture, simple organization, and quick search, keeping everyday text at your fingertips.",
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Home", link: "/" },
    { text: "Download", link: "/download" },
  ];
}

function sidebar(): DefaultTheme.Sidebar {
  return {};
}
