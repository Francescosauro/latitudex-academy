<template>
  <div class="prose sticky top-1">
    <h2 class="mt-0">
      Come funziona
    </h2>
    <ol>
      <li>Acquisiti il corso e accedi alla piattaforma con XXX</li>
      <li>Guardi i video quando puoi, scegli tu i tempi</li>
      <li>Superi il test finale di valutazione</li>
      <li>(Solo corso BLS-D) Vieni alla prova finale e ottieni il certificato ufficiale</li>
    </ol>
    <BaseImage
      :src="'mockup-video.png'"
      alt=""
      class="mb-0 w-full"
      width="571"
      height="401"
      format="webp"
      sizes="100vw sm:50vw md:571" />
    <p>
      Tutti i video si trovano su un’unica piattaforma semplice e intuitva da usare, grazie a XXX.
    </p>
    <div class="text-center">
      <BaseLink class="btn btn-lg !no-underline" :is-link="true" :to="{ path: '/corso-primo-soccorso', hash: '#acquista' }">
        <strong>Acquista</strong>
      </BaseLink>
    </div>
  </div>
</template>
