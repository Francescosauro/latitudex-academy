// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    '@nuxtjs/robots',
    'vue3-carousel-nuxt',
  ],
  router: {
    options: { scrollBehaviorType: 'smooth', top: '90px' }
  }
})
