import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/api/hello', '/api/mystrapi']
    }
  },
  // ssr: false,
  buildModules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  css: [
    "~/assets/css/tailwind.css",
    'boxicons/css/boxicons.min.css'
  ],
})
