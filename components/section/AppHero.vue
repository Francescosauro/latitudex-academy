<template>
  <header class="max-w-[40rem] prose m-auto py-16 text-center">
    <h1 class="mb-3 text-gradient-primary">L'Accademia di Primo Soccorso</h1>
    <h2 class="mt-0 font-normal text-gradient-primary">
      Unisciti alla prima scuola in Italia di Primo Soccorso. Per tutti, online e in
      presenza.
    </h2>
    <BaseLink :to="{ path: '/', hash: '#corsi-online' }" class="btn btn-lg !no-underline">
      <strong>Vedi tutti i corsi</strong>
    </BaseLink>
  </header>
</template>
