<template>
  <section id="corsi-online" class="py-8 bg-false-white">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi online</strong>
      </h3>
      <Carousel v-bind="settings" :breakpoints="breakpoints" class="items-start" tabindex="-1">
        <Slide v-for="(element, index) in appConfig.corsiOnLine" :key="index">
          <div class="align-center flex-col mr-6 max-w-xs">
            <BaseLink v-if="element.isActive" :to="element.link">
              <BaseImage
                v-if="element.cover"
                :src="element.cover"
                :alt="'Copertina del ' + element.title"
                width="369"
                height="524"
                class="m-auto"
                format="webp"
                sizes="100vw sm:50vw md:369" />
            </BaseLink>
            <BaseImage
              v-else
              v-if="element.cover"
              :src="element.cover"
              :alt="'Copertina del ' + element.title"
              width="369"
              height="524"
              class="m-auto"
              format="webp"
              sizes="100vw sm:50vw md:369" />
            <h4 class="text-base md:text-xl my-2">
              <strong> {{ element.title }}</strong> <br />
              <em>{{ element.description }}</em>
            </h4>
            <BaseLink v-if="element.isActive" class="btn md:btn-lg" :to="{ path: element.link, hash: '#main' }" @click="triggerEvent('on-line')">
              Scopri di più
            </BaseLink>
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
})
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
})

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
</script>
