<template>
  <header
    class="sticky top-0 bg-false-white-opacity backdrop-blur-md z-10 shadow"
    :class="{ 'is-open': isOpen }"
    @keydown.esc="isOpen = false">
    <div class="wrapper flex py-2 justify-between items-center">
      <BaseLink to="/" title="Torna alla homepage">
        <BaseImage
          src="/latitude-x-logo.svg"
          alt="Latitude X Academy logo"
          width="252"
          height="60"
          sizes="100vw sm:50vw md:252"
          :lazy="false" />
      </BaseLink>
      <BaseButton
        class="block xl:hidden"
        aria-controls="main-menu"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        @click="menuToggle"
        :title="isOpen ? 'Chiudi il menu principale' : 'Apri il menu principale'"
        :aria-label="isOpen ? 'Chiudi il menu principale' : 'Apri il menu principale'">
        <span v-if="isOpen" class="text-secondary">
          <BaseIcon :icon="'close'" :size="'lg'" />
        </span>
        <span v-else class="text-secondary">
          <BaseIcon :icon="'menu'" :size="'lg'" />
        </span>
      </BaseButton>
      <nav class="hidden xl:block" id="main-menu">
        <ul class="inline-flex space-x-6 items-center">
          <li>
            <BaseLink :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#perche' }" @click="isOpen = false">
              <span>Perché serve</span>
            </BaseLink>
          </li>
          <li>
            <BaseLink :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#cosa' }" @click="isOpen = false">
              <span>Cosa imparerai</span>
            </BaseLink>
          </li>
          <li>
            <BaseLink :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#contenuti' }" @click="isOpen = false">
              <span>Contenuto dei corsi</span>
            </BaseLink>
          </li>
          <li>
            <BaseLink :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#chi-siamo' }" @click="isOpen = false">
              <span>Docenti</span>
            </BaseLink>
          </li>
          <li>
            <BaseLink :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#faq' }" @click="isOpen = false">
              <span>FAQ</span>
            </BaseLink>
          </li>
          <li>
            <BaseLink :to="'#'" @click="isOpen = false" class="btn btn-outline max-w-sm">
              <span>Accedi</span>
            </BaseLink>
          </li>
          <li>
            <BaseLink class="btn !no-underline max-w-sm" :is-link="true" :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#acquista' }">
              <strong>Acquista</strong>
            </BaseLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const menuToggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss">
.is-open {
  width: 100%;
  height: 100vh;
  left: 0;
  @apply bg-false-white;

  nav {
    display: block;
    position: absolute;
    top: 96px;
    left: 0;
    text-align: center;
    width: 100%;

    ul {
      display: block;
    }

    li {
      margin-bottom: 24px;
      margin-left: 0 !important;

      a:not(.btn),
      button:not(.btn) {
        padding: 1rem 0;
        width: 100%;
        display: inline-block;

        &:hover:not(.btn) {
          @apply bg-primary-lighter;
        }
      }
    }
  }
}
</style>
