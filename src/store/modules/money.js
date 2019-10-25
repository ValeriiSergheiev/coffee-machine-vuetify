export default {
  state: {
    paid: null
  },
  mutations: {
    setPay(state, paid) {
      state.paid = paid
    }
  },
  actions: {
    PAY({commit}, paid) {
      commit('setPay', paid)
    }
  },
  getters: {
    getPaid(state) {
      return state.paid
    }
  }
}
