import { defineStore } from "pinia";
// import { getHomepage } from "@/services/squidexService.js";

export const useTopLevelStore = defineStore("TopLevelStore", {
  state: () => ({
    selectedLanguage: "LV"
  }),
  actions: {
    selectLanguageOption(language) {
      this.selectedLanguage = language
    }
  },
});
