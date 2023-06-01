<script setup>
import PromoBannerSection from '@/components/promo/PromoBannerSection.vue'
import PromoCard from '@/components/promo/PromoCard.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePromoPageStore } from '@/stores/PromoPageStore.js'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()
const selectedLanguage = computed(() => topLevelStore.selectedLanguage)
const promoPageStore = usePromoPageStore()
const route = useRoute()
const router = useRouter()
try {
  await promoPageStore.getPromoPageData(route.query.preview, selectedLanguage.value)
} catch {
  router.push('/badCall')
}
</script>

<template>
  <section class="promo relative w-full">
    <div class="promo--sticky sticky top-0 h-full w-full">
      <PromoBannerSection />
      <PromoCard />
    </div>
  </section>
</template>
