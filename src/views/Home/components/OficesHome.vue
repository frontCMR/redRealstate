<template>
  <section class="py-6">
    <ul
      class="flex flex-col gap-4 w-4/5 max-w-3xl p-6 mx-auto text-white rounded-lg shadow-lg bg-primaryColor"
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
    <article>
      <div>
        <figure>
          <img
            src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069039/ofice_rgl5ju.png"
            alt=""
          />
        </figure>
        <h3>Nuestra Historia</h3>
      </div>
      <div>
        <figure>
          <img
            src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069039/equipo_plroxk.png"
            alt=""
          />
        </figure>
        <h3>Nuestro Equipo</h3>
      </div>
      <div>
        <figure>
          <img
            src="https://res.cloudinary.com/dumnq4c3n/image/upload/v1692069219/eventos_un7o5f.png"
            alt=""
          />
        </figure>
        <h3>Nuestros Eventos</h3>
      </div>
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
