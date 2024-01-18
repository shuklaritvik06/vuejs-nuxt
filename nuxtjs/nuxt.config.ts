import { resolve } from "path";

export default defineNuxtConfig({
  css: ["@/styles/global.css"],
  alias: { "@": resolve(__dirname, "/") },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
