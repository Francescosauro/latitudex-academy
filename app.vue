<template>
  <AppHeader></AppHeader>
  <main>
    <NuxtPage />
  </main>
  <AppFooter></AppFooter>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "it",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "format-detection", content: "telephone=no" },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      crossorigin: "use-credentials",
      href: "/site.webmanifest",
    },
  ],
  title: "Corso di Primo Soccorso | Latitude X Academy",
  meta: [
    {
      name: "description",
      content:
        "Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie all’unico video corso online di Primo Soccorso.",
    },
    { name: "og:title", content: "Corso di Primo Soccorso" },
    {
      name: "og:description",
      content:
        "Impara le manovre salva vita e metti in sicurezza la tua famiglia, grazie all’unico video corso online di Primo Soccorso.",
    },
  ],
});
</script>
