<template>
    <picture>
        <source v-for="(source, index) in props.sourcesMap" :key="index"
            :srcset="`${props.imgSrc}?width=${source.assetWidth}`" :media="`(min-width: ${source.media})`" />
        <img class="responsive-position w-full h-full object-cover block object-center"
            :class="props.cardsSectionTriggerIndex !== null
                ? `homepageCardImage${props.cardsSectionTriggerIndex}` : props.aboutSectionForegroundClass ? 'absolute top-0 md:hover:scale-105 transition duration-[2000ms]' : ''"
            :src="props.imgSrc" :alt="props.imgAlt" ref="sectionTwoImage" />
    </picture>
</template>
  
<script setup>
const props = defineProps({
    cardsSectionTriggerIndex: { Number, required: false, default: null },
    aboutSectionForegroundClass: { String, required: false, default: '' },
    imgSrc: { type: String, required: true },
    imgAlt: {
        type: String,
        required: true,
    },
    sourcesMap: {
        type: Array,
        required: false,
        validator: (propValue) => {
            const valid = propValue.every((obj) => {
                return (
                    Object.prototype.hasOwnProperty.call(obj, "assetWidth") &&
                    Object.prototype.hasOwnProperty.call(obj, "media")
                );
            });
            return valid;
        },
    },
});
</script>
  
  