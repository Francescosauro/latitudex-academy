<template>
  <section class="py-10">
    <div class="wrapper">
      <div class="md:flex md:space-x-4">
        <div class="md:w-2/3 mb-5 relative overflow-hidden">
          <nav v-if="playedByUser" aria-label="Controlli video">
            <button
              @click="toggleMuted()"
              class="bottom-2 right-14 absolute text-secondary z-10 bg-white rounded-full p-2 shadow hover:shadow-lg"
              :aria-label="isMuted ? 'Attiva l\'audio del video' : 'Metti in muto'"
              :title="isMuted ? 'Attiva l\'audio del video' : 'Metti in muto'">
              <BaseIcon v-if="isMuted" :icon="'mute'" :size="''" />
              <BaseIcon v-else :icon="'unmute'" :size="''" />
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
          <div @click="togglePlay(); playedByUser = true">
            <video id="video-player" ref="videoPlayer" width="1280" height="720" poster="/video-poster.jpg">
              <source src="/primo-soccorso-spot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
const videoPlayer: Ref<HTMLVideoElement | null> = ref(null)
const playedByUser: Ref<boolean> = ref(false)
const isMuted: Ref<boolean> = ref(false)
const isPlayed: Ref<boolean> = ref(false)

const toggleFullscreen = () => {
  if (!videoPlayer.value) return
  videoPlayer.value.requestFullscreen()
}
const togglePlay = () => {
  if (!videoPlayer.value) return
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

</script>
