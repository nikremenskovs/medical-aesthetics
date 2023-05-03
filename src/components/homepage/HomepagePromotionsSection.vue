<script setup>
import Carousel from '@/components/shared/Carousel.vue'
import CarouselSlide from '@/components/shared/CarouselSlide.vue'


const homepageCarouselSlides = ['Slide1', 'Slide2', 'Slide3']

</script>

<template>
    <section class="mb-12 h-auto">
        <Carousel :navigation="true" :pagination="true" :startAutoPlay="true" :timeout="10000"
            :slideCount="homepageCarouselSlides.length" class="relative max-h-screen h-[50vh] w-full lg:h-[70vh]"
            v-slot="{ currentSlide }">
            <CarouselSlide v-for="(slide, index) in homepageCarouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info absolute top-0 left-0 w-full max-h-full h-full">
                    <div class="overlay absolute w-full h-full bg-main-white/50"></div>
                    <img :src="`./src/assets/images/${slide}.jpg`" class="min-w-full h-full object-cover">
                    <div
                        class="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-main-blue z-10">
                        <h1 class="font-yeseva-one text-4xl text-bold uppercase tracking-widest mb-4">
                            pavasara brinums</h1>
                        <p class="font-marmelad text-xl tracking-wide font-bold mb-8">Naciet kopa ar savu sievu un iedzeriet
                            alinu kamer gaidat</p>
                        <button
                            class="h-12 w-auto px-4 bg-transparent border-2 border-main-blue rounded-full text-main-blue font-yeseva-one uppercase text-sm font-bold tracking-wider md:text-lg md:tracking-widest md:hover:bg-main-blue md:hover:text-main-white ">
                            snabiti ari piedavajam
                        </button>
                    </div>
                </div>
            </CarouselSlide>
        </Carousel>
    </section>
</template>