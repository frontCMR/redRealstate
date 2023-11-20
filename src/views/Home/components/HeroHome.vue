
<template>
    <section class="relative h-100 mt-[100px] overflow-hidden lg:h-[80vh] l:w-100 transition-all">
        <div class="swiper-container h-full min-h-full min-w-full object-fill">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="imagen1" class="img-slide" alt="BANNER1">
                </div>
                <div class="swiper-slide">
                    <img :src="imagen2" style="width: 100%;" alt="BANNER2">
                </div>
                <div class="swiper-slide">
                    <img :src="imagen3" style="width: 100%;" alt="Slide 3">
                </div>
                <!-- Agrega más slides según sea necesario -->
            </div>
            <!-- Si deseas agregar navegación, descomenta las siguientes líneas -->
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
        </div>
    </section>
</template>

<script lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import imagen1Src from "@/assets/banner.jpg";
import imagen2Src from "@/assets/BANNER2.jpg";
import imagen3Src from "@/assets/BANNER3.png";


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {

        const imagen1 = ref(imagen1Src);
        const imagen2 = ref(imagen2Src);
        const imagen3 = ref(imagen3Src);

        return {
            imagen1, imagen2, imagen3,
            swiperOptions: {
                // Configuración de Swiper
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                },
            },
        };
    },
};
</script>

<style scoped>
.img-slide {
    width: 100%;
    height: 50em;
}

@media only screen and (max-width: 600px) {
    .img-slide {
        width: 100%;
        height: 15em;
    }
}

/* Agrega estilos personalizados según sea necesario */
</style>
