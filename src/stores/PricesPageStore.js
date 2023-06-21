import { defineStore } from 'pinia'
import { getPricesPage } from '@/services/squidexService.js'

export const usePricesPageStore = defineStore('PricesPageStore', {
  state: () => ({
    banner: {},
    products: {},
    selectedProducts: [],
    maximiseSummary: false
  }),
  actions: {
    async getPricesPageData(urlPreview, selectedLanguage) {
      const response = await getPricesPage(urlPreview, selectedLanguage)

      const bannerData = response.data.data.pricesBanner[`${selectedLanguage}`]
      const productsData = response.data.data.pricesProducts[`${selectedLanguage}`]

      this.banner = bannerData
      this.products = productsData
    }
  }
})
