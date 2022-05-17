import Vue from 'vue'
import App from './App.vue'
import './vantui.js'
import router from './router/index.js'
import './assets/css/normalize.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')