<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'
import { useHomepageStore } from '@/stores/HomepageStore.js'
import { useAboutPageStore } from '@/stores/AboutPageStore.js'
import { usePricesPageStore } from '@/stores/PricesPageStore.js'
import { usePromoPageStore } from '@/stores/PromoPageStore.js'
import { useContactsPageStore } from '@/stores/ContactsPageStore.js'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const topLevelStore = useTopLevelStore()
const homepageStore = useHomepageStore()
const promoPageStore = usePromoPageStore()
const contactsPageStore = useContactsPageStore()
const aboutPageStore = useAboutPageStore()
const pricesPageStore = usePricesPageStore()

const dropdownElement = ref()
const dropdownOpen = ref()
const options = [
  { value: 'lv', text: 'Latviešu' },
  { value: 'en', text: 'English' },
  { value: 'ru', text: 'Русский' }
]

const selectOption = (language) => {
  topLevelStore.selectLanguageOption(language)
  localStorage.setItem('selectedLanguage', language)
  try {
    topLevelStore.getTopLevelData(route.query.preview, language)
    homepageStore.getHomepageData(route.query.preview, language)
    promoPageStore.getPromoPageData(route.query.preview, language)
    contactsPageStore.getContactsPageData(route.query.preview, language)
    aboutPageStore.getAboutPageData(route.query.preview, language)
    pricesPageStore.getPricesPageData(route.query.preview, language)
  } catch {
    router.push('/badCall')
  }

  dropdownOpen.value = false
}

const getImageSrc = (optionValue) => {
  switch (optionValue) {
    case 'lv':
      return topLevelStore.navbar.languageFlags[0].image[0]
    case 'en':
      return topLevelStore.navbar.languageFlags[1].image[0]
    case 'ru':
      return topLevelStore.navbar.languageFlags[2].image[0]
    default:
      return ''
  }
}

onClickOutside(dropdownElement, () => {
  dropdownOpen.value = false
})
</script>

<template>
  <div ref="dropdownElement">
    <div class="flex cursor-pointer items-center" @click="dropdownOpen = !dropdownOpen">
      <img
        :src="getImageSrc(topLevelStore.selectedLanguage)"
        :alt="topLevelStore.selectedLanguage"
        class="mr-2 inline-block h-8 w-8"
      />
      <i class="fa-solid fa-caret-down text-main-blue" />
    </div>
    <ul v-if="dropdownOpen" class="absolute mt-1 rounded-lg bg-main-white/50 shadow-lg">
      <li
        v-for="option in options"
        :key="option.value"
        class="flex cursor-pointer items-center p-2 md:hover:bg-hover-blue"
        @click="selectOption(option.value)"
      >
        <img
          :src="getImageSrc(option.value)"
          :alt="option.value"
          class="mr-2 inline-block h-8 w-8"
        />
        <p class="font-marmelad text-lg tracking-widest">{{ option.text }}</p>
      </li>
    </ul>
  </div>
</template>
