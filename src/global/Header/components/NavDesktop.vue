<template>
  <section class="fixed z-10 top-0 w-full shadow-md bg-white hidden lg:block">
    <nav class="flex items-center justify-between max-w-screen-xl mx-auto p-3">
      <router-link  to="/">
        <img
          class="w-20 h-full object-contain"
          src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg"
          alt=""
        />
      </router-link>
      <ul class="flex gap-6 font-medium">
        <li><a href="https://redfincaraiz.com/agents" target="_blank">Agentes</a></li>
        <li><a href="https://redfincaraiz.com" target="_blank">Inmuebles</a></li>
        <li class="cursor-pointer">
          <router-link :to="{ name: 'oportunidad' }">
            Oportunidad
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'productosServicios' }">
            Productos y servicios
          </router-link>
        </li>
        <li><a href="https://kwred.co/blog/" target="_blank">Blogs</a></li>
        <li><a href="https://www.red-realestate.com/customer" target="_blank">Inicia sesión</a></li>
      </ul>
    </nav>
  </section>
</template>
<script lang="ts" setup>
  // const downoadPdf = () => {
  //   const link = document.createElement("a");
  //   link.href = '../../public/oportunidad.pdf';
  //   link.target = '_blank'
  //   link.download = 'Oportunidad.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
</script>
<style lang=""></style>
