<template>
  <section id="corsi-presenza" class="py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi in presenza</strong>
      </h3>
      <Carousel v-bind="settings" :breakpoints="breakpoints" class="items-start" tabindex="-1">
        <Slide v-for="(element, index) in appConfig.corsiInPresenza" :key="index">
          <div class="text-left bg-false-white border border-grey-lighter p-3 mr-4 max-w-xs">
            <h4 class="text-base md:text-xl my-2">
              {{ element.title }}
            </h4>
            <p class="mt-2 pb-4 text-sm border-b border-grey-light">
              {{ element.description }}
            </p>
            <footer class="text-center">
              <ul class="w-full mt-4 text-sm space-y-3">
                <li class="flex justify-between">
                  <span>Durata</span>
                  <b>{{ element.data.durata }}</b>
                </li>
                <li class="flex justify-between">
                  <span>Data</span>
                  <b>{{ element.data.data }}</b>
                </li>
                <li class="flex justify-between">
                  <span>Destinatari</span>
                  <b>{{ element.data.destinatari }}</b>
                </li>
              </ul>
              <BaseButton
                class="btn mt-4"
                @click="triggerEvent('presenza'); $emit('modalCall')"
                aria-haspopup="true"
                aria-controls="form-modal"
                :aria-expanded="isModalOpened">
                Chiedi info
              </BaseButton>
            </footer>
          </div>
        </Slide>
        <template #addons>
          <div class="flex justify-center mt-5 text-primary">
            <Navigation />
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">

const appConfig = useAppConfig();
const props = defineProps({
  isModalOpened: {
    type: Boolean,
    default: false
  }
});

const gtm = useGtm()

const triggerEvent = (type: string) => {
  if (!gtm) return
  gtm.trackEvent({
    event: 'Click su carosello',
    category: 'click-track',
    action: 'click',
    label: 'Click corsi ' + type,
    value: 5000,
    noninteraction: false,
  })
}

const settings = reactive({
  itemsToShow: 1.2,
  i18n: {
    ariaNextSlide: "Vai al corso successivo",
    ariaPreviousSlide: "Vai al corso precedente",
    ariaNavigateToSlide: "Vai al corso {slideNumber}",
    ariaGallery: "Galleria",
    itemXofY: "Corso {currentSlide} di {slidesCount}",
    iconArrowRight: "Vai verso destra",
    iconArrowLeft: "Vai verso sinistra",
  },
});
const breakpoints = reactive({
  '520': {
    itemsToShow: 2.2,
  },
  '640': {
    itemsToShow: 3.2,
  },
  '1024': {
    itemsToShow: 3.5,
  },
});

</script>
