<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <CookieControl></CookieControl> -->
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
    {
      name: "description",
      content:
        "Unisciti alla prima scuola in Italia di primo soccorso. Per tutti, online e in presenza.",
    },
    { name: "og:title", content: "La scuola di Primo Soccorso | Latitude X Academy" },
    {
      name: "og:description",
      content:
        "Unisciti alla prima scuola in Italia di primo soccorso. Per tutti, online e in presenza.",
    },
    { name: "og:image", content: "https://latitudex.academy/_ipx/s_764x468/hero-b.png" },
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
  title: "L'Accademia di Primo Soccorso | Latitude X Academy",
});
</script>
