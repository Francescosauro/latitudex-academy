<template>
  <section class="items-center wrapper md:flex md:space-x-4">
    <div class="prose md:w-1/2">
      <BaseImage
        src="hero.png"
        alt=""
        class="block m-auto mt-2 mb-0 md:hidden"
        aria-hidden="true"
        width="591"
        height="520"
        :lazy="false"
        format="webp"
        sizes="100vw sm:50vw md:591"
      />
      <h1 class="mb-0">La conoscenza che salva la vita a chi vuoi bene</h1>
      <h2 class="mt-3 mb-0 font-normal">
        Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie
        all’unico <span class="text-primary">video corso online</span> di Primo Soccorso.
      </h2>
      <BaseCta />
    </div>

    <div class="md:w-1/2">
      <BaseImage
        src="hero.png"
        alt=""
        class="hidden mb-0 md:block"
        aria-hidden="true"
        width="591"
        height="520"
        format="webp"
        :lazy="false"
        sizes="100vw sm:50vw md:591"
      />
      <p class="mt-4 text-lg text-center md:-mt-20 md:mt-0">
        <strong>In uscita a Giugno 2024</strong>
      </p>
      <ul class="max-w-lg m-auto mt-3 list-none">
        <li class="inline-block p-1">
          <BaseIcon :icon="'run'" class="mr-1 text-secondary" />
          <small>Lezioni teoriche e pratiche</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'video'" class="mr-1 text-secondary" />
          <small>+150 minuti di video on-demand</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'mobile'" class="mr-1 text-secondary" />
          <small>Accesso da qualunque dispositivo</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'boy'" class="mr-1 text-secondary" />
          <small>Nessuna esperienza richiesta</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'infinite'" class="mr-1 text-secondary" />
          <small>Accesso illimitato al corso</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'award'" class="mr-1 text-secondary" />
          <small>Attestato di completamento</small>
        </li>
        <!-- <li class="inline-block p-1">
          <BaseIcon :icon="'aid-kit'" class="mr-1 text-secondary" />
          <small>Bonus: crea il tuo kit di primo soccorso</small>
        </li> -->
      </ul>
      <div class="flex items-center max-w-lg m-auto mt-6">
        <BaseIcon :icon="'certificate'" :size="'xl'" class="mr-1 text-primary" />
        <p class="text-sm">
          Con il corso di BLS-D puoi accedere all’incontro per il rilascio del
          certificato.
          <small>
            <em>
              Certificato rilasciato da un Centro di Formazione accreditato al 118
              regionale
            </em>
          </small>
        </p>
      </div>
    </div>
  </section>
</template>
