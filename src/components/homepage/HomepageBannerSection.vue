<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  bannerData: { type: Object, required: true }
})

const homepageBannerScrollAnimation = () => {
  const homepageBannerScrollAnimationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#homepageBannerSection',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.2
    }
  })
  homepageBannerScrollAnimationTimeline
    .fromTo('.banner__image', { x: 0 }, { x: '-100%' }, 0)
    .to('.banner__text', { opacity: 0 }, 0)
    .to('.banner__description', { opacity: 0 }, 0)
}

onMounted(() => {
  gsap.fromTo(
    '.banner__image',
    { x: '-100%', opacity: 0 },
    { x: 0, opacity: 1, duration: 1, delay: 0.25 }
  )
  gsap.fromTo(
    '.banner__text',
    { opacity: 0, y: '20%' },
    { opacity: 1, y: 0, duration: 1, delay: 0.25 }
  )
  homepageBannerScrollAnimation()
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <section id="homepageBannerSection" class="mb-12">
    <div class="banner relative flex h-[50vh] overflow-hidden lg:h-[70vh]">
      <ResponsiveImage
        class="banner__image scale-[1.01] object-cover md:w-1/2"
        :imgSrc="props.bannerData.leftImage.image[0]"
        :imgAlt="props.bannerData.leftImage['image-alt']"
        :sourcesMap="[
          { assetWidth: 'max', media: '1440px' },
          { assetWidth: '1440', media: '1024px' },
          { assetWidth: '1024', media: '768px' },
          { assetWidth: '768', media: '425px' },
          { assetWidth: '425', media: '320px' }
        ]"
      />

      <div
        class="banner__text absolute bottom-4 right-4 flex flex-col md:static md:w-1/2 md:items-center md:justify-center"
      >
        <ResponsiveImage
          class="mb-8 hidden px-8 md:block md:h-[30vh] lg:h-[50vh]"
          :imgSrc="props.bannerData.rightImage.image[0]"
          :imgAlt="props.bannerData.rightImage['image-alt']"
          :sourcesMap="[
            { assetWidth: 'max', media: '1440px' },
            { assetWidth: '1440', media: '1024px' },
            { assetWidth: '1024', media: '768px' },
            { assetWidth: '768', media: '425px' },
            { assetWidth: '425', media: '320px' }
          ]"
        />
        <CallToActionButton :to="props.bannerData.button.buttonRoute">
          {{ props.bannerData.button.buttonText }}
        </CallToActionButton>
      </div>
    </div>
    <p
      class="banner__description bg-hover-blue px-8 py-4 text-center font-marmelad text-xl tracking-wider text-main-white"
    >
      {{ props.bannerData.bannerText }}
    </p>
  </section>
</template>
