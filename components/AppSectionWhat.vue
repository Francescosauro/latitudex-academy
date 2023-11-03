<template>
  <section class="py-10">
    <div class="wrapper">
      <div class="md:flex md:space-x-4">
        <div class="md:w-1/2">
          <BaseImage :src="'mockup-video.png'" alt="" class="mb-0" width="571" height="401" />
          <ul class="list-none mt-3">
            <li class="inline-block p-1">
              <BaseIcon :icon="'reload'" class="text-secondary mr-1" />
              <small>Cominci e finisci quando vuoi</small>
            </li>
            <li class="inline-block p-1">
              <BaseIcon :icon="'award'" class="text-secondary mr-1" />
              <small>Attestato di completamento</small>
            </li>
            <li class="inline-block p-1">
              <BaseIcon :icon="'asterisk'" class="text-secondary mr-1" />
              <small>Semplice e intuitivo</small>
            </li>
            <li class="inline-block p-1">
              <BaseIcon :icon="'phone'" class="text-secondary mr-1" />
              <small>Supporto attivo e veloce</small>
            </li>
            <li class="inline-block p-1">
              <BaseIcon :icon="'clipboard-plus'" class="text-secondary mr-1" />
              <small>Docenti medici qualificati</small>
            </li>
          </ul>
        </div>
        <div class="md:w-1/2 prose mt-8 m:mt-0">
          <p class="!mb-2 uppercase">Cosa imparerai</p>
          <h2 class="mt-0">
            Acquista il video corso per imparare a soccorrere in qualunque situazione
          </h2>
          <p>
            Seguirai un percorso completo che ti insegnerà da zero tutte le manovre
            essenziali per prestare un efficace primo soccorso. Lezioni interattive e
            ricche di esempi pratici ti aspettano. Pronto a diventare un soccorritore?
          </p>
          <h3>Imparerai a:</h3>
          <ul>
            <li>Allertare il 112/118 con efficacia</li>
            <li>Riconoscere i segni d’allarme</li>
            <li>Valutare i sintomi di un’ infarto miocardico</li>
            <li>Agire in caso di soffocamento e annegamento</li>
            <li>Riconoscere e gestire lo stato di incoscienza</li>
            <li>Valutare la sicurezza della scena</li>
            <li>Fare le giuste domande al paziente per raccogliere le informazioni</li>
            <li>Utilizzare il DAE (Defibrillatore Automatico Esterno)</li>
            <li>Eseguire il massaggio cardiaco nel bambino o nell’adulto</li>
            <li>Eseguire la manovra di disostruzione nel bambino o nell’adulto</li>
            <li>Mettere in sicurezza la famiglia con il kit di primo soccorso domestico</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
ul {
  li {
      line-height: 140%;
      font-size: .875rem;
  
  }
}
</style>
