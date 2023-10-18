<template>
  <section class="p-4 max-w-screen-lg mx-auto my-8">
    <article class="lg:flex flex-col">
      <div class="my-2 lg:self-start lg:my-0">
        <h2 class="sectionTitle">Contáctanos</h2>
        <p class="text-center mt-2">Resolveremos tus dudas</p>
      </div>
      <form class="flex flex-col" @submit.prevent="sendEmail">
        <div class="flex flex-col items-center gap-5 mt-6 lg:flex-row  lg:items-center lg:gap-0 flex-wrap">
            <div class="flex flex-col items-center gap-5 w-full lg:w-1/2">
              <input class="inputContact" required type="text" placeholder="Nombre" v-model="emailData.name" />
              <input class="inputContact" required type="text" placeholder="Correo" v-model="emailData.email"/>
              <input class="inputContact" required type="number" placeholder="Telefono" v-model="emailData.phone"/>
              <input class="inputContact" required type="text" placeholder="Pais" v-model="emailData.country"/>
            </div>
            <textarea
            required
            class="textAreaContact"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
            v-model="emailData.message"
            >
          </textarea>
        </div>
        <button class="btnContact">ENVIAR</button>
      </form>
    </article>
  </section>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
  interface EmailData {
    name: string;
    email: string;
    phone: string;
    country: string;
    message: string;
  }
  const emailData: Ref<EmailData> = ref({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  })
  const sendEmail = () => {
    const subject = "Correo desde la pagina Red RealEstate"
    const body = `Nombre: ${emailData.value.name} \n
    Correo: ${emailData.value.email} \n
    Telefono: ${emailData.value.phone} \n
    Pais: ${emailData.value.country} \n
    Mensaje: ${emailData.value.message}`
    // const mailtoLink = `mailto:cesar.giraldo@red-realestate.com?subject=${subject}&body=${body}`;
    const mailtoLink = `mailto:contacto@red-realestate.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink
  }
</script>
<style lang="css">
.inputContact {
  @apply p-2 text-base outline-none border-none w-3/4 text-black bg-gray-300 lg:self-start lg:w-11/12 transition-all;
}
.textAreaContact {
  @apply p-2 outline-none border-none w-3/4 h-full text-black bg-gray-300 lg:w-1/2 transition-all;
}
.btnContact {
  @apply py-3 text-xl outline-none font-semibold border-none bg-gray-300 text-black w-28 mx-auto my-4 transition-all lg:mx-0;
}
</style>
