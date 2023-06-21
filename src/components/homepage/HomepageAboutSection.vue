<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  aboutData: { type: Object, required: true }
})

const aboutSectionLoad = () => {
  gsap.fromTo(
    '.homepageAboutSection__text',
    { opacity: 0, x: -50 },
    {
      scrollTrigger: {
        trigger: '.homepageAboutSection__text',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      x: 0,
      duration: 1
    }
  )

  gsap.fromTo(
    '.homepageAboutSection__image',
    { opacity: 0, x: 50 },
    {
      scrollTrigger: {
        trigger: '.homepageAboutSection__image',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      x: 0,
      duration: 1
    }
  )
}

onMounted(() => {
  aboutSectionLoad()
})
</script>

<template>
  <section
    class="homepageAboutSection mb-12 flex max-h-screen flex-col items-center justify-center bg-gradient-to-b from-main-blue/75 to-transparent px-6 py-12 text-center md:flex-row md:text-left"
  >
    <div
      class="homepageAboutSection__text my-12 font-yeseva-one text-4xl uppercase tracking-wide md:w-5/12 md:text-5xl"
    >
      <h1 class="mb-2 text-main-white">
        {{ props.aboutData.heading }}
      </h1>
      <h2 class="mb-8 text-main-blue">{{ props.aboutData.subheading }}</h2>
      <CallToActionButton :to="props.aboutData.button.buttonRoute"
        >{{ props.aboutData.button.buttonText }}
      </CallToActionButton>
    </div>
    <div
      class="homepageAboutSection__image h-[250px] w-[250px] overflow-hidden rounded-full md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"
    >
      <ResponsiveImage
        :imgSrc="props.aboutData.background.image[0]"
        :imgAlt="props.aboutData.background['image-alt']"
        :sourcesMap="[
          { assetWidth: 'max', media: '1440px' },
          { assetWidth: '1440', media: '1024px' },
          { assetWidth: '1024', media: '768px' },
          { assetWidth: '768', media: '425px' },
          { assetWidth: '425', media: '320px' }
        ]"
      />
      <ResponsiveImage
        :aboutSectionForegroundClass="'aboutSectionForeground'"
        :imgSrc="props.aboutData.foreground.image[0]"
        :imgAlt="props.aboutData.foreground['image-alt']"
        :sourcesMap="[
          { assetWidth: 'max', media: '1440px' },
          { assetWidth: '1440', media: '1024px' },
          { assetWidth: '1024', media: '768px' },
          { assetWidth: '768', media: '425px' },
          { assetWidth: '425', media: '320px' }
        ]"
      />
    </div>
  </section>
</template>
