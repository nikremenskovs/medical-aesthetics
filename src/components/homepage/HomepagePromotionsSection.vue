<script setup>
import Carousel from '@/components/shared/Carousel.vue'
import CarouselSlide from '@/components/shared/CarouselSlide.vue'

const props = defineProps({
    promotionsDataLV: { type: Object, required: true },
    promotionsDataEN: { type: Object, required: true },
    promotionsDataRU: { type: Object, required: true },
});

const homepageCarouselSlides = ['Slide1', 'Slide2', 'Slide3']
</script>

<template>
    <section class="mb-12 h-auto">
        <Carousel :navigation="true" :pagination="true" :startAutoPlay="true" :timeout="10000"
            :slideCount="props.promotionsDataLV.slides.length" class="relative max-h-screen h-[50vh] w-full lg:h-[70vh]"
            v-slot="{ currentSlide }">
            <CarouselSlide v-for="(slide, index) in props.promotionsDataLV.slides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info absolute top-0 left-0 w-full max-h-full h-full">
                    <div class="overlay absolute w-full h-full bg-main-white/50"></div>
                    <ResponsiveImage :imgSrc="slide.image.image[0]" :imgAlt="slide.image['image-alt']" :sourcesMap="[
                        { assetWidth: 'max', media: '1440px' },
                        { assetWidth: '1440', media: '1024px' },
                        { assetWidth: '1024', media: '768px' },
                        { assetWidth: '768', media: '425px' },
                        { assetWidth: '425', media: '320px' },
                    ]" />
                    <div
                        class="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-main-blue z-10">
                        <h1 class="font-yeseva-one text-4xl text-bold uppercase tracking-widest mb-4">{{ slide.heading }}
                        </h1>
                        <p class="font-marmelad text-xl tracking-wide font-bold mb-8">{{ slide.subheading }}</p>
                        <CallToActionButton :to="slide.button.buttonRoute">{{ slide.button.buttonText }}
                        </CallToActionButton>
                    </div>
                </div>
            </CarouselSlide>
        </Carousel>
    </section>
</template>