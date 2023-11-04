<template>
  <section class="py-10">
    <div class="wrapper">
      <div class="md:flex md:space-x-4">
        <div class="md:w-2/3 mb-5 relative">
          <button
            v-if="isPaused"
            @click="play()"
            type="button"
            aria-controls="video-player"
            aria-label="Play"
            class="absolute right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full"
          >
            <BaseImage
              src="play-btn.jpg"
              alt="Play"
              class="m-auto"
              width="1318"
              height="748"
              sizes="100vw sm:50vw md:1318"
              :lazy="false"
            />
          </button>
          <video id="video-player" ref="videoPlayer" width="1280" height="720" controls>
            <source src="/primo-soccorso-spot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <header class="md:w-1/3 prose">
          <h2>
            Troppe persone convivono con questo rimpianto: «avrei voluto fare qualcosa»
          </h2>
          <p class="leading-xs">
            <small>
              Solo nel 15%* dei casi di arresto cardiaco viene eseguito il massaggio
              cardiaco da qualcuno dei presenti.
            </small>
          </p>
          <p class="leading-xs">
            <small><em>*Fonte: IRC Italian Resuscitation Council</em></small>
          </p>
        </header>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videoPlayer = ref(null);
let isPaused = ref(true);
const play = () => {
  isPaused.value = false;
  videoPlayer.value.play();
};
</script>
