<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'
import { useHomepageStore } from '@/stores/HomepageStore.js'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const topLevelStore = useTopLevelStore()
const homepageStore = useHomepageStore()

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
    homepageStore.getHomepageData(route.query.preview, language)
    topLevelStore.getTopLevelData(route.query.preview, language)
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
    <div class="flex items-center cursor-pointer" @click="dropdownOpen = !dropdownOpen">
      <img
        :src="getImageSrc(topLevelStore.selectedLanguage)"
        :alt="topLevelStore.selectedLanguage"
        class="w-8 h-8 inline-block mr-2"
      />
      <i class="fa-solid fa-caret-down text-main-blue" />
    </div>
    <ul v-if="dropdownOpen" class="absolute mt-1 bg-main-white/50 rounded-lg shadow-lg">
      <li
        v-for="option in options"
        :key="option.value"
        class="flex items-center p-2 md:hover:bg-hover-blue cursor-pointer"
        @click="selectOption(option.value)"
      >
        <img
          :src="getImageSrc(option.value)"
          :alt="option.value"
          class="w-8 h-8 inline-block mr-2"
        />
        <p class="font-marmelad text-lg tracking-widest">{{ option.text }}</p>
      </li>
    </ul>
  </div>
</template>
