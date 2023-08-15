<template>
  <section class="p-4">
    <article class="">
      <h2 class="sectionTitle">Contáctanos</h2>
      <form class="flex flex-col items-center gap-5 mt-6">
        <input class="inputContact" type="text" placeholder="Nombre" v-model="emailData.name" />
        <input class="inputContact" type="text" placeholder="Correo" v-model="emailData.email"/>
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
  @apply p-2 text-base outline-none border-none w-3/4 text-black bg-gray-100;
}
.textAreaContact {
  @apply p-2 outline-none border-none w-3/4 text-black bg-gray-100;
}
.btnContact {
  @apply p-4 text-xl outline-none font-semibold border-none bg-gray-100 text-black;
}
</style>
