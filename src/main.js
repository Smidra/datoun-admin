import { createApp } from 'vue'
import App from './App.vue'
import SimpleTypeahead from 'vue3-simple-typeahead';
import naive from 'naive-ui'

import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS
import "./style.css"
// import './assets/main.css'  

/* createApp(App).mount('#app') */

let app = createApp(App);
app.use(SimpleTypeahead);
app.use(naive)
app.mount('#app');
