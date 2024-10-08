<template>
  <section class="gradient-bg pb-10">
    <div class="texture-bg">
      <div class="wrapper relative">
        <HomeHero></HomeHero>
        <HomeBentoGrid></HomeBentoGrid>
      </div>
    </div>
  </section>

  <HomeCoursesOnline></HomeCoursesOnline>
  <HomeCoursesInPresence
    :is-modal-opened="isFormModalOpened"
    @modal-call="openFormModal()">
  </HomeCoursesInPresence>

  <HomeTeachers></HomeTeachers>
  <HomeReviews></HomeReviews>

  <section class="bg-false-white py-8">
    <div class="wrapper">
      <h3 class="text-xl md:text-3xl text-center">I nostri partner</h3>
      <HomeSponsor></HomeSponsor>

      <div class="max-w-3xl m-auto mt-16 mb-6">
        <div id="contatti">
          <HomeContact></HomeContact>
        </div>
      </div>
    </div>
  </section>

  <BaseModal v-if="isFormModalOpened" @close-modal="isFormModalOpened = false" :modal-id="'form-modal'">
    <header class="mb-4">
      <h4 class="text-lg md:text-xl">
        <strong>Chiedi informazioni sui corsi aziendali</strong>
      </h4>
      <p class="txt-sm">
        Vuoi sapere quando e dove è possibile organizzare un corso di formazione?
      </p>
    </header>
    <!-- <div class="mb-4">
      <h5 class="text-base md:text-lg">
        <strong>Prenota un call</strong>
      </h5>
      <p>
        Possiamo ascoltarti in video conferenza, per capire di cosa hai bisogno,
        <a :href="appConfig.info.calendly" target="_blank" class="text-primary underline">
          prenota una call
        </a>
        .
      </p>
    </div> -->
    <div v-if="success" class="p-3 bg-primary-dark text-white rounded w-full prose">
      <h4 class="!text-white">Messaggio Inviato con successo.</h4>
      <p>Grazie per averci contattato, cercheremo di risponderti il prima possibile.</p>
      <div class="text-right">
        <BaseButton
          @click="isFormModalOpened = false"
          class="btn"
          aria-label="Chiudi questa finestra">
          Chiudi
        </BaseButton>
      </div>
    </div>
    <form v-else @submit.prevent="submitForm">
      <h5 class="text-base md:text-lg mb-2">
        <strong>Manda un messaggio</strong>
      </h5>
      <label for="email-field"> E-mail <sup class="text-secondary">*</sup> </label>
      <input
        ref="modalEmail"
        type="email"
        id="email-field"
        v-model="emailField"
        placeholder="Email"
        class="required email w-full p-2 border border-grey-light mb-4"
        :class="{ 'border-secondary': formFeedback === 'invalid' }" />
      <label for="message-field"> Messaggio </label>
      <textarea
        rows="6"
        cols="12"
        id="message-field"
        v-model="messageField"
        placeholder="Scrivi un messaggio"
        class="w-full p-2 border border-grey-light"></textarea>
      <label class="flex items-center mb-4 mt-1" for="consent-field">
        <input type="checkbox" v-model="consentField" class="mr-3" id="consent-field" />
        <span class="text-xs" :class="{ 'font-bold': formFeedback === 'consent' }">
          Selezionando questa casella, confermi di aver letto e accettato la nostra
          <a href="/privacy" target="_blank" class="text-primary underline">
            Informativa sulla privacy
          </a>
        </span>
      </label>

      <div v-if="formFeedback" class="p-3 bg-secondary-dark text-white rounded w-full">
        <span v-if="formFeedback === 'consent'">
          &Egrave; necessario confermare di aver letto e accettato la nostra privacy
        </span>
        <span v-if="formFeedback === 'invalid'">
          &Egrave; necessario inserire una e-mail valida
        </span>
        <span v-if="formFeedback === 'error'">
          C'è stato un errore sul server, riprova più tardi per favore
        </span>
      </div>
      <footer class="flex justify-end mt-4">
        <BaseButton
          type="submit"
          @click.prevent="submitForm()"
          class="btn btn-lg"
          :class="{ disabled: isLoading }"
          :disabled="isLoading">
          <span v-if="isLoading">Sto inviando</span>
          <span v-else>Invia il messaggio</span>
        </BaseButton>
      </footer>
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
useHead({
  script: [{ src: "/smtp/smtp.js" }],
});
const appConfig = useAppConfig();
type ModalEmailType = HTMLInputElement | null
type FormFeedbackType = "consent" | "invalid" | "error" | null;

const formFeedback: Ref<FormFeedbackType> = ref(null);
const modalEmail: Ref<ModalEmailType> = ref(null)
const isFormModalOpened = ref(false);
const isLoading = ref(false);
const emailField = ref("");
const messageField = ref("");
const consentField = ref(false);
const success = ref(false);

const openFormModal = () => {
  isFormModalOpened.value = !isFormModalOpened.value;
  setTimeout(() => {
    if (modalEmail.value) modalEmail.value.focus()
  }, 100)
};
const gtm = useGtm()
const submitForm = async () => {
  isLoading.value = true;
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailField.value || (emailField.value && !regex.test(emailField.value))) {
    formFeedback.value = "invalid";
    success.value = false;
    isLoading.value = false;
    return;
  }
  if (!consentField.value) {
    formFeedback.value = "consent";
    success.value = false;
    isLoading.value = false;
    return;
  }

  if (!Email) {
    formFeedback.value = "error";
    success.value = false;
    isLoading.value = false;
    return;
  }
  await Email.send({
    SecureToken: "d24f3294-af76-43f9-95f5-c4485a38052c",
    To: "info.latitudex@gmail.com",
    From: "Latitude X Academy <info.latitudex@gmail.com>",
    Subject: "Richiesta info Corsi in presenza",
    Body: `${emailField.value}, scrive: ${messageField.value}`,
  }).then((message) => {
    if (message !== "OK") {
      formFeedback.value = "error";
      success.value = false;
      isLoading.value = false;
      console.error(message);
    } else {
      formFeedback.value = null;
      isLoading.value = false;
      success.value = true;
      if (gtm) {
        gtm.trackEvent({
          event: 'Richiesta info',
          category: 'click-track',
          action: 'click',
          label: 'Richiesta info per corsi in presenza',
          value: 5000,
          noninteraction: false,
        })
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.gradient-bg {
  background: linear-gradient(to left top, #E3F0F0, #fff);

  .texture-bg {
    position: relative;
    background-image: url('/pattern.png');
    background-size: 100px;
  }
}
</style>
