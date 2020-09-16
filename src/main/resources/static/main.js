import Vue from './libs/vue.esm.browser.js'
import { store } from './store.js'
import app from './app.js'

new Vue({
  store,
  render: h => h(app)
}).$mount('#app')