<template>
  <LandingHeader></LandingHeader>
  <main>
    <LandingHero></LandingHero>
    <LandingWhy></LandingWhy>
    <LandingTrailer></LandingTrailer>
    <LandingWhat></LandingWhat>
    <LandingComics></LandingComics>
    <LandingVideo></LandingVideo>
    <LandingChain></LandingChain>
    <section class="py-10">
      <div class="wrapper">
        <div class="md:flex md:space-x-4">
          <div class="md:w-1/2">
            <LandingContent></LandingContent>
          </div>
          <div class="md:w-1/2 how-block rounded-lg">
            <LandingHow></LandingHow>
          </div>
        </div>
      </div>
    </section>
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


<style lang="scss" scoped>
.how-block {
  background: linear-gradient(to bottom right, #E3F0F0, #FAFAFA);
}
</style>
