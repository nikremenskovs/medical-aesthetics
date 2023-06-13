<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
let matchMedia = gsap.matchMedia()
gsap.registerPlugin(ScrollTrigger)
const props = defineProps({
  index: { type: Number, required: true },
  imgSrc: { type: String, required: true },
  imgAlt: { type: String, required: true },
  heading: { type: String, required: true }
})

const cardSectionLoad = (index) => {
  const cardSectionLoadTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.homepageCard${index}`,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })
  cardSectionLoadTimeline.fromTo(
    `.homepageCard${index}`,
    { y: 50, opacity: 0 },
    { opacity: 1, y: 0, duration: 1 }
  )
}

function hoverEnter(index) {
  matchMedia.add('(min-width: 640px)', () => {
    gsap.to(`.homepageCardImage${index}`, { scale: 1.1, duration: 2 })
  })
}
function hoverLeave(index) {
  matchMedia.add('(min-width: 640px)', () => {
    gsap.to(`.homepageCardImage${index}`, { scale: 1, duration: 2 })
  })
}

onMounted(() => {
  cardSectionLoad(props.index)
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <router-link
    class="relative my-8 block h-auto w-full overflow-hidden sm:mx-2 sm:w-1/3"
    @mouseenter="hoverEnter(props.index)"
    @mouseleave="hoverLeave(props.index)"
  >
    <div
      class="relative h-[60vh] bg-main-white sm:h-[40vh] lg:h-[60vh]"
      :class="`homepageCard${props.index}`"
    >
      <ResponsiveImage
        :imgSrc="props.imgSrc"
        :imgAlt="props.imgAlt"
        :cardsSectionTriggerIndex="props.index"
        :sourcesMap="[
          { assetWidth: 'max', media: '1440px' },
          { assetWidth: '1440', media: '1024px' },
          { assetWidth: '1024', media: '768px' },
          { assetWidth: '768', media: '425px' },
          { assetWidth: '425', media: '320px' }
        ]"
      />
      <div
        class="absolute bottom-0 left-0 flex h-1/5 w-full items-center justify-center bg-main-blue/75"
      >
        <p class="text-2xl text-main-white">{{ props.heading }}</p>
      </div>
    </div>
  </router-link>
</template>
