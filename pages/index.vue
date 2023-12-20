<template>
  <section class="gradient-bg pb-10">
    <div class="texture-bg">
      <div class="wrapper relative">
        <SectionAppHero></SectionAppHero>
        <SectionAppBentoGrid></SectionAppBentoGrid>
      </div>
    </div>
  </section>

  <section id="corsi-online" class="py-8 bg-false-white">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi online</strong>
      </h3>
      <BaseCarousel :elements="appConfig.corsiOnLine"></BaseCarousel>
    </div>
  </section>
  <section id="corsi-presenza" class="py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi in presenza</strong>
      </h3>
      <BaseCarousel
        :elements="appConfig.corsiInPresenza"
        :type="'presenza'"
        :is-modal-opened="isFormModalOpened"
        @modal-call="openFormModal()"></BaseCarousel>
    </div>
  </section>

  <SectionAppTeachers></SectionAppTeachers>

  <section class="py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4 leading-6">
        <span class="eyebrown mb-1">Si fidano di noi</span>
        <strong>+1.000 studenti hanno seguito i nostri corsi</strong><br />
        <small class="text-sm">
          Abbiamo organizzato decine di corsi di formazione in tutta Italia.
        </small>
      </h3>
      <BaseCarousel :elements="appConfig.recensioni" :type="'recensioni'"></BaseCarousel>
    </div>
  </section>

  <section class="bg-false-white py-8">
    <div class="wrapper">
      <h3 class="text-xl md:text-3xl text-center">I nostri partner</h3>
      <SectionAppSponsor></SectionAppSponsor>

      <div class="md:flex md:space-x-8 w-full mt-16">
        <div class="md:w-1/2 mb-6" id="faq">
          <h3 class="text-xl md:text-3xl mb-8">
            <strong>FAQ</strong> <br />
            <small class="text-sm">Le domande che ci fate più spesso</small>
          </h3>
          <BaseAccordion :elements="appConfig.faq"></BaseAccordion>
        </div>
        <div class="md:w-1/2 mb-6" id="contatti">
          <SectionAppContact></SectionAppContact>
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
    <div class="mb-4">
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
    </div>
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
const isFormModalOpened = ref(false);
const isLoading = ref(false);
const emailField = ref("");
const messageField = ref("");
const consentField = ref(false);
const success = ref(false);
type FormFeedbackType = "consent" | "invalid" | "error" | null;
const formFeedback: Ref<FormFeedbackType> = ref(null);

const openFormModal = () => {
  isFormModalOpened.value = !isFormModalOpened.value;
};

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
