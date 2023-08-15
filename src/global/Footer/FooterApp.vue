<template>
  <footer class=" bg-footerBg">
    <section
      class="flex flex-col gap-6 max-w-screen-xl mx-auto p-6 text-white md:flex-row md:items-center md:justify-between"
    >
      <article class="flex flex-col gap-4">
        <div>
          <h3 class="footerTitle">Cali</h3>
          <p>Calle 5 No. 85 - 29 - Barrio las Vegas (Cali)</p>
        </div>
        <div>
          <h3 class="footerTitle">Contacto</h3>
          <h3>Telefono: 3333000</h3>
          <h3>Celular: +57 324 4047878</h3>
        </div>
        <p><span class="font-bold">Email:</span> contacto@red-realestate.com</p>
        <div class="flex items-center gap-4">
          <a v-for="item in socialMedia" :key="item.link" :href="item.link" target="_blank">
            <img :src="item.icon" alt="">
          </a>
          <!-- <img src="./assets/icons/iconFacebook.png" alt=""> -->
        </div>
      </article>
      <figure class="mx-auto transition-all md:mx-0">
        <img
          class="mx-auto"
          src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691858900/whiteLogo_qreaze.png"
          alt="Logo"
        />
      </figure>
    </section>
  </footer>
</template>
<script setup lang="ts">
  import {ref, Ref} from 'vue'
  interface SocialMedia {
    link: string
    icon: string
  }
  const socialMedia: Ref<SocialMedia[]> = ref([
    {
      link: 'https://www.instagram.com/red_realestatedigital/',
      icon: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692106316/iconInstagram_t9tm78.png',
    },
    {
      link: 'https://www.facebook.com/red.realestate2023/',
      icon: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692106316/iconFacebook_yfw5ig.png',
    },
    {
      link: 'linkedIn',
      icon: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692106316/iconLinkedIn_byu1tq.png',
    },
    {
      link: `https://wa.me/+573244047878`,
      icon: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692106316/iconWhatsapp_wgmbqo.png',
    },
    {
      link: 'https://www.youtube.com/channel/UC0hJEfhcWzbtSJeeJjYHmMw',
      icon: 'https://res.cloudinary.com/dumnq4c3n/image/upload/v1692106316/iconYoutube_iuth71.png',
    },
  ])

</script>
<style lang="css">
.footerTitle {
  @apply text-2xl font-semibold;
}
</style>
