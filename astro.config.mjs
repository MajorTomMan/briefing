import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://majortomman.github.io",
  base: "/briefing",
  trailingSlash: "always",
  integrations: [vue()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
