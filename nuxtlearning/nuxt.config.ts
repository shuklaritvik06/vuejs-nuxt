import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: false },
  hooks: { ready: (ctx) => console.log(ctx) },
  alias: { "@": resolve(__dirname, "./") },
  modules: ["@nuxt/content", "@pinia/nuxt"],
  runtimeConfig: {
    apiSecret: process.env.SECRET_TOKEN || "Secret",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api"
    }
  }
});
