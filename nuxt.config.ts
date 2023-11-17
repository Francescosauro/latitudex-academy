// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    '@nuxtjs/robots',
    'vue3-carousel-nuxt',
  ],
})
