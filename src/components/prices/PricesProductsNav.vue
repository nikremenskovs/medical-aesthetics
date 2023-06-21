<script setup>
import { inject } from 'vue'
import { usePricesPageStore } from '@/stores/PricesPageStore.js'
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEventListener } from '@vueuse/core'
import { debounce } from 'lodash'
import { useRouter } from 'vue-router'
import { usePointerSwipe } from '@vueuse/core'
const isMobile = computed(() =>
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
)

const router = useRouter()
gsap.registerPlugin(ScrollTrigger)
const pricesPageStore = usePricesPageStore()
const showNavbar = inject('showNavbar')

const pricesBannerNav = ref()
const pricesNavItems = ref([])
const pricesNavItemsContainer = ref(null)

let animatePricesNav = ref(true)

let currentX = ref(-1)

let swipeStop = null

const calculateWidths = () => {
  const itemWidths = pricesNavItems.value.map((item) => item.clientWidth)
  const widthsTotal = itemWidths.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  const lastItemWidth = itemWidths.slice(-1)

  return { itemWidths, widthsTotal, lastItemWidth }
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

const initiatePricesNavAnimations = () => {
  const { itemWidths, widthsTotal } = calculateWidths()
  pricesPageStore.products.pricesProductsSections.forEach((section, index) => {
    document.querySelector(`.prices-banner-nav__list-item${index}`).style.backgroundColor = ''
    document.querySelector(`.prices-banner-nav__list-item${index}`).style.color = ''
    pricesBannerNavScrollAnimation(index, itemWidths, widthsTotal)
  })
}

const initiatePricesNavDraggable = () => {
  const { widthsTotal } = calculateWidths()
  animatePricesNav = widthsTotal > pricesNavItemsContainer.value.clientWidth
  if (animatePricesNav) {
    const { distanceX, direction, stop } = usePointerSwipe(pricesBannerNav, {
      onSwipe() {
        const { widthsTotal, lastItemWidth } = calculateWidths()
        if (currentX >= 0 && direction.value === 'right') {
          return
        } else {
          const newTranslateX = -distanceX.value + currentX
          if (newTranslateX >= 0 || newTranslateX < -(widthsTotal - lastItemWidth)) {
            return
          }
          document.querySelector(
            '.prices-banner-nav__list--container'
          ).style.transform = `translate(${-distanceX.value + currentX}px, 0)`
        }
      },
      onSwipeEnd() {
        const { widthsTotal, lastItemWidth } = calculateWidths()
        if (currentX >= 0 && direction.value === 'right') {
          return
        } else {
          const newTranslateX = -distanceX.value + currentX
          if (newTranslateX >= 0 || newTranslateX < -(widthsTotal - lastItemWidth)) {
            return
          }
          currentX = newTranslateX
        }
      }
    })
    swipeStop = stop
  }
}

onMounted(() => {
  initiatePricesNavAnimations()
  initiatePricesNavDraggable()

  if (!isMobile.value) {
    useEventListener(
      window,
      'resize',
      debounce((e) => {
        const { widthsTotal } = calculateWidths()
        ScrollTrigger.killAll()
        gsap.set('.prices-banner-nav__list--container', { x: 0 })
        if (widthsTotal > pricesNavItemsContainer.value.clientWidth) {
          router.push({ path: '/prices' })
          initiatePricesNavDraggable()
        }
        initiatePricesNavAnimations()
        swipeStop()
        initiatePricesNavDraggable()
      }, 180)
    )
  }
})

onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <div
    class="prices-banner-nav fixed z-20 flex h-36 w-full transform flex-col justify-between overflow-hidden rounded-lg border-[1px] border-main-blue/25 py-4 shadow-lg backdrop-blur-lg transition duration-500 lg:max-w-[500px]"
    :class="showNavbar ? 'translate-y-44' : 'lg:translate-y-44'"
    ref="pricesBannerNav"
  >
    <h1
      class="prices-banner-nav__title px-4 text-start font-yeseva-one text-3xl uppercase text-main-blue"
    >
      {{ pricesPageStore.banner.pricesBannerTitle }}
    </h1>
    <div class="prices-banner-nav--container">
      <ul
        class="prices-banner-nav__list--container flex h-auto translate-x-0 flex-nowrap justify-between p-4"
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
  </div>
</template>
