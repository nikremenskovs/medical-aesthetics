<script setup>
import SelectLanguageDropdown from '@/components/shared/SelectLanguageDropdown.vue'
import { ref } from 'vue'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()

const mobileNav = ref(null)

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? `tel:${topLevelStore.navbar.contactNumber}`
    : undefined
</script>

<template>
  <nav
    class="nav fixed z-50 flex w-full flex-col transition-[height] duration-[1000ms] ease-out"
    :class="
      mobileNav
        ? 'h-screen bg-gradient-to-b from-main-white/75 to-transparent'
        : 'h-28 justify-center border-b-[1px] border-main-blue bg-main-white/75'
    "
  >
    <div class="nav--container flex flex-wrap justify-between px-4 md:justify-center">
      <router-link
        :to="{ name: 'home' }"
        class="nav__logo transition duration-[1000ms] ease-out md:order-2 md:mx-4 md:w-1/12 md:hover:scale-110 lg:m-0 lg:w-2/12"
        @click="mobileNav = false"
      >
        <img
          class="mx-auto h-16 max-h-20 xl:h-24"
          :src="topLevelStore.navbar.navbarLogo.image[0]"
          :alt="topLevelStore.navbar.navbarLogo['image-alt']"
        />
      </router-link>
      <div
        class="nav__links my-auto flex justify-end space-x-4 text-2xl text-main-blue sm:space-x-8 md:order-3 md:w-5/12 md:justify-start md:space-x-10 lg:text-2xl"
      >
        <SelectLanguageDropdown />
        <a
          href="https://www.facebook.com/"
          target="_blank"
          class="transition duration-[1000ms] ease-out md:hover:scale-125 md:hover:text-hover-blue"
        >
          <i class="fa-brands fa-facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="transition duration-[1000ms] ease-out md:hover:scale-125 md:hover:text-hover-blue"
        >
          <i class="fa-brands fa-instagram" />
        </a>
        <a
          :href="isMobile()"
          target="_blank"
          class="transition duration-[1000ms] ease-out md:hover:scale-110 md:hover:text-hover-blue"
        >
          <i class="fa-solid fa-phone-volume"
            ><span
              class="ml-1 hidden align-middle font-marmelad text-sm font-bold lg:inline-block"
              >{{ topLevelStore.navbar.contactNumber }}</span
            ></i
          >
        </a>
        <button @click="mobileNav = !mobileNav">
          <i
            class="fas fa-bars transition duration-[1000ms] ease-out md:hidden"
            :class="mobileNav ? 'rotate-180 transform' : ''"
          />
        </button>
      </div>
      <div class="w-full items-center md:order-1 md:flex md:w-5/12 md:justify-end">
        <ul
          class="mt-4 flex-col whitespace-nowrap rounded-lg text-center font-marmelad font-bold uppercase text-main-blue md:mt-0 md:flex md:flex-row md:space-x-2 md:p-0 md:text-xs lg:space-x-6 xl:text-base"
          :class="mobileNav ? 'flex' : 'hidden'"
        >
          <li
            class="py-2 md:p-0"
            v-for="(title, index) in topLevelStore.navbar.navTitles"
            :key="index"
          >
            <router-link
              class="border-b-2 border-transparent transition duration-[1000ms] ease-out md:hover:border-hover-blue md:hover:text-hover-blue"
              :to="title.buttonRoute"
              @click="mobileNav = false"
              :exact-active-class="'text-hover-blue border-b-hover-blue'"
            >
              {{ title.buttonText }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
