<template>
  <footer class="bg-footerBg">
    <section class="footerSection">
      <article class="flex flex-col gap-2">
          <h3 class="footerTitle">Oficinas Colombia</h3>
          <ul class="flex flex-col gap-2 text-sm">
            <li>
              <h3 class="subtitleFooter">Cali</h3>
              <p>Calle 5 No. 85 – 29 Barrio Las vegas</p>
            </li>
            <li>
              <h3 class="subtitleFooter">Bogota</h3>
              <p>Edificio Emprendu Carrera 13 No. 83 – 19 piso 2 Bogotá</p>
            </li>
            <li>
              <h3 class="subtitleFooter">Medellin</h3>
              <p>Cl. 18 #35-69, Mall Palms Avenue Oficina 9749 S-3</p>
            </li>
            <li>
              <h3 class="subtitleFooter">Cajicá</h3>
              <p>
                Sabana Park Health & Business Carrera 5 # 9 – 26 Sur, Cajicá,
                Cundinamarca
              </p>
            </li>
            <li>
              <h3 class="subtitleFooter">Barranquilla</h3>
              <p>Edificio Torre Atlántica Carrera 53 No. 80 – 198 Piso 17</p>
            </li>
          </ul>
      </article>
      <article class="flex flex-col gap-2">
        <h3 class="footerTitle">Contacto</h3>
        <div>
          <h3>Telefono: 3333000</h3>
          <h3>Celular: +57 3186155244</h3>
          <p><span class="font-bold">Email:</span> contacto@red-realestate.com</p>
        </div>
        <div class="flex items-center gap-4">
          <a
            v-for="item in socialMedia"
            :key="item.link"
            :href="item.link"
            target="_blank"
          >
            <img class="w-7" :src="item.icon" alt="" />
          </a>
          <!-- <img src="./assets/icons/iconFacebook.png" alt=""> -->
        </div>
        <figure class="mx-auto transition-all md:mx-0 self-start">
          <img
            class="mx-auto"
            src="https://res.cloudinary.com/dv0z0qvha/image/upload/v1696349543/icons/red-relestate/blanco_1_jb77qc.png"
            alt="Logo"
          />
        </figure>
      </article>
    </section>
  </footer>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
interface SocialMedia {
  link: string;
  icon: string;
}
const socialMedia: Ref<SocialMedia[]> = ref([
  {
    link: "https://www.instagram.com/red_realestatedigital/",
    icon: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696348396/icons/red-relestate/iconInstagram_t9tm78_jlsp5c.png",
  },
  {
    link: "https://www.facebook.com/red.realestate2023/",
    icon: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696348505/icons/red-relestate/iconFacebook_yfw5ig_ltioss.png",
  },
  {
    link: "https://www.linkedin.com/company/red-realestate-digital",
    icon: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696348428/icons/red-relestate/iconLinkedIn_byu1tq_bsyoux.png",
  },
  {
    link: `https://wa.me/+573186155244`,
    icon: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696348549/icons/red-relestate/iconWhatsapp_wgmbqo_cjfpra.png",
  },
  {
    link: "https://www.youtube.com/channel/UC0hJEfhcWzbtSJeeJjYHmMw",
    icon: "https://res.cloudinary.com/dv0z0qvha/image/upload/v1696348604/icons/red-relestate/iconYoutube_iuth71_bs7moo.png",
  },
]);
</script>
<style lang="css" scoped>
.footerSection{
  @apply flex flex-col gap-6 max-w-screen-xl mx-auto p-6 text-white md:flex-row md:items-center md:justify-between;
}
.footerTitle {
  @apply text-2xl font-semibold;
}
.subtitleFooter {
  @apply text-lg font-semibold;
}
</style>
