<template>
  <NuxtLink>
    <slot />
    <BaseIcon v-if="isLink" :icon="'arrow-next'" class="ml-2" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
})
</script>
