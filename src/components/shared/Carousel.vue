<script setup>
import { ref } from 'vue'
import { useSwipe } from '@vueuse/core'

const props = defineProps({
  startAutoPlay: { type: Boolean, required: true },
  timeout: { type: Number, required: false, default: 5000 },
  navigation: { type: Boolean, required: true },
  pagination: { type: Boolean, required: true },
  slideCount: { type: Number, required: true }
})

const currentSlide = ref(1)

const nextSlide = () =>
  currentSlide.value === props.slideCount ? (currentSlide.value = 1) : (currentSlide.value += 1)
const previousSlide = () =>
  currentSlide.value === 1 ? (currentSlide.value = props.slideCount) : (currentSlide.value -= 1)
const goToSlide = (index) => (currentSlide.value = index + 1)

const autoPlay = () => {
  setInterval(() => {
    nextSlide()
  }, props.timeout)
}

if (props.startAutoPlay) {
  autoPlay()
}

const swipeTarget = ref()

const { lengthX } = useSwipe(swipeTarget, {
  passive: true,
  onSwipeEnd() {
    if (lengthX.value < 0) {
      previousSlide()
    } else if (lengthX.value > 0) {
      nextSlide()
    }
  }
})
</script>

<template>
  <div class="carousel" ref="swipeTarget">
    <slot :currentSlide="currentSlide" />

    <div
      v-if="props.navigation"
      class="navigate absolute hidden h-full w-full items-center justify-center px-8 sm:flex md:px-10 lg:px-12"
    >
      <button class="toggle-page left flex flex-1" @click="previousSlide">
        <i
          class="fas fa-chevron-left flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hover-blue text-main-white md:hover:animate-hoverPulse"
        ></i>
      </button>
      <button class="toggle-page right flex flex-1 justify-end" @click="nextSlide">
        <i
          class="fas fa-chevron-right flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"
        ></i>
      </button>
    </div>

    <div
      v-if="props.pagination"
      class="pagination absolute bottom-6 flex w-full items-center justify-center gap-4"
    >
      <span
        v-for="(slide, index) in props.slideCount"
        :key="index"
        class="h-5 w-5 cursor-pointer rounded-full bg-hover-blue shadow-xl md:hover:animate-hoverPulse"
        :class="index + 1 === currentSlide ? 'bg-main-blue' : 'bg-hover-blue'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>
