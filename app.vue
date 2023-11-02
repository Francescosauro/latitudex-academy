<template>
  <AppHeader></AppHeader>
  <main>
    <AppHero></AppHero>
    <AppSectionWhy></AppSectionWhy>
    <AppSectionVideo></AppSectionVideo>
    <AppSectionTeachers></AppSectionTeachers>
    <AppSectionWhat></AppSectionWhat>
  </main>
  <AppFooter></AppFooter>
</template>
<script setup lang="ts">
useHead({
  title: 'Corso di Primo Soccorso',
  htmlAttrs: {lang: 'it'},
  meta: [
    { name: 'description', content: 'Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie all’unico video corso online di Primo Soccorso.' },
    { name: 'og:title', content: 'Corso di Primo Soccorso' },
    { name: 'og:description', content: 'Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie all’unico video corso online di Primo Soccorso.' },
  ],
})
</script>
