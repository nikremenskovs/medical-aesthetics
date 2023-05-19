import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createSquidexService } from '@/services/squidexService.js'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import CallToActionButton from './components/shared/CallToActionButton.vue'
import ResponsiveImage from './components/shared/ResponsiveImage.vue'

;(async () => {
  await createSquidexService()
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  const topLevelStore = useTopLevelStore()
  await topLevelStore.getTopLevelData(false, topLevelStore.selectedLanguage)
  app.mount('#app')
  app.component('CallToActionButton', CallToActionButton)
  app.component('ResponsiveImage', ResponsiveImage)
})()
