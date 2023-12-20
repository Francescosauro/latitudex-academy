<template>
  <header class="m-auto pt-12 pb-20 text-center">
    <BaseImage
      src="/latitude-x-logo-block.svg"
      width="155"
      height="112"
      alt="Latitud X Academy logo"
      class="m-auto mb-5"
      :lazy="false" />
    <h1 class="mb-3 text-gradient-secondary font-bold text-4xl md:text-5xl">
      L'Accademia di Primo Soccorso
    </h1>
    <h2 class="mt-0 mx-auto text-gradient-primary text-xl md:text-2xl mb-6 max-w-[40rem]">
      Unisciti alla prima scuola in Italia di Primo Soccorso. Per tutti, online e in presenza.
    </h2>
    <BaseLink :to="{ path: '/', hash: '#corsi-online' }" class="btn btn-lg !no-underline">
      <strong>Vedi tutti i corsi</strong>
    </BaseLink>
  </header>
</template>
