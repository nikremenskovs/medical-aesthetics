<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    treatmentsDataLV: { type: Object, required: true },
    treatmentsDataEN: { type: Object, required: true },
    treatmentsDataRU: { type: Object, required: true },
});

</script>

<template>
    <section id="homepageCardsSection" class="mb-12">
        <h1 class="text-4xl text-center text-main-blue font-yeseva-one uppercase tracking-wider mb-4">
            {{ props.treatmentsDataLV.sectionHeading }}
        </h1>
        <div
            class="homepageCards-container font-marmelad tracking-wider sm:flex sm:flex-wrap sm:justify-center lg:flex-nowrap">
            <router-link v-for="(card, index) in props.treatmentsDataLV.treatmentsCards" :key="index" to="/about"
                class="card sm:w-1/3 m-8">
                <div class="relative bg-main-white">
                    <ResponsiveImage :imgSrc="card.cardImage.image[0]" :imgAlt="card.cardImage['image-alt']" :sourcesMap="[
                        { assetWidth: 'max', media: '1440px' },
                        { assetWidth: '1440', media: '1024px' },
                        { assetWidth: '1024', media: '768px' },
                        { assetWidth: '768', media: '425px' },
                        { assetWidth: '425', media: '320px' },
                    ]" />
                    <div class="absolute bg-main-blue/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-main-white  text-2xl">{{ card.heading }}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>