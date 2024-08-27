<template>
  <ul>
    <li
      v-for="(element, index) in elements"
      :key="index"
      class="bg-white border-b border-grey-lighter text-left">
      <BaseButton
        class="w-full p-3"
        :class="{ 'bg-primary-lighter': opened === 'accordion-' + index }"
        aria-haspopup="true"
        :aria-controls="'accordion-' + index"
        :aria-expanded="opened === 'accordion-' + index"
        @click="
          opened === 'accordion-' + index
            ? (opened = '')
            : (opened = 'accordion-' + index)
          ">
        <span
          v-if="typeof element.header === 'string'"
          class="flex justify-between w-full text-left">
          <span v-if="typeof element.header === 'string'">
            {{ element.header }}
          </span>
          <BaseIcon :icon="opened === 'accordion-' + index ? 'chevron-up' : 'chevron-down'" class="text-secondary" />
        </span>
        <span
          v-else
          class="flex justify-between items-start w-full text-left space-x-3">
          <BaseIcon :icon="opened === 'accordion-' + index ? 'chevron-up' : 'chevron-down'" class="text-primary flex-none" />
          <span class="flex-grow text-sm">
            {{ element.header.title }}
          </span>
          <small class="!font-regular flex-none " v-if="element.header.time">{{ element.header.time }}</small>
        </span>
      </BaseButton>
      <div
        class="p-3"
        v-if="opened === 'accordion-' + index"
        :id="'accordion-' + index">
        <p
          class="text-sm"
          v-if="typeof element.header === 'string'">
          {{ element.body }}
        </p>
        <div v-else class="prose mt-3">
          <ol>
            <li v-for="chapter in element.body">
              <span class="inline-flex justify-between items-center w-full text-sm not-prose">
                <span class="not-prose">{{ chapter.title }}</span>
                <span class="not-prose text-xs">{{ chapter.time }}</span>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
type Text = { title: String, time: String }
interface Content {
  header: Text | string,
  body: Text[] | string
}

const opened = ref("");
const props = defineProps<{
  elements: Content[]
}>()
</script>
