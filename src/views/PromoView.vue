<script setup>
import PromoBannerSection from '@/components/promo/PromoBannerSection.vue'
import PromoCard from '@/components/promo/PromoCard.vue'
</script>

<template>
  <section class="promo relative w-full">
    <div class="promo--sticky sticky top-0 h-full w-full">
      <PromoBannerSection />
      <PromoCard />
    </div>
  </section>
</template>
