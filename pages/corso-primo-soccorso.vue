<template>
  <LandingHeader></LandingHeader>
  <main>
    <LandingHero></LandingHero>
    <AppSectionWhy></AppSectionWhy>
    <AppSectionVideo></AppSectionVideo>
    <AppSectionTeachers></AppSectionTeachers>
    <AppSectionWhat></AppSectionWhat>
  </main>
  <LandingFooter></LandingFooter>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
useHead({
  htmlAttrs: {
    lang: "it",
  },
  meta: [
    {
      name: "description",
      content:
        "Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie all’unico video corso online di Primo Soccorso.",
    },
    { name: "og:title", content: "Corso di Primo Soccorso | Latitude X Academy" },
    {
      name: "og:description",
      content:
        "Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie all’unico video corso online di Primo Soccorso.",
    },
    { name: "og:image", content: "https://latitudex.academy/_ipx/s_764x468/hero-b.png" },
  ],
  title: "Corso di Primo Soccorso | Latitude X Academy",
});
</script>
