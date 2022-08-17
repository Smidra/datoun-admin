import { createApp } from 'vue'
import App from './App.vue'
import '@formkit/themes/genesis'
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App);
app.use(plugin, defaultConfig).mount('#app')