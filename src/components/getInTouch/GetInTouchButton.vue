<script setup>
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()
</script>

<template>
  <button
    class="get-in-touch-button fixed right-0 top-1/2 z-20 origin-bottom-right -rotate-90 animate-pulse rounded-tl rounded-tr bg-main-blue/75 px-4 py-1 font-marmelad uppercase tracking-widest text-main-white md:text-xl md:hover:animate-hoverPulse lg:text-2xl xl:text-3xl"
  >
    {{ topLevelStore.floatingButton }}
  </button>
</template>
