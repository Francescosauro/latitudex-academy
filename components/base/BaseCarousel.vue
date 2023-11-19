<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints" class="items-start">
    <!-- CORSI ON LINE -->
    <Slide v-if="type === 'online'" v-for="(element, index) in elements" :key="index">
      <div class="align-center flex-col mr-6 max-w-xs">
        <BaseLink v-if="element.isActive" :to="element.link">
          <BaseImage
            v-if="element.cover"
            :src="element.cover"
            :alt="'Copertina del ' + element.title"
            width="369"
            height="524"
            class="m-auto"
            sizes="100vw sm:50vw md:369"
          />
        </BaseLink>
        <BaseImage
          v-else
          v-if="element.cover"
          :src="element.cover"
          :alt="'Copertina del ' + element.title"
          width="369"
          height="524"
          class="m-auto"
          sizes="100vw sm:50vw md:369"
        />
        <h4 class="text-base md:text-xl my-2">
          <strong> {{ element.title }}</strong> <br />
          <em>{{ element.description }}</em>
        </h4>
        <BaseLink v-if="element.isActive" class="btn md:btn-lg" :to="element.link">
          Scopri di più
        </BaseLink>
      </div>
    </Slide>
    <!-- CORSI IN PRESENZA -->
    <Slide v-if="type === 'presenza'" v-for="(element, index) in elements" :key="index">
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
          <BaseButton class="btn mt-4" @click="console.log('TODO: modale')">
            Chiedi info
          </BaseButton>
        </footer>
      </div>
    </Slide>
    <!-- RECENSIONI -->
    <Slide v-if="type === 'recensioni'" v-for="(element, index) in elements" :key="index">
      <article class="max-w-sm mr-4 pb-4 px-4 pt-36 relative .w-60">
        <span class="absolute top-0 left-0 h-full w-full">
          <BaseImage
            aria-hidden="true"
            sizes="100vw sm:50vw md:320"
            class="object-cover h-full w-full"
            :src="element.cover"
          />
        </span>
        <div class="text-left bg-false-white border border-grey-lighter p-3 relative">
          <h3 class="text-base md:text-xl">
            <span class="text-xs">
              Recesione da: <strong>{{ element.from }}</strong>
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
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const props = defineProps({
  elements: {
    type: Array,
    default: [],
  },
  type: {
    type: String,
    default: "online",
  },
});
const settings = reactive({
  itemsToShow: 1.2,
  snapAlign: "center",
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
  640: {
    itemsToShow: 2.2,
  },
  1024: {
    itemsToShow: 3.2,
  },
});
</script>

<style lang="scss">
.carousel__ {
  &slide {
    cursor: grab;
  }
  &track {
    align-items: start;
  }
  &prev,
  &next {
    position: static;
    margin: 0;
    transform: none;

    path {
      fill: #57989b;
    }
    &--disabled {
      path {
        fill: #7d7d7d;
      }
    }
  }
}
</style>
