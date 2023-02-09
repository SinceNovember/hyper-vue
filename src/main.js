// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router/index'
import ViewUI from 'view-design';

import 'view-design/dist/styles/iview.css';
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/theme/css/index.css'
import 'remixicon/fonts/remixicon.css'
import '@/styles/index.scss'

import '@/utils/utils.js'
import '@/utils/filter.js'
import '@/utils/request.js'
import '@/assets/theme/js/vendor.js'
import '@/promission.js'

Vue.use(ViewUI);

Vue.config.productionTip = false  



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})