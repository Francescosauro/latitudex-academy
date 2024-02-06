<template>
  <div class="py-10 bg-primary-lighter">
    <div class="wrapper md:flex overflow-hidden">
      <h2 class="text-center md:text-left font-bold text-3xl md:max-w-sm md:mr-4 md:w-1/3 mb-6">
        Non devi essere un eroe per salvare una vita, basta sapere come si fa, è semplice!
      </h2>
      <div class="md:w-2/3">
        <Carousel v-bind="settings" :breakpoints="breakpoints" class="items-start" tabindex="-1">
          <Slide v-for="(element, index) in appConfig.comics" :key="index">
            <div class="ml-4">
              <h3 class="text-lg font-bold bg-false-white rounded-full py-4 px-8 mb-12">
                {{ element.header }}
              </h3>
              <p class="text-sm leading-normal text-left">
                {{ element.body }}
              </p>
            </div>
          </Slide>
          <template #addons>
            <div class="flex justify-center mt-5 text-primary">
              <Navigation />
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
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
    itemsToShow: 2,
  },
  '640': {
    itemsToShow: 2.5,
  },
  '1024': {
    itemsToShow: 3.5,
  },
});
</script>
<style scoped lang="scss">
h3 {
  position: relative;

  &::after {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAyMiAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNjI1IDAuNjY3OTY5QzAuNjI1IDE5LjA2OCAxNC4yOTE3IDMyLjAwMTMgMjEuMTI1IDM2LjE2OEMxNS4xMjUgMTguOTE4MiAxNy4xMjUgOC41MDEyOSAyMS4xMjUgMC42Njc5NjlIMC42MjVaIiBmaWxsPSIjRkFGQUZBIi8+Cjwvc3ZnPgo=");
    display: block;
    width: 20.5px;
    height: 35.5px;
    position: absolute;
    bottom: -30px;
    left: 45px;
  }
}

.carousel__slide {
  max-width: 15rem;
}
</style>
