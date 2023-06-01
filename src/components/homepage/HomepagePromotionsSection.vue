<script setup>
import Carousel from '@/components/shared/Carousel.vue'
import CarouselSlide from '@/components/shared/CarouselSlide.vue'

import { computed } from 'vue'

const props = defineProps({
  promotionsData: { type: Object, required: true }
})

const isMobile = computed(() =>
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
)
</script>

<template>
  <section class="mb-12 h-auto">
    <Carousel
      :navigation="!isMobile"
      :pagination="true"
      :startAutoPlay="true"
      :timeout="10000"
      :slideCount="props.promotionsData.slides.length"
      class="relative h-[70vh] w-full lg:h-[60vh]"
      v-slot="{ currentSlide }"
    >
      <CarouselSlide v-for="(slide, index) in props.promotionsData.slides" :key="index">
        <div
          v-show="currentSlide === index + 1"
          class="slide-info absolute left-0 top-0 h-full max-h-full w-full"
        >
          <div class="overlay absolute h-full w-full bg-main-white/50" />
          <ResponsiveImage
            :imgSrc="slide.image.image[0]"
            :imgAlt="slide.image['image-alt']"
            :sourcesMap="[
              { assetWidth: 'max', media: '1440px' },
              { assetWidth: '1440', media: '1024px' },
              { assetWidth: '1024', media: '768px' },
              { assetWidth: '768', media: '425px' },
              { assetWidth: '425', media: '320px' }
            ]"
          />
          <div
            class="text absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center text-main-blue sm:w-auto"
          >
            <h1 class="text-bold mb-4 font-yeseva-one text-4xl uppercase tracking-widest">
              {{ slide.heading }}
            </h1>
            <p class="mb-8 font-marmelad text-xl font-bold tracking-wide">{{ slide.subheading }}</p>
            <CallToActionButton :to="slide.button.buttonRoute"
              >{{ slide.button.buttonText }}
            </CallToActionButton>
          </div>
        </div>
      </CarouselSlide>
    </Carousel>
  </section>
</template>
