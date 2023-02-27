import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://bencemol.github.io",
  // base: "/cv",
});
