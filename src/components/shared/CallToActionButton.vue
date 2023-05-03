<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    to: { type: String, required: true }
});
</script>


<template>
    <router-link :to="props.to"
        class="h-auto w-auto p-4 bg-transparent border-2 border-main-blue rounded-full text-main-blue font-yeseva-one uppercase text-sm font-bold tracking-wider md:text-lg md:tracking-widest md:hover:bg-main-blue md:hover:text-main-white ">
        <slot />
    </router-link>
</template>