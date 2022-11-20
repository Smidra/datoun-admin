import { createApp } from 'vue'
import App from './App.vue'
import '@formkit/themes/genesis'
import { plugin, defaultConfig } from '@formkit/vue'
import VueAutosuggest from "vue-autosuggest";

const app = createApp(App);
app.use(plugin, defaultConfig)
app.use(VueAutosuggest)
app.mount('#app')