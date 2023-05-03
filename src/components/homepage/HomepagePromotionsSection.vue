<script setup>
import Carousel from '@/components/shared/Carousel.vue'
import CarouselSlide from '@/components/shared/CarouselSlide.vue'


const homepageCarouselSlides = ['Slide1', 'Slide2', 'Slide3']

</script>

<template>
    <section class="mb-12 h-auto">
        <Carousel :navigation="true" :pagination="true" :timeout="10000" :startAutoPlay="false"
            class="relative max-h-screen h-[50vh] w-full lg:h-[70vh]" v-slot="{ currentSlide }">
            <CarouselSlide v-for="(slide, index) in homepageCarouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info absolute top-0 left-0 w-full max-h-full h-full">
                    <img :src="`./src/assets/images/${slide}.jpg`" class="min-w-full h-full object-cover">
                </div>
            </CarouselSlide>
        </Carousel>
    </section>
</template>