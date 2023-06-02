<script setup>
import AboutStickyBanner from '@/components/about/AboutStickyBanner.vue'
import AboutContent from '../components/about/AboutContent.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAboutPageStore } from '@/stores/AboutPageStore.js'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()
const selectedLanguage = computed(() => topLevelStore.selectedLanguage)
const aboutPageStore = useAboutPageStore()
const route = useRoute()
const router = useRouter()
try {
  await aboutPageStore.getAboutPageData(route.query.preview, selectedLanguage.value)
} catch {
  router.push('/badCall')
}
</script>

<template>
  <AboutStickyBanner>
    <AboutContent />
  </AboutStickyBanner>
</template>
