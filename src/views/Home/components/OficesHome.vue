<template>
  <section class="relative py-20">
    <ul
      class="statistics relative overflow-hidden"
    >
    <video class="absolute top-0 left-0 w-full h-full z-0 object-cover" loop muted autoplay>
      <source
        src="https://res.cloudinary.com/dumnq4c3n/video/upload/v1692117955/BOLAS_jejxyi.mp4"
        type="video/mp4"
      />
    </video>
      <li class="itemS">
        <h3 class="statisticsTitle">2034</h3>
        <p class="statisticsP">Unidades vendidas</p>
      </li>
      <li class="itemS">
        <h3 class="statisticsTitle">654.034MM</h3>
        <p class="statisticsP">Ventas Realizadas</p>
      </li>
      <li class="itemS">
        <h3 class="statisticsTitle">10.284MM</h3>
        <p class="statisticsP">Comisiones generadas</p>
      </li>
      <li class="itemS">
        <h3 class="statisticsTitle">220+</h3>
        <p class="statisticsP">Agentes asociados</p>
      </li>
    </ul>
    <article class="flex flex-col gap-4 items-center mt-10 md:flex-row md:justify-center lg:gap-10">
      <div v-for="item in ourInfo" :key="item.title">
        <a v-if="item.to.includes('https://')" :href="item.to" target="_blank" class="flex flex-col items-center gap-3 transition-all hover:scale-105">
          <figure class="w-56 h-52">
            <img
            :src="item.imgUrl"
            :alt="item.title"
            />
          </figure>
          <h3 class="text-xl font-semibold">{{item.title}}</h3>
        </a>
        <router-link v-else :to="item.to" class="flex flex-col items-center gap-3 transition-all hover:scale-105">
          <figure class="w-56 h-52">
            <img
            :src="item.imgUrl"
            :alt="item.title"
            />
          </figure>
          <h3 class="text-xl font-semibold">{{item.title}}</h3>
        </router-link>
      </div>
    </article>
    <!-- <div class="absolute top-0 left-0 w-full h-full blurred"></div> -->
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
  interface OurInfo {
    title: string
    imgUrl: string
    to: string
  }
  const ourInfo: Ref<OurInfo[]> = ref([
    {
      title: 'Nuestra Historia',
      imgUrl: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069039/ofice_rgl5ju.png',
      to: '/nosotros'
    },
    {
      title: 'Nuestro Equipo',
      imgUrl: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069039/equipo_plroxk.png',
      to: 'https://kwred.co/equipo/'
    },
    {
      title: 'Nuestros Eventos',
      imgUrl: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069219/eventos_un7o5f.png',
      to: '/eventos'
    }
  ]) 

</script>
<style lang="css">
.statisticsTitle {
  @apply font-semibold text-2xl text-center [text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)];
}
.statisticsP {
  @apply text-xl text-center [text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)];
}
.statistics {
  @apply flex flex-col items-center gap-4 w-4/5 max-w-5xl p-6 mx-auto text-white rounded-lg shadow-lg lg:flex-row;
  @apply lg:justify-center lg:gap-10 lg:h-80;
  background-image: radial-gradient(circle at center,#930b0b 64%,#470000 100%);
}
.itemS{
  @apply flex flex-col justify-center p-4 rounded-full bg-[#810b0b] h-44 w-[174px] relative z-[1];
  box-shadow: -1px -2px 7px 0px red, 1px -20px 13px 8px #6d020233;
}
</style>
