<template>
  <section class="wrapper mb-10">
    <div class="max-w-2xl prose m-auto py-16 text-center">
      <h1 class="mb-5">La scuola di primo soccorso</h1>
      <h2 class="mt-0 font-normal">
        Unisciti alla prima scuola in Italia di primo soccorso. Per tutti, online e in
        presenza.
      </h2>
      <BaseButton class="btn btn-lg">Vedi tutti i corsi</BaseButton>
    </div>
    <div class="flex space-x-4">
      <div class="w-1/2">
        <div class="bg-white rounded-xl p-3 mb-4">
          <p class="text-2xl mb-3">
            Condividiamo la nostra esperienza nell’emergenza sanitaria
            <strong>con percorsi formativi accessibili a tutti</strong>.
          </p>
          <BaseButton class="is-link">
            <BaseIcon :icon="'video'" class="text-primary mr-2"></BaseIcon>
            <strong>Vedi tutti i corsi online</strong>
          </BaseButton>
        </div>
        <div class="bg-white rounded-xl p-3">
          <p class="text-2xl mb-3">
            Aiutiamo le aziende ad adempiere agli obblighi di legge in materia sanitaria,
            <strong>organizzando corsi in presenza presso la vostra azienda</strong>.
          </p>
          <BaseButton class="is-link">
            <BaseIcon :icon="'school'" class="text-primary mr-2"></BaseIcon>
            <strong>Vedi tutti i corsi in presenza</strong>
          </BaseButton>
        </div>
      </div>
      <div class="w-1/2">
        <BaseImage
          :src="'/home-hero.jpg'"
          aria-hidden="true"
          class="rounded-xl"
          width="628"
          height="438"
          :lazy="false"
          sizes="100vw sm:50vw md:628"
        />
      </div>
    </div>
  </section>
</template>
