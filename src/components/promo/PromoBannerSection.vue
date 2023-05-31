<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let matchMedia = gsap.matchMedia()

const promoBannerScrollAnimation = () => {
  matchMedia.add('(min-width: 768px)', () => {
    const promoBannerScrollAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.promo-banner',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    promoBannerScrollAnimationTimeline.fromTo(
      '.promo-banner__image',
      { y: 1 },
      { y: () => `${window.innerHeight * (1 - window.innerHeight / (window.innerHeight * 2))}px` }
    )
  })
}

onMounted(() => {
  promoBannerScrollAnimation()
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <section class="promo-banner relative h-screen overflow-hidden">
    <img
      src="../../assets/images/promoBanner.jpg"
      alt=""
      class="promo-banner__image absolute h-screen w-full object-cover"
    />
    <div class="promo-banner__overlay absolute h-screen w-full bg-main-white/80" />
    <div
      class="promo-banner-content absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center md:w-full md:flex-row md:justify-center"
    >
      <div class="promo-banner-content__text mb-8 text-center md:w-1/3">
        <h1 class="mb-4 font-yeseva-one text-4xl uppercase text-main-blue">
          Check out our current promotions!
        </h1>
        <p class="font-marmelad text-lg text-main-blue">
          We are always pleased to amaze you with our special offers. See if you can find anything
          that suits you!
        </p>
      </div>
      <div class="md:w-1/3">
        <img
          src="../../assets/images/promo-content.jpg"
          class="mx-auto h-48 w-48 rounded-full object-cover object-left md:h-56 md:w-56 lg:h-80 lg:w-80"
        />
      </div>
    </div>
    <router-link
      class="absolute bottom-0 left-1/2 -translate-x-1/2 pb-8"
      to="/about#about-content__section1"
    >
      <i
        class="fas fa-chevron-right flex h-10 w-10 rotate-90 animate-pulse cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"
      ></i>
    </router-link>
  </section>
</template>
