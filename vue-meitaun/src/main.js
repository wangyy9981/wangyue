import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import '@/assets/js/rem.js'
// 引入有赞组件库
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入iconfont
import '@/assets/font/iconfont.css'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
