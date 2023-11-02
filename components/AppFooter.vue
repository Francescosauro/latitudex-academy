<template>
  <div class="wrapper text-center max-w-4xl m-auto py-10">
    <h2 class="text-2xl sm:text-5xl leading-relaxed inline-block">
      Per salvare la vita a chi vuoi bene. Imparare a farlo è alla portata di tutti
    </h2>
    <div class="prose text-left max-w-xl m-auto">
      <BaseCta :inputIdNumber="2" />
    </div>
  </div>
  <footer
    class="wrapper flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 py-8 sm:justify-between"
  >
    <figure>
      <img src="/latitude-x-logo-footer.svg" width="155" alt="Latitud X Academy logo" />
      <figcaption class="mt-1">
        <small>Proteggi, agisci, soccorri</small>
      </figcaption>
    </figure>
    <div>
      <ul class="list-none flex space-x-4 mb-2">
        <li>
          <a href="#" target="_blank" title="Vai alla pagina di Tiktok">
            <BaseIcon :icon="'tiktok'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" title="Vai alla pagina di Instagram">
            <BaseIcon :icon="'instagram'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" title="Vai alla pagina di Facebook">
            <BaseIcon :icon="'facebook'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" title="Vai alla pagina di Youtube">
            <BaseIcon :icon="'youtube'" :size="'lg'" class="text-primary mr-1" />
          </a>
        </li>
      </ul>
      <p class="text-center sm:text-left">
        <a href="#" target="_blank">
          <small>Informativa privacy e Cookie</small>
        </a>
        <br />
        <small>P.IVA 00000000000</small>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: solid 1px #ccc;
}
</style>
