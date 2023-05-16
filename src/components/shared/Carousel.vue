<script setup>
import { ref, defineProps } from 'vue'
import { useSwipe } from '@vueuse/core'

const props = defineProps({
    startAutoPlay: { type: Boolean, required: true },
    timeout: { type: Number, required: false, default: 5000 },
    navigation: { type: Boolean, required: true },
    pagination: { type: Boolean, required: true },
    slideCount: { type: Number, required: true }
});

const currentSlide = ref(1)

const nextSlide = () => currentSlide.value === props.slideCount ? currentSlide.value = 1 : currentSlide.value += 1;
const previousSlide = () => currentSlide.value === 1 ? currentSlide.value = props.slideCount : currentSlide.value -= 1
const goToSlide = (index) => currentSlide.value = index + 1


const autoPlay = () => {
    setInterval(() => {
        nextSlide()
    }, props.timeout)
}

if (props.startAutoPlay) {
    autoPlay()
}

const swipeTarget = ref()

const { lengthX } = useSwipe(
    swipeTarget, {
    passive: true,
    onSwipeEnd() {
        if (lengthX.value < 0) {
            previousSlide()
        } else if (lengthX.value > 0) {
            nextSlide()
        }
    },
})

</script>

<template>
    <div class="carousel" ref="swipeTarget">
        <slot :currentSlide="currentSlide" />

        <div v-if="props.navigation"
            class="navigate px-8 w-full h-full absolute flex justify-center items-center md:px-10 lg:px-12">
            <button class="toggle-page left flex flex-1" @click="previousSlide">
                <i
                    class="fas fa-chevron-left cursor-pointer flex items-center justify-center rounded-full w-10 h-10 bg-hover-blue text-main-white md:hover:animate-hoverPulse"></i>
            </button>
            <button class="toggle-page right flex flex-1 justify-end" @click="nextSlide">
                <i
                    class="fas fa-chevron-right cursor-pointer flex items-center justify-center rounded-[50%] w-10 h-10 bg-hover-blue text-main-white md:hover:animate-hoverPulse"></i>
            </button>
        </div>

        <div v-if="props.pagination" class="pagination absolute bottom-6 w-full flex justify-center items-center gap-4">
            <span v-for="(slide, index) in props.slideCount" :key="index"
                class="cursor-pointer w-5 h-5 rounded-full bg-hover-blue md:hover:animate-hoverPulse shadow-xl"
                :class="index + 1 === currentSlide ? 'bg-main-blue' : 'bg-hover-blue'" @click="goToSlide(index)" />
        </div>
    </div>
</template>