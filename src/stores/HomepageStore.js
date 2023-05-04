import { defineStore } from "pinia";
import { getHomepage } from "@/services/squidexService.js";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    banner: {},
    promotions: {},
  }),
  actions: {
    async getHomepageData(urlPreview) {
      const response = await getHomepage(urlPreview);

      const bannerData = response.data.data.homepageBanner;
      const promotionsData = response.data.data.homepagePromotions;
     
      this.banner = bannerData;
      this.promotions = promotionsData;
      return {
        bannerData: this.banner,
        promotionsData: this.promotions,
      };
    },
  },
});
