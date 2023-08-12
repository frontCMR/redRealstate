<template>
  <Header />
  <router-view />
  <FooterApp />
</template>

<script setup lang="ts">
import Header from "./global/Header/HeaderApp.vue";
import FooterApp from "./global/Footer/FooterApp.vue";
</script>

<style scoped></style>
