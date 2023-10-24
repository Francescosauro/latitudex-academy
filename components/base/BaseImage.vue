<template>
  <NuxtImg
    :src="getSrc"
    :alt="alt"
    loading="lazy"
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
  }
});
const getSrc = computed(()=>{
  return props.src ? props.src : '/placeholder.jpg'
})
</script>
