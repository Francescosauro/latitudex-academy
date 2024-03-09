<template>
  <div class="wrapper py-10 text-center">
    <p class="text-2xl font-bold">Impara divertendoti assieme a noi</p>
    <p class="text-base mb-8">Guarda il video promozionale</p>
    <div class="relative max-w-2xl m-auto z-10">
      <button
        v-if="isMuted"
        @click="toggleMuted"
        class="top-2 right-2 absolute text-secondary z-10 bg-white rounded-full p-2 shadow hover:shadow-lg"
        aria-label="Attiva l'audio del video"
        title="Attiva l'audio del video">
        <BaseIcon :icon="'unmute'" :size="'lg'" />
      </button>
      <video id="video-player" ref="videoPlayer" width="1280" height="720" controls>
        <source src="/primo-soccorso-spot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoPlayer: Ref = ref(null);
const stoppedByUser = ref(false); // click event sul padre non funziona con click su controller
const isMuted = ref(true);

const toggleMuted = () => {
  (videoPlayer && videoPlayer.value.muted) ?
    videoPlayer.value.muted = false :
    videoPlayer.value.muted = true
  isMuted.value = false
};

onMounted(() => {

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        (entry.isIntersecting) ?
          videoPlayer.value.play() :
          videoPlayer.value.pause()
      });
    },
    {
      threshold: 0.5,
    }
  )
  if (videoPlayer) {
    videoPlayer.value.muted = true
    observer.observe(videoPlayer.value);
  }
})
</script>
