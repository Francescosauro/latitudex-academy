<template>
  <header class="m-auto pt-12 pb-20 text-center">
    <BaseImage
      src="/latitude-x-logo-block.svg"
      width="155"
      height="112"
      alt="Latitud X Academy logo"
      class="m-auto mb-5"
      :lazy="false" />
    <h1 class="mb-3 text-gradient-secondary font-bold text-4xl md:text-5xl">
      L'Accademia di Primo Soccorso
    </h1>
    <h2 class="mt-0 mx-auto text-gradient-primary text-xl md:text-2xl mb-6 max-w-[40rem]">
      Unisciti alla prima scuola in Italia di Primo Soccorso. Per tutti, online e in presenza.
    </h2>
    <BaseLink :to="{ path: '/', hash: '#corsi-online' }" class="btn btn-lg !no-underline">
      Vedi tutti i corsi
    </BaseLink>
  </header>
</template>

<style lang="scss" scoped>
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px)
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px)
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

h1,
h2 {
  animation-duration: 1s;
  animation-timing-function: ease-out;
  backface-visibility: hidden;
}

h1 {
  animation-name: moveInLeft;
}

h2 {
  animation-name: moveInRight;
}

.btn {
  transition: all .2s ease-in-out;
  position: relative;
  animation: moveInBottom .5s ease-out .75s;
  animation-fill-mode: backwards;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1px 20px rgba(5, 85, 76, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(5, 85, 76, 0.3);
  }
}
</style>
