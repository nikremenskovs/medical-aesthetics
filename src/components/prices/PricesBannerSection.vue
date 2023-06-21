<script setup>
import { inject } from 'vue'
import { usePricesPageStore } from '@/stores/PricesPageStore.js'

const pricesPageStore = usePricesPageStore()
const showNavbar = inject('showNavbar')
</script>

<template>
  <section class="prices-banner fixed z-10 w-full">
    <img
      :src="pricesPageStore.banner.pricesBannerBackground.image"
      :alt="pricesPageStore.banner.pricesBannerBackground['image-alt']"
      class="prices-banner__image h-48 w-full transform object-cover transition duration-500"
      :class="showNavbar ? '' : '-translate-y-48 lg:-translate-y-28'"
    />
  </section>
</template>
