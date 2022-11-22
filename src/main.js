import { createApp } from 'vue'
import App from './App.vue'
import SimpleTypeahead from 'vue3-simple-typeahead';

import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS
import './assets/main.css'

/* createApp(App).mount('#app') */

let app = createApp(App);
app.use(SimpleTypeahead);
app.mount('#app');
