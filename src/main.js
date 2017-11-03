// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:7008/'
// axios.defaults.headers.common['Authorization'] = 'sdfgsdfasdfsd'
Vue.prototype.axios = axios
Vue.use(ELEMENT)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
