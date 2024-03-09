import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  scrollBehavior(to, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
}
