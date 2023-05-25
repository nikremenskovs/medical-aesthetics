<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutBannerScrollAnimation = () => {
  const aboutBannerScrollAnimationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#aboutContent',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 0.2
    }
  })
  aboutBannerScrollAnimationTimeline.fromTo('.about-sticky__text', { opacity: 1 }, { opacity: 0 })
}
const aboutBannerLoad = () => {
  const aboutBannerLoadTimeline = gsap.timeline()
  aboutBannerLoadTimeline.fromTo(
    '.about-sticky__text',
    { y: '20%', opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, delay: 0.5 },
    0
  )
}

onMounted(() => {
  aboutBannerScrollAnimation()
  aboutBannerLoad()
})
onUnmounted(() => {
  ScrollTrigger.killAll()
  gsap.killTweensOf('.about-sticky__text')
})
</script>

<template>
  <div
    class="about-sticky__background h-auto bg-about-background bg-cover bg-fixed bg-center pt-[80vh]"
  >
    <div
      class="about-sticky__text fixed left-1/2 top-1/2 h-auto w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-main-blue/25 px-2 py-4 text-center text-main-white"
    >
      <h1 class="mb-2 font-yeseva-one text-4xl uppercase">AK Beauty Room</h1>
      <span class="mx-auto mb-4 block h-1 w-1/4 bg-main-white"></span>
      <p class="font-marmelad text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, unde quaerat? Minima
        debitis omnis eligendi.
      </p>
    </div>
    <slot></slot>
  </div>
</template>
