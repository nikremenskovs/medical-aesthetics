<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useContactsPageStore } from '@/stores/ContactsPageStore.js'

gsap.registerPlugin(ScrollTrigger)

const contactsPageStore = useContactsPageStore()

const contactsBannerScrollAnimation = () => {
  const contactsBannerScrollAnimationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#contactsBannerSection',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.2
    }
  })
  contactsBannerScrollAnimationTimeline
    .fromTo('.contact-banner__image1', { x: 0 }, { x: '-100%' }, 0)
    .fromTo('.contact-banner__image2', { x: 0 }, { x: '100%' }, 0)
}
const contactBannerLoad = () => {
  const contactsBannerLoadTimeline = gsap.timeline()
  contactsBannerLoadTimeline
    .fromTo(
      '.contact-banner__image1',
      { x: '-100%', opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.5 },
      0
    )
    .fromTo(
      '.contact-banner__image2',
      { x: '100%', opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.5 },
      0
    )
}

onMounted(() => {
  contactsBannerScrollAnimation()
  contactBannerLoad()
})
onUnmounted(() => {
  ScrollTrigger.killAll()
  gsap.killTweensOf('.contact-banner__image1', '.contact-banner__image2')
})
</script>

<template>
  <section
    id="contactsBannerSection"
    class="contacts-banner--container flex h-[30vh] w-full justify-center space-x-4 overflow-hidden sm:h-[40vh] sm:space-x-8 md:h-[50vh] md:space-x-12 lg:space-x-16 xl:space-x-20"
  >
    <img
      :src="contactsPageStore.banner.leftImage.image[0]"
      :alt="contactsPageStore.banner.leftImage['image-alt']"
      class="contact-banner__image1 h-full w-1/2 -translate-x-full object-cover object-right opacity-0"
    />
    <img
      :src="contactsPageStore.banner.rightImage.image[0]"
      :alt="contactsPageStore.banner.rightImage['image-alt']"
      class="contact-banner__image2 h-full w-1/2 translate-x-full object-cover object-left opacity-0"
    />
  </section>
</template>
