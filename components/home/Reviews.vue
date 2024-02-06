<template>
  <section class="py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4 leading-6">
        <span class="eyebrown mb-1">Si fidano di noi</span>
        <strong>+1.000 studenti hanno seguito i nostri corsi</strong><br />
        <small class="text-sm">
          Abbiamo organizzato decine di corsi di formazione in tutta Italia.
        </small>
      </h3>
      <Carousel v-bind="settings" :breakpoints="breakpoints" class="items-start" tabindex="-1">
        <Slide v-for="(element, index) in appConfig.recensioni" :key="index">
          <article class="max-w-sm mr-4 pb-4 px-4 pt-52 relative">
            <span class="absolute top-0 left-0 h-full w-full">
              <BaseImage
                aria-hidden="true"
                sizes="100vw sm:50vw md:320"
                class="object-cover h-full w-full"
                format="webp"
                :src="element.cover" />
            </span>
            <div class="text-left bg-false-white border border-grey-lighter p-3 relative">
              <h3 class="text-base md:text-xl">
                <span class="text-xs">
                  Messaggio da: <strong>{{ element.from }}</strong>
                </span>
                <br />
                {{ element.title }}
              </h3>
              <p class="text-xs py-2 leading-normal">
                <em> {{ element.description }}</em>
              </p>
              <div class="text-xs text-right">
                <strong>{{ element.by }}</strong>
              </div>
            </div>
          </article>
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
    ariaNextSlide: "Vai al messaggio successivo",
    ariaPreviousSlide: "Vai al messaggio precedente",
    ariaNavigateToSlide: "Vai al messaggio {slideNumber}",
    ariaGallery: "Galleria",
    itemXofY: "Messaggio {currentSlide} di {slidesCount}",
    iconArrowRight: "Vai verso destra",
    iconArrowLeft: "Vai verso sinistra",
  },
});
const breakpoints = reactive({
  '520': {
    itemsToShow: 1.2,
  },
  '640': {
    itemsToShow: 2.6,
  },
  '1024': {
    itemsToShow: 3.5,
  },
});
</script>
