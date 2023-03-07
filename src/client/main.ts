import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'

import CrudEl from '../index'

const app = createApp(App)

app.use(CrudEl)

app.mount('#app')
