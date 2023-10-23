import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://showcase.templates.springmicrohost.com",
  integrations: [
    mdx(),
react(),
sitemap(),
tailwind({ applyBaseStyles: false })
  ],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});