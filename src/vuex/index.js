import Vue from 'vue';
import Vuex from 'vuex';
import UserModule from './module/user';
//导入模块
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        UserModule
    }
});