import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
