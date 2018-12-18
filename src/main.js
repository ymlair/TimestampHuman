import Vue from 'vue'
import { Input, Row, Col } from 'element-ui';
import App from './App.vue'

Vue.use(Input)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
