<template lang="">
  <section class="w-full p-4 flex flex-wrap gap-4 justify-center">
    <h2 class="sectionTitle">CONOCE NUESTROS SERVICIOS</h2>
    <div class="w-full p-4 flex flex-wrap gap-4 justify-center">
      <article
        class="p-4 border border-black rounded-3xl w-32 h-24"
        v-for="service in services"
        :key="service.name"
      >
        <figure class="w-full h-full">
          <img
            class="w-full h-full object-contain"
            :src="service.img"
            :alt="service.name"
          />
        </figure>
      </article>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
interface Services {
  name: string;
  img: string;
}

const services: Ref<Services[]> = ref([
  {
    name: "Red Academy",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redAcademy_j2b9vy.svg",
  },
  {
    name: "CRM RED",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redCrm_ynpl3f.svg",
  },
  {
    name: "Red Projects",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redProjects_rswjft.svg",
  },
  {
    name: "Red Fincaraiz",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg",
  },
  {
    name: "Red Travel",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg",
  },
  {
    name: "Red Patners",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redPatners_o39apm.svg",
  },
  {
    name: "Red Money",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMoney_fgf4lv.svg",
  },
]);
</script>
<style lang=""></style>
