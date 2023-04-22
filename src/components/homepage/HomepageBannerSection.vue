<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
                src="@/assets/images/bannerFace2.png" alt="face">
            <div
                class="banner__text absolute right-4 bottom-4 flex flex-col md:w-1/2 md:static md:justify-center md:items-center md:my-8">
                <img class="hidden md:block max-h-[500px] mb-8 px-8" src="@/assets/images/logoCrop.png">
                <button
                    class="h-10 w-auto px-4 bg-transparent border-2 border-[#1D3557] text-[#1D3557] font-bold rounded-full hover:bg-[#1D3557] hover:text-[#F1FAEE]">
                    Enquire Now
                </button>
            </div>
        </div>
        <p class="banner__description bg-[#1D3557]/75 text-[#F1FAEE] text-center px-8 py-4">
            Деньги вперед, — заявил монтер, — утром — деньги, вечером — стулья или вечером — деньги, а на другой день утром
            — стулья
        </p>
    </section>
</template>