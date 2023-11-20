<template>
  <section class="wrapper mb-10 relative">
    <SectionAppHero></SectionAppHero>
    <SectionAppBentoGrid></SectionAppBentoGrid>
  </section>

  <section class="py-8 bg-false-white">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi online</strong>
      </h3>
      <BaseCarousel :elements="appConfig.corsiOnLine"></BaseCarousel>
    </div>
  </section>
  <section class="mb-10 py-8 bg-primary-lighter">
    <div class="wrapper">
      <h3 class="text-2xl mb-4">
        <span class="eyebrown">Formazione</span>
        <strong>Corsi in presenza</strong>
      </h3>
      <BaseCarousel
        :elements="appConfig.corsiInPresenza"
        :type="'presenza'"
      ></BaseCarousel>
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
        <div class="md:w-1/2">
          <h3 class="text-xl md:text-3xl mb-8">
           <strong>FAQ</strong> <br />
            <small class="text-sm">Le domande che ci fate più spesso</small>
          </h3>
          <BaseAccordion :elements="appConfig.faq"></BaseAccordion>

        </div>
        <div class="md:w-1/2">
          <h3 class="text-xl md:text-3xl mb-8">
            <strong>Contatti</strong>
          </h3>
          <ul class="space-y-6">
            <li>
              <p>
                <span class="text-xl md:text-3xl">Inviaci una mail</span>
                <br />
                <a
                  href="mailto:info.latitudex@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-primary underline underline-offset-2 mt-2 inline-block"
                >
                  {{appConfig.info.mail}}
                </a>
              </p>
            </li>
            <li>
              <p>
                <span class="text-xl md:text-3xl">Whatsapp</span>
                <br />
                <a
                  :href="'https://wa.me/' + appConfig.info.tel"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-primary underline underline-offset-2 mt-2 inline-block"
                >
                  Manda un Whatsapp
                </a>
              </p>
            </li>
            <li>
              <span class="text-xl md:text-3xl">Mandaci un piccione viaggiatorel</span>
              <br />
              <div class="mt-2 inline-block">
                Sede legale:
                <address class="inline">{{appConfig.info.address}}</address>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
