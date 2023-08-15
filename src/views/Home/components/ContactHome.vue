<template>
  <section class="p-4 max-w-screen-lg mx-auto my-8">
    <article class="lg:flex flex-col">
      <div class="my-2 lg:self-start lg:my-0">
        <h2 class="sectionTitle">Contáctanos</h2>
        <p class="text-center mt-2">Resolveremos tus dudas</p>
      </div>
      <form class="flex flex-col">
        <div class="flex flex-col items-center gap-5 mt-6 lg:flex-row lg:h-28 lg:items-center lg:gap-0 flex-wrap">
            <div class="flex flex-col items-center gap-5 w-full lg:w-1/2">
              <input class="inputContact" type="text" placeholder="Nombre" v-model="emailData.name" />
              <input class="inputContact" type="text" placeholder="Correo" v-model="emailData.email"/>
            </div>
            <textarea
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
    message: string;
  }
  const emailData: Ref<EmailData> = ref({
    name: "",
    email: "",
    message: "",
  })
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
