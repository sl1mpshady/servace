import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import BootstrapVue from 'bootstrap-vue'
import VueMaterial from 'vue-material'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import vSelect from 'vue-select/src/components/Select.vue'

Vue.use(BootstrapVue)
Vue.use(VueMaterial)
Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
