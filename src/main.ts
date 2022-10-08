import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'
import { plugin, defaultConfig } from '@formkit/vue'
export default {
    setup() {
      onMounted(() => {
        themeChange(false)
      })
    },
  }
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(plugin, defaultConfig).mount('#app')