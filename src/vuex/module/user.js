const state = {
    users: []
}

const mutations = {
    addUser(state, data) {
        state.users.push(data);
    }
}

const actions = {
    async addUser({ commit }, data) {
        commit('addUser', data);
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}