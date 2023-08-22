<template>
  <main class="max-w-screen-xl mx-auto mt-[70px] mb-6 px-4 lg:flex-row">
    <section class="w-full flex items-center mb-5">
      <img
        class="w-40 h-full object-contain"
        src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redPatners_o39apm.svg"
        alt="patners Logo"
      />
      <!-- <h2 class="text-3xl font-semibold my-5">Red Patners</h2> -->
    </section>
    <iframe
      class="presentation"
      src="https://docs.google.com/presentation/d/e/2PACX-1vQy0H9k_Fh7FG3b5MnerysydRQTNx2nCW7R_mLwsiZkkdgbmyiPC_WPLiO4dTdFWA/embed?start=false&loop=false&delayms=60000"
      frameborder="0"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>
  </main>
</template>
<script setup lang="ts"></script>
<style lang="css">
.presentation {
  @apply w-full h-[300px] md:h-[500px] lg:h-[749px]  mx-auto transition-all;
}
</style>
