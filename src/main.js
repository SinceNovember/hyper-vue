// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router'


import '@mdi/font/css/materialdesignicons.css'
import 'remixicon/fonts/remixicon.css'
import '@/utils/utils.js'
import '@/assets/theme/js/vendor.js'

import './assets/theme/css/index.css'


Vue.config.productionTip = false
console.log("888")
console.log(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})