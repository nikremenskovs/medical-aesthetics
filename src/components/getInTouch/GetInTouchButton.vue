<script setup>
import { computed } from "vue";
import { useTopLevelStore } from "@/stores/TopLevelStore.js";

const topLevelStore = useTopLevelStore();
const selectedLanguage = computed(() => topLevelStore.selectedLanguage.toLowerCase());
</script>

<template>
    <button
        class="fixed z-20 top-1/2 right-0 origin-bottom-right -rotate-90 bg-main-blue/75 font-marmelad tracking-widest text-main-white uppercase px-4 py-1 rounded-tl rounded-tr animate-pulse md:hover:animate-hoverPulse md:text-xl lg:text-2xl xl:text-3xl">
        {{ topLevelStore.floatingButton[`${selectedLanguage}`] }}
    </button>
</template>
