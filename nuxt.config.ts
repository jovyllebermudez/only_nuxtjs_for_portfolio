// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/api/hello", "/api/mystrapi"],
    },
  },
  // ssr: false,
  // buildModules: ["@nuxtjs/strapi"],
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: 'x9czj6ra'
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
