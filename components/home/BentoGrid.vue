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
        format="webp"
        sizes="100vw sm:50vw md:628" />
    </div>
    <div class="md:w-1/2">
      <div class="bg-white rounded-3xl px-3 py-6 mb-6 flex">
        <span>
          <BaseIcon :icon="'video'" class="text-primary mr-2 icon-lg"></BaseIcon>
        </span>
        <p class="text-xl">
          Condividiamo la nostra esperienza nell’emergenza sanitaria
          <strong>con percorsi formativi accessibili a tutti</strong>.
          <br>
          <BaseLink class="is-link underline text-primary-dark font-bold mt-3" :to="{ path: '/', hash: '#corsi-online' }">
            Vedi tutti i corsi online
          </BaseLink>
        </p>
      </div>
      <div class="bg-white rounded-3xl px-3 py-6 flex">
        <span>
          <BaseIcon :icon="'school'" class="text-primary mr-2 icon-lg"></BaseIcon>
        </span>
        <p class="text-xl">
          Aiutiamo le aziende ad adempiere agli obblighi di legge in materia sanitaria,
          <strong>organizzando corsi in presenza presso la vostra azienda</strong>.
          <br>
          <BaseLink class="is-link underline text-primary-dark font-bold mt-3" :to="{ path: '/', hash: '#corsi-presenza' }">
            Vedi tutti i corsi in presenza
          </BaseLink>
        </p>
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
        format="webp"
        sizes="100vw sm:50vw md:302" />
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
        format="webp"
        sizes="100vw sm:50vw md:302" />
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
        format="webp"
        sizes="100vw sm:50vw md:302" />
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
        format="webp"
        sizes="100vw sm:50vw md:302" />
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
