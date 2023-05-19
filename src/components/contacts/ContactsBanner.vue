<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const contactsBannerScrollAnimation = () => {
    const contactsBannerScrollAnimationTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#contactsBannerSection",
            start: "top top",
            end: "bottom top",
            scrub: 0.2
        }
    });
    contactsBannerScrollAnimationTimeline
        .fromTo(".contact-banner__image1", { x: 0 }, { x: "-100%" }, 0)
        .fromTo(".contact-banner__image2", { x: 0 }, { x: "100%" }, 0)
}
const contactBannerLoad = () => {
    const contactsBannerLoadTimeline = gsap.timeline()
    contactsBannerLoadTimeline.fromTo(".contact-banner__image1", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.5 }, 0).fromTo(".contact-banner__image2", { x: "100%", opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.5 }, 0)
}

onMounted(() => {
    contactsBannerScrollAnimation();
    contactBannerLoad()
});
onUnmounted(() => {
    ScrollTrigger.killAll();
    gsap.killTweensOf(".contact-banner__image1", ".contact-banner__image2");
});
</script>

<template>
    <section id="contactsBannerSection"
        class="contacts-banner--container w-full flex justify-center overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh] space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
        <img src="@/assets/images/contactsBannerLeftNoBG.png"
            class="contact-banner__image1 -translate-x-full opacity-0 w-1/2 h-full object-cover object-right">
        <img src="@/assets/images/contactsBannerRightNoBG.png"
            class="contact-banner__image2 translate-x-full opacity-0 w-1/2 h-full object-cover object-left">
    </section>
</template>