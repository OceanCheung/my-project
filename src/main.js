import Vue from 'vue'
import App from './App'
import $store from './store/index';

//将全局对象管理绑定到原型上
Vue.prototype.$store = $store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()