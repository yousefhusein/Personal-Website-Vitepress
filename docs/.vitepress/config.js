import { defineConfig } from "vitepress";

export default defineConfig({
  // site-level options
  title: 'John Doe',
  description: 'Just playing around.',
  lang: "en-US",
  themeConfig: {
    nav: [
      { text: "About Me", link: "/about" },
      { text: "Portfolio", link: "/portfolio" },
      { text: "Projects", link: "/projects" },
      { text: "Experience", link: "/experience" },
    ],
    sidebar: [
      { text: "Blog", link: "/blog" },
      { text: "Portfolio", link: "/portfolio" },
    ],
    sidebarMenuLabel: "Menu",
    footer: {
      copyright: "Copyright &copy; 2023"
    }
  }
});