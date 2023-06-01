import { defineStore } from 'pinia'
import { getPromoPage } from '@/services/squidexService.js'

export const usePromoPageStore = defineStore('PromoPageStore', {
  state: () => ({
    banner: {},
    cards: []
  }),
  actions: {
    async getPromoPageData(urlPreview, selectedLanguage) {
      const response = await getPromoPage(urlPreview, selectedLanguage)

      const bannerData = response.data.data.promoBanner[`${selectedLanguage}`]
      const cardsData = response.data.data.promoCards[`${selectedLanguage}`]

      this.banner = bannerData
      this.cards = cardsData
    }
  }
})
