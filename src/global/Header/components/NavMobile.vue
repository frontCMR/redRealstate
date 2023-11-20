<template>
  <nav
    @click="toggleMenuMobile"
    class="fixed z-10 top-0 w-full flex justify-between items-center p-3 bg-white shadow-md lg:hidden"
  >
    <router-link to="/">
      <img
        class="w-20 h-full object-contain"
        :src="redf"
        alt=""
      />
    </router-link>
    <article
      id="menuMobile"
      class="relative z-10 w-8 h-8 bg-grayMenu rounded-md cursor-pointer"
    >
      <Bars3Icon id="menuMobile" class="text-white menuMobile" />
    </article>
    <section class="fixed top-0 right-0 w-5/6">
      <div
        id="menuMobileBack"
        :class="
          'mMobileBack' + (isNavMobile ? ' opacity-100' : ' hidden opacity-0')
        "
      ></div>
      <article
        :class="'mMobileNav' + (isNavMobile ? ' -right-11' : ' -right-full')"
        class="mMobileNav"
      >
        <ul class="flex flex-col gap-3 pb-4">
          <li>
            <a
              id="menuOpt"
              href="https://redfincaraiz.com/agents"
              target="_blank"
              >Agentes</a
            >
          </li>
          <li>
            <a id="menuOpt" href="https://redfincaraiz.com" target="_blank"
              >Inmuebles</a
            >
          </li>
          <li class="cursor-pointer">
            <router-link id="menuOpt" :to="{ name: 'oportunidad' }">
              Oportunidad
            </router-link>
          </li>
          <li>
            <router-link id="menuOpt" :to="{ name: 'productosServicios' }">
              Productos y servicios
            </router-link>
          </li>
          <li>
            <router-link
            :to="{ name: 'giveaways' }"
            class="hover-underline-animation"
           > Giveaways</router-link>
        </li>
          <li>
            <a id="menuOpt" href="https://kwred.co/blog/" target="_blank"
              >Blogs</a
            >
          </li>
          <li>
            <a
              id="menuOpt"
              href="https://www.red-realestate.com/customer"
              target="_blank"
              >Inicia sesión</a
            >
          </li>
        </ul>
        <ul class="pt-4 border-t-2 border-red-600">
          <li>
            <a id="menuOpt" href="https://tienda.kwred.co/" target="_blank"
              >Tienda</a
            >
          </li>
        </ul>
      </article>
    </section>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import redf from "@/assets/redFincaRaiz.svg";
const img = ref(redf);
const isNavMobile = ref(false);
const toggleMenuMobile = (e: MouseEvent): void => {
  const element = e.target as HTMLElement;
  if (element.id === "menuMobile") {
    isNavMobile.value = !isNavMobile.value;
  } else if (element.classList.contains("menuMobile")) {
    isNavMobile.value = !isNavMobile.value;
  } else if (element.nodeName === "path") {
    isNavMobile.value = !isNavMobile.value;
  } else if (element.id === "menuMobileBack") {
    isNavMobile.value = !isNavMobile.value;
  } else if (element.id === "menuOpt") {
    isNavMobile.value = !isNavMobile.value;
  }
};
</script>
<style lang="css">
.mMobileBack {
  @apply fixed left-0 right-0 top-0 w-full h-full bg-black/30 transition-all duration-300 ease-in-out;
}
.mMobileNav {
  @apply fixed top-0 w-11/12 h-full pt-[61px] px-6 shadow-lg bg-white transition-all duration-300 ease-in-out;
}
</style>
