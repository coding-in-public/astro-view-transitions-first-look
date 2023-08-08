import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-cip.netlify.app",
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [sitemap(), react()],
});
