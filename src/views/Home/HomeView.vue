<template>
  <main>
    <HeroHome />
    <ServicesHome />
    <!-- <UsHome /> -->
    <InfoUsHome />
    <OficesHome />
    <ShopHome />
    <ContactHome />
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import HeroHome from "./components/HeroHome.vue";
import ServicesHome from "./components/ServicesHome.vue";
// import UsHome from "./components/UsHome.vue";
import InfoUsHome from "./components/InfoUsHome.vue";
import OficesHome from "./components/OficesHome.vue";
import ShopHome from "./components/ShopHome.vue";
import ContactHome from "./components/ContactHome.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang=""></style>
