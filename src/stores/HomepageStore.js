import { defineStore } from "pinia";
import { getHomepage } from "@/services/squidexService.js";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    banner: {},
    promotions: {},
    treatments: {},
  }),
  actions: {
    async getHomepageData(urlPreview) {
      const response = await getHomepage(urlPreview);

      const bannerData = response.data.data.homepageBanner;
      const promotionsData = response.data.data.homepagePromotions;
      const treatmentsData = response.data.data.homepageTreatments;
     
      this.banner = bannerData;
      this.promotions = promotionsData;
      this.treatments = treatmentsData;
      return {
        bannerData: this.banner,
        promotionsData: this.promotions,
        treatmentsData: this.treatments,
      };
    },
  },
});
