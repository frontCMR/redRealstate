<template>
  <section class="relative transition-all h-[430px] lg:h-[476px] infoUs">
    <article class="transition-all absolute top-0 right-0 w-full h-full bg-black/80 lg:w-2/4 lg:right-0">
      <div
        class="flex flex-col gap-6 items-center justify-center h-full text-white p-4"
      >
        <h2 class="sectionTitle lg:self-start">NUESTRO PROPOSITO</h2>
        <p class="text-justify">
          <span class="font-bold">RED </span>
          nace de la visión de una comunidad de emprendedores 
          comprometidos en transformar la industria inmobiliaria y digital. 
          Nuestra meta es potenciar cada uno de nuestros asociados a través 
          de la tecnología y la educación, ayudándoles a construir libertad empresarial y financiera.
        </p>
        <button class="btnMoreUse" @click="goToMoreUs">
          Descubre más
        </button>
      </div>
    </article>
    <div class="absolute top-0 left-0 w-full h-full blurredTopConection"></div>
    <div class="absolute top-0 left-0 w-full h-full blurredBottomConection"></div>
  </section>
</template>
<script lang="ts" setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
  const goToMoreUs = () => {
    router.push({ name: "nostros" });
  };

</script>
<style lang="css" scoped>
  .infoUs{
    background: url('../assets/us.jpg') no-repeat center/cover;
  }
  .btnMoreUse{
    @apply z-[1] p-2 border-2 border-white rounded-md transition-all hover:bg-white hover:text-black lg:self-start
  }
</style>
