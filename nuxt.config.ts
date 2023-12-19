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
    ['@dargmuesli/nuxt-cookie-control', {
      cookieNameIsConsentGiven: 'hasConsent',
      cookieNameCookiesEnabledIds: 'hasCookies',
      cookies: {
        necessary: [
          {
            id: 'ccn_',
            description: {
              en: 'Cookie per ricordare il consenso'
            },
            name: {
              en: 'Cookie consent'
            },
            targetCookieIds: ['hasConsent', 'hasCookies']
          }
        ],
        optional: [
          {
            id: '_ga', 
            description: {
              en: 'Cookie di Google Analytics'
            },
            name: {
              en: 'Google Analytics'
            },
            targetCookieIds: ['_ga', 'ar_debug', '_ga_P9GVHXN1R0']
          }
        ]
      },
      locales: ['it', 'en'],
      isControlButtonEnabled: false,
      isCssEnabled: false
    }]
  ],
  router: {
    options: { scrollBehaviorType: 'smooth' }
  },
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
