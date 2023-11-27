<template>
    <main class="pb-10 pt-[61px]">
        <h2 class="px-4 text-3xl font-semibold my-6 max-w-screen-xl mx-auto">
            Nuestros servicios
        </h2>
        <section class="px-4">
            <article class="max-w-screen-xl mt-5 mb-10 mx-auto rounded-lg overflow-hidden">
                <video class="w-full min-h-full min-w-full object-fill"
                    src="https://res.cloudinary.com/dv0z0qvha/video/upload/v1696449625/videos/red-realestate/WhatsApp_Video_2023-10-04_at_2.56.29_PM_nzevst.mp4" controls>
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

import imagenTravel from "@/assets/blancos/TRAVEL.png";
import imagenParner from "@/assets/blancos/PARNER.png";
import imagenRedMoney from "@/assets/blancos/RED-MONEY-EN-BLANCO.png";
import imagenfinca from "@/assets/blancos/redfinca.png";
import imagenCrm from "@/assets/blancos/crmredblanco.png";
import imagenAcademy from "@/assets/blancos/redacademy.png";

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
        link: "https://academy.red-realestate.com",
        img: imagenAcademy,

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

        img: imagenCrm,
    },
    {
        name: "Red Fincaraiz",
        description: `
    Red Fincaraíz es una plataforma líder en el ámbito de bienes raíces que conecta de manera eficiente a compradores, vendedores, arrendatarios y arrendadores con una amplia variedad de opciones inmobiliarias. Con una interfaz moderna e intuitiva, Red Fincaraíz se ha convertido en el destino virtual por excelencia para aquellos que buscan adquirir, vender o alquilar propiedades en diversos lugares.
      `,
        link: "https://redfincaraiz.com/",
        img: imagenfinca,
    },
    {
        name: "Red Patners",
        description: `
    Red Partners es un programa de vanguardia diseñado para impulsar a agentes inmobiliarios hacia el éxito empresarial. Nuestro enfoque se centra en brindar un soporte integral que transforma agentes en empresarios exitosos capaces de generar ingresos anuales superiores a 70,000 USD.
      `,
        link: "patners",
        img: imagenParner,
    },
    {
        name: "Red Money",
        description: `
      RED MONEY es una Criptomoneda que está creada para acercar a los usuarios al mundo de las inversiones en bienes raíces.
      Queremos democratizar el acceso a la industria inmobiliaria, que nuestros usuarios inviertan en la compra
      y venta de propiedad raíz, que puedan generar rendimientos y hacer transacciones de una forma más segura, fácil y rápida.
      `,
        link: "https://myredmoney.com/",
        img: imagenRedMoney,
    },
    {
        name: "RED TRAVEL & LIFESTYLE",
        description: `
        Imagina tener a tu alcance una puerta abierta a un universo de destinos esperando a ser explorados. En RED TRAVEL & LIFESTYLE, no solo te ofrecemos tarifas exclusivas y descuentos impresionantes en una amplia gama de opciones de viaje, sino que también te invitamos a descubrir una nueva forma de aventurarte, donde cada paso se convierte en una oportunidad para ser recompensado.
      `,
        link: "/giveaways",
        img: imagenTravel,
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
    /* flex-direction: row-reverse; */
    ;
}

.artProjectItem {
    @apply relative z-[2] bg-primaryColor transition-all h-52;
    @apply lg:w-1/2 lg:h-80;
    background-image: radial-gradient(circle at center,
            #930b0b 64%,
            #470000 100%);
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
    display: none;
    width: 100%;
    height: 37%;
    -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    background-image: radial-gradient(circle at center,
            #930b0b 64%,
            #470000 100%);
}

.projectItem:nth-child(2n) .pathShadow {
    width: 100%;
    height: 37%;
    -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.artProjectItem img {
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 128px);
    width: 256px;
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
        display: block;
        width: 51%;
        height: 104%;
    }

    .projectItem:nth-child(2n) .pathShadow {
        width: 51.5%;
        height: 104%;
    }
}
</style>
