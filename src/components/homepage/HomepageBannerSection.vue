<script setup>
import { onMounted, onUnmounted, computed } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTopLevelStore } from "@/stores/TopLevelStore.js";

const topLevelStore = useTopLevelStore();
const selectedLanguage = computed(() => topLevelStore.selectedLanguage)

gsap.registerPlugin(ScrollTrigger);


const props = defineProps({
    bannerDataLV: { type: Object, required: true },
    bannerDataEN: { type: Object, required: true },
    bannerDataRU: { type: Object, required: true },
});

const bannerScrollAnimation = () => {
    const bannerScrollAnimationTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#homepageBannerSection",
            start: "top top",
            end: "bottom top",
            scrub: 0.2
        }
    });
    bannerScrollAnimationTimeline
        .fromTo(".banner__image", { x: 0 }, { x: "-100%" })
        .to(".banner__text", { opacity: 0 }, 0)
        .to(".banner__description", { opacity: 0 }, 0);
}


onMounted(() => {
    bannerScrollAnimation();
});
onUnmounted(() => {
    ScrollTrigger.killAll();
});
</script>

<template>
    <section id="homepageBannerSection" class="mb-12">
        <div class="banner relative flex overflow-hidden max-h-screen">
            <ResponsiveImage class="banner__image scale-[1.01] min-h-[400px] object-cover md:w-1/2"
                :imgSrc="props.bannerDataLV.leftImage.image[0]" :imgAlt="props.bannerDataLV.leftImage['image-alt']"
                :sourcesMap="[
                    { assetWidth: 'max', media: '1440px' },
                    { assetWidth: '1440', media: '1024px' },
                    { assetWidth: '1024', media: '768px' },
                    { assetWidth: '768', media: '425px' },
                    { assetWidth: '425', media: '320px' },
                ]" />

            <div
                class="banner__text absolute right-4 bottom-4 flex flex-col md:w-1/2 md:static md:justify-center md:items-center md:my-8">
                <ResponsiveImage class="hidden md:block max-h-[500px] mb-8 px-8"
                    :imgSrc="props[`bannerData${selectedLanguage}`].rightImage.image[0]"
                    :imgAlt="props[`bannerData${selectedLanguage}`].rightImage['image-alt']" :sourcesMap="[
                        { assetWidth: 'max', media: '1440px' },
                        { assetWidth: '1440', media: '1024px' },
                        { assetWidth: '1024', media: '768px' },
                        { assetWidth: '768', media: '425px' },
                        { assetWidth: '425', media: '320px' },
                    ]" />
                <CallToActionButton :to="props.bannerDataLV.button.buttonRoute">
                    {{ props[`bannerData${selectedLanguage}`].button.buttonText }}
                </CallToActionButton>
            </div>
        </div>
        <p
            class="banner__description bg-hover-blue font-marmelad tracking-wider text-main-white text-xl text-center px-8 py-4">
            {{ props[`bannerData${selectedLanguage}`].bannerText }}
        </p>
    </section>
</template>