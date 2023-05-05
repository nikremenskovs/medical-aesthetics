<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const dropdownElement = ref();
const dropdownOpen = ref();
const selected = ref('LV');

const options = [
    { value: 'LV', text: 'Latviešu' },
    { value: 'EN', text: 'English' },
    { value: 'RU', text: 'Русский' },
];

function selectOption(optionValue) {
    selected.value = optionValue;
    dropdownOpen.value = false;
}

function getImageSrc(optionValue) {
    switch (optionValue) {
        case 'LV':
            return "@/assets/images/LV.png";
        case 'RU':
            return "@/assets/images/RU.png";
        case 'EN':
            return "@/assets/images/EN.png";
        default:
            return '';
    }
}

onClickOutside(
    dropdownElement,
    () => {
        dropdownOpen.value = false
    },
)
</script>

<template>
    <div ref="dropdownElement">
        <div class="flex items-center cursor-pointer" @click="dropdownOpen = !dropdownOpen">
            <img :src="getImageSrc(selected)" :alt="selected" class="w-8 h-8 inline-block mr-2">
            <i class="fa-solid fa-caret-down text-main-blue" />
        </div>
        <ul v-if="dropdownOpen" class="absolute mt-1 bg-main-white/50 rounded-lg shadow-lg">
            <li v-for="option in options" :key="option.value"
                class="flex items-center p-2 md:hover:bg-hover-blue cursor-pointer" @click="selectOption(option.value)">
                <img :src="getImageSrc(option.value)" :alt="option.value" class="w-8 h-8 inline-block mr-2">
                <p class="font-marmelad text-lg tracking-widest">{{ option.text }}</p>
            </li>
        </ul>
    </div>
</template>
  