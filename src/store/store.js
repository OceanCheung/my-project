import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        ifTrue: false,
        userId: 1
    },
    mutations: {
        changeIfTrue(state) {
            state.ifTrue = true
        },
        changeUserId(state) {
            state.userId = 2;
        }
    },
    actions: {
        async getUserInfo({ commit }) {
            commit('changeUserId')
        }
    }
})
export default store;