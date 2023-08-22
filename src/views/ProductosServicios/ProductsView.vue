<template>
  <main class="pb-10 pt-[61px]">
    <h2 class="px-4 text-3xl font-semibold my-6 max-w-screen-xl mx-auto">
      Nuestros servicios
    </h2>
    <section class="px-4">
      <article
        class="max-w-screen-xl mt-5 mb-10 mx-auto rounded-lg overflow-hidden"
      >
        <video
          class="w-full min-h-full min-w-full object-fill"
          src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692735841/videoCompress_kfqwtq.mp4"
          controls
        >
          <source />
        </video>
      </article>
    </section>
    <section class="flex flex-col items-center justify-center gap-10 mx-auto">
      <article v-for="service in services" class="projectItem">
        <div class="pathShadow"></div>
        <div class="artProjectItem">
          <img :src="service.img" :alt="service.name" />
        </div>
        <div class="infoProjectItem">
          <h2 class="text-2xl font-semibold">{{ service.name }}</h2>
          <p>{{ service.description }}</p>
          <button class="btnVisit" @click="goToProject(service.link)">
            Visitar
          </button>
        </div>
        <!-- <div class="blur"></div> -->
      </article>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
interface Services {
  name: string;
  description: string;
  img: string;
  link: string;
}
const services: Ref<Services[]> = ref([
  {
    name: "Red Academy",
    description: `
      Hemos sido reconocidos como una de las compañías con los más altos estándares de formación y entrenamiento, 
      nuestros modelos y sistemas, cursos virtuales, programas de coaching y productividad y eventos presenciales 
      están cambiando la vida de miles de emprendedores a nivel nacional e internacional
      `,
    link: "http://academy.red-realestate.com/",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692740058/RED_ACADEMY_LOGO_1_copia_sa6x8u.png",
  },
  {
    name: "CRM RED",
    description: `
      CRM multiplataforma y multiusuarios para Inmobiliarias y agentes independientes. 
      Gestiona tus inmuebles, tus clientes, tu agenda.
      Automatiza campañas de marketing digital, obten tu
      página web y ten mayor visibilidad en el mercado.
      `,
    link: "http://www.crmred.co/inicio",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692740057/CRM_BLANCO_copia_ucy19d.png",
  },
  {
    name: "Red Fincaraiz",
    description: `
      Transformamos la experiencia global de bienes raíces con tecnología y marketing digital. 
      Ofrecemos soluciones inteligentes y eficientes para encontrar, adquirir y gestionar propiedades 
      de manera rentable. Con colaboración y una red global, empoderamos individuos y comunidades para 
      alcanzar objetivos financieros y de bienestar, creando un impacto positivo y duradero en la industria y la sociedad.
      `,
    link: "https://redfincaraiz.com/",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692740057/LOGO-RED-FINCA-RAIZ-BLANCO_nuv8k1.png",
  },
  {
    name: "Red Patners",
    description: `
      Transformamos la experiencia global de bienes raíces con tecnología y marketing digital. 
      Ofrecemos soluciones inteligentes y eficientes para encontrar, adquirir y gestionar propiedades de manera rentable. 
      Con colaboración y una red global, empoderamos individuos y comunidades para alcanzar objetivos 
      financieros y de bienestar, creando un impacto positivo y duradero en la industria y la sociedad.
      `,
    link: "patners",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692740190/redPatnersWhite_nimxml.png",
  },
  {
    name: "Red Money",
    description: `
      RED MONEY es una Criptomoneda que está creada para acercar a los usuarios al mundo de las inversiones en bienes raíces. 
      Queremos democratizar el acceso a la industria inmobiliaria, que nuestros usuarios inviertan en la compra 
      y venta de propiedad raíz, que puedan generar rendimientos y hacer transacciones de una forma más segura, fácil y rápida.
      `,
    link: "https://myredmoney.com/",
    img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692227141/banner-2-2_jz3lda.png",
  },
  // {
  //   name: "Red Projects",
  //   description: 'Proximamente',
  //   link: '#',
  //   img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redProjects_rswjft.svg",
  // },
  // {
  //   name: "Red Travel",
  //   description: 'Proximamente',
  //   link: '#',
  //   img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692109632/RedTravel_slmazf.png",
  // },
]);
const goToProject = (link: string) => {
  window.open(link, "_blank");
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style lang="css" scoped>
.projectItem {
  @apply relative flex flex-col transition-all;
  @apply lg:flex-row justify-between lg:h-80;
}
.projectItem:nth-child(2n) {
  @apply lg:flex-row-reverse
  /* flex-direction: row-reverse; */;
}
.artProjectItem {
  @apply relative z-[2] bg-primaryColor transition-all h-52;
  @apply lg:w-1/2 lg:h-80;
  background-image: radial-gradient(
    circle at center,
    #930b0b 64%,
    #470000 100%
  );
  -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
}
.projectItem:nth-child(2n) .artProjectItem {
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.pathShadow {
  @apply bg-primaryColor opacity-10 transition-all;
  position: absolute;
  width: 102%;
  height: 44%;
  -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  background-image: radial-gradient(
    circle at center,
    #930b0b 64%,
    #470000 100%
  );
}
.projectItem:nth-child(2n) .pathShadow {
  width: 80%;
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.artProjectItem img {
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  width: 300px;
  height: 201px;
  object-fit: contain;
}
.infoProjectItem {
  @apply flex flex-col gap-3 p-5 text-justify z-[2];
  @apply lg:w-1/2 lg:pr-16;
  /* width: 50%; */
  /* padding-right: 60px; */
}
.projectItem:nth-child(2n) .infoProjectItem {
  @apply lg:pl-16;
  /* padding-left: 60px; */
}
.btnVisit {
  @apply py-3 px-4 text-white font-semibold text-base shadow-lg bg-[#94120B] lg:self-start transition-all;
  @apply cursor-pointer z-[1] my-5 rounded-lg;
}

@media screen and (min-width: 1024px) {
  .artProjectItem img {
    top: calc(50% - 132px);
    left: calc(50% - 205px);
    width: 410px;
    height: 264px;
  }
  .pathShadow {
    width: 51%;
    height: 105%;
  }
  .projectItem:nth-child(2n) .pathShadow {
    width: 52%;
  }
}
</style>
