<template>
  <NuxtImg
    :src="getSrc"
    :alt="alt"
    :loading="lazy ? 'lazy' : undefined"
    placeholder
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  lazy: {
    type: Boolean,
    default: true
  }
});
const getSrc = computed(()=>{
  return props.src ? props.src : '/placeholder.jpg'
})
</script>
