import { defineStore } from 'pinia'
import { getContactsPage } from '@/services/squidexService.js'

export const useContactsPageStore = defineStore('ContactsPageStore', {
  state: () => ({
    banner: {}
  }),
  actions: {
    async getContactsPageData(urlPreview, selectedLanguage) {
      const response = await getContactsPage(urlPreview, selectedLanguage)

      const bannerData = response.data.data.contactsBanner[`${selectedLanguage}`]

      this.banner = bannerData
    }
  }
})
