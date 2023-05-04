import { defineStore } from "pinia";
import { getHomepage } from "@/services/squidexService.js";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    banner: {},
  }),
  actions: {
    async getHomepageData(urlPreview) {
      const response = await getHomepage(urlPreview);

      const bannerData = response.data.data.homepageBanner;
     
      this.banner = bannerData;
      return {
        bannerData: this.banner,
      };
    },
  },
});
