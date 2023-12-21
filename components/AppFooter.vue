<template>
  <footer
    class="wrapper flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 py-8 sm:justify-between"
    :class="{ 'md:mb-12 mb-36': !consent }">
    <figure>
      <BaseLink to="/" title="Torna alla homepage">
        <BaseImage
          src="/latitude-x-logo-block.svg"
          width="155"
          height="112"
          alt="Latitude X Academy logo"
          :lazy="false" />
      </BaseLink>
      <figcaption class="mt-1">
        <small>Proteggi, agisci, soccorri</small>
      </figcaption>
    </figure>
    <div>
      <ul class="list-none flex space-x-4 mb-2">
        <li>
          <a
            :href="appConfig.info.tiktok"
            target="_blank"
            title="Vai alla pagina di Tiktok">
            <BaseIcon :icon="'tiktok'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <li>
          <a
            :href="appConfig.info.instagram"
            target="_blank"
            title="Vai alla pagina di Instagram">
            <BaseIcon :icon="'instagram'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <li>
          <a
            :href="appConfig.info.facebook"
            target="_blank"
            title="Vai alla pagina di Facebook">
            <BaseIcon :icon="'facebook'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
      </ul>
      <p class="text-center sm:text-left">
        <BaseLink to="/privacy">
          <small>Informativa privacy e Cookie</small>
        </BaseLink>
        <br />
        <button
          type="button"
          @click="openModal()"
          aria-haspopup="true"
          aria-controls="cookie-modal"
          :aria-expanded="isModalOpened">
          <small>Modifica consenso cookie</small>
        </button>
        <br />
        <small>P.IVA {{ appConfig.info.iva }}</small>
      </p>
    </div>
  </footer>
  <BaseCookieBanner
    :is-modal-opened="isModalOpened"
    @close-modal="isModalOpened = false">
  </BaseCookieBanner>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const consent = useCookie('hasConsent')
const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = !isModalOpened.value;
};
</script>

<style lang="scss" scoped>
footer {
  border-top: solid 1px #e8e8e8;
}
</style>
