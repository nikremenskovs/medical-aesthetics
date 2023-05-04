import { defineStore } from "pinia";
import { getHomepage } from "@/services/squidexService.js";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    banner: {},
    promotions: {},
    treatments: {},
    about: {},
  }),
  actions: {
    async getHomepageData(urlPreview) {
      const response = await getHomepage(urlPreview);

      const bannerData = response.data.data.homepageBanner;
      const promotionsData = response.data.data.homepagePromotions;
      const treatmentsData = response.data.data.homepageTreatments;
      const aboutData = response.data.data.homepageAbout;
     
      this.banner = bannerData;
      this.promotions = promotionsData;
      this.treatments = treatmentsData;
      this.about = aboutData;
      return {
        bannerData: this.banner,
        promotionsData: this.promotions,
        treatmentsData: this.treatments,
        aboutData: this.about,
      };
    },
  },
});
