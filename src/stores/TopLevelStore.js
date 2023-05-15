import { defineStore } from "pinia";
import { getTopLevel } from "@/services/squidexService.js";

export const useTopLevelStore = defineStore("TopLevelStore", {
  state: () => ({
    selectedLanguage: localStorage.getItem('selectedLanguage') ?? 'lv',
    favicon: "",
    floatingButton: {},
    modal: {},
    navbar: "" 
  }),
  getters: {
    getNavbar: (state) => state.navbar
  },
  actions: {
    selectLanguageOption(language) {
      this.selectedLanguage = language
    },
    async getTopLevelData(urlPreview, selectedLanguage) {
      const response = await getTopLevel(urlPreview, selectedLanguage);
      
      const faviconUrl = response.data.data.favicon.iv[0]
      const floatingButtonData = response.data.data.floatingButton[`${selectedLanguage}`]
      const modalData = response.data.data.contactModal[`${selectedLanguage}`]
      const navbarData = response.data.data.navbar[`${selectedLanguage}`]

      this.favicon = faviconUrl
      this.floatingButton = floatingButtonData
      this.modal = modalData
      this.navbar = navbarData

      return {
        faviconUrl: this.favicon,
      };
    },
  },
});
