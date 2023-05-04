<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CallToActionButton from '../shared/CallToActionButton.vue';
gsap.registerPlugin(ScrollTrigger);


const props = defineProps({
    bannerDataLV: { type: Object, required: true },
    bannerDataEN: { type: Object, required: true },
    bannerDataRU: { type: Object, required: true },
});

console.log(props.bannerDataLV)

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
        .fromTo(".banner__image", { x: 0 }, { x: "-50%" })
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
            <img class="banner__image scale-[1.01] min-h-[400px] object-cover md:w-1/2"
                :src="props.bannerDataLV.leftImage.image" :alt="props.bannerDataLV.leftImage['image-alt']">
            <div
                class="banner__text absolute right-4 bottom-4 flex flex-col md:w-1/2 md:static md:justify-center md:items-center md:my-8">
                <img class="hidden md:block max-h-[500px] mb-8 px-8" :src="props.bannerDataLV.rightImage.image"
                    :alt="props.bannerDataLV.rightImage['image-alt']">
                <CallToActionButton :to="props.bannerDataLV.button.buttonRoute">{{ props.bannerDataLV.button.buttonText }}
                </CallToActionButton>
            </div>
        </div>
        <p
            class="banner__description bg-hover-blue font-marmelad tracking-wider text-main-white text-xl text-center px-8 py-4">
            {{ props.bannerDataLV.bannerText }}
        </p>
    </section>
</template>