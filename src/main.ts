import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'

import { useAuthStore } from './stores/authStore'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)

const auth = useAuthStore(pinia)
auth.initAuth?.()

app.mount('#app')
