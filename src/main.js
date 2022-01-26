import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import $http from '@/api'
import 'element-plus/dist/index.css'
import '@/assets/styles/index.scss'
import './permission'

const app = createApp(App)

app.config.globalProperties.$http = $http

app.use(router)
app.use(store)
app.mount('#app')
