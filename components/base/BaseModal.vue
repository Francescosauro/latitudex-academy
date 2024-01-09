<template>
  <div :id="modalId">
    <div
      :class="'max-w-' + modalSize"
      class="modal w-full mx-1 bg-white p-4 border border-grey-lighter fixed m-auto z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      @keydown.esc="$emit('close-modal')">
      <div class="flex justify-end mb-3">
        <BaseButton :aria-controls="modalId" aria-expanded="true" @click="$emit('close-modal')">
          <BaseIcon :icon="'close'" class="text-secondary" />
        </BaseButton>
      </div>
      <slot />
    </div>
    <div 
      class="backdrop"
      role="button" 
      :aria-controls="modalId" 
      aria-expanded="true" 
      @click="$emit('close-modal')">
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-modal'])
const props = defineProps({
  modalId: {
    type: String,
    default: 'base-modal',
  },
  modalSize: {
    type: String,
    default: 'lg'
  }
})
</script>
<style lang="scss">
.modal {
  z-index: 999;
  overflow-y: auto;
  max-height: 98vh;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 76, 75, 0.9);
  z-index: 99;
  backdrop-filter: blur(4px);
  cursor: pointer;
}
</style>
