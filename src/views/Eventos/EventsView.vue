<template>
    <main class="flex flex-col-reverse gap-4 max-w-screen-xl mx-auto mt-[61px] px-4 py-6 lg:flex-row">
        <aside class="w-4/5 max-w-xl mx-auto">
            <article class="grid grid-cols-2 gap-4 md:grid-cols-3">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637616/LEADERS-SHIPCAMP/e6_bb8dco_gadf8k.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637620/LEADERS-SHIPCAMP/e14_xdlyed_q3bvj0.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637619/LEADERS-SHIPCAMP/e11_kswbqd_otozuc.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637619/LEADERS-SHIPCAMP/e10_ylcp4v_bosljh.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637618/LEADERS-SHIPCAMP/e9_hkebjk_pazcso.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637618/LEADERS-SHIPCAMP/e8_hydg34_uqkaex.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637617/LEADERS-SHIPCAMP/e7_egltmn_c54iot.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637615/LEADERS-SHIPCAMP/e4_hokavo_bfjbco.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637616/LEADERS-SHIPCAMP/e5_ahpsni_gkywhb.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637615/LEADERS-SHIPCAMP/e3_zmfeb9_kopfpb.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637615/LEADERS-SHIPCAMP/e2_sqjnyr_anglho.jpg"
                    alt="">
                <img class="imgEvents"
                    src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1697637614/LEADERS-SHIPCAMP/e1_gta2ct_mzphpk.jpg"
                    alt="">
            </article>
        </aside>
        <aside class="w-4/5 max-w-xl mx-auto flex flex-col gap-3">
            <h2 class="text-3xl font-semibold">El reconocimiento en Red Real Estate Digital</h2>
            <p class="text-justify">
                En el vibrante mundo del real estate, cada éxito cuenta.
                En nuestra organización, comprendemos la importancia de reconocer y celebrar cada logro, grande o pequeño,
                que nos acerca a nuestros objetivos. Somos más que un equipo, somos una familia unida
                por la pasión por el sector inmobiliario y la dedicación para hacer realidad los sueños de nuestros
                clientes.
            </p>
            <p class="text-justify">
                No importa si eres un agente experimentado o te unes a nosotros como un apasionado novato, aquí,
                tu dedicación y compromiso son reconocidos y aplaudidos por igual.
                Juntos, construimos un entorno donde el crecimiento es inevitable y la inspiración se encuentra en cada
                esquina.
            </p>
            <p class="text-justify">
                Bienvenido a un espacio donde el reconocimiento no es solo una palabra, sino una forma de vida.
                Únete a nosotros en esta emocionante travesía inmobiliaria y experimenta cómo la celebración
                de nuestros logros transforma la manera en que abordamos el negocio
                y construimos un futuro brillante juntos.
            </p>
        </aside>

    </main>
    <main class="flex flex-col p-4 max-w-screen-xl mx-auto mt-[61px] lg:flex-row">
        <aside class="max-w-xl mx-auto rounded-md overflow-hidden">
            <iframe width="600" height="500" src="https://www.youtube.com/embed/7bZcfy9JsPw?si=je4upWg5zayGKU1P"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </aside>
    </main>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
    window.scrollTo(0, 0);
})
</script>
<style lang="css" scoped>
.imgEvents {
    @apply rounded-md transition-all hover:scale-110
}
</style>
