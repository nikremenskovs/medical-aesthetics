<script setup>
import { inject } from 'vue'
import { usePricesPageStore } from '@/stores/PricesPageStore.js'
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEventListener } from '@vueuse/core'
import { debounce } from 'lodash'
import { useRouter } from 'vue-router'
import { usePointerSwipe } from '@vueuse/core'

const router = useRouter()
gsap.registerPlugin(ScrollTrigger)
const pricesPageStore = usePricesPageStore()
const showNavbar = inject('showNavbar')

const pricesBannerNav = ref()
const pricesNavItems = ref([])
const pricesNavItemsContainer = ref(null)

let animatePricesNav = ref(true)

let currentX = ref(-1)

const initiatePricesNavAnimations = () => {
  const itemWidths = pricesNavItems.value.map((item) => item.clientWidth)
  const widthsTotal = itemWidths.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  pricesPageStore.products.pricesProductsSections.forEach((section, index) => {
    document.querySelector(`.prices-banner-nav__list-item${index}`).style.backgroundColor = ''
    document.querySelector(`.prices-banner-nav__list-item${index}`).style.color = ''
    pricesBannerNavScrollAnimation(index, itemWidths, widthsTotal)
  })
}

const pricesBannerNavScrollAnimation = (index, itemWidths, widthsTotal) => {
  const pricesBannerNavScrollAnimationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.prices-products-section${index}`,
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  })
  const xValue = itemWidths[index - 1]
  animatePricesNav = widthsTotal > pricesNavItemsContainer.value.clientWidth
  if (animatePricesNav) {
    pricesBannerNavScrollAnimationTimeline.to(
      '.prices-banner-nav__list--container',
      {
        x: () => `-= ${xValue}`,
        onComplete: () => {
          currentX = gsap.getProperty('.prices-banner-nav__list--container', 'x')
        },
        onReverseComplete: () => {
          currentX = gsap.getProperty('.prices-banner-nav__list--container', 'x')
        }
      },
      0
    )
  }

  pricesBannerNavScrollAnimationTimeline.to(
    '.prices-banner-nav__list--container',
    {
      onStart: () => {
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
console.log(usePointerSwipe())
const { distanceX, direction } = usePointerSwipe(pricesBannerNav, {
  onSwipe() {
    if (currentX >= 0 && direction.value === 'right') {
      return
    } else {
      const newTranslateX = -distanceX.value + currentX
      if (newTranslateX >= 0) {
        return
      }
      document.querySelector('.prices-banner-nav__list--container').style.transform = `translate(${
        -distanceX.value + currentX
      }px, 0)`
      console.log(newTranslateX)
    }
  },
  onSwipeEnd() {
    if (currentX >= 0 && direction.value === 'right') {
      return
    } else {
      const newTranslateX = -distanceX.value + currentX
      if (newTranslateX >= 0) {
        return
      }
      currentX = newTranslateX
    }
  }
})

onMounted(() => {
  initiatePricesNavAnimations()
  const itemWidths = pricesNavItems.value.map((item) => item.clientWidth)
  const widthsTotal = itemWidths.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  useEventListener(
    window,
    'resize',
    debounce((e) => {
      if (widthsTotal < e.currentTarget.innerWidth) {
        ScrollTrigger.killAll()
        gsap.set('.prices-banner-nav__list--container', { x: 0 })
        initiatePricesNavAnimations()
      } else {
        ScrollTrigger.killAll()
        router.push({ path: '/prices' })
        gsap.set('.prices-banner-nav__list--container', { x: 0 })
        initiatePricesNavAnimations()
      }
    }, 180)
  )
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
      ref="pricesBannerNav"
    >
      <h1
        class="prices-banner-nav__title px-4 text-start font-yeseva-one text-3xl uppercase text-main-blue"
      >
        {{ pricesPageStore.banner.pricesBannerTitle }}
      </h1>
      <ul
        class="prices-banner-nav__list--container flex h-auto min-w-full translate-x-0 flex-nowrap justify-between p-4"
        ref="pricesNavItemsContainer"
      >
        <li
          v-for="(section, index) in pricesPageStore.products.pricesProductsSections"
          :key="index"
          :ref="(el) => (pricesNavItems[index] = el)"
        >
          <router-link
            :to="`/prices#prices-products-section${index}`"
            :class="`prices-banner-nav__list-item${index}`"
            class="h-auto whitespace-nowrap rounded-full bg-transparent px-4 py-2 font-marmelad text-sm font-bold uppercase tracking-wider text-main-blue transition duration-[500ms] ease-out md:hover:bg-hover-blue md:hover:text-main-white"
            >{{ section.pricesProductsSectionTitle }}</router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>
