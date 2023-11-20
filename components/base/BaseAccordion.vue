<template>
  <ul>
    <li
      v-for="(element, index) in elements"
      :key="index"
      class="bg-white p-3 border-b border-grey-lighter text-left"
    >
      <BaseButton
        class="flex justify-between w-full text-left"
        :class="{ 'font-bold': opened === 'accordion-' + index }"
        aria-haspopup="true"
        :aria-controls="'accordion-' + index"
        :aria-expanded="opened === 'accordion-' + index"
        @click="
          opened === 'accordion-' + index
            ? (opened = '')
            : (opened = 'accordion-' + index)
        "
      >
        {{ element.header }}
        <BaseIcon
          v-if="opened === 'accordion-' + index"
          :icon="'chevron-up'"
          class="text-secondary"
        />
        <BaseIcon v-else :icon="'chevron-down'" class="text-secondary" />
      </BaseButton>
      <p
        v-if="opened === 'accordion-' + index"
        :id="'accordion-' + index"
        class="my-3 text-sm leading-normal"
      >
        {{ element.body }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  elements: {
    type: Array,
    default: [],
  },
  opened: {
    type: String,
    default: "",
  },
});
</script>
