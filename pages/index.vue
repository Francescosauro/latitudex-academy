<template>
  <section class="wrapper mb-10 relative">
    <SectionAppHero></SectionAppHero>
    <SectionAppBentoGrid></SectionAppBentoGrid>
  </section>

  <section class="mb-10 py-8 bg-false-white">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi online</strong>
      </h3>
      <BaseCarousel :elements="appConfig.corsiOnLine"></BaseCarousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
