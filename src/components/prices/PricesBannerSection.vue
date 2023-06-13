<script setup>
import { inject } from 'vue'
import { usePricesPageStore } from '@/stores/PricesPageStore.js'
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useWindowSize, useEventListener } from '@vueuse/core'

const { width } = useWindowSize()

let windowWidth = ref(width)

gsap.registerPlugin(ScrollTrigger)

const showNavbar = inject('showNavbar')
const pricesPageStore = usePricesPageStore()

const pricesListItem = ref(null)

const pricesBannerNavScrollAnimation = (index, widthsTotal) => {
  const pricesBannerNavScrollAnimationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.prices-products-section${index}`,
      start: 'top center',
      toggleActions: 'play none none reverse',
      markers: true
    }
  })
  let x = 0
  for (let i = 0; i < index; i++) {
    x -= pricesListItem.value[i].clientWidth
  }
  let animate = ref(true)

  animate = widthsTotal + x > width.value - 150
  pricesBannerNavScrollAnimationTimeline.to(
    '.prices-banner-nav__list--container',
    {
      onStart: () => {
        if (animate) {
          pricesBannerNavScrollAnimationTimeline.to(
            '.prices-banner-nav__list--container',
            {
              x
            },
            0
          )
        }
        document.querySelector(`.prices-banner-nav__list-item${index}`).style.backgroundColor =
          '#457B9D'

        document.querySelector(`.prices-banner-nav__list-item${index}`).style.color = '#F1FAEE'
        if (index === 0) {
          return
        }
        document.querySelector(`.prices-banner-nav__list-item${index - 1}`).style.backgroundColor =
          ''
        document.querySelector(`.prices-banner-nav__list-item${index - 1}`).style.color = ''
      },
      onReverseComplete: () => {
        document.querySelector(`.prices-banner-nav__list-item${index}`).style.backgroundColor = ''
        document.querySelector(`.prices-banner-nav__list-item${index}`).style.color = ''
        if (index === 0) {
          return
        }
        document.querySelector(`.prices-banner-nav__list-item${index - 1}`).style.backgroundColor =
          '#457B9D'
        document.querySelector(`.prices-banner-nav__list-item${index - 1}`).style.color = '#F1FAEE'
      }
    },
    0
  )
}

onMounted(() => {
  const itemWidths = pricesListItem.value.map((item) => item.clientWidth)
  const widthsTotal = itemWidths.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  pricesPageStore.products.pricesProductsSections.forEach((section, index) => {
    pricesBannerNavScrollAnimation(index, widthsTotal)
  })

  useEventListener(window, 'resize', (e) => {
    console.log(e)
    gsap.to('.prices-banner-nav__list--container', { x: 0 })
    ScrollTrigger.killAll()
    windowWidth = e.currentTarget.innerWidth
    pricesPageStore.products.pricesProductsSections.forEach((section, index) => {
      pricesBannerNavScrollAnimation(index, widthsTotal)
      document.querySelector(`.prices-banner-nav__list-item${index}`).style.backgroundColor = ''
      document.querySelector(`.prices-banner-nav__list-item${index}`).style.color = ''
    })
  })
})

onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <section class="prices-banner fixed w-full" :class="showNavbar ? 'h-72' : 'h-36'">
    <img
      :src="pricesPageStore.banner.pricesBannerBackground.image"
      :alt="pricesPageStore.banner.pricesBannerBackground['image-alt']"
      class="prices-banner__image h-56 w-full transform object-cover transition duration-500"
      :class="showNavbar ? '' : '-translate-y-56'"
    />

    <div
      class="prices-banner-nav flex h-36 w-full transform flex-col justify-between rounded-lg border-[1px] border-main-blue/25 py-4 shadow-lg backdrop-blur-lg transition duration-500"
      :class="showNavbar ? '-translate-y-20' : '-translate-y-56'"
    >
      <h1
        class="prices-banner-nav__title mx-auto text-center font-yeseva-one text-3xl uppercase text-main-blue"
      >
        {{ pricesPageStore.banner.pricesBannerTitle }}
      </h1>
      <ul
        class="prices-banner-nav__list--container flex h-auto min-w-full flex-nowrap justify-between p-4"
      >
        <li
          v-for="(section, index) in pricesPageStore.products.pricesProductsSections"
          :key="index"
          ref="pricesListItem"
          class="max-w-[200px]"
        >
          <router-link
            :to="`/prices#prices-products-section${index}`"
            :class="`prices-banner-nav__list-item${index}`"
            class="h-auto whitespace-nowrap rounded-full bg-transparent px-4 py-2 font-marmelad text-sm font-bold uppercase tracking-wider text-main-blue transition duration-[500ms] ease-out md:text-lg md:tracking-widest md:hover:bg-hover-blue md:hover:text-main-white"
            >{{ section.pricesProductsSectionTitle }}</router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>
