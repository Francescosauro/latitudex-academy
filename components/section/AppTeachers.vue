<template>
  <section class="py-10" id="chi-siamo">
    <div class="wrapper">
      <div class="text-center">
        <h2 class="text-3xl">
          <strong>I docenti formatori </strong>
        </h2>
      </div>
      <div class="flex justify-center mt-8">
        <ul class="md:flex md:space-x-12 justify-center">
          <li class="prose w-52 flex flex-col items-center mb-8">
            <figure class="img-spacer ratio-1x1 rounded-full w-56 h-56">
              <BaseImage :width="220" :src="appConfig.teachers.giulia.picture" sizes="100vw sm:50vw md:220" />
            </figure>
            <h3 class="!mt-0 !text-base">{{ appConfig.teachers.giulia.fullName }}</h3>
            <ul class="text-sm pl-0">
              <li v-for="point, index in appConfig.teachers.giulia.points" :key="index">{{ point }}</li>
            </ul>
            <div class="text-right w-full">
              <BaseButton
                class="is-link underline"
                @click="openModal(appConfig.teachers.giulia)"
                aria-haspopup="true"
                aria-controls="bio-modal"
                :aria-expanded="isModalOpened">
                Leggi di più
              </BaseButton>
            </div>
          </li>
          <li class="prose w-52 flex flex-col items-center mb-8">
            <figure class="img-spacer ratio-1x1 rounded-full w-56 h-56">
              <BaseImage :width="220" :src="appConfig.teachers.francesco.picture" sizes="100vw sm:50vw md:220" />
            </figure>
            <h3 class="!mt-0 !text-base">{{ appConfig.teachers.francesco.fullName }}</h3>
            <ul class="text-sm pl-0">
              <li v-for="point, index in appConfig.teachers.francesco.points" :key="index">{{ point }}</li>
            </ul>
            <div class="text-right w-full">
              <BaseButton
                class="is-link underline"
                @click="openModal(appConfig.teachers.francesco)"
                aria-haspopup="true"
                aria-controls="bio-modal"
                :aria-expanded="isModalOpened">
                Leggi di più
              </BaseButton>
            </div>
          </li>
          <li class="prose w-52 flex flex-col items-center mb-8">
            <figure class="img-spacer ratio-1x1 rounded-full w-56 h-56">
              <BaseImage :width="220" :src="appConfig.teachers.luca.picture" sizes="100vw sm:50vw md:220" />
            </figure>
            <h3 class="!mt-0 !text-base">{{ appConfig.teachers.luca.fullName }}</h3>
            <ul class="text-sm pl-0">
              <li v-for="point, index in appConfig.teachers.luca.points" :key="index">{{ point }}</li>
            </ul>
            <div class="text-right w-full">
              <BaseButton
                class="is-link underline"
                @click="openModal(appConfig.teachers.luca)"
                aria-haspopup="true"
                aria-controls="bio-modal"
                :aria-expanded="isModalOpened">
                Leggi di più
              </BaseButton>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <BaseModal
    v-if="isModalOpened"
    @close-modal="isModalOpened = false"
    :modal-id="'bio-modal'">
    <div class="flex items-center space-x-4">
      <BaseImage :width="220" :src="teacher.picture" sizes="100vw sm:50vw md:220" class=" rounded-full w-28 h-28" />
      <h3 class="!mt-0 text-3xl">{{ teacher.fullName }}</h3>
    </div>
    <div class="prose mt-4 px-4">
      <p>
        {{ teacher.bio }}
      </p>
      <ul class="text-sm pl-0">
        <li v-for="point, index in teacher.points" :key="index">{{ point }}</li>
      </ul>
    </div>
    <div class="text-right w-full">
      <BaseButton
        @click="isModalOpened = false"
        class="btn"
        aria-controls="bio-modal"
        :aria-expanded="isModalOpened"
        aria-haspopup="true"
        aria-label="Chiudi questa finestra">
        Chiudi
      </BaseButton>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
type Teacher = { picture: string, fullName: string, points: string[], bio: string }

const appConfig = useAppConfig();
let teacher: Teacher = reactive({ picture: '', fullName: '', points: [], bio: '' })
const isModalOpened = ref(false)
const openModal = (obj: Teacher) => {
  teacher = obj
  isModalOpened.value = !isModalOpened.value;
};
</script>


<style lang="scss" scoped>
section {
  background: linear-gradient(to left top,  #E3F0F0, #fff);

  .wrapper {
    background-image: url('/pattern.png');
    background-size: 100px;
  }
}
</style>
