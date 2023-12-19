<template>
  <div v-if="!consent" class="cookie-banner md:flex md:space-x-2 bg-primary fixed bottom-0 left-0 w-full py-3 px-4 justify-between items-center z-10">
    <p class="text-white">
      {{ appConfig.info.cookieBanner.desc }}
      <BaseLink to="/privacy" class="underline">Leggi di più</BaseLink>
    </p>
    <div class="inline-flex w-full justify-end space-x-4 mt-3 md:mt-0">
      <button type="button" class="btn btn-lg" @click="setConsent('yes')">
        {{ appConfig.info.cookieBanner.acceptButton }}
      </button>
      <button type="button" class="underline text-lg btn-link text-white" @click="removeConsent('no')">
        {{ appConfig.info.cookieBanner.refuseButton }}
      </button>
    </div>
  </div>
  
  <BaseModal
    v-if="isModalOpened"
    @close-modal="$emit('close-modal')"
    :modal-id="'cookie-modal'">
    <h4 class="text-2xl mb-4 font-bold">Gestisci il consenso ai cookie</h4>
    <p v-html="appConfig.info.cookieBanner.modalDesc"></p>
    <div class="inline-flex w-full justify-end space-x-4 mt-6">
      <button type="button" class="btn btn-lg" @click="$emit('close-modal');setConsent('yes')">
        {{ appConfig.info.cookieBanner.acceptButton }}
      </button>
      <button type="button" class="btn btn-outline btn-lg" @click="$emit('close-modal');removeConsent('no')">
        {{ appConfig.info.cookieBanner.refuseButton }}
      </button>
    </div>  
  </BaseModal>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const { gtag, grantConsent, revokeConsent } = useGtag()

const props = defineProps({
  isModalOpened: {
    type: Boolean,
    default: false
  }
})

const consent = useCookie('hasConsent', {
  expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
})
const setConsent = (value: string) => {
  consent.value = value
  grantConsent()
}
const removeConsent = (value: string) => {
  consent.value = value
  revokeConsent()
}
</script>
