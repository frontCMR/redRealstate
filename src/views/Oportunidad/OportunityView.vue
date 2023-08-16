<template>
    <main class=" max-w-screen-xl mx-auto mt-[65px] px-4 lg:flex-row">
        <img class="w-48" src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg" alt="">
        <iframe 
        src="https://docs.google.com/presentation/d/e/2PACX-1vQ3hTeOmwUZ17qbE-0bao6aR9EAuHHM7I4gnyyOWwkFpAvhNVnkAmO0bSUG1VNT2w/embed?start=true&loop=false&delayms=60000" 
        frameborder="0" 
        class="presentation" 
        allowfullscreen="true" 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true">
        </iframe>
        <button class="btnDownload" @click="downoadPdf">Descargar pdf</button>
    </main>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
})
  const downoadPdf = () => {
    const link = document.createElement("a");
    link.href = '../../public/oportunidad.pdf';
    link.target = '_blank'
    link.download = 'Oportunidad.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>
<style lang="css" scoped>
 .presentation {
    @apply w-full h-[300px] md:h-[500px] lg:h-[749px]  mx-auto transition-all;
    /* h-[749px] */
 }
 .btnDownload {
    @apply p-4 px-9 text-white font-semibold text-lg shadow-lg bg-[#94120B] lg:self-start transition-all;
    @apply cursor-pointer z-[1] my-5;
 }
</style>