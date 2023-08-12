<template lang="">
  <section class="px-4">
    <article class="p-4 bg-primaryColor">
      <h2 class="sectionTitle text-white">Contáctanos</h2>
      <form class="flex flex-col items-center gap-5 mt-6">
        <input class="inputContact" type="text" placeholder="Nombre" />
        <input class="inputContact" type="text" placeholder="Celular" />
        <input class="inputContact" type="text" placeholder="Correo" />
        <textarea
          class="textAreaContact"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Mensaje"
        >
        </textarea>
        <button class="btnContact">ENVIAR</button>
      </form>
    </article>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="css">
.inputContact {
  @apply p-2 text-base outline-none border-none w-3/4 text-black;
}
.textAreaContact {
  @apply outline-none border-none w-3/4 text-black;
}
.btnContact {
  @apply p-4 text-xl outline-none rounded-xl font-bold shadow-lg border-none bg-gray-400 text-black;
}
</style>
