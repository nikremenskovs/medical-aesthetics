<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePromoPageStore } from '@/stores/PromoPageStore.js'
gsap.registerPlugin(ScrollTrigger)

const promoPageStore = usePromoPageStore()

let matchMedia = gsap.matchMedia()

const promoBannerLoad = () => {
  const promoBannerLoadTimeline = gsap.timeline()
  promoBannerLoadTimeline
    .fromTo(
      '.promo-banner-content__text',
      { y: '20%', opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0
    )
    .fromTo(
      '.promo-banner-content__image',
      { y: '20%', opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0
    )
    .fromTo('.promo-banner__button', { opacity: 0 }, { opacity: 1 })
}

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
      { y: 0 },
      { y: () => `${window.innerHeight * (1 - window.innerHeight / (window.innerHeight * 2))}px` }
    )
  })
}

onMounted(() => {
  promoBannerLoad()
  promoBannerScrollAnimation()
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <section class="promo-banner relative h-screen overflow-hidden">
    <img
      :src="promoPageStore.banner['promo-banner-background'].image"
      :alt="promoPageStore.banner['promo-banner-background']['image-alt']"
      class="promo-banner__background absolute h-screen w-full object-cover"
    />
    <div class="promo-banner__overlay absolute h-screen w-full bg-main-white/80" />
    <div
      class="promo-banner-content absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center md:w-full md:flex-row md:justify-center"
    >
      <div class="promo-banner-content__text mb-8 text-center md:w-1/3">
        <h1 class="mb-4 font-yeseva-one text-4xl uppercase text-main-blue">
          {{ promoPageStore.banner.promoBannerTitle }}
        </h1>
        <p class="font-marmelad text-lg text-main-blue">
          {{ promoPageStore.banner.promoBannerSubtitle }}
        </p>
      </div>
      <div class="md:w-1/3">
        <img
          :src="promoPageStore.banner['promo-banner-image'].image"
          :alt="promoPageStore.banner['promo-banner-image']['image-alt']"
          class="promo-banner-content__image mx-auto h-48 w-48 rounded-full object-cover object-center md:h-56 md:w-56 lg:h-80 lg:w-80"
        />
      </div>
    </div>
    <router-link
      class="promo-banner__button absolute bottom-[10vh] left-1/2 -translate-x-1/2"
      to="/promo#promo-card0"
    >
      <i
        class="fas fa-chevron-right flex h-10 w-10 rotate-90 animate-pulse cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"
      ></i>
    </router-link>
  </section>
</template>
