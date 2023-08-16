  <template>
      <main class="max-w-screen-xl mx-auto py-4 mt-[61px]">
          <h2 class="text-3xl font-semibold">Nuestros servicios</h2>
          <section class="flex flex-col gap-4 max-w-screen-2xl mx-auto">
            <article v-for="service in services" class="projectItem">
              <div class="artProjectItem">
                <img :src="service.img" :alt="service.name">
              </div>
                <div class="infoProjectItem">
                    <h2 class="text-2xl font-semibold">{{ service.name }}</h2>
                    <p>{{ service.description }}</p>
                    <button class="btnVisit" @click="goToProject(service.link)">Visitar</button>
                </div>
                <!-- <div class="blur"></div> -->
            </article>
          </section>
      </main>
  </template>
  <script lang="ts" setup>
  import { ref, Ref } from "vue";
      interface Services {
      name: string;
      description: string;
      img: string;
      link: string;
      }
  const services: Ref<Services[]> = ref([
    {
      name: "Red Academy",
      description: `
      Hemos sido reconocidos como una de las compañías con los más altos estándares de formación y entrenamiento, 
      nuestros modelos y sistemas, cursos virtuales, programas de coaching y productividad y eventos presenciales 
      están cambiando la vida de miles de emprendedores a nivel nacional e internacional
      `,
      link: 'http://academy.red-realestate.com/',
      img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redAcademy_j2b9vy.svg",
    },
    {
      name: "CRM RED",
      description: `
      CRM multiplataforma y multiusuarios para Inmobiliarias y agentes independientes. 
      Gestiona tus inmuebles, tus clientes, tu agenda.
      Automatiza campañas de marketing digital, obten tu
      página web y ten mayor visibilidad en el mercado.
      `,
      link: 'http://www.crmred.co/inicio',
      img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redCrm_ynpl3f.svg",
    },
    {
      name: "Red Fincaraiz",
      description: `
      Transformamos la experiencia global de bienes raíces con tecnología y marketing digital. 
      Ofrecemos soluciones inteligentes y eficientes para encontrar, adquirir y gestionar propiedades 
      de manera rentable. Con colaboración y una red global, empoderamos individuos y comunidades para 
      alcanzar objetivos financieros y de bienestar, creando un impacto positivo y duradero en la industria y la sociedad.
      `,
      link: 'https://redfincaraiz.com/',
      img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692137437/LOGO-RED-FINCA-RAIZ_1_jnr9sx.png",
    },
    {
      name: "Red Patners",
      description: `
      Transformamos la experiencia global de bienes raíces con tecnología y marketing digital. 
      Ofrecemos soluciones inteligentes y eficientes para encontrar, adquirir y gestionar propiedades de manera rentable. 
      Con colaboración y una red global, empoderamos individuos y comunidades para alcanzar objetivos 
      financieros y de bienestar, creando un impacto positivo y duradero en la industria y la sociedad.
      `,
      link: 'http://redpartners.red-realestate.com/',
      img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redPatners_o39apm.svg",
    },
    {
      name: "Red Money",
      description: `
      RED MONEY es una Criptomoneda que está creada para acercar a los usuarios al mundo de las inversiones en bienes raíces. 
      Queremos democratizar el acceso a la industria inmobiliaria, que nuestros usuarios inviertan en la compra 
      y venta de propiedad raíz, que puedan generar rendimientos y hacer transacciones de una forma más segura, fácil y rápida.
      `,
      link: 'https://myredmoney.com/',
      img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redMoney_fgf4lv.svg",
    },
    // {
    //   name: "Red Projects",
    //   description: 'Proximamente',
    //   link: '#',
    //   img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1691793300/redProjects_rswjft.svg",
    // },
    // {
    //   name: "Red Travel",
    //   description: 'Proximamente',
    //   link: '#',
    //   img: "https://res.cloudinary.com/dumnq4c3n/image/upload/v1692109632/RedTravel_slmazf.png",
    // },
  ]);
  const goToProject = (link: string) => {
    window.open(link, '_blank');
  }
  </script>
<style lang="css" scoped>
.projectItem {
    position: relative;
    overflow: hidden;
    display: flex;
    /* background: rgb(0 0 0 / 50%); */
    justify-content: space-between;
    border-radius: 10px;
    gap: 20px;
    width: 76%;
    height: 370px;
    box-shadow: 0px 2px 4px #c3c3c3;
    background-color: aquamarine;
}
.artProjectItem{
    width: 50%;
    padding: 20px;
    z-index: 2;
}
.artProjectItem img{
  width: 100%;
    height: 100%;
    object-fit: contain;
}
.infoProjectItem {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  z-index: 2;
}
/* .blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
} */
.btnVisit {
    @apply p-4 px-9 text-white font-semibold text-lg shadow-lg bg-[#94120B] lg:self-start transition-all;
    @apply cursor-pointer z-[1] my-5;
}
</style>