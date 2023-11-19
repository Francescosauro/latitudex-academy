<template>
  <BaseImage
    src="/bg-block-A.png"
    aria-hidden="true"
    width="572"
    height="592"
    sizes="100vw sm:50vw md:572"
    :lazy="false"
    class="absolute top-0 left-0 z-0"
  />
  <BaseImage
    src="/bg-block-B.png"
    aria-hidden="true"
    width="572"
    height="592"
    sizes="100vw sm:50vw md:572"
    :lazy="false"
    class="absolute top-0 right-0 z-0 hidden md:block"
  />
  <header
    class="sticky top-0 bg-false-white-opacity backdrop-blur-md z-10"
    :class="{ 'is-open': isOpen }"
    @keydown.esc="isOpen = false"
  >
    <div class="wrapper flex py-2 justify-between items-center">
      <BaseLink to="/" title="Torna alla homepage">
        <BaseImage
          v-if="!isOpen"
          src="/latitude-x-logo.svg"
          alt="Latitude X Academy logo"
          width="252"
          height="60"
          class=""
          sizes="100vw sm:50vw md:252"
          :lazy="false"
        />
        <BaseImage
          v-else
          src="/latitude-x-logo-block.svg"
          width="84"
          height="60"
          class="block sm:hidden"
          alt="Latitude X Academy logo"
          sizes="100vw sm:50vw md:84"
          :lazy="false"
        />
      </BaseLink>
      <BaseButton
        class="block md:hidden"
        aria-controls="main-menu"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        @click="menuToggle"
        :title="isOpen ? 'Chiudi il menu principale' : 'Apri il menu principale'"
        :aria-label="isOpen ? 'Chiudi il menu principale' : 'Apri il menu principale'"
      >
        <span v-if="isOpen" class="text-secondary">
          <BaseIcon :icon="'close'" :size="'lg'" />
        </span>
        <span v-else class="text-secondary">
          <BaseIcon :icon="'menu'" :size="'lg'" />
        </span>
      </BaseButton>
      <nav class="hidden md:block" id="main-menu">
        <ul class="inline-flex space-x-6">
          <li>
            <BaseButton @click="isOpen = false" to="#">
              <strong>Corsi</strong>
            </BaseButton>
          </li>
          <li>
            <BaseButton @click="isOpen = false" to="#">
              <strong>Chi siamo</strong>
            </BaseButton>
          </li>
          <li>
            <BaseButton @click="isOpen = false" to="#">
              <strong>FAQ</strong>
            </BaseButton>
          </li>
          <li>
            <BaseButton @click="isOpen = false" to="#">
              <strong>Contatti</strong>
            </BaseButton>
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

      a,
      button {
        padding: 1rem 0;
        width: 100%;
        display: inline-block;

        &:hover {
          @apply bg-primary-lighter;
        }
      }
    }
  }
}
</style>
