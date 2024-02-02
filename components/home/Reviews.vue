<template>
  <section class="py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4 leading-6">
        <span class="eyebrown mb-1">Si fidano di noi</span>
        <strong>+1.000 studenti hanno seguito i nostri corsi</strong><br />
        <small class="text-sm">
          Abbiamo organizzato decine di corsi di formazione in tutta Italia.
        </small>
      </h3>
      <BaseCarousel :elements="appConfig.recensioni" :type="'recensioni'"></BaseCarousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
