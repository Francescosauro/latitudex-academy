<template>
  <div class="bg-grey-lighter">
    <!-- <NuxtLoadingIndicator /> -->
    <AppHeader />
    <main class="py-24">
      <section class="wrapper wrapper-md prose mt-8">
        <div class="mt-8">
          <b>Errore 404</b>
          <h1>Pagina non trovata</h1>
          <p>
            La pagina che stai cercando non è stata trovata, potrebbe essere stata
            rimossa, rinominata o non esistere.
          </p>
          <BaseLink :to="'/'" class="btn no-underline"> Torna alla homepage </BaseLink>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Errore 404",
  meta: [
    { name: "og:title", content: "Errore| Latitude X" },
    { name: "og:description", content: "Pagina non trovata" },
  ],
});
</script>
