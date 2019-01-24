import Vue from 'vue'
import App from './App'
import $store from './store/store';
import _store from "./vuex/index";
Vue.prototype.$store = $store
Vue.prototype._store = _store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()