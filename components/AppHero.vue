<template>
  <section class="wrapper mb-10 relative">
    <header class="max-w-2xl prose m-auto py-16 text-center">
      <h1 class="mb-5 text-gradient">La scuola di primo soccorso</h1>
      <h2 class="mt-0 font-normal">
        Unisciti alla prima scuola in Italia di primo soccorso. Per tutti, online e in
        presenza.
      </h2>
      <BaseButton class="btn btn-lg">Vedi tutti i corsi</BaseButton>
    </header>
    <div class="md:flex flex-row-reverse">
      <div class="md:w-1/2 ml-0 mb-5 md:mb-0 md:ml-4">
        <span class="img-spacer ratio-4x3">
          <BaseImage
            :src="'/home-hero.jpg'"
            aria-hidden="true"
            class="rounded-xl w-full"
            width="628"
            height="438"
            :lazy="false"
            sizes="100vw sm:50vw md:628"
          />
        </span>
      </div>
      <div class="md:w-1/2">
        <BaseImage
          src="/latitude-x-logo-linear.svg"
          alt="Latitude X Academy logo"
          width="250"
          height="36"
          sizes="100vw sm:50vw md:250"
          :lazy="false"
        />
        <div class="bg-white rounded-xl p-3 my-6">
          <p class="text-xl mb-3">
            Condividiamo la nostra esperienza nell’emergenza sanitaria
            <strong>con percorsi formativi accessibili a tutti</strong>.
          </p>
          <BaseButton class="is-link">
            <BaseIcon :icon="'video'" class="text-primary mr-2"></BaseIcon>
            <strong>Vedi tutti i corsi online</strong>
          </BaseButton>
        </div>
        <div class="bg-white rounded-xl p-3">
          <p class="text-xl mb-3">
            Aiutiamo le aziende ad adempiere agli obblighi di legge in materia sanitaria,
            <strong>organizzando corsi in presenza presso la vostra azienda</strong>.
          </p>
          <BaseButton class="is-link">
            <BaseIcon :icon="'school'" class="text-primary mr-2"></BaseIcon>
            <strong>Vedi tutti i corsi in presenza</strong>
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
