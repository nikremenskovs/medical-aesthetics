import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createSquidexService } from "@/services/squidexService.js";
import { createI18n, useI18n } from 'vue-i18n'


const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbacklocale: 'lv', 
  messages: {
    en: {
      bannerText: 'english test'
    },
    lv: {
      bannerText: 'latvian test'
    },
    ru: {
      bannerText: 'russian test'
    }
  }
})

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import CallToActionButton from './components/shared/CallToActionButton.vue'
import ResponsiveImage from './components/shared/ResponsiveImage.vue'

(async () => {
    await createSquidexService();
    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.use(i18n, {
      setup() {
        const { t } = useI18n() 
        return { t }
    }
  })
    app.mount("#app");
  
    app.component("CallToActionButton", CallToActionButton);
    app.component("ResponsiveImage", ResponsiveImage);
  })();