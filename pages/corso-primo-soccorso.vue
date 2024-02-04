<template>
  <LandingHeader></LandingHeader>
  <main>
    <LandingHero></LandingHero>
    <LandingWhy></LandingWhy>
    <LandingVideo></LandingVideo>
    <LandingWhat></LandingWhat>
    <LandingComics></LandingComics>
    <section class="py-10">
      <div class="wrapper">
        <div class="md:flex md:space-x-4">
          <div class="md:w-1/2">
            <LandingContent></LandingContent>
          </div>
          <div class="md:w-1/2">
            <LandingHow></LandingHow>
          </div>
        </div>
      </div>
    </section>

    TODO: LandingContent
    TODO: LandingHow
    <HomeTeachers></HomeTeachers>
    <HomeReviews></HomeReviews>
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
