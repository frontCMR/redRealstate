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
            service.name === 'Red Projects'
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

import imagen3Src from "@/assets/LOGO-RED-FINCA-RAIZ.png";
import imagenTravel from "@/assets/RED_TRAVEL_LIFESTYLE.png";
import imagenParner from "@/assets/LOGO-A-COLOR.png";
import imagenRedMoney from "@/assets/RED-MONEY.png";
import imagenCrm from "@/assets/LOGO_FINAL_CRM.png";
import imagenAcademy from "@/assets/RED_ACADEMY_LOGO_1.png";
import imagenRedP from "@/assets/LOGO-RED-PROJECTS.png"
interface Services {
  name: string;
  img: string;
  link: string;
}

const services: Ref<Services[]> = ref([
  {
    name: "Red Academy",
    link: "https://academy.red-realestate.com",
    img: imagenAcademy,
  },
  {
    name: "CRM RED",
    link: "https://crmred.co/inicio",
    img: imagenCrm,
  },
  {
    name: "Red Fincaraiz",
    link: "https://redfincaraiz.com/",
    img: imagen3Src,
  },
  {
    name: "Red Patners",
    link: "https://res.cloudinary.com/reality-inmo/image/upload/v1692804335/PRESENTACIO%CC%81N_RED_PARTNERS_AGO_2023_doktp6.pdf",
    img: imagenParner
  },
  {
    name: "Red Money",
    link: "https://myredmoney.com/",
    img: imagenRedMoney,
  },
  {
    name: "Red Projects",
    link: "#",
    img: imagenRedP,
  },
  {
    name: "Red Travel",
    link: "/giveaways",
    img: imagenTravel,
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
