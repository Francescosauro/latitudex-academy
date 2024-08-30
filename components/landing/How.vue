<template>
  <div class="prose sticky top-20 mt-6 md:mt-0">
    <h2 class="mt-0 px-3 pt-3">
      Come funziona
    </h2>
    <ol class="text-sm mx-3">
      <li>Acquisti il corso e accedi alla piattaforma con Esmerise.com</li>
      <li>Guardi i video quando puoi, scegli tu i tempi</li>
      <li>Superi il test finale di valutazione</li>
      <li>(Solo corso BLS-D) Se vuoi, vieni alla prova in presenza per ottenere il Certificato ufficiale</li>
    </ol>
    <BaseImage
      :src="'mockup-video-b.jpg'"
      alt=""
      class="mb-0 w-full"
      width="571"
      height="401"
      format="webp"
      sizes="100vw sm:50vw md:571" />
    <p class="px-3">
      Tutti i video si trovano su un’unica piattaforma semplice e intuitiva da usare, grazie a Esmerise.com.
    </p>
    <div class="text-center pb-3">
      <BaseLink class="btn btn-lg !no-underline" :is-link="true" :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#acquista' }">
        <strong>Acquista</strong>
      </BaseLink>
    </div>
  </div>
</template>
