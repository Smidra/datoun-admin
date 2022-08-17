import { createApp } from 'vue'
import App from './App.vue'
import '@formkit/themes/genesis'

import { plugin, defaultConfig } from '@formkit/vue'


createApp(App).use(plugin, defaultConfig).mount('#app')