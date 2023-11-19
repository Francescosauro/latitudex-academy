<template>
  <ul class="grid grid-8 mt-6 content-center justify-items-center max-w-3xl m-auto">
    <li
      v-for="(sponsor, index) in appConfig.sponsor"
      :key="index"
      class="flex items-center flex-wrap h-full"
    >
    <div class="text-center ">
         <BaseImage
        class="rounded-xl bg-white mb-1 p-2 m-auto"
        :src="sponsor.src ? '/sponsor/' + sponsor.src : null"
        width="120"
        height="auto"
        :alt="'Logo di:' + sponsor.name"
        sizes="100vw sm:50vw md:320"
      />
      <em class="text-xs">{{ sponsor.name }}</em>
    </div>
   
    </li>
  </ul>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
