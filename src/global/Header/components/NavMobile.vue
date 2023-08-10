<template lang="">
    <nav class="relative flex justify-between items-center p-3 bg-slate-300">
        <figure class="w-16 ">
            <img class="w-full h-full object-contain" src="../../../assets/redFincaRaiz.svg" alt="">
        </figure>
        <article class="flex items-center gap-4">
            <UserCircleIcon class="w-8 h-8 text-red-500" />
            <div @click="toggleMenuMobile" class="relative z-10 w-8 h-8 bg-grayMenu rounded-md cursor-pointer">
                <Bars3Icon class="text-white" />
            </div>
        </article>
        <section class="fixed top-0 right-0 w-5/6">
            <div :class="'mMobileBack' + (isNavMobile ? ' opacity-100' : ' opacity-0')"></div>
            <article :class="'mMobileNav' + (isNavMobile ? ' right-0' : ' -right-full')" class="mMobileNav">
                <ul class="pb-4">
                    <li>Agentes</li>
                    <li>Buscar Inmuebles</li>
                    <li>Oportunidad</li>
                    <li>Productos</li>
                    <li>Blogs</li>
                </ul>
                <ul class="pt-4  border-t-2 border-red-600">
                    <li>Tienda</li>
                </ul>
            </article>
        </section>
    </nav>
</template>
<script lang="ts" setup>
    import { ref, computed } from 'vue'
    import { Bars3Icon, UserCircleIcon  } from '@heroicons/vue/24/solid'
    
    const isNavMobile = ref(false)

    const toggleMenuMobile = (e): void => {
        isNavMobile.value = !isNavMobile.value
        console.log(isNavMobile.value);
    }

</script>
<style lang="css">
    .mMobileBack{
        @apply fixed left-0 right-0 top-0 w-full h-full bg-black/30 transition-all duration-300 ease-in-out
    }
    .mMobileNav{
        @apply fixed top-0 w-11/12 h-full pt-[61px] px-10 shadow-lg bg-white transition-all duration-300 ease-in-out 
    }
</style>