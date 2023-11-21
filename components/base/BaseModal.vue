<template>
  <div id="base-modal">
    <div
      class="max-w-lg w-full mx-1 bg-white p-4 border border-grey-lighter fixed m-auto z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      @keydown.esc="$emit('closeModal')"
    >
      <div class="flex justify-end mb-3">
        <BaseButton aria-controls="base-modal" aria-expanded="true" @click="$emit('closeModal')">
          <BaseIcon :icon="'close'"  class="text-secondary"/>
        </BaseButton>
      </div>
      <slot />
    </div>
    <div class="backdrop" role="button" @click="$emit('closeModal')"></div>
  </div>
</template>

<style lang="scss">
.max-w-lg {
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
