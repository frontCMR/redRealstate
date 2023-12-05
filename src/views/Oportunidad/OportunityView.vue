<template>
    <div class="flex-container">

        <h2 class="my-5 text-3xl font-semibold"> Nuestros servicios</h2>
        <div id="video-container">
            <iframe id="video" src="https://www.youtube.com/embed/ohBt2aCFJgM?si=4VS_dIjqGUs20yE1"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
    window.scrollTo(0, 0);
});
// const downoadPdf = () => {
//     const link = document.createElement("a");
//     link.href = "../../public/oportunidad.pdf";
//     link.target = "_blank";
//     link.download = "Oportunidad.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };
</script>
<style lang="css" scoped>
.videoSlider {
    display: -webkit-box;
}

#video {
    width: 90em;
    height: 40rem;
}

@media only screen and (max-width: 600px) {
    #video {
        width: 100%;
        height: 10em;
    }
}

.flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

#video-container {
    position: relative;
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


