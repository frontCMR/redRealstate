<template>
  <section class="p-4">
    <h2 class="sectionTitle">Nuestra Empresa</h2>
    <article class="my-6">
      <p class="text-justify">
        <span class="font-bold"> RED Real Estate Digital </span>
        , nace producto de la visión de un grupo de Empresarios e Inversionistas
        que tenían la firme convicción de realizar un cambio significativo en la
        industria Inmobiliaria. Queríamos construir una compañía que fortalezca
        las competencias de los agentes de bienes raíces en el mundo y llevarlos
        a convertirse en unos verdaderos empresarios. A través de Modelos y
        Sistemas comprobados, hemos centrado todos nuestros recursos, nuestra
        tecnología y nuestro capital humano en fortalecer cada día más el
        sector, hoy queremos seguir innovando con un modelo de negocio atractivo
        para nuestros asociados que permita alcanzar la libertad empresarial y
        financiera de cada uno de ellos.
      </p>
    </article>
    <article class="infoContainer">
      <div
        v-for="info in infoUs"
        :key="info.title"
        class="w-4/5 max-w-xl mx-auto"
      >
        <div
          @click="toggleInfo"
          :id="info.title"
          class="flex justify-between rounded-md items-center mt-5 p-4 cursor-pointer bg-primaryColor"
        >
          <p class="text-2xl text-white font-bold">{{ info.title }}</p>
          <ChevronDownIcon
            :class="
              'w-7 text-white transition delay-100 ease-in-out' +
              (choice == info.title ? ' rotate-180' : ' rotate-0')
            "
          />
        </div>
        <div class="info">
          <p class="transition delay-300 ease-in-out">
            {{ choice == info.title ? info.description : "" }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
interface InfoUs {
  title: string;
  description: string;
}
const infoUs: InfoUs[] = [
  {
    title: "Misión",
    description: `
            Nuestra misión es transformar la experiencia de bienes raíces a
            nivel global mediante la tecnología digital y el marketing.Nos
            comprometemos a brindar soluciones innovadoras y eficientes a
            nuestra comunidad que permitan a las personas encontrar, adquirir y
            gestionar propiedades de manera inteligente y rentable. A través de
            nuestro enfoque colaborativo y una red global de asociados,
            aspiramos a empoderar a individuos y comunidades para que alcancen
            sus objetivos financieros y de bienestar, creando un impacto
            positivo y duradero en la industria y la sociedad.
    `,
  },
  {
    title: "Visión",
    description: `
            Nuestra visión es convertirnos en el líder indiscutible de la
            industria tecnológica de bienes raíces a nivel mundial. Queremos ser
            reconocidos como la plataforma más confiable y avanzada, ofreciendo
            soluciones digitales que revolucionen la forma en que las personas
            interactúan con el mercado inmobiliario. A través de una amplia red
            de distribuidores independientes, buscamos expandir nuestro alcance
            y presencia a nivel global, conectando a personas de diferentes
            culturas y países para que participen en nuestro exitoso modelo de
            negocio. Nuestra visión es generar riqueza y prosperidad para
            nuestros asociados mientras seguimos desarrollando tecnologías
            disruptivas que mejoren la accesibilidad y transparencia en el mundo
            de los bienes raíces. Con un enfoque inquebrantable en la innovación
            y el servicio al cliente, aspiramos a ser líderes en la
            transformación digital de la industria inmobiliaria, proporcionando
            oportunidades sin precedentes para el crecimiento personal y
            financiero de todos los involucrados en nuestra comunidad.
    `,
  },
];
const choice: Ref<string> = ref("");

const toggleInfo = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (choice.value == target.id) {
    choice.value = "";
  } else {
    choice.value = target.id;
  }
};
</script>
<style lang="css">
.info {
  @apply px-4 py-2 text-justify transition delay-100 ease-in-out;
}
</style>
