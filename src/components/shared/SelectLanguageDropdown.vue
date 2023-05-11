<script setup>
import { ref, computed, defineProps } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useTopLevelStore } from "@/stores/TopLevelStore.js";
import { useHomepageStore } from "@/stores/HomepageStore.js";
const topLevelStore = useTopLevelStore();
const homepageStore = useHomepageStore();

const props = defineProps({
    languageFlags: { type: Object, required: true }
});

const dropdownElement = ref();
const dropdownOpen = ref();
const selectedLanguage = computed(() => topLevelStore.selectedLanguage)
const options = [
    { value: 'lv', text: 'Latviešu' },
    { value: 'en', text: 'English' },
    { value: 'ru', text: 'Русский' },
];

function selectOption(language) {
    topLevelStore.selectLanguageOption(language)
    homepageStore.getHomepageData(false, selectedLanguage.value)
    dropdownOpen.value = false;
}

function getImageSrc(optionValue) {
    switch (optionValue) {
        case 'lv':
            return props.languageFlags[0].image[0];
        case 'en':
            return props.languageFlags[1].image[0];
        case 'ru':
            return props.languageFlags[2].image[0];
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
            <img :src="getImageSrc(selectedLanguage)" :alt="selectedLanguage" class="w-8 h-8 inline-block mr-2">
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
  