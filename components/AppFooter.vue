<template>
  <footer
    class="wrapper flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 py-8 sm:justify-between"
  >
    <figure>
      <BaseImage
        src="/latitude-x-logo-block.svg"
        width="155"
        height="112"
        alt="Latitud X Academy logo"
        :lazy="false"
      />
      <figcaption class="mt-1">
        <small>Proteggi, agisci, soccorri</small>
      </figcaption>
    </figure>
    <div>
      <ul class="list-none flex space-x-4 mb-2">
        <li>
          <a
            href="https://www.tiktok.com/@latitudex__academy"
            target="_blank"
            title="Vai alla pagina di Tiktok"
          >
            <BaseIcon :icon="'tiktok'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <li>
          <!-- TODO: instagram link  -->
          <a href="#" target="_blank" title="Vai alla pagina di Instagram">
            <BaseIcon :icon="'instagram'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/latitudex/"
            target="_blank"
            title="Vai alla pagina di Facebook"
          >
            <BaseIcon :icon="'facebook'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <!-- <li>
          <a href="#" target="_blank" title="Vai alla pagina di Youtube">
            <BaseIcon :icon="'youtube'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li> -->
      </ul>
      <p class="text-center sm:text-left">
        <a href="/privacy" target="_blank">
          <small>Informativa privacy e Cookie</small>
        </a>
        <br />
        <small>P.IVA {{ appConfig.info.iva }}</small>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style lang="scss" scoped>
footer {
  border-top: solid 1px #ccc;
}
</style>
