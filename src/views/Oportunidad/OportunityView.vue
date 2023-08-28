<template>
    <div class="pdf-container">
        <!-- <img
        class="w-48"
        src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg"
        alt=""
      /> -->
        <h2 class="my-5 text-3xl font-semibold">Oportunidad</h2>
        <iframe src="https://res.cloudinary.com/reality-inmo/image/upload/v1692805340/oportunidad_n2s1o8.pdf"
            frameborder="0" class="presentation" allowfullscreen="true" mozallowfullscreen="true"
            webkitallowfullscreen="true"></iframe>
        <button class="btnDownload" @click="downoadPdf">Descargar pdf</button>
        <!-- <section class="my-5">
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
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-64 h-[464px] rounded-md overflow-hidden">
          <video class="w-full min-h-full min-w-full object-fill" controls>
            <source
              src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692133083/VIDEO-LANZAMIENTO-SISTEMA_DE_NEGOCIO_vqfwuu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </article>
    </section> -->
    </div>
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
    width: 2px;
    /* Ancho de la barra de desplazamiento */
}

.scrollbar::-webkit-scrollbar-track {
    width: 2px;
    background-color: #f1f1f1;
    /* Color de fondo de la pista de la barra de desplazamiento */
    border-radius: 8px;
    /* Borde de la pista de la barra de desplazamiento */
}

.scrollbar::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: #888;
    /* Color del "pulgar" de la barra de desplazamiento */
    border-radius: 8px;
    /* Borde del "pulgar" de la barra de desplazamiento */
}

/* Estilos adicionales para resaltar el "pulgar" al pasar el mouse */
.scrollbar::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background-color: #555;
}

.presentation {
    width: 100%;
    height: 600px;
    background-color: gray;
}

.pdf-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    /* Establece el aspect ratio del contenedor */
    overflow: hidden;
}

.pdf-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>


