import './assets/style.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const pinia = createPinia();
const app = createApp(App);



axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = "http://localhost:8000"

app.use(pinia)

app.use(router)


pinia.use(({store}) => {
    store.router = markRaw(router);
})
app.mount('#app')
