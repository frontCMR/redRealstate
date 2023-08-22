<template>
  <main class="max-w-screen-xl mx-auto pt-[65px] px-4 lg:flex-row">
    <section class="my-5">
      <!-- <img
        class="w-48"
        src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg"
        alt=""
      /> -->
      <h2 class="my-5 text-3xl font-semibold">Oportunidad</h2>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTeuUtepPeBoigpyZedvzhqT3OQXIA7QCqBszX9krKF_ScbK8UZrqXceuZdwVwh8g/embed?start=true&loop=false&delayms=60000"
        frameborder="0"
        class="presentation"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
      <button class="btnDownload" @click="downoadPdf">Descargar pdf</button>
    </section>
    <section class="my-5">
      <h3 class="my-3 text-2xl font-semibold">Mas información</h3>
      <article
        class="videoSlider scrollbar items-center gap-9 my-5 py-3 rounded-md overflow-hidden overflow-x-auto"
      >
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </article>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
const downoadPdf = () => {
  const link = document.createElement("a");
  link.href = "../../public/oportunidad.pdf";
  link.target = "_blank";
  link.download = "Oportunidad.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
<style lang="css" scoped>
.videoSlider {
  display: -webkit-box;
}
.scrollbar::-webkit-scrollbar {
  width: 2px; /* Ancho de la barra de desplazamiento */
}

.scrollbar::-webkit-scrollbar-track {
  width: 2px;
  background-color: #f1f1f1; /* Color de fondo de la pista de la barra de desplazamiento */
  border-radius: 8px; /* Borde de la pista de la barra de desplazamiento */
}

.scrollbar::-webkit-scrollbar-thumb {
  width: 2px;
  background-color: #888; /* Color del "pulgar" de la barra de desplazamiento */
  border-radius: 8px; /* Borde del "pulgar" de la barra de desplazamiento */
}

/* Estilos adicionales para resaltar el "pulgar" al pasar el mouse */
.scrollbar::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
  background-color: #555;
}
.presentation {
  @apply w-full h-[300px] md:h-[500px] lg:h-[749px]  mx-auto transition-all;
  background-color: aquamarine;
}
.btnDownload {
  @apply p-4 px-9 text-white font-semibold text-lg shadow-lg bg-[#94120B] lg:self-start transition-all;
  @apply cursor-pointer z-[1] my-5;
}
</style>
