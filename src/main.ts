import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CallToActionButton from './components/shared/CallToActionButton.vue'
import ResponsiveImage from './components/shared/ResponsiveImage.vue'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component("CallToActionButton", CallToActionButton);
app.component("ResponsiveImage", ResponsiveImage);