import { defineStore } from "pinia";
import { getTopLevel } from "@/services/squidexService.js";

export const useTopLevelStore = defineStore("TopLevelStore", {
  state: () => ({
    selectedLanguage: "",
    favicon: "",
    floatingButton: {},
    navbar: ""
  }),
  getters: {
    getNavbar: (state) => state.navbar
  },
  actions: {
    selectLanguageOption(language) {
      this.selectedLanguage = language
    },
    async getTopLevelData(urlPreview) {
      const response = await getTopLevel(urlPreview);
      
      const faviconUrl = response.data.data.favicon.iv[0]
      const floatingButtonData = response.data.data.floatingButton
      const navbarData = response.data.data.navbar

      this.selectedLanguage = response.data.data.startingLanguage.iv
      this.favicon = faviconUrl
      this.floatingButton = floatingButtonData
      this.navbar = navbarData

      return {
        faviconUrl: this.favicon,
        floatingButtonData: this.floatingButton,
        navbarData: this.navbar
      };
    },
  },
});
