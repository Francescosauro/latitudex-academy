<template>
  <section class="wrapper mb-10 relative">
    <SectionAppHero></SectionAppHero>
    <SectionAppBentoGrid></SectionAppBentoGrid>
  </section>

  <section class="py-8 bg-false-white">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi online</strong>
      </h3>
      <BaseCarousel :elements="appConfig.corsiOnLine"></BaseCarousel>
    </div>
  </section>
  <section class="mb-10 py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi in presenza</strong>
      </h3>
      <BaseCarousel
        :elements="appConfig.corsiInPresenza"
        :type="'presenza'"
      ></BaseCarousel>
    </div>
  </section>

  <SectionAppTeachers></SectionAppTeachers>

  <section class="py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4 leading-6">
        <span class="eyebrown mb-1">Si fidano di noi</span>
        <strong>+1.000 studenti hanno seguito i nostri corsi</strong><br />
        <small class="text-sm"
          >Abbiamo organizzato decine di corsi di formazione in tutta Italia.</small
        >
      </h3>
      <BaseCarousel :elements="appConfig.recensioni" :type="'recensioni'"></BaseCarousel>
    </div>
  </section>

  <section class="bg-false-white py-8">
   <div class="wrapper">
    <h3 class="text-xl md:text-3xl text-center">I nostri partner</h3>
    <SectionAppSponsor></SectionAppSponsor>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
