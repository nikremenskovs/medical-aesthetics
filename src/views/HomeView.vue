<script setup>
import HomepageBannerSection from '@/components/homepage/HomepageBannerSection.vue'
import HomepageCardsSection from '@/components/homepage/HomepageCardsSection.vue'
import HomepageAboutSection from '@/components/homepage/HomepageAboutSection.vue'
import HomepagePromotionsSection from '@/components/homepage/HomepagePromotionsSection.vue'
import { computed } from 'vue'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

import { useRoute, useRouter } from 'vue-router'
import { useHomepageStore } from '@/stores/HomepageStore.js'
import { useTitle } from '@vueuse/core'
const topLevelStore = useTopLevelStore()
const selectedLanguage = computed(() => topLevelStore.selectedLanguage)

const homepageStore = useHomepageStore()
const route = useRoute()
const router = useRouter()

const title = computed(() => homepageStore.tabTitle)
useTitle(title)

try {
  await homepageStore.getHomepageData(route.query.preview, selectedLanguage.value)
} catch {
  router.push('/badCall')
}
</script>

<template>
  <HomepageBannerSection :bannerData="homepageStore.banner" />
  <HomepagePromotionsSection :promotionsData="homepageStore.promotions" />
  <HomepageCardsSection :treatmentsData="homepageStore.treatments" />
  <HomepageAboutSection :aboutData="homepageStore.about" />
</template>
