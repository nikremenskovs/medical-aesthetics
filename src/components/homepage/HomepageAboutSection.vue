<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    aboutData: { type: Object, required: true }
});

</script>

<template>
    <section
        class="max-h-screen mb-12 bg-gradient-to-b from-main-blue/75 to-transparent px-6 py-12 text-center md:text-left md:flex md:items-center md:justify-evenly">
        <div class="my-12 font-yeseva-one text-4xl uppercase tracking-wide md:text-5xl md:w-5/12">
            <h1 class="mb-2 text-main-white">
                {{ props.aboutData.heading }}</h1>
            <h2 class="text-main-blue mb-8">{{ props.aboutData.subheading }}</h2>
            <CallToActionButton :to="props.aboutData.button.buttonRoute">{{
                props.aboutData.button.buttonText }}
            </CallToActionButton>
        </div>
        <div class="rounded-full overflow-hidden md:w-5/12">
            <ResponsiveImage :imgSrc="props.aboutData.image.image[0]" :imgAlt="props.aboutData.image['image-alt']"
                :sourcesMap="[
                    { assetWidth: 'max', media: '1440px' },
                    { assetWidth: '1440', media: '1024px' },
                    { assetWidth: '1024', media: '768px' },
                    { assetWidth: '768', media: '425px' },
                    { assetWidth: '425', media: '320px' },
                ]" />
        </div>
    </section>
</template>