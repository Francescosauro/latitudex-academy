<template>
  <section class="py-10" id="cosa">
    <div class="wrapper">
      <div class="md:flex md:space-x-4">
        <div class="md:w-1/2">
          <BaseImage
            :src="'mockup-video.jpg'"
            alt=""
            class="mb-0 w-full"
            width="571"
            height="401"
            format="webp"
            sizes="100vw sm:50vw md:571" />
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
            <li class="inline-block p-1">
              <BaseIcon :icon="'mobile'" class="text-secondary mr-1" />
              <small>Accessibile da qualunque dispositivo</small>
            </li>
          </ul>

          <!-- <BaseButton
            class="btn btn-outline mt-4"
            aria-controls="modal-video"
            :aria-expanded="isModalOpened"
            aria-haspopup="true"
            @click="modalToggle"
            :title="isModalOpened ? 'Chiudi l’anteprima del corso' : 'Apri l’anteprima del corso'"
            :aria-label="isModalOpened ? 'Chiudi l’anteprima del corso' : 'Apri l’anteprima del corso'">
            <BaseIcon :icon="'movie'" class="mr-1" />
            Guarda l’anteprima del corso
          </BaseButton> -->
          <BaseLink class="btn btn-lg !no-underline mt-5" :is-link="true" :to="{ path: '/corso-primo-soccorso-e-blsd', hash: '#acquista' }">
            <strong>Acquista</strong>
          </BaseLink>
        </div>
        <div class="md:w-1/2 prose mt-8 md:mt-0">
          <p class="!mb-2 uppercase">Cosa imparerai</p>
          <h2 class="mt-0">
            Acquista il video corso per imparare a soccorrere in qualunque situazione
          </h2>
          <p>
            Seguirai un <b>percorso completo</b> che ti insegnerà da zero <b>tutte le manovre</b>
            essenziali per prestare un efficace primo soccorso. Lezioni interattive e
            ricche di <b>esempi pratici</b> ti aspettano. <strong>Pronto a diventare un soccorritore?</strong>
          </p>
          <h3>Imparerai a:</h3>
          <ul>
            <li>Allertare il 112/118 con efficacia</li>
            <li>Riconoscere i segni d’allarme</li>
            <li>Valutare i sintomi di un infarto miocardico</li>
            <li>Agire in caso di soffocamento e annegamento</li>
            <li>Riconoscere e gestire lo stato di incoscienza</li>
            <li>Valutare la sicurezza della scena</li>
            <li>Fare le giuste domande al paziente per raccogliere le informazioni</li>
            <li>Utilizzare il DAE (Defibrillatore Automatico Esterno)</li>
            <li>Eseguire il massaggio cardiaco nel bambino o nell’adulto</li>
            <li>Eseguire la manovra di disostruzione nel bambino o nell’adulto</li>
            <li>
              Mettere in sicurezza la famiglia con il kit di Primo Soccorso domestico
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- <BaseModal v-if="isModalOpened" @close-modal="isModalOpened = false" :modal-id="'modal-video'" :modal-size="'2xl'">
    <iframe width="100%" height="320" src="https://www.youtube-nocookie.com/embed/VQSOvRDrOxI?si=1bP41movFN3C6yh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </BaseModal> -->
</template>

<script setup lang="ts">
const isModalOpened = ref(false);
const modalToggle = () => {
  isModalOpened.value = !isModalOpened.value;
};
</script>
<style lang="scss" scoped>
ul {
  li {
    line-height: 140%;
    font-size: 0.875rem;
  }
}
</style>
