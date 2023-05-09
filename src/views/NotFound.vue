<script setup>
import { computed } from 'vue'
import { useTopLevelStore } from "@/stores/TopLevelStore.js";

const topLevelStore = useTopLevelStore();
const selectedLanguage = computed(() => topLevelStore.selectedLanguage.toLowerCase());

const notFoundText = {
    lv: {
        subheader: "Atvainojiet, mēs nevarējām atrast šo lapu",
        paragraph: "Bet neuztraucieties, mūsu mājaslapā varat atrast daudz noderīgas lietas",
        button: "uz sākumlapu"
    },
    en: {
        subheader: "Apologies, we couldn't find this page",
        paragraph: "But don't worry, you can find plenty of useful things on our homepage",
        button: "to homepage"
    },
    ru: {
        subheader: "Извините, мы не смогли найти запрашиваемую страницу",
        paragraph: "Не волнуйтесь, у нас есть много полезной информации на главной странице",
        button: "на главную"
    }
}

</script>

<template>
    <section class="bg-main-white text-main-blue h-screen px-8 flex flex-col justify-center items-center lg:flex-row">
        <div class="mb-12 lg:px-12">
            <h1 class="font-yeseva-one text-6xl mb-4">404</h1>
            <h2 class="font-marmelad text-2xl mb-4">{{ notFoundText[`${selectedLanguage}`]?.subheader }}</h2>
            <p class="font-marmelad text-base mb-8">{{ notFoundText[`${selectedLanguage}`]?.paragraph }}</p>
            <CallToActionButton :to="'/'">{{ notFoundText[`${selectedLanguage}`]?.button }}</CallToActionButton>
        </div>

        <img src="@/assets/images/faviconV2-removebg-preview.png" class="max-h-[50vh] lg:px-12">
    </section>
</template>