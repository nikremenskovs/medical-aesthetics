<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const bannerScrollAnimation = () => {
    const bannerScrollAnimationTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".banner__image",
            start: "top top",
            end: "bottom top",
            scrub: 0.2
        }
    });
    bannerScrollAnimationTimeline
        .fromTo(".banner__image", { x: 0 }, { x: "-50%" })
        .to(".banner__text", { opacity: 0 }, 0);
}


onMounted(() => {
    bannerScrollAnimation();
});
onUnmounted(() => {
    ScrollTrigger.killAll();
});
</script>

<template>
    <section class="banner h-auto w-full bg-[#CDB4DB] relative flex md:justify-between overflow-hidden">
        <img class="banner__image -translate-x-56 scale-[1.01] w-auto md:max-w-max max-h-[600px] md:w-4/6"
            src="@/assets/images/bannerFace2.png" alt="face">
        <div
            class="banner__text absolute m-2 right-0 bottom-0 text-center md:static md:m-0 md:w-full md:flex md:flex-col md:justify-center md:items-center">
            <h1 class="hidden text-4xl m-4 md:block">AK Beauty Room</h1>
            <h2 class="hidden mb-4 md:block">Medical Aesthetics</h2>
            <button
                class="h-10 w-auto px-4 bg-transparent border-2 border-black hover:bg-slate-300 text-black font-bold rounded-full">
                Pieteikties
            </button>
        </div>
    </section>


    <section class="h-[300vh] bg-slate-500">
        scroll
    </section>
</template>