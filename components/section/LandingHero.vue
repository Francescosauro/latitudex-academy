<template>
  <section class="wrapper md:flex md:space-x-4 items-center">
    <div class="prose md:w-1/2">
      <BaseImage
        src="hero.png"
        alt=""
        class="mb-0 mt-2 block md:hidden m-auto"
        aria-hidden="true"
        width="591"
        height="520"
        :lazy="false"
        format="webp"
        sizes="100vw sm:50vw md:591"
      />
      <h1 class="mb-0">La conoscenza che salva la vita a chi vuoi bene</h1>
      <h2 class="font-normal mt-3 mb-0">
        Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie
        all’unico <span class="text-primary">video corso online</span> di Primo Soccorso.
      </h2>
      <BaseCta />
    </div>

    <div class="md:w-1/2">
      <BaseImage
        src="hero.png"
        alt=""
        class="mb-0 hidden md:block"
        aria-hidden="true"
        width="591"
        height="520"
        format="webp"
        :lazy="false"
        sizes="100vw sm:50vw md:591"
      />
      <p class="text-center text-lg md:-mt-20 md:mt-0 mt-4">
        <strong>In uscita a gennaio 2024</strong>
      </p>
      <ul class="list-none m-auto max-w-lg mt-3">
        <li class="inline-block p-1">
          <BaseIcon :icon="'run'" class="text-secondary mr-1" />
          <small>Lezioni teoriche e pratiche</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'video'" class="text-secondary mr-1" />
          <small>+150 minuti di video on-demand</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'mobile'" class="text-secondary mr-1" />
          <small>Accesso da qualunque dispositivo</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'boy'" class="text-secondary mr-1" />
          <small>Nessuna esperienza richiesta</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'infinite'" class="text-secondary mr-1" />
          <small>Accesso illimitato al corso</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'award'" class="text-secondary mr-1" />
          <small>Attestato di completamento</small>
        </li>
        <li class="inline-block p-1">
          <BaseIcon :icon="'aid-kit'" class="text-secondary mr-1" />
          <small>Bonus: crea il tuo kit di primo soccorso</small>
        </li>
      </ul>
      <div class="flex items-center m-auto max-w-lg mt-6">
        <BaseIcon :icon="'certificate'" :size="'xl'" class="text-primary mr-1" />
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
