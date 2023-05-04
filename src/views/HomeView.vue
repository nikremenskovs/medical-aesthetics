<script setup>
import HomepageBannerSection from "@/components/homepage/HomepageBannerSection.vue";
import HomepageCardsSection from "@/components/homepage/HomepageCardsSection.vue";
import HomepageAboutSection from "@/components/homepage/HomepageAboutSection.vue";
import HomepagePromotionsSection from "@/components/homepage/HomepagePromotionsSection.vue";

import { useRoute, useRouter } from "vue-router";
import { useHomepageStore } from "@/stores/HomepageStore.js";

const homepageStore = useHomepageStore();
const route = useRoute();
const router = useRouter();

let homepageData = null;
try {
  homepageData = await homepageStore.getHomepageData(route.query.preview);
} catch {
  router.push("/dummy");
}



</script>

<template>
  <HomepageBannerSection :bannerDataLV="homepageData.bannerData.lv" :bannerDataEN="homepageData.bannerData.en"
    :bannerDataRU="homepageData.bannerData.ru" />
  <HomepagePromotionsSection :promotionsDataLV="homepageData.promotionsData.lv"
    :promotionsDataEN="homepageData.promotionsData.en" :promotionsDataRU="homepageData.promotionsData.ru" />
  <HomepageCardsSection />
  <HomepageAboutSection />
</template>
