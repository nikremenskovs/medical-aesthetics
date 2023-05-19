<script setup>
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? `tel:${topLevelStore.navbar.contactNumber}`
    : undefined
</script>

<template>
  <div
    class="h-auto w-full border-t-[1px] border-main-blue bg-hover-blue px-4 py-8 text-main-white"
  >
    <div class="mb-4">
      <h1 class="mb-4 font-yeseva-one text-2xl uppercase tracking-wide md:mb-12 md:text-center">
        {{ topLevelStore.footer.mainHeading }}
      </h1>
      <div class="mb-4 md:flex md:space-x-6">
        <div
          class="mb-8 pr-6 md:border-r-2 md:border-main-white/50"
          v-for="(section, index) in topLevelStore.footer.sections"
          :key="index"
        >
          <h2 class="mb-2 font-marmelad text-xl capitalize tracking-wider">
            {{ section.heading }}
          </h2>
          <p class="font-marmelad">{{ section.text }}</p>
        </div>
      </div>
    </div>
    <div
      class="mt-12 flex flex-col items-center justify-center border-t-[1px] border-main-white/50 text-main-blue md:flex-row md:justify-between"
    >
      <router-link class="mb-2 flex items-center pt-4" :to="{ name: 'home' }">
        <img src="@/assets/images/logoCrop.png" class="mr-2 h-8 lg:h-10 xl:h-12" alt="" />
        <p class="font-yeseva-one text-xs uppercase">AK Beauty Room</p>
      </router-link>
      <div class="mb-2 space-x-6 text-xl">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          class="transition duration-[1000ms] ease-out md:hover:text-main-white"
        >
          <i class="fa-brands fa-facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="transition duration-[1000ms] ease-out md:hover:text-main-white"
        >
          <i class="fa-brands fa-instagram" />
        </a>
        <a
          :href="isMobile()"
          class="transition duration-[1000ms] ease-out md:hover:text-main-white"
        >
          <i class="fa-solid fa-phone-volume"
            ><span
              class="ml-1 hidden align-middle font-marmelad text-sm font-bold sm:inline-block"
              >{{ topLevelStore.navbar.contactNumber }}</span
            ></i
          >
        </a>
      </div>
      <p>© 2023 All rights reserved</p>
    </div>
  </div>
</template>
