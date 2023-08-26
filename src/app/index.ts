import './index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '../app/BaseIndex.vue'
import router from './providers/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
