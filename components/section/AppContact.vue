<template>
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
          class="text-primary underline text-primary-dark underline-offset-2 mt-2 inline-block">
          {{ appConfig.info.mail }}
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
          class="text-primary underline text-primary-dark underline-offset-2 mt-2 inline-block">
          Manda un Whatsapp
        </a>
      </p>
    </li>
    <li>
      <span class="text-xl md:text-3xl">Mandaci un piccione viaggiatore</span>
      <br />
      <div class="mt-2 inline-block">
        Sede legale:
        <address class="inline">{{ appConfig.info.address }}</address>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
const appConfig = useAppConfig()
</script>
