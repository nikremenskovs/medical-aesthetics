import { defineStore } from "pinia";
import { getHomepage } from "@/services/squidexService.js";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    tabTitle: {},
    banner: {},
    promotions: {},
    treatments: {},
    about: {},
  }),
  actions: {
    async getHomepageData(urlPreview, selectedLanguage) {
      const response = await getHomepage(urlPreview, selectedLanguage);

      const tabTitleData = response.data.data.homepageTabTitle[`${selectedLanguage}`];
      const bannerData = response.data.data.homepageBanner[`${selectedLanguage}`];
      const promotionsData = response.data.data.homepagePromotions[`${selectedLanguage}`];
      const treatmentsData = response.data.data.homepageTreatments[`${selectedLanguage}`];
      const aboutData = response.data.data.homepageAbout[`${selectedLanguage}`];
     
      this.tabTitle = tabTitleData;
      this.banner = bannerData;
      this.promotions = promotionsData;
      this.treatments = treatmentsData;
      this.about = aboutData;
      // return {
      //   tabTitleData: this.tabTitle,
      //   bannerData: this.banner,
      //   promotionsData: this.promotions,
      //   treatmentsData: this.treatments,
      //   aboutData: this.about,
      // };
    },
  },
});
