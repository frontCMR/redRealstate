<template>
    <main class="flex flex-col p-4 max-w-screen-xl mx-auto mt-[61px] lg:flex-row">
        <aside class="w-4/5 max-w-xl mx-auto">
            <UsAbout />
        </aside>
        <aside class="w-4/5 max-w-xl mx-auto rounded-md overflow-hidden">
            <iframe class="w-full min-h-full min-w-full object-fill" width="560" height="315" src="https://www.youtube.com/embed/jTcnu4Ria60?si=WSwODK62fg-0bh1l"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <!-- <video class="w-full min-h-full min-w-full object-fill" autoplay loop muted controls>
                <source src="s" type="video/mp4" />
            </video> -->
        </aside>
    </main>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import UsAbout from "./components/UsAbout.vue";
onMounted(() => {
    window.scrollTo(0, 0);
});
</script>
<style lang="css"></style>
