<template>
  <main class="flex flex-col p-4 max-w-screen-xl mx-auto mt-[61px] lg:flex-row">
    <aside class="w-4/5 max-w-xl mx-auto">
      <UsAbout />
    </aside>
    <aside class="w-4/5 max-w-xl mx-auto rounded-md overflow-hidden">
      <video class="w-full min-h-full min-w-full object-fill" autoplay loop>
        <source
          src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
          type="video/mp4"
        />
      </video>
    </aside>
  </main>
</template>
<script lang="ts" setup>
import UsAbout from "./components/UsAbout.vue";
</script>
<style lang="css"></style>
