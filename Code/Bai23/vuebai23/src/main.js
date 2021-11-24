import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Config from './Config'
console.log(Config)

new Vue({
  render: h => h(App),
}).$mount('#app')
