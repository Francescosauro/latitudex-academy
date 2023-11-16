<template>
  <section class="wrapper mb-10 relative">
    <header class="max-w-[40rem] prose m-auto py-16 text-center">
      <h1 class="mb-3 text-gradient">La scuola di primo soccorso</h1>
      <h2 class="mt-0 font-normal text-gradient">
        Unisciti alla prima scuola in Italia di primo soccorso. Per tutti, online e in
        presenza.
      </h2>
      <BaseButton class="btn btn-lg">Vedi tutti i corsi</BaseButton>
    </header>
    <div class="md:flex flex-row-reverse">
      <div class="md:w-1/2 ml-0 mb-5 md:mb-0 md:ml-4">
        <span class="img-wrapper">
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

<style lang="scss">
.img-wrapper {
  display: block;
  z-index: 1;
  position: relative;
  padding-top: 66.66%;
  overflow: hidden;
  border-radius: 0;
  background-color: transparent;
  padding-top: 56.25%;

  @media (min-width: 768px) {
    padding-top: 100%;
  }
  @media (min-width: 1024px) {
    padding-top: 75%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    object-fit: cover;
    object-position: center;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 1);
    margin: 0 !important;
  }
}
</style>
