<template>
  <div id="mc_embed_shell">
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us21.list-manage.com/subscribe/post?u=2c76cc3f788699f6693d76087&amp;id=30be581cfd&amp;f_id=004ce8e6f0"
        method="post"
        :id="'mc-embedded-subscribe-form-' + inputIdNumber"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_self"
        novalidate="false"
        @submit.prevent="triggerEvent()">
        <div id="mc_embed_signup_scroll">
          <h3 class="!text-lg !sm:text-3xl">Prenota ora e ottieni il 10% di sconto</h3>
          <div class="flex">
            <div class="flex-1">
              <div class="mc-field-group">
                <label :for="'mce-EMAIL-' + inputIdNumber" class="sr-only">
                  Inserisci il tuo indirizzo email <span class="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Inserisci la tua email"
                  class="required email w-full p-2 border border-grey-light"
                  :id="'mce-EMAIL-' + inputIdNumber"
                  required="true"
                  autocomplete="email"
                  v-model="leadEmail"
                  value />
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display: none"></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"></div>
              </div>
              <div aria-hidden="true" style="position: absolute; left: -5000px">
                /* real people should not fill this in and expect good things - do not
                remove this or risk form bot signups */
                <input
                  type="text"
                  name="b_2c76cc3f788699f6693d76087_30be581cfd"
                  tabindex="-1"
                  value="" />
              </div>
            </div>
            <input
              type="submit"
              name="subscribe"
              :id="'mc-embedded-subscribe-' + inputIdNumber"
              class="btn"
              @click="triggerEvent()"
              value="Prenota" />
          </div>
        </div>
      </form>
    </div>
  </div>

  <small class="leading-normal mt-2 inline-block">
    Ti invieremo un coupon per email, quando il corso sarà disponibile.<br>
    <em>Senza alcun impegno e no SPAM! Promesso</em> &#128540
  </small>
</template>

<script setup lang="ts">
const props = defineProps({
  inputIdNumber: {
    type: Number,
    default: 1,
  },
});
const leadEmail = ref('')
const router = useRouter()

const triggerEvent = () => {
  router.push({ path: "/redirect", query: {email: leadEmail.value, destination: 'mailchimp'} })
}
</script>
