<template>
  <section class="py-6">
    <ul
      class="flex flex-col gap-4 w-4/5 max-w-3xl p-6 mx-auto text-white rounded-lg shadow-lg bg-primaryColor"
    >
      <li>
        <h3 class="statisticsTitle">2034</h3>
        <p class="statisticsP">Unidades vendidas</p>
      </li>
      <li>
        <h3 class="statisticsTitle">654.034MM</h3>
        <p class="statisticsP">Ventas Realizadas</p>
      </li>
      <li>
        <h3 class="statisticsTitle">10.284MM</h3>
        <p class="statisticsP">Comisiones generadas a nuestros asociados</p>
      </li>
      <li>
        <h3 class="statisticsTitle">220+</h3>
        <p class="statisticsP">Agentes asociados en Colombia</p>
      </li>
    </ul>
    <article class="flex flex-col gap-4 items-center my-8">
      <div v-for="item in ourInfo" :key="item.title" class="flex flex-col items-center gap-3">
        <figure class="w-56 h-52">
          <img
            :src="item.imgUrl"
            :alt="item.title"
          />
        </figure>
        <h3 class="text-xl font-semibold">{{item.title}}</h3>
      </div>
    </article>
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
  interface OurInfo {
    title: string
    imgUrl: string
  }
  const ourInfo: Ref<OurInfo[]> = ref([
    {
      title: 'Nuestra Historia',
      imgUrl: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069039/ofice_rgl5ju.png',
    },
    {
      title: 'Nuestro Equipo',
      imgUrl: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069039/equipo_plroxk.png',
    },
    {
      title: 'Nuestros Eventos',
      imgUrl: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069219/eventos_un7o5f.png',
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
</style>
