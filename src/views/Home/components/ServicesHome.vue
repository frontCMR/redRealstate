<template>
  <section class="w-full p-4 flex flex-wrap gap-4 justify-center py-20">
    <h2 class="sectionTitle">Descubre Nuestro Universo Digital</h2>
    <div class="w-full p-4 flex flex-wrap gap-4 justify-center">
      <a
        class="serviceItem"
        v-for="service in services"
        :href="service.link"
        :key="service.name"
        target="_blank"
      >
        <figure class="w-full h-full">
          <img
            class="w-full h-full object-contain"
            :src="service.img"
            :alt="service.name"
          />
        </figure>
        <p
          v-if="
            service.name === 'Red Projects' || service.name === 'Red Travel'
          "
          class="proxP"
        >
          Próximamente
        </p>
      </a>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
interface Services {
  name: string;
  img: string;
  link: string;
}

const services: Ref<Services[]> = ref([
  {
    name: "Red Academy",
    link: "http://academy.red-realestate.com/",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redAcademy_j2b9vy.svg",
  },
  {
    name: "CRM RED",
    link: "http://www.crmred.co/inicio",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redCrm_ynpl3f.svg",
  },
  {
    name: "Red Fincaraiz",
    link: "https://redfincaraiz.com/",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692137437/LOGO-RED-FINCA-RAIZ_1_jnr9sx.png",
  },
  {
    name: "Red Patners",
    link: "patners",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redPatners_o39apm.svg",
  },
  {
    name: "Red Money",
    link: "https://myredmoney.com/",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMoney_fgf4lv.svg",
  },
  {
    name: "Red Projects",
    link: "#",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redProjects_rswjft.svg",
  },
  {
    name: "Red Travel",
    link: "#",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692109632/RedTravel_slmazf.png",
  },
]);
</script>
<style lang="css" scoped>
.serviceItem {
  @apply flex flex-col items-center justify-center cursor-pointer p-4 rounded-lg w-36 h-36;
  @apply transition-all hover:shadow-sm hover:shadow-red-600 hover:scale-105;
}
.proxP {
  @apply text-primaryColor font-semibold animate-pulse;
}
</style>
