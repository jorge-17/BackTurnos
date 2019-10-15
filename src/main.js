// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vSelect from 'vue-select'
import VueSession from 'vue-session'
import 'vue-select/dist/vue-select.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BJumbotron, BButton, BCard } from 'bootstrap-vue'
Vue.component('b-jumbotron', BJumbotron)
Vue.component('b-button', BButton)
Vue.component('b-card', BCard)

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.use(VueSession)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
