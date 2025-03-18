import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";

export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), solid()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
        },
      },
    },
  },
});
