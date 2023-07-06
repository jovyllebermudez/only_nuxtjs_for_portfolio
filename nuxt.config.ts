
// export default defineNuxtConfig({
//   nitro: {
//     prerender: {
//       routes: ["/api/hello", "/api/mystrapi"],
//     },
//   },
//   ssr: false,
//   modules: [
//     "@nuxtjs/sanity", 
//   ],
//   sanity: {
//     projectId: "x9czj6ra",
//     dataset: "production",
//     useCdn: true,
//   },
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
//   css: ["@/assets/css/tailwind.css", "boxicons/css/boxicons.min.css"],
// })
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Jovylle Bermudez",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Genuinely addicted to coding.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css", "boxicons/css/boxicons.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // ...
    postcss: {
      plugins: {
        // Add the 'tailwindcss' plugin
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Customize the progress-bar color
  loading: {
    color: "blue",
    height: "3px",
  },

  // Router configuration
  router: {
    // Configure router options here
  },

  // Server configuration
  server: {
    // Configure the server options here
  },

  // Nuxt.js development server configuration
  serverMiddleware: [],

  // Environment variables
  env: {
    // Define your environment variables here
  },

  // Nuxt.js rendering mode
  ssr: true,

  // Nuxt.js target
  target: "server",

  // Additional configuration options
  // ...
}