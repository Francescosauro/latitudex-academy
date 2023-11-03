<template>
  <article
    class="card rounded-md overflow-hidden"
    :class="{ 'grid grid-cols-2 space-x-4': horizontal, 'card-border': border }"
  >
    <span
      class="img-spacer"
      :class="{ 'ratio-1x1 h-full': horizontal, 'ratio-3x2': !horizontal }"
    >
      <BaseImage
        :width="width"
        :height="height"
        :sizes="sizes"
        :src="image"
        :format="'webp'"
      />
    </span>

    <div class="p-2">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  path: {
    type: String,
    default: "",
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  sizes: {
    type: String,
    default: "",
  },
});
</script>
