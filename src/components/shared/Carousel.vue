<script setup>
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
    startAutoPlay: { type: Boolean, required: true },
    timeout: { type: Number, required: true },
    navigation: { type: Boolean, required: true },
    pagination: { type: Boolean, required: true },
});

const currentSlide = ref(1)
const getSlideCount = ref(null)
const autoPlayEnabled = ref(props.startAutoPlay === undefined ? true : props.startAutoPlay)
const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout)
const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination)
const navigationEnabled = ref(props.navigation === undefined ? true : props.navigation)

const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
        return
    }
    currentSlide.value += 1
}

const previousSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value
        return
    }
    currentSlide.value -= 1
}

const goToSlide = (index) => {
    currentSlide.value = index + 1
}

const autoPlay = () => {
    setInterval(() => {
        nextSlide()
    }, timeoutDuration.value)
}

if (autoPlayEnabled.value) {
    autoPlay()
}


onMounted(() => {
    getSlideCount.value = document.querySelectorAll(".slide").length
})
</script>

<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

        <div v-if="navigationEnabled" class="navigate px-4 w-full h-full absolute flex justify-center items-center">
            <div class="toggle-page left flex flex-1">
                <i @click="previousSlide"
                    class="fas fa-chevron-left cursor-pointer flex items-center justify-center rounded-full w-10 h-10 bg-hover-blue text-main-white md:hover:animate-hoverPulse"></i>
            </div>
            <div class="toggle-page right flex flex-1 justify-end">
                <i @click="nextSlide"
                    class="fas fa-chevron-right cursor-pointer flex items-center justify-center rounded-[50%] w-10 h-10 bg-hover-blue text-main-white md:hover:animate-hoverPulse"></i>
            </div>
        </div>

        <div v-if="paginationEnabled" class="pagination absolute bottom-6 w-full flex justify-center items-center gap-4">
            <span v-for="(slide, index) in getSlideCount" :key="index"
                class="cursor-pointer w-5 h-5 rounded-full bg-hover-blue md:hover:animate-hoverPulse
                                                                                                                                    shadow-xl"
                :class="index + 1 === currentSlide ? 'bg-main-blue' : 'bg-hover-blue'" @click="goToSlide(index)" />
        </div>
    </div>
</template>