<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints" class="items-start">
    <Slide
      v-for="(element, index) in elements"
      :key="index"
      class="align-center flex-col !mr-6"
    >
      <BaseImage
        v-if="element.cover"
        :src="element.cover"
        :alt="'Copertina del ' + element.title"
        width="369"
        height="524"
        class="m-auto"
        sizes="100vw sm:50vw md:369"
      />
      <h4 class="text-xl my-2">
        <strong> {{ element.title }}</strong> <br />
        <em>{{ element.description }}</em>
      </h4>
      <BaseLink 
        v-if="element.isActive"
        class="btn btn-lg" 
        :to="element.link"
      >
        Scopri di più
      </BaseLink>
    </Slide>
    <template #addons>
      <Navigation />
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
});

const settings = reactive({
  itemsToShow: 1.5,
  snapAlign: "start",
});
const breakpoints = reactive({
  640: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
});
</script>

<style lang="scss">
.carousel__track {
  align-items: start;
}
</style>
