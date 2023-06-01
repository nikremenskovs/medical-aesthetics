<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePromoPageStore } from '@/stores/PromoPageStore.js'

gsap.registerPlugin(ScrollTrigger)
let matchMedia = gsap.matchMedia()

const promoPageStore = usePromoPageStore()
console.log(promoPageStore.cards)

const promoCardScrollAnimation = (index) => {
  matchMedia.add('(min-width: 768px)', () => {
    const promoCardScrollAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.promo-card${index}`,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    promoCardScrollAnimationTimeline.fromTo(
      `.promo-card${index}__image`,
      { y: 0 },
      { y: () => `${window.innerHeight * (1 - window.innerHeight / (window.innerHeight * 2))}px` }
    )
  })
}

onMounted(() => {
  promoPageStore.cards.forEach((card, index) => {
    promoCardScrollAnimation(index)
  })
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>
<template>
  <section
    v-for="(card, index) in promoPageStore.cards"
    :key="index"
    class="h-auto overflow-hidden md:relative"
    :class="`promo-card${index}`"
    ref="promoCard"
  >
    <div :class="`promo-card${index}__image`">
      <img
        class="w-full object-cover md:h-screen"
        :src="card.promoCardImage.image[0]"
        :alt="card.promoCardImage['image-alt']"
      />
    </div>
    <div
      class="flex h-auto flex-col justify-between border-t-4 border-main-blue px-4 py-10 text-center md:absolute md:top-0 md:h-screen md:w-[40vw] md:justify-center md:border-t-0 md:bg-main-white/50"
      :class="`promo-card${index}__text ${
        index % 2 ? 'md:left-0 md:border-r-4' : 'md:right-0 md:border-l-4'
      }`"
    >
      <h1 class="mb-4 font-yeseva-one text-4xl uppercase text-main-blue">
        {{ card.promoCardTitle }}
      </h1>
      <h2 class="mb-4 font-marmelad text-2xl text-main-blue">
        {{ card.promoCardSubtitle }}
      </h2>
      <p class="mb-4 font-marmelad text-base text-main-blue">
        {{ card.promoCardText }}
      </p>
      <router-link
        class="absolute bottom-[10vh] left-1/2 hidden -translate-x-1/2 md:block"
        to="/about#about-content__section1"
      >
        <i
          class="fas fa-chevron-right flex h-10 w-10 rotate-90 animate-pulse cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"
        ></i>
      </router-link>
    </div>
  </section>
</template>
