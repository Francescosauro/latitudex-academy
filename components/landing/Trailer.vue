<template>
  <div class="wrapper py-10 text-center">
    <p class="text-2xl font-bold">Impara divertendoti assieme a noi</p>
    <p class="text-base mb-8">Guarda il video promozionale</p>
    <div class="relative max-w-2xl m-auto z-10 bg-black">
      <nav aria-label="Controlli video">
        <button
          @click="toggleMuted()"
          class="top-2 right-2 absolute text-secondary z-10 bg-white rounded-full p-2 shadow hover:shadow-lg"
          :aria-label="isMuted ? 'Attiva l\'audio del video' : 'Metti in muto'"
          :title="isMuted ? 'Attiva l\'audio del video' : 'Metti in muto'">
          <BaseIcon v-if="isMuted" :icon="'mute'" :size="'lg'" />
          <BaseIcon v-else :icon="'unmute'" :size="'lg'" />
        </button>
        <button
          @click="togglePlay()"
          class="bottom-2 left-2 absolute text-secondary z-10 bg-white rounded-full p-2 shadow hover:shadow-lg"
          :aria-label="isPlayed ? 'Ferma il video' : 'Fai partire il video'"
          :title="isPlayed ? 'Ferma il video' : 'Fai partire il video'">
          <BaseIcon v-if="isPlayed" :icon="'pause'" :size="''" />
          <BaseIcon v-else :icon="'play'" :size="''" />
        </button>
        <button
          @click="toggleFullscreen()"
          class="bottom-2 right-2 absolute text-secondary z-10 bg-white rounded-full p-2 shadow hover:shadow-lg"
          aria-label="Metti il video a tutto schermo"
          title="Metti il video a tutto schermo">
          <BaseIcon :icon="'fullscreen'" :size="''" />
        </button>
      </nav>
      <video id="video-player" ref="videoPlayer" width="1280" height="720" @click="togglePlay()">
        <source src="/primo-soccorso-trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoPlayer: Ref<HTMLVideoElement | null> = ref(null)
const stoppedByUser: Ref<boolean> = ref(false)
const isMuted: Ref<boolean> = ref(true)
const isPlayed: Ref<boolean> = ref(false)

const toggleFullscreen = () => {
  if (!videoPlayer.value) return
  videoPlayer.value.requestFullscreen()
}
const togglePlay = () => {
  if (!videoPlayer.value) return
  stoppedByUser.value = true;
  (videoPlayer.value.paused) ?
    videoPlayer.value.play() :
    videoPlayer.value.pause()
  isPlayed.value = !isPlayed.value
}

const toggleMuted = () => {
  if (!videoPlayer.value) return
  (videoPlayer.value && videoPlayer.value.muted) ?
    videoPlayer.value.muted = false :
    videoPlayer.value.muted = true
  isMuted.value = !isMuted.value
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!videoPlayer.value) return
        if (entry.isIntersecting && !stoppedByUser.value) {
          videoPlayer.value.play()
          isPlayed.value = true
        } else {
          videoPlayer.value.pause()
          isPlayed.value = false
        }
      });
    },
    {
      threshold: 0.5,
    }
  )

  if (videoPlayer.value) {
    videoPlayer.value.muted = true
    observer.observe(videoPlayer.value);
  }
})
</script>
