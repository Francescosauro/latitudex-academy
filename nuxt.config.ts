// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    '@nuxtjs/robots',
    'vue3-carousel-nuxt',
    'nuxt-gtag',
  ],
  router: {
    options: { scrollBehaviorType: 'smooth' }
  },
  gtag: {
    id: 'G-P9GVHXN1R0'
  }
})
