// import { defineNuxtConfig } from 'nuxt' 
// weird freaken error.

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/api/hello", "/api/mystrapi"],
    },
  },
  ssr: false,
  // buildModules: ["@nuxtjs/strapi"],
  modules: [
    "@nuxtjs/sanity", 
    // "~/modules/sanity" // removing this the modules, don't work at all 
  ],
  sanity: {
    projectId: "x9czj6ra",
    dataset: "production",
    useCdn: true,
  },
  // strapi: {
  //   url: process.env.STRAPI_URL || 'http://localhost:1337',
  //   prefix: '/api',
  //   version: 'v4',
  //   cookie: {},
  // },
  // build: {
  //   postcss: {
  //     postcssOptions: require("./postcss.config.js"),
  //   },
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/tailwind.css", "boxicons/css/boxicons.min.css"],
})
