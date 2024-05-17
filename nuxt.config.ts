// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    '@nuxtjs/robots',
    'vue3-carousel-nuxt',
    'nuxt-gtag',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  gtag: {
    id: 'G-P9GVHXN1R0'
  },
  gtm: {
    id: 'GTM-KRN697NL'
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-KRN697NL'
      }
    }
  }
})
