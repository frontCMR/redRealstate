<template>
  <section class="fixed z-10 top-0 w-full shadow-md bg-white hidden lg:block">
    <nav class="flex items-center justify-between max-w-screen-xl mx-auto p-3">
      <router-link to="/">
        <img
          class="w-20 h-full object-contain"
          src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMain_a93d9u.svg"
          alt=""
        />
      </router-link>
      <ul class="flex gap-6 font-medium">
        <li>
          <a
            href="https://redfincaraiz.com/agents"
            target="_blank"
            class="hover-underline-animation"
            >Agentes</a
          >
        </li>
        <li>
          <a
            href="https://redfincaraiz.com"
            target="_blank"
            class="hover-underline-animation"
            >Inmuebles</a
          >
        </li>
        <li class="cursor-pointer">
          <router-link
            :to="{ name: 'oportunidad' }"
            class="hover-underline-animation"
          >
            Oportunidad
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'productosServicios' }"
            class="hover-underline-animation"
          >
            Productos y servicios
          </router-link>
        </li>
        <li>
          <a
            class="hover-underline-animation"
            href="https://kwred.co/blog/"
            target="_blank"
            >Blogs</a
          >
        </li>
        <li>
            <router-link
            :to="{ name: 'giveaways' }"
            class="hover-underline-animation"
           > Giveaways</router-link>
        </li>
        <li>
          <a
            href="https://www.red-realestate.com/backoffice/customer"
            target="_blank"
            class="hover-underline-animation"
            >Inicia sesión</a
          >
        </li>
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
<style lang="css">
.hover-underline-animation {
  display: inline-block;
  position: relative;
  /* color: #0087ca; */
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #930b0b;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
