<template>
  <section class="pt-8 lg:mt-8 bg-primary-darker text-white" id="acquista">
    <div class="wrapper lg:flex lg:space-x-4 justify-between">
      <div class="lg:w-1/3 max-w-xl mx-auto mb-6">
        <h2 class="text-3xl font-bold mb-4">
          Acquista ora il corso e comincia subito ad imparare
        </h2>
        <p class="text-xl">
          La prima video guida online di primo soccorso, per non rimanere fermo in caso d’emergenza
        </p>
      </div>
      <div class="purchase-box box-up ">
        <BaseImage
          :src="'/purchase-corso-di-primo-soccorso.png'"
          :alt="'Copertina del Corso di primo soccorso'"
          width="390"
          height="300"
          class="lg:-mt-16 -mb-1"
          format="webp"
          sizes="100vw sm:50vw lg:390" />
        <div class="bg-false-white text-center space-y-2 text-black py-4">
          <p class="uppercase">
            <strong>Corso di primo soccorso</strong>
          </p>
          <p class="text-5xl">
            {{ getPrice('primo-soccorso') }} €
          </p>
          <small class="text-xs block">
            iva inclusa
          </small>
          <BaseLink class="btn !no-underline" target="_blank" :is-link="true" :to="getPurchaseUrl('primo-soccorso')">
            <strong>Acquista ora</strong>
          </BaseLink>
        </div>
      </div>
      <div class="purchase-box box-down">
        <BaseImage
          :src="'/purchase-corso-blsd.png'"
          :alt="'Copertina del Corso di BLSD certificato'"
          width="390"
          height="300"
          class="lg:-mt-16 -mb-1"
          format="webp"
          sizes="100vw sm:50vw lg:390" />
        <div class="bg-false-white text-center space-y-2 text-black py-4">
          <p class="uppercase">
            <strong>Corso di BLS-D certificato</strong>
          </p>
          <p class="text-5xl">
            {{ getPrice('blsd') }} €
          </p>
          <small class="text-xs block">
            iva inclusa
          </small>
          <BaseLink class="btn !no-underline" target="_blank" :is-link="true" :to="getPurchaseUrl('blsd')">
            <strong>Acquista ora</strong>
          </BaseLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const getPurchaseUrl = (course: string) => {
  let url = ''
  appConfig.corsiOnLine.forEach(el => {
    if (el.id === course) url = el.purchaesUrl
  })
  return url
}
const getPrice = (course: string) => {
  let price = ''
  appConfig.corsiOnLine.forEach(el => {
    if (el.id === course) price = el.price
  })
  return price
}

</script>

<style scoped lang="scss">
.purchase-box {
  max-width: 390px;
  margin-left: auto;
  margin-right: auto;

  div {
    width: calc(100% - 2px);
  }
}

@media (max-width: 1024px) {
  .box-down {
    padding-top: 1rem;
    margin-top: -1px;
    @apply bg-false-white;
  }
}
</style>
