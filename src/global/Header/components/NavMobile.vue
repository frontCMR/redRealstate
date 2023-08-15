<template>
  <nav
    class="fixed z-10 top-0 w-full flex justify-between items-center p-3 bg-white shadow-md lg:hidden"
  >
    <figure class="w-16">
      <img
        class="w-full h-full object-contain"
        src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg"
        alt=""
      />
    </figure>
    <article class="flex items-center gap-4">
      <!-- <UserCircleIcon class="w-8 h-8 text-red-500" /> -->
      <div
        @click="toggleMenuMobile"
        class="relative z-10 w-8 h-8 bg-grayMenu rounded-md cursor-pointer"
      >
        <Bars3Icon class="text-white" />
      </div>
    </article>
    <section class="fixed top-0 right-0 w-5/6">
      <div
        :class="
          'mMobileBack' + (isNavMobile ? ' opacity-100' : ' hidden opacity-0')
        "
      ></div>
      <article
        :class="'mMobileNav' + (isNavMobile ? ' -right-11' : ' -right-full')"
        class="mMobileNav"
      >
        <ul class="flex flex-col gap-3 pb-4">
          <li><a href="https://redfincaraiz.com/agents" target="_blank">Agentes</a></li>
          <li><a href="https://redfincaraiz.com" target="_blank">Inmuebles</a></li>
          <li class="cursor-pointer" @click="downoadPdf">Oportunidad</li>
          <li>Productos y servicios</li>
          <li><a href="https://kwred.co/blog/" target="_blank">Blogs</a></li>
          <li><a href="https://www.red-realestate.com/customer" target="_blank">Inicia sesión</a></li>
        </ul>
        <ul class="pt-4 border-t-2 border-red-600">
          <li><a href="https://tienda.kwred.co/" target="_blank">Tienda</a></li>
        </ul>
      </article>
    </section>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";
const isNavMobile = ref(false);
const toggleMenuMobile = (): void => {
  console.log("entro");
  isNavMobile.value = !isNavMobile.value;
};
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
<style lang="css">
.mMobileBack {
  @apply fixed left-0 right-0 top-0 w-full h-full bg-black/30 transition-all duration-300 ease-in-out;
}
.mMobileNav {
  @apply fixed top-0 w-11/12 h-full pt-[61px] px-6 shadow-lg bg-white transition-all duration-300 ease-in-out;
}
</style>
