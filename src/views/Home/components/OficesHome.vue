<template>
  <section>
    <h2 class="sectionTitle">Nuestras Oficinas en Colombia</h2>
    <article class="flex flex-col gap-6 items-center mt-5">
      <div>
        <a href="" target="_blank">
          <img
            src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1691845531/oficinaCali_rnhytj.png"
            alt="Oficina Cali"
          />
        </a>
      </div>
      <ul
        class="flex flex-col gap-4 w-4/5 max-w-3xl p-6 text-white rounded-lg shadow-lg bg-primaryColor"
      >
        <li>
          <h3 class="statisticsTitle">2034</h3>
          <p class="statisticsP">Unidades vendidas</p>
        </li>
        <li>
          <h3 class="statisticsTitle">654.034MM</h3>
          <p class="statisticsP">Ventas Realizadas</p>
        </li>
        <li>
          <h3 class="statisticsTitle">10.284MM</h3>
          <p class="statisticsP">Comisiones generadas a nuestros asociados</p>
        </li>
        <li>
          <h3 class="statisticsTitle">220+</h3>
          <p class="statisticsP">Agentes asociados en Colombia</p>
        </li>
      </ul>
    </article>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="css">
.statisticsTitle {
  @apply font-semibold text-2xl text-center [text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)];
}
.statisticsP {
  @apply text-xl text-center [text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)];
}
</style>
