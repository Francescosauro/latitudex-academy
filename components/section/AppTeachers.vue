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
            <h3 class="!mt-0 !text-base">{{appConfig.teachers.giulia.fullName}}</h3>
            <ul class="text-sm pl-0">
              <li v-for="point, index in appConfig.teachers.giulia.points" :key="index">{{point}}</li>
            </ul>
          </li>
          <li class="prose w-52 flex flex-col items-center mb-8">
             <figure class="img-spacer ratio-1x1 rounded-full w-56 h-56">
              <BaseImage :width="220" :src="appConfig.teachers.francesco.picture"  sizes="100vw sm:50vw md:220" />
            </figure>
            <h3 class="!mt-0 !text-base">{{appConfig.teachers.francesco.fullName}}</h3>
            <ul class="text-sm pl-0">
              <li v-for="point, index in appConfig.teachers.francesco.points" :key="index">{{point}}</li>
            </ul>
          </li>
          <li class="prose w-52 flex flex-col items-center mb-8">
             <figure class="img-spacer ratio-1x1 rounded-full w-56 h-56">
              <BaseImage :width="220" :src="appConfig.teachers.luca.picture"  sizes="100vw sm:50vw md:220" />
            </figure>
            <h3 class="!mt-0 !text-base">{{appConfig.teachers.luca.fullName}}</h3>
            <ul class="text-sm pl-0">
               <li v-for="point, index in appConfig.teachers.luca.points" :key="index">{{point}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
