import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './style.css'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:windi.css'

import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont.js'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)

for(const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
