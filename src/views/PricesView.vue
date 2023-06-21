<script setup>
import PricesBannerSection from '@/components/prices/PricesBannerSection.vue'
import PricesProducts from '@/components/prices/PricesProducts.vue'
import PricesSummary from '@/components/prices/PricesSummary.vue'

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePricesPageStore } from '@/stores/PricesPageStore.js'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()
const selectedLanguage = computed(() => topLevelStore.selectedLanguage)
const pricesPageStore = usePricesPageStore()
const route = useRoute()
const router = useRouter()
try {
  await pricesPageStore.getPricesPageData(route.query.preview, selectedLanguage.value)
} catch {
  router.push('/badCall')
}
</script>

<template>
  <PricesBannerSection />
  <PricesProducts />
  <PricesSummary />
</template>
