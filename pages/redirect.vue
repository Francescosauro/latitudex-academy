<template>
  <div class="max-w-lg w-full mx-1 bg-white p-4 border border-grey-lighter fixed m-auto z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <BaseImage
      src="/latitude-x-logo-block.svg"
      width="155"
      height="112"
      alt="Latitude X Academy logo"
      class="m-auto"
      :lazy="false" />
    <h1 class="text-5xl mt-4 mb-2 font-bold text-gradient-primary">Grazie!</h1>
    <p class="text-lg">
      <span v-if="!destination">
        Sarai portato alla homepage in
      </span>
      <span v-else>
        Sarai portato alla pagina di conferma in
      </span>
      <strong>{{ timer }} secondi ...</strong>
    </p>
    <form
      v-if="destination === 'mailchimp'"
      aria-hidden="true"
      class="hidden"
      ref="subscriptionForm"
      action="https://gmail.us21.list-manage.com/subscribe/post?u=2c76cc3f788699f6693d76087&amp;id=30be581cfd&amp;f_id=004ce8e6f0"
      method="post">
      <input
        type="email"
        name="EMAIL"
        :value="email" />
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});
type Form = HTMLFormElement | null;
const subscriptionForm: Ref<Form> = ref(null)
const route = useRoute()
const router = useRouter()
const email = ref(route.query.email)
const destination = ref(route.query.destination)
const timer = ref(3)
const gtm = useGtm()

watch(timer, () => {
  if (timer.value > 0) {
    setTimeout(() => {
      timer.value--;
    }, 1000);
  }
}, { immediate: true })

onMounted(() => {
  setTimeout(() => {
    if (destination.value === 'mailchimp' && subscriptionForm.value) {
      if (gtm) {
        gtm.trackEvent({
          event: 'Iscrizione mail',
          category: 'click-track',
          action: 'click',
          label: 'Iscrizione mail corsi online',
          value: 5000,
          noninteraction: false,
        })
      }
      subscriptionForm.value.submit()
    } else {
      router.push({ path: "/" })
    }
  }, 3000);
})
</script>
