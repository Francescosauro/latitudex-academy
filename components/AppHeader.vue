<template>
  <header class="wrapper flex py-2 justify-between items-center sticky top-0 bg-false-white-opacity backdrop-blur-md">
    <BaseLink to="/">
      <BaseImage
        src="/latitude-x-logo.svg"
        alt="Latitude X Academy logo"
        width="307"
        height="74"
        sizes="100vw sm:50vw md:307"
        :lazy="false"
      />
    </BaseLink>

    <nav>
      <ul class="inline-flex space-x-4">
        <li>
          <BaseLink to="#">Corsi</BaseLink>
        </li>
        <li>
          <BaseLink to="#">Chi siamo</BaseLink>
        </li>
        <li>
          <BaseLink to="#">FAQ</BaseLink>
        </li>
        <li>
          <BaseLink to="#">Contatti</BaseLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
