<script setup>
import HomepageBannerSection from "@/components/homepage/HomepageBannerSection.vue";
import HomepageCardsSection from "@/components/homepage/HomepageCardsSection.vue";
import HomepageAboutSection from "@/components/homepage/HomepageAboutSection.vue";
import HomepagePromotionsSection from "@/components/homepage/HomepagePromotionsSection.vue";

import { useRoute, useRouter } from "vue-router";
import { useHomepageStore } from "@/stores/HomepageStore.js";
import { useTitle } from '@vueuse/core'

const title = useTitle('AKBeauty - Mājaslapa')

const homepageStore = useHomepageStore();
const route = useRoute();
const router = useRouter();

let homepageData = null;
try {
  homepageData = await homepageStore.getHomepageData(route.query.preview);
  title.value = homepageData.tabTitleData.lv
} catch {
  router.push("/badCall");
}



</script>

<template>
  <HomepageBannerSection :bannerDataLV="homepageData.bannerData.lv" :bannerDataEN="homepageData.bannerData.en"
    :bannerDataRU="homepageData.bannerData.ru" />
  <HomepagePromotionsSection :promotionsDataLV="homepageData.promotionsData.lv"
    :promotionsDataEN="homepageData.promotionsData.en" :promotionsDataRU="homepageData.promotionsData.ru" />
  <HomepageCardsSection :treatmentsDataLV="homepageData.treatmentsData.lv"
    :treatmentsDataEN="homepageData.treatmentsData.en" :treatmentsDataRU="homepageData.treatmentsData.ru" />
  <HomepageAboutSection :aboutDataLV="homepageData.aboutData.lv" :aboutDataEN="homepageData.aboutData.en"
    :aboutDataRU="homepageData.aboutData.ru" />
</template>
