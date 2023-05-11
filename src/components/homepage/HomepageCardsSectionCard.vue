<script setup>
import { defineProps, onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let matchMedia = gsap.matchMedia();
gsap.registerPlugin(ScrollTrigger);
const props = defineProps({
    index: { type: Number, required: true },
    imgSrc: { type: String, required: true },
    imgAlt: { type: String, required: true },
    heading: { type: String, required: true }

});



const cardSectionLoad = (index) => {
    const cardSectionLoadTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: `.homepageCard${index}`,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
    cardSectionLoadTimeline.fromTo(
        `.homepageCard${index}`,
        { y: 50, opacity: 0 },
        { opacity: 1, y: 0, duration: 1 }
    );
}

function hoverEnter(index) {
    matchMedia.add("(min-width: 640px)", () => {
        gsap.to(`.homepageCardImage${index}`, { scale: 1.1, duration: 2 });
    });

}
function hoverLeave(index) {
    matchMedia.add("(min-width: 640px)", () => {
        gsap.to(`.homepageCardImage${index}`, { scale: 1, duration: 2 });
    });
}

onMounted(() => {
    cardSectionLoad(props.index)
});
onUnmounted(() => {
    ScrollTrigger.killAll();
})
</script>

<template>
    <router-link class="w-full h-auto relative block my-8 overflow-hidden sm:w-1/3 sm:mx-2"
        @mouseenter="hoverEnter(props.index)" @mouseleave="hoverLeave(props.index)">
        <div class="relative bg-main-white h-[60vh] sm:h-[40vh] lg:h-[60vh]" :class="`homepageCard${props.index}`">
            <ResponsiveImage :imgSrc="props.imgSrc" :imgAlt="props.imgAlt" :cardsSectionTriggerIndex="props.index"
                :sourcesMap="[
                    { assetWidth: 'max', media: '1440px' },
                    { assetWidth: '1440', media: '1024px' },
                    { assetWidth: '1024', media: '768px' },
                    { assetWidth: '768', media: '425px' },
                    { assetWidth: '425', media: '320px' },
                ]" />
            <div class="absolute bg-main-blue/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                <p class="text-main-white text-2xl">{{ props.heading }}</p>
            </div>
        </div>
    </router-link>
</template>