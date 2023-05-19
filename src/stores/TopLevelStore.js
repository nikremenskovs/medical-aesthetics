import { defineStore } from 'pinia'
import { getTopLevel } from '@/services/squidexService.js'

export const useTopLevelStore = defineStore('TopLevelStore', {
  state: () => ({
    selectedLanguage: localStorage.getItem('selectedLanguage') ?? 'lv',
    favicon: '',
    floatingButton: {},
    modal: {},
    navbar: '',
    footer: {},
    notFound: {}
  }),
  getters: {
    getNavbar: (state) => state.navbar
  },
  actions: {
    selectLanguageOption(language) {
      this.selectedLanguage = language
    },
    async getTopLevelData(urlPreview, selectedLanguage) {
      const response = await getTopLevel(urlPreview, selectedLanguage)

      const faviconUrl = response.data.data.favicon.iv[0]
      const floatingButtonData = response.data.data.floatingButton[`${selectedLanguage}`]
      const modalData = response.data.data.contactModal[`${selectedLanguage}`]
      const navbarData = response.data.data.navbar[`${selectedLanguage}`]
      const footerData = response.data.data.footer[`${selectedLanguage}`]
      const notFoundData = response.data.data.notFound[`${selectedLanguage}`]

      this.favicon = faviconUrl
      this.floatingButton = floatingButtonData
      this.modal = modalData
      this.navbar = navbarData
      this.footer = footerData
      this.notFound = notFoundData

      return {
        faviconUrl: this.favicon
      }
    }
  }
})
