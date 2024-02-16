<template>
  <div class="wrapper">
    <p class="text-3xl text-center m-auto">
      Il primo anello della catena della sopravvivenza sei tu, le prime mani e i primi occhi sul luogo dell’incidente. agisci, non rimanere a guardare.
    </p>
    <ul class="max-w-4xl m-auto mt-8 md:flex space-y-8 md:space-y-0">
      <li class="text-center">
        <BaseImage
          src="chain-riconoscimento.png"
          alt="Illustrazione di una persona che telefona al pronto soccroso"
          class="mb-2 z-50 relative m-auto"
          width="244"
          height="244"
          :lazy="false"
          format="webp"
          sizes="100vw sm:50vw md:244" />
        <p class="inline-flex items-center max-w-[180px] text-left">
          <span class="text-2xl font-bold mr-3">1</span>
          Riconoscimento precoce
        </p>
      </li>
      <li class="text-center">
        <BaseImage
          src="chain-rcp-precoce.png"
          alt="Illustrazione di una persona che pratica un massaggio cardiaco"
          class="mb-2 z-40 relative m-auto"
          width="244"
          height="244"
          :lazy="false"
          format="webp"
          sizes="100vw sm:50vw md:244" />
        <p class="inline-flex items-center max-w-[180px] text-left">
          <span class="text-2xl font-bold mr-3">2</span>
          RCP <br>precoce
        </p>
      </li>
      <li class="text-center">
        <BaseImage
          src="chain-defibrillatore.png"
          alt="Illustrazione di una persona che usa un defibrillatore"
          class="mb-2 z-30 relative m-auto"
          width="244"
          height="244"
          :lazy="false"
          format="webp"
          sizes="100vw sm:50vw md:244" />
        <p class="inline-flex items-center max-w-[180px] text-left">
          <span class="text-2xl font-bold mr-3">3</span>
          Defibrillazione
          precoce
        </p>
      </li>
      <li class="text-center">
        <BaseImage
          src="chian-rianimazione.png"
          alt="Illustrazione di una persona ricoverata in rianimazione"
          class="mb-2 z-20 relative m-auto"
          width="244"
          height="244"
          :lazy="false"
          format="webp"
          sizes="100vw sm:50vw md:244" />
        <p class="inline-flex items-center max-w-[180px] text-left">
          <span class="text-2xl font-bold mr-3">4</span>
          Assistenza post
          rianimazione
        </p>
      </li>
    </ul>
    <div class="text-center mt-12">
      <BaseLink class="btn btn-lg !no-underline" :is-link="true" :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#acquista' }">
        <strong>Acquista</strong>
      </BaseLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
ul {
  li {
    margin-right: -1.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
