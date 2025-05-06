// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // Simple usage
    // 
    // Or C:
    // ["@nuxtjs/tailwindcss", { /* module options */ }]
    "@nuxtjs/tailwindcss"
  ],
  css: [
    "~/assets/css/main.css", // Path to your global CSS file
    "leaflet/dist/leaflet.css", // Leaflet CSS for map styling
  ],
  // If you have components in subdirectories of ~/components, you might need this:
  // components: [
  //   {
  //     path: "~/components",
  //     pathPrefix: false,
  //   },
  // ],
  // Vue-Leaflet specific configuration if needed (often not required for basic use)
  // build: {
  //   transpile: ["@vue-leaflet/vue-leaflet"],
  // }, 
  // Vite specific config for vue-leaflet if issues arise (usually not needed with Nuxt 3 auto-handling)
  // vite: {
  //   optimizeDeps: {
  //     include: ["@vue-leaflet/vue-leaflet"],
  //   },
  // },
})

