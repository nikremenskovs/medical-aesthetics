<script setup>
import PricesBannerSection from '@/components/prices/PricesBannerSection.vue'
import PricesProducts from '@/components/prices/PricesProducts.vue'

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

  <!-- <div
    class="sticky bottom-0 h-12 w-full rounded-lg border-[1px] border-main-blue/25 py-4 shadow-lg backdrop-blur-lg"
  >
    <h1 class="mx-auto font-yeseva-one text-xl uppercase text-main-blue">Price summary</h1>
  </div> -->
</template>
