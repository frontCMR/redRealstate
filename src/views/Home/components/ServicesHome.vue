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
interface Services {
  name: string;
  img: string;
  link: string;
}

const services: Ref<Services[]> = ref([
  {
    name: "Red Academy",
    link: "https://academy.red-realestate.com",
    img: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696346968/BANNERS/RED-REALESTATE/redAcademy_j2b9vy_b61qo1.svg",
  },
  {
    name: "CRM RED",
    link: "https://crmred.co/inicio",
    img: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696347151/BANNERS/RED-REALESTATE/redCrm_ynpl3f_it013w.svg",
  },
  {
    name: "Red Fincaraiz",
    link: "https://redfincaraiz.com/",
    img: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696347261/BANNERS/RED-REALESTATE/LOGO-RED-FINCA-RAIZ_1_jnr9sx_rh7nos.png",
  },
  {
    name: "Red Patners",
    link: "https://res.cloudinary.com/reality-inmo/image/upload/v1692804335/PRESENTACIO%CC%81N_RED_PARTNERS_AGO_2023_doktp6.pdf",
    img: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696347381/BANNERS/RED-REALESTATE/redPatners_o39apm_xgelqo.svg",
  },
  {
    name: "Red Money",
    link: "https://myredmoney.com/",
    img: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696347771/BANNERS/RED-REALESTATE/RED-MONEY_zk9gdz.png",
  },
  {
    name: "Red Projects",
    link: "#",
    img: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696347770/BANNERS/RED-REALESTATE/LOGO-RED-PROJECTS_rwgt8p.png",
  },
  {
    name: "Red Travel",
    link: "/giveaways",
    img: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696347770/BANNERS/RED-REALESTATE/RED_TRAVEL_LIFESTYLE_1_zy5vbk.png",
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
