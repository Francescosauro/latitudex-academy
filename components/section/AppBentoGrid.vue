<template>
  <div class="md:flex flex-row-reverse">
    <div class="md:w-1/2 ml-0 mb-5 md:mb-0 md:ml-4">
      <BaseImage
        :src="'/home-hero.jpg'"
        aria-hidden="true"
        class="rounded-3xl w-full cover"
        width="628"
        height="438"
        :lazy="false"
        sizes="100vw sm:50vw md:628"
      />
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
      <div class="bg-white rounded-3xl p-3 my-6">
        <p class="text-xl mb-3">
          Condividiamo la nostra esperienza nell’emergenza sanitaria
          <strong>con percorsi formativi accessibili a tutti</strong>.
        </p>
        <BaseButton class="is-link">
          <BaseIcon :icon="'video'" class="text-primary mr-2"></BaseIcon>
          <strong>Vedi tutti i corsi online</strong>
        </BaseButton>
      </div>
      <div class="bg-white rounded-3xl p-3">
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
  <ul class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
    <li class="overflow-hidden rounded-3xl">
      <BaseImage
        src="/home-list-A.jpg"
        aria-hidden="true"
        class="cover"
        width="302"
        height="182"
        sizes="100vw sm:50vw md:302"
      />
    </li>
    <li class="bg-white rounded-3xl p-3 grid content-around text-center md:text-left">
      <BaseIcon :icon="'aid-kit'" class="text-primary m-auto md:m-0" :size="'2xl'"></BaseIcon>
      <strong class="text-gradient-primary text-lg md:text-xl self-end">
        Medici e formatori per vocazione
      </strong>
    </li>
     <li class="overflow-hidden rounded-3xl">
      <BaseImage
        src="/home-list-B.jpg"
        aria-hidden="true"
        class="cover"
        width="302"
        height="182"
        sizes="100vw sm:50vw md:302"
      />
    </li>
    <li class="bg-white rounded-3xl p-3 grid content-around text-center md:text-left">
      <BaseIcon :icon="'award'" class="text-primary m-auto md:m-0" :size="'2xl'"></BaseIcon>
      <strong class="text-gradient-primary text-lg md:text-xl self-end">
        Veterani del primo soccorso
      </strong>
    </li>
    <li class="overflow-hidden rounded-3xl">
      <BaseImage
        src="/home-list-C.jpg"
        aria-hidden="true"
        class="cover"
        width="302"
        height="182"
        sizes="100vw sm:50vw md:302"
      />
    </li>
    <li class="bg-white rounded-3xl p-3 grid content-around text-center md:text-left">
      <BaseIcon :icon="'run'" class="text-primary m-auto md:m-0" :size="'2xl'"></BaseIcon>
      <strong class="text-gradient-primary text-lg md:text-xl self-end">
        Esperti in ambiente outdoor
      </strong>
    </li>
     <li class="overflow-hidden rounded-3xl">
      <BaseImage
        src="/home-list-D.jpg"
        aria-hidden="true"
        class="cover"
        width="302"
        height="182"
        sizes="100vw sm:50vw md:302"
      />
    </li>
    <li class="bg-white rounded-3xl p-3 grid content-around text-center md:text-left">
      <BaseIcon :icon="'certificate'" class="text-primary m-auto md:m-0" :size="'2xl'"></BaseIcon>
      <strong class="text-gradient-primary text-lg md:text-xl self-end">
        Esperti in sicurezza aziendale
      </strong>
    </li>
  </ul>
</template>

<style lang="scss">
img.cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
