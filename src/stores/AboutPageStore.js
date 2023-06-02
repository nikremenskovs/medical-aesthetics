import { defineStore } from 'pinia'
import { getAboutPage } from '@/services/squidexService.js'

export const useAboutPageStore = defineStore('AboutPageStore', {
  state: () => ({
    banner: {},
    sectionOne: {},
    sectionTwo: {},
    sectionThree: {}
  }),
  actions: {
    async getAboutPageData(urlPreview, selectedLanguage) {
      const response = await getAboutPage(urlPreview, selectedLanguage)

      const bannerData = response.data.data.aboutBanner[`${selectedLanguage}`]
      const sectionOneData = response.data.data.aboutSectionOne[`${selectedLanguage}`]
      const sectionTwoData = response.data.data.aboutSectionTwo[`${selectedLanguage}`]
      const sectionThreeData = response.data.data.aboutSectionThree[`${selectedLanguage}`]

      this.banner = bannerData
      this.sectionOne = sectionOneData
      this.sectionTwo = sectionTwoData
      this.sectionThree = sectionThreeData
    }
  }
})
