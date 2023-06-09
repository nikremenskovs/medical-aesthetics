<script setup>
import { inject } from 'vue'
import { usePricesPageStore } from '@/stores/PricesPageStore.js'

const showNavbar = inject('showNavbar')

const pricesPageStore = usePricesPageStore()
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
        class="prices-banner-nav__list--container flex h-auto min-w-full flex-nowrap space-x-2 p-4"
      >
        <li
          v-for="(section, index) in pricesPageStore.products.pricesProductsSections"
          :key="index"
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
