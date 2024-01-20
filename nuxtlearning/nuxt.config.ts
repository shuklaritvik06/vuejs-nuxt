export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    apiSecret: process.env.SECRET_TOKEN || "Secret",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api"
    }
  }
});
