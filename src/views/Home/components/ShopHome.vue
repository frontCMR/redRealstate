<template>
  <section class="relative transition-all h-[430px] lg:h-[494px] shopHome">
    <article class="absolute top-0 left-0 w-full h-full bg-black/80 lg:w-1/2">
      <div
        class="flex flex-col gap-6 items-center justify-center h-full text-white p-4 lg:p-10 transition-all"
      >
        <h2 class="text-3xl font-semibold text-center lg:self-start lg:text-5xl lg:text-start z-[1]">DESCUBRE NUESTRA TIENDA EN LINEA</h2>
        <button class="btnShop" @click="goToShop">
          Entra ahora
        </button>
      </div>
    </article>
    <!-- <div class="absolute top-0 left-0 w-full h-full blurredTopConection"></div> -->
    <!-- <div class="absolute top-0 left-0 w-full h-full blurredBottomConection"></div> -->
  </section>
</template>
<script lang="ts" setup>
  const goToShop = () => {
    window.location.href = 'https://tienda.kwred.co/'
  }
</script>
<style lang="css" scoped>
  .shopHome{
    background: url('../assets/shopBg.jpg') no-repeat center/cover;
  }
  .btnShop{
    @apply p-4 px-9 text-white font-semibold text-xl shadow-lg bg-[#94120B] lg:self-start lg:w-52 transition-all;
    @apply cursor-pointer z-[1];
  }
</style>
