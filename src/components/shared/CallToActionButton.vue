<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  to: { type: String, required: true }
})
</script>

<template>
  <router-link
    :to="props.to"
    class="h-auto rounded-full border-2 border-main-blue bg-transparent p-4 font-yeseva-one text-sm font-bold uppercase tracking-wider text-main-blue md:text-lg md:tracking-widest md:hover:bg-main-blue md:hover:text-main-white"
  >
    <slot />
  </router-link>
</template>
